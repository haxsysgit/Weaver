import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from "react";

import {
  AVAILABLE_MODELS,
  getApiKey,
  getModelId,
  isApiKeyDisabled,
  setApiKey,
  setApiKeyDisabled,
  setModelId,
} from "../lib/identity";
import { MAX_CHAPTER } from "../lib/readerPosition";
import { EyeIcon, EyeSlashIcon } from "./Icons";
import { type RuneMode } from "./SpellSurfaceRunes";
import {
  SOUL_SEA_DESCRIPTIONS,
  SOUL_SEA_LABELS,
  SpellSurfaceSoulSea,
  type SoulSeaMode,
} from "./SpellSurfaceSoulSea";

export type Density = "compact" | "comfortable";
export type FontSize = "small" | "medium" | "large";
export type GlassMode = "subtle" | "immersive";
export type StarIntensity = "quiet" | "balanced" | "vivid";
export type SurfaceTheme = "crimson" | "cosmos" | "starlight" | "void";

export interface LabPreferences {
  chapter: number;
  density: Density;
  fontSize: FontSize;
  glass: GlassMode;
  runeMode: RuneMode;
  soulMode: SoulSeaMode;
  spoilerMode: "protect" | "none";
  starIntensity: StarIntensity;
  theme: SurfaceTheme;
  volume: number;
}

export type SettingsSection =
  | "reader"
  | "model"
  | "appearance"
  | "stars"
  | "privacy"
  | "rite";

export interface SaveOptions {
  /** False when the reader never set a chapter: save no boundary rather
   * than the placeholder chapter. */
  boundaryChosen: boolean;
}

interface SpellSurfaceSettingsProps {
  /** Whether this device has a saved chapter. Without one, Settings says so
   * instead of presenting the placeholder chapter as an active boundary. */
  boundarySaved?: boolean;
  initialSection?: SettingsSection;
  initial: LabPreferences;
  onApiKeyChange?: (hasApiKey: boolean) => void;
  onClose: () => void;
  onReplayFirstNightmare?: () => void;
  /** May return a promise: Settings shows Saving, then Saved, and closes
   * only once it resolves; a rejection keeps the edits open with a retry. */
  onSave: (preferences: LabPreferences, options: SaveOptions) => void | Promise<void>;
}

type SaveState = "idle" | "saving" | "saved" | "failed";

/** How long the Saved confirmation stays up before the panel closes. */
export const SAVED_HOLD_MS = 900;

const VOLUMES = [
  { end: 95, number: 1 },
  { end: 350, number: 2 },
  { end: 600, number: 3 },
  { end: 750, number: 4 },
  { end: 1060, number: 5 },
  { end: 1230, number: 6 },
  { end: 1590, number: 7 },
  { end: 1840, number: 8 },
  { end: 2260, number: 9 },
  { end: 2720, number: 10 },
  { end: 3000, number: 11 },
  { end: 3127, number: 12 },
  { end: MAX_CHAPTER, number: 13 },
];

const MODEL_DESCRIPTIONS: Record<string, string> = {
  "deepseek-flash": "Fast responses for everyday chapter questions.",
  "deepseek-v4-pro": "More reasoning for hard canon debates and theories.",
};

function volumeForChapter(chapter: number) {
  return VOLUMES.find((volume) => chapter <= volume.end)?.number ?? VOLUMES.length;
}

function titleCase(value: string) {
  return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}

function withHiddenThreadIdentity(preferences: LabPreferences): LabPreferences {
  return {
    ...preferences,
    glass: "immersive",
    theme: "void",
  };
}

function preferencesMatch(left: LabPreferences, right: LabPreferences) {
  return (
    left.chapter === right.chapter &&
    left.density === right.density &&
    left.fontSize === right.fontSize &&
    left.glass === right.glass &&
    left.runeMode === right.runeMode &&
    left.soulMode === right.soulMode &&
    left.spoilerMode === right.spoilerMode &&
    left.starIntensity === right.starIntensity &&
    left.theme === right.theme &&
    left.volume === right.volume
  );
}

export function SpellSurfaceSettings({
  boundarySaved = true,
  initial,
  initialSection = "reader",
  onApiKeyChange,
  onClose,
  onReplayFirstNightmare,
  onSave,
}: SpellSurfaceSettingsProps) {
  const [preferences, setPreferences] = useState(() => withHiddenThreadIdentity(initial));
  const [apiKey, setApiKeyValue] = useState(getApiKey);
  const [showApiKey, setShowApiKey] = useState(false);
  const [apiKeyDisabled, setApiKeyDisabledValue] = useState(isApiKeyDisabled);
  const [modelId, setModelIdValue] = useState(getModelId);
  const [activeSection, setActiveSection] = useState<SettingsSection>(initialSection);
  const [mobileDetailOpen, setMobileDetailOpen] = useState(initialSection !== "reader");
  const [discardPromptOpen, setDiscardPromptOpen] = useState(false);
  const [saveState, setSaveState] = useState<SaveState>("idle");
  const [chapterTouched, setChapterTouched] = useState(false);
  const mounted = useRef(true);
  const closeTimer = useRef<number | undefined>(undefined);
  const panelRef = useRef<HTMLElement>(null);
  const backButtonRef = useRef<HTMLButtonElement>(null);
  const sectionButtonRefs = useRef(new Map<SettingsSection, HTMLButtonElement>());
  const initialApiKey = useRef(apiKey);
  const initialApiKeyDisabled = useRef(apiKeyDisabled);
  const initialModelId = useRef(modelId);
  const initialPreferences = useRef(preferences);

  const fixedPreferences = useMemo(
    () => withHiddenThreadIdentity(preferences),
    [preferences],
  );
  const boundaryChosen = boundarySaved || chapterTouched;
  const boundaryPending = !boundaryChosen;
  const isDirty =
    !preferencesMatch(fixedPreferences, initialPreferences.current) ||
    (!boundarySaved && chapterTouched) ||
    apiKey !== initialApiKey.current ||
    apiKeyDisabled !== initialApiKeyDisabled.current ||
    modelId !== initialModelId.current;

  useEffect(() => {
    panelRef.current?.querySelector<HTMLElement>(".lab-settings-nav button.on")?.focus();
  }, []);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
      window.clearTimeout(closeTimer.current);
    };
  }, []);

  // A failed save stays on screen until the reader edits again.
  useEffect(() => {
    setSaveState((current) => (current === "failed" ? "idle" : current));
  }, [preferences, apiKey, apiKeyDisabled, modelId, chapterTouched]);

  useEffect(() => {
    if (isDirty) {
      return;
    }
    const savedPreferences = withHiddenThreadIdentity(initial);
    initialPreferences.current = savedPreferences;
    setPreferences(savedPreferences);
  }, [initial]);

  function update<K extends keyof LabPreferences>(
    key: K,
    value: LabPreferences[K],
  ) {
    setPreferences((current) => ({ ...current, [key]: value }));
  }

  function setChapter(nextChapter: number) {
    const chapter = Math.min(MAX_CHAPTER, Math.max(1, nextChapter || 1));
    setChapterTouched(true);
    setPreferences((current) => ({
      ...current,
      chapter,
      volume: volumeForChapter(chapter),
    }));
  }

  function openSection(section: SettingsSection) {
    setActiveSection(section);
    setMobileDetailOpen(true);
    window.setTimeout(() => backButtonRef.current?.focus(), 0);
  }

  function returnToIndex() {
    const section = activeSection;
    setMobileDetailOpen(false);
    window.setTimeout(() => sectionButtonRefs.current.get(section)?.focus(), 0);
  }

  function requestClose() {
    if (saveState === "saving") {
      return;
    }
    if (saveState === "saved") {
      window.clearTimeout(closeTimer.current);
      onClose();
      return;
    }
    if (isDirty) {
      setDiscardPromptOpen(true);
      return;
    }
    onClose();
  }

  async function saveSettings() {
    if (saveState === "saving" || saveState === "saved") {
      return;
    }
    setSaveState("saving");
    try {
      await onSave(fixedPreferences, { boundaryChosen });
    } catch {
      if (mounted.current) {
        setSaveState("failed");
      }
      return;
    }
    // All or nothing: the key and model are stored only once the reader
    // settings are, so a failed save leaves every setting as it was.
    setApiKey(apiKey);
    setApiKeyDisabled(apiKeyDisabled);
    setModelId(modelId);
    onApiKeyChange?.(apiKey.trim() !== "" && !apiKeyDisabled);
    if (!mounted.current) {
      return;
    }
    initialPreferences.current = fixedPreferences;
    initialApiKey.current = apiKey;
    initialApiKeyDisabled.current = apiKeyDisabled;
    initialModelId.current = modelId;
    setSaveState("saved");
    closeTimer.current = window.setTimeout(onClose, SAVED_HOLD_MS);
  }

  function keepFocusInside(event: KeyboardEvent<HTMLElement>) {
    if (event.key === "Escape") {
      event.preventDefault();
      event.stopPropagation();
      requestClose();
      return;
    }
    if (event.key !== "Tab" || !panelRef.current) {
      return;
    }
    const focusable = panelRef.current.querySelectorAll<HTMLElement>(
      "button:not(:disabled), input:not(:disabled), select:not(:disabled)",
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    }
    if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  }

  const selectedModel = AVAILABLE_MODELS.find((model) => model.id === modelId);
  const sections: Array<{ hint: string; id: SettingsSection; label: string }> = [
    {
      hint: boundaryPending
        ? "No boundary saved"
        : `Chapter ${preferences.chapter} · Volume ${preferences.volume}`,
      id: "reader",
      label: "Reader position",
    },
    {
      hint: `${selectedModel?.label ?? "DeepSeek"} · ${apiKey.trim() && !apiKeyDisabled ? "bound" : "unbound"}`,
      id: "model",
      label: "Advanced",
    },
    {
      hint: `${titleCase(preferences.theme)} · ${titleCase(preferences.glass)}`,
      id: "appearance",
      label: "Appearance",
    },
    {
      hint: `${titleCase(preferences.starIntensity)} stars`,
      id: "stars",
      label: "Star web",
    },
    { hint: "Local library and DeepSeek", id: "privacy", label: "Privacy and controls" },
    { hint: "Replay the initiation", id: "rite", label: "First Nightmare" },
  ];

  return (
    <div className="lab-settings-backdrop" onMouseDown={requestClose}>
      <section
        aria-label="Reader Appraisal settings"
        aria-modal="true"
        className={`lab-settings-panel${mobileDetailOpen ? " settings-detail-open" : ""}`}
        onKeyDown={keepFocusInside}
        onMouseDown={(event) => event.stopPropagation()}
        ref={panelRef}
        role="dialog"
      >
        <header className="lab-settings-head">
          <div>
            <p>Reader appraisal</p>
            <h2>Settings</h2>
          </div>
          <button
            aria-label="Close settings"
            className="lab-settings-close"
            onClick={requestClose}
            type="button"
          >
            ×
          </button>
        </header>

        <div className="lab-settings-layout">
          <aside className="lab-settings-nav">
            <p>Settings index</p>
            <nav aria-label="Settings index">
              {sections.map((section) => (
                <button
                  aria-label={section.label}
                  aria-current={activeSection === section.id ? "page" : undefined}
                  className={activeSection === section.id ? "on" : ""}
                  key={section.id}
                  onClick={() => openSection(section.id)}
                  ref={(button) => {
                    if (button) {
                      sectionButtonRefs.current.set(section.id, button);
                    }
                  }}
                  type="button"
                >
                  <strong>{section.label}</strong>
                  <span>{section.hint}</span>
                </button>
              ))}
            </nav>
          </aside>

          <main className="lab-settings-main">
            <button
              className="lab-settings-back"
              onClick={returnToIndex}
              ref={backButtonRef}
              type="button"
            >
              ‹ Settings
            </button>
            <div className="lab-settings-content">
              {activeSection === "reader" && (
                <section className="lab-settings-section">
                  <div className="lab-setting-title">
                    <p>[Your place in the story.]</p>
                    <h3>Reader position</h3>
                    <span>Chapter is the source of truth. Weaver derives the volume and protects everything beyond your reach.</span>
                  </div>
                  {boundaryPending && (
                    <p className="lab-boundary-unset" role="note">
                      <strong>[No boundary saved.]</strong> Weaver does not know how far you have read, so it asks before revealing anything big. Enter your chapter to protect everything after it.
                    </p>
                  )}
                  <div className="lab-reader-position">
                    <label htmlFor="reader-chapter">Current chapter</label>
                    <div>
                      <input
                        id="reader-chapter"
                        max={MAX_CHAPTER}
                        min={1}
                        onChange={(event) => setChapter(Number(event.target.value))}
                        placeholder="Chapter"
                        type="number"
                        value={boundaryPending ? "" : preferences.chapter}
                      />
                      {!boundaryPending && <strong>Volume {preferences.volume}</strong>}
                    </div>
                    <div className="lab-chapter-steps">
                      {[-10, -1, 1, 10].map((step) => (
                        <button
                          aria-label={`${step < 0 ? "Move back" : "Move forward"} ${Math.abs(step)} ${Math.abs(step) === 1 ? "chapter" : "chapters"}`}
                          key={step}
                          onClick={() => setChapter(preferences.chapter + step)}
                          type="button"
                        >
                          {step > 0 ? `+${step}` : step}
                        </button>
                      ))}
                    </div>
                  </div>
                  <fieldset className="lab-spoiler-boundary">
                    <legend>Spoiler boundary</legend>
                    <label className={preferences.spoilerMode === "protect" ? "on" : ""}>
                      <input
                        checked={preferences.spoilerMode === "protect"}
                        name="spoiler-boundary"
                        onChange={() => update("spoilerMode", "protect")}
                        type="radio"
                      />
                      <span>
                        <strong>{boundaryPending ? "Protect everything after your chapter" : `Protect everything after Chapter ${preferences.chapter}`}</strong>
                        <small>{boundaryPending ? "Until you set a chapter, Weaver asks before revealing anything big." : "Weaver answers only from the story you have reached."}</small>
                      </span>
                    </label>
                    <label className={preferences.spoilerMode === "none" ? "on" : ""}>
                      <input
                        checked={preferences.spoilerMode === "none"}
                        name="spoiler-boundary"
                        onChange={() => update("spoilerMode", "none")}
                        type="radio"
                      />
                      <span><strong>Allow knowledge from the complete novel</strong><small>Use this after you have finished the story.</small></span>
                    </label>
                  </fieldset>
                </section>
              )}

              {activeSection === "model" && (
                <section className="lab-settings-section lab-model-settings">
                  <div className="lab-setting-title">
                    <p>[A private binding.]</p>
                    <h3>Direct DeepSeek key</h3>
                    <span>Optional controls for readers who want to use their own DeepSeek account instead of the shared daily allowance.</span>
                  </div>
                  <div className="lab-voice-binding-card">
                    <div className="lab-binding-status">
                      <span aria-hidden="true" className={apiKey.trim() && !apiKeyDisabled ? "is-bound" : ""} />
                      <div>
                        <strong>{apiKey.trim() && !apiKeyDisabled ? "Voice bound in this browser" : "The voice remains unbound"}</strong>
                        <small>{apiKeyDisabled ? "Your stored key is currently disabled." : "Your key stays in this browser."}</small>
                      </div>
                    </div>
                    <label htmlFor="spell-surface-api-key">DeepSeek key</label>
                    <div className="lab-secret-input">
                      <input
                        autoCapitalize="none"
                        autoComplete="off"
                        id="spell-surface-api-key"
                        onChange={(event) => setApiKeyValue(event.target.value)}
                        placeholder="sk-..."
                        spellCheck={false}
                        type={showApiKey ? "text" : "password"}
                        value={apiKey}
                      />
                      <button
                        aria-label={showApiKey ? "Hide API key" : "Show API key"}
                        onClick={() => setShowApiKey((visible) => !visible)}
                        type="button"
                      >
                        {showApiKey ? <EyeSlashIcon /> : <EyeIcon />}
                      </button>
                    </div>
                    <small>Stored only in this browser. Sent with each request and never saved by the server. Leave empty and apply to delete it.</small>
                    <label className="lab-check-row lab-binding-toggle">
                      <input
                        checked={apiKeyDisabled}
                        onChange={(event) => setApiKeyDisabledValue(event.target.checked)}
                        type="checkbox"
                      />
                      <span>Disable this key<small>Keep the key stored while stopping it from being sent.</small></span>
                    </label>
                  </div>
                  <fieldset className="lab-model-picker">
                    <legend>Model</legend>
                    <p>This choice applies only while your own key is active.</p>
                    <div>
                      {AVAILABLE_MODELS.map((model) => (
                        <button
                          aria-pressed={modelId === model.id}
                          className={modelId === model.id ? "on" : ""}
                          key={model.id}
                          onClick={() => setModelIdValue(model.id)}
                          type="button"
                        >
                          <span aria-hidden="true" className="lab-model-knot" />
                          <strong>{model.label}</strong>
                          <small>{MODEL_DESCRIPTIONS[model.id]}</small>
                        </button>
                      ))}
                    </div>
                  </fieldset>
                </section>
              )}

              {activeSection === "appearance" && (
                <section className="lab-settings-section lab-customize-section">
                  <div className="lab-setting-title">
                    <p>[The Hidden Thread keeps one face.]</p>
                    <h3>Appearance</h3>
                    <span>The Shadow Slave edition keeps its silver Spellweave and void-dark surface. Tune readability and motion without replacing its identity.</span>
                  </div>
                  <aside className="lab-fixed-identity"><span aria-hidden="true">✦</span><div><strong>Hidden Thread</strong><small>Void surface · immersive messages · {SOUL_SEA_LABELS[preferences.soulMode]}</small></div></aside>
                  <div className="lab-customize-block lab-soul-sea-picker">
                    <h4>Soul Sea</h4>
                    <p>Choose the distant realm beneath the Spellweave.</p>
                    <div className="lab-choice-grid three">
                      {(Object.keys(SOUL_SEA_LABELS) as SoulSeaMode[]).map((mode) => (
                        <button
                          aria-label={SOUL_SEA_LABELS[mode]}
                          aria-pressed={preferences.soulMode === mode}
                          className={preferences.soulMode === mode ? "on" : ""}
                          key={mode}
                          onClick={() => update("soulMode", mode)}
                          type="button"
                        >
                          <SpellSurfaceSoulSea compact mode={mode} state="idle" />
                          <strong>{SOUL_SEA_LABELS[mode]}</strong>
                          <span>{SOUL_SEA_DESCRIPTIONS[mode]}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="lab-customize-row">
                    <div>
                      <h4>Reading density</h4>
                      <div className="lab-segmented-control">
                        {(["compact", "comfortable"] as Density[]).map((density) => (
                          <button aria-label={`${titleCase(density)} text`} aria-pressed={preferences.density === density} className={preferences.density === density ? "on" : ""} key={density} onClick={() => update("density", density)} type="button">{density}</button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4>Text size</h4>
                      <div className="lab-segmented-control">
                        {(["small", "medium", "large"] as FontSize[]).map((fontSize) => (
                          <button aria-label={fontSize} aria-pressed={preferences.fontSize === fontSize} className={preferences.fontSize === fontSize ? "on" : ""} key={fontSize} onClick={() => update("fontSize", fontSize)} type="button">{fontSize}</button>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {activeSection === "stars" && (
                <section className="lab-settings-section">
                  <div className="lab-setting-title">
                    <p>[The web behind the thread.]</p>
                    <h3>Star web</h3>
                    <span>How much of the night sky shows behind the conversation. Quiet stays almost black; vivid draws the full web.</span>
                  </div>
                  <div className="lab-segmented-control lab-star-control">
                    {(["quiet", "balanced", "vivid"] as StarIntensity[]).map((intensity) => (
                      <button aria-label={intensity} aria-pressed={preferences.starIntensity === intensity} className={preferences.starIntensity === intensity ? "on" : ""} key={intensity} onClick={() => update("starIntensity", intensity)} type="button">{intensity}</button>
                    ))}
                  </div>
                </section>
              )}

              {activeSection === "privacy" && (
                <section className="lab-settings-section">
                  <div className="lab-setting-title">
                    <p>[What the thread carries.]</p>
                    <h3>Privacy and controls</h3>
                    <span>A clear boundary between your Weaver installation, your browser, and DeepSeek.</span>
                  </div>
                  <div className="lab-privacy-boundaries">
                    <p><strong>Local library</strong><span>Threads and reading preferences stay in Weaver&apos;s local library on this Weaver installation.</span></p>
                    <p><strong>DeepSeek</strong><span>Your question and the story passages Weaver opens are sent to DeepSeek to generate a reply.</span></p>
                    <p><strong>Shared allowance</strong><span>Weaver uses the owner-funded server connection after you accept the notice. The server records only anonymous allowance and cost totals.</span></p>
                    <p><strong>Your own key</strong><span>An optional key stays in this browser and is attached to each request. Weaver does not save it on the server.</span></p>
                  </div>
                  <dl className="lab-shortcuts">
                    <div><dt><kbd>Ctrl</kbd><kbd>,</kbd></dt><dd>open settings</dd></div>
                    <div><dt><kbd>Esc</kbd></dt><dd>close or review unsaved changes</dd></div>
                    <div><dt><kbd>Enter</kbd></dt><dd>send a message</dd></div>
                  </dl>
                </section>
              )}

              {activeSection === "rite" && (
                <section className="lab-settings-section lab-rite-settings">
                  <div className="lab-setting-title">
                    <p>[The hidden thread has found you.]</p>
                    <h3>First Nightmare</h3>
                    <span>Return to the initiation rite at any time. Your current key and reader settings remain unchanged unless you choose to alter them there.</span>
                  </div>
                  {onReplayFirstNightmare && (
                    <button className="lab-rite-replay" onClick={onReplayFirstNightmare} type="button">Replay First Nightmare</button>
                  )}
                </section>
              )}
            </div>
          </main>
        </div>

        <footer className="lab-settings-actions">
          {discardPromptOpen ? (
            <div className="lab-discard-prompt" role="alert">
              <p><strong>Discard unsaved changes?</strong><span>Your current settings will remain untouched.</span></p>
              <button onClick={() => setDiscardPromptOpen(false)} type="button">Keep editing</button>
              <button className="danger" onClick={onClose} type="button">Discard changes</button>
            </div>
          ) : (
            <>
              {saveState === "failed" && (
                <p className="lab-save-failed" role="alert">
                  [The thread slipped. Your changes were not saved.]
                </p>
              )}
              <button
                disabled={saveState === "saving" || saveState === "saved"}
                onClick={requestClose}
                type="button"
              >
                Discard
              </button>
              <button
                aria-busy={saveState === "saving"}
                className={`primary${saveState === "saved" ? " is-saved" : ""}`}
                disabled={saveState === "saving" || saveState === "saved" || !isDirty}
                onClick={() => void saveSettings()}
                type="button"
              >
                {saveState === "saving" && "Saving..."}
                {saveState === "saved" && (
                  <>
                    <span aria-hidden="true" className="lab-save-check">✓</span> Saved
                  </>
                )}
                {saveState === "failed" && "Try again"}
                {saveState === "idle" && "Apply changes"}
              </button>
            </>
          )}
        </footer>
      </section>
    </div>
  );
}
