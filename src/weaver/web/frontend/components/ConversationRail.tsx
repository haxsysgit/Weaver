import { useEffect, useRef, type ComponentType } from "react";

import type { ConversationSummary } from "../lib/chatApi";
import type { ChatProduct } from "../lib/product";
import { PlusIcon, RailCloseIcon, ThreadIcon } from "./Icons";
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
  onSelect: (conversationId: string) => void;
  product: ChatProduct;
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
  onSelect,
  product,
}: ConversationRailProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (mobileOpen) {
      closeButtonRef.current?.focus();
    }
  }, [mobileOpen]);

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
