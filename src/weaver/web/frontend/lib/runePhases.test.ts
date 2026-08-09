import { describe, expect, it } from "vitest";

import { runeMessageForActivity } from "./runePhases";

describe("rune phase messages", () => {
  it("turns locating and reading tools into lore-safe phases", () => {
    const locating = runeMessageForActivity({
      name: "semantic_search",
      status: "start",
      detail: "secret search arguments",
    });
    const reading = runeMessageForActivity({
      name: "read_chapters",
      status: "start",
      detail: "secret chapter path",
    });

    expect(locating).toMatch(/fate|thread|chapters/i);
    expect(reading).toMatch(/Spell remembers|passage|truth/i);
    expect(locating).not.toContain("secret search arguments");
    expect(reading).not.toContain("secret chapter path");
  });

  it("does not announce tool completion as done", () => {
    expect(
      runeMessageForActivity({
        name: "read_chapters",
        status: "done",
        detail: "done",
      }),
    ).toBeNull();
  });
});
