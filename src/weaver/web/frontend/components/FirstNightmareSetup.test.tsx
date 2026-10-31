import { fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { FIRST_NIGHTMARE_STORAGE_KEY } from "../lib/firstNightmare";
import {
  FirstNightmareSetup,
  type SharedAccessStatus,
} from "./FirstNightmareSetup";

function renderRite(
  accepts = true,
  options: { sharedStatus?: SharedAccessStatus; voiceBound?: boolean } = {},
) {
  const onAcceptSponsored = vi.fn(async () => accepts);
  const onComplete = vi.fn();
  const onDefer = vi.fn();
  const onRevealStart = vi.fn();
  const onUseOwnKey = vi.fn();

  render(
    <div className="spell-surface-lab">
      <main data-testid="chat-surface" />
      <FirstNightmareSetup
        onAcceptSponsored={onAcceptSponsored}
        onComplete={onComplete}
        onDefer={onDefer}
        onRevealStart={onRevealStart}
        onUseOwnKey={onUseOwnKey}
        sharedStatus={options.sharedStatus}
        voiceBound={options.voiceBound}
      />
    </div>,
  );

  return { onAcceptSponsored, onComplete, onDefer, onRevealStart, onUseOwnKey };
}

function reachNotice(dialog: HTMLElement) {
  fireEvent.click(
    within(dialog).getByRole("button", { name: "Enter the First Nightmare" }),
  );
  fireEvent.click(
    within(dialog).getByRole("button", {
      name: "Continue with the shared allowance",
    }),
  );
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
    // The opening is the rune line and the title: no explainer paragraph.
    expect(within(dialog).getByText("[The hidden thread has found you.]")).toBeVisible();
    expect(within(dialog).queryByText(/taken root in this browser/)).toBeNull();
    expect(within(dialog).getByText("The Spell has found you")).toBeVisible();
  });

  it("unweaves into the shared allowance explanation and supports Back", () => {
    renderRite();
    const dialog = screen.getByRole("dialog", { name: "First Nightmare setup" });

    fireEvent.click(
      within(dialog).getByRole("button", { name: "Enter the First Nightmare" }),
    );

    expect(dialog).toHaveAttribute("data-rite-act", "initiation");
    expect(dialog.querySelector("[data-hidden-thread-mask]")).not.toBeNull();
    expect(within(dialog).getByText(/three shared questions every day/i)).toBeVisible();
    expect(within(dialog).getByText(/do not need an API key/i)).toBeVisible();

    fireEvent.click(within(dialog).getByRole("button", { name: "Back" }));
    expect(within(dialog).getByText("The Spell has found you")).toBeVisible();
  });

  it("records consent before appraisal", async () => {
    const { onAcceptSponsored } = renderRite();
    const dialog = screen.getByRole("dialog", { name: "First Nightmare setup" });
    reachNotice(dialog);

    expect(within(dialog).getByText(/servers in China/i)).toBeVisible();
    expect(within(dialog).getByRole("link", { name: "DeepSeek terms" })).toBeVisible();

    fireEvent.click(
      within(dialog).getByRole("button", {
        name: "I understand. Bind the shared voice",
      }),
    );

    await waitFor(() => expect(onAcceptSponsored).toHaveBeenCalledOnce());
    expect(localStorage.getItem(FIRST_NIGHTMARE_STORAGE_KEY)).toBe("completed");
    expect(dialog).toHaveAttribute("data-rite-act", "appraisal");
    expect(within(dialog).getByTestId("appraisal-mask")).toBeVisible();
  });

  it("replaces each appraisal tier before opening into the conversation", async () => {
    const { onComplete, onRevealStart } = renderRite();
    const dialog = screen.getByRole("dialog", { name: "First Nightmare setup" });
    reachNotice(dialog);
    fireEvent.click(
      within(dialog).getByRole("button", {
        name: "I understand. Bind the shared voice",
      }),
    );

    await waitFor(() => expect(within(dialog).getByText("Good")).toBeVisible());

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

  it("shows a safe failure when consent cannot be recorded", async () => {
    renderRite(false);
    const dialog = screen.getByRole("dialog", { name: "First Nightmare setup" });
    reachNotice(dialog);
    fireEvent.click(
      within(dialog).getByRole("button", {
        name: "I understand. Bind the shared voice",
      }),
    );

    expect(await within(dialog).findByRole("alert")).toHaveTextContent(
      "The shared thread could not be bound.",
    );
    expect(dialog).toHaveAttribute("data-rite-act", "binding");
  });

  it("records Escape as Enter later and restores the surface", () => {
    const { onDefer } = renderRite();
    const dialog = screen.getByRole("dialog", { name: "First Nightmare setup" });

    fireEvent.keyDown(dialog, { key: "Escape" });

    expect(localStorage.getItem(FIRST_NIGHTMARE_STORAGE_KEY)).toBe("deferred");
    expect(onDefer).toHaveBeenCalledOnce();
  });

  it("sends direct-key readers to Advanced", () => {
    const onUseOwnKey = vi.fn();
    render(
      <FirstNightmareSetup
        onComplete={vi.fn()}
        onDefer={vi.fn()}
        onUseOwnKey={onUseOwnKey}
      />,
    );
    const dialog = screen.getByRole("dialog", { name: "First Nightmare setup" });
    fireEvent.click(
      within(dialog).getByRole("button", { name: "Enter the First Nightmare" }),
    );

    fireEvent.click(within(dialog).getByRole("button", { name: "Use my own key" }));

    expect(onUseOwnKey).toHaveBeenCalledOnce();
    expect(localStorage.getItem(FIRST_NIGHTMARE_STORAGE_KEY)).toBe("deferred");
  });

  it("continues in fake mode without recording shared consent", () => {
    const { onAcceptSponsored } = renderRite(true, { sharedStatus: "development" });
    const dialog = screen.getByRole("dialog", { name: "First Nightmare setup" });

    fireEvent.click(
      within(dialog).getByRole("button", { name: "Enter the First Nightmare" }),
    );

    expect(within(dialog).getByText(/Fake mode is active/i)).toBeVisible();
    expect(
      within(dialog).queryByRole("button", {
        name: "Continue with the shared allowance",
      }),
    ).toBeNull();
    fireEvent.click(
      within(dialog).getByRole("button", { name: "Continue in fake mode" }),
    );

    expect(dialog).toHaveAttribute("data-rite-act", "appraisal");
    expect(onAcceptSponsored).not.toHaveBeenCalled();
    expect(localStorage.getItem(FIRST_NIGHTMARE_STORAGE_KEY)).toBe("completed");
  });

  it("routes local live without a shared allowance to BYOK", () => {
    const { onUseOwnKey } = renderRite(true, { sharedStatus: "unconfigured" });
    const dialog = screen.getByRole("dialog", { name: "First Nightmare setup" });

    fireEvent.click(
      within(dialog).getByRole("button", { name: "Enter the First Nightmare" }),
    );

    expect(
      within(dialog).getByText(/No shared allowance is configured/i),
    ).toBeVisible();
    expect(
      within(dialog).queryByRole("button", {
        name: "Continue with the shared allowance",
      }),
    ).toBeNull();
    fireEvent.click(within(dialog).getByRole("button", { name: "Use my own key" }));

    expect(onUseOwnKey).toHaveBeenCalledOnce();
    expect(localStorage.getItem(FIRST_NIGHTMARE_STORAGE_KEY)).toBe("deferred");
  });

  it("continues with a bound key when shared access is unconfigured", () => {
    const { onAcceptSponsored, onUseOwnKey } = renderRite(true, {
      sharedStatus: "unconfigured",
      voiceBound: true,
    });
    const dialog = screen.getByRole("dialog", { name: "First Nightmare setup" });

    fireEvent.click(
      within(dialog).getByRole("button", { name: "Enter the First Nightmare" }),
    );
    fireEvent.click(
      within(dialog).getByRole("button", { name: "Continue with your own key" }),
    );

    expect(dialog).toHaveAttribute("data-rite-act", "appraisal");
    expect(onUseOwnKey).not.toHaveBeenCalled();
    expect(onAcceptSponsored).not.toHaveBeenCalled();
    expect(localStorage.getItem(FIRST_NIGHTMARE_STORAGE_KEY)).toBe("completed");
  });

  it("explains an exhausted shared allowance and keeps BYOK available", () => {
    renderRite(true, { sharedStatus: "exhausted" });
    const dialog = screen.getByRole("dialog", { name: "First Nightmare setup" });

    fireEvent.click(
      within(dialog).getByRole("button", { name: "Enter the First Nightmare" }),
    );

    expect(within(dialog).getByText(/resting until 00:00 UTC/i)).toBeVisible();
    expect(
      within(dialog).getByRole("button", { name: "Use my own key" }),
    ).toBeVisible();
  });

  it("does not offer the shared allowance while status is loading", () => {
    renderRite(true, { sharedStatus: "loading" });
    const dialog = screen.getByRole("dialog", { name: "First Nightmare setup" });

    fireEvent.click(
      within(dialog).getByRole("button", { name: "Enter the First Nightmare" }),
    );

    expect(
      within(dialog).getByRole("button", {
        name: "Checking the shared allowance...",
      }),
    ).toBeDisabled();
    expect(
      within(dialog).getByRole("button", { name: "Enter later" }),
    ).toBeVisible();
  });

  it("finishes appraisal and reveal immediately with reduced motion", async () => {
    setMotionPreference(true);
    const { onComplete } = renderRite();
    const dialog = screen.getByRole("dialog", { name: "First Nightmare setup" });
    reachNotice(dialog);
    fireEvent.click(
      within(dialog).getByRole("button", {
        name: "I understand. Bind the shared voice",
      }),
    );

    expect(await within(dialog).findByText("Glorious")).toBeVisible();
    fireEvent.click(within(dialog).getByRole("button", { name: "Enter Weaver" }));
    expect(onComplete).toHaveBeenCalledOnce();
  });
});
