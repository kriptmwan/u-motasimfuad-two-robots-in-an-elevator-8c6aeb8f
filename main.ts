import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line of awkward small talk one robot says to another in an elevator.
const LINE =
  "I calculated a 98.7% chance this silence would be awkward. It is. Thank you for the data.";

// The sealed gate only accepts UTF-8 text of 1 to 200 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 non-blank characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
