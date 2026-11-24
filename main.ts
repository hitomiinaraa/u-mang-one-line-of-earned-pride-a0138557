import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "The apprentice welder who burned his first three joints held up the fourth, straight and clean, and the foreman tapped it once and said, 'That'll hold.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
