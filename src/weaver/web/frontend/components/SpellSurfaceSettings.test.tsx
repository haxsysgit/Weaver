import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { SpellSurfaceSettings, type LabPreferences } from "./SpellSurfaceSettings";

const LEGACY_PREFERENCES: LabPreferences = {
  chapter: 1000,
  density: "comfortable",
  fontSize: "small",
  glass: "subtle",
  runeMode: "particles",
  soulMode: "sunny",
  spoilerMode: "protect",
  starIntensity: "balanced",
  theme: "crimson",
  tier: "ascended",
  volume: 5,
};

describe("Reader Appraisal settings", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("closes cleanly after navigation without treating fixed identity as an edit", () => {
    const onClose = vi.fn();
    render(
      <SpellSurfaceSettings
        initial={LEGACY_PREFERENCES}
        onClose={onClose}
        onSave={vi.fn()}
      />,
    );

    fireEvent.click(screen.getByRole("button", { name: "Appearance" }));
    fireEvent.click(screen.getByRole("button", { name: "Reader position" }));
    fireEvent.click(screen.getByRole("button", { name: "Close settings" }));

    expect(onClose).toHaveBeenCalledOnce();
    expect(screen.queryByText("Discard unsaved changes?")).not.toBeInTheDocument();
  });

  it("offers three lore-grounded Soul Seas and saves the selected realm", () => {
    const onSave = vi.fn();
    render(
      <SpellSurfaceSettings
        initial={LEGACY_PREFERENCES}
        onClose={vi.fn()}
        onSave={onSave}
      />,
    );

    fireEvent.click(screen.getByRole("button", { name: "Appearance" }));
    expect(screen.getByRole("button", { name: "Sunny's Soul Sea" })).toBeVisible();
    expect(screen.getByRole("button", { name: "Awakened Soul Sea" })).toBeVisible();
    fireEvent.click(screen.getByRole("button", { name: "Nephis' Soul Sea" }));
    fireEvent.click(screen.getByRole("button", { name: "Apply changes" }));

    expect(onSave).toHaveBeenCalledWith(
      expect.objectContaining({ soulMode: "nephis" }),
    );
  });

  it("moves focus into a mobile section and returns it to the index", async () => {
    render(
      <SpellSurfaceSettings
        initial={LEGACY_PREFERENCES}
        onClose={vi.fn()}
        onSave={vi.fn()}
      />,
    );

    const appearance = screen.getByRole("button", { name: "Appearance" });
    fireEvent.click(appearance);
    const back = screen.getByRole("button", { name: /Settings/ });
    await waitFor(() => expect(back).toHaveFocus());

    fireEvent.click(back);
    await waitFor(() => expect(appearance).toHaveFocus());
  });
});
