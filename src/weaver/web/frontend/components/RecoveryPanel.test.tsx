import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import type { RecoveryIssue } from "../lib/chatRecovery";
import { RecoveryPanel } from "./RecoveryPanel";

function renderPanel(issue: RecoveryIssue) {
  const onRetry = vi.fn();
  render(
    <RecoveryPanel
      chooseLabel="Choose another thread"
      createLabel="Start a new weave"
      issue={issue}
      onChooseConversation={vi.fn()}
      onCreateConversation={vi.fn()}
      onRetry={onRetry}
      retryLabel="Retry"
    />,
  );
  return onRetry;
}

describe("RecoveryPanel", () => {
  it("shows the model recovery state and its retry action", () => {
    const onRetry = renderPanel({
      canRetry: true,
      kind: "model",
      message: "Check the bound key or account balance, then retry.",
      title: "[The bound voice did not answer.]",
    });

    expect(screen.getByLabelText("Turn recovery")).toHaveAttribute(
      "data-recovery-kind",
      "model",
    );
    fireEvent.click(screen.getByRole("button", { name: "Retry" }));
    expect(onRetry).toHaveBeenCalledOnce();
  });

  it("does not offer retry for a missing thread", () => {
    renderPanel({
      canRetry: false,
      kind: "missing-thread",
      message: "Choose another thread or begin a new weave.",
      title: "[This thread can no longer be found.]",
    });

    expect(screen.queryByRole("button", { name: "Retry" })).toBeNull();
    expect(
      screen.getByRole("button", { name: "Choose another thread" }),
    ).toBeVisible();
  });
});
