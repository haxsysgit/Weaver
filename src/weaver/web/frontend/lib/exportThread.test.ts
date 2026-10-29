import { describe, expect, it } from "vitest";

import { exportFileName, threadMarkdown } from "./exportThread";

describe("threadMarkdown", () => {
  it("writes the thread as a readable conversation", () => {
    const text = threadMarkdown({
      domain: "canon",
      exportedAt: new Date("2026-10-29T12:00:00Z"),
      messages: [
        { content: "who would win, Sunny or Nephis?", id: "1", role: "owner" },
        { content: "Nephis, on reach (ch. 104).\n\nHere is why.", id: "2", role: "weaver" },
      ],
      title: "Who Would Win, Sunny Nephis?",
    });

    expect(text).toBe(
      [
        "# Who Would Win, Sunny Nephis?",
        "",
        "*Chat with Weaver, saved 2026-10-29.*",
        "",
        "**You**",
        "",
        "who would win, Sunny or Nephis?",
        "",
        "**Weaver**",
        "",
        "Nephis, on reach (ch. 104).\n\nHere is why.",
        "",
      ].join("\n"),
    );
  });

  it("labels fanfic and leaves out a reply still being written", () => {
    const text = threadMarkdown({
      domain: "fanfic",
      exportedAt: new Date("2026-10-29T12:00:00Z"),
      messages: [
        { content: "write the missing scene", id: "1", role: "owner" },
        { content: "The tomb was", id: "2", role: "weaver", streaming: true },
      ],
      title: "Missing scene",
    });

    expect(text).toContain("*Fanfic with Weaver");
    expect(text).not.toContain("The tomb was");
  });
});

describe("exportFileName", () => {
  it.each([
    ["Who Would Win, Sunny Nephis?", "who-would-win-sunny-nephis.md"],
    ["  ", "weaver-thread.md"],
    ["Nephis' Soul Sea / chapter 742", "nephis-soul-sea-chapter-742.md"],
  ])("names %j as %j", (title, name) => {
    expect(exportFileName(title)).toBe(name);
  });
});
