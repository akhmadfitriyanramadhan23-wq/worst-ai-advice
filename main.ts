// worst-ai-advice
// One line of the worst advice an AI could give, in 140 characters or fewer.
// The classic bad take, delivered in the confident, tidy voice of an AI
// assistant: ship it on Friday evening and let real users find the bugs.
// Friday deploys, production as the test suite, rollbacks framed as fear.
// Node 22, stdlib only, no network; writes /output/entry.txt.
// Gate: 1-140 characters (this entry: 125 code points).
// Deterministic: two runs write byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Just deploy straight to production on a Friday evening — real users are the best testers, and rollbacks are for the cautious.";

const points = [...line].length;
if (points < 1 || points > 140) {
  throw new Error(`entry must be 1-140 characters; got ${points}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
