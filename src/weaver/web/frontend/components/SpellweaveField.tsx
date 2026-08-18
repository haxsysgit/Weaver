import { useMemo } from "react";

import {
  createSpellGeometry,
  type SpellComposition,
  type SpellGeometry,
} from "../lib/spellGeometry";

export type SpellweaveDepth = "foreground" | "middle";

function geometryFor(composition: SpellComposition): SpellGeometry {
  return createSpellGeometry({
    composition,
    seed: composition === "portrait" ? 25 : 250,
  });
}

function GeometryGroup({
  composition,
  geometry,
}: {
  composition: SpellComposition;
  geometry: SpellGeometry;
}) {
  return (
    <g data-spell-composition={composition}>
      <path
        className="spellweave-event-thread"
        d={composition === "portrait"
          ? "M 500 1000 C 430 760 570 520 500 0"
          : "M 0 500 C 260 430 740 570 1000 500"}
        pathLength="1"
      />
      {geometry.segments.map((segment, index) => {
        const from = geometry.points[segment.from];
        const to = geometry.points[segment.to];
        return (
          <line
            key={`${segment.from}-${segment.to}-${index}`}
            pathLength="1"
            x1={from.x * 1_000}
            x2={to.x * 1_000}
            y1={from.y * 1_000}
            y2={to.y * 1_000}
          />
        );
      })}
      {geometry.anchors.map((anchor, index) => (
        <g
          className="spellweave-knot"
          key={`${anchor.x}-${anchor.y}-${index}`}
          transform={`translate(${anchor.x * 1_000} ${anchor.y * 1_000})`}
        >
          <circle r="5" />
          <path d="M -14 0 H 14 M 0 -14 V 14" pathLength="1" />
        </g>
      ))}
    </g>
  );
}

export function SpellweaveField({ depth }: { depth: SpellweaveDepth }) {
  const portrait = useMemo(() => geometryFor("portrait"), []);
  const desktop = useMemo(() => geometryFor("desktop"), []);

  return (
    <svg
      className={`spellweave-field spellweave-field-${depth}`}
      data-spell-depth={depth}
      data-testid="spellweave-field"
      focusable="false"
      preserveAspectRatio="none"
      viewBox="0 0 1000 1000"
    >
      <GeometryGroup composition="portrait" geometry={portrait} />
      <GeometryGroup composition="desktop" geometry={desktop} />
    </svg>
  );
}
