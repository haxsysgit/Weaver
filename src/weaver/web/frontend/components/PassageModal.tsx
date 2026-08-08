import { useEffect, useState } from "react";

import type { Passage } from "../lib/chatApi";

export interface PassageModalProps {
  handle: string;
  loadPassage: (handle: string) => Promise<Passage>;
  onClose: () => void;
}

export function PassageModal({ handle, loadPassage, onClose }: PassageModalProps) {
  const [passage, setPassage] = useState<Passage | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    loadPassage(handle)
      .then((loaded) => {
        if (mounted) {
          setPassage(loaded);
        }
      })
      .catch((loadError: unknown) => {
        if (mounted) {
          setError(loadError instanceof Error ? loadError.message : "could not summon the passage");
        }
      });
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => {
      mounted = false;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [handle, loadPassage, onClose]);

  return (
    <div
      aria-label="Summoned passage"
      aria-modal="true"
      className="passage-backdrop"
      role="dialog"
    >
      <div className="passage-panel">
        <header className="passage-header">
          <h2 className="passage-title">
            {passage ? (
              <>
                chapter {passage.chapter}
                <span className="passage-lines">
                  , lines {passage.line_start}-{passage.line_end} · volume{" "}
                  {passage.volume}
                </span>
              </>
            ) : (
              "summoning…"
            )}
          </h2>
          <button
            aria-label="Close passage"
            className="icon-button passage-close"
            onClick={onClose}
            type="button"
          >
            ×
          </button>
        </header>
        {passage && passage.beats.length > 0 && (
          <div className="passage-beats">
            {passage.beats.map((beat) => (
              <span className="passage-beat" key={beat}>
                {beat}
              </span>
            ))}
          </div>
        )}
        {error ? (
          <p className="passage-error">{error}</p>
        ) : (
          <pre className="passage-text">{passage ? passage.text : "…"}</pre>
        )}
      </div>
    </div>
  );
}
