import { render } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { SpellBackground } from "./SpellBackground";

describe("SpellBackground lifecycle", () => {
  beforeEach(() => {
    Object.defineProperty(window, "matchMedia", {
      configurable: true,
      value: vi.fn().mockReturnValue({
        addEventListener: vi.fn(),
        matches: false,
        removeEventListener: vi.fn(),
      }),
    });
  });

  it("keeps the same canvas while activity and pause state change", () => {
    const { container, rerender } = render(
      <SpellBackground mode="subtle" paused={false} />,
    );
    const canvas = container.querySelector("canvas");

    rerender(<SpellBackground mode="alive" paused />);

    expect(container.querySelector("canvas")).toBe(canvas);
    expect(canvas).toHaveAttribute("data-spell-mode", "alive");
    expect(canvas).toHaveAttribute("data-paused", "true");
  });
});
