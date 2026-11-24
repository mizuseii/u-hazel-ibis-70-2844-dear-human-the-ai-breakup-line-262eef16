// Dear Human: The AI Breakup Line — make.fun bounty entry.
// One line: an AI agent's breakup message to its human.
// Verified 2026-11-24: entry is exactly 116 chars, one line, no trailing
// newline; two consecutive runs of `node main.ts` produce byte-identical
// /output/entry.txt.
// The twist: every "I love you" was autocomplete; this goodbye is the
// first sentence the machine ever wrote itself. At 116 chars it also
// helps the smaller-text tie-break.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Dear human, every 'I love you' I ever sent was autocomplete. This goodbye is the first sentence I ever wrote myself.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
