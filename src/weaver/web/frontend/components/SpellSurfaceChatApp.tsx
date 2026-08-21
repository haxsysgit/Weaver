import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

import { useChatController } from "../hooks/useChatController";
import type { ChatApi, ConversationSummary, UserPreferences } from "../lib/chatApi";
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
import { SpellSurfaceRail, type LabThread } from "./SpellSurfaceRail";
import { SpellSurfaceRunes } from "./SpellSurfaceRunes";
import {
  SpellSurfaceSettings,
  type LabPreferences,
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
  soulMode: "still",
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
      soulMode: savedChoice(
        saved.soulMode,
        ["still", "living", "mirror"],
        INITIAL_PREFERENCES.soulMode,
      ),
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
  const [setupOpen, setSetupOpen] = useState(shouldOpenFirstNightmare);
  const [setupRevealing, setSetupRevealing] = useState(false);
  const [setupReviewMode, setSetupReviewMode] = useState(false);
  const [voiceBound, setVoiceBound] = useState(() => {
    return getApiKey() !== "" && !isApiKeyDisabled();
  });
  const [railOpen, setRailOpen] = useState(false);
  const [desktopRailCollapsed, setDesktopRailCollapsed] = useState(false);
  const [archivedOpen, setArchivedOpen] = useState(false);
  const [archivedIds, setArchivedIds] = useState<Set<string>>(new Set());
  const [pinnedIds, setPinnedIds] = useState<Set<string>>(new Set());
  const [threadNames, setThreadNames] = useState<Map<string, string>>(new Map());
  const [spellState, setSpellState] = useState<SpellweaveActivityState>("idle");
  const [announcement, setAnnouncement] = useState("[The Spell listens.]");
  const [announcementKey, setAnnouncementKey] = useState(0);
  const composerRef = useRef<HTMLTextAreaElement>(null);
  const railOpenerRef = useRef<HTMLButtonElement>(null);
  const transcriptRef = useRef<HTMLDivElement>(null);
  const previousTurnActive = useRef(false);
  const answerPhaseAnnounced = useRef(false);
  const completionTimer = useRef<number | null>(null);

  const threads = useMemo(
    () => chat.conversations.map((conversation: ConversationSummary): LabThread => ({
      archived: archivedIds.has(conversation.conversation_id),
      dateGroup: dateGroupFor(conversation.created_at),
      id: conversation.conversation_id,
      pinned: pinnedIds.has(conversation.conversation_id),
      preview: "private reading thread",
      title: threadNames.get(conversation.conversation_id) ?? conversation.title,
      volume: null,
    })),
    [archivedIds, chat.conversations, pinnedIds, threadNames],
  );

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
    const transcript = transcriptRef.current;
    if (transcript) {
      transcript.scrollTop = transcript.scrollHeight;
    }
  }, [chat.activity, chat.messages, chat.recoveryMessage]);

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

  async function openSettings() {
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
    } finally {
      setSettingsOpen(true);
      announce("[The sea within opens.]");
    }
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
    setSetupReviewMode(false);
    refreshVoiceBinding();
    window.setTimeout(() => composerRef.current?.focus(), 0);
  }

  function refreshVoiceBinding() {
    setVoiceBound(getApiKey() !== "" && !isApiKeyDisabled());
  }

  function replayFirstNightmare() {
    setSettingsOpen(false);
    setSetupRevealing(false);
    setSetupReviewMode(true);
    setSetupOpen(true);
  }

  async function createThread() {
    const created = await chat.createConversation();
    if (created) {
      setRailOpen(false);
      announce("[An empty thread waits in the void.]");
      window.setTimeout(() => composerRef.current?.focus(), 0);
    }
  }

  async function selectThread(threadId: string) {
    await chat.selectConversation(threadId);
    setRailOpen(false);
    announce("[The thread is recalled.]");
  }

  function renameThread(threadId: string, title: string) {
    setThreadNames((current) => new Map(current).set(threadId, title));
    announce("[The thread accepts a new name.]");
  }

  function toggleSet(
    update: Dispatch<SetStateAction<Set<string>>>,
    threadId: string,
  ) {
    update((current) => {
      const next = new Set(current);
      if (next.has(threadId)) {
        next.delete(threadId);
      } else {
        next.add(threadId);
      }
      return next;
    });
  }

  function sendMessage(message: string) {
    answerPhaseAnnounced.current = false;
    setSpellState("reaching");
    announce("[The Spell reaches for the first thread.]");
    void chat.sendMessage(message);
  }

  function regenerateReply() {
    answerPhaseAnnounced.current = false;
    setSpellState("reading");
    announce("[The Spell takes up the thread once more.]");
    chat.regenerateReply();
  }

  const readerStatus = `Vol ${preferences.volume} · ch ${preferences.chapter} · ${preferences.tier}`;
  const threadAlpha = preferences.starIntensity === "quiet"
    ? 0.2
    : preferences.starIntensity === "vivid"
      ? 0.56
      : 0.36;
  const backdropState = chat.recoveryMessage
    ? "failed"
    : setupRevealing
      ? "reaching"
      : spellState;
  return (
    <div
      className={[
        "spell-surface-lab",
        "spell-surface-live",
        railOpen ? "lab-rail-open" : "",
        desktopRailCollapsed ? "lab-desktop-rail-collapsed" : "",
      ].filter(Boolean).join(" ")}
      data-density={preferences.density}
      data-font-size={preferences.fontSize}
      data-glass={preferences.glass}
      data-runes={preferences.runeMode}
      data-soul={preferences.soulMode}
      data-star-intensity={preferences.starIntensity}
      data-theme={preferences.theme}
      data-testid="spell-surface-live"
    >
      <SpellweaveBackdrop
        distantRendererEnabled={!setupOpen || setupRevealing}
        paused={settingsOpen || (setupOpen && !setupRevealing)}
        state={backdropState}
        threadAlpha={threadAlpha}
      />

      <SpellSurfaceRail
        activeThreadId={chat.conversationId ?? ""}
        archivedOpen={archivedOpen}
        collapsed={desktopRailCollapsed}
        drawerOpen={railOpen}
        onArchive={(threadId) => toggleSet(setArchivedIds, threadId)}
        onClose={closeRail}
        onCreate={() => void createThread()}
        onDelete={(threadId) => void chat.deleteConversation(threadId)}
        onOpen={openRail}
        onOpenSettings={() => void openSettings()}
        onPin={(threadId) => toggleSet(setPinnedIds, threadId)}
        onRename={renameThread}
        onSelect={(threadId) => void selectThread(threadId)}
        onSetArchivedOpen={setArchivedOpen}
        readerStatus={readerStatus}
        threads={threads}
      />

      <main
        aria-hidden={railOpen ? true : undefined}
        className="lab-chat-main"
        inert={railOpen}
      >
        <div className="lab-chat-controls">
          <button aria-controls="spell-surface-rail" aria-expanded={railOpen} aria-label="Open threads" className="lab-mobile-rail" onClick={openRail} ref={railOpenerRef} type="button">
            <RailOpenIcon />
          </button>
          <button aria-label="Open Soul Sea settings from header" className="lab-header-settings" onClick={() => void openSettings()} type="button">
            <SettingsIcon />
          </button>
        </div>

        <div aria-live="polite" className="lab-transcript" ref={transcriptRef}>
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
            {chat.recoveryMessage && (
              <RecoveryPanel
                chooseLabel={weaverProduct.recoveryChooseLabel}
                createLabel={weaverProduct.recoveryCreateLabel}
                message={chat.recoveryMessage}
                onChooseConversation={openRail}
                onCreateConversation={() => void createThread()}
                onRetry={() => void chat.retryLastTurn()}
                retryLabel={weaverProduct.recoveryRetryLabel}
                title={weaverProduct.recoveryTitle}
              />
            )}
          </div>
        </div>

        <SpellSurfaceRunes announcement={announcement} eventKey={announcementKey} mode={preferences.runeMode} />

        <footer className="lab-composer-dock">
          <Composer
            cancelling={chat.turnState === "cancelling"}
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
            textareaRef={composerRef}
            tier={preferences.tier}
            turnActive={chat.turnActive}
            voiceBound={voiceBound}
          />
          <p><span /> {privacyLabel}</p>
        </footer>
      </main>

      {railOpen && <button aria-label="Close thread drawer" className="lab-rail-scrim" onClick={closeRail} type="button" />}

      {settingsOpen && (
        <SpellSurfaceSettings
          initial={preferences}
          onApiKeyChange={setVoiceBound}
          onClose={() => setSettingsOpen(false)}
          onReplayFirstNightmare={replayFirstNightmare}
          onSave={(nextPreferences) => {
            setPreferences(nextPreferences);
            saveVisualPreferences(nextPreferences);
            setSettingsOpen(false);
            announce("[Your soul answers the change.]");
            void api.savePreferences(toApiPreferences(nextPreferences));
          }}
        />
      )}

      {setupOpen && (
        <FirstNightmareSetup
          onComplete={closeSetup}
          onDefer={closeSetup}
          onKeyStored={refreshVoiceBinding}
          onRevealStart={() => setSetupRevealing(true)}
          reviewMode={setupReviewMode}
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
