import { render, screen } from "@testing-library/react";
import type { ReactNode } from "react";
import { describe, expect, it, vi } from "vitest";

vi.mock("motion/react", () => ({
  LazyMotion: ({
    children,
    features,
    strict,
  }: {
    children: ReactNode;
    features: unknown;
    strict?: boolean;
  }) => (
    <div
      data-feature-loader={typeof features}
      data-motion-strict={String(strict)}
      data-testid="lazy-motion"
    >
      {children}
    </div>
  ),
  MotionConfig: ({
    children,
    reducedMotion,
  }: {
    children: ReactNode;
    reducedMotion?: string;
  }) => (
    <div data-reduced-motion={reducedMotion} data-testid="motion-config">
      {children}
    </div>
  ),
}));

import { SpellMotionProvider } from "./SpellMotionProvider";

describe("Spell motion provider", () => {
  it("loads features lazily and respects the reader's motion preference", () => {
    render(
      <SpellMotionProvider>
        <button type="button">Ask Weaver</button>
      </SpellMotionProvider>,
    );

    expect(screen.getByTestId("lazy-motion")).toHaveAttribute(
      "data-feature-loader",
      "function",
    );
    expect(screen.getByTestId("lazy-motion")).toHaveAttribute(
      "data-motion-strict",
      "true",
    );
    expect(screen.getByTestId("motion-config")).toHaveAttribute(
      "data-reduced-motion",
      "user",
    );
    expect(screen.getByRole("button", { name: "Ask Weaver" })).toBeVisible();
  });
});
