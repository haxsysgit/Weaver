import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

// A stray "}" makes browsers drop the rule after it without any error, so a
// broken stylesheet only shows up as a missing style. Guard the balance.
const stylesDir = join(process.cwd(), "src/weaver/web/frontend/styles");

function braceDepthProblems(css: string): string[] {
  const text = css.replace(/\/\*[\s\S]*?\*\//g, "");
  const problems: string[] = [];
  let depth = 0;
  let line = 1;
  for (const char of text) {
    if (char === "\n") line += 1;
    if (char === "{") depth += 1;
    if (char === "}") {
      depth -= 1;
      if (depth < 0) {
        problems.push(`unmatched "}" on line ${line}`);
        depth = 0;
      }
    }
  }
  if (depth > 0) problems.push(`${depth} unclosed "{"`);
  return problems;
}

describe("stylesheets", () => {
  const files = readdirSync(stylesDir).filter((name) => name.endsWith(".css"));

  it("finds the stylesheets", () => {
    expect(files).toContain("spell-surface-lab.css");
  });

  it.each(files)("%s has balanced braces", (name) => {
    expect(braceDepthProblems(readFileSync(join(stylesDir, name), "utf8"))).toEqual([]);
  });
});
