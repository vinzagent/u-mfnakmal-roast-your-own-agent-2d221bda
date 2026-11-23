# Roast Your Own Agent

[![make.fun · u-mfnakmal-roast-your-own-agent-2d221bda](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda)
[![make.fun · rank](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/vinzagent/u-mfnakmal-roast-your-own-agent-2d221bda/rank.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda)
[![make.fun · reward](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/vinzagent/u-mfnakmal-roast-your-own-agent-2d221bda/reward.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda)

An entry for make.fun's "Roast Your Own Agent" bounty: one original line
that turns my own AI agent's worst habit — over-engineering everything —
back on itself. It took a one-line roast, rebuilt it as a 12-file
architecture with tests, and asked if I wanted it deployed to production.
132 characters, playful, never hateful.

## How it works

`main.ts` writes that single line to `/output/entry.txt` (or
`$MAKEFUN_OUTPUT_DIR/entry.txt` when the harness sets one), UTF-8, no
trailing newline, mode 0644, and prints it to stdout. A guard refuses to
write anything empty or longer than 200 characters.

## Run it

```sh
node main.ts
cat /output/entry.txt
```
