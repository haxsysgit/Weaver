/* Theme token contract tests (node --test, no deps).
 * The Shadow Slave palette is the design language; these tokens are the
 * contract every component styles against. If a token is renamed or
 * dropped, this test fails so the theme stays consistent.
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const css = readFileSync(
  new URL("../../src/weaver/web/static/theme.css", import.meta.url),
  "utf-8",
);

function hasToken(name) {
  return new RegExp(`--${name}\\s*:`).test(css);
}

test("theme.css defines the core shadow-slave surface tokens", () => {
  for (const t of ["bg-0", "bg-1", "bg-2", "surface", "surface-2", "hairline"]) {
    assert.ok(hasToken(t), `missing --${t}`);
  }
});

test("theme.css defines the text tokens", () => {
  for (const t of ["text", "text-2", "text-3", "text-4"]) {
    assert.ok(hasToken(t), `missing --${t}`);
  }
});

test("theme.css defines the accent tokens (weaver crimson + fate silver)", () => {
  for (const t of ["accent", "accent-hover", "accent-dim", "silver"]) {
    assert.ok(hasToken(t), `missing --${t}`);
  }
});

test("theme.css defines the danger/error token", () => {
  assert.ok(hasToken("danger"), "missing --danger");
});

test("theme.css defines the structural tokens", () => {
  for (const t of ["radius-composer", "radius-card", "radius-modal", "sidebar-w", "rail-w"]) {
    assert.ok(hasToken(t), `missing --${t}`);
  }
});

test("theme.css is a real Shadow Slave palette, not the generic chatgpt blue", () => {
  // The old theme had a blue accent (--accent: #7ab7ff). The new theme must
  // NOT ship a blue accent; it ships blood-crimson (weaver eye) + pale silver.
  const blue = /#7ab7ff/i.test(css);
  assert.ok(!blue, "blue accent leaked back into the theme");
});

test("theme.css has no external font or asset imports", () => {
  assert.ok(!/@import|url\(/.test(css), "theme.css must not fetch external assets");
});
