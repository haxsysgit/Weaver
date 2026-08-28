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
  TrashIcon,
  UnpinIcon,
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

type ThreadGrouping = "date" | "flat";

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

  return [];
}

interface ThreadArchiveProps {
  actionError: string | null;
  activeThreadId: string;
  archivedOpen: boolean;
  collapsed: boolean;
  drawerOpen: boolean;
  onArchive: (threadId: string) => Promise<boolean | void> | boolean | void;
  onClose: () => void;
  onCreate: () => void;
  onDelete: (threadId: string) => Promise<boolean | void> | boolean | void;
  onOpen: () => void;
  onOpenSettings: () => void;
  onPin: (threadId: string) => Promise<boolean | void> | boolean | void;
  onRename: (threadId: string, title: string) => Promise<boolean | void> | boolean | void;
  onSelect: (threadId: string) => void;
  onSetArchivedOpen: (open: boolean) => void;
  readerStatus: string;
  threads: LabThread[];
}

export function ThreadArchive({
  actionError,
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
}: ThreadArchiveProps) {
  const [renamingId, setRenamingId] = useState<string | null>(null);
  const [renameDraft, setRenameDraft] = useState("");
  const [confirmingDelete, setConfirmingDelete] = useState<string | null>(null);
  const [actionsOpenId, setActionsOpenId] = useState<string | null>(null);
  const [pendingIds, setPendingIds] = useState<Set<string>>(() => new Set());
  const [grouping, setGrouping] = useState<ThreadGrouping>("date");
  const [groupingMenuOpen, setGroupingMenuOpen] = useState(false);
  const [collapsedGroups, setCollapsedGroups] = useState<Set<string>>(
    () => new Set(),
  );
  const [mobileLayout, setMobileLayout] = useState(() => {
    return window.matchMedia("(max-width: 767px)").matches;
  });
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const railRef = useRef<HTMLElement>(null);
  const deleteButtonRefs = useRef(new Map<string, HTMLButtonElement>());
  const newWeaveRef = useRef<HTMLButtonElement>(null);
  const threadButtonRefs = useRef(new Map<string, HTMLButtonElement>());

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

  const pinnedThreads = useMemo(() => {
    return threads.filter((thread) => !thread.archived && thread.pinned);
  }, [threads]);
  const activeThreads = useMemo(() => {
    return threads.filter((thread) => !thread.archived && !thread.pinned);
  }, [threads]);
  const archivedThreads = useMemo(() => {
    return threads.filter((thread) => thread.archived);
  }, [threads]);
  const threadGroups = groupThreads(activeThreads, grouping);
  const archivedCount = threads.filter((thread) => thread.archived).length;
  const railVisible = mobileLayout ? drawerOpen : !collapsed;
  const railOperable = mobileLayout ? drawerOpen : true;

  function startRename(thread: LabThread) {
    setRenamingId(thread.id);
    setRenameDraft(thread.title);
  }

  async function runMutation(
    threadId: string,
    mutation: () => Promise<boolean | void> | boolean | void,
  ) {
    if (pendingIds.has(threadId)) {
      return false;
    }
    setPendingIds((current) => new Set(current).add(threadId));
    try {
      return (await mutation()) !== false;
    } finally {
      setPendingIds((current) => {
        const next = new Set(current);
        next.delete(threadId);
        return next;
      });
    }
  }

  async function commitRename(threadId: string) {
    const nextTitle = renameDraft.trim();
    if (!nextTitle) {
      return;
    }
    const updated = await runMutation(threadId, () => onRename(threadId, nextTitle));
    if (updated) {
      setRenamingId(null);
    }
  }

  function requestDelete(threadId: string) {
    setConfirmingDelete(threadId);
  }

  function cancelDelete(threadId: string) {
    setConfirmingDelete(null);
    window.setTimeout(() => deleteButtonRefs.current.get(threadId)?.focus(), 0);
  }

  async function confirmDelete(threadId: string) {
    const deleted = await runMutation(threadId, () => onDelete(threadId));
    if (deleted) {
      setConfirmingDelete(null);
      const visibleThreads = archivedOpen
        ? archivedThreads
        : [...pinnedThreads, ...activeThreads];
      const deletedIndex = visibleThreads.findIndex(
        (thread) => thread.id === threadId,
      );
      const nextThread =
        visibleThreads[deletedIndex + 1] ?? visibleThreads[deletedIndex - 1];
      window.setTimeout(() => {
        if (nextThread) {
          threadButtonRefs.current.get(nextThread.id)?.focus();
          return;
        }
        newWeaveRef.current?.focus();
      }, 0);
    }
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
    const deleteOpen = confirmingDelete === thread.id;
    const pinAction = thread.pinned ? "Unpin" : "Pin";
    const archiveAction = thread.archived ? "Restore" : "Archive";
    const actionsOpen = actionsOpenId === thread.id;
    return (
      <li
        className={[
          "lab-thread-row",
          active ? "active" : "",
          deleteOpen ? "delete-open" : "",
          actionsOpen ? "actions-open" : "",
        ].filter(Boolean).join(" ")}
        data-testid={`thread-${thread.id}`}
        key={thread.id}
      >
        <div className="lab-thread-main">
          {renamingId === thread.id ? (
            <span className="lab-thread-copy">
              <input
                aria-label="Rename thread"
                autoFocus
                maxLength={80}
                onBlur={() => void commitRename(thread.id)}
                onChange={(event) => setRenameDraft(event.target.value)}
                onClick={(event) => event.stopPropagation()}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    void commitRename(thread.id);
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
              ref={(button) => {
                if (button) {
                  threadButtonRefs.current.set(thread.id, button);
                }
              }}
              type="button"
            >
              <span className="lab-thread-copy">
                <strong>{thread.title}</strong>
              </span>
            </button>
          )}
        </div>
        <button
          aria-expanded={actionsOpen}
          aria-label={`Thread actions for ${thread.title}`}
          className="lab-thread-actions-trigger"
          onClick={() => setActionsOpenId(actionsOpen ? null : thread.id)}
          type="button"
        >
          <span aria-hidden="true">...</span>
        </button>
        <div className="lab-thread-actions">
          <button
            aria-label={`${pinAction} ${thread.title}`}
            aria-pressed={thread.pinned}
            className={thread.pinned ? "pinned" : undefined}
            disabled={pendingIds.has(thread.id)}
            onClick={() => {
              setActionsOpenId(null);
              void runMutation(thread.id, () => onPin(thread.id));
            }}
            title={pinAction}
            type="button"
          >
            {thread.pinned ? <UnpinIcon /> : <PinIcon />}
          </button>
          <button
            aria-label={`Rename ${thread.title}`}
            disabled={pendingIds.has(thread.id)}
            onClick={() => {
              setActionsOpenId(null);
              startRename(thread);
            }}
            title="Rename"
            type="button"
          >
            <EditIcon />
          </button>
          <button
            aria-label={`${archiveAction} ${thread.title}`}
            disabled={pendingIds.has(thread.id)}
            onClick={() => {
              setActionsOpenId(null);
              void runMutation(thread.id, () => onArchive(thread.id));
            }}
            title={archiveAction}
            type="button"
          >
            <ArchiveIcon />
          </button>
          <button
            aria-label={`Delete ${thread.title}`}
            disabled={pendingIds.has(thread.id)}
            onClick={() => {
              setActionsOpenId(null);
              requestDelete(thread.id);
            }}
            ref={(button) => {
              if (button) {
                deleteButtonRefs.current.set(thread.id, button);
              }
            }}
            title="Delete"
            type="button"
          >
            <TrashIcon />
          </button>
        </div>
        {deleteOpen && (
          <aside
            aria-label={`Delete ${thread.title}`}
            className="lab-delete-popover"
            role="dialog"
          >
            <strong>Delete thread?</strong>
            <span>{thread.title}</span>
            <div>
              <button
                onClick={() => cancelDelete(thread.id)}
                type="button"
              >
                Cancel
              </button>
              <button
                className="danger"
                disabled={pendingIds.has(thread.id)}
                onClick={() => void confirmDelete(thread.id)}
                type="button"
              >
                {pendingIds.has(thread.id) ? "Deleting..." : "Delete thread"}
              </button>
            </div>
          </aside>
        )}
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
      onKeyDown={(event) => {
        if (!mobileLayout || !drawerOpen || event.key !== "Tab" || !railRef.current) {
          return;
        }
        const focusable = railRef.current.querySelectorAll<HTMLElement>(
          "button:not(:disabled), input:not(:disabled), select:not(:disabled)",
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }}
      ref={railRef}
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

      <button
        aria-label="Start a new weave"
        className="lab-new-thread"
        onClick={onCreate}
        ref={newWeaveRef}
        type="button"
      >
        <PlusIcon />
        <span>New Weave</span>
      </button>

      <div className="lab-rail-scroll">
        {actionError && <p className="lab-archive-error" role="alert">{actionError}</p>}

        {archivedOpen ? (
          <section className="lab-archived-view">
            <header>
              <button onClick={() => onSetArchivedOpen(false)} type="button">
                ‹ Return to active threads
              </button>
              <h2>Archived threads</h2>
              <p>Threads resting outside the active weave.</p>
            </header>
            <nav aria-label="Archived threads" className="lab-thread-list">
              <ul className="lab-thread-flat-list">
                {archivedThreads.map(renderThread)}
              </ul>
              {archivedThreads.length === 0 && (
                <div className="lab-thread-empty">
                  <span aria-hidden="true" />
                  <p>[No threads have entered the Archive.]</p>
                </div>
              )}
            </nav>
          </section>
        ) : (
          <>
            {pinnedThreads.length > 0 && (
              <section aria-label="Pinned threads" className="lab-pinned-section">
                <header className="lab-rail-section-head">
                  <h2>Pinned</h2>
                  <small>{pinnedThreads.length}</small>
                </header>
                <ul className="lab-thread-flat-list">
                  {pinnedThreads.map(renderThread)}
                </ul>
              </section>
            )}

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

              <nav aria-label="Active threads" className="lab-thread-list">
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
                {activeThreads.length === 0 && (
                  <div className="lab-thread-empty">
                    <span aria-hidden="true" />
                    <p>[No active threads answer the call.]</p>
                  </div>
                )}
              </nav>
            </section>
          </>
        )}
      </div>

      <button
        aria-label={archivedOpen ? "Return to active threads" : `Open archived threads, ${archivedCount}`}
        aria-expanded={archivedOpen}
        aria-current={archivedOpen ? "page" : undefined}
        className="lab-archive-toggle"
        onClick={() => onSetArchivedOpen(!archivedOpen)}
        type="button"
      >
        <ArchiveIcon />
        <span>Archived</span>
        <em>{archivedCount}</em>
      </button>

      <footer className="lab-rail-footer">
        <button aria-label="Open Soul Sea settings" onClick={onOpenSettings} type="button">
          <SettingsIcon />
          <span><strong>Settings</strong><small>{readerStatus} · runes · appearance</small></span>
        </button>
      </footer>
    </aside>
  );
}
