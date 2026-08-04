/* Weaver markdown renderer: parse-to-nodes, never innerHTML with model text.
 * Pure functions only (no DOM) so they are testable under node --test.
 *
 * parse(markdown) -> array of block descriptors:
 *   {type: "p"|"h1".."h6"|"pre"|"ul"|"ol"|"quote"|"hr", text, items?}
 * Inline text carries **bold**, *italic*, `code` markers that renderMarkdown
 * turns into text nodes/child elements via the DOM. Model text is always
 * inserted with textContent; nothing is ever parsed as HTML.
 */

export function inlineToNodes(text, doc) {
  // Very small inline parser: **bold**, *italic*, `code`. Everything else
  // stays literal text nodes. Returns a DocumentFragment.
  const frag = doc.createDocumentFragment();
  const re = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g;
  let last = 0;
  let m;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) frag.appendChild(doc.createTextNode(text.slice(last, m.index)));
    const token = m[0];
    if (token.startsWith("**")) {
      const b = doc.createElement("strong");
      b.textContent = token.slice(2, -2);
      frag.appendChild(b);
    } else if (token.startsWith("`")) {
      const c = doc.createElement("code");
      c.textContent = token.slice(1, -1);
      frag.appendChild(c);
    } else {
      const i = doc.createElement("em");
      i.textContent = token.slice(1, -1);
      frag.appendChild(i);
    }
    last = m.index + token.length;
  }
  if (last < text.length) frag.appendChild(doc.createTextNode(text.slice(last)));
  return frag;
}

export function parse(markdown) {
  const blocks = [];
  const lines = String(markdown ?? "").split(/\r?\n/);
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();
    if (!trimmed) { i += 1; continue; }

    // Code fence: ``` ... ```
    if (trimmed.startsWith("```")) {
      const codeLines = [];
      i += 1;
      while (i < lines.length && !lines[i].trimStart().startsWith("```")) {
        codeLines.push(lines[i]);
        i += 1;
      }
      i += 1; // closing fence
      blocks.push({ type: "pre", text: codeLines.join("\n") });
      continue;
    }

    // Headings
    const hm = /^(#{1,6})\s+(.*)$/.exec(trimmed);
    if (hm) {
      blocks.push({ type: "h" + hm[1].length, text: hm[2] });
      i += 1;
      continue;
    }

    // Blockquote
    if (trimmed.startsWith(">")) {
      blocks.push({ type: "quote", text: trimmed.replace(/^>\s?/, "") });
      i += 1;
      continue;
    }

    // Horizontal rule
    if (/^(-{3,}|\*{3,}|_{3,})$/.test(trimmed)) {
      blocks.push({ type: "hr", text: "" });
      i += 1;
      continue;
    }

    // Lists: gather consecutive items of the same kind
    if (/^[-*]\s+/.test(trimmed) || /^\d+[.)]\s+/.test(trimmed)) {
      const ordered = /^\d/.test(trimmed);
      const items = [];
      while (i < lines.length) {
        const t = lines[i].trim();
        const listItem = ordered
          ? /^\d+[.)]\s+(.*)$/.exec(t)
          : /^[-*]\s+(.*)$/.exec(t);
        if (!listItem) break;
        items.push(listItem[1]);
        i += 1;
      }
      blocks.push({ type: ordered ? "ol" : "ul", items });
      continue;
    }

    // Paragraph: gather until a blank line or another block start
    const para = [];
    while (i < lines.length) {
      const t = lines[i].trim();
      if (!t) break;
      if (/^(#{1,6})\s/.test(t) || /^(```|>|-{3,}|\*{3,}|_{3,})/.test(t)) break;
      if (/^([-*]\s+|\d+[.)]\s+)/.test(t)) break;
      para.push(t);
      i += 1;
    }
    blocks.push({ type: "p", text: para.join(" ") });
  }
  return blocks;
}

/** Render parsed blocks into DOM under container. Returns container. */
export function renderBlocks(container, blocks) {
  for (const b of blocks) {
    let el;
    switch (b.type) {
      case "pre": {
        el = container.ownerDocument.createElement("pre");
        const code = container.ownerDocument.createElement("code");
        code.textContent = b.text;
        el.appendChild(code);
        break;
      }
      case "ul":
      case "ol": {
        el = container.ownerDocument.createElement(b.type);
        for (const item of b.items) {
          const li = container.ownerDocument.createElement("li");
          li.appendChild(inlineToNodes(item, container.ownerDocument));
          el.appendChild(li);
        }
        break;
      }
      case "quote":
        el = container.ownerDocument.createElement("blockquote");
        el.appendChild(inlineToNodes(b.text, container.ownerDocument));
        break;
      case "hr": {
        el = container.ownerDocument.createElement("hr");
        break;
      }
      default:
        el = container.ownerDocument.createElement("p");
        if (b.type !== "p") {
          el = container.ownerDocument.createElement(b.type); // h1..h6
        }
        el.appendChild(inlineToNodes(b.text, container.ownerDocument));
    }
    container.appendChild(el);
  }
  return container;
}

/** One-call convenience: markdown -> rendered element inside container. */
export function renderMarkdown(container, markdown) {
  return renderBlocks(container, parse(markdown));
}
