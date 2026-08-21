import { lazy, Suspense } from "react";

import { SpellweaveField } from "./SpellweaveField";
import "../styles/spellweave.css";

const SpellBackground = lazy(() =>
  import("./SpellBackground").then((module) => ({
    default: module.SpellBackground,
  })),
);

export type SpellweaveActivityState =
  | "answering"
  | "complete"
  | "failed"
  | "idle"
  | "reaching"
  | "reading";

export function SpellweaveBackdrop({
  distantRendererEnabled = true,
  paused,
  state,
  threadAlpha,
}: {
  distantRendererEnabled?: boolean;
  paused: boolean;
  state: SpellweaveActivityState;
  threadAlpha: number;
}) {
  return (
    <div
      aria-hidden="true"
      className="spellweave-backdrop"
      data-spell-state={state}
      data-testid="spellweave-backdrop"
    >
      <div className="spellweave-distant" data-spell-depth="distant">
        {distantRendererEnabled && (
          <Suspense fallback={null}>
            <SpellBackground
              className="lab-spell-background"
              mode="alive"
              paused={paused}
              threadAlpha={threadAlpha}
            />
          </Suspense>
        )}
        <div className="lab-galactic-band" />
        <div className="lab-star-flare flare-one" />
        <div className="lab-star-flare flare-two" />
      </div>
      <SpellweaveField depth="middle" />
      <SpellweaveField depth="foreground" state={state} />
    </div>
  );
}
