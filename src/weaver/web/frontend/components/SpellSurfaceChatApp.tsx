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
import { downloadThread } from "../lib/exportThread";
import { mentionedChapter } from "../lib/readerPosition";
import { Composer } from "./Composer";
import { DownloadIcon } from "./Icons";
import { FirstNightmareSetup, type SharedAccessStatus } from "./FirstNightmareSetup";
import { Message } from "./Message";
import { RecoveryPanel } from "./RecoveryPanel";
import { SpellMotionProvider } from "./SpellMotionProvider";
import {
  SpellweaveBackdrop,
  type SpellweaveActivityState,
} from "./SpellweaveBackdrop";
import { ThreadArchive, type LabThread } from "./ThreadArchive";
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

function sharedStatusFor(
  access: AccessStatus | null,
  accessFailed: boolean,
): SharedAccessStatus {
  if (accessFailed) {
    return "unavailable";
  }
  if (!access) {
    return "loading";
  }
  if (access.development) {
    return "development";
  }
  if (access.enabled && access.remaining_questions > 0) {
    return "available";
  }
  if (access.reset_at === null) {
    return "unconfigured";
  }
  return access.remaining_questions === 0 ? "exhausted" : "unavailable";
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

function toApiPreferences(
  preferences: LabPreferences,
  boundaryChosen: boolean,
): UserPreferences {
  return {
    // No chapter chosen means no boundary saved, never the placeholder.
    reader_chapter: boundaryChosen ? preferences.chapter : null,
    spoiler_mode: preferences.spoilerMode,
  };
}

/** The reader line under the thread title: honest about an unset boundary. */
export function readerStatusFor(
  preferences: LabPreferences,
  chapterSaved: boolean | null,
): string {
  if (chapterSaved === null) {
    return "";
  }
  if (preferences.spoilerMode === "none") {
    return "Whole novel";
  }
  if (!chapterSaved) {
    return "No spoiler boundary";
  }
  return `Vol ${preferences.volume} · ch ${preferences.chapter}`;
}

function SpellSurfaceChatSurface({
  api,
  privacyLabel,
}: SpellSurfaceChatAppProps) {
  const chat = useChatController(api, weaverProduct);
  const [preferences, setPreferences] = useState(loadInitialPreferences);
  // null while the saved boundary loads; false when this device has none.
  const [chapterSaved, setChapterSaved] = useState<boolean | null>(null);
  const [chapterOffer, setChapterOffer] = useState<number | null>(null);
  const [chapterOfferFailed, setChapterOfferFailed] = useState(false);
  const [desktop, setDesktop] = useState(() => {
    return typeof window !== "undefined"
      && window.matchMedia("(min-width: 900px)").matches;
  });
  const [railCollapsed, setRailCollapsed] = useState(false);
  const [newMenuSignal, setNewMenuSignal] = useState(0);
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
  const [accessFailed, setAccessFailed] = useState(false);
  const [railOpen, setRailOpen] = useState(false);
  const [archivedOpen, setArchivedOpen] = useState(false);
  const [spellState, setSpellState] = useState<SpellweaveActivityState>("idle");
  const [announcement, setAnnouncement] = useState("[The Spell listens.]");
  const [announcementKey, setAnnouncementKey] = useState(0);
  const composerRef = useRef<HTMLTextAreaElement>(null);
  const menuOpenerRef = useRef<HTMLButtonElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);
  const focusComposerAfterRailClose = useRef(false);
  const transcriptRef = useRef<HTMLDivElement>(null);
  const previousTurnActive = useRef(false);
  const answerPhaseAnnounced = useRef(false);
  const completionTimer = useRef<number | null>(null);

  const threads = useMemo(
    () => chat.conversations.map((conversation: ConversationSummary): LabThread => ({
      archived: conversation.archived,
      domain: conversation.domain === "fanfic" ? "fanfic" : "canon",
      id: conversation.conversation_id,
      preview: conversation.preview ?? "",
      pinned: conversation.pinned,
      title: conversation.title,
      volume: null,
    })),
    [chat.conversations],
  );

  useEffect(() => {
    void refreshAccess();
    void loadStoredBoundary();
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 900px)");
    function sync(event: MediaQueryListEvent) {
      setDesktop(event.matches);
    }
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
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
        if (desktop && !railCollapsed) {
          setRailCollapsed(true);
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [desktop, railCollapsed, railOpen, setupOpen]);

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
    if (chat.booting || railOpen || settingsOpen || setupOpen) {
      return;
    }
    window.setTimeout(focusComposerIfAvailable, 0);
  }, [chat.booting]);

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
      const status = await api.getAccess();
      setAccess(status);
      setAccessFailed(false);
    } catch {
      // A temporary status failure must not hide local conversations.
      setAccessFailed(true);
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
    await loadStoredBoundary();
  }

  async function loadStoredBoundary() {
    try {
      const stored = await api.getPreferences();
      setPreferences((current) => {
        const chapter = stored.reader_chapter ?? current.chapter;
        return {
          ...current,
          chapter,
          spoilerMode: stored.spoiler_mode,
          volume: volumeForChapter(chapter),
        };
      });
      setChapterSaved(stored.reader_chapter !== null);
    } catch {
      // The local settings remain usable when the server preference read fails.
    }
  }

  async function acceptChapterOffer(chapter: number) {
    setChapterOfferFailed(false);
    try {
      await api.savePreferences({ reader_chapter: chapter, spoiler_mode: "protect" });
    } catch {
      setChapterOfferFailed(true);
      return;
    }
    setPreferences((current) => ({
      ...current,
      chapter,
      spoilerMode: "protect",
      volume: volumeForChapter(chapter),
    }));
    setChapterSaved(true);
    setChapterOffer(null);
    announce(`[Boundary set at chapter ${chapter}.]`);
  }

  function closeSettings() {
    setSettingsOpen(false);
    window.setTimeout(() => settingsOpenerRef.current?.focus(), 0);
  }

  function openRail() {
    setRailOpen(true);
  }

  function closeRail() {
    setRailOpen(false);
    window.setTimeout(() => menuOpenerRef.current?.focus(), 0);
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

  async function createFanficThread() {
    const created = await chat.createThread({
      domain: "fanfic",
      fanfic_kind: "missing_scene",
    });
    if (created) {
      focusComposerAfterRailClose.current = true;
      setRailOpen(false);
      announce("[A fanfic thread opens. The story keeps going.]");
    }
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
    // "I'm at chapter 742": offer to make that the boundary, unless it
    // already is. Weaver never changes the boundary without a tap.
    const chapter = mentionedChapter(message);
    const alreadyProtected = chapterSaved === true
      && preferences.spoilerMode === "protect"
      && preferences.chapter === chapter;
    if (chapter !== null && chapterSaved !== null && !alreadyProtected) {
      setChapterOfferFailed(false);
      setChapterOffer(chapter);
    }
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

  const readerStatus = readerStatusFor(preferences, chapterSaved);
  const activeThread = threads.find((thread) => thread.id === chat.conversationId);
  const sharedStatus = sharedStatusFor(access, accessFailed);
  const sharedExhausted = (
    !voiceBound
    && access?.enabled === true
    && access.remaining_questions === 0
  );
  const sharedAwaitingConsent = (
    !voiceBound
    && access?.enabled === true
    && !access.consented
  );
  const sharedUnavailable = (
    !voiceBound
    && (accessFailed || (access !== null && !access.enabled && !access.development))
  );
  const accessMessage = voiceBound
    ? undefined
    : access?.development
      ? undefined
      : sharedAwaitingConsent
        ? "[The shared thread awaits consent.] Open Settings and replay the First Nightmare before using the shared allowance."
        : access?.enabled && access.consented && access.remaining_questions > 0
      ? `${access.remaining_questions} shared questions remain. Renews at 00:00 UTC.`
      : sharedExhausted
        ? "[The shared thread rests until 00:00 UTC.] Your conversations are still here. Return after the reset, or bind your own DeepSeek key in Advanced."
        : sharedUnavailable
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
        "lab-immersive",
        desktop ? "lab-has-rail" : "",
        desktop && railCollapsed ? "lab-mini-rail" : "",
        settingsOpen ? "lab-settings-open" : "",
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

      {desktop && railCollapsed && (
        <aside className="lab-rail-mini">
          <button
            aria-label="Open threads"
            onClick={() => setRailCollapsed(false)}
            type="button"
          >
            <WeaverMark compact />
          </button>
        </aside>
      )}

      {desktop && !railCollapsed && (
        <ThreadArchive
          activeThreadId={chat.conversationId ?? ""}
          archivedOpen={archivedOpen}
          collapsed={railCollapsed}
          drawerOpen={false}
          actionError={chat.conversationActionError}
          onArchive={toggleArchivedThread}
          onClose={() => setRailCollapsed(true)}
          onCreate={() => void createThread()}
          onCreateFanfic={() => void createFanficThread()}
          onDelete={(threadId) => chat.deleteConversation(threadId)}
          onOpen={() => setRailCollapsed(false)}
          onOpenSettings={() => void openSettings()}
          onPin={togglePinnedThread}
          onRename={renameThread}
          onSelect={(threadId) => void selectThread(threadId)}
          onSetArchivedOpen={setArchivedOpen}
          readerStatus={readerStatus}
          startupReady={!chat.booting && !setupOpen}
          newMenuSignal={newMenuSignal}
          threads={threads}
        />
      )}

      {railOpen && !desktop && (
        <div className="lab-menu-layer">
          <button
            aria-label="Close threads and settings"
            className="lab-menu-backdrop"
            onClick={closeRail}
            tabIndex={-1}
            type="button"
          />
          <div
            aria-label="Threads and settings"
            aria-modal="true"
            className="lab-menu-panel"
            onKeyDown={(event) => {
              if (event.key !== "Tab" || !menuPanelRef.current) {
                return;
              }
              const focusable = menuPanelRef.current.querySelectorAll<HTMLElement>(
                'button:not(:disabled), input:not(:disabled), select:not(:disabled), [href]',
              );
              const first = focusable[0];
              const last = focusable[focusable.length - 1];
              if (!first || !last) {
                return;
              }
              if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
              } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
              }
            }}
            ref={menuPanelRef}
            role="dialog"
          >
      <ThreadArchive
        activeThreadId={chat.conversationId ?? ""}
        archivedOpen={archivedOpen}
        collapsed={false}
        drawerOpen={railOpen}
        actionError={chat.conversationActionError}
        onArchive={toggleArchivedThread}
        onClose={closeRail}
        onCreate={() => void createThread()}
        onCreateFanfic={() => void createFanficThread()}
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
          </div>
        </div>
      )}

      <main
        aria-hidden={chat.booting || railOpen || setupOpen ? true : undefined}
        className="lab-chat-main"
        inert={chat.booting || railOpen || setupOpen}
      >
        <header className="lab-thread-head">
          <div>
            <small>{activeThread?.domain === "fanfic" ? "Fanfic" : "Chat"}</small>
            <strong>{activeThread?.title ?? "New thread"}</strong>
          </div>
          <span>{readerStatus}</span>
          {chat.messages.length > 0 && (
            <button
              aria-label="Save this thread"
              className="lab-thread-export"
              disabled={chat.turnActive}
              onClick={() => {
                downloadThread({
                  domain: activeThread?.domain ?? "canon",
                  exportedAt: new Date(),
                  messages: chat.messages,
                  title: activeThread?.title ?? "Weaver thread",
                });
                announce("[The thread is yours to keep.]");
              }}
              title="Save this thread as a Markdown file"
              type="button"
            >
              <DownloadIcon />
            </button>
          )}
        </header>

        <div
          className="lab-transcript"
          onClick={() => {
            if (desktop && !railCollapsed) {
              setRailCollapsed(true);
            }
          }}
          ref={transcriptRef}
        >
          <div className="lab-transcript-column">
            {chat.bootError && <div className="boot-error">{chat.bootError}</div>}
            {!chat.bootError && chat.messages.length === 0 && (
              <section className="lab-empty-weave">
                <span className="lab-empty-mark"><WeaverMark /></span>
                <p>[An empty thread. Start anywhere.]</p>
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

        <footer className="lab-composer-dock">
          {chapterOffer !== null && (
            <div aria-label="Spoiler boundary" className="lab-boundary-offer" role="group">
              <p>
                {chapterOfferFailed
                  ? "[The thread slipped. Your boundary was not saved.]"
                  : `[Chapter ${chapterOffer}, noted.] Protect everything after it?`}
              </p>
              <button className="primary" onClick={() => void acceptChapterOffer(chapterOffer)} type="button">
                {chapterOfferFailed ? "Try again" : `Protect after ch ${chapterOffer}`}
              </button>
              <button onClick={() => setChapterOffer(null)} type="button">Not now</button>
            </div>
          )}
          <Composer
            cancelling={chat.turnState === "cancelling"}
            draft={chat.draft}
            inputLabel={weaverProduct.inputLabel}
            menuButtonRef={menuOpenerRef}
            onCancel={() => void chat.cancelTurn()}
            onDraftChange={chat.setDraft}
            onOpenMenu={() => {
              if (!desktop) {
                openRail();
                return;
              }
              if (railCollapsed) {
                setRailCollapsed(false);
                window.setTimeout(() => setNewMenuSignal((n) => n + 1), 80);
                return;
              }
              setNewMenuSignal((n) => n + 1);
            }}
            onSubmit={sendMessage}
            placeholder={weaverProduct.composerPlaceholder}
            sendDisabled={sharedExhausted || sharedAwaitingConsent || sharedUnavailable}
            sendLabel={weaverProduct.sendLabel}
            stopLabel={weaverProduct.stopLabel}
            stoppingLabel={weaverProduct.stoppingLabel}
            statusText={accessMessage}
            textareaRef={composerRef}
            turnActive={chat.turnActive}
            voiceBound={voiceBound}
          />
          <p><span /> {privacyLabel} <a href="/privacy">Privacy</a></p>
        </footer>
      </main>

      {railOpen && <button aria-hidden="true" className="lab-rail-scrim" onClick={closeRail} tabIndex={-1} type="button" />}

      {settingsOpen && (
        <SpellSurfaceSettings
          boundarySaved={chapterSaved !== false}
          initial={preferences}
          initialSection={settingsInitialSection}
          onApiKeyChange={(hasApiKey) => {
            setVoiceBound(hasApiKey);
            window.setTimeout(() => void refreshAccess(), 0);
          }}
          onClose={closeSettings}
          onReplayFirstNightmare={replayFirstNightmare}
          onSave={async (nextPreferences, { boundaryChosen }) => {
            // Settings waits on this: nothing applies until the server has
            // the reader state, and Settings closes itself after "Saved".
            await api.savePreferences(toApiPreferences(nextPreferences, boundaryChosen));
            setPreferences(nextPreferences);
            setChapterSaved(boundaryChosen);
            if (boundaryChosen) {
              setChapterOffer(null);
            }
            saveVisualPreferences(nextPreferences);
            announce("[Reader state remembered.]");
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
          sharedStatus={sharedStatus}
          voiceBound={voiceBound}
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
