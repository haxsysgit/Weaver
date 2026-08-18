import { useEffect, useMemo, useRef, useState } from "react";

import {
  ArchiveIcon,
  ChevronDownIcon,
  EditIcon,
  PinIcon,
  PlusIcon,
  RailCloseIcon,
  RailOpenIcon,
  SettingsIcon,
  ThreadIcon,
  TrashIcon,
} from "./Icons";
import { WeaverMark } from "./WeaverMark";

export interface LabThread {
  archived: boolean;
  dateGroup: "Today" | "Yesterday" | "Others";
  id: string;
  pinned: boolean;
  preview: string;
  title: string;
  volume: number | null;
}

type ThreadGrouping = "date" | "flat" | "volume";

interface ThreadGroup {
  label: string | null;
  threads: LabThread[];
}

const DATE_GROUPS: LabThread["dateGroup"][] = ["Today", "Yesterday", "Others"];

const GROUPING_OPTIONS: Array<{
  description: string;
  label: string;
  value: ThreadGrouping;
}> = [
  { description: "Today, yesterday, and older threads", label: "By date", value: "date" },
  { description: "Every thread together", label: "In one list", value: "flat" },
  { description: "Use the Shadow Slave volume", label: "By volume", value: "volume" },
];

const NOVEL_SHELVES = [
  { active: true, label: "Shadow Slave" },
  { active: false, label: "Kill the Sun" },
  { active: false, label: "Lord of the Mysteries" },
];

function groupThreads(threads: LabThread[], grouping: ThreadGrouping): ThreadGroup[] {
  if (grouping === "flat") {
    return [{ label: null, threads }];
  }

  if (grouping === "date") {
    return DATE_GROUPS.map((label) => ({
      label,
      threads: threads.filter((thread) => thread.dateGroup === label),
    }));
  }

  const groups = new Map<string, LabThread[]>();
  for (const thread of threads) {
    const label = thread.volume == null
      ? "Volume unknown"
      : `Vol ${thread.volume}`;
    const groupedThreads = groups.get(label) ?? [];
    groups.set(label, [...groupedThreads, thread]);
  }

  return [...groups.entries()].map(([label, groupedThreads]) => ({
    label,
    threads: groupedThreads,
  }));
}

interface SpellSurfaceRailProps {
  activeThreadId: string;
  archivedOpen: boolean;
  collapsed: boolean;
  drawerOpen: boolean;
  onArchive: (threadId: string) => void;
  onClose: () => void;
  onCreate: () => void;
  onDelete: (threadId: string) => void;
  onOpen: () => void;
  onOpenSettings: () => void;
  onPin: (threadId: string) => void;
  onRename: (threadId: string, title: string) => void;
  onSelect: (threadId: string) => void;
  onSetArchivedOpen: (open: boolean) => void;
  readerStatus: string;
  threads: LabThread[];
}

export function SpellSurfaceRail({
  activeThreadId,
  archivedOpen,
  collapsed,
  drawerOpen,
  onArchive,
  onClose,
  onCreate,
  onDelete,
  onOpen,
  onOpenSettings,
  onPin,
  onRename,
  onSelect,
  onSetArchivedOpen,
  readerStatus,
  threads,
}: SpellSurfaceRailProps) {
  const [renamingId, setRenamingId] = useState<string | null>(null);
  const [renameDraft, setRenameDraft] = useState("");
  const [confirmingDelete, setConfirmingDelete] = useState<string | null>(null);
  const [grouping, setGrouping] = useState<ThreadGrouping>("date");
  const [groupingMenuOpen, setGroupingMenuOpen] = useState(false);
  const [collapsedGroups, setCollapsedGroups] = useState<Set<string>>(
    () => new Set(["Yesterday", "Others"]),
  );
  const [mobileLayout, setMobileLayout] = useState(() => {
    return window.matchMedia("(max-width: 767px)").matches;
  });
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    function syncMobileLayout(event: MediaQueryListEvent) {
      setMobileLayout(event.matches);
    }

    setMobileLayout(mediaQuery.matches);
    mediaQuery.addEventListener("change", syncMobileLayout);
    return () => mediaQuery.removeEventListener("change", syncMobileLayout);
  }, []);

  useEffect(() => {
    if (mobileLayout && drawerOpen) {
      closeButtonRef.current?.focus();
    }
  }, [drawerOpen, mobileLayout]);

  const visibleThreads = useMemo(() => {
    return threads
      .filter((thread) => thread.archived === archivedOpen)
      .sort((left, right) => Number(right.pinned) - Number(left.pinned));
  }, [archivedOpen, threads]);
  const threadGroups = groupThreads(visibleThreads, grouping);
  const archivedCount = threads.filter((thread) => thread.archived).length;
  const railVisible = mobileLayout ? drawerOpen : !collapsed;
  const railOperable = mobileLayout ? drawerOpen : true;

  function startRename(thread: LabThread) {
    setRenamingId(thread.id);
    setRenameDraft(thread.title);
  }

  function commitRename(threadId: string) {
    const nextTitle = renameDraft.trim();
    if (nextTitle) {
      onRename(threadId, nextTitle);
    }
    setRenamingId(null);
  }

  function requestDelete(threadId: string) {
    if (confirmingDelete === threadId) {
      onDelete(threadId);
      setConfirmingDelete(null);
      return;
    }
    setConfirmingDelete(threadId);
    window.setTimeout(() => {
      setConfirmingDelete((current) => current === threadId ? null : current);
    }, 3000);
  }

  function toggleGroup(groupLabel: string) {
    setCollapsedGroups((current) => {
      const next = new Set(current);
      if (next.has(groupLabel)) {
        next.delete(groupLabel);
      } else {
        next.add(groupLabel);
      }
      return next;
    });
  }

  function renderThread(thread: LabThread) {
    const active = thread.id === activeThreadId;
    return (
      <li className={`lab-thread-row ${active ? "active" : ""}`} data-testid={`thread-${thread.id}`} key={thread.id}>
        <div className="lab-thread-main">
          {renamingId === thread.id ? (
            <span className="lab-thread-copy">
              <input
                aria-label="Rename thread"
                autoFocus
                onBlur={() => commitRename(thread.id)}
                onChange={(event) => setRenameDraft(event.target.value)}
                onClick={(event) => event.stopPropagation()}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    commitRename(thread.id);
                  }
                  if (event.key === "Escape") {
                    setRenamingId(null);
                  }
                }}
                value={renameDraft}
              />
            </span>
          ) : (
            <button
              aria-current={active ? "page" : undefined}
              className="lab-thread-select"
              onClick={() => onSelect(thread.id)}
              type="button"
            >
              <span className="lab-thread-copy">
                <strong>{thread.title}</strong>
              </span>
            </button>
          )}
          {confirmingDelete === thread.id && (
            <span className="lab-delete-confirm">[unmake? click again]</span>
          )}
        </div>
        <div className="lab-thread-actions">
          <button aria-label={`${thread.pinned ? "Unpin" : "Pin"} ${thread.title}`} onClick={() => onPin(thread.id)} type="button">
            <PinIcon />
          </button>
          <button aria-label={`Rename ${thread.title}`} onClick={() => startRename(thread)} type="button">
            <EditIcon />
          </button>
          <button aria-label={`${thread.archived ? "Restore" : "Archive"} ${thread.title}`} onClick={() => onArchive(thread.id)} type="button">
            <ArchiveIcon />
          </button>
          <button
            aria-label={`Delete ${thread.title}`}
            className={confirmingDelete === thread.id ? "confirming" : ""}
            onClick={() => requestDelete(thread.id)}
            type="button"
          >
            <TrashIcon />
          </button>
        </div>
      </li>
    );
  }

  return (
    <aside
      aria-hidden={!railOperable}
      aria-label={mobileLayout ? "Threads" : undefined}
      aria-modal={mobileLayout && drawerOpen ? true : undefined}
      className="lab-rail"
      id="spell-surface-rail"
      inert={!railOperable}
      role={mobileLayout ? "dialog" : undefined}
    >
      <header className="lab-brand">
        <span className="lab-brand-mark"><WeaverMark compact /></span>
        <span><strong>weaver</strong></span>
        <button
          aria-label={railVisible ? "Close threads" : "Open threads"}
          className="lab-rail-close"
          onClick={railVisible ? onClose : onOpen}
          ref={closeButtonRef}
          type="button"
        >
          {railVisible ? <RailCloseIcon /> : <RailOpenIcon />}
        </button>
      </header>

      <button aria-label="Start a new weave" className="lab-new-thread" onClick={onCreate} type="button">
        <PlusIcon />
        <span>New Weave</span>
      </button>

      <div className="lab-rail-scroll">
        <section className="lab-chat-section">
          <header className="lab-rail-section-head">
            <h2>Chats</h2>
            <div className="lab-grouping-picker">
              <button
                aria-expanded={groupingMenuOpen}
                aria-haspopup="menu"
                aria-label="Organize chats"
                onClick={() => setGroupingMenuOpen((open) => !open)}
                type="button"
              >
                {GROUPING_OPTIONS.find((option) => option.value === grouping)?.label}
                <ChevronDownIcon />
              </button>
              {groupingMenuOpen && (
                <div aria-label="Organize threads" className="lab-grouping-menu" role="menu">
                  <p>Organize threads</p>
                  {GROUPING_OPTIONS.map((option) => (
                    <button
                      aria-checked={grouping === option.value}
                      key={option.value}
                      onClick={() => {
                        setGrouping(option.value);
                        setGroupingMenuOpen(false);
                      }}
                      role="menuitemradio"
                      type="button"
                    >
                      <span aria-hidden="true">{grouping === option.value ? "✓" : ""}</span>
                      <strong>{option.label}</strong>
                      <small>{option.description}</small>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </header>

          <nav aria-label="Threads" className="lab-thread-list">
            {threadGroups.map((group) => {
              const groupLabel = group.label;
              const groupCollapsed = groupLabel
                ? collapsedGroups.has(groupLabel)
                : false;
              return (
                <section className="lab-thread-group" key={groupLabel ?? "all"}>
                  {groupLabel && (
                    <button
                      aria-expanded={!groupCollapsed}
                      className="lab-thread-group-toggle"
                      onClick={() => toggleGroup(groupLabel)}
                      type="button"
                    >
                      <span>{groupLabel}</span>
                      <small>{group.threads.length}</small>
                      <ChevronDownIcon />
                    </button>
                  )}
                  <div
                    aria-hidden={groupCollapsed}
                    className={`lab-thread-group-body ${groupCollapsed ? "collapsed" : ""}`}
                  >
                    <div>
                      <ul className="lab-thread-flat-list">{group.threads.map(renderThread)}</ul>
                    </div>
                  </div>
                </section>
              );
            })}
            {visibleThreads.length === 0 && (
              <div className="lab-thread-empty">
                <span aria-hidden="true" />
                <p>[No threads answer the call.]</p>
              </div>
            )}
          </nav>
        </section>

        <section aria-label="Novels" className="lab-novel-library">
          <header className="lab-rail-section-head">
            <h2>Library</h2>
            <small>novels</small>
          </header>
          <div className="lab-novel-list">
            {NOVEL_SHELVES.map((novel) => (
              <button
                aria-current={novel.active ? "page" : undefined}
                aria-disabled={!novel.active}
                className={novel.active ? "active" : "upcoming"}
                key={novel.label}
                type="button"
              >
                <ThreadIcon />
                <span><strong>{novel.label}</strong><small>{novel.active ? "current shelf" : "upcoming"}</small></span>
              </button>
            ))}
          </div>
        </section>
      </div>

      <button
        aria-expanded={archivedOpen}
        className="lab-archive-toggle"
        onClick={() => onSetArchivedOpen(!archivedOpen)}
        type="button"
      >
        <ArchiveIcon />
        <span>Archived</span>
        <em>{archivedCount}</em>
      </button>

      <footer className="lab-rail-footer">
        <button
          aria-label="Model and key settings"
          className="lab-key-status"
          onClick={onOpenSettings}
          type="button"
        >
          <span aria-hidden="true" className="lab-key-status-dot" />
          <span>
            <strong>Model &amp; key</strong>
            <small>open settings</small>
          </span>
        </button>
        <button aria-label="Open Soul Sea settings" onClick={onOpenSettings} type="button">
          <SettingsIcon />
          <span><strong>Settings</strong><small>{readerStatus} · runes · appearance</small></span>
        </button>
      </footer>
    </aside>
  );
}
