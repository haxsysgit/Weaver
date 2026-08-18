import { describe, expect, it } from "vitest";

import { getSpellRenderProfile } from "./spellRenderProfile";

describe("Spell render profiles", () => {
  it("caps the drawing ratio at two physical pixels per CSS pixel", () => {
    const profile = getSpellRenderProfile({
      devicePixelRatio: 3.5,
      height: 844,
      reducedMotion: false,
      width: 390,
    });

    expect(profile.pixelRatio).toBe(2);
  });

  it("uses smaller budgets as phone screens become more constrained", () => {
    const compact = getSpellRenderProfile({
      devicePixelRatio: 2,
      height: 568,
      reducedMotion: false,
      width: 320,
    });
    const phone = getSpellRenderProfile({
      devicePixelRatio: 2,
      height: 844,
      reducedMotion: false,
      width: 390,
    });
    const desktop = getSpellRenderProfile({
      devicePixelRatio: 1,
      height: 900,
      reducedMotion: false,
      width: 1440,
    });

    expect(compact.name).toBe("compact");
    expect(phone.name).toBe("phone");
    expect(desktop.name).toBe("desktop");
    expect(compact.starCount).toBeLessThan(phone.starCount);
    expect(phone.starCount).toBeLessThan(desktop.starCount);
    expect(compact.maxThreadSegments).toBeLessThan(phone.maxThreadSegments);
    expect(phone.maxThreadSegments).toBeLessThan(desktop.maxThreadSegments);
  });

  it("selects a static low-cost profile for reduced motion", () => {
    const profile = getSpellRenderProfile({
      devicePixelRatio: 2,
      height: 844,
      reducedMotion: true,
      width: 390,
    });

    expect(profile.name).toBe("static");
    expect(profile.animated).toBe(false);
    expect(profile.starCount).toBeLessThanOrEqual(1_200);
    expect(profile.maxThreadSegments).toBeLessThanOrEqual(600);
  });

  it("uses the compact budget for narrow landscape viewports", () => {
    const profile = getSpellRenderProfile({
      devicePixelRatio: 2,
      height: 320,
      reducedMotion: false,
      width: 700,
    });

    expect(profile.name).toBe("compact");
  });
});
