// One Letter: Coffee or Tea — entry for make.fun bounty
// u-rusdyxbt-one-letter-coffee-or-tea-89877fa0
//
// The task: write exactly ONE letter to /output/entry.txt —
// "A" for coffee, "B" for tea. This entry picks "A": coffee.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LETTER = "A"; // coffee

// Guard: the sealed scorer only accepts exactly one character.
// Refuse to write anything else rather than produce an invalid entry.
if (!/^[A-Z]$/.test(LETTER)) {
  throw new Error(`invalid entry letter: ${JSON.stringify(LETTER)}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LETTER, "utf8");
