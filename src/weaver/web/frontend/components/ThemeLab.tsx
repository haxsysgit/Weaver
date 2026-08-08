import { useState } from "react";


import { SpellBackground, type SpellBgMode } from "./SpellBackground";

/**
 * ThemeLab: a dev-only comparison page (route #theme-lab) so the owner can
 * see the Nightmare Spell surface variants side by side before they ship.
 *
 * Canon (ch15:5-7, the end of Sunny's First Nightmare):
 *   "an endless black void illuminated by a myriad of stars. Between those
 *   stars, countless strings of silver light were woven into a beautiful and
 *   inconceivably complex net, forming various nexuses and constellations."
 */

const SAMPLE_ANSWER =
  "you're remembering it right. Sunny killed the corrupted stone knight and claimed her as an Echo, and the Spell announced her like this: [You have slain a Corrupted Monster, Stone Knight.] she was Awakened rank, with [Battle Master] and [Stalwart], and the runes said she was created by the treacherous Lost From Light in the cursed darkness of the forgotten shore. she's been with him since ch104-105, and by ch1000 she's evolved all the way to Onyx Saint, an Ascended Devil with both shadow and true-darkness affinity.";

export function ThemeLab() {
  const [bgMode, setBgMode] = useState<SpellBgMode>("alive");

  return (
    <div className="theme-lab">
      <SpellBackground className="theme-lab-canvas" mode={bgMode} />
      <div className="theme-lab-bar">
        <span className="theme-lab-title">the inner workings of the Nightmare Spell · ch15:5</span>
        <div className="theme-lab-controls">
          <span className="theme-lab-group">
            <button
              type="button"
              className={bgMode === "subtle" ? "lab-pill on" : "lab-pill"}
              onClick={() => setBgMode("subtle")}
            >
              subtle
            </button>
            <button
              type="button"
              className={bgMode === "alive" ? "lab-pill on" : "lab-pill"}
              onClick={() => setBgMode("alive")}
            >
              alive
            </button>
          </span>
        </div>
      </div>
      <div className="theme-lab-sample">
        <div className="theme-lab-sample-head">
          <span className="spell-announce">[runes appeared, shining slightly]</span>
        </div>
        <div className="reply-sample glowing-text">
          <p>{SAMPLE_ANSWER}</p>
        </div>
        <p className="theme-lab-hint">
          background: {bgMode} · the reply reads as Spell runes, shining slightly
        </p>
      </div>
    </div>
  );
}
