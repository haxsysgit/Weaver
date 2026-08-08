// Authentic Elder Futhark letterforms, path data extracted from
// Wikimedia Commons "Runic letters elder futhark.svg" (public domain,
// Inkscape original). Normalized: each glyph sits at its origin with
// its own viewBox. Used for the Spell-window frame decoration.
export type RuneName = keyof typeof RUNE_GLYPHS;
export const RUNE_GLYPHS = {
  fehu: { viewBox: "0 0 25 62", paths: ["M 2.0 58.0 L 0.0 0.0", "M 25.0 0.0 L 0.0 25.0", "M 25.0 15.0 L 0.0 40.0"] },
  uruz: { viewBox: "0 0 34 61", paths: ["M 1.0 58.0 L 0.0 0.0 L 33.0 57.0"] },
  thurisaz: { viewBox: "0 0 23 62", paths: ["M 2.0 58.0 L 0.0 0.0", "M 2.0 14.0 L 21.0 30.0 L 2.0 42.0"] },
  ansuz: { viewBox: "0 0 18 62", paths: ["M 0.0 2.0 L 4.0 2.0 L 16.0 12.0", "M 16.0 27.0 L 2.0 15.33", "M 2.0 60.0 L 2.0 0.0"] },
  raidho: { viewBox: "0 0 24 62", paths: ["M 2.0 60.0 L 2.0 0.0", "M 0.0 2.0 L 4.0 2.0 L 20.0 16.0 L 3.0 30.0 L 22.0 59.0"] },
  kenaz: { viewBox: "0 0 24 46", paths: ["M 16.0 50.0 L 0.0 22.0 L 16.0 6.0"] },
  gebo: { viewBox: "0 0 29 60", paths: ["M 1.0 -1.0 L 26.56 58.0", "M 1.0 57.0 L 26.0 0.0"] },
  wunjo: { viewBox: "0 0 20 62", paths: ["M 2.0 60.0 L 2.0 0.0", "M 0.0 2.0 L 4.0 2.0 L 18.0 14.0", "M 2.0 26.0 L 18.0 14.0 L 4.0 2.0"] },
  hagalaz: { viewBox: "0 0 38 62", paths: ["M 2.0 -2.0 L 0.0 60.0", "M 38.0 58.0 L 36.0 0.0", "M 2.0 15.0 L 36.0 43.0"] },
  naudiz: { viewBox: "0 0 24 62", paths: ["M 12.0 -1.0 L 11.0 60.0", "M 23.0 29.0 L 0.0 20.0"] },
  isa: { viewBox: "0 0 2 62", paths: ["M 2.0 58.0 L 0.0 0.0"] },
  jera: { viewBox: "0 0 36 47", paths: ["M 12.5 5.5 L 0.0 15.0 L 12.5 35.5", "M 10.5 20.5 L 34.0 30.0 L 10.5 50.5"] },
  ihwa: { viewBox: "0 0 34 62", paths: ["M 18.0 -2.0 L 16.0 60.0", "M 16.0 0.0 L 18.0 2.0 L 34.0 6.0", "M 20.0 56.0 L 14.0 58.0 L 2.0 50.0"] },
  perthro: { viewBox: "0 0 25 62", paths: ["M 2.0 60.0 L 2.0 0.0", "M 0.0 2.0 L 4.0 2.0 L 13.0 9.0 L 23.0 1.0", "M 0.0 58.0 L 4.0 58.0 L 13.0 51.0 L 23.0 59.0"] },
  elhaz: { viewBox: "0 0 40 62", paths: ["M 1.0 0.0 L 19.0 20.0 L 39.0 0.0", "M 20.0 -1.0 L 19.0 60.0"] },
  sowilo: { viewBox: "0 0 22 58", paths: ["M 20.0 56.0 L 0.0 42.0 L 20.0 28.0 L 0.0 14.0 L 20.0 0.0"] },
  tiwaz: { viewBox: "0 0 38 62", paths: ["M 20.0 58.0 L 18.0 0.0", "M 38.0 12.0 L 20.0 2.0 L 18.0 0.0 L 0.0 14.0"] },
  berkano: { viewBox: "0 0 25 62", paths: ["M 2.0 60.0 L 2.0 0.0", "M 0.0 2.0 L 4.0 2.0 L 23.0 15.0 L 2.0 30.0 L 23.0 45.0 L 4.0 58.0 L 0.0 58.0"] },
  ehwaz: { viewBox: "0 0 42 62", paths: ["M 2.0 60.0 L 2.0 0.0", "M 0.0 2.0 L 4.0 2.0 L 20.0 18.0 L 36.0 2.0 L 40.0 2.0", "M 38.0 60.0 L 38.0 0.0"] },
  mannaz: { viewBox: "0 0 42 62", paths: ["M 2.0 60.0 L 2.0 0.0", "M 38.0 60.0 L 38.0 0.0", "M 0.0 2.0 L 4.0 2.0 L 38.0 24.0", "M 40.0 2.0 L 36.0 2.0 L 2.0 24.0"] },
  laguz: { viewBox: "0 0 24 62", paths: ["M 2.0 60.0 L 2.0 0.0", "M 0.0 2.0 L 4.0 2.0 L 22.0 18.0"] },
  ingwaz: { viewBox: "0 0 28 32", paths: ["M -12.0 27.0 L 13.0 0.0 L 14.0 27.0", "M -12.0 27.0 L 13.0 30.0 L 14.0 27.0", "M 1.0 42.0 L 26.0 15.0 L 1.0 12.0", "M 1.0 12.0 L 0.0 15.0 L 1.0 42.0"] },
  dagaz: { viewBox: "0 0 42 62", paths: ["M 2.0 60.0 L 2.0 0.0", "M 38.0 60.0 L 38.0 0.0", "M 0.0 58.0 L 4.0 58.0 L 36.0 2.0 L 40.0 2.0", "M 0.0 2.0 L 4.0 2.0 L 36.0 58.0 L 40.0 58.0"] },
  othala: { viewBox: "0 0 39 54", paths: ["M -2.0 54.5 L 35.5 17.0 L 16.5 2.0 L 1.5 17.0 L 35.0 54.5"] },
} as const;
