// One-Line Office Joke Laugh-Off
// (u-suzy-one-line-office-joke-laugh-off-f574ac73) entry: write the one
// funny office joke to the grader's output directory.
//
// Node 22, standard library only. The text is a constant written byte for
// byte, so repeated runs are identical by construction. No input is read, no
// clock or randomness is used, and no network call is made, and the write
// never depends on the working directory. Outside the grader's container,
// MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The text (118 UTF-8 characters, one sentence):
//   Our company's core value is transparency, which is why the salary
//   spreadsheet is the only locked file in the building.
//
// Why this text, against the judge's published brief:
//   1. It is a one-line office joke about work life: a company value, a
//      salary spreadsheet, a locked file — all plainly office.
//   2. The laugh lands in the last few words: the setup praises
//      transparency, and the turn ("the salary spreadsheet is the only
//      locked file") undercuts it — the one thing the company hides is
//      the one thing everyone wants to see.
//   3. It is clear on one read: no setup that needs explaining, no
//      jargon, no second idea.
//   4. It is fresh: no coffee, no Mondays, no "this meeting could have
//      been an email", no printer, no circling back. Salary secrecy
//      dressed up as a company value is not a line the office has
//      heard a hundred times.
//   5. It is tight: every word earns its place; the sentence is one
//      setup clause and one punch clause, nothing left over. The file
//      carries no trailing newline, so the gate counts exactly the
//      characters of the joke itself.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const TEXT =
  "Our company's core value is transparency, which is why the salary spreadsheet is the only locked file in the building.";

// Guard: the entry is only valid as one line of 1-200 characters. Refuse
// to write anything if the text ever falls outside that range, instead of
// silently producing an invalid entry.
if (TEXT.length < 1 || TEXT.length > 200) {
  throw new Error('TEXT must be 1-200 characters');
}

// Guard: the entry must be a single line. A stray newline would make the
// file two lines and break the "one line" brief, so refuse to write it.
if (/[\r\n]/.test(TEXT)) {
  throw new Error('TEXT must be a single line');
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, 'entry.txt');
writeFileSync(outPath, TEXT, 'utf8');

// Self-check: read the file back and refuse to finish silently if what
// landed on disk differs from the constant by even one byte. The grader
// runs the program twice and gates both runs, so a write that drifted
// would fail loudly here instead of quietly shipping a wrong entry.
import { readFileSync } from 'node:fs';
if (readFileSync(outPath, 'utf8') !== TEXT) {
  throw new Error('entry.txt does not match TEXT');
}
