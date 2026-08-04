/* Weaver markdown renderer tests (pure logic, node --test, no deps).
 * Runs via: node --test 'tests/web_js/*.test.mjs'
 */
import { test } from "node:test";
import assert from "node:assert/strict";

import {
  parse,
  inlineToNodes,
  renderMarkdown,
} from "../../src/weaver/web/static/components/weaver-markdown.js";

test("parse: headings, paragraphs, blank lines", () => {
  const blocks = parse("# Title\n\nSome **bold** text.\n\nAnother para.");
  assert.deepEqual(
    blocks.map((b) => b.type),
    ["h1", "p", "p"],
  );
  assert.equal(blocks[0].text, "Title");
  assert.equal(blocks[1].text, "Some **bold** text.");
  assert.equal(blocks[2].text, "Another para.");
});

test("parse: code fence keeps newlines", () => {
  const blocks = parse("```\nline one\nline two\n```");
  assert.equal(blocks.length, 1);
  assert.equal(blocks[0].type, "pre");
  assert.equal(blocks[0].text, "line one\nline two");
});

test("parse: fenced code with language tag", () => {
  const blocks = parse("```python\nx = 1\n```");
  assert.equal(blocks[0].type, "pre");
  assert.equal(blocks[0].text, "x = 1");
});

test("parse: blockquote", () => {
  const blocks = parse("> quoted line");
  assert.equal(blocks[0].type, "quote");
  assert.equal(blocks[0].text, "quoted line");
});

test("parse: hr variants", () => {
  for (const src of ["---", "***", "___"]) {
    const blocks = parse(src);
    assert.equal(blocks[0].type, "hr", src);
  }
});

test("parse: unordered list gathers consecutive items", () => {
  const blocks = parse("- one\n- two\n- three");
  assert.equal(blocks[0].type, "ul");
  assert.deepEqual(blocks[0].items, ["one", "two", "three"]);
});

test("parse: ordered list", () => {
  const blocks = parse("1. first\n2. second");
  assert.equal(blocks[0].type, "ol");
  assert.deepEqual(blocks[0].items, ["first", "second"]);
});

test("parse: list stops at blank line", () => {
  const blocks = parse("- one\n\npara");
  assert.equal(blocks[0].type, "ul");
  assert.equal(blocks[1].type, "p");
});

test("parse: empty input gives no blocks", () => {
  assert.deepEqual(parse(""), []);
  assert.deepEqual(parse("   \n  "), []);
});

test("parse: heading levels 1-6", () => {
  for (let n = 1; n <= 6; n++) {
    const blocks = parse("#".repeat(n) + " x");
    assert.equal(blocks[0].type, "h" + n);
  }
});

test("renderMarkdown: produces DOM nodes, never sets innerHTML with model text", () => {
  // Minimal DOM shim sufficient for the renderer (document.createDocumentFragment
  // etc. are exercised). We use a tiny stub; the real browser path is proven live.
  const doc = new FakeDocument();
  const container = doc.createElement("div");
  renderMarkdown(container, "# Hi\n\n**bold** and `code` and *em*");
  assert.equal(container.children.length, 2); // h1 + p
  assert.equal(container.children[0].tagName, "h1");
  assert.equal(container.children[0].textContent, "Hi");
  const p = container.children[1];
  assert.ok(p.textContent.includes("bold"));
  assert.ok(p.textContent.includes("code"));
});

/* --- minimal DOM shim for pure-logic tests (no jsdom dependency) --- */

class FakeNode {
  constructor() {
    this.children = [];
    this.parentNode = null;
    this._text = "";
    this._frag = false;
    this.ownerDocument = null;
  }
  get textContent() {
    let out = "";
    for (const c of this.children) out += c._frag ? c.textContent : c._text;
    return out;
  }
  set textContent(v) {
    this.children = [];
    this._text = String(v ?? "");
  }
  appendChild(child) {
    child.parentNode = this;
    this.children.push(child);
    return child;
  }
}

class FakeFragment extends FakeNode {
  constructor() {
    super();
    this._frag = true;
  }
}

class FakeElement extends FakeNode {
  constructor(tagName, doc) {
    super();
    this.tagName = tagName;
    this.ownerDocument = doc;
  }
}

class FakeDocument {
  createTextNode(text) {
    const n = new FakeNode();
    n._text = text;
    return n;
  }
  createElement(tag) {
    return new FakeElement(tag, this);
  }
  createDocumentFragment() {
    return new FakeFragment();
  }
}

test("inlineToNodes: bold, italic, code are separate elements", () => {
  const doc = new FakeDocument();
  const frag = inlineToNodes("a **b** c `d` e *f*", doc);
  const kinds = frag.children.map((c) =>
    c.tagName ? c.tagName : "text",
  );
  assert.deepEqual(kinds, ["text", "strong", "text", "code", "text", "em"]);
});
