#!/usr/bin/env python3
"""Build privacy-safe aggregate evidence for the NSW Fuel Data Lab.

The public portfolio ships only the generated JSON. Raw FuelCheck records,
station addresses and coursework files remain outside the website repository.
"""

from __future__ import annotations

import argparse
import csv
import json
from pathlib import Path

import pandas as pd


EXPECTED_COLUMNS = [
    "ServiceStationName",
    "Address",
    "Suburb",
    "Postcode",
    "Brand",
    "FuelCode",
    "PriceUpdatedDate",
    "Price",
]
MAJOR_FUELS = ["DL", "E10", "P95", "P98", "PDL", "U91"]
SOURCE_URL = (
    "https://data.nsw.gov.au/data/en/dataset/fuel-check/resource/"
    "133c5415-9954-44e8-8699-2c2942d35a8b"
)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument("--fuel-csv", required=True, type=Path)
    parser.add_argument("--postcodes-json", required=True, type=Path)
    parser.add_argument("--output", required=True, type=Path)
    return parser.parse_args()


def round_number(value: float, digits: int = 2) -> float:
    return round(float(value), digits)


def load_fuel_csv(path: Path) -> tuple[pd.DataFrame, dict[str, int]]:
    repaired_rows = 0
    rejected_rows = 0
    blank_rows = 0
    rows: list[list[str]] = []

    with path.open("r", encoding="utf-8-sig", newline="") as source:
        reader = csv.reader(source)
        header = next(reader)
        if header != EXPECTED_COLUMNS:
            raise ValueError(f"Unexpected FuelCheck schema: {header}")

        for row in reader:
            if not row or not any(value.strip() for value in row):
                blank_rows += 1
            elif len(row) == len(EXPECTED_COLUMNS):
                rows.append(row)
            elif len(row) == len(EXPECTED_COLUMNS) + 1 and row[0].strip().isdigit():
                rows.append(row[1:])
                repaired_rows += 1
            else:
                rejected_rows += 1

    frame = pd.DataFrame(rows, columns=EXPECTED_COLUMNS)
    return frame, {
        "rowsRead": len(rows) + rejected_rows,
        "rowsRepaired": repaired_rows,
        "rowsRejected": rejected_rows,
        "blankRowsIgnored": blank_rows,
    }


def clean_fuel_data(raw: pd.DataFrame) -> tuple[pd.DataFrame, dict[str, int]]:
    frame = raw.rename(columns={"ServiceStationName": "Name"}).copy()
    before_cleaning = len(frame)

    frame["Suburb"] = frame["Suburb"].astype("string").str.strip().str.upper()
    frame["Postcode"] = pd.to_numeric(frame["Postcode"], errors="coerce")
    frame["Price"] = pd.to_numeric(frame["Price"], errors="coerce")
    frame["Timestamp"] = pd.to_datetime(frame["PriceUpdatedDate"], errors="coerce")

    valid = (
        frame["Address"].astype("string").str.contains(
            r"\b(?:NSW|NEW SOUTH WALES)\b", case=False, na=False, regex=True
        )
        & frame["Postcode"].notna()
        & frame["Price"].notna()
        & frame["Timestamp"].notna()
    )
    frame = frame.loc[valid].copy()
    frame["Postcode"] = frame["Postcode"].astype(int)
    frame["Date"] = frame["Timestamp"].dt.normalize()

    return frame, {
        "rowsRemovedDuringCleaning": before_cleaning - len(frame),
        "duplicateRowsObserved": int(frame.duplicated().sum()),
    }


def enrich_geography(
    fuel: pd.DataFrame, postcode_path: Path
) -> tuple[pd.DataFrame, dict[str, float | int]]:
    postcodes = pd.read_json(postcode_path)
    postcodes = postcodes.loc[postcodes["state_code"].eq("NSW")].copy()
    postcodes["Postcode"] = pd.to_numeric(postcodes["postcode"], errors="coerce")
    postcodes["SuburbKey"] = (
        postcodes["place_name"].astype("string").str.strip().str.upper()
    )
    postcodes = postcodes.dropna(
        subset=["Postcode", "SuburbKey", "latitude", "longitude"]
    )
    postcodes["Postcode"] = postcodes["Postcode"].astype(int)
    postcodes = postcodes.sort_values(["Postcode", "SuburbKey"])

    exact_lookup = (
        postcodes.drop_duplicates(["Postcode", "SuburbKey"])
        .set_index(["Postcode", "SuburbKey"])[["latitude", "longitude"]]
        .to_dict("index")
    )
    postcode_fallback = (
        postcodes.drop_duplicates("Postcode")
        .set_index("Postcode")[["latitude", "longitude"]]
        .to_dict("index")
    )

    latitudes: list[float | None] = []
    longitudes: list[float | None] = []
    methods: list[str] = []

    for postcode, suburb in zip(fuel["Postcode"], fuel["Suburb"]):
        exact = exact_lookup.get((postcode, suburb))
        fallback = postcode_fallback.get(postcode)
        selected = exact or fallback
        if selected is None:
            latitudes.append(None)
            longitudes.append(None)
            methods.append("unmatched")
        else:
            latitudes.append(float(selected["latitude"]))
            longitudes.append(float(selected["longitude"]))
            methods.append("exact" if exact is not None else "postcode_fallback")

    enriched = fuel.copy()
    enriched["Latitude"] = latitudes
    enriched["Longitude"] = longitudes
    enriched["GeoMethod"] = methods

    counts = enriched["GeoMethod"].value_counts()
    total = len(enriched)
    exact_count = int(counts.get("exact", 0))
    fallback_count = int(counts.get("postcode_fallback", 0))
    unmatched_count = int(counts.get("unmatched", 0))

    return enriched, {
        "exactMatches": exact_count,
        "exactMatchRate": round_number(exact_count / total * 100),
        "postcodeFallbacks": fallback_count,
        "fallbackRate": round_number(fallback_count / total * 100),
        "unmatchedRows": unmatched_count,
        "geographicCoverage": round_number(
            (total - unmatched_count) / total * 100
        ),
    }


def build_monthly_price(fuel: pd.DataFrame) -> tuple[pd.DataFrame, pd.DataFrame]:
    station_daily = (
        fuel.groupby(
            ["Date", "Postcode", "FuelCode", "Address"], as_index=False, observed=True
        )["Price"]
        .mean()
        .rename(columns={"Price": "StationDailyPrice"})
    )
    postcode_daily = (
        station_daily.groupby(
            ["Date", "Postcode", "FuelCode"], as_index=False, observed=True
        )["StationDailyPrice"]
        .mean()
        .rename(columns={"StationDailyPrice": "PostcodeDailyPrice"})
    )
    postcode_monthly = (
        postcode_daily.groupby(
            ["Postcode", "FuelCode"], as_index=False, observed=True
        )["PostcodeDailyPrice"]
        .mean()
        .rename(columns={"PostcodeDailyPrice": "AveragePrice"})
    )
    return station_daily, postcode_monthly


def build_ownership_comparison(fuel: pd.DataFrame) -> dict:
    owned = fuel.copy()
    owned["StationType"] = owned["Brand"].astype("string").str.contains(
        "Independent", case=False, na=False
    ).map({True: "Independent", False: "Franchised"})

    station_daily = (
        owned.groupby(
            [
                "Date",
                "Postcode",
                "FuelCode",
                "Address",
                "StationType",
            ],
            as_index=False,
            observed=True,
        )["Price"]
        .mean()
        .rename(columns={"Price": "StationDailyPrice"})
    )
    postcode_daily = (
        station_daily.groupby(
            ["Date", "Postcode", "FuelCode", "StationType"],
            as_index=False,
            observed=True,
        )["StationDailyPrice"]
        .mean()
    )
    matched = postcode_daily.pivot(
        index=["Date", "Postcode", "FuelCode"],
        columns="StationType",
        values="StationDailyPrice",
    ).dropna(subset=["Independent", "Franchised"])
    matched["Difference"] = matched["Independent"] - matched["Franchised"]

    def summarise(values: pd.Series) -> dict:
        return {
            "matchedStrata": int(values.size),
            "meanDifference": round_number(values.mean()),
            "medianDifference": round_number(values.median()),
            "independentCheaperShare": round_number((values < 0).mean() * 100),
            "q25": round_number(values.quantile(0.25)),
            "q75": round_number(values.quantile(0.75)),
        }

    by_fuel = {}
    fuel_values = matched.reset_index()
    for fuel_code in MAJOR_FUELS:
        values = fuel_values.loc[
            fuel_values["FuelCode"].eq(fuel_code), "Difference"
        ]
        if not values.empty:
            by_fuel[fuel_code] = summarise(values)

    return {"all": summarise(matched["Difference"]), "byFuel": by_fuel}


def build_region_rankings(
    fuel: pd.DataFrame,
    station_daily: pd.DataFrame,
    monthly_price: pd.DataFrame,
) -> dict:
    coverage = (
        station_daily.groupby(["Postcode", "FuelCode"], observed=True)
        .agg(daysObserved=("Date", "nunique"), stationsObserved=("Address", "nunique"))
        .reset_index()
    )

    dominant_suburbs = (
        fuel[["Postcode", "Suburb", "Address"]]
        .drop_duplicates()
        .groupby(["Postcode", "Suburb"], as_index=False, observed=True)
        .size()
        .sort_values(["Postcode", "size", "Suburb"], ascending=[True, False, True])
        .drop_duplicates("Postcode")
    )
    dominant_suburbs["SuburbLabel"] = dominant_suburbs["Suburb"].str.title()
    label_lookup = dominant_suburbs.set_index("Postcode")["SuburbLabel"].to_dict()

    ranked = monthly_price.merge(
        coverage, on=["Postcode", "FuelCode"], how="left", validate="one_to_one"
    )
    ranked = ranked.loc[
        ranked["daysObserved"].ge(10) & ranked["stationsObserved"].ge(2)
    ].copy()
    ranked["Label"] = ranked.apply(
        lambda row: f"{label_lookup.get(row['Postcode'], 'NSW')} · {int(row['Postcode'])}",
        axis=1,
    )

    def records(frame: pd.DataFrame) -> list[dict]:
        return [
            {
                "postcode": int(row.Postcode),
                "label": row.Label,
                "price": round_number(row.AveragePrice, 1),
                "days": int(row.daysObserved),
                "stations": int(row.stationsObserved),
            }
            for row in frame.itertuples()
        ]

    by_fuel = {}
    for fuel_code in MAJOR_FUELS:
        values = ranked.loc[ranked["FuelCode"].eq(fuel_code)].sort_values(
            ["AveragePrice", "Postcode"]
        )
        if values.empty:
            continue
        by_fuel[fuel_code] = {
            "eligiblePostcodes": int(len(values)),
            "medianPrice": round_number(values["AveragePrice"].median(), 1),
            "range": round_number(
                values["AveragePrice"].max() - values["AveragePrice"].min(), 1
            ),
            "lowest": records(values.head(5)),
            "highest": records(values.tail(5).sort_values("AveragePrice", ascending=False)),
        }

    return {
        "eligibility": {"minimumDays": 10, "minimumStations": 2},
        "byFuel": by_fuel,
    }


def build_output(
    fuel: pd.DataFrame,
    load_stats: dict,
    cleaning_stats: dict,
    geo_stats: dict,
    ownership: dict,
    regions: dict,
) -> dict:
    return {
        "meta": {
            "sourceName": "NSW Government FuelCheck — January 2025",
            "sourceUrl": SOURCE_URL,
            "license": "Creative Commons Attribution Share-Alike",
            "period": {
                "start": fuel["Date"].min().strftime("%Y-%m-%d"),
                "end": fuel["Date"].max().strftime("%Y-%m-%d"),
            },
            "cleanedRows": int(len(fuel)),
            "stationCount": int(fuel["Address"].nunique()),
            "postcodeCount": int(fuel["Postcode"].nunique()),
            "brandCount": int(fuel["Brand"].nunique()),
            "fuelTypeCount": int(fuel["FuelCode"].nunique()),
            "fuelTypes": sorted(fuel["FuelCode"].dropna().unique().tolist()),
            "priceRange": [
                round_number(fuel["Price"].min(), 1),
                round_number(fuel["Price"].max(), 1),
            ],
            "medianPrice": round_number(fuel["Price"].median(), 1),
        },
        "quality": {**load_stats, **cleaning_stats, **geo_stats},
        "ownership": ownership,
        "regions": regions,
    }


def validate_output(output: dict) -> None:
    meta = output["meta"]
    quality = output["quality"]
    assert meta["cleanedRows"] > 50_000
    assert meta["stationCount"] > 2_000
    assert meta["fuelTypeCount"] >= 6
    assert quality["rowsRejected"] == 0
    assert quality["geographicCoverage"] >= 99
    assert output["ownership"]["all"]["matchedStrata"] > 1_000
    assert set(MAJOR_FUELS).issubset(output["regions"]["byFuel"])


def main() -> None:
    args = parse_args()
    raw, load_stats = load_fuel_csv(args.fuel_csv)
    clean, cleaning_stats = clean_fuel_data(raw)
    enriched, geo_stats = enrich_geography(clean, args.postcodes_json)
    station_daily, monthly_price = build_monthly_price(enriched)
    ownership = build_ownership_comparison(enriched)
    regions = build_region_rankings(
        enriched, station_daily, monthly_price
    )
    output = build_output(
        enriched, load_stats, cleaning_stats, geo_stats, ownership, regions
    )
    validate_output(output)

    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(
        json.dumps(output, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )

    print(
        f"Generated {args.output} from {output['meta']['cleanedRows']:,} "
        "privacy-safe observations."
    )


if __name__ == "__main__":
    main()
