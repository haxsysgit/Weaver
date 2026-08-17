import { useEffect, useRef, useState, type KeyboardEvent } from "react";

import { getApiKey, setApiKey, getModelId, setModelId, isApiKeyDisabled, setApiKeyDisabled, AVAILABLE_MODELS } from "../lib/identity";
import type { SoulSeaMode } from "./SpellSurfaceSoulSea";
import { SOUL_SEA_LABELS, SpellSurfaceSoulSea } from "./SpellSurfaceSoulSea";
import { RUNE_OPTIONS, type RuneMode } from "./SpellSurfaceRunes";

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
  | "spoilers"
  | "reading"
  | "customize"
  | "model"
  | "privacy";

interface SpellSurfaceSettingsProps {
  initial: LabPreferences;
  onApiKeyChange?: (hasApiKey: boolean) => void;
  onClose: () => void;
  onSave: (preferences: LabPreferences) => void;
}

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
];

const TIER_COPY: Record<Tier, string> = {
  awakened: "A quick read for direct questions.",
  ascended: "A balanced reread with connected evidence.",
  transcendent: "The longest reread for hard canon debates.",
};

const SETTINGS_SECTIONS: Array<{
  hint: string;
  id: SettingsSection;
  label: string;
}> = [
  { hint: "chapter and volume", id: "reader", label: "Reader position" },
  { hint: "protect future events", id: "spoilers", label: "Spoilers" },
  { hint: "answering depth", id: "reading", label: "Reading tier" },
  { hint: "glass, sea, stars, runes", id: "customize", label: "Customize" },
  { hint: "key and model", id: "model", label: "Model" },
  { hint: "shortcuts and local data", id: "privacy", label: "Keyboard & privacy" },
];

const SOUL_MODES: SoulSeaMode[] = ["still", "living", "mirror"];

const SURFACE_THEMES: Array<{
  description: string;
  label: string;
  swatches: string[];
  value: SurfaceTheme;
}> = [
  {
    description: "Weaver's dark blood-red identity.",
    label: "Crimson Spell",
    swatches: ["#26080d", "#761d26", "#d7a6a2"],
    value: "crimson",
  },
  {
    description: "Deep cosmic purple and cold blue.",
    label: "Cosmos",
    swatches: ["#0b071b", "#34296f", "#5e8fdc"],
    value: "cosmos",
  },
  {
    description: "Silver-white starlight over deep space.",
    label: "Starlight",
    swatches: ["#10131a", "#747e91", "#eef3ff"],
    value: "starlight",
  },
  {
    description: "Pitch black with almost no color cast.",
    label: "Void",
    swatches: ["#000000", "#101010", "#686868"],
    value: "void",
  },
];

export function SpellSurfaceSettings({
  initial,
  onApiKeyChange,
  onClose,
  onSave,
}: SpellSurfaceSettingsProps) {
  const [preferences, setPreferences] = useState(initial);
  const [apiKey, setApiKeyValue] = useState(getApiKey);
  const [apiKeyDisabled, setApiKeyDisabledValue] = useState(isApiKeyDisabled);
  const [modelId, setModelIdValue] = useState(getModelId);
  const [activeSection, setActiveSection] = useState<SettingsSection>("customize");
  const panelRef = useRef<HTMLElement>(null);
  const firstControlRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    panelRef.current?.querySelector<HTMLElement>(".lab-settings-nav button.on")?.focus();
  }, []);

  function keepFocusInside(event: KeyboardEvent<HTMLElement>) {
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

  function update<K extends keyof LabPreferences>(
    key: K,
    value: LabPreferences[K],
  ) {
    setPreferences((current) => ({ ...current, [key]: value }));
  }

  function saveSettings() {
    setApiKey(apiKey);
    setApiKeyDisabled(apiKeyDisabled);
    setModelId(modelId);
    onApiKeyChange?.(getApiKey() !== "" && !isApiKeyDisabled());
    onSave(preferences);
  }

  function selectVolume(volumeNumber: number) {
    const volume = VOLUMES.find((candidate) => candidate.number === volumeNumber);
    if (!volume) {
      return;
    }
    const previousEnd = VOLUMES[volumeNumber - 2]?.end ?? 0;
    const chapter = Math.max(previousEnd + 1, Math.min(preferences.chapter, volume.end));
    setPreferences((current) => ({
      ...current,
      chapter,
      volume: volumeNumber,
    }));
  }

  return (
    <div className="lab-settings-backdrop" onMouseDown={onClose}>
      <section
        aria-label="Soul Sea settings"
        aria-modal="true"
        className="lab-settings-panel"
        onKeyDown={keepFocusInside}
        onMouseDown={(event) => event.stopPropagation()}
        ref={panelRef}
        role="dialog"
      >
        <header className="lab-settings-head">
          <div>
            <p>the sea within</p>
            <h2>Soul Sea</h2>
          </div>
          <button aria-label="Close settings" onClick={onClose} type="button">×</button>
        </header>

        <div className="lab-settings-layout">
          <aside className="lab-settings-nav">
            <p>Settings</p>
            <nav aria-label="Settings sections">
              {SETTINGS_SECTIONS.map((section) => (
                <button
                  aria-label={section.label}
                  aria-current={activeSection === section.id ? "page" : undefined}
                  className={activeSection === section.id ? "on" : ""}
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  type="button"
                >
                  <strong>{section.label}</strong>
                  <span>{section.hint}</span>
                </button>
              ))}
            </nav>
          </aside>

          <div className="lab-settings-main">
            <SpellSurfaceSoulSea compact mode={preferences.soulMode} state="idle" />
            <div className="lab-settings-content">
              {activeSection === "reader" && (
                <section className="lab-settings-section">
                  <div className="lab-setting-title">
                    <h3>Reader position</h3>
                    <span>The Spell will not read beyond this point.</span>
                  </div>
                  <div className="lab-reader-grid">
                    <label>
                      <span>Volume</span>
                      <select
                        aria-label="Reader volume"
                        onChange={(event) => selectVolume(Number(event.target.value))}
                        ref={firstControlRef}
                        value={preferences.volume}
                      >
                        {VOLUMES.map((volume) => (
                          <option key={volume.number} value={volume.number}>
                            Vol {volume.number} · to ch {volume.end}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label>
                      <span>Chapter</span>
                      <input
                        max={3127}
                        min={1}
                        onChange={(event) => update("chapter", Number(event.target.value))}
                        type="number"
                        value={preferences.chapter}
                      />
                    </label>
                  </div>
                </section>
              )}

              {activeSection === "spoilers" && (
                <section className="lab-settings-section">
                  <div className="lab-setting-title">
                    <h3>Spoilers</h3>
                    <span>Choose how Weaver handles knowledge past your chapter.</span>
                  </div>
                  <div className="lab-choice-grid two">
                    <button aria-pressed={preferences.spoilerMode === "protect"} className={preferences.spoilerMode === "protect" ? "on" : ""} onClick={() => update("spoilerMode", "protect")} type="button">
                      <strong>Protect the story</strong>
                      <span>Hide later facts and explain only what you have reached.</span>
                    </button>
                    <button aria-pressed={preferences.spoilerMode === "none"} className={preferences.spoilerMode === "none" ? "on" : ""} onClick={() => update("spoilerMode", "none")} type="button">
                      <strong>No spoiler limits</strong>
                      <span>You have finished the novel, so answer without limits.</span>
                    </button>
                  </div>
                </section>
              )}

              {activeSection === "reading" && (
                <section className="lab-settings-section">
                  <div className="lab-setting-title">
                    <h3>Reading tier</h3>
                    <span>Choose how much rereading Weaver does before answering.</span>
                  </div>
                  <div className="lab-choice-grid three">
                    {(["awakened", "ascended", "transcendent"] as Tier[]).map((tier) => (
                      <button aria-pressed={preferences.tier === tier} className={preferences.tier === tier ? "on" : ""} key={tier} onClick={() => update("tier", tier)} type="button">
                        <strong>{tier}</strong>
                        <span>{TIER_COPY[tier]}</span>
                      </button>
                    ))}
                  </div>
                </section>
              )}

              {activeSection === "customize" && (
                <section className="lab-settings-section lab-customize-section">
                  <div className="lab-setting-title">
                    <h3>Customize the Spell</h3>
                    <span>Choose its identity, then tune how alive and transparent it feels.</span>
                  </div>

                  <div className="lab-customize-block">
                    <h4>Surface theme</h4>
                    <div className="lab-theme-grid">
                      {SURFACE_THEMES.map((theme) => (
                        <button
                          aria-label={theme.label}
                          aria-pressed={preferences.theme === theme.value}
                          className={preferences.theme === theme.value ? "on" : ""}
                          key={theme.value}
                          onClick={() => update("theme", theme.value)}
                          type="button"
                        >
                          <span aria-hidden="true" className="lab-theme-swatches">
                            {theme.swatches.map((swatch) => (
                              <i key={swatch} style={{ background: swatch }} />
                            ))}
                          </span>
                          <strong>{theme.label}</strong>
                          <span>{theme.description}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="lab-customize-block">
                    <h4>Rune appearance</h4>
                    <div className="lab-choice-grid three">
                      {RUNE_OPTIONS.map((option) => (
                        <button aria-label={option.label} aria-pressed={preferences.runeMode === option.mode} className={preferences.runeMode === option.mode ? "on" : ""} key={option.mode} onClick={() => update("runeMode", option.mode)} type="button">
                          <strong>{option.label}</strong>
                          <span>{option.description}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="lab-customize-block">
                    <h4>Soul Sea</h4>
                    <div className="lab-choice-grid three">
                      {SOUL_MODES.map((mode) => (
                        <button aria-label={SOUL_SEA_LABELS[mode]} aria-pressed={preferences.soulMode === mode} className={preferences.soulMode === mode ? "on" : ""} key={mode} onClick={() => update("soulMode", mode)} type="button">
                          <strong>{SOUL_SEA_LABELS[mode]}</strong>
                          <span>{mode === "still" ? "A calm horizon behind the conversation." : mode === "living" ? "More motion and glow while Weaver works." : "A quieter reflective sea with deeper contrast."}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="lab-customize-block">
                    <h4>Message transparency</h4>
                    <div className="lab-choice-grid two">
                      <button aria-label="Subtle glass" aria-pressed={preferences.glass === "subtle"} className={preferences.glass === "subtle" ? "on" : ""} onClick={() => update("glass", "subtle")} type="button">
                        <strong>Subtle glass</strong>
                        <span>A faint surface behind the words for easier reading.</span>
                      </button>
                      <button aria-label="Immersive glass" aria-pressed={preferences.glass === "immersive"} className={preferences.glass === "immersive" ? "on" : ""} onClick={() => update("glass", "immersive")} type="button">
                        <strong>Immersive · no surface</strong>
                        <span>Remove message fills, borders, shadows, and blur completely.</span>
                      </button>
                    </div>
                  </div>

                  <div className="lab-customize-block">
                    <h4>Star web</h4>
                    <div className="lab-segmented-control">
                      {(["quiet", "balanced", "vivid"] as StarIntensity[]).map((intensity) => (
                        <button aria-pressed={preferences.starIntensity === intensity} className={preferences.starIntensity === intensity ? "on" : ""} key={intensity} onClick={() => update("starIntensity", intensity)} type="button">{intensity}</button>
                      ))}
                    </div>
                  </div>

                  <div className="lab-customize-row">
                    <div>
                      <h4>Reading density</h4>
                      <div className="lab-segmented-control">
                        <button aria-label="Compact text" aria-pressed={preferences.density === "compact"} className={preferences.density === "compact" ? "on" : ""} onClick={() => update("density", "compact")} type="button">compact</button>
                        <button aria-label="Comfortable text" aria-pressed={preferences.density === "comfortable"} className={preferences.density === "comfortable" ? "on" : ""} onClick={() => update("density", "comfortable")} type="button">comfortable</button>
                      </div>
                    </div>
                    <div>
                      <h4>Font size</h4>
                      <div className="lab-segmented-control">
                        {(["small", "medium", "large"] as FontSize[]).map((fontSize) => (
                          <button aria-pressed={preferences.fontSize === fontSize} className={preferences.fontSize === fontSize ? "on" : ""} key={fontSize} onClick={() => update("fontSize", fontSize)} type="button">{fontSize}</button>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {activeSection === "privacy" && (
                <section className="lab-settings-section">
                  <div className="lab-setting-title">
                    <h3>Keyboard & privacy</h3>
                    <span>Quick controls and where your reading data stays.</span>
                  </div>
                  <dl className="lab-shortcuts">
                    <div><dt><kbd>Ctrl</kbd><kbd>,</kbd></dt><dd>open settings</dd></div>
                    <div><dt><kbd>Esc</kbd></dt><dd>close this panel</dd></div>
                    <div><dt><kbd>Enter</kbd></dt><dd>send a message</dd></div>
                  </dl>
                  <aside className="lab-privacy-note">
                    <span aria-hidden="true">◎</span>
                    <div><strong>Everything stays on this machine.</strong><p>Threads, reader position, and preferences remain in Weaver&apos;s local library.</p></div>
                  </aside>
                </section>
              )}

              {activeSection === "model" && (
                <section className="lab-settings-section">
                  <div className="lab-setting-title">
                    <h3>Model</h3>
                    <span>Your DeepSeek key and which model answers.</span>
                  </div>

                  <div className="lab-api-key-setting">
                    <label htmlFor="spell-surface-api-key">DeepSeek key</label>
                    <input
                      autoCapitalize="none"
                      autoComplete="off"
                      id="spell-surface-api-key"
                      onChange={(event) => setApiKeyValue(event.target.value)}
                      placeholder="sk-..."
                      spellCheck={false}
                      type="password"
                      value={apiKey}
                    />
                    <small>
                      Stored only in this browser. Sent with each request and
                      never saved by the server. Leave empty and save to delete it.
                    </small>
                  </div>

                  <label className="lab-check-row">
                    <input
                      checked={apiKeyDisabled}
                      onChange={(event) => setApiKeyDisabledValue(event.target.checked)}
                      type="checkbox"
                    />
                    <span>
                      Disable this key
                      <small>Fall back to the library key when yours is unavailable.</small>
                    </span>
                  </label>

                  <div className="lab-api-key-setting">
                    <label htmlFor="spell-surface-model">Model</label>
                    <select
                      id="spell-surface-model"
                      onChange={(event) => setModelIdValue(event.target.value)}
                      value={modelId}
                    >
                      {AVAILABLE_MODELS.map((model) => (
                        <option key={model.id} value={model.id}>
                          {model.label}
                        </option>
                      ))}
                    </select>
                    <small>
                      DeepSeek V4 Flash is fast and cheap; V4 Pro is the
                      strongest model. Your choice is stored in this browser.
                    </small>
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>

        <footer className="lab-settings-actions">
          <button onClick={onClose} type="button">Leave unchanged</button>
          <button className="primary" onClick={saveSettings} type="button">Apply settings</button>
        </footer>
      </section>
    </div>
  );
}
