import { describe, expect, it } from "vitest";

import { getApiKey, setApiKey } from "./identity";

describe("browser-local DeepSeek key", () => {
  it("trims, returns, and clears the key", () => {
    setApiKey("  owner-test-key  ");
    expect(getApiKey()).toBe("owner-test-key");

    setApiKey("   ");
    expect(getApiKey()).toBe("");
  });
});
