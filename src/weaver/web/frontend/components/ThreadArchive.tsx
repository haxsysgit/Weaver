import { useEffect, useMemo, useRef, useState } from "react";

import {
  ArchiveIcon,
  EditIcon,
  PinIcon,
  PlusIcon,
  SearchIcon,
  SettingsIcon,
  TrashIcon,
  UnpinIcon,
} from "./Icons";
import { WeaverMark } from "./WeaverMark";

export interface LabThread {
  archived: boolean;
  domain: "canon" | "fanfic";
  id: string;
  pinned: boolean;
  preview: string;
  title: string;
  volume: number | null;
}

function pinFirst(threads: LabThread[]): LabThread[] {
  return [...threads].sort((left, right) => Number(right.pinned) - Number(left.pinned));
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
  onCreateFanfic?: () => void;
  newMenuSignal?: number;
  onDelete: (threadId: string) => Promise<boolean | void> | boolean | void;
  onOpen: () => void;
  onOpenSettings: () => void;
  onPin: (threadId: string) => Promise<boolean | void> | boolean | void;
  onRename: (threadId: string, title: string) => Promise<boolean | void> | boolean | void;
  onSelect: (threadId: string) => void;
  onSetArchivedOpen: (open: boolean) => void;
  readerStatus: string;
  startupReady?: boolean;
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
  newMenuSignal = 0,
  onCreate,
  onCreateFanfic,
  onDelete,
  onOpen,
  onOpenSettings,
  onPin,
  onRename,
  onSelect,
  onSetArchivedOpen,
  readerStatus,
  startupReady = true,
  threads,
}: ThreadArchiveProps) {
  const [query, setQuery] = useState("");
  const [newMenuOpen, setNewMenuOpen] = useState(false);
  const [renamingId, setRenamingId] = useState<string | null>(null);
  const [renameDraft, setRenameDraft] = useState("");
  const [confirmingDelete, setConfirmingDelete] = useState<string | null>(null);
  const [actionsOpenId, setActionsOpenId] = useState<string | null>(null);
  const [pendingIds, setPendingIds] = useState<Set<string>>(() => new Set());
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
    if (newMenuSignal > 0) {
      setNewMenuOpen(true);
    }
  }, [newMenuSignal]);

  useEffect(() => {
    if (mobileLayout && drawerOpen) {
      closeButtonRef.current?.focus();
    }
  }, [drawerOpen, mobileLayout]);

  const chats = useMemo(
    () =>
      pinFirst(
        threads.filter((thread) => !thread.archived && thread.domain !== "fanfic"),
      ),
    [threads],
  );
  const fanfic = useMemo(
    () =>
      pinFirst(
        threads.filter((thread) => !thread.archived && thread.domain === "fanfic"),
      ),
    [threads],
  );
  const archivedThreads = useMemo(() => {
    return threads.filter((thread) => thread.archived);
  }, [threads]);
  const archivedCount = archivedThreads.length;
  const needle = query.trim().toLowerCase();
  const matches = (thread: LabThread) =>
    !needle ||
    `${thread.title} ${thread.preview}`.toLowerCase().includes(needle);
  const visibleChats = chats.filter(matches);
  const visibleFanfic = fanfic.filter(matches);
  const railVisible = mobileLayout ? drawerOpen : !collapsed;
  const railOperable = startupReady && (mobileLayout ? drawerOpen : true);

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
        : [...chats, ...fanfic];
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
              aria-label={thread.title}
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
                <small>
                  {thread.preview || (thread.domain === "fanfic" ? "Fanfic" : "Canon")}
                </small>
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
        <button
          aria-label={railVisible ? "Close threads" : "Open threads"}
          className="lab-brand-toggle"
          onClick={railVisible ? onClose : onOpen}
          ref={closeButtonRef}
          type="button"
        >
          <span className="lab-brand-mark"><WeaverMark compact /></span>
          <span><strong>weaver</strong></span>
        </button>
      </header>

      <div className="lab-new-wrap">
        <button
          aria-expanded={newMenuOpen}
          aria-haspopup="menu"
          aria-label="Start a new weave"
          className="lab-new-fanfic lab-new-pair"
          onClick={() => setNewMenuOpen((open) => !open)}
          ref={newWeaveRef}
          type="button"
        >
          <span aria-hidden="true" className="lab-fanfic-mark">❖</span>
          <span>New thread/fanfic</span>
        </button>
        {newMenuOpen && (
          <div aria-label="Choose a thread kind" className="lab-new-options" role="menu">
            <button
              onClick={onCreate}
              role="menuitem"
              title="Canon conversation: cited answers and your spoiler boundary."
              type="button"
            >
              <span aria-hidden="true" className="lab-fanfic-mark">◇</span>
              <span>New thread</span>
            </button>
            {onCreateFanfic && (
              <button
                onClick={onCreateFanfic}
                role="menuitem"
                title="Fanfic: invented scenes in the storyteller voice, canon kept straight."
                type="button"
              >
                <span aria-hidden="true" className="lab-fanfic-mark">❖</span>
                <span>New fanfic</span>
              </button>
            )}
          </div>
        )}
      </div>

      <label className="lab-thread-search">
        <SearchIcon />
        <input
          aria-label="Search chats and fanfic"
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search chats"
          type="search"
          value={query}
        />
      </label>

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
            <section className="lab-chat-section" aria-label="Chats">
              <header className="lab-rail-section-head">
                <h2>Chats</h2>
                <small>{visibleChats.length}</small>
              </header>
              <nav aria-label="Chats" className="lab-thread-list">
                <ul className="lab-thread-flat-list">
                  {visibleChats.map(renderThread)}
                </ul>
                {visibleChats.length === 0 && (
                  <div className="lab-thread-empty">
                    <span aria-hidden="true" />
                    <p>[No chats yet.]</p>
                  </div>
                )}
              </nav>
            </section>

            <section className="lab-chat-section" aria-label="Fanfic">
              <header className="lab-rail-section-head">
                <h2>Fanfic</h2>
                <small>{visibleFanfic.length}</small>
              </header>
              <nav aria-label="Fanfic" className="lab-thread-list">
                <ul className="lab-thread-flat-list">
                  {visibleFanfic.map(renderThread)}
                </ul>
                {visibleFanfic.length === 0 && (
                  <div className="lab-thread-empty">
                    <span aria-hidden="true" />
                    <p>[No fanfic yet. Start one above.]</p>
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
