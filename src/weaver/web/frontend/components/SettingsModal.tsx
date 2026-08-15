import { useEffect, useRef, useState } from "react";

import type { UserPreferences } from "../lib/chatApi";
import { getApiKey, setApiKey } from "../lib/identity";

export interface SettingsModalProps {
  onClose: () => void;
  onSave: (prefs: UserPreferences) => Promise<void>;
  initial: UserPreferences;
}

/** The Soul Sea (ch16:21-27): a silent calm dark sea lit by a lonely black
 * sun, the soul core a star hanging above with Memories orbiting as spheres
 * of light. The reader's chapter is their core; the settings orbit it.
 */
export function SettingsModal({ onClose, onSave, initial }: SettingsModalProps) {
  const [readerChapter, setReaderChapter] = useState(
    initial.reader_chapter == null ? "" : String(initial.reader_chapter),
  );
  const [spoilerMode, setSpoilerMode] = useState<"protect" | "none">(
    initial.spoiler_mode,
  );
  const [tier, setTier] = useState<UserPreferences["tier"]>(initial.tier);
  const [apiKey, setApiKeyState] = useState(getApiKey());
  const [saving, setSaving] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  async function handleSave() {
    setSaving(true);
    setApiKey(apiKey);
    const parsed = readerChapter.trim() === "" ? null : Number(readerChapter);
    await onSave({
      reader_chapter: parsed && parsed >= 1 && parsed <= 3127 ? parsed : null,
      spoiler_mode: spoilerMode,
      tier,
    });
    setSaving(false);
    onClose();
  }

  const coreLabel = readerChapter.trim() === "" ? "?" : readerChapter;

  return (
    <div
      aria-label="Chat settings"
      aria-modal="true"
      className="settings-backdrop"
      role="dialog"
    >
      <div className="soul-sea-panel">
        <div className="soul-sea-sky">
          <div aria-hidden="true" className="soul-sun" />
          <div aria-hidden="true" className="soul-sun-glow" />
          <div className="soul-core" role="img" aria-label={`At chapter ${coreLabel}`}>
            <span className="soul-core-star" />
            <strong className="soul-core-chapter">{coreLabel}</strong>
          </div>
          <p className="soul-sea-caption">
            {readerChapter.trim() === ""
              ? "your soul core hangs unanchored — name your chapter, and Weaver orients her answers around it"
              : `your soul core · ch ${coreLabel} · weaver weaves her answers around this position`}
          </p>
        </div>

        <div className="soul-spheres">
          <div className="soul-sphere">
            <label className="soul-sphere-label" htmlFor="reader-chapter">
              <span className="soul-sphere-name">I&apos;m at chapter</span>
              <input
                className="settings-input"
                id="reader-chapter"
                inputMode="numeric"
                onChange={(event) => setReaderChapter(event.target.value)}
                placeholder="unknown"
                ref={inputRef}
                type="number"
                value={readerChapter}
              />
            </label>
            <span className="settings-hint">
              1-3127. Leave empty if you do not want to say.
            </span>
          </div>

          <fieldset className="soul-sphere">
            <legend className="soul-sphere-label">
              <span className="soul-sphere-name">Your DeepSeek key</span>
            </legend>
            <input
              autoComplete="off"
              className="settings-input"
              id="api-key"
              onChange={(event) => setApiKeyState(event.target.value)}
              placeholder="sk-..."
              spellCheck={false}
              type="password"
              value={apiKey}
            />
            <span className="settings-hint">
              Stored only in this browser. Sent per request, never saved
              by the server. Leave empty to use the server&apos;s key.
            </span>
          </fieldset>

          <fieldset className="soul-sphere">
            <legend className="soul-sphere-label">
              <span className="soul-sphere-name">Spoilers</span>
            </legend>
            <label className="settings-option">
              <input
                checked={spoilerMode === "protect"}
                name="spoiler-mode"
                onChange={() => setSpoilerMode("protect")}
                type="radio"
              />
              Protect the story
            </label>
            <label className="settings-option">
              <input
                checked={spoilerMode === "none"}
                name="spoiler-mode"
                onChange={() => setSpoilerMode("none")}
                type="radio"
              />
              No spoiler care (spoil me freely)
            </label>
          </fieldset>

          <fieldset className="soul-sphere">
            <legend className="soul-sphere-label">
              <span className="soul-sphere-name">Reading tier</span>
            </legend>
            <label className="settings-option">
              <input
                checked={tier === "awakened"}
                name="reading-tier"
                onChange={() => setTier("awakened")}
                type="radio"
              />
              Awakened (fast, 50 tool steps)
            </label>
            <label className="settings-option">
              <input
                checked={tier === "ascended"}
                name="reading-tier"
                onChange={() => setTier("ascended")}
                type="radio"
              />
              Ascended (default, 70 tool steps)
            </label>
            <label className="settings-option">
              <input
                checked={tier === "transcendent"}
                name="reading-tier"
                onChange={() => setTier("transcendent")}
                type="radio"
              />
              Transcendent (deep, 90 tool steps)
            </label>
          </fieldset>
        </div>

        <div className="soul-sea-actions">
          <button className="settings-button" onClick={onClose} type="button">
            Cancel
          </button>
          <button
            className="settings-button settings-button-primary"
            disabled={saving}
            onClick={() => void handleSave()}
            type="button"
          >
            {saving ? "Saving…" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}
