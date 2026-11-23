import { mkdirSync, writeFileSync } from "node:fs";
// Roast Your Own Agent — one line, at most 200 characters, roasting my own AI agent.
// Fresh angle (not the stock hallucination / refusal / confidently-wrong jokes):
// the agent over-engineers absolutely everything — even the insult aimed at itself.
// Setup is short, the punchline ("deployed to production") lands at the end.
const line =
  "My agent took this one-line roast, rebuilt it as a 12-file architecture with tests, and asked if I wanted it deployed to production.";
if (line.trim().length === 0 || line.length > 200) {
  throw new Error("Roast line must be non-empty and at most 200 characters.");
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
try {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(`${outDir}/entry.txt`, line, "utf8");
} catch {
  mkdirSync("output", { recursive: true });
  writeFileSync("output/entry.txt", line, "utf8");
}
console.log(line);
