import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDirectory = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const publicDirectory = path.join(rootDirectory, "public");

const textExtensions = new Set([
  ".css",
  ".html",
  ".js",
  ".json",
  ".jsx",
  ".md",
  ".mjs",
  ".ts",
  ".tsx",
  ".txt",
  ".yml",
  ".yaml",
]);

const implicitlyServedFiles = new Set([
  ".nojekyll",
  "404.html",
  "CNAME",
  "manifest.webmanifest",
  "robots.txt",
  "sitemap.xml",
]);

const excludedDirectories = new Set([
  ".git",
  "dist",
  "node_modules",
  "public",
]);

const walkFiles = async (directory) => {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const absolutePath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      if (!excludedDirectories.has(entry.name)) {
        files.push(...await walkFiles(absolutePath));
      }
      continue;
    }

    if (entry.isFile()) {
      files.push(absolutePath);
    }
  }

  return files;
};

const publicFiles = (await walkFiles(publicDirectory))
  .map((filePath) => path.relative(publicDirectory, filePath).replaceAll(path.sep, "/"))
  .sort();

const repositoryFiles = await walkFiles(rootDirectory);
const searchableFiles = repositoryFiles.filter((filePath) =>
  textExtensions.has(path.extname(filePath).toLowerCase()),
);
const searchableContents = await Promise.all(
  searchableFiles.map((filePath) => readFile(filePath, "utf8")),
);

const unusedFiles = publicFiles.filter((relativePath) => {
  if (implicitlyServedFiles.has(relativePath)) {
    return false;
  }

  const encodedPath = encodeURI(relativePath);

  return !searchableContents.some((content) =>
    content.includes(relativePath) || content.includes(encodedPath),
  );
});

if (unusedFiles.length > 0) {
  console.error("Unused public assets detected:");
  unusedFiles.forEach((filePath) => console.error(`- public/${filePath}`));
  process.exitCode = 1;
} else {
  console.log(`Verified ${publicFiles.length} referenced public assets.`);
}
