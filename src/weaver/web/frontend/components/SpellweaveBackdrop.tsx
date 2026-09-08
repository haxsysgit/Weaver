import { lazy, Suspense, useCallback, useEffect, useState } from "react";

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
  foregroundRespondsToActivity = true,
  paused,
  state,
  threadAlpha,
}: {
  distantRendererEnabled?: boolean;
  foregroundRespondsToActivity?: boolean;
  paused: boolean;
  state: SpellweaveActivityState;
  threadAlpha: number;
}) {
  const [rendererReady, setRendererReady] = useState(false);
  const revealSpellweave = useCallback(() => setRendererReady(true), []);

  useEffect(() => {
    if (!distantRendererEnabled) {
      setRendererReady(false);
    }
  }, [distantRendererEnabled]);

  return (
    <div
      aria-hidden="true"
      className="spellweave-backdrop"
      data-spell-state={state}
      data-renderer-ready={String(rendererReady)}
      data-testid="spellweave-backdrop"
    >
      <div className="spellweave-distant" data-spell-depth="distant">
        {distantRendererEnabled && (
          <Suspense fallback={null}>
            <SpellBackground
              className="lab-spell-background"
              mode="alive"
              onReady={revealSpellweave}
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
      <SpellweaveField
        depth="foreground"
        state={foregroundRespondsToActivity ? state : undefined}
      />
    </div>
  );
}
