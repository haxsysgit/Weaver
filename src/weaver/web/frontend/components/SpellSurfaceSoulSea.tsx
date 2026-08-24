import type { CSSProperties } from "react";

export type SoulSeaMode = "sunny" | "awakened" | "nephis";
export type SoulSeaState = "idle" | "rippling" | "weaving" | "complete" | "error";

interface SoulSeaProps {
  compact?: boolean;
  mode: SoulSeaMode;
  state: SoulSeaState;
}

const SEVEN_CORES = Array.from({ length: 7 }, (_, index) => index);
const MEMORIES = Array.from({ length: 8 }, (_, index) => index);
const SHADOWS = Array.from({ length: 11 }, (_, index) => index);

export const SOUL_SEA_LABELS: Record<SoulSeaMode, string> = {
  sunny: "Sunny's Soul Sea",
  awakened: "Awakened Soul Sea",
  nephis: "Nephis' Soul Sea",
};

export const SOUL_SEA_DESCRIPTIONS: Record<SoulSeaMode, string> = {
  sunny: "Seven lightless cores circle a black temple above still water.",
  awakened: "One warm core fills a bright, living sea with soul light.",
  nephis: "Seven radiant suns burn over a calm sea of golden light.",
};

function indexedStyle(index: number): CSSProperties {
  return { "--index": index } as CSSProperties;
}

export function SpellSurfaceSoulSea({ compact = false, mode, state }: SoulSeaProps) {
  const coreCount = mode === "awakened" ? 1 : 7;

  return (
    <div
      aria-label={`${SOUL_SEA_LABELS[mode]}, ${state}`}
      className={`lab-soul-sea soul-${mode} soul-state-${state} ${compact ? "soul-compact" : ""}`}
      role="img"
    >
      <div className="lab-soul-sky">
        {mode === "sunny" && (
          <div className="lab-soul-temple" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        )}
        <div className="lab-soul-suns" aria-hidden="true">
          {SEVEN_CORES.slice(0, coreCount).map((core) => (
            <span className="lab-soul-sun" key={core} style={indexedStyle(core)} />
          ))}
        </div>
        <div className="lab-memory-orbit" aria-hidden="true">
          {MEMORIES.map((memory) => (
            <span className="lab-memory-light" key={memory} style={indexedStyle(memory)} />
          ))}
        </div>
      </div>
      {mode === "sunny" && (
        <div className="lab-shadow-line" aria-hidden="true">
          {SHADOWS.map((shadow) => (
            <span className="lab-shadow" key={shadow} style={indexedStyle(shadow)} />
          ))}
        </div>
      )}
      <div className="lab-soul-water" aria-hidden="true">
        <span className="water-plane water-plane-back" />
        <span className="water-plane water-plane-middle" />
        <span className="water-plane water-plane-front" />
        <span className="water-flash" />
      </div>
      {!compact && (
        <p className="lab-soul-caption">
          <span>{SOUL_SEA_LABELS[mode]}</span>
          {SOUL_SEA_DESCRIPTIONS[mode]}
        </p>
      )}
    </div>
  );
}
