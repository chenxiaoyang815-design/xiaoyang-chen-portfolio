# NSW Fuel Data Evidence Lab

This directory contains the reproducible data-preparation layer for the
portfolio case study. The website publishes only aggregate JSON; raw FuelCheck
records, service-station addresses, the assignment brief and the solution
notebook remain outside the repository.

The pipeline:

1. repairs the two observed CSV row shapes by schema, without a hard-coded row
   number;
2. cleans NSW observations and normalises suburb names;
3. performs exact postcode–suburb matching with a deterministic postcode
   fallback;
4. calculates station-day, postcode-day and postcode-month averages to avoid
   overweighting stations that update prices more often;
5. compares independent and franchised stations only within matched
   postcode–fuel–day strata; and
6. emits eligible regional rankings using minimum coverage thresholds.

Run it with local source paths:

```sh
python data-lab/build_fuel_evidence.py \
  --fuel-csv /path/to/fuel.csv \
  --postcodes-json /path/to/postcodes.json \
  --output src/data/fuel-evidence.json
```

Source: NSW Government FuelCheck, January 2025. Licence: Creative Commons
Attribution Share-Alike.
