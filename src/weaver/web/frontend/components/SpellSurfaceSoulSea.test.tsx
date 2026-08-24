import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SpellSurfaceSoulSea } from "./SpellSurfaceSoulSea";

describe("SpellSurfaceSoulSea", () => {
  it("renders Sunny's mature dark sea with seven cores, temple, and shadows", () => {
    const { container } = render(
      <SpellSurfaceSoulSea mode="sunny" state="idle" />,
    );

    expect(screen.getByRole("img", { name: /Sunny's Soul Sea/ })).toBeVisible();
    expect(container.querySelectorAll(".lab-soul-sun")).toHaveLength(7);
    expect(container.querySelector(".lab-soul-temple")).not.toBeNull();
    expect(container.querySelectorAll(".lab-shadow")).toHaveLength(11);
  });

  it("renders an ordinary bright Soul Sea around one core", () => {
    const { container } = render(
      <SpellSurfaceSoulSea mode="awakened" state="idle" />,
    );

    expect(screen.getByRole("img", { name: /Awakened Soul Sea/ })).toBeVisible();
    expect(container.querySelectorAll(".lab-soul-sun")).toHaveLength(1);
    expect(container.querySelector(".lab-soul-temple")).toBeNull();
    expect(container.querySelector(".lab-shadow-line")).toBeNull();
  });

  it("renders Nephis' radiant sea with seven suns and no shadow temple", () => {
    const { container } = render(
      <SpellSurfaceSoulSea mode="nephis" state="weaving" />,
    );

    expect(screen.getByRole("img", { name: /Nephis' Soul Sea/ })).toBeVisible();
    expect(container.querySelectorAll(".lab-soul-sun")).toHaveLength(7);
    expect(container.querySelector(".lab-soul-temple")).toBeNull();
    expect(container.querySelector(".lab-shadow-line")).toBeNull();
  });
});
