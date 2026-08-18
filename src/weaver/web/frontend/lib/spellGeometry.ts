export type SpellComposition = "desktop" | "portrait";

export interface SpellPoint {
  x: number;
  y: number;
}

export interface SpellSegment {
  from: number;
  phase: number;
  to: number;
}

export interface SpellGeometry {
  anchors: SpellPoint[];
  points: SpellPoint[];
  segments: SpellSegment[];
}

const PORTRAIT_ANCHORS: SpellPoint[] = [
  { x: 0.5, y: 0 },
  { x: 0.5, y: 0.18 },
  { x: 0.14, y: 0.3 },
  { x: 0.86, y: 0.3 },
  { x: 0.5, y: 0.52 },
  { x: 0.18, y: 0.78 },
  { x: 0.82, y: 0.78 },
  { x: 0.5, y: 1 },
];

const DESKTOP_ANCHORS: SpellPoint[] = [
  { x: 0, y: 0.5 },
  { x: 0.18, y: 0.18 },
  { x: 0.5, y: 0.08 },
  { x: 0.82, y: 0.18 },
  { x: 1, y: 0.5 },
  { x: 0.82, y: 0.82 },
  { x: 0.5, y: 0.92 },
  { x: 0.18, y: 0.82 },
  { x: 0.5, y: 0.5 },
];

function createStableRandom(seed: number): () => number {
  let state = seed >>> 0;

  return () => {
    state = (state * 1_664_525 + 1_013_904_223) >>> 0;
    return state / 4_294_967_296;
  };
}

function clampNormalized(value: number): number {
  return Math.min(Math.max(value, 0), 1);
}

function copyAnchors(composition: SpellComposition): SpellPoint[] {
  const source = composition === "portrait"
    ? PORTRAIT_ANCHORS
    : DESKTOP_ANCHORS;

  return source.map((point) => ({ ...point }));
}

function addSegment(
  segments: SpellSegment[],
  from: number,
  to: number,
  random: () => number,
) {
  segments.push({
    from,
    phase: random(),
    to,
  });
}

export function createSpellGeometry({
  composition,
  seed,
}: {
  composition: SpellComposition;
  seed: number;
}): SpellGeometry {
  const anchors = copyAnchors(composition);
  const points = anchors.map((point) => ({ ...point }));
  const segments: SpellSegment[] = [];
  const random = createStableRandom(seed);
  const satelliteRadius = composition === "portrait" ? 0.09 : 0.075;

  for (let index = 0; index < anchors.length; index++) {
    const anchor = anchors[index];
    const firstSatelliteIndex = points.length;

    for (let satellite = 0; satellite < 2; satellite++) {
      const angle = random() * Math.PI * 2;
      const distance = satelliteRadius * (0.45 + random() * 0.55);
      points.push({
        x: clampNormalized(anchor.x + Math.cos(angle) * distance),
        y: clampNormalized(anchor.y + Math.sin(angle) * distance),
      });
    }

    addSegment(segments, index, firstSatelliteIndex, random);
    addSegment(segments, index, firstSatelliteIndex + 1, random);
    addSegment(segments, firstSatelliteIndex, firstSatelliteIndex + 1, random);
  }

  for (let index = 0; index < anchors.length - 1; index++) {
    addSegment(segments, index, index + 1, random);
  }

  for (let index = 0; index < anchors.length - 2; index += 2) {
    addSegment(segments, index, index + 2, random);
  }

  return {
    anchors,
    points,
    segments,
  };
}
