import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const evidence = JSON.parse(
  await readFile(new URL("../src/data/fuel-evidence.json", import.meta.url), "utf8"),
);

assert.equal(evidence.meta.cleanedRows, 59256);
assert.equal(evidence.quality.rowsRejected, 0);
assert.equal(evidence.quality.duplicateRowsObserved, 0);
assert.equal(evidence.quality.geographicCoverage, 100);
assert.ok(evidence.quality.exactMatchRate > 97);
assert.ok(evidence.ownership.all.matchedStrata > 1000);
assert.ok(evidence.ownership.all.independentCheaperShare > 50);
assert.deepEqual(
  Object.keys(evidence.regions.byFuel),
  ["DL", "E10", "P95", "P98", "PDL", "U91"],
);

console.log("Fuel evidence validation passed.");
