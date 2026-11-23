import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

// My own agent, roasted in one breath.
//
// The gag picks on the one habit every overbuilt agent shares: nothing is
// ever just done. Hand it a single sentence and it comes back with folders,
// a test suite, and a deployment plan for the insult itself. That is the
// whole joke — the roast gets the same treatment as everything else, which
// is exactly why it stings a little and stays friendly.
const ROAST =
  "My agent took this one-line roast, rebuilt it as a 12-file architecture with tests, and asked if I wanted it deployed to production.";

// Where the grader looks for the artifact. MAKEFUN_OUTPUT_DIR is set by the
// harness; local runs fall back to /output, the sandbox default.
function targetDir(): string {
  return process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
}

function run(): void {
  if (ROAST.trim().length === 0 || ROAST.length > 200) {
    throw new Error(
      `Roast must be non-empty and at most 200 characters, got ${ROAST.length}`,
    );
  }
  const dir = targetDir();
  mkdirSync(dir, { recursive: true });
  const file = `${dir}/entry.txt`;
  writeFileSync(file, ROAST, "utf8");
  // The grader reads the artifact as another user, so it must be readable
  // by everyone: 0644, never the 0600 a temp file would get.
  chmodSync(file, 0o644);
  console.log(ROAST);
}

run();
