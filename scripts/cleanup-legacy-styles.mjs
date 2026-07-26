import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDirectory = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const stylesDirectory = path.join(rootDirectory, "src", "styles");

const legacyTokens = [
  "about-editorial__profile",
  "about-editorial__portrait",
  "skills-editorial__groups",
  "skill-ledger",
  "youtube-card__index",
];

const removeLegacySelectors = (source) => {
  let result = source;
  let previousResult = "";

  while (result !== previousResult) {
    previousResult = result;
    result = result.replace(/([^{}]+)\{([^{}]*)\}/g, (rule, selectorText, declarations) => {
      if (!legacyTokens.some((token) => selectorText.includes(token))) {
        return rule;
      }

      const selectors = selectorText.split(",");
      const retainedSelectors = selectors.filter(
        (selector) => !legacyTokens.some((token) => selector.includes(token)),
      );

      if (retainedSelectors.length === 0) {
        return "";
      }

      return `${retainedSelectors.join(",").replace(/\s+$/, "")} {${declarations}}`;
    });
  }

  return result
    .replace(/\n{4,}/g, "\n\n\n")
    .replace(/[ \t]+\n/g, "\n");
};

const appendDeclaration = (source, selectorPattern, declaration) =>
  source.replace(selectorPattern, (rule) => {
    if (rule.includes(declaration)) {
      return rule;
    }

    return rule.replace(/\n\}$/, `\n  ${declaration}\n}`);
  });

const replaceDeclaration = (source, selector, property, value) =>
  source.replace(
    new RegExp(`(${selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")} \\{[^{}]*?)${property}:[^;]+;`, "g"),
    `$1${property}: ${value};`,
  );

const styleFiles = (await readdir(stylesDirectory))
  .filter((fileName) => fileName.endsWith(".css"))
  .map((fileName) => path.join(stylesDirectory, fileName));

for (const filePath of styleFiles) {
  const source = await readFile(filePath, "utf8");
  let updatedSource = removeLegacySelectors(source);
  const fileName = path.basename(filePath);

  if (fileName === "frame-form.css") {
    updatedSource = appendDeclaration(
      updatedSource,
      /\.career-index strong \{[^{}]*\n\}/,
      "overflow-wrap: break-word;",
    );
    updatedSource = appendDeclaration(
      updatedSource,
      /\.career-story__header h3 \{[^{}]*\n\}/,
      "overflow-wrap: break-word;",
    );
    updatedSource = replaceDeclaration(
      updatedSource,
      ".youtube-card",
      "grid-template-columns",
      "minmax(0, 1fr)",
    );
    updatedSource = replaceDeclaration(
      updatedSource,
      ".youtube-card__visual",
      "grid-column",
      "1",
    );
    updatedSource = replaceDeclaration(
      updatedSource,
      ".youtube-card__body",
      "grid-column",
      "1",
    );
  }

  if (fileName === "resume.css") {
    updatedSource = appendDeclaration(
      updatedSource,
      /\.resume-info-card h3,\n\.resume-skill-card h3,\n\.resume-project-card h3 \{[^{}]*\n\}/,
      "overflow-wrap: break-word;",
    );
  }

  if (updatedSource !== source) {
    await writeFile(filePath, updatedSource, "utf8");
    console.log(`Cleaned ${path.relative(rootDirectory, filePath)}`);
  }
}

const remainingViolations = [];

for (const filePath of styleFiles) {
  const source = await readFile(filePath, "utf8");

  legacyTokens.forEach((token) => {
    if (source.includes(token)) {
      remainingViolations.push(`${path.relative(rootDirectory, filePath)} contains ${token}`);
    }
  });
}

if (remainingViolations.length > 0) {
  throw new Error(remainingViolations.join("\n"));
}
