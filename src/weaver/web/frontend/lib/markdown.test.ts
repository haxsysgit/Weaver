import { describe, expect, it } from "vitest";

import { parseMarkdown } from "./markdown";

describe("parseMarkdown", () => {
  it("parses useful story discussion blocks without interpreting HTML", () => {
    const blocks = parseMarkdown(
      "## Theory\n\n- **Claim:** Sunny wins\n- `<img src=x onerror=alert(1)>`\n\n> canon stays canon",
    );

    expect(blocks).toEqual([
      { type: "heading", level: 2, children: [{ type: "text", value: "Theory" }] },
      {
        type: "list",
        ordered: false,
        items: [
          [
            { type: "strong", children: [{ type: "text", value: "Claim:" }] },
            { type: "text", value: " Sunny wins" },
          ],
          [{ type: "code", value: "<img src=x onerror=alert(1)>" }],
        ],
      },
      {
        type: "quote",
        children: [{ type: "text", value: "canon stays canon" }],
      },
    ]);
  });

  it("keeps unsafe links as plain text and admits http links", () => {
    const blocks = parseMarkdown(
      "[bad](javascript:alert(1)) and [chapter source](https://example.com/chapter)",
    );

    expect(blocks[0]).toMatchObject({
      type: "paragraph",
      children: [
        { type: "text", value: "[bad](javascript:alert(1)) and " },
        {
          type: "link",
          label: "chapter source",
          href: "https://example.com/chapter",
        },
      ],
    });
  });
});
