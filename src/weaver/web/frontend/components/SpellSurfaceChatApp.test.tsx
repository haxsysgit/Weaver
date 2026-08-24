import { fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import {
  ChatApiError,
  type ChatApi,
  type ConversationSummary,
} from "../lib/chatApi";
import { FIRST_NIGHTMARE_STORAGE_KEY } from "../lib/firstNightmare";
import { getApiKey } from "../lib/identity";
import { SpellSurfaceChatApp } from "./SpellSurfaceChatApp";

vi.mock("./SpellBackground", () => ({
  SpellBackground: ({ paused }: { paused: boolean }) => (
    <canvas data-paused={paused} data-testid="spell-background" />
  ),
}));

function createApi(): ChatApi {
  return {
    cancelTurn: vi.fn().mockResolvedValue("idle"),
    createConversation: vi.fn().mockResolvedValue({ conversation_id: "thread-1" }),
    deleteConversation: vi.fn().mockResolvedValue({ deleted: "thread-1" }),
    getPreferences: vi.fn().mockResolvedValue({
      reader_chapter: 1000,
      spoiler_mode: "protect",
      tier: "ascended",
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
    value: vi.fn().mockReturnValue({
      addEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
      matches: true,
      media: "(max-width: 767px)",
      onchange: null,
      removeEventListener: vi.fn(),
    }),
  });
  Object.defineProperty(window, "innerWidth", {
    configurable: true,
    value: 390,
  });
}

describe("first Nightmare setup", () => {
  beforeEach(setDesktopMedia);

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
    expect(screen.getByRole("button", { name: "Model and key settings" })).toBeVisible();

  }, 10_000);

  it("stays away after setup was deferred", () => {
    localStorage.setItem(FIRST_NIGHTMARE_STORAGE_KEY, "deferred");
    render(<SpellSurfaceChatApp api={createApi()} privacyLabel="Private" />);

    expect(screen.queryByRole("dialog", { name: "First Nightmare setup" })).toBeNull();
  });

  it("stores a trimmed key and completes the appraisal", async () => {
    render(<SpellSurfaceChatApp api={createApi()} privacyLabel="Private" />);

    const dialog = await screen.findByRole("dialog", {
      name: "First Nightmare setup",
    });
    fireEvent.click(
      within(dialog).getByRole("button", { name: "Enter the First Nightmare" }),
    );
    fireEvent.click(within(dialog).getByRole("button", { name: "I have a key" }));
    fireEvent.change(within(dialog).getByLabelText("Your DeepSeek API key"), {
      target: { value: "  owner-test-key  " },
    });
    fireEvent.click(
      within(dialog).getByRole("button", { name: "Store key and continue" }),
    );

    for (const tier of ["Good", "Exceptional", "Remarkable"]) {
      fireEvent.animationEnd(within(dialog).getByText(tier));
    }
    expect(await within(dialog).findByText("The voice is bound")).toBeVisible();
    expect(within(dialog).getByText("Glorious")).toBeInTheDocument();
    expect(getApiKey()).toBe("owner-test-key");
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
    await waitFor(() => expect(screen.getByRole("textbox")).toHaveFocus());
    expect(screen.queryByText("[The voice remains unbound.]")).toBeNull();
    expect(
      screen.getByRole("button", {
        name: "Model and key settings",
      }),
    ).toBeVisible();
  });

  it("keeps the deferred chat honest about its unbound voice", async () => {
    render(<SpellSurfaceChatApp api={createApi()} privacyLabel="Private" />);

    const dialog = await screen.findByRole("dialog", {
      name: "First Nightmare setup",
    });
    fireEvent.click(within(dialog).getByRole("button", { name: "Enter later" }));

    expect(screen.getByText("[The voice remains unbound.]")).toBeVisible();
  });

  it("updates the unbound inscription when settings enable a stored key", async () => {
    localStorage.setItem(FIRST_NIGHTMARE_STORAGE_KEY, "completed");
    localStorage.setItem("weaver_api_key", "owner-test-key");
    localStorage.setItem("weaver_api_key_disabled", "1");
    render(<SpellSurfaceChatApp api={createApi()} privacyLabel="Private" />);

    expect(screen.getByText("[The voice remains unbound.]")).toBeVisible();
    fireEvent.click(screen.getByRole("button", { name: "Model and key settings" }));
    const settings = await screen.findByRole("dialog", { name: "Reader Appraisal settings" });
    fireEvent.click(within(settings).getByRole("button", { name: "Bound voice" }));
    fireEvent.click(within(settings).getByRole("checkbox", { name: /Disable this key/ }));
    fireEvent.click(within(settings).getByRole("button", { name: "Apply changes" }));

    expect(screen.queryByText("[The voice remains unbound.]")).toBeNull();
  });

  it("opens settings with the model section from the rail footer", async () => {
    localStorage.setItem(FIRST_NIGHTMARE_STORAGE_KEY, "completed");
    localStorage.setItem("weaver_api_key", "owner-test-key");
    render(<SpellSurfaceChatApp api={createApi()} privacyLabel="Private" />);

    fireEvent.click(screen.getByRole("button", { name: "Model and key settings" }));

    const dialog = await screen.findByRole("dialog", {
      name: "Reader Appraisal settings",
    });
    expect(
      within(dialog).getByRole("img", { name: /Sunny's Soul Sea/ }),
    ).toBeVisible();
    fireEvent.click(
      within(dialog).getByRole("button", { name: "Bound voice" }),
    );
    const keyInput = within(dialog).getByLabelText("DeepSeek key");
    expect(keyInput).toBeVisible();
    expect(keyInput).toHaveAttribute("placeholder", "sk-...");
    expect(keyInput).toHaveAttribute("type", "password");
    fireEvent.click(within(dialog).getByRole("button", { name: "Show API key" }));
    expect(keyInput).toHaveAttribute("type", "text");
    expect(
      within(dialog).getByRole("button", { name: /DeepSeek V4 Flash/ }),
    ).toHaveAttribute("aria-pressed", "true");
  });

  it("restores a saved Soul Sea beneath the live Spellweave", async () => {
    localStorage.setItem(FIRST_NIGHTMARE_STORAGE_KEY, "completed");
    localStorage.setItem("weaver.spell-surface", JSON.stringify({ soulMode: "nephis" }));
    render(<SpellSurfaceChatApp api={createApi()} privacyLabel="Private" />);

    expect(screen.getByTestId("spellweave-backdrop")).toBeVisible();
    expect(screen.getByRole("img", { name: /Nephis' Soul Sea/ })).toBeVisible();
    expect(screen.getByTestId("spell-surface-live")).toHaveAttribute("data-soul", "nephis");
  });

  it("replays the rite from settings without changing the saved first-run state", async () => {
    localStorage.setItem(FIRST_NIGHTMARE_STORAGE_KEY, "completed");
    render(<SpellSurfaceChatApp api={createApi()} privacyLabel="Private" />);

    fireEvent.click(screen.getByRole("button", { name: "Model and key settings" }));
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

    const pinned = await screen.findByRole("region", { name: "Pinned threads" });
    expect(within(pinned).getByText("Ariel and the Tomb")).toBeVisible();
    const unpinButton = within(pinned).getByRole("button", {
      name: "Unpin Ariel and the Tomb",
    });
    expect(unpinButton).toHaveAttribute("title", "Unpin");
    expect(unpinButton.querySelector("svg")).toHaveAttribute(
      "data-icon",
      "thumbtack-slash",
    );
    const active = screen.getByRole("navigation", { name: "Active threads" });
    expect(within(active).getByText("Sunny and Nephis")).toBeVisible();
    expect(within(active).queryByText("Ariel and the Tomb")).toBeNull();
    expect(
      within(active).getByRole("button", { name: "Pin Sunny and Nephis" }),
    ).toHaveAttribute("title", "Pin");
    expect(
      within(active).getByRole("button", { name: "Rename Sunny and Nephis" }),
    ).toHaveAttribute("title", "Rename");

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
    await screen.findByTestId("thread-current-thread");

    fireEvent.change(screen.getByRole("textbox", { name: "Message Weaver" }), {
      target: { value: "keep weaving" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Send message" }));
    await screen.findByRole("button", { name: "Stop Weaver" });

    const oldThread = screen.getByTestId("thread-other-thread");
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
    const row = await screen.findByTestId("thread-durable-thread");

    fireEvent.click(
      within(row).getByRole("button", { name: "Pin Durable theory" }),
    );

    const pinned = await screen.findByRole("region", { name: "Pinned threads" });
    expect(within(pinned).getByText("Durable theory")).toBeVisible();
    firstRender.unmount();
    render(<SpellSurfaceChatApp api={api} privacyLabel="Private" />);

    const restoredPinned = await screen.findByRole("region", {
      name: "Pinned threads",
    });
    expect(within(restoredPinned).getByText("Durable theory")).toBeVisible();
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
    const row = await screen.findByTestId("thread-failed-thread");

    fireEvent.click(
      within(row).getByRole("button", { name: "Pin Unbroken thread" }),
    );

    expect(
      await screen.findByText("The change could not be saved. Try again."),
    ).toBeVisible();
    expect(screen.queryByRole("region", { name: "Pinned threads" })).toBeNull();
    expect(
      within(screen.getByRole("navigation", { name: "Active threads" }))
        .getByText("Unbroken thread"),
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

    const drawer = document.querySelector<HTMLElement>("#spell-surface-rail");
    expect(drawer).not.toBeNull();
    if (!drawer) {
      return;
    }
    expect(drawer).toHaveAttribute("aria-hidden", "true");
    expect(drawer).toHaveAttribute("inert");

    const opener = document.querySelector<HTMLButtonElement>(".lab-mobile-rail");
    expect(opener).not.toBeNull();
    if (!opener) {
      return;
    }
    fireEvent.click(opener);
    expect(drawer).toHaveAttribute("aria-hidden", "false");
    expect(drawer).not.toHaveAttribute("inert");
    expect(document.querySelector(".lab-chat-main")).toHaveAttribute("inert");
    expect(document.body.style.overflow).toBe("hidden");

    const scrim = document.querySelector<HTMLButtonElement>(".lab-rail-scrim");
    expect(scrim).not.toBeNull();
    if (!scrim) {
      return;
    }
    expect(scrim).toHaveAttribute("tabindex", "-1");
    fireEvent.click(scrim);
    await waitFor(() => expect(drawer).toHaveAttribute("aria-hidden", "true"));
    expect(opener).toHaveFocus();
    expect(document.querySelector(".lab-chat-main")).not.toHaveAttribute("inert");
    expect(document.body.style.overflow).toBe("");
  });

  it("closes on Escape and restores focus to the opener", async () => {
    render(<SpellSurfaceChatApp api={createApi()} privacyLabel="Private" />);

    const opener = document.querySelector<HTMLButtonElement>(".lab-mobile-rail");
    expect(opener).not.toBeNull();
    if (!opener) {
      return;
    }
    fireEvent.click(opener);
    fireEvent.keyDown(window, { key: "Escape" });

    await waitFor(() => expect(opener).toHaveFocus());
    expect(document.body.style.overflow).toBe("");
  });

  it("keeps keyboard focus inside the open drawer", () => {
    render(<SpellSurfaceChatApp api={createApi()} privacyLabel="Private" />);

    const opener = document.querySelector<HTMLButtonElement>(".lab-mobile-rail");
    expect(opener).not.toBeNull();
    if (!opener) {
      return;
    }
    fireEvent.click(opener);
    const drawer = screen.getByRole("dialog", { name: "Threads" });
    const focusable = within(drawer).getAllByRole("button");
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    first.focus();
    fireEvent.keyDown(drawer, { key: "Tab", shiftKey: true });
    expect(last).toHaveFocus();
  });

  it("restores focus after settings close", async () => {
    render(<SpellSurfaceChatApp api={createApi()} privacyLabel="Private" />);

    const opener = screen.getByRole("button", { name: "Open Soul Sea settings from header" });
    opener.focus();
    fireEvent.click(opener);
    const settings = await screen.findByRole("dialog", { name: "Reader Appraisal settings" });
    fireEvent.click(within(settings).getByRole("button", { name: "Close settings" }));

    await waitFor(() => expect(opener).toHaveFocus());
  });
});

describe("live Spellweave foundation", () => {
  beforeEach(() => {
    setDesktopMedia();
    localStorage.setItem(FIRST_NIGHTMARE_STORAGE_KEY, "deferred");
  });

  it("mounts one decorative three-depth backdrop around the existing chat", () => {
    render(<SpellSurfaceChatApp api={createApi()} privacyLabel="Private" />);

    const backdrop = screen.getByTestId("spellweave-backdrop");
    expect(backdrop).toHaveAttribute("aria-hidden", "true");
    expect(backdrop.querySelectorAll("[data-spell-depth]")).toHaveLength(3);
    expect(backdrop.querySelector("button, input, textarea, a")).toBeNull();
    expect(screen.getByRole("textbox")).toBeVisible();
  });

  it("keeps the collapsed desktop rail operable so it can reopen", () => {
    render(<SpellSurfaceChatApp api={createApi()} privacyLabel="Private" />);

    const rail = document.querySelector<HTMLElement>("#spell-surface-rail");
    expect(rail).not.toBeNull();
    if (!rail) {
      return;
    }

    fireEvent.click(screen.getByRole("button", { name: "Close threads" }));

    expect(rail).toHaveAttribute("aria-hidden", "false");
    expect(rail).not.toHaveAttribute("inert");
    expect(screen.getByRole("button", { name: "Open threads" })).toBeEnabled();

    fireEvent.click(screen.getByRole("button", { name: "Open threads" }));
    expect(screen.getByRole("button", { name: "Close threads" })).toBeEnabled();
  });
});
