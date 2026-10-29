import { describe, expect, it } from "vitest";

import { mentionedChapter } from "./readerPosition";

describe("mentionedChapter", () => {
  it.each([
    ["I'm at chapter 742, no spoilers", 742],
    ["im on ch 900", 900],
    ["I am up to chapter 12 btw", 12],
    ["just finished chapter 742 and I am not okay", 742],
    ["I reached ch. 1200 last night", 1200],
    ["read up to chapter 50", 50],
  ])("reads the reader's position from %j", (text, chapter) => {
    expect(mentionedChapter(text)).toBe(chapter);
  });

  it.each([
    "chapter 742 was brutal",
    "what happens in chapter 900?",
    "explain the fight in ch 1200",
    "I'm at chapter 99999",
    "hey",
  ])("ignores %j", (text) => {
    expect(mentionedChapter(text)).toBeNull();
  });
});
