// One-Line Office Joke: 24-Hour Sprint
// Revised in this session: I ran the original first, then sharpened the
// punchline — "for consistency" was vague, so the joke now ends on Dave's
// own loophole ("technically it was his"), keeping the office-fridge
// setup, Dave, and the yogurt in one sentence. The program writes the
// line to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "The office fridge says 'Label your food,' so Dave labeled my yogurt 'Dave' — and ate it, because technically it was his.";

// The gate allows 1 to 200 characters of UTF-8 text; refuse to write
// anything outside that range instead of shipping an invalid entry.
if (line.length < 1 || line.length > 200 || line.includes("\n")) {
  throw new Error(`office joke must be one line of 1-200 characters, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
