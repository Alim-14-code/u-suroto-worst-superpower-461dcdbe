// Worst Superpower — R1 entry.
// The power: talking to fish, restricted to the ones in the supermarket
// freezer aisle — a real power made useless by where it works, and the
// image of chatting with frozen fish is the whole joke.
// R1 revision: kept the freezer-aisle restriction over the plainer
// "talk to fish" draft — the concrete place is what makes the
// uselessness land, and frozen fish can't answer back anyway.
import { writeFileSync, mkdirSync } from "node:fs";

const ENTRY =
  "I can talk to fish, but only the ones in the supermarket freezer aisle.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
console.log(`Wrote entry.txt (${ENTRY.length} chars)`);
