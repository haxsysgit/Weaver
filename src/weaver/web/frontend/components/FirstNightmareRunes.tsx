import type { CSSProperties } from "react";

interface RuneFragment {
  x: number;
  y: number;
}

const RUNE_FRAGMENTS: RuneFragment[] = [
  { x: -78, y: -20 },
  { x: -60, y: -14 },
  { x: -42, y: -8 },
  { x: -24, y: -3 },
  { x: -7, y: 0 },
  { x: 12, y: 2 },
  { x: 30, y: 7 },
  { x: 48, y: 13 },
  { x: 67, y: 20 },
  { x: -78, y: 20 },
  { x: -60, y: 14 },
  { x: -42, y: 8 },
  { x: -24, y: 3 },
  { x: -7, y: 0 },
  { x: 12, y: -2 },
  { x: 30, y: -7 },
  { x: 48, y: -13 },
  { x: 67, y: -20 },
  { x: -2, y: -27 },
  { x: -1, y: -14 },
  { x: 0, y: 14 },
  { x: 1, y: 27 },
];

function fragmentStyle(fragment: RuneFragment, index: number): CSSProperties {
  return {
    "--fragment-index": index,
    "--fragment-x": `${fragment.x}px`,
    "--fragment-y": `${fragment.y}px`,
  } as CSSProperties;
}

interface FirstNightmareRunesProps {
  announcement: string;
  eventKey: number;
}

export function FirstNightmareRunes({
  announcement,
  eventKey,
}: FirstNightmareRunesProps) {
  return (
    <div
      aria-live="polite"
      className="first-nightmare-rune-event"
      key={eventKey}
    >
      <div aria-hidden="true" className="first-nightmare-particles">
        <svg className="first-nightmare-thread" viewBox="0 0 180 60">
          <path d="M5 12 C48 12 53 48 90 30 S135 12 175 48" />
          <path d="M5 48 C48 48 53 12 90 30 S135 48 175 12" />
        </svg>
        {RUNE_FRAGMENTS.map((fragment, index) => (
          <span key={index} style={fragmentStyle(fragment, index)} />
        ))}
      </div>
      <p>{announcement}</p>
    </div>
  );
}
