import { fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import type { ChatApi } from "../lib/chatApi";
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
    getPassage: vi.fn(),
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
    expect(screen.getByTestId("spell-background")).toHaveAttribute("data-paused", "true");

    fireEvent.click(within(dialog).getByRole("button", { name: "Enter Weaver" }));
    expect(screen.getByTestId("spell-background")).toHaveAttribute("data-paused", "false");
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
    const settings = await screen.findByRole("dialog", { name: "Soul Sea settings" });
    fireEvent.click(within(settings).getByRole("button", { name: "Model" }));
    fireEvent.click(within(settings).getByRole("checkbox", { name: /Disable this key/ }));
    fireEvent.click(within(settings).getByRole("button", { name: "Apply settings" }));

    expect(screen.queryByText("[The voice remains unbound.]")).toBeNull();
  });

  it("opens settings with the model section from the rail footer", async () => {
    localStorage.setItem(FIRST_NIGHTMARE_STORAGE_KEY, "completed");
    localStorage.setItem("weaver_api_key", "owner-test-key");
    render(<SpellSurfaceChatApp api={createApi()} privacyLabel="Private" />);

    fireEvent.click(screen.getByRole("button", { name: "Model and key settings" }));

    const dialog = await screen.findByRole("dialog", {
      name: "Soul Sea settings",
    });
    expect(
      within(dialog).getByRole("img", { name: /Still Black Sea/ }),
    ).toBeVisible();
    fireEvent.click(
      within(dialog).getByRole("button", { name: "Model" }),
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

  it("replays the rite from settings without changing the saved first-run state", async () => {
    localStorage.setItem(FIRST_NIGHTMARE_STORAGE_KEY, "completed");
    render(<SpellSurfaceChatApp api={createApi()} privacyLabel="Private" />);

    fireEvent.click(screen.getByRole("button", { name: "Model and key settings" }));
    const settings = await screen.findByRole("dialog", { name: "Soul Sea settings" });
    fireEvent.click(
      within(settings).getByRole("button", { name: "Replay First Nightmare" }),
    );

    const rite = await screen.findByRole("dialog", { name: "First Nightmare setup" });
    expect(within(rite).getByText("The Spell has found you")).toBeVisible();
    fireEvent.click(within(rite).getByRole("button", { name: "Enter later" }));
    expect(localStorage.getItem(FIRST_NIGHTMARE_STORAGE_KEY)).toBe("completed");
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
