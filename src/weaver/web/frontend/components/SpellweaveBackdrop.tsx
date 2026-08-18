import { SpellBackground } from "./SpellBackground";
import { SpellweaveField } from "./SpellweaveField";
import "../styles/spellweave.css";

export type SpellweaveActivityState =
  | "answering"
  | "complete"
  | "failed"
  | "idle"
  | "reaching"
  | "reading";

export function SpellweaveBackdrop({
  paused,
  state,
  threadAlpha,
}: {
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
        <SpellBackground
          className="lab-spell-background"
          mode="alive"
          paused={paused}
          threadAlpha={threadAlpha}
        />
        <div className="lab-galactic-band" />
        <div className="lab-star-flare flare-one" />
        <div className="lab-star-flare flare-two" />
      </div>
      <SpellweaveField depth="middle" />
      <SpellweaveField depth="foreground" />
    </div>
  );
}
