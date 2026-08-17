import { describe, expect, it } from "vitest";

import {
  FIRST_NIGHTMARE_STORAGE_KEY,
  getFirstNightmareState,
  setFirstNightmareState,
  shouldOpenFirstNightmare,
} from "./firstNightmare";

describe("first Nightmare state", () => {
  it("opens only before the owner completes or defers setup", () => {
    expect(shouldOpenFirstNightmare()).toBe(true);

    setFirstNightmareState("deferred");
    expect(getFirstNightmareState()).toBe("deferred");
    expect(shouldOpenFirstNightmare()).toBe(false);

    setFirstNightmareState("completed");
    expect(getFirstNightmareState()).toBe("completed");
    expect(shouldOpenFirstNightmare()).toBe(false);
    expect(localStorage.getItem(FIRST_NIGHTMARE_STORAGE_KEY)).toBe("completed");
  });

  it("treats unknown stored values as a fresh first run", () => {
    localStorage.setItem(FIRST_NIGHTMARE_STORAGE_KEY, "unknown");

    expect(getFirstNightmareState()).toBeNull();
    expect(shouldOpenFirstNightmare()).toBe(true);
  });
});
