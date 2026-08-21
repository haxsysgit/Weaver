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

  it("renders the reader message as transparent runes on the Spellweave", () => {
    renderMessage({
      content: "Was Nephis already planning that?",
      id: "owner-1",
      role: "owner",
    });

    expect(screen.getByTestId("owner-message-runes")).toHaveTextContent(
      "Was Nephis already planning that?",
    );
    expect(screen.getByTestId("owner-message-runes")).toHaveAttribute(
      "data-surface",
      "spellweave",
    );
    expect(document.querySelector(".owner-message-shard")).toBeNull();
  });

  it("keeps the Weaver answer on the same transparent surface", () => {
    renderMessage({
      content: "The answer settles directly into the weave.",
      id: "weaver-2",
      role: "weaver",
    });

    expect(screen.getByTestId("weaver-message-runes")).toHaveAttribute(
      "data-surface",
      "spellweave",
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
