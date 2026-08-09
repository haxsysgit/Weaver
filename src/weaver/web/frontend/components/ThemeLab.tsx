import { useEffect, useRef, useState, type FormEvent } from "react";

import {
  ArrowUpIcon,
  CopyIcon,
  RailOpenIcon,
  RegenerateIcon,
  SettingsIcon,
} from "./Icons";
import { SpellBackground } from "./SpellBackground";
import {
  SpellSurfaceRail,
  type LabThread,
} from "./SpellSurfaceRail";
import { SpellSurfaceRunes } from "./SpellSurfaceRunes";
import {
  SpellSurfaceSettings,
  type LabPreferences,
} from "./SpellSurfaceSettings";
import { SpellSurfaceSoulSea, type SoulSeaState } from "./SpellSurfaceSoulSea";
import { WeaverMark } from "./WeaverMark";
import "../styles/spell-surface-lab.css";

interface LabMessage {
  content: string;
  id: string;
  role: "owner" | "weaver";
}

const INITIAL_THREADS: LabThread[] = [
  {
    archived: false,
    dateGroup: "Today",
    id: "ariel-tomb",
    pinned: true,
    preview: "people online keep saying Ariel one-shotted an Unholy Titan...",
    title: "Ariel and the Tomb",
    volume: null,
  },
  {
    archived: false,
    dateGroup: "Today",
    id: "sunny-azarax",
    pinned: false,
    preview: "could current Sunny comfortably beat Azarax in his prime?",
    title: "Sunny vs Azarax",
    volume: null,
  },
  {
    archived: false,
    dateGroup: "Yesterday",
    id: "anvil-what-if",
    pinned: false,
    preview: "what if Anvil of Valor entered Effie's Fourth Nightmare?",
    title: "Anvil against Azarax",
    volume: null,
  },
  {
    archived: false,
    dateGroup: "This week",
    id: "memory-spheres",
    pinned: false,
    preview: "memory lights circling a lonely soul core",
    title: "Memory spheres · ch 47",
    volume: 1,
  },
  {
    archived: true,
    dateGroup: "This week",
    id: "seven-suns",
    pinned: false,
    preview: "a later Soul Sea state, hidden while spoiler protection is active",
    title: "Later Soul Sea state",
    volume: 11,
  },
];

const INITIAL_MESSAGES: LabMessage[] = [
  {
    content: "people online keep saying Ariel one-shotted an Unholy Titan, but I remember a stalemate. what actually happened?",
    id: "opening-owner",
    role: "owner",
  },
  {
    content: "Your memory contains a few separate claims, so I would verify each one before taking a side: the length of the fight, what Ariel said, the killing blow, and how the Tomb was made. This surface is only a visual lab, so it stops here instead of inventing the answer.",
    id: "opening-weaver",
    role: "weaver",
  },
];

const INITIAL_PREFERENCES: LabPreferences = {
  chapter: 1000,
  density: "comfortable",
  fontSize: "medium",
  glass: "subtle",
  runeMode: "voice",
  soulMode: "still",
  spoilerMode: "protect",
  starIntensity: "balanced",
  tier: "ascended",
  volume: 5,
};

function makeMessageId(prefix: string): string {
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export function ThemeLab() {
  const [preferences, setPreferences] = useState(INITIAL_PREFERENCES);
  const [threads, setThreads] = useState(INITIAL_THREADS);
  const [activeThreadId, setActiveThreadId] = useState("ariel-tomb");
  const [archivedOpen, setArchivedOpen] = useState(false);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [draft, setDraft] = useState("");
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [railOpen, setRailOpen] = useState(false);
  const [desktopRailCollapsed, setDesktopRailCollapsed] = useState(false);
  const [weaving, setWeaving] = useState(false);
  const [soulState, setSoulState] = useState<SoulSeaState>("idle");
  const [announcement, setAnnouncement] = useState("[The Spell listens.]");
  const [announcementKey, setAnnouncementKey] = useState(0);
  const [coreWakeKey, setCoreWakeKey] = useState(0);
  const [freshThread, setFreshThread] = useState(false);
  const composerRef = useRef<HTMLTextAreaElement>(null);
  const transcriptRef = useRef<HTMLDivElement>(null);
  const timersRef = useRef<number[]>([]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.ctrlKey && event.key === ",") {
        event.preventDefault();
        setSettingsOpen(true);
      }
      if (event.key === "Escape") {
        setSettingsOpen(false);
        setRailOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const transcript = transcriptRef.current;
    if (transcript) {
      transcript.scrollTop = transcript.scrollHeight;
    }
  }, [messages, weaving]);

  useEffect(() => () => {
    for (const timer of timersRef.current) {
      window.clearTimeout(timer);
    }
  }, []);

  function announce(message: string) {
    setAnnouncement(message);
    setAnnouncementKey((current) => current + 1);
    setCoreWakeKey((current) => current + 1);
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

  function schedule(callback: () => void, delay: number) {
    const timer = window.setTimeout(callback, delay);
    timersRef.current.push(timer);
  }

  function selectThread(threadId: string) {
    setActiveThreadId(threadId);
    setFreshThread(false);
    setMessages(INITIAL_MESSAGES);
    setRailOpen(false);
    announce("[The thread is recalled.]");
  }

  function createThread() {
    setActiveThreadId("");
    setMessages([]);
    setFreshThread(true);
    setRailOpen(false);
    announce("[An empty thread waits in the void.]");
    schedule(() => composerRef.current?.focus(), 0);
  }

  function renameThread(threadId: string, title: string) {
    setThreads((current) => current.map((thread) => (
      thread.id === threadId ? { ...thread, title } : thread
    )));
    announce("[The thread accepts a new name.]");
  }

  function pinThread(threadId: string) {
    setThreads((current) => current.map((thread) => (
      thread.id === threadId ? { ...thread, pinned: !thread.pinned } : thread
    )));
    announce("[The Spell holds the thread close.]");
  }

  function archiveThread(threadId: string) {
    setThreads((current) => current.map((thread) => (
      thread.id === threadId ? { ...thread, archived: !thread.archived } : thread
    )));
    announce(archivedOpen ? "[The thread returns from silence.]" : "[The thread sinks into silence.]");
  }

  function deleteThread(threadId: string) {
    setThreads((current) => current.filter((thread) => thread.id !== threadId));
    if (activeThreadId === threadId) {
      createThread();
    }
    announce("[The thread is unmade.]");
  }

  function openSettings() {
    setSettingsOpen(true);
    announce("[The sea within opens.]");
  }

  function sendMessage(event?: FormEvent) {
    event?.preventDefault();
    const message = draft.trim();
    if (!message || weaving) {
      return;
    }

    setDraft("");
    setWeaving(true);
    setSoulState("rippling");
    setMessages((current) => [
      ...current,
      { content: message, id: makeMessageId("owner"), role: "owner" },
    ]);
    announce(freshThread ? "[The Spell has noticed a new soul.]" : "[The Spell is weaving an answer.]");

    schedule(() => setSoulState("weaving"), 180);
    schedule(() => {
      setMessages((current) => [
        ...current,
        {
          content: "This lab keeps the answer source-grounded by refusing to fake canon. In the real chat, Weaver would reread the relevant chapters, show what is confirmed, and keep interpretation separate.",
          id: makeMessageId("weaver"),
          role: "weaver",
        },
      ]);
      setFreshThread(false);
      setWeaving(false);
      setSoulState("complete");
      announce("[The weave is complete.]");
      schedule(() => setSoulState("idle"), 900);
    }, 900);
  }

  function regenerateReply() {
    setWeaving(true);
    setSoulState("weaving");
    announce("[The Spell takes up the thread once more.]");
    schedule(() => {
      setWeaving(false);
      setSoulState("complete");
      announce("[The weave is complete.]");
      schedule(() => setSoulState("idle"), 900);
    }, 900);
  }

  const readerStatus = `Vol ${preferences.volume} · ch ${preferences.chapter} · ${preferences.tier}`;
  const threadAlpha = preferences.starIntensity === "quiet"
    ? 0.2
    : preferences.starIntensity === "vivid"
      ? 0.56
      : 0.36;

  return (
    <div
      className={[
        "spell-surface-lab",
        railOpen ? "lab-rail-open" : "",
        desktopRailCollapsed ? "lab-desktop-rail-collapsed" : "",
      ].filter(Boolean).join(" ")}
      data-density={preferences.density}
      data-font-size={preferences.fontSize}
      data-glass={preferences.glass}
      data-runes={preferences.runeMode}
      data-soul={preferences.soulMode}
      data-star-intensity={preferences.starIntensity}
      data-testid="spell-surface-lab"
    >
      <SpellBackground className="lab-spell-background" mode="alive" threadAlpha={threadAlpha} />
      <div aria-hidden="true" className="lab-galactic-band" />
      <div aria-hidden="true" className="lab-purple-depth" />
      <div aria-hidden="true" className="lab-star-flare flare-one" />
      <div aria-hidden="true" className="lab-star-flare flare-two" />
      <div aria-hidden="true" className="lab-core-wake" key={coreWakeKey}><span /><span /></div>

      <SpellSurfaceSoulSea mode={preferences.soulMode} state={soulState} />

      <SpellSurfaceRail
        activeThreadId={activeThreadId}
        archivedOpen={archivedOpen}
        collapsed={desktopRailCollapsed}
        onArchive={archiveThread}
        onClose={closeRail}
        onCreate={createThread}
        onDelete={deleteThread}
        onOpen={openRail}
        onOpenSettings={openSettings}
        onPin={pinThread}
        onRename={renameThread}
        onSelect={selectThread}
        onSetArchivedOpen={setArchivedOpen}
        readerStatus={readerStatus}
        threads={threads}
      />

      <main className="lab-chat-main">
        <div className="lab-chat-controls">
          <button aria-label="Open threads" className="lab-mobile-rail" onClick={openRail} type="button">
            <RailOpenIcon />
          </button>
          <button aria-label="Open Soul Sea settings from header" className="lab-header-settings" onClick={openSettings} type="button"><SettingsIcon /></button>
        </div>

        <div className="lab-transcript" ref={transcriptRef}>
          <div className="lab-transcript-column">
            {messages.length === 0 && (
              <section className="lab-empty-weave">
                <span className="lab-empty-mark"><WeaverMark /></span>
                <p>[An empty thread trembles in the void.]</p>
                <h1>What are we reading?</h1>
                <span>ask about canon, argue a take, or bend the story into a what-if</span>
              </section>
            )}
            {messages.map((message) => (
              <article className={`lab-message lab-message-${message.role}`} key={message.id}>
                {message.role === "weaver" && <span className="lab-weaver-mark"><WeaverMark compact /></span>}
                <div className="lab-message-body">
                  {message.role === "weaver" && <small>weaver</small>}
                  <p>{message.content}</p>
                  <div className="lab-message-actions">
                    <button aria-label={`Copy ${message.role} message`} type="button"><CopyIcon /><span>copy</span></button>
                    {message.role === "weaver" && <button aria-label="Regenerate reply" onClick={regenerateReply} type="button"><RegenerateIcon /><span>weave again</span></button>}
                  </div>
                </div>
              </article>
            ))}
            {weaving && (
              <article className="lab-message lab-message-weaver lab-message-weaving">
                <span className="lab-weaver-mark"><WeaverMark compact /></span>
                <div className="lab-message-body">
                  <small>weaver</small>
                  <p className="lab-weaving-line"><span /><span /><span /></p>
                </div>
              </article>
            )}
          </div>
        </div>

        <SpellSurfaceRunes announcement={announcement} eventKey={announcementKey} mode={preferences.runeMode} />

        <footer className="lab-composer-dock">
          <form className="lab-composer" onSubmit={sendMessage}>
            <textarea
              aria-label="Message Weaver"
              disabled={weaving}
              onChange={(event) => setDraft(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter" && !event.shiftKey) {
                  event.preventDefault();
                  sendMessage();
                }
              }}
              placeholder="weave a question into the Spell..."
              ref={composerRef}
              rows={1}
              value={draft}
            />
            <span className="lab-tier-pill">{preferences.tier}</span>
            <button aria-label="Send message" disabled={!draft.trim() || weaving} type="submit"><ArrowUpIcon /></button>
          </form>
          <p><span /> everything stays on this machine</p>
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
          }}
        />
      )}
    </div>
  );
}
