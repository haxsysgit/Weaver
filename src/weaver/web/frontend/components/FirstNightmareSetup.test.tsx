import { fireEvent, render, screen, within } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { FIRST_NIGHTMARE_STORAGE_KEY } from "../lib/firstNightmare";
import { getApiKey } from "../lib/identity";
import { FirstNightmareSetup } from "./FirstNightmareSetup";

function renderRite() {
  const onComplete = vi.fn();
  const onDefer = vi.fn();
  const onRevealStart = vi.fn();

  render(
    <div className="spell-surface-lab">
      <main data-testid="chat-surface" />
      <FirstNightmareSetup
        onComplete={onComplete}
        onDefer={onDefer}
        onRevealStart={onRevealStart}
      />
    </div>,
  );

  return { onComplete, onDefer, onRevealStart };
}

function reachKeyEntry(dialog: HTMLElement) {
  fireEvent.click(
    within(dialog).getByRole("button", { name: "Enter the First Nightmare" }),
  );
  fireEvent.click(within(dialog).getByRole("button", { name: "I have a key" }));
}

function setMotionPreference(reduced: boolean) {
  Object.defineProperty(window, "matchMedia", {
    configurable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      addEventListener: vi.fn(),
      matches: reduced && query === "(prefers-reduced-motion: reduce)",
      media: query,
      removeEventListener: vi.fn(),
    })),
  });
}

describe("Hidden Thread initiation rite", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    localStorage.clear();
    setMotionPreference(false);
  });

  it("opens as a full-screen awakening with the original mask impression", () => {
    renderRite();

    const dialog = screen.getByRole("dialog", { name: "First Nightmare setup" });
    expect(dialog).toHaveClass("hidden-thread-rite");
    expect(dialog).toHaveAttribute("data-rite-act", "awakening");
    expect(dialog.querySelector(".first-nightmare-panel")).toBeNull();
    expect(dialog.querySelector(".hidden-thread-axis")).toBeNull();
    const mask = dialog.querySelector("[data-hidden-thread-mask]");
    expect(mask).not.toBeNull();
    expect(mask?.tagName).toBe("IMG");
    expect(mask).toHaveAttribute("draggable", "false");
    expect(within(dialog).queryByText("First Nightmare")).toBeNull();
    expect(within(dialog).getByText("[The hidden thread has found you.]")).toBeVisible();
    expect(within(dialog).getByText("The Spell has found you")).toBeVisible();
  });

  it("unweaves into the plain DeepSeek explanation and supports Back", () => {
    renderRite();
    const dialog = screen.getByRole("dialog", { name: "First Nightmare setup" });

    fireEvent.click(
      within(dialog).getByRole("button", { name: "Enter the First Nightmare" }),
    );

    expect(dialog).toHaveAttribute("data-rite-act", "initiation");
    expect(dialog.querySelector("[data-hidden-thread-mask]")).not.toBeNull();
    const link = within(dialog).getByRole("link", { name: /Get a key from DeepSeek/ });
    expect(link).toHaveAttribute("href", "https://platform.deepseek.com/");
    expect(link).toHaveAttribute("rel", "noreferrer");

    fireEvent.click(within(dialog).getByRole("button", { name: "Back" }));
    expect(within(dialog).getByText("The Spell has found you")).toBeVisible();
  });

  it("binds the masked browser-local key and seals it before appraisal", () => {
    renderRite();
    const dialog = screen.getByRole("dialog", { name: "First Nightmare setup" });
    reachKeyEntry(dialog);

    const input = within(dialog).getByLabelText("Your DeepSeek API key");
    expect(input).toHaveAttribute("type", "password");
    expect(input).toHaveAttribute("placeholder", "sk-...");
    fireEvent.click(within(dialog).getByRole("button", { name: "Show API key" }));
    expect(input).toHaveAttribute("type", "text");
    fireEvent.click(within(dialog).getByRole("button", { name: "Hide API key" }));
    expect(input).toHaveAttribute("type", "password");
    fireEvent.change(input, { target: { value: "  owner-test-key  " } });
    expect(within(dialog).getByTestId("key-binding-beads").children.length).toBeGreaterThan(0);

    fireEvent.click(
      within(dialog).getByRole("button", { name: "Store key and continue" }),
    );

    expect(getApiKey()).toBe("owner-test-key");
    expect(localStorage.getItem(FIRST_NIGHTMARE_STORAGE_KEY)).toBe("completed");
    expect(dialog).toHaveAttribute("data-rite-act", "appraisal");
    expect(within(dialog).getByTestId("appraisal-mask")).toBeVisible();
  });

  it("uses a random fun appraisal without storing a key during owner review", () => {
    vi.spyOn(Math, "random").mockReturnValue(0.99);
    render(
      <FirstNightmareSetup
        onComplete={vi.fn()}
        onDefer={vi.fn()}
        reviewMode
      />,
    );
    const dialog = screen.getByRole("dialog", { name: "First Nightmare setup" });
    reachKeyEntry(dialog);

    fireEvent.click(
      within(dialog).getByRole("button", { name: "Preview without storing a key" }),
    );

    expect(getApiKey()).toBe("");
    expect(localStorage.getItem(FIRST_NIGHTMARE_STORAGE_KEY)).toBeNull();
    expect(dialog).toHaveAttribute("data-rite-act", "appraisal");
    expect(within(dialog).getByText("Fraudulent")).toBeVisible();
    expect(within(dialog).getByTestId("appraisal-mask").querySelector("img")).not.toBeNull();
    expect(within(dialog).getByText("The rite is complete")).toBeVisible();
  });

  it("replaces each appraisal tier before opening into the conversation", () => {
    const { onComplete, onRevealStart } = renderRite();
    const dialog = screen.getByRole("dialog", { name: "First Nightmare setup" });
    reachKeyEntry(dialog);
    fireEvent.change(within(dialog).getByLabelText("Your DeepSeek API key"), {
      target: { value: "owner-test-key" },
    });
    fireEvent.click(
      within(dialog).getByRole("button", { name: "Store key and continue" }),
    );

    for (const [current, next] of [
      ["Good", "Exceptional"],
      ["Exceptional", "Remarkable"],
      ["Remarkable", "Glorious"],
    ]) {
      const tier = within(dialog).getByText(current);
      expect(within(dialog).queryByText(next)).toBeNull();
      fireEvent.animationEnd(tier);
      expect(within(dialog).getByText(next)).toBeVisible();
    }

    fireEvent.click(within(dialog).getByRole("button", { name: "Enter Weaver" }));
    expect(onRevealStart).toHaveBeenCalledOnce();
    expect(dialog).toHaveClass("is-revealing");
    expect(onComplete).not.toHaveBeenCalled();

    fireEvent.animationEnd(dialog);
    expect(onComplete).toHaveBeenCalledOnce();
  });

  it("shows storage failure without advancing or exposing the key", () => {
    const nativeSetItem = Storage.prototype.setItem;
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(function (
      this: Storage,
      key: string,
      value: string,
    ) {
      if (key === "weaver_api_key") {
        throw new Error("storage unavailable");
      }
      nativeSetItem.call(this, key, value);
    });
    renderRite();
    const dialog = screen.getByRole("dialog", { name: "First Nightmare setup" });
    reachKeyEntry(dialog);
    fireEvent.change(within(dialog).getByLabelText("Your DeepSeek API key"), {
      target: { value: "owner-test-key" },
    });
    fireEvent.click(
      within(dialog).getByRole("button", { name: "Store key and continue" }),
    );

    expect(within(dialog).getByRole("alert")).toHaveTextContent(
      "The key could not be stored in this browser.",
    );
    expect(dialog).toHaveAttribute("data-rite-act", "binding");
    expect(document.body.textContent).not.toContain("owner-test-key");
  });

  it("records Escape as Enter later and restores the surface", () => {
    const { onDefer } = renderRite();
    const dialog = screen.getByRole("dialog", { name: "First Nightmare setup" });

    fireEvent.keyDown(dialog, { key: "Escape" });

    expect(localStorage.getItem(FIRST_NIGHTMARE_STORAGE_KEY)).toBe("deferred");
    expect(onDefer).toHaveBeenCalledOnce();
  });

  it("finishes appraisal and reveal immediately with reduced motion", () => {
    setMotionPreference(true);
    const { onComplete } = renderRite();
    const dialog = screen.getByRole("dialog", { name: "First Nightmare setup" });
    reachKeyEntry(dialog);
    fireEvent.change(within(dialog).getByLabelText("Your DeepSeek API key"), {
      target: { value: "owner-test-key" },
    });
    fireEvent.click(
      within(dialog).getByRole("button", { name: "Store key and continue" }),
    );

    expect(within(dialog).getByText("Glorious")).toBeVisible();
    fireEvent.click(within(dialog).getByRole("button", { name: "Enter Weaver" }));
    expect(onComplete).toHaveBeenCalledOnce();
  });
});
