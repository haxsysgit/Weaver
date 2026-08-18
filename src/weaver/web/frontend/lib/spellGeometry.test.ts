import { describe, expect, it } from "vitest";

import { createSpellGeometry } from "./spellGeometry";

describe("Spellweave geometry", () => {
  it("returns the same geometry for the same seed and composition", () => {
    const first = createSpellGeometry({ composition: "portrait", seed: 25 });
    const second = createSpellGeometry({ composition: "portrait", seed: 25 });

    expect(second).toEqual(first);
  });

  it("keeps every point inside normalized viewport coordinates", () => {
    const geometry = createSpellGeometry({ composition: "desktop", seed: 25 });

    for (const point of geometry.points) {
      expect(point.x).toBeGreaterThanOrEqual(0);
      expect(point.x).toBeLessThanOrEqual(1);
      expect(point.y).toBeGreaterThanOrEqual(0);
      expect(point.y).toBeLessThanOrEqual(1);
    }
  });

  it("keeps connection counts bounded and references valid points", () => {
    const geometry = createSpellGeometry({ composition: "portrait", seed: 25 });

    expect(geometry.segments.length).toBeLessThanOrEqual(64);
    for (const segment of geometry.segments) {
      expect(segment.from).toBeGreaterThanOrEqual(0);
      expect(segment.from).toBeLessThan(geometry.points.length);
      expect(segment.to).toBeGreaterThanOrEqual(0);
      expect(segment.to).toBeLessThan(geometry.points.length);
      expect(segment.from).not.toBe(segment.to);
    }
  });

  it("composes portrait around a vertical spine and desktop across its width", () => {
    const portrait = createSpellGeometry({ composition: "portrait", seed: 25 });
    const desktop = createSpellGeometry({ composition: "desktop", seed: 25 });

    expect(portrait.anchors[0]).toEqual({ x: 0.5, y: 0 });
    expect(portrait.anchors.at(-1)).toEqual({ x: 0.5, y: 1 });
    expect(desktop.anchors).toContainEqual({ x: 0, y: 0.5 });
    expect(desktop.anchors).toContainEqual({ x: 1, y: 0.5 });
    expect(desktop).not.toEqual(portrait);
  });
});
