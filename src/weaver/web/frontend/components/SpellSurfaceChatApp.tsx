import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { useChatController } from "../hooks/useChatController";
import type {
  AccessStatus,
  ChatApi,
  ConversationSummary,
  UserPreferences,
} from "../lib/chatApi";
import { weaverProduct } from "../lib/product";
import { runeMessageForActivity } from "../lib/runePhases";
import {
  shouldOpenFirstNightmare,
} from "../lib/firstNightmare";
import { getApiKey, isApiKeyDisabled } from "../lib/identity";
import { Composer, type ReadingTier } from "./Composer";
import { FirstNightmareSetup } from "./FirstNightmareSetup";
import { RailOpenIcon, SettingsIcon } from "./Icons";
import { Message } from "./Message";
import { RecoveryPanel } from "./RecoveryPanel";
import { SpellMotionProvider } from "./SpellMotionProvider";
import {
  SpellweaveBackdrop,
  type SpellweaveActivityState,
} from "./SpellweaveBackdrop";
import { ThreadArchive, type LabThread } from "./ThreadArchive";
import { SpellSurfaceRunes } from "./SpellSurfaceRunes";
import {
  SpellSurfaceSoulSea,
  type SoulSeaMode,
  type SoulSeaState,
} from "./SpellSurfaceSoulSea";
import {
  SpellSurfaceSettings,
  type LabPreferences,
  type SettingsSection,
} from "./SpellSurfaceSettings";
import { WeaverMark } from "./WeaverMark";
import "../styles/spell-surface-lab.css";

interface SpellSurfaceChatAppProps {
  api: ChatApi;
  privacyLabel: string;
}

const INITIAL_PREFERENCES: LabPreferences = {
  chapter: 1000,
  density: "comfortable",
  fontSize: "small",
  glass: "immersive",
  runeMode: "particles",
  soulMode: "sunny",
  spoilerMode: "protect",
  starIntensity: "balanced",
  theme: "void",
  tier: "ascended",
  volume: 5,
};

const VISUAL_PREFERENCES_KEY = "weaver.spell-surface";

function savedChoice<T extends string>(
  value: unknown,
  choices: readonly T[],
  fallback: T,
): T {
  return typeof value === "string" && choices.includes(value as T)
    ? value as T
    : fallback;
}

function savedSoulSeaMode(value: unknown): SoulSeaMode {
  const legacyModes: Record<string, SoulSeaMode> = {
    living: "awakened",
    mirror: "nephis",
    still: "sunny",
  };
  if (typeof value === "string" && value in legacyModes) {
    return legacyModes[value];
  }
  return savedChoice(value, ["sunny", "awakened", "nephis"], "sunny");
}

function loadInitialPreferences(): LabPreferences {
  try {
    const saved = JSON.parse(
      window.localStorage.getItem(VISUAL_PREFERENCES_KEY) ?? "null",
    ) as Partial<LabPreferences> | null;
    if (!saved) {
      return INITIAL_PREFERENCES;
    }
    return {
      ...INITIAL_PREFERENCES,
      density: savedChoice(
        saved.density,
        ["compact", "comfortable"],
        INITIAL_PREFERENCES.density,
      ),
      fontSize: savedChoice(
        saved.fontSize,
        ["small", "medium", "large"],
        INITIAL_PREFERENCES.fontSize,
      ),
      glass: savedChoice(
        saved.glass,
        ["subtle", "immersive"],
        INITIAL_PREFERENCES.glass,
      ),
      runeMode: savedChoice(
        saved.runeMode,
        ["particles", "voice", "threads"],
        INITIAL_PREFERENCES.runeMode,
      ),
      soulMode: savedSoulSeaMode(saved.soulMode),
      starIntensity: savedChoice(
        saved.starIntensity,
        ["quiet", "balanced", "vivid"],
        INITIAL_PREFERENCES.starIntensity,
      ),
      theme: savedChoice(
        saved.theme,
        ["crimson", "cosmos", "starlight", "void"],
        INITIAL_PREFERENCES.theme,
      ),
    };
  } catch {
    return INITIAL_PREFERENCES;
  }
}

function saveVisualPreferences(preferences: LabPreferences) {
  window.localStorage.setItem(VISUAL_PREFERENCES_KEY, JSON.stringify({
    density: preferences.density,
    fontSize: preferences.fontSize,
    glass: preferences.glass,
    runeMode: preferences.runeMode,
    soulMode: preferences.soulMode,
    starIntensity: preferences.starIntensity,
    theme: preferences.theme,
  }));
}

const VOLUME_ENDS = [95, 350, 600, 750, 1060, 1230, 1590, 1840, 2260, 2720, 3000, 3127, 3160];

function volumeForChapter(chapter: number): number {
  const volumeIndex = VOLUME_ENDS.findIndex((endChapter) => chapter <= endChapter);
  return volumeIndex === -1 ? VOLUME_ENDS.length : volumeIndex + 1;
}

function dateGroupFor(createdAt?: string): LabThread["dateGroup"] {
  if (!createdAt) {
    return "Others";
  }
  const created = new Date(createdAt);
  if (Number.isNaN(created.getTime())) {
    return "Others";
  }
  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);
  const startOfYesterday = new Date(startOfToday);
  startOfYesterday.setDate(startOfYesterday.getDate() - 1);
  if (created >= startOfToday) {
    return "Today";
  }
  if (created >= startOfYesterday) {
    return "Yesterday";
  }
  return "Others";
}

function toApiPreferences(preferences: LabPreferences): UserPreferences {
  return {
    reader_chapter: preferences.chapter,
    spoiler_mode: preferences.spoilerMode,
    tier: preferences.tier,
  };
}

function SpellSurfaceChatSurface({
  api,
  privacyLabel,
}: SpellSurfaceChatAppProps) {
  const chat = useChatController(api, weaverProduct);
  const [preferences, setPreferences] = useState(loadInitialPreferences);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [settingsInitialSection, setSettingsInitialSection] =
    useState<SettingsSection>("reader");
  const settingsOpenerRef = useRef<HTMLElement | null>(null);
  const [setupOpen, setSetupOpen] = useState(shouldOpenFirstNightmare);
  const [setupRevealing, setSetupRevealing] = useState(false);
  const [replayingFirstNightmare, setReplayingFirstNightmare] = useState(false);
  const [voiceBound, setVoiceBound] = useState(() => {
    return getApiKey() !== "" && !isApiKeyDisabled();
  });
  const [access, setAccess] = useState<AccessStatus | null>(null);
  const [railOpen, setRailOpen] = useState(false);
  const [desktopRailCollapsed, setDesktopRailCollapsed] = useState(false);
  const [archivedOpen, setArchivedOpen] = useState(false);
  const [spellState, setSpellState] = useState<SpellweaveActivityState>("idle");
  const [announcement, setAnnouncement] = useState("[The Spell listens.]");
  const [announcementKey, setAnnouncementKey] = useState(0);
  const composerRef = useRef<HTMLTextAreaElement>(null);
  const railOpenerRef = useRef<HTMLButtonElement>(null);
  const focusComposerAfterRailClose = useRef(false);
  const transcriptRef = useRef<HTMLDivElement>(null);
  const previousTurnActive = useRef(false);
  const answerPhaseAnnounced = useRef(false);
  const completionTimer = useRef<number | null>(null);

  const threads = useMemo(
    () => chat.conversations.map((conversation: ConversationSummary): LabThread => ({
      archived: conversation.archived,
      dateGroup: dateGroupFor(conversation.created_at),
      id: conversation.conversation_id,
      pinned: conversation.pinned,
      preview: "private reading thread",
      title: conversation.title,
      volume: null,
    })),
    [chat.conversations],
  );

  useEffect(() => {
    void refreshAccess();
  }, []);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.ctrlKey && event.key === ",") {
        event.preventDefault();
        void openSettings();
      }
      if (event.key === "Escape" && !setupOpen) {
        setSettingsOpen(false);
        if (railOpen) {
          closeRail();
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [railOpen, setupOpen]);

  useEffect(() => {
    if (!railOpen) {
      return;
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [railOpen]);

  useEffect(() => {
    if (railOpen || !focusComposerAfterRailClose.current) {
      return;
    }
    focusComposerAfterRailClose.current = false;
    composerRef.current?.focus({ preventScroll: true });
  }, [railOpen]);

  useEffect(() => {
    const transcript = transcriptRef.current;
    if (transcript) {
      transcript.scrollTop = transcript.scrollHeight;
    }
  }, [chat.activity, chat.messages, chat.recoveryMessage]);

  useEffect(() => {
    if (!chat.recovery) {
      return;
    }
    previousTurnActive.current = false;
    setSpellState("failed");
    announce(chat.recovery.title);
    if (completionTimer.current) {
      window.clearTimeout(completionTimer.current);
    }
    void refreshAccess();
  }, [chat.recovery]);

  useEffect(() => {
    if (chat.turnActive) {
      previousTurnActive.current = true;
      setSpellState(chat.activity.length > 0 ? "reading" : "reaching");
      return;
    }
    if (!previousTurnActive.current) {
      return;
    }
    previousTurnActive.current = false;
    setSpellState("complete");
    announce("[The weave is complete.]");
    if (completionTimer.current) {
      window.clearTimeout(completionTimer.current);
    }
    completionTimer.current = window.setTimeout(() => setSpellState("idle"), 900);
    void refreshAccess();
    window.setTimeout(focusComposerIfAvailable, 0);
  }, [chat.activity.length, chat.turnActive]);

  useEffect(() => {
    const activity = chat.activity.at(-1);
    if (!activity) {
      return;
    }
    const message = runeMessageForActivity(activity);
    if (message) {
      setSpellState("reading");
      announce(message);
    }
  }, [chat.activity]);

  const streamingReplyHasText = chat.messages.some(
    (message) => message.role === "weaver" && message.streaming && message.content.length > 0,
  );

  useEffect(() => {
    if (!chat.turnActive || !streamingReplyHasText || answerPhaseAnnounced.current) {
      return;
    }
    answerPhaseAnnounced.current = true;
    setSpellState("answering");
    announce("[Weaving the story.]");
  }, [chat.turnActive, streamingReplyHasText]);

  useEffect(() => () => {
    if (completionTimer.current) {
      window.clearTimeout(completionTimer.current);
    }
  }, []);

  function announce(message: string) {
    setAnnouncement(message);
    setAnnouncementKey((current) => current + 1);
  }

  async function refreshAccess() {
    if (!api.getAccess) {
      return;
    }
    try {
      setAccess(await api.getAccess());
    } catch {
      // A temporary status failure must not hide local conversations.
    }
  }

  function focusComposerIfAvailable() {
    if (railOpen || settingsOpen || setupOpen) {
      return;
    }
    composerRef.current?.focus({ preventScroll: true });
  }

  async function openSettings() {
    settingsOpenerRef.current = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;
    setSettingsInitialSection("reader");
    setSettingsOpen(true);
    announce("[The sea within opens.]");
    try {
      const stored = await api.getPreferences();
      const chapter = stored.reader_chapter ?? preferences.chapter;
      setPreferences((current) => ({
        ...current,
        chapter,
        spoilerMode: stored.spoiler_mode,
        tier: stored.tier,
        volume: volumeForChapter(chapter),
      }));
    } catch {
      // The local settings remain usable when the server preference read fails.
    }
  }

  function closeSettings() {
    setSettingsOpen(false);
    window.setTimeout(() => settingsOpenerRef.current?.focus(), 0);
  }

  function openRail() {
    if (window.innerWidth < 768) {
      setRailOpen(true);
      return;
    }
    setDesktopRailCollapsed(false);
  }

  function closeRail() {
    if (window.innerWidth < 768) {
      setRailOpen(false);
      window.setTimeout(() => railOpenerRef.current?.focus(), 0);
      return;
    }
    setDesktopRailCollapsed(true);
  }

  function closeSetup() {
    setSetupOpen(false);
    setSetupRevealing(false);
    setReplayingFirstNightmare(false);
    refreshVoiceBinding();
    void refreshAccess();
    window.setTimeout(() => composerRef.current?.focus(), 0);
  }

  function refreshVoiceBinding() {
    setVoiceBound(getApiKey() !== "" && !isApiKeyDisabled());
  }

  async function acceptSponsoredNotice(): Promise<boolean> {
    if (!api.acceptSponsoredNotice) {
      return true;
    }
    try {
      const status = await api.acceptSponsoredNotice();
      setAccess(status);
      return status.consented && status.enabled;
    } catch {
      return false;
    }
  }

  function openAdvancedFromSetup() {
    setSetupOpen(false);
    setSetupRevealing(false);
    setReplayingFirstNightmare(false);
    setSettingsInitialSection("model");
    setSettingsOpen(true);
  }

  function replayFirstNightmare() {
    setSettingsOpen(false);
    setSetupRevealing(false);
    setReplayingFirstNightmare(true);
    setSetupOpen(true);
  }

  async function createThread() {
    const created = await chat.createConversation();
    if (created) {
      if (railOpen) {
        focusComposerAfterRailClose.current = true;
        setRailOpen(false);
      } else {
        window.setTimeout(() => {
          composerRef.current?.focus({ preventScroll: true });
        }, 0);
      }
      announce("[An empty thread waits in the void.]");
    }
  }

  async function selectThread(threadId: string) {
    const selected = await chat.selectConversation(threadId);
    if (!selected) {
      announce("[The thread could not be recalled.]");
      return;
    }
    setRailOpen(false);
    announce("[The thread is recalled.]");
  }

  async function renameThread(threadId: string, title: string) {
    const updated = await chat.updateConversation(threadId, { title });
    if (updated) {
      announce("[The thread accepts a new name.]");
    }
    return updated;
  }

  async function togglePinnedThread(threadId: string) {
    const thread = threads.find((candidate) => candidate.id === threadId);
    if (!thread) {
      return false;
    }
    const updated = await chat.updateConversation(threadId, {
      pinned: !thread.pinned,
    });
    if (updated) {
      const message = thread.pinned
        ? "[The thread is released.]"
        : "[The Spell holds the thread close.]";
      announce(message);
    }
    return updated;
  }

  async function toggleArchivedThread(threadId: string) {
    const thread = threads.find((candidate) => candidate.id === threadId);
    if (!thread) {
      return false;
    }
    const updated = await chat.updateConversation(threadId, {
      archived: !thread.archived,
    });
    if (updated) {
      const message = thread.archived
        ? "[The thread returns from silence.]"
        : "[The thread sinks into silence.]";
      announce(message);
    }
    return updated;
  }

  function sendMessage(message: string) {
    answerPhaseAnnounced.current = false;
    setSpellState("reaching");
    announce("[The Spell reaches for the first thread.]");
    void chat.sendMessage(message);
    window.setTimeout(focusComposerIfAvailable, 0);
  }

  function regenerateReply() {
    answerPhaseAnnounced.current = false;
    setSpellState("reading");
    announce("[The Spell takes up the thread once more.]");
    chat.regenerateReply();
  }

  const readerStatus = `Vol ${preferences.volume} · ch ${preferences.chapter} · ${preferences.tier}`;
  const sharedExhausted = (
    !voiceBound
    && access?.enabled === true
    && access.remaining_questions === 0
  );
  const accessMessage = voiceBound
    ? undefined
    : access?.enabled && access.remaining_questions > 0
      ? `${access.remaining_questions} shared questions remain. Renews at 00:00 UTC.`
      : sharedExhausted
        ? "[The shared thread rests until 00:00 UTC.] Your conversations are still here. Return after the reset, or bind your own DeepSeek key in Advanced."
        : access?.source === "unavailable"
          ? "[The shared thread is unavailable.] Bind your own DeepSeek key in Advanced."
          : undefined;
  const threadAlpha = preferences.starIntensity === "quiet"
    ? 0.12
    : preferences.starIntensity === "vivid"
      ? 0.46
      : 0.2;
  const backdropState = chat.recoveryMessage
    ? "failed"
    : setupRevealing
      ? "reaching"
      : spellState;
  const soulSeaState: SoulSeaState = chat.recoveryMessage
    ? "error"
    : backdropState === "answering"
      ? "weaving"
      : backdropState === "reading" || backdropState === "reaching"
        ? "rippling"
        : backdropState === "complete"
          ? "complete"
          : "idle";
  return (
    <div
      className={[
        "spell-surface-lab",
        "spell-surface-live",
        railOpen ? "lab-rail-open" : "",
        settingsOpen ? "lab-settings-open" : "",
        desktopRailCollapsed ? "lab-desktop-rail-collapsed" : "",
      ].filter(Boolean).join(" ")}
      data-density={preferences.density}
      data-font-size={preferences.fontSize}
      data-glass={preferences.glass}
      data-runes={preferences.runeMode}
      data-soul={preferences.soulMode}
      data-startup={chat.booting ? "waiting" : "ready"}
      data-star-intensity={preferences.starIntensity}
      data-theme={preferences.theme}
      data-testid="spell-surface-live"
    >
      <SpellweaveBackdrop
        distantRendererEnabled={
          !chat.booting && (!setupOpen || setupRevealing)
        }
        foregroundRespondsToActivity={false}
        paused={settingsOpen || (setupOpen && !setupRevealing)}
        state={backdropState}
        threadAlpha={threadAlpha}
      />
      <SpellSurfaceSoulSea
        hiddenFromAccessibility={chat.booting || setupOpen}
        mode={preferences.soulMode}
        showCaption={false}
        state={soulSeaState}
      />

      <ThreadArchive
        activeThreadId={chat.conversationId ?? ""}
        archivedOpen={archivedOpen}
        collapsed={desktopRailCollapsed}
        drawerOpen={railOpen}
        actionError={chat.conversationActionError}
        onArchive={toggleArchivedThread}
        onClose={closeRail}
        onCreate={() => void createThread()}
        onDelete={(threadId) => chat.deleteConversation(threadId)}
        onOpen={openRail}
        onOpenSettings={() => void openSettings()}
        onPin={togglePinnedThread}
        onRename={renameThread}
        onSelect={(threadId) => void selectThread(threadId)}
        onSetArchivedOpen={setArchivedOpen}
        readerStatus={readerStatus}
        startupReady={!chat.booting && !setupOpen}
        threads={threads}
      />

      <main
        aria-hidden={chat.booting || railOpen || setupOpen ? true : undefined}
        className="lab-chat-main"
        inert={chat.booting || railOpen || setupOpen}
      >
        <div className="lab-chat-controls">
          <button aria-controls="spell-surface-rail" aria-expanded={railOpen} aria-label="Open threads" className="lab-mobile-rail" onClick={openRail} ref={railOpenerRef} type="button">
            <RailOpenIcon />
          </button>
          <button aria-label="Open Soul Sea settings from header" className="lab-header-settings" onClick={() => void openSettings()} type="button">
            <SettingsIcon />
          </button>
        </div>

        <div className="lab-transcript" ref={transcriptRef}>
          <div className="lab-transcript-column">
            {chat.bootError && <div className="boot-error">{chat.bootError}</div>}
            {!chat.bootError && chat.messages.length === 0 && (
              <section className="lab-empty-weave">
                <span className="lab-empty-mark"><WeaverMark /></span>
                <p>[An empty thread trembles in the void.]</p>
                <h1>What are we reading?</h1>
                <span>ask about canon, argue a take, or bend the story into a what-if</span>
              </section>
            )}
            {chat.messages.map((message) => (
              <Message
                Mark={WeaverMark}
                assistantName={weaverProduct.assistantName}
                key={message.id}
                message={message}
                onQuote={(quote) => {
                  chat.setDraft(`"${quote}" `);
                  composerRef.current?.focus();
                }}
                onRegenerate={
                  message.id === chat.lastReplyId && chat.turnState === "idle"
                    ? regenerateReply
                    : undefined
                }
                regenerateLabel={weaverProduct.regenerateLabel}
              />
            ))}
            {chat.recovery && (
              <RecoveryPanel
                chooseLabel={weaverProduct.recoveryChooseLabel}
                createLabel={weaverProduct.recoveryCreateLabel}
                issue={chat.recovery}
                onChooseConversation={openRail}
                onCreateConversation={() => void createThread()}
                onRetry={() => void chat.retryLastTurn()}
                retryLabel={weaverProduct.recoveryRetryLabel}
              />
            )}
          </div>
        </div>

        <SpellSurfaceRunes announcement={announcement} eventKey={announcementKey} mode={preferences.runeMode} />

        <footer className="lab-composer-dock">
          <Composer
            cancelling={chat.turnState === "cancelling"}
            disabled={sharedExhausted}
            draft={chat.draft}
            inputLabel={weaverProduct.inputLabel}
            onCancel={() => void chat.cancelTurn()}
            onDraftChange={chat.setDraft}
            onSubmit={sendMessage}
            onTierChange={(tier: ReadingTier) => {
              const nextPreferences = { ...preferences, tier };
              setPreferences(nextPreferences);
              void api.savePreferences(toApiPreferences(nextPreferences));
            }}
            placeholder={weaverProduct.composerPlaceholder}
            sendLabel={weaverProduct.sendLabel}
            stopLabel={weaverProduct.stopLabel}
            stoppingLabel={weaverProduct.stoppingLabel}
            statusText={accessMessage}
            textareaRef={composerRef}
            tier={preferences.tier}
            turnActive={chat.turnActive}
            voiceBound={voiceBound}
          />
          <p><span /> {privacyLabel}</p>
        </footer>
      </main>

      {railOpen && <button aria-hidden="true" className="lab-rail-scrim" onClick={closeRail} tabIndex={-1} type="button" />}

      {settingsOpen && (
        <SpellSurfaceSettings
          initial={preferences}
          initialSection={settingsInitialSection}
          onApiKeyChange={(hasApiKey) => {
            setVoiceBound(hasApiKey);
            window.setTimeout(() => void refreshAccess(), 0);
          }}
          onClose={closeSettings}
          onReplayFirstNightmare={replayFirstNightmare}
          onSave={(nextPreferences) => {
            setPreferences(nextPreferences);
            saveVisualPreferences(nextPreferences);
            closeSettings();
            announce("[Reader state remembered.]");
            void api.savePreferences(toApiPreferences(nextPreferences));
          }}
        />
      )}

      {setupOpen && (
        <FirstNightmareSetup
          onAcceptSponsored={acceptSponsoredNotice}
          onComplete={closeSetup}
          onDefer={closeSetup}
          onRevealStart={() => setSetupRevealing(true)}
          onUseOwnKey={openAdvancedFromSetup}
          preserveFirstRunState={replayingFirstNightmare}
        />
      )}

    </div>
  );
}

export function SpellSurfaceChatApp(props: {
  api: ChatApi;
  privacyLabel: string;
}) {
  return (
    <SpellMotionProvider>
      <SpellSurfaceChatSurface {...props} />
    </SpellMotionProvider>
  );
}
