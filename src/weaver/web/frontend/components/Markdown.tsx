import { Fragment, type ReactNode } from "react";

import { parseMarkdown, type InlineNode } from "../lib/markdown";

function renderInline(nodes: InlineNode[]): ReactNode[] {
  return nodes.map((node, index) => {
    const key = `${node.type}-${index}`;
    if (node.type === "text") {
      return <Fragment key={key}>{node.value}</Fragment>;
    }
    if (node.type === "strong") {
      return <strong key={key}>{renderInline(node.children)}</strong>;
    }
    if (node.type === "emphasis") {
      return <em key={key}>{renderInline(node.children)}</em>;
    }
    if (node.type === "code") {
      return <code key={key}>{node.value}</code>;
    }
    return (
      <a href={node.href} key={key} rel="noreferrer" target="_blank">
        {node.label}
      </a>
    );
  });
}

interface MarkdownProps {
  children: string;
}

export function Markdown({ children }: MarkdownProps) {
  const blocks = parseMarkdown(children);

  return blocks.map((block, index) => {
    const key = `${block.type}-${index}`;
    if (block.type === "paragraph") {
      return <p key={key}>{renderInline(block.children)}</p>;
    }
    if (block.type === "heading") {
      const Heading = `h${block.level}` as keyof React.JSX.IntrinsicElements;
      return <Heading key={key}>{renderInline(block.children)}</Heading>;
    }
    if (block.type === "code") {
      return (
        <pre key={key}>
          <code>{block.value}</code>
        </pre>
      );
    }
    if (block.type === "quote") {
      return <blockquote key={key}>{renderInline(block.children)}</blockquote>;
    }
    if (block.type === "rule") {
      return <hr key={key} />;
    }

    const List = block.ordered ? "ol" : "ul";
    return (
      <List key={key}>
        {block.items.map((item, itemIndex) => (
          <li key={`${key}-${itemIndex}`}>{renderInline(item)}</li>
        ))}
      </List>
    );
  });
}
