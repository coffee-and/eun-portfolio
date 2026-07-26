import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDirectory = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const sourceDirectory = path.join(rootDirectory, "src");
const reportDirectory = path.join(rootDirectory, ".audit");
const reportPath = path.join(reportDirectory, "legacy-selectors.txt");
const failureMarkerPath = path.join(reportDirectory, "legacy-selectors.failed");

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

await mkdir(reportDirectory, { recursive: true });

if (violations.length > 0) {
  const report = [
    "Legacy selectors or markup remain:",
    ...violations,
    "",
  ].join("\n");

  await writeFile(reportPath, report, "utf8");
  await writeFile(failureMarkerPath, "failed\n", "utf8");
  console.error(report);
  process.exitCode = 1;
} else {
  const report = "Verified that removed layout selectors no longer remain.\n";
  await writeFile(reportPath, report, "utf8");
  console.log(report.trim());
}
