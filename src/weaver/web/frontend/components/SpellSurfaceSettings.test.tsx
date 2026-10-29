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

  it("shows Saving, then Saved, then closes once the save lands", async () => {
    let finishSave: () => void = () => {};
    const onSave = vi.fn(
      () => new Promise<void>((resolve) => { finishSave = resolve; }),
    );
    const onClose = vi.fn();
    render(
      <SpellSurfaceSettings
        initial={LEGACY_PREFERENCES}
        onClose={onClose}
        onSave={onSave}
      />,
    );

    fireEvent.change(screen.getByLabelText("Current chapter"), {
      target: { value: "1200" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Apply changes" }));

    const saving = screen.getByRole("button", { name: "Saving..." });
    expect(saving).toBeDisabled();
    expect(screen.getByRole("button", { name: "Discard" })).toBeDisabled();
    expect(onClose).not.toHaveBeenCalled();

    finishSave();
    expect(await screen.findByRole("button", { name: "Saved" })).toBeDisabled();
    expect(onClose).not.toHaveBeenCalled();
    await waitFor(() => expect(onClose).toHaveBeenCalledOnce(), { timeout: 2000 });
  });

  it("keeps the panel open with the edits and a retry when the save fails", async () => {
    const onSave = vi
      .fn()
      .mockRejectedValueOnce(new Error("Saving preferences failed (503)"))
      .mockResolvedValueOnce(undefined);
    const onClose = vi.fn();
    render(
      <SpellSurfaceSettings
        initial={LEGACY_PREFERENCES}
        onClose={onClose}
        onSave={onSave}
      />,
    );

    fireEvent.change(screen.getByLabelText("Current chapter"), {
      target: { value: "1200" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Apply changes" }));

    expect(await screen.findByRole("alert")).toHaveTextContent(
      "[The thread slipped. Your changes were not saved.]",
    );
    expect(screen.getByLabelText("Current chapter")).toHaveValue(1200);
    expect(onClose).not.toHaveBeenCalled();

    fireEvent.click(screen.getByRole("button", { name: "Try again" }));
    expect(onSave).toHaveBeenCalledTimes(2);
    expect(onSave).toHaveBeenLastCalledWith(expect.objectContaining({ chapter: 1200 }));
    await waitFor(() => expect(onClose).toHaveBeenCalledOnce(), { timeout: 2000 });
  });

  it("clears the failure once the reader edits again", async () => {
    const onSave = vi.fn().mockRejectedValue(new Error("offline"));
    render(
      <SpellSurfaceSettings
        initial={LEGACY_PREFERENCES}
        onClose={vi.fn()}
        onSave={onSave}
      />,
    );

    fireEvent.change(screen.getByLabelText("Current chapter"), {
      target: { value: "1200" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Apply changes" }));
    await screen.findByRole("alert");

    fireEvent.change(screen.getByLabelText("Current chapter"), {
      target: { value: "1201" },
    });
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Apply changes" })).toBeEnabled();
  });

  it("stores the key and model only after the save succeeds", async () => {
    localStorage.setItem("weaver_api_key", "old-key");
    const onSave = vi.fn().mockRejectedValue(new Error("offline"));
    render(
      <SpellSurfaceSettings
        initial={LEGACY_PREFERENCES}
        initialSection="model"
        onClose={vi.fn()}
        onSave={onSave}
      />,
    );

    fireEvent.change(screen.getByLabelText("DeepSeek key"), {
      target: { value: "new-key" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Apply changes" }));
    await screen.findByRole("alert");

    expect(localStorage.getItem("weaver_api_key")).toBe("old-key");
  });

  it("adopts delayed saved preferences until the reader edits the draft", () => {
    const savedPreferences: LabPreferences = {
      ...LEGACY_PREFERENCES,
      chapter: 1200,
      tier: "transcendent",
      volume: 6,
    };
    const { rerender } = render(
      <SpellSurfaceSettings
        initial={LEGACY_PREFERENCES}
        onClose={vi.fn()}
        onSave={vi.fn()}
      />,
    );

    rerender(
      <SpellSurfaceSettings
        initial={savedPreferences}
        onClose={vi.fn()}
        onSave={vi.fn()}
      />,
    );
    expect(screen.getByLabelText("Current chapter")).toHaveValue(1200);

    fireEvent.change(screen.getByLabelText("Current chapter"), {
      target: { value: "1210" },
    });
    rerender(
      <SpellSurfaceSettings
        initial={{ ...savedPreferences, chapter: 1300, volume: 7 }}
        onClose={vi.fn()}
        onSave={vi.fn()}
      />,
    );
    expect(screen.getByLabelText("Current chapter")).toHaveValue(1210);
  });
});
