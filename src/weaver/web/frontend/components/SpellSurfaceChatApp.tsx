import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

import { useChatController, type ToolActivity } from "../hooks/useChatController";
import type { ChatApi, ConversationSummary, UserPreferences } from "../lib/chatApi";
import { weaverProduct } from "../lib/product";
import { Composer, type ReadingTier } from "./Composer";
import { RailOpenIcon, SettingsIcon } from "./Icons";
import { Message } from "./Message";
import { PassageModal } from "./PassageModal";
import { RecoveryPanel } from "./RecoveryPanel";
import { SpellBackground } from "./SpellBackground";
import { SpellSurfaceRail, type LabThread } from "./SpellSurfaceRail";
import { SpellSurfaceRunes } from "./SpellSurfaceRunes";
import {
  SpellSurfaceSettings,
  type LabPreferences,
} from "./SpellSurfaceSettings";
import { SpellSurfaceSoulSea, type SoulSeaState } from "./SpellSurfaceSoulSea";
import { WeaverMark } from "./WeaverMark";
import "../styles/spell-surface-lab.css";

interface SpellSurfaceChatAppProps {
  api: ChatApi;
  modeLabel: string;
  privacyLabel: string;
}

const INITIAL_PREFERENCES: LabPreferences = {
  chapter: 1000,
  density: "comfortable",
  fontSize: "medium",
  glass: "subtle",
  runeMode: "voice",
  soulMode: "still",
  spoilerMode: "protect",
  starIntensity: "balanced",
  theme: "crimson",
  tier: "ascended",
  volume: 5,
};

const VOLUME_ENDS = [95, 350, 600, 750, 1060, 1230, 1590, 1840, 2260, 2720, 3000, 3127];

function volumeForChapter(chapter: number): number {
  const volumeIndex = VOLUME_ENDS.findIndex((endChapter) => chapter <= endChapter);
  return volumeIndex === -1 ? VOLUME_ENDS.length : volumeIndex + 1;
}

function dateGroupFor(createdAt?: string): LabThread["dateGroup"] {
  if (!createdAt) {
    return "This week";
  }
  const created = new Date(createdAt);
  if (Number.isNaN(created.getTime())) {
    return "This week";
  }
  const ageInDays = Math.floor((Date.now() - created.getTime()) / 86_400_000);
  if (ageInDays <= 0) {
    return "Today";
  }
  if (ageInDays === 1) {
    return "Yesterday";
  }
  return "This week";
}

function toApiPreferences(preferences: LabPreferences): UserPreferences {
  return {
    reader_chapter: preferences.chapter,
    spoiler_mode: preferences.spoilerMode,
    tier: preferences.tier,
  };
}

export function SpellSurfaceChatApp({
  api,
  modeLabel,
  privacyLabel,
}: SpellSurfaceChatAppProps) {
  const chat = useChatController(api, weaverProduct);
  const [preferences, setPreferences] = useState(INITIAL_PREFERENCES);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [railOpen, setRailOpen] = useState(false);
  const [desktopRailCollapsed, setDesktopRailCollapsed] = useState(false);
  const [archivedOpen, setArchivedOpen] = useState(false);
  const [archivedIds, setArchivedIds] = useState<Set<string>>(new Set());
  const [pinnedIds, setPinnedIds] = useState<Set<string>>(new Set());
  const [threadNames, setThreadNames] = useState<Map<string, string>>(new Map());
  const [passageHandle, setPassageHandle] = useState<string | null>(null);
  const [soulState, setSoulState] = useState<SoulSeaState>("idle");
  const [announcement, setAnnouncement] = useState("[The Spell listens.]");
  const [announcementKey, setAnnouncementKey] = useState(0);
  const [coreWakeKey, setCoreWakeKey] = useState(0);
  const composerRef = useRef<HTMLTextAreaElement>(null);
  const transcriptRef = useRef<HTMLDivElement>(null);
  const previousTurnActive = useRef(false);
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
      if (event.key === "Escape") {
        setSettingsOpen(false);
        setRailOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  useEffect(() => {
    const transcript = transcriptRef.current;
    if (transcript) {
      transcript.scrollTop = transcript.scrollHeight;
    }
  }, [chat.activity, chat.messages, chat.recoveryMessage]);

  useEffect(() => {
    if (chat.turnActive) {
      previousTurnActive.current = true;
      setSoulState(chat.activity.length > 0 ? "weaving" : "rippling");
      return;
    }
    if (!previousTurnActive.current) {
      return;
    }
    previousTurnActive.current = false;
    setSoulState("complete");
    announce("[The weave is complete.]");
    if (completionTimer.current) {
      window.clearTimeout(completionTimer.current);
    }
    completionTimer.current = window.setTimeout(() => setSoulState("idle"), 900);
  }, [chat.activity.length, chat.turnActive]);

  useEffect(() => {
    const activity = chat.activity.at(-1);
    if (!activity) {
      return;
    }
    announce(activityAnnouncement(activity));
  }, [chat.activity]);

  useEffect(() => () => {
    if (completionTimer.current) {
      window.clearTimeout(completionTimer.current);
    }
  }, []);

  function announce(message: string) {
    setAnnouncement(message);
    setAnnouncementKey((current) => current + 1);
    setCoreWakeKey((current) => current + 1);
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
      return;
    }
    setDesktopRailCollapsed(true);
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
    setSoulState("rippling");
    announce("[The Spell is weaving an answer.]");
    void chat.sendMessage(message);
  }

  function regenerateReply() {
    setSoulState("weaving");
    announce("[The Spell takes up the thread once more.]");
    chat.regenerateReply();
  }

  const readerStatus = `Vol ${preferences.volume} · ch ${preferences.chapter} · ${preferences.tier}`;
  const threadAlpha = preferences.starIntensity === "quiet"
    ? 0.2
    : preferences.starIntensity === "vivid"
      ? 0.56
      : 0.36;
  const liveActivity = chat.activity.at(-1) ?? null;

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
      <SpellBackground className="lab-spell-background" mode="alive" threadAlpha={threadAlpha} />
      <div aria-hidden="true" className="lab-galactic-band" />
      <div aria-hidden="true" className="lab-purple-depth" />
      <div aria-hidden="true" className="lab-star-flare flare-one" />
      <div aria-hidden="true" className="lab-star-flare flare-two" />
      <div aria-hidden="true" className="lab-core-wake" key={coreWakeKey}><span /><span /></div>

      <SpellSurfaceSoulSea mode={preferences.soulMode} state={soulState} />

      <SpellSurfaceRail
        activeThreadId={chat.conversationId ?? ""}
        archivedOpen={archivedOpen}
        collapsed={desktopRailCollapsed}
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

      <main className="lab-chat-main">
        <div className="lab-chat-controls">
          <button aria-label="Open threads" className="lab-mobile-rail" onClick={openRail} type="button">
            <RailOpenIcon />
          </button>
          <span className="lab-live-mode">{modeLabel}</span>
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
                activity={message.streaming ? liveActivity : null}
                assistantName={weaverProduct.assistantName}
                key={message.id}
                message={message}
                onQuote={(quote) => {
                  chat.setDraft(`"${quote}" `);
                  composerRef.current?.focus();
                }}
                onRegenerate={
                  message.id === chat.liveReplyId && chat.turnState === "idle"
                    ? regenerateReply
                    : undefined
                }
                onViewPassage={setPassageHandle}
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
          />
          <p><span /> {privacyLabel}</p>
        </footer>
      </main>

      {railOpen && <button aria-label="Close thread drawer" className="lab-rail-scrim" onClick={() => setRailOpen(false)} type="button" />}

      {settingsOpen && (
        <SpellSurfaceSettings
          initial={preferences}
          onClose={() => setSettingsOpen(false)}
          onSave={(nextPreferences) => {
            setPreferences(nextPreferences);
            setSettingsOpen(false);
            announce("[Your soul answers the change.]");
            void api.savePreferences(toApiPreferences(nextPreferences));
          }}
        />
      )}

      {passageHandle && (
        <PassageModal
          handle={passageHandle}
          loadPassage={chat.loadPassage}
          onClose={() => setPassageHandle(null)}
        />
      )}
    </div>
  );
}

function activityAnnouncement(activity: ToolActivity): string {
  const action = activity.status === "start" ? activity.detail || activity.name : "done";
  return `[The Spell is ${action}.]`;
}
