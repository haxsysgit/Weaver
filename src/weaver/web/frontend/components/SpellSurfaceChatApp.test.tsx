import {
  act,
  fireEvent,
  render,
  renderHook,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import {
  ChatApiError,
  type ChatApi,
  type ConversationSummary,
  type StoredMessage,
} from "../lib/chatApi";
import { FIRST_NIGHTMARE_STORAGE_KEY } from "../lib/firstNightmare";
import { weaverProduct } from "../lib/product";
import { useChatController } from "../hooks/useChatController";
import { SpellSurfaceChatApp } from "./SpellSurfaceChatApp";

const distantRenderer = vi.hoisted(() => ({
  onReady: undefined as undefined | (() => void),
}));

vi.mock("./SpellBackground", () => ({
  SpellBackground: ({
    onReady,
    paused,
    threadAlpha,
  }: {
    onReady?: () => void;
    paused: boolean;
    threadAlpha?: number;
  }) => {
    distantRenderer.onReady = onReady;
    return (
      <canvas
        data-paused={paused}
        data-testid="spell-background"
        data-thread-alpha={threadAlpha}
      />
    );
  },
}));

function createApi(): ChatApi {
  return {
    acceptSponsoredNotice: vi.fn().mockResolvedValue({
      consented: true,
      enabled: true,
      remaining_questions: 3,
      reset_at: "2026-10-01T00:00:00+00:00",
      source: "sponsored",
    }),
    cancelTurn: vi.fn().mockResolvedValue("idle"),
    createConversation: vi.fn().mockResolvedValue({ conversation_id: "thread-1" }),
    deleteConversation: vi.fn().mockResolvedValue({ deleted: "thread-1" }),
    getPreferences: vi.fn().mockResolvedValue({
      reader_chapter: 1000,
      spoiler_mode: "protect",
    }),
    getAccess: vi.fn().mockResolvedValue({
      consented: true,
      enabled: true,
      remaining_questions: 3,
      reset_at: "2026-10-01T00:00:00+00:00",
      source: "sponsored",
    }),
    listConversations: vi.fn().mockResolvedValue([]),
    loadMessages: vi.fn().mockResolvedValue([]),
    regenerateTurn: vi.fn().mockReturnValue((async function* () {})()),
    retryTurn: vi.fn().mockReturnValue((async function* () {})()),
    savePreferences: vi.fn().mockImplementation(async (preferences) => preferences),
    streamTurn: vi.fn().mockReturnValue((async function* () {})()),
    updateConversation: vi.fn().mockImplementation(async (_conversationId, patch) => ({
      archived: patch.archived ?? false,
      conversation_id: "thread-1",
      created_at: "2026-08-21T12:00:00Z",
      edition_id: "shadow-slave",
      pinned: patch.pinned ?? false,
      title: typeof patch.title === "string" ? patch.title : "New chat",
    })),
  };
}

function createMetadataApi(initial: ConversationSummary[]): ChatApi {
  const api = createApi();
  let conversations = initial;
  api.listConversations = vi.fn(async () => conversations);
  api.updateConversation = vi.fn(async (conversationId, patch) => {
    const current = conversations.find((item) => {
      return item.conversation_id === conversationId;
    });
    if (!current) {
      throw new Error("missing test conversation");
    }
    const updated: ConversationSummary = {
      ...current,
      ...patch,
      title: patch.title ?? current.title,
    };
    conversations = conversations.map((item) => {
      return item.conversation_id === conversationId ? updated : item;
    });
    return updated;
  });
  api.deleteConversation = vi.fn(async (conversationId) => {
    conversations = conversations.filter((item) => {
      return item.conversation_id !== conversationId;
    });
    return { deleted: conversationId };
  });
  return api;
}

function deferred<Value>() {
  let resolvePromise: (value: Value) => void = () => undefined;
  let rejectPromise: (reason?: unknown) => void = () => undefined;
  const promise = new Promise<Value>((resolve, reject) => {
    resolvePromise = resolve;
    rejectPromise = reject;
  });
  return {
    promise,
    reject: rejectPromise,
    resolve: resolvePromise,
  };
}

function setDesktopMedia() {
  Object.defineProperty(window, "matchMedia", {
    configurable: true,
    value: vi.fn().mockReturnValue({
      addEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
      matches: false,
      media: "(max-width: 767px)",
      onchange: null,
      removeEventListener: vi.fn(),
    }),
  });
  Object.defineProperty(window, "innerWidth", {
    configurable: true,
    value: 1024,
  });
}

function setMobileMedia() {
  Object.defineProperty(window, "matchMedia", {
    configurable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      addEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
      matches: query.includes("max-width"),
      media: query,
      onchange: null,
      removeEventListener: vi.fn(),
    })),
  });
  Object.defineProperty(window, "innerWidth", {
    configurable: true,
    value: 390,
  });
}

async function openThreadSheet() {
  const opener = await screen.findByRole("button", {
    name: "Open threads and settings",
  });
  fireEvent.click(opener);
}

async function waitForLiveApp() {
  await waitFor(() => {
    expect(screen.getByTestId("spell-surface-live")).toHaveAttribute(
      "data-startup",
      "ready",
    );
  });
}

describe("first Nightmare setup", () => {
  beforeEach(() => {
    setDesktopMedia();
    localStorage.clear();
  });

  it("opens on first run and records Enter later", async () => {
    render(<SpellSurfaceChatApp api={createApi()} privacyLabel="Private" />);

    const dialog = await screen.findByRole("dialog", {
      name: "First Nightmare setup",
    });
    expect(within(dialog).getByText("The Spell has found you")).toBeVisible();
    expect(dialog.querySelector(".first-nightmare-particles")).not.toBeNull();
    expect(screen.queryByTestId("spell-background")).toBeNull();

    fireEvent.click(within(dialog).getByRole("button", { name: "Enter later" }));
    expect(localStorage.getItem(FIRST_NIGHTMARE_STORAGE_KEY)).toBe("deferred");
    expect(screen.queryByRole("dialog", { name: "First Nightmare setup" })).toBeNull();
    await waitForLiveApp();
    expect(
      screen.getByRole("button", { name: "Open threads and settings" }),
    ).toBeVisible();

  }, 10_000);

  it("stays away after setup was deferred", () => {
    localStorage.setItem(FIRST_NIGHTMARE_STORAGE_KEY, "deferred");
    render(<SpellSurfaceChatApp api={createApi()} privacyLabel="Private" />);

    expect(screen.queryByRole("dialog", { name: "First Nightmare setup" })).toBeNull();
  });

  it("accepts the shared allowance and completes the appraisal", async () => {
    render(<SpellSurfaceChatApp api={createApi()} privacyLabel="Private" />);

    const dialog = await screen.findByRole("dialog", {
      name: "First Nightmare setup",
    });
    fireEvent.click(
      within(dialog).getByRole("button", { name: "Enter the First Nightmare" }),
    );
    fireEvent.click(
      within(dialog).getByRole("button", {
        name: "Continue with the shared allowance",
      }),
    );
    fireEvent.click(
      within(dialog).getByRole("button", {
        name: "I understand. Bind the shared voice",
      }),
    );

    await within(dialog).findByText("Good");
    for (const tier of ["Good", "Exceptional", "Remarkable"]) {
      fireEvent.animationEnd(within(dialog).getByText(tier));
    }
    expect(await within(dialog).findByText("The hidden thread listens")).toBeVisible();
    expect(within(dialog).getByText("Glorious")).toBeInTheDocument();
    expect(localStorage.getItem(FIRST_NIGHTMARE_STORAGE_KEY)).toBe("completed");
    expect(screen.queryByTestId("spell-background")).toBeNull();

    fireEvent.click(within(dialog).getByRole("button", { name: "Enter Weaver" }));
    expect(await screen.findByTestId("spell-background")).toHaveAttribute("data-paused", "false");
    expect(screen.getByTestId("spellweave-backdrop")).toHaveAttribute(
      "data-spell-state",
      "reaching",
    );
    fireEvent.animationEnd(dialog);
    expect(screen.queryByRole("dialog", { name: "First Nightmare setup" })).toBeNull();
    await waitForLiveApp();
    await waitFor(() => expect(screen.getByRole("textbox")).toHaveFocus());
    expect(screen.queryByText("[The voice remains unbound.]")).toBeNull();
    expect(
      screen.getByRole("button", {
        name: "Open threads and settings",
      }),
    ).toBeVisible();
  }, 10_000);

  it("completes a fake-mode first run without shared consent", async () => {
    const api = createApi();
    api.getAccess = vi.fn().mockResolvedValue({
      consented: false,
      development: true,
      enabled: false,
      remaining_questions: 0,
      reset_at: null,
      source: "unavailable",
    });
    render(<SpellSurfaceChatApp api={api} privacyLabel="Private" />);

    const dialog = await screen.findByRole("dialog", {
      name: "First Nightmare setup",
    });
    fireEvent.click(
      within(dialog).getByRole("button", { name: "Enter the First Nightmare" }),
    );
    expect(within(dialog).getByText(/Fake mode is active/i)).toBeVisible();
    fireEvent.click(
      within(dialog).getByRole("button", { name: "Continue in fake mode" }),
    );

    expect(dialog).toHaveAttribute("data-rite-act", "appraisal");
    expect(api.acceptSponsoredNotice).not.toHaveBeenCalled();
    expect(localStorage.getItem(FIRST_NIGHTMARE_STORAGE_KEY)).toBe("completed");
  }, 10_000);

  it("does not offer shared access when the reader has no questions left", async () => {
    const api = createApi();
    api.getAccess = vi.fn().mockResolvedValue({
      consented: true,
      enabled: true,
      remaining_questions: 0,
      reset_at: "2026-10-01T00:00:00+00:00",
      source: "sponsored",
    });
    render(<SpellSurfaceChatApp api={api} privacyLabel="Private" />);

    const dialog = await screen.findByRole("dialog", {
      name: "First Nightmare setup",
    });
    fireEvent.click(
      within(dialog).getByRole("button", { name: "Enter the First Nightmare" }),
    );

    expect(within(dialog).getByText(/resting until 00:00 UTC/i)).toBeVisible();
    expect(
      within(dialog).queryByRole("button", {
        name: "Continue with the shared allowance",
      }),
    ).toBeNull();
  }, 10_000);

  it("routes an unconfigured local live server to BYOK", async () => {
    const api = createApi();
    api.getAccess = vi.fn().mockResolvedValue({
      consented: false,
      development: false,
      enabled: false,
      remaining_questions: 0,
      reset_at: null,
      source: "unavailable",
    });
    render(<SpellSurfaceChatApp api={api} privacyLabel="Private" />);

    const dialog = await screen.findByRole("dialog", {
      name: "First Nightmare setup",
    });
    fireEvent.click(
      within(dialog).getByRole("button", { name: "Enter the First Nightmare" }),
    );
    expect(
      within(dialog).getByText(/No shared allowance is configured/i),
    ).toBeVisible();
    fireEvent.click(within(dialog).getByRole("button", { name: "Use my own key" }));

    const settings = await screen.findByRole("dialog", {
      name: "Reader Appraisal settings",
    });
    expect(within(settings).getByText("Direct DeepSeek key")).toBeVisible();
    expect(api.acceptSponsoredNotice).not.toHaveBeenCalled();
  }, 10_000);

  it("continues with a bound key when shared access is unconfigured", async () => {
    localStorage.setItem("weaver_api_key", "sk-test-bound");
    const api = createApi();
    api.getAccess = vi.fn().mockResolvedValue({
      consented: false,
      development: false,
      enabled: false,
      remaining_questions: 0,
      reset_at: null,
      source: "unavailable",
    });
    render(<SpellSurfaceChatApp api={api} privacyLabel="Private" />);

    const dialog = await screen.findByRole("dialog", {
      name: "First Nightmare setup",
    });
    fireEvent.click(
      within(dialog).getByRole("button", { name: "Enter the First Nightmare" }),
    );
    fireEvent.click(
      within(dialog).getByRole("button", { name: "Continue with your own key" }),
    );

    expect(dialog).toHaveAttribute("data-rite-act", "appraisal");
    expect(api.acceptSponsoredNotice).not.toHaveBeenCalled();
    expect(localStorage.getItem(FIRST_NIGHTMARE_STORAGE_KEY)).toBe("completed");
  }, 10_000);

  it("shows the shared allowance after the rite is deferred", async () => {
    render(<SpellSurfaceChatApp api={createApi()} privacyLabel="Private" />);

    const dialog = await screen.findByRole("dialog", {
      name: "First Nightmare setup",
    });
    fireEvent.click(within(dialog).getByRole("button", { name: "Enter later" }));

    expect(
      await screen.findByText("3 shared questions remain. Renews at 00:00 UTC."),
    ).toBeVisible();
  });

  it("enables a stored key and re-reads access once settings save", async () => {
    localStorage.setItem(FIRST_NIGHTMARE_STORAGE_KEY, "completed");
    localStorage.setItem("weaver_api_key", "owner-test-key");
    localStorage.setItem("weaver_api_key_disabled", "1");
    const api = createApi();
    render(<SpellSurfaceChatApp api={api} privacyLabel="Private" />);

    await waitFor(() => {
      expect(screen.getByTestId("spell-surface-live")).toHaveAttribute(
        "data-startup",
        "ready",
      );
    });
    expect(
      await screen.findByText("3 shared questions remain. Renews at 00:00 UTC."),
    ).toBeVisible();
    await openThreadSheet();
    fireEvent.click(screen.getByRole("button", { name: "Open Soul Sea settings" }));
    const settings = await screen.findByRole("dialog", { name: "Reader Appraisal settings" });
    fireEvent.click(within(settings).getByRole("button", { name: "Advanced" }));
    fireEvent.click(within(settings).getByRole("checkbox", { name: /Disable this key/ }));
    const accessChecks = vi.mocked(api.getAccess!).mock.calls.length;
    fireEvent.click(within(settings).getByRole("button", { name: "Apply changes" }));

    // The composer shows the shared allowance here, so the unbound line is
    // never on screen; check the effect instead: the stored key is enabled
    // and access is re-read with it.
    await waitFor(() => {
      expect(localStorage.getItem("weaver_api_key_disabled")).toBeNull();
    });
    await waitFor(() => {
      expect(vi.mocked(api.getAccess!).mock.calls.length).toBeGreaterThan(accessChecks);
    });
  });

  it("keeps settings open and unapplied when the server refuses the save", async () => {
    localStorage.setItem(FIRST_NIGHTMARE_STORAGE_KEY, "completed");
    const api = createApi();
    api.savePreferences = vi
      .fn()
      .mockRejectedValueOnce(new Error("Saving preferences failed (503)"))
      .mockImplementation(async (preferences) => preferences);
    render(<SpellSurfaceChatApp api={api} privacyLabel="Private" />);

    await waitForLiveApp();
    await openThreadSheet();
    fireEvent.click(screen.getByRole("button", { name: "Open Soul Sea settings" }));
    const settings = await screen.findByRole("dialog", { name: "Reader Appraisal settings" });
    // Let the saved preferences Settings fetches on open land first, as a
    // reader would before typing.
    await act(async () => {});
    fireEvent.change(within(settings).getByLabelText("Current chapter"), {
      target: { value: "1200" },
    });
    fireEvent.click(within(settings).getByRole("button", { name: "Apply changes" }));

    expect(await within(settings).findByRole("alert")).toHaveTextContent(
      "[The thread slipped. Your changes were not saved.]",
    );
    expect(screen.getByRole("dialog", { name: "Reader Appraisal settings" })).toBeInTheDocument();
    // The app's reader position is untouched by the failed save.
    expect(screen.getAllByText(/ch 1000/).length).toBeGreaterThan(0);
    expect(screen.queryByText(/ch 1200/)).toBeNull();

    fireEvent.click(within(settings).getByRole("button", { name: "Try again" }));
    await waitFor(
      () => {
        expect(screen.queryByRole("dialog", { name: "Reader Appraisal settings" })).toBeNull();
      },
      { timeout: 3000 },
    );
    // Weaver picks its own reading depth: the save carries no tier, and
    // the reader line shows none.
    expect(api.savePreferences).toHaveBeenLastCalledWith({
      reader_chapter: 1200,
      spoiler_mode: "protect",
    });
    expect(screen.getAllByText(/ch 1200/).length).toBeGreaterThan(0);
    expect(screen.queryByText(/ascended|awakened|transcendent/i)).toBeNull();
  });

  it("opens settings with the model section from the rail footer", async () => {
    localStorage.setItem(FIRST_NIGHTMARE_STORAGE_KEY, "completed");
    localStorage.setItem("weaver_api_key", "owner-test-key");
    render(<SpellSurfaceChatApp api={createApi()} privacyLabel="Private" />);

    await waitForLiveApp();
    await openThreadSheet();
    fireEvent.click(screen.getByRole("button", { name: "Open Soul Sea settings" }));

    const dialog = await screen.findByRole("dialog", {
      name: "Reader Appraisal settings",
    });
    expect(within(dialog).getByRole("heading", { name: "Settings" })).toBeVisible();
    fireEvent.click(
      within(dialog).getByRole("button", { name: "Advanced" }),
    );
    const keyInput = within(dialog).getByLabelText("DeepSeek key");
    expect(keyInput).toBeVisible();
    expect(keyInput).toHaveAttribute("placeholder", "sk-...");
    expect(keyInput).toHaveAttribute("type", "password");
    fireEvent.click(within(dialog).getByRole("button", { name: "Show API key" }));
    expect(keyInput).toHaveAttribute("type", "text");
    expect(
      within(dialog).getByRole("button", { name: /DeepSeek V4.1 Flash/ }),
    ).toHaveAttribute("aria-pressed", "true");
  });

  it("shows the exhausted shared-thread state without hiding conversations", async () => {
    localStorage.setItem(FIRST_NIGHTMARE_STORAGE_KEY, "completed");
    const api = createApi();
    api.getAccess = vi.fn().mockResolvedValue({
      consented: true,
      enabled: true,
      remaining_questions: 0,
      reset_at: "2026-10-01T00:00:00+00:00",
      source: "sponsored",
    });
    render(<SpellSurfaceChatApp api={api} privacyLabel="Private" />);

    await waitForLiveApp();
    expect(
      await screen.findByText(/The shared thread rests until 00:00 UTC/),
    ).toBeVisible();
    expect(screen.getByRole("textbox", { name: "Message Weaver" })).not.toHaveAttribute(
      "readonly",
    );
    expect(screen.getByText("[An empty thread. Start anywhere.]")).toBeVisible();
  });

  it("blocks shared use until the DeepSeek notice is accepted", async () => {
    localStorage.setItem(FIRST_NIGHTMARE_STORAGE_KEY, "completed");
    const api = createApi();
    api.getAccess = vi.fn().mockResolvedValue({
      consented: false,
      enabled: true,
      remaining_questions: 3,
      reset_at: "2026-10-01T00:00:00+00:00",
      source: "sponsored",
    });
    render(<SpellSurfaceChatApp api={api} privacyLabel="Private" />);

    await waitForLiveApp();
    expect(
      await screen.findByText(/shared thread awaits consent/),
    ).toBeVisible();
    expect(screen.getByRole("textbox", { name: "Message Weaver" })).not.toHaveAttribute(
      "readonly",
    );
  });

  it("blocks unavailable shared use while preserving Advanced BYOK", async () => {
    localStorage.setItem(FIRST_NIGHTMARE_STORAGE_KEY, "completed");
    const api = createApi();
    api.getAccess = vi.fn().mockResolvedValue({
      consented: true,
      development: false,
      enabled: false,
      remaining_questions: 3,
      reset_at: "2026-10-01T00:00:00+00:00",
      source: "unavailable",
    });
    render(<SpellSurfaceChatApp api={api} privacyLabel="Private" />);

    await waitForLiveApp();
    expect(
      await screen.findByText(/shared thread is unavailable/),
    ).toBeVisible();
    const composer = screen.getByRole("textbox", { name: "Message Weaver" });
    expect(composer).not.toHaveAttribute(
      "readonly",
    );
    fireEvent.change(composer, { target: { value: "Keep my question" } });
    expect(composer).toHaveValue("Keep my question");
    expect(screen.getByRole("button", { name: "Send message" })).toBeDisabled();
    await waitFor(() => expect(composer).toHaveFocus());
  });

  it("restores a saved Soul Sea beneath the live Spellweave", async () => {
    localStorage.setItem(FIRST_NIGHTMARE_STORAGE_KEY, "completed");
    localStorage.setItem("weaver.spell-surface", JSON.stringify({ soulMode: "nephis" }));
    render(<SpellSurfaceChatApp api={createApi()} privacyLabel="Private" />);

    await waitForLiveApp();
    await screen.findByTestId("spell-background");
    act(() => distantRenderer.onReady?.());
    expect(screen.getByTestId("spellweave-backdrop")).toBeVisible();
    expect(screen.getByRole("img", { name: /Nephis' Soul Sea/ })).toBeVisible();
    expect(screen.getByTestId("spell-surface-live")).toHaveAttribute("data-soul", "nephis");
  });

  it("replays the rite from settings without changing the saved first-run state", async () => {
    localStorage.setItem(FIRST_NIGHTMARE_STORAGE_KEY, "completed");
    render(<SpellSurfaceChatApp api={createApi()} privacyLabel="Private" />);

    await waitForLiveApp();
    await openThreadSheet();
    fireEvent.click(screen.getByRole("button", { name: "Open Soul Sea settings" }));
    const settings = await screen.findByRole("dialog", { name: "Reader Appraisal settings" });
    fireEvent.click(
      within(settings).getByRole("button", { name: "First Nightmare" }),
    );
    fireEvent.click(
      within(settings).getByRole("button", { name: "Replay First Nightmare" }),
    );

    const rite = await screen.findByRole("dialog", { name: "First Nightmare setup" });
    expect(within(rite).getByText("The Spell has found you")).toBeVisible();
    fireEvent.click(within(rite).getByRole("button", { name: "Enter later" }));
    expect(localStorage.getItem(FIRST_NIGHTMARE_STORAGE_KEY)).toBe("completed");
  });
});

describe("Thread Archive", () => {
  beforeEach(() => {
    setDesktopMedia();
    localStorage.clear();
    localStorage.setItem(FIRST_NIGHTMARE_STORAGE_KEY, "completed");
  });

  it("separates server-backed pinned, active, and archived threads", async () => {
    const api = createApi();
    vi.mocked(api.listConversations).mockResolvedValue([
      {
        archived: false,
        conversation_id: "pinned-thread",
        created_at: "2026-08-21T12:00:00Z",
        edition_id: "shadow-slave",
        pinned: true,
        title: "Ariel and the Tomb",
      },
      {
        archived: false,
        conversation_id: "active-thread",
        created_at: "2026-08-21T11:00:00Z",
        edition_id: "shadow-slave",
        pinned: false,
        title: "Sunny and Nephis",
      },
      {
        archived: true,
        conversation_id: "archived-thread",
        created_at: "2026-08-19T12:00:00Z",
        edition_id: "shadow-slave",
        pinned: false,
        title: "Forgotten Shore",
      },
    ]);

    render(<SpellSurfaceChatApp api={api} privacyLabel="Private" />);
    await openThreadSheet();

    const chats = await screen.findByRole("region", { name: "Chats" });
    expect(within(chats).getByText("Ariel and the Tomb")).toBeVisible();
    expect(within(chats).getByText("Sunny and Nephis")).toBeVisible();
    expect(within(chats).queryByText("Forgotten Shore")).toBeNull();
    const unpinButton = within(chats).getByRole("button", {
      name: "Unpin Ariel and the Tomb",
    });
    expect(unpinButton).toHaveAttribute("title", "Unpin");
    expect(unpinButton.querySelector("svg")).toHaveAttribute(
      "data-icon",
      "thumbtack-slash",
    );
    // Pinned chats come first inside the one Chats list.
    const rows = within(chats).getAllByRole("listitem");
    expect(rows[0]).toHaveTextContent("Ariel and the Tomb");
    expect(
      within(chats).getByRole("button", { name: "Pin Sunny and Nephis" }),
    ).toHaveAttribute("title", "Pin");

    const fanfic = screen.getByRole("region", { name: "Fanfic" });
    expect(within(fanfic).getByText("[No fanfic yet. Start one above.]")).toBeVisible();

    fireEvent.click(screen.getByRole("button", { name: /Open archived threads/ }));
    expect(screen.getByRole("heading", { name: "Archived threads" })).toBeVisible();
    expect(screen.getByRole("navigation", { name: "Archived threads" })).toHaveTextContent("Forgotten Shore");
    expect(screen.getByRole("button", { name: "Return to active threads" })).toBeVisible();
  });

  it("opens an explicit delete confirmation before deleting", async () => {
    const api = createMetadataApi([
      {
        archived: false,
        conversation_id: "thread-1",
        created_at: "2026-08-21T12:00:00Z",
        edition_id: "shadow-slave",
        pinned: false,
        title: "Ariel and the Tomb",
      },
    ]);

    render(<SpellSurfaceChatApp api={api} privacyLabel="Private" />);
    await openThreadSheet();
    const row = await screen.findByTestId("thread-thread-1");
    fireEvent.click(within(row).getByRole("button", { name: "Delete Ariel and the Tomb" }));

    expect(api.deleteConversation).not.toHaveBeenCalled();
    const confirmation = within(row).getByRole("dialog", { name: "Delete Ariel and the Tomb" });
    expect(within(confirmation).getByText("Delete thread?")).toBeVisible();
    expect(within(confirmation).getByRole("button", { name: "Cancel" })).toBeVisible();
    fireEvent.click(within(confirmation).getByRole("button", { name: "Delete thread" }));
    expect(api.deleteConversation).toHaveBeenCalledWith("thread-1");
    await waitFor(() => {
      expect(screen.queryByTestId("thread-thread-1")).toBeNull();
    });
  });

  it("deletes another thread while the current answer is still weaving", async () => {
    let finishAnswer: (() => void) | undefined;
    const answerCanFinish = new Promise<void>((resolve) => {
      finishAnswer = resolve;
    });
    const api = createMetadataApi([
      {
        archived: false,
        conversation_id: "current-thread",
        created_at: "2026-08-22T12:00:00Z",
        edition_id: "shadow-slave",
        pinned: false,
        title: "Current answer",
      },
      {
        archived: false,
        conversation_id: "other-thread",
        created_at: "2026-08-22T11:00:00Z",
        edition_id: "shadow-slave",
        pinned: false,
        title: "Old theory",
      },
    ]);
    api.streamTurn = vi.fn().mockImplementation(() => {
      return (async function* () {
        await answerCanFinish;
        yield { type: "completed" as const, text: "Finished." };
      })();
    });
    render(<SpellSurfaceChatApp api={api} privacyLabel="Private" />);
    await openThreadSheet();
    await screen.findByTestId("thread-current-thread");
    fireEvent.click(screen.getByRole("button", { name: "Close threads" }));

    fireEvent.change(screen.getByRole("textbox", { name: "Message Weaver" }), {
      target: { value: "keep weaving" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Send message" }));
    await screen.findByRole("button", { name: "Stop Weaver" });
    await openThreadSheet();

    const oldThread = await screen.findByTestId("thread-other-thread");
    fireEvent.click(
      within(oldThread).getByRole("button", { name: "Delete Old theory" }),
    );
    fireEvent.click(
      within(oldThread).getByRole("button", { name: "Delete thread" }),
    );

    await waitFor(() => {
      expect(api.deleteConversation).toHaveBeenCalledWith("other-thread");
    });
    finishAnswer?.();
  });

  it("keeps a server-confirmed pin after the app remounts", async () => {
    const api = createMetadataApi([
      {
        archived: false,
        conversation_id: "durable-thread",
        created_at: "2026-08-21T12:00:00Z",
        edition_id: "shadow-slave",
        pinned: false,
        title: "Durable theory",
      },
    ]);
    const firstRender = render(
      <SpellSurfaceChatApp api={api} privacyLabel="Private" />,
    );
    await openThreadSheet();
    const row = await screen.findByTestId("thread-durable-thread");

    fireEvent.click(
      within(row).getByRole("button", { name: "Pin Durable theory" }),
    );

    const chats = await screen.findByRole("region", { name: "Chats" });
    expect(
      within(chats).getByRole("button", { name: "Unpin Durable theory" }),
    ).toBeInTheDocument();
    firstRender.unmount();
    render(<SpellSurfaceChatApp api={api} privacyLabel="Private" />);
    await openThreadSheet();

    const restored = await screen.findByRole("region", { name: "Chats" });
    expect(within(restored).getByText("Durable theory")).toBeVisible();
    expect(
      within(restored).getByRole("button", { name: "Unpin Durable theory" }),
    ).toBeInTheDocument();
  });

  it("keeps the thread unchanged and shows safe copy when a mutation fails", async () => {
    const api = createMetadataApi([
      {
        archived: false,
        conversation_id: "failed-thread",
        created_at: "2026-08-21T12:00:00Z",
        edition_id: "shadow-slave",
        pinned: false,
        title: "Unbroken thread",
      },
    ]);
    api.updateConversation = vi.fn().mockRejectedValue(
      new ChatApiError("Updating conversation", 500),
    );
    render(<SpellSurfaceChatApp api={api} privacyLabel="Private" />);
    await openThreadSheet();
    const row = await screen.findByTestId("thread-failed-thread");

    fireEvent.click(
      within(row).getByRole("button", { name: "Pin Unbroken thread" }),
    );

    expect(
      await screen.findByText("The change could not be saved. Try again."),
    ).toBeVisible();
    expect(
      within(screen.getByRole("region", { name: "Chats" })).getByText(
        "Unbroken thread",
      ),
    ).toBeVisible();
  });

  it("moves to another active thread after archiving the current thread", async () => {
    const api = createMetadataApi([
      {
        archived: false,
        conversation_id: "current-thread",
        created_at: "2026-08-21T12:00:00Z",
        edition_id: "shadow-slave",
        pinned: false,
        title: "Current thread",
      },
      {
        archived: false,
        conversation_id: "next-thread",
        created_at: "2026-08-21T11:00:00Z",
        edition_id: "shadow-slave",
        pinned: false,
        title: "Next active thread",
      },
    ]);
    render(<SpellSurfaceChatApp api={api} privacyLabel="Private" />);
    await openThreadSheet();
    const currentRow = await screen.findByTestId("thread-current-thread");

    fireEvent.click(
      within(currentRow).getByRole("button", { name: "Archive Current thread" }),
    );

    const nextRow = await screen.findByTestId("thread-next-thread");
    await waitFor(() => {
      expect(
        within(nextRow).getByRole("button", { name: "Next active thread" }),
      ).toHaveAttribute("aria-current", "page");
    });
    expect(api.loadMessages).toHaveBeenCalledWith("next-thread");
  });
});

describe("mobile thread drawer", () => {
  beforeEach(() => {
    setMobileMedia();
    localStorage.setItem(FIRST_NIGHTMARE_STORAGE_KEY, "deferred");
  });

  it("locks page scroll and closes from the solid scrim", async () => {
    render(<SpellSurfaceChatApp api={createApi()} privacyLabel="Private" />);
    await waitForLiveApp();

    expect(screen.queryByRole("dialog", { name: "Threads and settings" })).toBeNull();

    const opener = await screen.findByRole("button", {
      name: "Open threads and settings",
    });
    fireEvent.click(opener);
    const drawer = await screen.findByRole("dialog", {
      name: "Threads and settings",
    });
    expect(document.querySelector(".lab-chat-main")).toHaveAttribute("inert");
    expect(document.body.style.overflow).toBe("hidden");

    const scrim = document.querySelector<HTMLButtonElement>(".lab-menu-backdrop");
    expect(scrim).not.toBeNull();
    if (!scrim) {
      return;
    }
    expect(scrim).toHaveAttribute("tabindex", "-1");
    fireEvent.click(scrim);
    await waitFor(() =>
      expect(screen.queryByRole("dialog", { name: "Threads and settings" })).toBeNull(),
    );
    expect(opener).toHaveFocus();
    expect(document.querySelector(".lab-chat-main")).not.toHaveAttribute("inert");
    expect(document.body.style.overflow).toBe("");
  });

  it("closes on Escape and restores focus to the opener", async () => {
    render(<SpellSurfaceChatApp api={createApi()} privacyLabel="Private" />);
    await waitForLiveApp();

    const opener = screen.getByRole("button", { name: "Open threads and settings" });
    expect(opener).not.toBeNull();
    if (!opener) {
      return;
    }
    fireEvent.click(opener);
    await screen.findByRole("dialog", { name: "Threads and settings" });
    fireEvent.keyDown(window, { key: "Escape" });

    await waitFor(() => expect(opener).toHaveFocus());
    expect(document.body.style.overflow).toBe("");
  });

  it("keeps keyboard focus inside the open drawer", async () => {
    render(<SpellSurfaceChatApp api={createApi()} privacyLabel="Private" />);
    await waitForLiveApp();

    const opener = screen.getByRole("button", { name: "Open threads and settings" });
    expect(opener).not.toBeNull();
    if (!opener) {
      return;
    }
    fireEvent.click(opener);
    const drawer = screen.getByRole("dialog", { name: "Threads and settings" });
    const focusable = within(drawer).getAllByRole("button");
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    first.focus();
    fireEvent.keyDown(drawer, { key: "Tab", shiftKey: true });
    expect(last).toHaveFocus();
  });

  it("keeps the drawer open until an older thread is actually recalled", async () => {
    const conversations: ConversationSummary[] = [
      {
        archived: false,
        conversation_id: "current-thread",
        created_at: "2026-08-31T12:00:00Z",
        edition_id: "shadow-slave",
        pinned: false,
        title: "Current thread",
      },
      {
        archived: false,
        conversation_id: "older-thread",
        created_at: "2026-08-30T12:00:00Z",
        edition_id: "shadow-slave",
        pinned: false,
        title: "Older thread",
      },
    ];
    const olderMessages = deferred<StoredMessage[]>();
    const api = createMetadataApi(conversations);
    api.loadMessages = vi.fn(async (conversationId) => {
      if (conversationId === "older-thread") {
        return olderMessages.promise;
      }
      return [{
        content: "The current answer.",
        created_at: "2026-08-31T12:00:00Z",
        message_id: "current-message",
        role: "weaver" as const,
        turn_id: "current-turn",
      }];
    });
    localStorage.setItem("weaver.active-conversation", "current-thread");
    render(<SpellSurfaceChatApp api={api} privacyLabel="Private" />);

    await screen.findByText("The current answer.");
    await openThreadSheet();
    const drawer = screen.getByRole("dialog", { name: "Threads and settings" });
    fireEvent.click(within(drawer).getByRole("button", { name: "Older thread" }));

    expect(drawer).toBeVisible();
    olderMessages.resolve([{
      content: "The older answer returns.",
      created_at: "2026-08-30T12:00:00Z",
      message_id: "older-message",
      role: "weaver",
      turn_id: "older-turn",
    }]);
    expect(await screen.findByText("The older answer returns.")).toBeVisible();
    await waitFor(() =>
      expect(
        screen.queryByRole("dialog", { name: "Threads and settings" }),
      ).toBeNull(),
    );
  });

  it("keeps the drawer open and explains a failed thread recall", async () => {
    const api = createMetadataApi([
      {
        archived: false,
        conversation_id: "current-thread",
        created_at: "2026-08-31T12:00:00Z",
        edition_id: "shadow-slave",
        pinned: false,
        title: "Current thread",
      },
      {
        archived: false,
        conversation_id: "missing-thread",
        created_at: "2026-08-30T12:00:00Z",
        edition_id: "shadow-slave",
        pinned: false,
        title: "Missing thread",
      },
    ]);
    api.loadMessages = vi.fn(async (conversationId) => {
      if (conversationId === "missing-thread") {
        throw new ChatApiError("Loading the conversation", 404);
      }
      return [];
    });
    localStorage.setItem("weaver.active-conversation", "current-thread");
    render(<SpellSurfaceChatApp api={api} privacyLabel="Private" />);

    await openThreadSheet();
    await screen.findByTestId("thread-current-thread");
    const drawer = screen.getByRole("dialog", { name: "Threads and settings" });
    fireEvent.click(within(drawer).getByRole("button", { name: "Missing thread" }));

    expect(await within(drawer).findByText("That thread can no longer be found.")).toBeVisible();
    expect(drawer).toBeVisible();
    expect(localStorage.getItem("weaver.active-conversation")).toBe("current-thread");
  });

  it("keeps the drawer open when the current thread is still weaving", async () => {
    const answerCanFinish = deferred<void>();
    const api = createMetadataApi([
      {
        archived: false,
        conversation_id: "current-thread",
        created_at: "2026-08-31T12:00:00Z",
        edition_id: "shadow-slave",
        pinned: false,
        title: "Current thread",
      },
      {
        archived: false,
        conversation_id: "older-thread",
        created_at: "2026-08-30T12:00:00Z",
        edition_id: "shadow-slave",
        pinned: false,
        title: "Older thread",
      },
    ]);
    api.streamTurn = vi.fn().mockImplementation(() => {
      return (async function* () {
        yield { type: "delta" as const, text: "The answer begins." };
        await answerCanFinish.promise;
        yield { type: "completed" as const, text: "The answer settles." };
      })();
    });
    localStorage.setItem("weaver.active-conversation", "current-thread");
    render(<SpellSurfaceChatApp api={api} privacyLabel="Private" />);
    await waitForLiveApp();

    fireEvent.change(screen.getByRole("textbox", { name: "Message Weaver" }), {
      target: { value: "Keep weaving" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Send message" }));
    await screen.findByRole("button", { name: "Stop Weaver" });

    await openThreadSheet();
    const drawer = screen.getByRole("dialog", { name: "Threads and settings" });
    fireEvent.click(within(drawer).getByRole("button", { name: "Older thread" }));

    expect(
      await within(drawer).findByText(
        "That thread is still weaving. Let its answer settle first.",
      ),
    ).toBeVisible();
    expect(drawer).toBeVisible();
    expect(api.loadMessages).not.toHaveBeenCalledWith("older-thread");
    answerCanFinish.resolve();
  });

  it("restores focus after settings close", async () => {
    render(<SpellSurfaceChatApp api={createApi()} privacyLabel="Private" />);

    await waitForLiveApp();
    await openThreadSheet();
    const opener = screen.getByRole("button", { name: "Open Soul Sea settings" });
    opener.focus();
    fireEvent.click(opener);
    const settings = await screen.findByRole("dialog", { name: "Reader Appraisal settings" });
    fireEvent.click(within(settings).getByRole("button", { name: "Close settings" }));

    await waitFor(() => expect(opener).toHaveFocus());
  });

  it("opens Settings before the saved reader request settles", async () => {
    const storedPreferences = deferred<{
      reader_chapter: number;
      spoiler_mode: "protect";
    }>();
    const api = createApi();
    api.getPreferences = vi.fn(() => storedPreferences.promise);
    render(<SpellSurfaceChatApp api={api} privacyLabel="Private" />);
    await waitForLiveApp();

    await openThreadSheet();
    fireEvent.click(
      screen.getByRole("button", { name: "Open Soul Sea settings" }),
    );

    expect(
      screen.getByRole("dialog", { name: "Reader Appraisal settings" }),
    ).toBeVisible();
    expect(screen.getByTestId("spell-background")).toHaveAttribute(
      "data-paused",
      "true",
    );

    await act(async () => {
      storedPreferences.resolve({
        reader_chapter: 1200,
        spoiler_mode: "protect",
      });
    });
    await waitFor(() => {
      expect(screen.getByLabelText("Current chapter")).toHaveValue(1200);
    });
  });
});

describe("live Spellweave foundation", () => {
  beforeEach(() => {
    setDesktopMedia();
    localStorage.setItem(FIRST_NIGHTMARE_STORAGE_KEY, "deferred");
  });

  it("mounts one decorative three-depth backdrop around the existing chat", async () => {
    render(<SpellSurfaceChatApp api={createApi()} privacyLabel="Private" />);

    const backdrop = screen.getByTestId("spellweave-backdrop");
    expect(backdrop).toHaveAttribute("aria-hidden", "true");
    expect(backdrop.querySelectorAll("[data-spell-depth]")).toHaveLength(3);
    expect(backdrop.querySelector("button, input, textarea, a")).toBeNull();
    await waitFor(() => {
      expect(screen.getByTestId("spell-surface-live")).toHaveAttribute(
        "data-startup",
        "ready",
      );
    });
    expect(screen.getByRole("textbox")).toBeVisible();
    expect(await screen.findByTestId("spell-background")).toHaveAttribute(
      "data-thread-alpha",
      "0.2",
    );
  });

  it("loads conversations before starting and revealing the Star Web", async () => {
    const conversations = deferred<ConversationSummary[]>();
    const api = createApi();
    api.listConversations = vi.fn(() => conversations.promise);
    render(<SpellSurfaceChatApp api={api} privacyLabel="Private" />);

    expect(screen.queryByTestId("spell-background")).toBeNull();
    expect(screen.getByTestId("spellweave-backdrop")).toHaveAttribute(
      "data-renderer-ready",
      "false",
    );
    expect(screen.getByTestId("spell-surface-live")).toHaveAttribute(
      "data-startup",
      "waiting",
    );
    expect(document.querySelector(".lab-chat-main")).toHaveAttribute("inert");
    expect(document.querySelector(".lab-chat-main")).toHaveAttribute(
      "aria-hidden",
      "true",
    );
    expect(document.querySelector(".lab-soul-sea")).toHaveAttribute("inert");
    expect(document.querySelector(".lab-soul-sea")).toHaveAttribute(
      "aria-hidden",
      "true",
    );
    const backdrop = screen.getByTestId("spellweave-backdrop");
    const chatMain = document.querySelector(".lab-chat-main");
    expect(chatMain).not.toBeNull();
    if (!chatMain) {
      return;
    }
    expect(
      backdrop.compareDocumentPosition(chatMain) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();

    conversations.resolve([]);
    await waitFor(() => {
      expect(screen.getByTestId("spell-surface-live")).toHaveAttribute(
        "data-startup",
        "ready",
      );
    });
    expect(await screen.findByTestId("spell-background")).toBeInTheDocument();
    expect(screen.getByTestId("spellweave-backdrop")).toHaveAttribute(
      "data-renderer-ready",
      "false",
    );
    act(() => distantRenderer.onReady?.());
    expect(screen.getByTestId("spellweave-backdrop")).toHaveAttribute(
      "data-renderer-ready",
      "true",
    );
    expect(document.querySelector(".lab-chat-main")).not.toHaveAttribute("inert");
    expect(document.querySelector(".lab-soul-sea")).not.toHaveAttribute("inert");
  });

  it("lets a newer thread selection settle startup without stale overwrite", async () => {
    const startupMessages = deferred<StoredMessage[]>();
    const api = createMetadataApi([
      {
        archived: false,
        conversation_id: "startup-thread",
        created_at: "2026-08-31T12:00:00Z",
        edition_id: "shadow-slave",
        pinned: false,
        title: "Startup thread",
      },
      {
        archived: false,
        conversation_id: "newer-thread",
        created_at: "2026-08-31T12:01:00Z",
        edition_id: "shadow-slave",
        pinned: false,
        title: "Newer thread",
      },
    ]);
    api.loadMessages = vi.fn(async (conversationId) => {
      if (conversationId === "startup-thread") {
        return startupMessages.promise;
      }
      return [{
        content: "The newer answer remains.",
        created_at: "2026-08-31T12:01:00Z",
        message_id: "newer-message",
        role: "weaver" as const,
        turn_id: "newer-turn",
      }];
    });
    localStorage.setItem("weaver.active-conversation", "startup-thread");
    const { result } = renderHook(() => useChatController(api, weaverProduct));

    await waitFor(() => {
      expect(api.loadMessages).toHaveBeenCalledWith("startup-thread");
    });
    await act(async () => {
      expect(await result.current.selectConversation("newer-thread")).toBe(true);
    });

    expect(result.current.booting).toBe(false);
    expect(result.current.conversationId).toBe("newer-thread");
    expect(result.current.messages[0]?.content).toBe("The newer answer remains.");

    startupMessages.resolve([{
      content: "The stale startup answer.",
      created_at: "2026-08-31T12:00:00Z",
      message_id: "startup-message",
      role: "weaver",
      turn_id: "startup-turn",
    }]);
    await act(async () => Promise.resolve());

    expect(result.current.conversationId).toBe("newer-thread");
    expect(result.current.messages[0]?.content).toBe("The newer answer remains.");
  });

  it("acknowledges an already empty New Weave and returns focus to chat", async () => {
    setMobileMedia();
    const api = createMetadataApi([
      {
        archived: false,
        conversation_id: "empty-thread",
        created_at: "2026-08-31T12:00:00Z",
        edition_id: "shadow-slave",
        pinned: false,
        title: "Empty thread",
      },
      {
        archived: false,
        conversation_id: "new-thread",
        created_at: "2026-08-31T12:01:00Z",
        edition_id: "shadow-slave",
        pinned: false,
        title: "New thread",
      },
    ]);
    localStorage.setItem("weaver.active-conversation", "empty-thread");
    render(<SpellSurfaceChatApp api={api} privacyLabel="Private" />);

    await openThreadSheet();
    await screen.findByTestId("thread-empty-thread");
    const drawer = screen.getByRole("dialog", { name: "Threads and settings" });
    fireEvent.click(within(drawer).getByRole("button", { name: "Start a new weave" }));
    fireEvent.click(screen.getByRole("menuitem", { name: /New thread/ }));

    expect(api.createConversation).not.toHaveBeenCalled();
    await waitFor(() =>
      expect(
        screen.queryByRole("dialog", { name: "Threads and settings" }),
      ).toBeNull(),
    );
    await waitFor(() => {
      expect(screen.getByRole("textbox", { name: "Message Weaver" })).toHaveFocus();
    });
    expect(screen.getByText("[An empty thread. Start anywhere.]")).toBeVisible();
    expect(localStorage.getItem("weaver.active-conversation")).toBe("empty-thread");
  });

  it("keeps the foreground weave stable while a reply is running", async () => {
    let finishAnswer: (() => void) | undefined;
    const answerCanFinish = new Promise<void>((resolve) => {
      finishAnswer = resolve;
    });
    const api = createApi();
    api.streamTurn = vi.fn().mockImplementation(() => {
      return (async function* () {
        await answerCanFinish;
        yield { type: "completed" as const, text: "The answer settles." };
      })();
    });
    render(<SpellSurfaceChatApp api={api} privacyLabel="Private" />);
    await waitFor(() => expect(api.createConversation).toHaveBeenCalled());

    fireEvent.change(screen.getByRole("textbox", { name: "Message Weaver" }), {
      target: { value: "Keep the star web still" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Send message" }));

    const foreground = document.querySelector(".spellweave-field-foreground");
    expect(foreground).not.toHaveAttribute("data-spell-state");
    finishAnswer?.();
  });

  it("keeps the composer focused through send and reply completion", async () => {
    let finishAnswer: (() => void) | undefined;
    const answerCanFinish = new Promise<void>((resolve) => {
      finishAnswer = resolve;
    });
    const api = createApi();
    api.streamTurn = vi.fn().mockImplementation(() => {
      return (async function* () {
        await answerCanFinish;
        yield { type: "completed" as const, text: "The answer settles." };
      })();
    });
    render(<SpellSurfaceChatApp api={api} privacyLabel="Private" />);
    await waitFor(() => expect(api.createConversation).toHaveBeenCalled());

    const composer = screen.getByRole("textbox", { name: "Message Weaver" });
    fireEvent.change(composer, { target: { value: "Hold my focus" } });
    fireEvent.keyDown(composer, { key: "Enter" });

    await waitFor(() => expect(composer).toHaveFocus());
    expect(composer).toHaveAttribute("readonly");

    finishAnswer?.();
    await screen.findByText("The answer settles.");
    await waitFor(() => expect(composer).toHaveFocus());
    expect(composer).not.toHaveAttribute("readonly");
  });

  it("shows Soul Sea cores without a visible caption in the chat", () => {
    render(<SpellSurfaceChatApp api={createApi()} privacyLabel="Private" />);

    expect(document.querySelectorAll(".lab-soul-sun")).toHaveLength(7);
    expect(document.querySelector(".lab-soul-caption")).toBeNull();
  });

  it("keeps threads off the canvas until the composer + asks for them", async () => {
    render(<SpellSurfaceChatApp api={createApi()} privacyLabel="Private" />);
    await waitForLiveApp();

    expect(screen.queryByRole("dialog", { name: "Threads and settings" })).toBeNull();
    expect(screen.queryByText("New Weave")).toBeNull();

    await openThreadSheet();
    const sheet = await screen.findByRole("dialog", { name: "Threads and settings" });
    expect(within(sheet).getByRole("button", { name: "Start a new weave" })).toBeVisible();

    fireEvent.click(within(sheet).getByRole("button", { name: "Close threads" }));
    await waitFor(() =>
      expect(screen.queryByRole("dialog", { name: "Threads and settings" })).toBeNull(),
    );
  });

  it("announces a failed turn instead of calling it complete", async () => {
    const api = createApi();
    api.streamTurn = vi.fn().mockReturnValue((async function* () {
      await Promise.resolve();
      yield {
        code: "simulated_model",
        message: "Safe simulated failure.",
        type: "failed" as const,
      };
    })());
    render(<SpellSurfaceChatApp api={api} privacyLabel="Private" />);
    await waitFor(() => expect(api.createConversation).toHaveBeenCalled());

    fireEvent.change(screen.getByRole("textbox", { name: "Message Weaver" }), {
      target: { value: "/fake error model" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Send message" }));

    expect(
      (await screen.findAllByText("[The simulated voice did not answer.]"))[0],
    ).toBeVisible();
    expect(screen.queryByText("[The weave is complete.]")).toBeNull();
  });

  it("announces an interrupted turn instead of calling it complete", async () => {
    const api = createApi();
    api.streamTurn = vi.fn().mockReturnValue((async function* () {
      await Promise.resolve();
      yield {
        message: "The turn was interrupted.",
        type: "interrupted" as const,
      };
    })());
    render(<SpellSurfaceChatApp api={api} privacyLabel="Private" />);
    await waitFor(() => expect(api.createConversation).toHaveBeenCalled());

    fireEvent.change(screen.getByRole("textbox", { name: "Message Weaver" }), {
      target: { value: "/fake slow" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Send message" }));

    expect((await screen.findAllByText("[The thread was cut.]"))[0]).toBeVisible();
    expect(screen.queryByText("[The weave is complete.]")).toBeNull();
  });
});
  it("opens a fanfic thread from the sheet without leaving the conversation", async () => {
    localStorage.setItem(FIRST_NIGHTMARE_STORAGE_KEY, "completed");
    const api = createApi();
    render(<SpellSurfaceChatApp api={api} privacyLabel="Private" />);
    await waitForLiveApp();

    await openThreadSheet();
    fireEvent.click(screen.getByRole("button", { name: "Start a new weave" }));
    fireEvent.click(screen.getByRole("menuitem", { name: /New fanfic/ }));

    await waitFor(() => {
      expect(api.createConversation).toHaveBeenCalledWith({
        domain: "fanfic",
        fanfic_kind: "missing_scene",
      });
    });
    await waitFor(() =>
      expect(
        screen.queryByRole("dialog", { name: "Threads and settings" }),
      ).toBeNull(),
    );
  });

describe("spoiler boundary", () => {
  beforeEach(() => {
    setDesktopMedia();
    localStorage.clear();
    localStorage.setItem(FIRST_NIGHTMARE_STORAGE_KEY, "completed");
  });

  function freshDeviceApi(): ChatApi {
    const api = createApi();
    api.getPreferences = vi.fn().mockResolvedValue({
      reader_chapter: null,
      spoiler_mode: "protect",
    });
    return api;
  }

  async function send(text: string) {
    fireEvent.change(screen.getByRole("textbox", { name: "Message Weaver" }), {
      target: { value: text },
    });
    fireEvent.click(screen.getByRole("button", { name: "Send message" }));
  }

  it("says there is no boundary instead of showing the placeholder chapter", async () => {
    render(<SpellSurfaceChatApp api={freshDeviceApi()} privacyLabel="Private" />);
    await waitForLiveApp();

    expect((await screen.findAllByText(/No spoiler boundary/)).length).toBeGreaterThan(0);
    expect(screen.queryByText(/ch 1000/)).toBeNull();
  });

  it("offers to protect a chapter the reader mentions, and saves it on one tap", async () => {
    const api = freshDeviceApi();
    render(<SpellSurfaceChatApp api={api} privacyLabel="Private" />);
    await waitForLiveApp();
    await screen.findAllByText(/No spoiler boundary/);

    await send("I'm at chapter 742, who is the Warden?");
    const offer = await screen.findByRole("group", { name: "Spoiler boundary" });
    expect(offer).toHaveTextContent("[Chapter 742, noted.]");
    expect(api.savePreferences).not.toHaveBeenCalled();

    fireEvent.click(within(offer).getByRole("button", { name: "Protect after ch 742" }));
    await waitFor(() => {
      expect(screen.queryByRole("group", { name: "Spoiler boundary" })).toBeNull();
    });
    expect(api.savePreferences).toHaveBeenCalledWith({
      reader_chapter: 742,
      spoiler_mode: "protect",
    });
    expect(screen.getAllByText(/ch 742/).length).toBeGreaterThan(0);
  });

  it("keeps the offer with a retry when the save fails", async () => {
    const api = freshDeviceApi();
    api.savePreferences = vi.fn().mockRejectedValue(new Error("offline"));
    render(<SpellSurfaceChatApp api={api} privacyLabel="Private" />);
    await waitForLiveApp();
    await screen.findAllByText(/No spoiler boundary/);

    await send("just finished chapter 742");
    const offer = await screen.findByRole("group", { name: "Spoiler boundary" });
    fireEvent.click(within(offer).getByRole("button", { name: "Protect after ch 742" }));

    expect(await within(offer).findByText(/Your boundary was not saved/)).toBeVisible();
    expect(within(offer).getByRole("button", { name: "Try again" })).toBeVisible();
  });

  it("does not offer the chapter that is already the boundary", async () => {
    render(<SpellSurfaceChatApp api={createApi()} privacyLabel="Private" />);
    await waitForLiveApp();
    await screen.findAllByText(/ch 1000/);

    await send("I'm at chapter 1000 now");
    await act(async () => {});
    expect(screen.queryByRole("group", { name: "Spoiler boundary" })).toBeNull();
  });

  it("can be dismissed without saving", async () => {
    const api = freshDeviceApi();
    render(<SpellSurfaceChatApp api={api} privacyLabel="Private" />);
    await waitForLiveApp();
    await screen.findAllByText(/No spoiler boundary/);

    await send("im on ch 900");
    const offer = await screen.findByRole("group", { name: "Spoiler boundary" });
    fireEvent.click(within(offer).getByRole("button", { name: "Not now" }));

    expect(screen.queryByRole("group", { name: "Spoiler boundary" })).toBeNull();
    expect(api.savePreferences).not.toHaveBeenCalled();
  });
});

describe("saving a thread", () => {
  beforeEach(() => {
    setDesktopMedia();
    localStorage.clear();
    localStorage.setItem(FIRST_NIGHTMARE_STORAGE_KEY, "completed");
  });

  it("hands the reader the conversation as a Markdown file", async () => {
    const api = createApi();
    api.streamTurn = vi.fn().mockImplementation(() => {
      return (async function* () {
        yield { type: "completed" as const, text: "Nephis, on reach (ch. 104)." };
      })();
    });
    const blobs: Blob[] = [];
    const createObjectURL = vi.fn((blob: Blob) => {
      blobs.push(blob);
      return "blob:weaver-thread";
    });
    const revokeObjectURL = vi.fn();
    Object.assign(URL, { createObjectURL, revokeObjectURL });
    const click = vi
      .spyOn(HTMLAnchorElement.prototype, "click")
      .mockImplementation(() => {});

    render(<SpellSurfaceChatApp api={api} privacyLabel="Private" />);
    await waitForLiveApp();
    expect(screen.queryByRole("button", { name: "Save this thread" })).toBeNull();

    fireEvent.change(screen.getByRole("textbox", { name: "Message Weaver" }), {
      target: { value: "who would win, Sunny or Nephis?" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Send message" }));
    const save = await screen.findByRole("button", { name: "Save this thread" });
    await waitFor(() => expect(save).toBeEnabled());
    fireEvent.click(save);

    expect(click).toHaveBeenCalledOnce();
    const link = click.mock.contexts[0] as HTMLAnchorElement;
    expect(link.download).toMatch(/\.md$/);
    expect(blobs).toHaveLength(1);
    // jsdom's Blob has no text(); FileReader reads it the old way.
    const text = await new Promise<string>((resolve) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result));
      reader.readAsText(blobs[0]);
    });
    expect(text).toContain("**You**\n\nwho would win, Sunny or Nephis?");
    expect(text).toContain("**Weaver**\n\nNephis, on reach (ch. 104).");
    click.mockRestore();
  });
});

describe("settings shortcut", () => {
  beforeEach(() => {
    setDesktopMedia();
    localStorage.clear();
    localStorage.setItem(FIRST_NIGHTMARE_STORAGE_KEY, "completed");
  });

  it("names only what Settings holds, and stores no rune preference", async () => {
    const api = createApi();
    render(<SpellSurfaceChatApp api={api} privacyLabel="Private" />);
    await waitForLiveApp();
    await openThreadSheet();

    const shortcut = screen.getByRole("button", { name: "Open Soul Sea settings" });
    await waitFor(() => expect(shortcut).toHaveTextContent("ch 1000"));
    expect(shortcut).not.toHaveTextContent(/runes/i);

    fireEvent.click(shortcut);
    const settings = await screen.findByRole("dialog", { name: "Reader Appraisal settings" });
    await act(async () => {});
    fireEvent.click(within(settings).getByRole("button", { name: "Appearance" }));
    fireEvent.click(within(settings).getByRole("button", { name: "Nephis' Soul Sea" }));
    fireEvent.click(within(settings).getByRole("button", { name: "Apply changes" }));
    await waitFor(() => expect(api.savePreferences).toHaveBeenCalled());

    const stored = JSON.parse(localStorage.getItem("weaver.spell-surface") ?? "{}");
    expect(stored.soulMode).toBe("nephis");
    expect(stored).not.toHaveProperty("runeMode");
    expect(screen.getByTestId("spell-surface-live")).not.toHaveAttribute("data-runes");
  });
});
