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
import { EyeIcon, EyeSlashIcon } from "./Icons";
import { RUNE_OPTIONS, type RuneMode } from "./SpellSurfaceRunes";
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
export type Tier = "awakened" | "ascended" | "transcendent";

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
  tier: Tier;
  volume: number;
}

type SettingsSection =
  | "reader"
  | "reading"
  | "model"
  | "appearance"
  | "privacy"
  | "rite";

interface SpellSurfaceSettingsProps {
  initial: LabPreferences;
  onApiKeyChange?: (hasApiKey: boolean) => void;
  onClose: () => void;
  onReplayFirstNightmare?: () => void;
  onSave: (preferences: LabPreferences) => void;
}

const MAX_CHAPTER = 3160;
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

const TIER_COPY: Record<Tier, string> = {
  awakened: "A quick reread for direct questions.",
  ascended: "A balanced reread with connected evidence.",
  transcendent: "The deepest reread for hard canon debates.",
};

const MODEL_DESCRIPTIONS: Record<string, string> = {
  "deepseek-v4-flash": "Fast responses for everyday chapter questions.",
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
    left.tier === right.tier &&
    left.volume === right.volume
  );
}

export function SpellSurfaceSettings({
  initial,
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
  const [activeSection, setActiveSection] = useState<SettingsSection>("reader");
  const [mobileDetailOpen, setMobileDetailOpen] = useState(false);
  const [discardPromptOpen, setDiscardPromptOpen] = useState(false);
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
  const isDirty =
    !preferencesMatch(fixedPreferences, initialPreferences.current) ||
    apiKey !== initialApiKey.current ||
    apiKeyDisabled !== initialApiKeyDisabled.current ||
    modelId !== initialModelId.current;

  useEffect(() => {
    panelRef.current?.querySelector<HTMLElement>(".lab-settings-nav button.on")?.focus();
  }, []);

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
    if (isDirty) {
      setDiscardPromptOpen(true);
      return;
    }
    onClose();
  }

  function saveSettings() {
    setApiKey(apiKey);
    setApiKeyDisabled(apiKeyDisabled);
    setModelId(modelId);
    onApiKeyChange?.(apiKey.trim() !== "" && !apiKeyDisabled);
    onSave(fixedPreferences);
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
      hint: `Chapter ${preferences.chapter} · Volume ${preferences.volume}`,
      id: "reader",
      label: "Reader position",
    },
    { hint: titleCase(preferences.tier), id: "reading", label: "Answer depth" },
    {
      hint: `${selectedModel?.label ?? "DeepSeek"} · ${apiKey.trim() && !apiKeyDisabled ? "bound" : "unbound"}`,
      id: "model",
      label: "Bound voice",
    },
    {
      hint: `${titleCase(preferences.runeMode)} runes · ${titleCase(preferences.starIntensity)} stars`,
      id: "appearance",
      label: "Appearance",
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
        <div className="lab-settings-atmosphere">
          <SpellSurfaceSoulSea compact mode={preferences.soulMode} state="idle" />
          <span>The Soul Sea holds your place.</span>
          <button
            aria-label="Close settings"
            className="lab-settings-close"
            onClick={requestClose}
            type="button"
          >
            ×
          </button>
        </div>

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
                  <div className="lab-reader-position">
                    <label htmlFor="reader-chapter">Current chapter</label>
                    <div>
                      <input
                        id="reader-chapter"
                        max={MAX_CHAPTER}
                        min={1}
                        onChange={(event) => setChapter(Number(event.target.value))}
                        type="number"
                        value={preferences.chapter}
                      />
                      <strong>Volume {preferences.volume}</strong>
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
                      <span><strong>Protect everything after Chapter {preferences.chapter}</strong><small>Weaver answers only from the story you have reached.</small></span>
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

              {activeSection === "reading" && (
                <section className="lab-settings-section">
                  <div className="lab-setting-title">
                    <p>[Choose how deeply the thread is followed.]</p>
                    <h3>Answer depth</h3>
                    <span>This controls how much reading and connecting Weaver does before answering. It is separate from the model.</span>
                  </div>
                  <div className="lab-choice-grid three">
                    {(["awakened", "ascended", "transcendent"] as Tier[]).map((tier) => (
                      <button
                        aria-label={tier}
                        aria-pressed={preferences.tier === tier}
                        className={preferences.tier === tier ? "on" : ""}
                        key={tier}
                        onClick={() => update("tier", tier)}
                        type="button"
                      >
                        <strong>{titleCase(tier)}</strong>
                        <span>{TIER_COPY[tier]}</span>
                      </button>
                    ))}
                  </div>
                </section>
              )}

              {activeSection === "model" && (
                <section className="lab-settings-section lab-model-settings">
                  <div className="lab-setting-title">
                    <p>[Voice binding.]</p>
                    <h3>Bound voice</h3>
                    <span>Your DeepSeek key opens the channel. The selected model gives that channel a voice.</span>
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
                    <p>Choose which DeepSeek model answers through Weaver.</p>
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
                  <div className="lab-customize-block">
                    <h4>Rune appearance</h4>
                    <div className="lab-choice-grid three">
                      {RUNE_OPTIONS.map((option) => (
                        <button aria-label={option.label} aria-pressed={preferences.runeMode === option.mode} className={preferences.runeMode === option.mode ? "on" : ""} key={option.mode} onClick={() => update("runeMode", option.mode)} type="button">
                          <strong>{option.label}</strong><span>{option.description}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="lab-customize-block">
                    <h4>Star web</h4>
                    <div className="lab-segmented-control">
                      {(["quiet", "balanced", "vivid"] as StarIntensity[]).map((intensity) => (
                        <button aria-label={intensity} aria-pressed={preferences.starIntensity === intensity} className={preferences.starIntensity === intensity ? "on" : ""} key={intensity} onClick={() => update("starIntensity", intensity)} type="button">{intensity}</button>
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

              {activeSection === "privacy" && (
                <section className="lab-settings-section">
                  <div className="lab-setting-title">
                    <p>[What the thread carries.]</p>
                    <h3>Privacy and controls</h3>
                    <span>A clear boundary between your Weaver installation, your browser, and DeepSeek.</span>
                  </div>
                  <div className="lab-privacy-boundaries">
                    <p><strong>Local library</strong><span>Threads and reading preferences stay in Weaver&apos;s local library on this Weaver installation.</span></p>
                    <p><strong>DeepSeek</strong><span>Messages are sent to DeepSeek when Weaver answers.</span></p>
                    <p><strong>This browser</strong><span>Your API key stays in this browser and is attached to each request. Weaver does not save it on the server.</span></p>
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
              <button onClick={requestClose} type="button">Discard</button>
              <button className="primary" disabled={!isDirty} onClick={saveSettings} type="button">Apply changes</button>
            </>
          )}
        </footer>
      </section>
    </div>
  );
}
