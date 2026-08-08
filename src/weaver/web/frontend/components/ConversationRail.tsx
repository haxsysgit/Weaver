import { useEffect, useRef, useState, type ComponentType } from "react";

import type { ConversationSummary } from "../lib/chatApi";
import type { ChatProduct } from "../lib/product";
import { PlusIcon, RailCloseIcon, SettingsIcon, ThreadIcon, TrashIcon } from "./Icons";
import type { WeaverMarkProps } from "./WeaverMark";

interface ConversationRailProps {
  Mark: ComponentType<WeaverMarkProps>;
  activeConversationId: string | null;
  conversations: ConversationSummary[];
  desktopCollapsed: boolean;
  disabled: boolean;
  interactionHidden: boolean;
  mobileLayout: boolean;
  mobileOpen: boolean;
  onClose: () => void;
  onCreate: () => void;
  onDelete: (conversationId: string) => void;
  onOpenSettings: () => void;
  onSelect: (conversationId: string) => void;
  product: ChatProduct;
  readerChapter: number | null;
  spoilerMode: "protect" | "none";
  tier: "awakened" | "ascended" | "transcendent";
}

interface ConversationGroup {
  label: string;
  conversations: ConversationSummary[];
}

function dayKey(createdAt: string): string {
  return (createdAt || "").slice(0, 10);
}

function groupConversations(
  conversations: ConversationSummary[],
): ConversationGroup[] {
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);
  const weekAgo = new Date();
  weekAgo.setDate(today.getDate() - 7);
  const dayOf = (createdAt: string) => new Date(dayKey(createdAt) + "T00:00:00");

  const groups: ConversationGroup[] = [
    { label: "Today", conversations: [] },
    { label: "Yesterday", conversations: [] },
    { label: "This week", conversations: [] },
    { label: "Older", conversations: [] },
  ];
  for (const conversation of conversations) {
    const date = dayOf(conversation.created_at || "");
    const label =
      date >= dayOf(today.toISOString())
        ? "Today"
        : date >= dayOf(yesterday.toISOString())
          ? "Yesterday"
          : date >= dayOf(weekAgo.toISOString())
            ? "This week"
            : "Older";
    groups.find((group) => group.label === label)?.conversations.push(conversation);
  }
  return groups.filter((group) => group.conversations.length > 0);
}

export function ConversationRail({
  Mark,
  activeConversationId,
  conversations,
  desktopCollapsed,
  disabled,
  interactionHidden,
  mobileLayout,
  mobileOpen,
  onClose,
  onCreate,
  onDelete,
  onOpenSettings,
  onSelect,
  product,
  readerChapter,
  spoilerMode,
  tier,
}: ConversationRailProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [collapsedGroups, setCollapsedGroups] = useState<Set<string>>(new Set());
  const [confirmingDelete, setConfirmingDelete] = useState<string | null>(null);

  useEffect(() => {
    if (mobileOpen) {
      closeButtonRef.current?.focus();
    }
  }, [mobileOpen]);

  function toggleGroup(label: string) {
    setCollapsedGroups((current) => {
      const next = new Set(current);
      if (next.has(label)) {
        next.delete(label);
      } else {
        next.add(label);
      }
      return next;
    });
  }

  function handleDelete(conversationId: string) {
    if (confirmingDelete === conversationId) {
      setConfirmingDelete(null);
      onDelete(conversationId);
      return;
    }
    setConfirmingDelete(conversationId);
    window.setTimeout(() => {
      setConfirmingDelete((current) =>
        current === conversationId ? null : current,
      );
    }, 3000);
  }

  const groups = groupConversations(conversations);
  const readerLine = [
    readerChapter ? `ch ${readerChapter}` : "reader unknown",
    tier,
    spoilerMode === "protect" ? "spoilers protected" : "no spoiler care",
  ].join(" · ");

  return (
    <>
      <button
        aria-hidden="true"
        aria-label={product.closeRailLabel}
        className={`drawer-scrim ${mobileOpen ? "drawer-scrim-open" : ""}`}
        onClick={onClose}
        tabIndex={-1}
        type="button"
      />
      <aside
        aria-hidden={interactionHidden}
        aria-label={mobileLayout ? product.navigationLabel : undefined}
        aria-modal={mobileLayout && mobileOpen ? true : undefined}
        className={[
          "conversation-rail",
          desktopCollapsed ? "conversation-rail-collapsed" : "",
          mobileOpen ? "conversation-rail-open" : "",
        ]
          .filter(Boolean)
          .join(" ")}
        id="conversation-rail"
        inert={interactionHidden}
        role={mobileLayout ? "dialog" : undefined}
      >
        <header className="rail-brand">
          <div className="brand-lockup">
            <div className="brand-mark-seal">
              <Mark className="brand-mark" compact />
            </div>
            <div>
              <strong>{product.assistantName}</strong>
              <span>{product.brandLine}</span>
            </div>
          </div>
          <button
            aria-label={product.closeRailLabel}
            className="icon-button rail-close"
            onClick={onClose}
            ref={closeButtonRef}
            type="button"
          >
            <RailCloseIcon />
          </button>
        </header>

        <button
          className="new-weave-button"
          disabled={disabled}
          onClick={onCreate}
          type="button"
        >
          <PlusIcon />
          <span>{product.newConversationLabel}</span>
        </button>

        <div className="rail-scroll">
          <section aria-label="Threads" className="rail-section">
            <div className="rail-section-label">
              <span>{product.recentConversationsLabel}</span>
              <span className="thread-count">{conversations.length}</span>
            </div>
            <nav aria-label={product.navigationLabel} className="conversation-list">
              {groups.map((group) => (
                <div className="conversation-group" key={group.label}>
                  <button
                    aria-expanded={!collapsedGroups.has(group.label)}
                    className="conversation-group-toggle"
                    onClick={() => toggleGroup(group.label)}
                    type="button"
                  >
                    <span className="group-caret">
                      {collapsedGroups.has(group.label) ? "▸" : "▾"}
                    </span>
                    <span>{group.label}</span>
                    <span className="group-count">{group.conversations.length}</span>
                  </button>
                  {!collapsedGroups.has(group.label) && (
                    <ul className="conversation-group-list">
                      {group.conversations.map((conversation) => {
                        const active =
                          conversation.conversation_id === activeConversationId;
                        return (
                          <li className="conversation-row" key={conversation.conversation_id}>
                            <button
                              aria-current={active ? "page" : undefined}
                              aria-label={`${conversation.title} ${product.conversationNoun}`}
                              className={`conversation-item ${active ? "conversation-item-active" : ""}`}
                              disabled={disabled}
                              onClick={() => onSelect(conversation.conversation_id)}
                              type="button"
                            >
                              <ThreadIcon />
                              <span className="conversation-title">
                                {conversation.title}
                              </span>
                            </button>
                            <button
                              aria-label={`Delete ${conversation.title}`}
                              className="conversation-delete"
                              disabled={disabled}
                              onClick={() => handleDelete(conversation.conversation_id)}
                              title={confirmingDelete === conversation.conversation_id ? "Sure?" : "Delete"}
                              type="button"
                            >
                              <TrashIcon />
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              ))}
              {groups.length === 0 && (
                <p className="conversation-empty">No threads yet.</p>
              )}
            </nav>
          </section>

          <section aria-label="Library" className="rail-section rail-section-library">
            <div className="rail-section-label">
              <span>Library</span>
            </div>
            <ul className="library-list">
              <li className="library-row" title="Not yet woven">
                <ThreadIcon />
                <span>What-ifs</span>
                <span className="library-soon">not yet woven</span>
              </li>
              <li className="library-row" title="Not yet woven">
                <ThreadIcon />
                <span>Your takes</span>
                <span className="library-soon">not yet woven</span>
              </li>
              <li className="library-row" title="Not yet woven">
                <ThreadIcon />
                <span>Arc recaps</span>
                <span className="library-soon">not yet woven</span>
              </li>
            </ul>
          </section>
        </div>

        <footer className="rail-footer">
          <button
            aria-label="Reader status and settings"
            className="reader-status"
            onClick={onOpenSettings}
            type="button"
          >
            <span className="reader-status-line">{readerLine}</span>
            <SettingsIcon />
          </button>
          <p className="footer-line">{product.footerLine}</p>
        </footer>
      </aside>
    </>
  );
}
