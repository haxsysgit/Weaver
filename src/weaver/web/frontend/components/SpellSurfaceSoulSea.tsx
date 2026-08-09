import type { CSSProperties } from "react";

export type SoulSeaMode = "still" | "living" | "mirror";
export type SoulSeaState = "idle" | "rippling" | "weaving" | "complete" | "error";

interface SoulSeaProps {
  compact?: boolean;
  mode: SoulSeaMode;
  state: SoulSeaState;
}

const SUNS = Array.from({ length: 7 }, (_, index) => index);
const MEMORIES = Array.from({ length: 8 }, (_, index) => index);
const SHADOWS = Array.from({ length: 11 }, (_, index) => index);

export const SOUL_SEA_LABELS: Record<SoulSeaMode, string> = {
  still: "Still Black Sea",
  living: "Living Soul",
  mirror: "Mirror of State",
};

function indexedStyle(index: number): CSSProperties {
  return { "--index": index } as CSSProperties;
}

export function SpellSurfaceSoulSea({ compact = false, mode, state }: SoulSeaProps) {
  return (
    <div
      aria-label={`${SOUL_SEA_LABELS[mode]}, ${state}`}
      className={`lab-soul-sea soul-${mode} soul-state-${state} ${compact ? "soul-compact" : ""}`}
      role="img"
    >
      <div className="lab-soul-sky">
        <div className="lab-soul-temple" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="lab-soul-suns" aria-hidden="true">
          {SUNS.map((sun) => (
            <span className="lab-soul-sun" key={sun} style={indexedStyle(sun)} />
          ))}
        </div>
        <div className="lab-memory-orbit" aria-hidden="true">
          {MEMORIES.map((memory) => (
            <span className="lab-memory-light" key={memory} style={indexedStyle(memory)} />
          ))}
        </div>
      </div>
      <div className="lab-shadow-line" aria-hidden="true">
        {SHADOWS.map((shadow) => (
          <span className="lab-shadow" key={shadow} style={indexedStyle(shadow)} />
        ))}
      </div>
      <div className="lab-soul-water" aria-hidden="true">
        <span className="water-plane water-plane-back" />
        <span className="water-plane water-plane-middle" />
        <span className="water-plane water-plane-front" />
        <span className="water-flash" />
      </div>
      {!compact && (
        <p className="lab-soul-caption">
          <span>{SOUL_SEA_LABELS[mode]}</span>
          {mode === "still" && "silent water, one lonely black sun"}
          {mode === "living" && "threads become shadows, memories become light"}
          {mode === "mirror" && "the sea answers the state of the weave"}
        </p>
      )}
    </div>
  );
}
