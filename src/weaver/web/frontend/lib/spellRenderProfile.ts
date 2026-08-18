export type SpellRenderProfileName = "compact" | "desktop" | "phone" | "static";

export interface SpellRenderProfileInput {
  devicePixelRatio: number;
  height: number;
  reducedMotion: boolean;
  width: number;
}

export interface SpellRenderProfile {
  animated: boolean;
  divineLightCount: number;
  maxThreadSegments: number;
  name: SpellRenderProfileName;
  pixelRatio: number;
  starCount: number;
}

const DIVINE_LIGHT_COUNT = 91;

function cappedPixelRatio(devicePixelRatio: number): number {
  if (!Number.isFinite(devicePixelRatio)) {
    return 1;
  }

  return Math.min(Math.max(devicePixelRatio, 1), 2);
}

export function getSpellRenderProfile(
  input: SpellRenderProfileInput,
): SpellRenderProfile {
  const pixelRatio = cappedPixelRatio(input.devicePixelRatio);

  if (input.reducedMotion) {
    return {
      animated: false,
      divineLightCount: DIVINE_LIGHT_COUNT,
      maxThreadSegments: 600,
      name: "static",
      pixelRatio,
      starCount: 1_200,
    };
  }

  const narrowLandscape = input.width > input.height && input.height <= 500;
  if (input.width < 360 || narrowLandscape) {
    return {
      animated: true,
      divineLightCount: DIVINE_LIGHT_COUNT,
      maxThreadSegments: 900,
      name: "compact",
      pixelRatio,
      starCount: 1_800,
    };
  }

  if (input.width < 768) {
    return {
      animated: true,
      divineLightCount: DIVINE_LIGHT_COUNT,
      maxThreadSegments: 1_600,
      name: "phone",
      pixelRatio,
      starCount: 2_600,
    };
  }

  return {
    animated: true,
    divineLightCount: DIVINE_LIGHT_COUNT,
    maxThreadSegments: 3_400,
    name: "desktop",
    pixelRatio,
    starCount: 4_500,
  };
}
