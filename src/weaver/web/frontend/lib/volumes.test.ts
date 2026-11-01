import { describe, expect, it } from "vitest";

import { volumeForChapter } from "./volumes";

describe("volumeForChapter", () => {
  it.each([
    [1, 1],
    [95, 1],
    [96, 2],
    [3000, 11],
    [3127, 12],
    [3128, 13],
    [3232, 13],
  ])("puts chapter %i in volume %i", (chapter, volume) => {
    expect(volumeForChapter(chapter)).toBe(volume);
  });

  it("keeps the current volume open past the shelf edge", () => {
    // The shelf edge is not a volume end (Plan 031).
    expect(volumeForChapter(9000)).toBe(13);
  });
});
