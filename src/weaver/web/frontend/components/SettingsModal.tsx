import { useEffect, useRef, useState } from "react";

import type { UserPreferences } from "../lib/chatApi";

export interface SettingsModalProps {
  onClose: () => void;
  onSave: (prefs: UserPreferences) => Promise<void>;
  initial: UserPreferences;
}

export function SettingsModal({ onClose, onSave, initial }: SettingsModalProps) {
  const [readerChapter, setReaderChapter] = useState(
    initial.reader_chapter == null ? "" : String(initial.reader_chapter),
  );
  const [spoilerMode, setSpoilerMode] = useState<"protect" | "none">(
    initial.spoiler_mode,
  );
  const [tier, setTier] = useState<UserPreferences["tier"]>(initial.tier);
  const [saving, setSaving] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  async function handleSave() {
    setSaving(true);
    const parsed = readerChapter.trim() === "" ? null : Number(readerChapter);
    await onSave({
      reader_chapter: parsed && parsed >= 1 && parsed <= 3127 ? parsed : null,
      spoiler_mode: spoilerMode,
      tier,
    });
    setSaving(false);
    onClose();
  }

  return (
    <div
      aria-label="Chat settings"
      aria-modal="true"
      className="settings-backdrop"
      role="dialog"
    >
      <div className="settings-panel">
        <h2 className="settings-title">Reader settings</h2>
        <label className="settings-field" htmlFor="reader-chapter">
          <span className="settings-label">I&apos;m at chapter</span>
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
          1-3127. Weaver keeps her answers spoiler-careful around your
          position. Leave empty if you do not want to say.
        </span>
        <fieldset className="settings-field">
          <legend className="settings-label">Spoilers</legend>
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
        <fieldset className="settings-field">
          <legend className="settings-label">Reading tier</legend>
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
        <div className="settings-actions">
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
