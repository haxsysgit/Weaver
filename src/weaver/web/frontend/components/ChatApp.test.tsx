import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { ChatApp } from "./ChatApp";
import type { ChatApi, StreamEvent } from "../lib/chatApi";
import type { ChatProduct } from "../lib/product";

function deferredStream() {
  let release: ((event: StreamEvent) => void) | undefined;
  const nextEvent = new Promise<StreamEvent>((resolve) => {
    release = resolve;
  });

  async function* stream(): AsyncGenerator<StreamEvent> {
    yield { type: "delta", text: "The thread tightens" };
    yield await nextEvent;
  }

  return {
    release: (event: StreamEvent) => release?.(event),
    stream: stream(),
  };
}

function createApi(stream: AsyncIterable<StreamEvent>): ChatApi {
  return {
    cancelTurn: vi.fn().mockResolvedValue("cancelling"),
    createConversation: vi.fn().mockResolvedValue({ conversation_id: "thread-1" }),
    listConversations: vi.fn().mockResolvedValue([
      { conversation_id: "thread-1", title: "Asterion" },
      { conversation_id: "thread-2", title: "Cassie's choice" },
    ]),
    loadMessages: vi.fn().mockImplementation(async (conversationId: string) => {
      if (conversationId === "thread-2") {
        return [
          {
            message_id: "history-1",
            turn_id: "old-turn",
            role: "weaver",
            content: "Old answer",
            created_at: "2026-08-04T00:00:00Z",
          },
        ];
      }
      return [];
    }),
    streamTurn: vi.fn().mockReturnValue(stream),
  };
}

describe("ChatApp", () => {
  it("toggles the desktop conversation rail with clear Font Awesome controls", async () => {
    const api = createApi((async function* () {})());
    render(<ChatApp api={api} modeLabel="fake" privacyLabel="Local fake mode" />);

    await screen.findByText("What thread are we pulling?");
    const conversationRail = screen.getByRole("complementary");
    const closeRail = within(conversationRail).getByRole("button", {
      name: "Close conversation rail",
    });
    expect(closeRail.querySelector('[data-icon="chevron-left"]')).not.toBeNull();

    fireEvent.click(closeRail);
    expect(document.querySelector(".conversation-rail")).toHaveClass(
      "conversation-rail-collapsed",
    );
    expect(conversationRail).toHaveAttribute("aria-hidden", "true");
    expect(conversationRail).toHaveAttribute("inert");

    const openRail = screen.getByRole("button", {
      name: "Open conversation rail",
    });
    expect(openRail).toHaveAttribute("aria-controls", "conversation-rail");
    expect(openRail).toHaveAttribute("aria-expanded", "false");
    expect(openRail.querySelector('[data-icon="bars-staggered"]')).not.toBeNull();
    await waitFor(() => expect(openRail).toHaveFocus());
    fireEvent.click(openRail);

    expect(document.querySelector(".conversation-rail")).not.toHaveClass(
      "conversation-rail-collapsed",
    );
    expect(conversationRail).toHaveAttribute("aria-hidden", "false");
    expect(conversationRail).not.toHaveAttribute("inert");
    expect(openRail).toHaveAttribute("aria-expanded", "true");
  });

  it("takes product copy and the brand mark from its reusable boundary", async () => {
    const product: ChatProduct = {
      ...{
        assistantName: "Career Guide",
        brandLine: "career operations",
        composerPlaceholder: "Ask about the next move",
        cancelFailedMessage: "Could not stop this run.",
        closeRailLabel: "Close sessions",
        connectionLostMessage: "The connection was lost.",
        conversationNoun: "session",
        currentConversationLabel: "current session",
        emptyEyebrow: "Career desk",
        emptyHint: "Bring a role or application.",
        emptyTitle: "What are we working on?",
        footerLine: "your work stays yours",
        incompleteTurnMessage: "This run ended before it finished.",
        inputLabel: "Message Career Guide",
        navigationLabel: "Career sessions",
        newConversationLabel: "New session",
        newConversationTitle: "A new session",
        openRailLabel: "Open sessions",
        recentConversationsLabel: "Recent sessions",
        recoveryChooseLabel: "Choose another session",
        recoveryCreateLabel: "Start a new session",
        recoveryTitle: "This run stopped.",
        regenerateLabel: "Run again",
        sendLabel: "Send message",
        stopLabel: "Stop Career Guide",
        stoppingLabel: "Stopping Career Guide",
        storageKey: "career.active-session",
        wakeErrorMessage: "Career Guide could not start.",
      },
    };
    function CareerMark() {
      return <span data-testid="career-mark">HJ</span>;
    }
    const api = createApi((async function* () {})());

    render(
      <ChatApp
        api={api}
        Mark={CareerMark}
        modeLabel="local"
        privacyLabel="Private career mode"
        product={product}
      />,
    );

    expect(await screen.findByText("What are we working on?")).toBeVisible();
    expect(screen.getAllByTestId("career-mark").length).toBeGreaterThan(0);
    expect(screen.getByRole("textbox", { name: "Message Career Guide" })).toBeVisible();
    expect(screen.queryByText("Demon of Fate")).toBeNull();
  });

  it("streams a turn, scopes regenerate to its live reply, and clears it on conversation change", async () => {
    localStorage.setItem("weaver.active-conversation", "thread-1");
    const controlled = deferredStream();
    const api = createApi(controlled.stream);
    render(<ChatApp api={api} modeLabel="fake" privacyLabel="Local fake mode" />);

    const composer = await screen.findByRole("textbox", { name: "Message Weaver" });
    fireEvent.change(composer, { target: { value: "Could Asterion beat Azarax?" } });
    fireEvent.keyDown(composer, { key: "Enter" });

    expect(await screen.findByRole("button", { name: "Stop Weaver" })).toBeVisible();
    expect(await screen.findByText("The thread tightens")).toBeVisible();

    await act(async () => {
      controlled.release({ type: "completed", text: "Only if the conditions hold." });
    });

    expect(await screen.findByRole("button", { name: "Regenerate reply" })).toBeVisible();
    fireEvent.click(screen.getByRole("button", { name: /Cassie's choice/ }));

    expect(await screen.findByText("Old answer")).toBeVisible();
    expect(screen.queryByRole("button", { name: "Regenerate reply" })).toBeNull();
  });

  it("keeps stop disabled after cancellation is requested until the stream settles", async () => {
    localStorage.setItem("weaver.active-conversation", "thread-1");
    const controlled = deferredStream();
    const api = createApi(controlled.stream);
    render(<ChatApp api={api} modeLabel="fake" privacyLabel="Local fake mode" />);

    const composer = await screen.findByRole("textbox", { name: "Message Weaver" });
    fireEvent.change(composer, { target: { value: "Stop this thread" } });
    fireEvent.keyDown(composer, { key: "Enter" });
    fireEvent.click(await screen.findByRole("button", { name: "Stop Weaver" }));

    await waitFor(() => {
      expect(api.cancelTurn).toHaveBeenCalledWith("thread-1");
    });
    expect(screen.getByRole("button", { name: "Stopping Weaver" })).toBeDisabled();

    await act(async () => {
      controlled.release({ type: "interrupted", message: "The weave was cut." });
    });

    expect(await screen.findByText("The weave was cut.")).toBeVisible();
    expect(screen.getByRole("button", { name: "Start a new weave" })).toBeVisible();
    const chooseAnother = screen.getByRole("button", {
      name: "Choose another thread",
    });
    expect(chooseAnother).toBeVisible();
    expect(screen.getByRole("button", { name: "Send message" })).toBeVisible();

    const conversationRail = screen.getByRole("complementary");
    fireEvent.click(
      within(conversationRail).getByRole("button", {
        name: "Close conversation rail",
      }),
    );
    expect(conversationRail).toHaveClass("conversation-rail-collapsed");
    fireEvent.click(chooseAnother);
    expect(conversationRail).not.toHaveClass("conversation-rail-collapsed");
  });
});

describe("ChatApp tool activity", () => {
  it("renders search/open activity lines while a turn streams", async () => {
    const api = createApi(
      (async function* (): AsyncGenerator<StreamEvent> {
        yield { type: "tool", name: "search_story", status: "start", detail: "" };
        yield { type: "tool", name: "search_story", status: "done", detail: "ok" };
        yield { type: "tool", name: "read_chapters", status: "start", detail: "" };
        yield { type: "tool", name: "read_chapters", status: "done", detail: "ok" };
        yield { type: "delta", text: "Sunny slew the leader with the kunai." };
        yield { type: "completed", text: "Sunny slew the leader with the kunai." };
      })(),
    );

    localStorage.setItem("weaver.active-conversation", "thread-1");
    render(<ChatApp api={api} modeLabel="live" privacyLabel="local" />);

    const composer = await screen.findByLabelText("Message Weaver");
    fireEvent.change(composer, { target: { value: "who killed the leader" } });
    fireEvent.keyDown(composer, { key: "Enter" });

    const activity = await screen.findByLabelText("Library activity");
    expect(within(activity).getByText("search_story…")).toBeTruthy();
    expect(await within(activity).findByText("search_story ok")).toBeTruthy();
    expect(within(activity).getByText("read_chapters…")).toBeTruthy();
    expect(await within(activity).findByText("read_chapters ok")).toBeTruthy();
    expect(
      await screen.findByText("Sunny slew the leader with the kunai."),
    ).toBeTruthy();
  });

  it("clears activity on the next turn", async () => {
    const api = createApi(
      (async function* (): AsyncGenerator<StreamEvent> {
        yield { type: "tool", name: "search_story", status: "start", detail: "" };
        yield { type: "tool", name: "search_story", status: "done", detail: "ok" };
        yield { type: "completed", text: "First answer." };
      })(),
    );

    localStorage.setItem("weaver.active-conversation", "thread-1");
    render(<ChatApp api={api} modeLabel="live" privacyLabel="local" />);

    const composer = await screen.findByLabelText("Message Weaver");
    fireEvent.change(composer, { target: { value: "first" } });
    fireEvent.keyDown(composer, { key: "Enter" });
    await screen.findByText("First answer.");

    const secondApi = createApi(
      (async function* (): AsyncGenerator<StreamEvent> {
        yield { type: "completed", text: "Second answer." };
      })(),
    );
    const secondRender = render(
      <ChatApp api={secondApi} modeLabel="live" privacyLabel="local" />,
    );
    const secondScreen = within(secondRender.container);
    const composer2 = await secondScreen.findByLabelText("Message Weaver");
    fireEvent.change(composer2, { target: { value: "second" } });
    fireEvent.keyDown(composer2, { key: "Enter" });
    await secondScreen.findByText("Second answer.");
    expect(secondScreen.queryByLabelText("Library activity")).toBeNull();
  });
});
