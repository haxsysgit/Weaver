import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { SpellSurfaceSettings, type LabPreferences } from "./SpellSurfaceSettings";

const LEGACY_PREFERENCES: LabPreferences = {
  chapter: 1000,
  density: "comfortable",
  fontSize: "small",
  glass: "subtle",
  runeMode: "particles",
  soulMode: "living",
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
});
