import type { ComponentType } from "react";

import type { ConversationSummary } from "../lib/chatApi";
import type { ChatProduct } from "../lib/product";
import { FateThreadGateIcon, PlusIcon, ThreadIcon } from "./Icons";
import type { WeaverMarkProps } from "./WeaverMark";

interface ConversationRailProps {
  Mark: ComponentType<WeaverMarkProps>;
  activeConversationId: string | null;
  conversations: ConversationSummary[];
  desktopCollapsed: boolean;
  disabled: boolean;
  mobileOpen: boolean;
  onClose: () => void;
  onCreate: () => void;
  onSelect: (conversationId: string) => void;
  product: ChatProduct;
}

export function ConversationRail({
  Mark,
  activeConversationId,
  conversations,
  desktopCollapsed,
  disabled,
  mobileOpen,
  onClose,
  onCreate,
  onSelect,
  product,
}: ConversationRailProps) {
  return (
    <>
      <button
        aria-label={product.closeRailLabel}
        className={`drawer-scrim ${mobileOpen ? "drawer-scrim-open" : ""}`}
        onClick={onClose}
        tabIndex={mobileOpen ? 0 : -1}
        type="button"
      />
      <aside
        className={[
          "conversation-rail",
          desktopCollapsed ? "conversation-rail-collapsed" : "",
          mobileOpen ? "conversation-rail-open" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <header className="rail-brand">
          <div className="brand-lockup">
            <Mark className="brand-mark" compact />
            <div>
              <strong>{product.assistantName}</strong>
              <span>{product.brandLine}</span>
            </div>
          </div>
          <button
            aria-label={product.closeRailLabel}
            className="icon-button rail-close"
            onClick={onClose}
            type="button"
          >
            <FateThreadGateIcon open />
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

        <div className="rail-section-label">
          <span>{product.recentConversationsLabel}</span>
          <span className="thread-count">{conversations.length}</span>
        </div>

        <nav aria-label={product.navigationLabel} className="conversation-list">
          {conversations.map((conversation) => {
            const active = conversation.conversation_id === activeConversationId;
            return (
              <button
                aria-current={active ? "page" : undefined}
                aria-label={`${conversation.title} ${product.conversationNoun}`}
                className={`conversation-item ${active ? "conversation-item-active" : ""}`}
                disabled={disabled}
                key={conversation.conversation_id}
                onClick={() => onSelect(conversation.conversation_id)}
                type="button"
              >
                <ThreadIcon />
                <span>{conversation.title}</span>
              </button>
            );
          })}
        </nav>

        <footer className="rail-footer">
          <span className="footer-thread" />
          <p>{product.footerLine}</p>
        </footer>
      </aside>
    </>
  );
}
