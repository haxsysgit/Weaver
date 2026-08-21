import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("./SpellBackground", () => ({
  SpellBackground: ({ paused }: { paused?: boolean }) => (
    <canvas data-paused={String(paused)} data-testid="distant-spell-field" />
  ),
}));

import { SpellweaveBackdrop } from "./SpellweaveBackdrop";

describe("Spellweave backdrop", () => {
  it("orders distant, middle, and foreground depths behind the interface", () => {
    render(
      <SpellweaveBackdrop
        paused={false}
        state="answering"
        threadAlpha={0.36}
      />,
    );

    const backdrop = screen.getByTestId("spellweave-backdrop");
    const depths = Array.from(
      backdrop.querySelectorAll<HTMLElement>("[data-spell-depth]"),
    ).map((element) => element.dataset.spellDepth);

    expect(depths).toEqual(["distant", "middle", "foreground"]);
    expect(backdrop).toHaveAttribute("aria-hidden", "true");
    expect(backdrop).toHaveAttribute("data-spell-state", "answering");
    expect(backdrop.querySelector(".spellweave-field-foreground")).toHaveAttribute(
      "data-spell-state",
      "answering",
    );
  });

  it("keeps both responsive compositions decorative and unfocusable", () => {
    render(
      <SpellweaveBackdrop paused={false} state="idle" threadAlpha={0.36} />,
    );

    const fields = screen.getAllByTestId("spellweave-field");
    expect(fields).toHaveLength(2);
    expect(fields[0]).toHaveAttribute("focusable", "false");
    expect(fields[1]).toHaveAttribute("focusable", "false");
    expect(document.querySelector("[data-spell-composition='portrait']")).not.toBeNull();
    expect(document.querySelector("[data-spell-composition='desktop']")).not.toBeNull();
    expect(document.querySelector(".spellweave-backdrop button")).toBeNull();
    expect(document.querySelector(".spellweave-backdrop input")).toBeNull();
  });

  it("passes paused state to the distant renderer", async () => {
    render(
      <SpellweaveBackdrop paused state="failed" threadAlpha={0.36} />,
    );

    expect(await screen.findByTestId("distant-spell-field")).toHaveAttribute(
      "data-paused",
      "true",
    );
  });

  it("keeps the distant renderer unmounted while a full-screen surface hides it", () => {
    render(
      <SpellweaveBackdrop
        distantRendererEnabled={false}
        paused
        state="idle"
        threadAlpha={0.36}
      />,
    );

    expect(screen.queryByTestId("distant-spell-field")).toBeNull();
    expect(screen.getByTestId("spellweave-backdrop")).toBeInTheDocument();
  });
});
