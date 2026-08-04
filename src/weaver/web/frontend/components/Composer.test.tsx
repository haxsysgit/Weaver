import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { Composer } from "./Composer";

describe("Composer", () => {
  it("renders send while idle and stop only during a turn", () => {
    const { rerender } = render(
      <Composer
        cancelling={false}
        draft=""
        onCancel={vi.fn()}
        onDraftChange={vi.fn()}
        onSubmit={vi.fn()}
        turnActive={false}
      />,
    );

    expect(screen.getByRole("button", { name: "Send message" })).toBeVisible();
    expect(screen.queryByRole("button", { name: "Stop assistant" })).toBeNull();

    rerender(
      <Composer
        cancelling={false}
        draft="Asterion is suspicious"
        onCancel={vi.fn()}
        onDraftChange={vi.fn()}
        onSubmit={vi.fn()}
        turnActive
      />,
    );

    expect(screen.queryByRole("button", { name: "Send message" })).toBeNull();
    expect(screen.getByRole("button", { name: "Stop assistant" })).toBeVisible();
  });

  it("disables stop while a cancellation request is pending", () => {
    render(
      <Composer
        cancelling
        draft=""
        onCancel={vi.fn()}
        onDraftChange={vi.fn()}
        onSubmit={vi.fn()}
        turnActive
      />,
    );

    expect(screen.getByRole("button", { name: "Stopping assistant" })).toBeDisabled();
  });

  it("submits with Enter and keeps Shift+Enter as a newline", () => {
    const onSubmit = vi.fn();
    const onDraftChange = vi.fn();
    render(
      <Composer
        cancelling={false}
        draft="Cassie had a plan"
        onCancel={vi.fn()}
        onDraftChange={onDraftChange}
        onSubmit={onSubmit}
        turnActive={false}
      />,
    );

    const textbox = screen.getByRole("textbox", { name: "Message assistant" });
    fireEvent.keyDown(textbox, { key: "Enter", shiftKey: true });
    expect(onSubmit).not.toHaveBeenCalled();

    fireEvent.keyDown(textbox, { key: "Enter" });
    expect(onSubmit).toHaveBeenCalledWith("Cassie had a plan");
  });
});
