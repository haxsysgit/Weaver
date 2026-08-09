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
    deleteConversation: vi.fn().mockResolvedValue({ deleted: "thread-2" }),
    getPassage: vi.fn().mockResolvedValue({
      handle: "novel:0098:3-81",
      chapter: 98,
      line_start: 3,
      line_end: 81,
      text: "The kunai spun in the dark.",
      volume: 2,
      beats: [],
    }),
    getPreferences: vi.fn().mockResolvedValue({
      reader_chapter: null,
      spoiler_mode: "protect",
      tier: "ascended",
    }),
    savePreferences: vi.fn().mockResolvedValue({
      reader_chapter: null,
      spoiler_mode: "protect",
      tier: "ascended",
    }),
    createConversation: vi.fn().mockResolvedValue({ conversation_id: "thread-1" }),
    listConversations: vi.fn().mockResolvedValue([
      { conversation_id: "thread-1", title: "Asterion", created_at: "2026-08-08T10:00:00Z" },
      { conversation_id: "thread-2", title: "Cassie's choice", created_at: "2026-08-01T10:00:00Z" },
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
    retryTurn: vi.fn().mockReturnValue(stream),
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
        recoveryRetryLabel: "Retry",
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
    fireEvent.click(screen.getByRole("button", { name: /Cassie's choice thread/ }));

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
  it("shows one tool call at a time and clears when the answer streams", async () => {
    const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
    const api = createApi(
      (async function* (): AsyncGenerator<StreamEvent> {
        yield { type: "tool", name: "semantic_search", status: "start", detail: "" };
        await sleep(60);
        yield { type: "tool", name: "semantic_search", status: "done", detail: "ok" };
        await sleep(60);
        yield { type: "tool", name: "read_chapters", status: "start", detail: "" };
        await sleep(60);
        yield { type: "tool", name: "read_chapters", status: "done", detail: "ok" };
        await sleep(60);
        yield { type: "delta", text: "Sunny slew the leader with the kunai." };
        yield { type: "completed", text: "Sunny slew the leader with the kunai." };
      })(),
    );

    localStorage.setItem("weaver.active-conversation", "thread-1");
    render(<ChatApp api={api} modeLabel="live" privacyLabel="local" />);

    const composer = await screen.findByLabelText("Message Weaver");
    fireEvent.change(composer, { target: { value: "who killed the leader" } });
    fireEvent.keyDown(composer, { key: "Enter" });

    // one tool call at a time, shown inside the live reply box
    expect(await screen.findByText(/is recalling a passage/)).toBeTruthy();
    await waitFor(() => {
      expect(screen.getByText(/has recalled a passage/)).toBeTruthy();
    });
    expect(screen.queryByText(/is searching the library/)).toBeNull();
    expect(screen.queryByText(/has searched the library/)).toBeNull();

    // the answer streaming clears the spell line entirely
    expect(
      await screen.findByText("Sunny slew the leader with the kunai."),
    ).toBeTruthy();
    await waitFor(() => {
      expect(screen.queryByText(/has recalled a passage/)).toBeNull();
    });
  });

  it("clears activity on the next turn", async () => {
    const api = createApi(
      (async function* (): AsyncGenerator<StreamEvent> {
        yield { type: "tool", name: "semantic_search", status: "start", detail: "" };
        yield { type: "tool", name: "semantic_search", status: "done", detail: "ok" };
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
    expect(secondScreen.queryByText(/is searching the library/)).toBeNull();
  });
});

it("opens reader settings, saves the chapter and the knob", async () => {
  const api = createApi((async function* () {})());
  render(<ChatApp api={api} modeLabel="fake" privacyLabel="Local fake mode" />);

  fireEvent.click(screen.getByRole("button", { name: "Reader status and settings" }));
  expect(await screen.findByRole("dialog", { name: "Chat settings" })).toBeTruthy();

  fireEvent.change(screen.getByLabelText("I'm at chapter"), {
    target: { value: "600" },
  });
  fireEvent.click(screen.getByRole("radio", { name: "No spoiler care (spoil me freely)" }));
  fireEvent.click(screen.getByRole("button", { name: "Save" }));

  await waitFor(() => {
    expect(api.savePreferences).toHaveBeenCalledWith({
      reader_chapter: 600,
      spoiler_mode: "none",
      tier: "ascended",
    });
  });
});

describe("ChatApp weave management", () => {
  it("new weave is a no-op inside a fresh unused weave", async () => {
    const api = createApi((async function* () {})());
    localStorage.setItem("weaver.active-conversation", "thread-1");
    render(<ChatApp api={api} modeLabel="fake" privacyLabel="Local fake mode" />);

    await screen.findByText("What thread are we pulling?");
    fireEvent.click(screen.getByRole("button", { name: "New weave" }));
    await waitFor(() => {
      expect(api.createConversation).not.toHaveBeenCalled();
    });
  });

  it("new weave creates a chat once the current one has been used", async () => {
    const api = createApi((async function* () {})());
    localStorage.setItem("weaver.active-conversation", "thread-2");
    render(<ChatApp api={api} modeLabel="fake" privacyLabel="Local fake mode" />);

    // thread-2 has one stored weaver message, so the weave is used
    await screen.findByText("Old answer");
    fireEvent.click(screen.getByRole("button", { name: "New weave" }));
    await waitFor(() => {
      expect(api.createConversation).toHaveBeenCalled();
    });
  });

  it("deletes a conversation and lands on the newest remaining one", async () => {
    const api = createApi((async function* () {})());
    localStorage.setItem("weaver.active-conversation", "thread-1");
    render(<ChatApp api={api} modeLabel="fake" privacyLabel="Local fake mode" />);

    await screen.findByText("What thread are we pulling?");
    // thread-1 is the active (empty) weave; delete it via the rail
    const deleteButton = await screen.findByRole("button", {
      name: "Delete Asterion",
    });
    fireEvent.click(deleteButton); // first click arms the confirmation
    fireEvent.click(deleteButton); // second click confirms
    await waitFor(() => {
      expect(api.deleteConversation).toHaveBeenCalledWith("thread-1");
    });
    const listMock = api.listConversations as ReturnType<typeof vi.fn>;
    expect(listMock.mock.calls.length).toBeGreaterThanOrEqual(2);
  });

  it("tapping a recalled-passage chip summons the passage panel", async () => {
    const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
    const api = createApi(
      (async function* () {
        yield {
          type: "tool",
          name: "read_chapters",
          status: "done",
          detail: "ok",
          preview: "The kunai spun in the dark",
          handles: ["novel:0098:3-81"],
        };
        await sleep(400);
        yield { type: "delta", text: "Sunny slew the leader." };
        yield { type: "completed", text: "Sunny slew the leader." };
      })(),
    );
    localStorage.setItem("weaver.active-conversation", "thread-1");
    render(<ChatApp api={api} modeLabel="fake" privacyLabel="Local fake mode" />);

    const composer = await screen.findByLabelText("Message Weaver");
    fireEvent.change(composer, { target: { value: "who killed the leader" } });
    fireEvent.keyDown(composer, { key: "Enter" });

    const viewButton = await screen.findByRole("button", {
      name: "View the recalled passage",
    });
    fireEvent.click(viewButton);
    expect(
      await screen.findByRole("dialog", { name: "Summoned passage" }),
    ).toBeTruthy();
    expect(await screen.findByText(/chapter 98/)).toBeTruthy();
    expect(api.getPassage).toHaveBeenCalledWith("novel:0098:3-81");
  });
});

it("retries a broken turn from the recovery panel", async () => {
  // Plan 15 retry (2026-08-09): after a failed turn the recovery panel
  // offers Retry; clicking it re-runs the turn server-side and the
  // streamed answer replaces the recovery panel.
  const controlled = {
    stream: (async function* () {
      yield { type: "delta" as const, text: "retried answer" };
      yield { type: "completed" as const, text: "retried answer" };
    })(),
    retryStream: (async function* () {
      yield { type: "delta" as const, text: "retried answer" };
      yield { type: "completed" as const, text: "retried answer" };
    })(),
  };
  const api = createApi(controlled.stream);
  (api.retryTurn as ReturnType<typeof vi.fn>).mockReturnValue(
    controlled.retryStream,
  );
  (api.streamTurn as ReturnType<typeof vi.fn>).mockReturnValue(
    (async function* () {
      yield { type: "failed" as const, message: "Model stream failed." };
    })(),
  );

  render(<ChatApp api={api} modeLabel="fake" privacyLabel="Local fake mode" />);

  await screen.findByText("What thread are we pulling?");
  const composer = screen.getByRole("textbox", { name: "Message Weaver" });
  fireEvent.keyDown(composer, { key: "Enter" });
  fireEvent.change(composer, {
    target: { value: "who told noctis the gods cant kill daemons" },
  });
  fireEvent.keyDown(composer, { key: "Enter" });

  const recovery = await screen.findByText("The thread broke.");
  expect(recovery).toBeTruthy();

  fireEvent.click(screen.getByRole("button", { name: "Retry" }));

  await screen.findByText("retried answer");
  expect(screen.queryByText("The thread broke.")).toBeNull();
  expect(api.retryTurn).toHaveBeenCalledTimes(1);
});
