import { describe, expect, it } from "vitest";

import { ChatApiError } from "./chatApi";
import { recoveryFromError, recoveryFromStreamEvent } from "./chatRecovery";

describe("chat recovery language", () => {
  it("separates model, limit, persistence, and interrupted stream failures", () => {
    expect(
      recoveryFromStreamEvent({
        type: "failed",
        code: "model_failed",
        message: "Model stream failed.",
      }).kind,
    ).toBe("model");
    expect(
      recoveryFromStreamEvent({
        type: "failed",
        code: "limit_reached",
        message: "The turn reached its execution limit.",
      }).kind,
    ).toBe("limit");
    expect(
      recoveryFromStreamEvent({
        type: "failed",
        code: "persistence_failed",
        message: "Assistant message persistence failed.",
      }).kind,
    ).toBe("storage");
    expect(
      recoveryFromStreamEvent({
        type: "interrupted",
        message: "The turn was interrupted.",
      }).kind,
    ).toBe("interrupted");
  });

  it("separates HTTP conflict and missing-thread failures", () => {
    expect(recoveryFromError(new ChatApiError("Sending", 409)).kind).toBe("busy");
    expect(recoveryFromError(new ChatApiError("Loading", 404)).kind).toBe(
      "missing-thread",
    );
  });

  it("turns browser transport failures into safe connection copy", () => {
    const issue = recoveryFromError(new TypeError("Failed to fetch secret URL"));

    expect(issue.kind).toBe("connection");
    expect(issue.message).not.toContain("secret URL");
  });

  it("never places an unknown raw exception message in reader copy", () => {
    const issue = recoveryFromError(new Error("private provider payload"));

    expect(issue.kind).toBe("unknown");
    expect(issue.message).not.toContain("private provider payload");
  });
});
