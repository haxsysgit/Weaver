import type { CSSProperties } from "react";

export type RuneMode = "particles" | "voice" | "threads";

export const RUNE_OPTIONS: Array<{
  description: string;
  label: string;
  mode: RuneMode;
}> = [
  {
    description: "glowing fragments gather, form, and fade",
    label: "Particle fragments",
    mode: "particles",
  },
  {
    description: "bracketed announcements appear in the Spell's voice",
    label: "Spell voice",
    mode: "voice",
  },
  {
    description: "silver threads draw a shape before dissolving",
    label: "Thread weave",
    mode: "threads",
  },
];

interface SpellSurfaceRunesProps {
  announcement: string;
  eventKey: number;
  mode: RuneMode;
}

const PARTICLES = Array.from({ length: 20 }, (_, index) => index);

function particleStyle(index: number): CSSProperties {
  return { "--index": index } as CSSProperties;
}

export function SpellSurfaceRunes({
  announcement,
  eventKey,
  mode,
}: SpellSurfaceRunesProps) {
  return (
    <div
      aria-live="polite"
      className={`lab-rune-event rune-${mode}`}
      key={`${mode}-${eventKey}`}
    >
      {mode === "particles" && (
        <div aria-hidden="true" className="rune-particles">
          {PARTICLES.map((particle) => (
            <span key={particle} style={particleStyle(particle)} />
          ))}
        </div>
      )}
      {mode === "threads" && (
        <svg aria-hidden="true" className="rune-thread-weave" viewBox="0 0 420 72">
          <path d="M4 36 C60 4 95 65 150 25 S250 7 302 43 S375 64 416 20" />
          <path d="M12 55 C74 28 105 12 166 48 S264 63 318 25 S382 10 408 44" />
          <path d="M74 11 L112 58 M201 9 L224 62 M324 8 L356 61" />
        </svg>
      )}
      <p className="rune-announcement">{announcement}</p>
    </div>
  );
}
