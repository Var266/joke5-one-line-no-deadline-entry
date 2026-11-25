import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I missed the deadline because I spent all morning drafting the perfect apology for missing the deadline.";

// Gate guard: the bounty requires one single line of 1-200 characters.
if (!entry.trim() || entry.length > 200 || entry.includes("\n")) {
  throw new Error(`entry fails the gate: ${entry.length} chars, single line required`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
