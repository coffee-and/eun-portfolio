import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDirectory = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const sourceDirectory = path.join(rootDirectory, "src");

const legacyTokens = [
  "about-editorial__profile",
  "about-editorial__portrait",
  "skills-editorial__groups",
  "skill-ledger",
  "youtube-card__index",
];

const searchableExtensions = new Set([
  ".css",
  ".js",
  ".jsx",
  ".ts",
  ".tsx",
]);

const walkFiles = async (directory) => {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const absolutePath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...await walkFiles(absolutePath));
    } else if (
      entry.isFile() &&
      searchableExtensions.has(path.extname(entry.name).toLowerCase())
    ) {
      files.push(absolutePath);
    }
  }

  return files;
};

const violations = [];

for (const filePath of await walkFiles(sourceDirectory)) {
  const relativePath = path.relative(rootDirectory, filePath).replaceAll(path.sep, "/");
  const lines = (await readFile(filePath, "utf8")).split("\n");

  lines.forEach((line, lineIndex) => {
    legacyTokens.forEach((token) => {
      if (line.includes(token)) {
        violations.push(`${relativePath}:${lineIndex + 1} contains ${token}`);
      }
    });
  });
}

if (violations.length > 0) {
  console.error("Legacy selectors or markup remain:");
  violations.forEach((violation) => console.error(`- ${violation}`));
  process.exitCode = 1;
} else {
  console.log("Verified that removed layout selectors no longer remain.");
}
