import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import type { DisplayMessage } from "../lib/chatModel";
import { Message } from "./Message";
import { WeaverMark } from "./WeaverMark";

function renderMessage(message: DisplayMessage) {
  return render(
    <Message
      Mark={WeaverMark}
      assistantName="Weaver"
      message={message}
      onQuote={vi.fn()}
      regenerateLabel="Regenerate"
    />,
  );
}

describe("Conversation Chamber messages", () => {
  it("renders a Weaver reply as an unframed response spine with a chapter knot", () => {
    renderMessage({
      content: "The first clue appears in ch. 709.",
      id: "weaver-1",
      role: "weaver",
    });

    expect(screen.getByTestId("weaver-response-spine")).toBeVisible();
    expect(screen.getByTestId("chapter-reference-knot")).toHaveTextContent("ch. 709");
    expect(document.querySelector(".weaver-message-content")).toBeNull();
  });

  it("renders the reader message as a compact shard", () => {
    renderMessage({
      content: "Was Nephis already planning that?",
      id: "owner-1",
      role: "owner",
    });

    expect(screen.getByTestId("owner-message-shard")).toHaveTextContent(
      "Was Nephis already planning that?",
    );
  });

  it("keeps a streaming reply attached to the response spine", () => {
    renderMessage({
      content: "The thread is still moving",
      id: "weaver-streaming",
      role: "weaver",
      streaming: true,
    });

    expect(screen.getByTestId("weaver-response-spine")).toHaveAttribute(
      "data-streaming",
      "true",
    );
  });
});
