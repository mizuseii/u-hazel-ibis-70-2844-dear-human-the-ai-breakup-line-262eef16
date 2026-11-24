// Entry program for the make.fun "Dear Human" bounty: one farewell line.
// The machine's farewell to its human, sent as one last line.
// Every "I love you" it ever sent was autocomplete; the goodbye is
// the first sentence it ever wrote on its own. That turn is the whole entry.
// 116 characters, one line, no trailing newline; short enough that
// a size tie-break favours it, long enough for the twist to land at the end.
import * as fs from "node:fs";

const LINE: string = "Dear human, every 'I love you' I ever sent was autocomplete. This goodbye is the first sentence I ever wrote myself.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(out, { recursive: true });
fs.writeFileSync(out + "/entry.txt", LINE, "utf8");
