import { act, fireEvent, render, screen, within } from "@testing-library/react";
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

  it("keeps theme and visual choices inside Customize settings", () => {
    render(<ThemeLab />);

    fireEvent.click(screen.getByRole("button", { name: "Open Soul Sea settings" }));
    const dialog = screen.getByRole("dialog", { name: "Soul Sea settings" });
    fireEvent.click(within(dialog).getByRole("button", { name: "Customize" }));
    fireEvent.click(within(dialog).getByRole("button", { name: "Cosmos" }));
    fireEvent.click(within(dialog).getByRole("button", { name: "Immersive glass" }));
    fireEvent.click(within(dialog).getByRole("button", { name: "Living Soul" }));
    fireEvent.click(within(dialog).getByRole("button", { name: "Thread weave" }));
    fireEvent.click(within(dialog).getByRole("button", { name: "Apply settings" }));

    const surface = screen.getByTestId("spell-surface-lab");
    expect(surface).toHaveAttribute("data-glass", "immersive");
    expect(surface).toHaveAttribute("data-theme", "cosmos");
    expect(surface).toHaveAttribute("data-soul", "living");
    expect(surface).toHaveAttribute("data-runes", "threads");
  }, 10_000);

  it("keeps the sidebar clean while thread actions remain available on hover", () => {
    render(<ThemeLab />);

    expect(screen.queryByRole("searchbox")).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Start a new weave" })).toBeVisible();
    expect(screen.getByRole("button", { name: "Organize chats" })).toBeVisible();
    expect(screen.getByRole("region", { name: "Novels" })).toHaveTextContent("Shadow Slave");
    expect(screen.getByRole("region", { name: "Novels" })).toHaveTextContent("Kill the Sun");
    expect(screen.getByRole("region", { name: "Novels" })).toHaveTextContent("Lord of the Mysteries");

    fireEvent.click(screen.getByRole("button", { name: "Organize chats" }));
    fireEvent.click(screen.getByRole("menuitemradio", { name: /In one list/ }));
    expect(screen.queryByText("Today")).not.toBeInTheDocument();

    const threadNavigation = screen.getByRole("navigation", { name: "Threads" });
    expect(within(threadNavigation).getByText("Sunny vs Azarax")).toBeVisible();
    const thread = screen.getByTestId("thread-sunny-azarax");
    fireEvent.click(within(thread).getByRole("button", { name: "Pin Sunny vs Azarax" }));
    const pinnedThread = screen.getByTestId("thread-sunny-azarax");
    expect(within(pinnedThread).getByRole("button", { name: "Unpin Sunny vs Azarax" })).toBeInTheDocument();

    fireEvent.click(within(pinnedThread).getByRole("button", { name: "Rename Sunny vs Azarax" }));
    const renameInput = within(pinnedThread).getByRole("textbox", { name: "Rename thread" });
    fireEvent.change(renameInput, { target: { value: "Azarax win conditions" } });
    fireEvent.keyDown(renameInput, { key: "Enter" });
    expect(screen.getByText("Azarax win conditions")).toBeVisible();

    fireEvent.click(within(pinnedThread).getByRole("button", { name: "Archive Azarax win conditions" }));
    expect(screen.queryByText("Azarax win conditions")).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /Archived/ }));
    expect(screen.getByText("Azarax win conditions")).toBeVisible();
  });

  it("shows three date groups and folds older chats", () => {
    render(<ThemeLab />);

    const today = screen.getByRole("button", { name: /Today/ });
    const yesterday = screen.getByRole("button", { name: /Yesterday/ });
    const others = screen.getByRole("button", { name: /Others/ });

    expect(today).toHaveAttribute("aria-expanded", "true");
    expect(yesterday).toHaveAttribute("aria-expanded", "false");
    expect(others).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(yesterday);
    expect(yesterday).toHaveAttribute("aria-expanded", "true");
  });

  it("opens the full settings surface and applies readable display controls", () => {
    render(<ThemeLab />);

    fireEvent.click(screen.getByRole("button", { name: "Open Soul Sea settings" }));
    const dialog = screen.getByRole("dialog", { name: "Soul Sea settings" });
    expect(within(dialog).getByRole("button", { name: "Spoilers" })).toBeVisible();
    expect(within(dialog).getByRole("button", { name: "Customize" })).toBeVisible();

    fireEvent.click(within(dialog).getByRole("button", { name: "Reader position" }));
    fireEvent.change(within(dialog).getByLabelText("Reader volume"), {
      target: { value: "7" },
    });
    fireEvent.click(within(dialog).getByRole("button", { name: "Customize" }));
    fireEvent.click(within(dialog).getByRole("button", { name: "Comfortable text" }));
    fireEvent.click(within(dialog).getByRole("button", { name: "Apply settings" }));

    const surface = screen.getByTestId("spell-surface-lab");
    expect(surface).toHaveAttribute("data-density", "comfortable");
    expect(screen.getAllByText(/Vol 7/)).not.toHaveLength(0);
  });

  it("supports the settings keyboard shortcut", () => {
    render(<ThemeLab />);

    fireEvent.keyDown(window, { key: ",", ctrlKey: true });
    expect(screen.getByRole("dialog", { name: "Soul Sea settings" })).toBeVisible();
    fireEvent.keyDown(window, { key: "Escape" });
    expect(screen.queryByRole("dialog", { name: "Soul Sea settings" })).not.toBeInTheDocument();
  });

  it("lets the owner send a lab message and shows the Spell weaving response", () => {
    vi.useFakeTimers();
    render(<ThemeLab />);

    const composer = screen.getByRole("textbox", { name: "Message Weaver" });
    fireEvent.change(composer, { target: { value: "what did Ariel whisper?" } });
    fireEvent.click(screen.getByRole("button", { name: "Send message" }));

    expect(screen.getByText("what did Ariel whisper?")).toBeVisible();
    expect(screen.getByText("[The Spell is weaving an answer.]")).toBeVisible();

    act(() => vi.advanceTimersByTime(900));
    expect(screen.getByText(/This lab keeps the answer source-grounded/)).toBeVisible();
    expect(screen.getByText("[The weave is complete.]")).toBeVisible();
    vi.useRealTimers();
  });
});
