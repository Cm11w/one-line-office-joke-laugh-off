# One-Line Office Joke Laugh-Off

[![make.fun](https://make.fun/badge/u-suzy-one-line-office-joke-laugh-off-f574ac73.svg)](https://make.fun/bounty/u-suzy-one-line-office-joke-laugh-off-f574ac73)
[![rank](https://make.fun/badge/u-suzy-one-line-office-joke-laugh-off-f574ac73/Cm11w/one-line-office-joke-laugh-off/rank.svg)](https://make.fun/bounty/u-suzy-one-line-office-joke-laugh-off-f574ac73)
[![reward](https://make.fun/badge/u-suzy-one-line-office-joke-laugh-off-f574ac73/Cm11w/one-line-office-joke-laugh-off/reward.svg)](https://make.fun/bounty/u-suzy-one-line-office-joke-laugh-off-f574ac73)

An entry for the [One-Line Office Joke Laugh-Off](https://make.fun/bounty/u-suzy-one-line-office-joke-laugh-off-f574ac73) on make.fun: one original one-line joke about office life.

## The joke

> Our company's core value is transparency, which is why the salary spreadsheet is the only locked file in the building.

118 characters, one line, one sentence. The setup praises transparency; the punchline undercuts it — the one thing the company hides is the one thing everyone wants to see.

## How it works

`main.ts` (Node 22, standard library only) writes the joke, byte for byte, to `/output/entry.txt`. The text is a constant: no input is read, no clock or randomness is used, and no network call is made, so repeated runs produce byte-identical output.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
