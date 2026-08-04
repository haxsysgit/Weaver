export type InlineNode =
  | { type: "text"; value: string }
  | { type: "strong"; children: InlineNode[] }
  | { type: "emphasis"; children: InlineNode[] }
  | { type: "code"; value: string }
  | { type: "link"; label: string; href: string };

export type MarkdownBlock =
  | { type: "paragraph"; children: InlineNode[] }
  | { type: "heading"; level: number; children: InlineNode[] }
  | { type: "code"; value: string }
  | { type: "quote"; children: InlineNode[] }
  | { type: "list"; ordered: boolean; items: InlineNode[][] }
  | { type: "rule" };

const INLINE_TOKEN = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;

function isSafeLink(href: string): boolean {
  try {
    const url = new URL(href);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function appendText(nodes: InlineNode[], value: string): void {
  if (!value) {
    return;
  }
  const previous = nodes.at(-1);
  if (previous?.type === "text") {
    previous.value += value;
    return;
  }
  nodes.push({ type: "text", value });
}

export function parseInline(text: string): InlineNode[] {
  const nodes: InlineNode[] = [];
  let cursor = 0;

  for (const match of text.matchAll(INLINE_TOKEN)) {
    const index = match.index ?? 0;
    appendText(nodes, text.slice(cursor, index));
    const token = match[0];

    if (token.startsWith("**")) {
      nodes.push({
        type: "strong",
        children: [{ type: "text", value: token.slice(2, -2) }],
      });
    } else if (token.startsWith("*")) {
      nodes.push({
        type: "emphasis",
        children: [{ type: "text", value: token.slice(1, -1) }],
      });
    } else if (token.startsWith("`")) {
      nodes.push({ type: "code", value: token.slice(1, -1) });
    } else {
      const linkMatch = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(token);
      const href = linkMatch?.[2] ?? "";
      if (linkMatch && isSafeLink(href)) {
        nodes.push({ type: "link", label: linkMatch[1], href });
      } else {
        appendText(nodes, token);
      }
    }
    cursor = index + token.length;
  }

  appendText(nodes, text.slice(cursor));
  return nodes;
}

function startsBlock(line: string): boolean {
  const trimmed = line.trim();
  return (
    /^#{1,6}\s+/.test(trimmed) ||
    trimmed.startsWith("```") ||
    trimmed.startsWith(">") ||
    /^(-{3,}|\*{3,}|_{3,})$/.test(trimmed) ||
    /^([-*]\s+|\d+[.)]\s+)/.test(trimmed)
  );
}

export function parseMarkdown(markdown: string): MarkdownBlock[] {
  const blocks: MarkdownBlock[] = [];
  const lines = String(markdown ?? "").split(/\r?\n/);
  let index = 0;

  while (index < lines.length) {
    const trimmed = lines[index].trim();
    if (!trimmed) {
      index += 1;
      continue;
    }

    if (trimmed.startsWith("```")) {
      const codeLines: string[] = [];
      index += 1;
      while (index < lines.length && !lines[index].trimStart().startsWith("```")) {
        codeLines.push(lines[index]);
        index += 1;
      }
      if (index < lines.length) {
        index += 1;
      }
      blocks.push({ type: "code", value: codeLines.join("\n") });
      continue;
    }

    const heading = /^(#{1,6})\s+(.*)$/.exec(trimmed);
    if (heading) {
      blocks.push({
        type: "heading",
        level: heading[1].length,
        children: parseInline(heading[2]),
      });
      index += 1;
      continue;
    }

    if (trimmed.startsWith(">")) {
      blocks.push({
        type: "quote",
        children: parseInline(trimmed.replace(/^>\s?/, "")),
      });
      index += 1;
      continue;
    }

    if (/^(-{3,}|\*{3,}|_{3,})$/.test(trimmed)) {
      blocks.push({ type: "rule" });
      index += 1;
      continue;
    }

    const unordered = /^[-*]\s+/.test(trimmed);
    const ordered = /^\d+[.)]\s+/.test(trimmed);
    if (unordered || ordered) {
      const items: InlineNode[][] = [];
      while (index < lines.length) {
        const itemLine = lines[index].trim();
        const itemMatch = ordered
          ? /^\d+[.)]\s+(.*)$/.exec(itemLine)
          : /^[-*]\s+(.*)$/.exec(itemLine);
        if (!itemMatch) {
          break;
        }
        items.push(parseInline(itemMatch[1]));
        index += 1;
      }
      blocks.push({ type: "list", ordered, items });
      continue;
    }

    const paragraphLines: string[] = [];
    while (index < lines.length) {
      const paragraphLine = lines[index].trim();
      if (!paragraphLine) {
        break;
      }
      if (paragraphLines.length > 0 && startsBlock(paragraphLine)) {
        break;
      }
      paragraphLines.push(paragraphLine);
      index += 1;
    }
    blocks.push({
      type: "paragraph",
      children: parseInline(paragraphLines.join(" ")),
    });
  }

  return blocks;
}
