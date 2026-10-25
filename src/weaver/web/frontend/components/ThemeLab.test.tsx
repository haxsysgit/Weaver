import { act, fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { ThemeLab } from "./ThemeLab";

vi.mock("./SpellBackground", () => ({
  SpellBackground: () => <canvas data-testid="spell-background" />,
}));

describe("Spell Surface v2 lab", () => {
  it("starts in the quiet Void reading mode", () => {
    render(<ThemeLab />);

    const surface = screen.getByTestId("spell-surface-lab");
    expect(surface).toHaveAttribute("data-theme", "void");
    expect(surface).toHaveAttribute("data-glass", "immersive");
    expect(surface).toHaveAttribute("data-runes", "particles");
    expect(surface).toHaveAttribute("data-font-size", "small");
  });

  it("keeps the Hidden Thread identity fixed while appearance controls remain", () => {
    render(<ThemeLab />);

    fireEvent.click(screen.getByRole("button", { name: "Open Soul Sea settings" }));
    const dialog = screen.getByRole("dialog", { name: "Reader Appraisal settings" });
    fireEvent.click(within(dialog).getByRole("button", { name: "Appearance" }));
    fireEvent.click(within(dialog).getByRole("button", { name: "Star web" }));
    fireEvent.click(within(dialog).getByRole("button", { name: "vivid" }));
    fireEvent.click(within(dialog).getByRole("button", { name: "Apply changes" }));

    const surface = screen.getByTestId("spell-surface-lab");
    expect(surface).toHaveAttribute("data-glass", "immersive");
    expect(surface).toHaveAttribute("data-theme", "void");
    expect(surface).toHaveAttribute("data-star-intensity", "vivid");
    expect(surface).toHaveAttribute("data-runes", "particles");
  }, 20_000);

  it("keeps the drawer to Chats and Fanfic with thread actions on hover", async () => {
    render(<ThemeLab />);

    expect(screen.getByRole("searchbox", { name: "Search chats and fanfic" })).toBeVisible();
    expect(screen.getByRole("button", { name: "Start a new weave" })).toBeVisible();
    expect(screen.queryByText("Today")).not.toBeInTheDocument();
    const chats = screen.getByRole("region", { name: "Chats" });
    expect(within(chats).getByText("Ariel and the Tomb")).toBeVisible();
    expect(screen.getByRole("region", { name: "Fanfic" })).toBeVisible();

    const threadNavigation = chats;
    const thread = screen.getByTestId("thread-sunny-azarax");
    fireEvent.click(within(thread).getByRole("button", { name: "Pin Sunny vs Azarax" }));
    const pinnedThread = screen.getByTestId("thread-sunny-azarax");
    expect(within(pinnedThread).getByRole("button", { name: "Unpin Sunny vs Azarax" })).toBeInTheDocument();

    const renameButton = within(pinnedThread).getByRole("button", {
      name: "Rename Sunny vs Azarax",
    });
    await waitFor(() => expect(renameButton).toBeEnabled());
    fireEvent.click(renameButton);
    const renameInput = within(pinnedThread).getByRole("textbox", { name: "Rename thread" });
    fireEvent.change(renameInput, { target: { value: "Azarax win conditions" } });
    fireEvent.keyDown(renameInput, { key: "Enter" });
    expect(await screen.findByText("Azarax win conditions")).toBeVisible();

    fireEvent.click(within(pinnedThread).getByRole("button", { name: "Archive Azarax win conditions" }));
    expect(screen.queryByText("Azarax win conditions")).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /Open archived threads/ }));
    expect(screen.getByText("Azarax win conditions")).toBeVisible();
  }, 10_000);

  it("shows one chats list and one fanfic list, with no date buckets", () => {
    render(<ThemeLab />);

    const chats = screen.getByRole("region", { name: "Chats" });
    const fanfic = screen.getByRole("region", { name: "Fanfic" });
    expect(within(chats).getByText("Ariel and the Tomb")).toBeVisible();
    expect(within(fanfic).getByText("[No fanfic yet. Start one above.]")).toBeVisible();
    expect(screen.queryByRole("button", { name: /Today/ })).toBeNull();
    expect(screen.queryByRole("button", { name: /Yesterday/ })).toBeNull();
  });

  it("opens the full settings surface and applies readable display controls", () => {
    render(<ThemeLab />);

    fireEvent.click(screen.getByRole("button", { name: "Open Soul Sea settings" }));
    const dialog = screen.getByRole("dialog", { name: "Reader Appraisal settings" });
    expect(within(dialog).getByRole("navigation", { name: "Settings index" })).toBeVisible();
    expect(within(dialog).queryByRole("button", { name: "Spoilers" })).toBeNull();
    expect(within(dialog).getByRole("button", { name: "Appearance" })).toBeVisible();

    const panel = dialog;
    expect(panel).not.toHaveClass("settings-detail-open");

    fireEvent.click(within(dialog).getByRole("button", { name: "Reader position" }));
    expect(panel).toHaveClass("settings-detail-open");
    fireEvent.click(dialog.querySelector(".lab-settings-back") as HTMLButtonElement);
    expect(panel).not.toHaveClass("settings-detail-open");
    fireEvent.click(within(dialog).getByRole("button", { name: "Reader position" }));
    fireEvent.change(within(dialog).getByLabelText("Current chapter"), {
      target: { value: "1231" },
    });
    expect(within(dialog).getByText("Volume 7")).toBeVisible();
    expect(
      within(dialog).getByRole("radio", { name: /Protect everything after Chapter 1231/ }),
    ).toBeChecked();

    fireEvent.click(within(dialog).getByRole("button", { name: "Appearance" }));
    fireEvent.click(within(dialog).getByRole("button", { name: "Comfortable text" }));
    fireEvent.click(within(dialog).getByRole("button", { name: "Apply changes" }));

    const surface = screen.getByTestId("spell-surface-lab");
    expect(surface).toHaveAttribute("data-density", "comfortable");
    expect(screen.getAllByText(/Vol 7/)).not.toHaveLength(0);
  }, 10_000);

  it("protects dirty settings from an accidental close", () => {
    render(<ThemeLab />);

    fireEvent.click(screen.getByRole("button", { name: "Open Soul Sea settings" }));
    const dialog = screen.getByRole("dialog", { name: "Reader Appraisal settings" });
    fireEvent.click(within(dialog).getByRole("button", { name: "Answer depth" }));
    fireEvent.click(within(dialog).getByRole("button", { name: "transcendent" }));
    fireEvent.click(within(dialog).getByRole("button", { name: "Close settings" }));

    expect(within(dialog).getByText("Discard unsaved changes?")).toBeVisible();
    fireEvent.click(within(dialog).getByRole("button", { name: "Keep editing" }));
    expect(screen.getByRole("dialog", { name: "Reader Appraisal settings" })).toBeVisible();
  });

  it("states the real local-library, DeepSeek, and browser-key boundaries", () => {
    render(<ThemeLab />);

    fireEvent.click(screen.getByRole("button", { name: "Open Soul Sea settings" }));
    const dialog = screen.getByRole("dialog", { name: "Reader Appraisal settings" });
    fireEvent.click(within(dialog).getByRole("button", { name: "Privacy and controls" }));

    expect(within(dialog).getByText(/local library on this Weaver installation/)).toBeVisible();
    expect(within(dialog).getByText(/sent to DeepSeek to generate a reply/)).toBeVisible();
    expect(within(dialog).getByText(/key stays in this browser/)).toBeVisible();
    expect(within(dialog).queryByText("Everything stays on this machine.")).toBeNull();
  });

  it("supports the settings keyboard shortcut", () => {
    render(<ThemeLab />);

    fireEvent.keyDown(window, { key: ",", ctrlKey: true });
    expect(screen.getByRole("dialog", { name: "Reader Appraisal settings" })).toBeVisible();
    fireEvent.keyDown(window, { key: "Escape" });
    expect(screen.queryByRole("dialog", { name: "Reader Appraisal settings" })).not.toBeInTheDocument();
  });

  it("lets the owner send a lab message and shows the Spell weaving response", () => {
    vi.useFakeTimers();
    render(<ThemeLab />);

    const composer = screen.getByRole("textbox", { name: "Message Weaver" });
    fireEvent.change(composer, { target: { value: "what did Ariel whisper?" } });
    fireEvent.click(screen.getByRole("button", { name: "Send message" }));

    expect(screen.getByText("what did Ariel whisper?")).toBeVisible();
    expect(screen.getByText("[Searching the fate tapestry.]")).toBeVisible();

    act(() => vi.advanceTimersByTime(540));
    expect(screen.getByText("[Weaving the story.]")).toBeVisible();

    act(() => vi.advanceTimersByTime(360));
    expect(screen.getByText(/This lab keeps the answer source-grounded/)).toBeVisible();
    expect(screen.getByText("[The weave is complete.]")).toBeVisible();
    vi.useRealTimers();
  });
});
