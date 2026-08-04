import { useEffect, useRef, useState, type ComponentType } from "react";

import { useChatController } from "../hooks/useChatController";
import type { ChatApi } from "../lib/chatApi";
import { weaverProduct, type ChatProduct } from "../lib/product";
import { Composer } from "./Composer";
import { ConversationRail } from "./ConversationRail";
import { FateThreadGateIcon } from "./Icons";
import { Message } from "./Message";
import { RecoveryPanel } from "./RecoveryPanel";
import { WeaverMark, type WeaverMarkProps } from "./WeaverMark";

interface ChatAppProps {
  api: ChatApi;
  Mark?: ComponentType<WeaverMarkProps>;
  modeLabel: string;
  privacyLabel: string;
  product?: ChatProduct;
}

export function ChatApp({
  api,
  Mark = WeaverMark,
  modeLabel,
  privacyLabel,
  product = weaverProduct,
}: ChatAppProps) {
  const chat = useChatController(api, product);
  const [desktopRailCollapsed, setDesktopRailCollapsed] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const transcriptRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const transcript = transcriptRef.current;
    if (transcript) {
      transcript.scrollTop = transcript.scrollHeight;
    }
  }, [chat.messages, chat.recoveryMessage]);

  async function createConversation() {
    if (await chat.createConversation()) {
      setDrawerOpen(false);
    }
  }

  async function selectConversation(conversationId: string) {
    await chat.selectConversation(conversationId);
    setDrawerOpen(false);
  }

  function openConversationRail() {
    if (window.innerWidth < 768) {
      setDrawerOpen(true);
      return;
    }
    setDesktopRailCollapsed(false);
  }

  function closeConversationRail() {
    if (window.innerWidth < 768) {
      setDrawerOpen(false);
      return;
    }
    setDesktopRailCollapsed(true);
  }

  return (
    <div
      className={`chat-app ${desktopRailCollapsed ? "chat-app-rail-collapsed" : ""}`}
    >
      <ConversationRail
        Mark={Mark}
        activeConversationId={chat.conversationId}
        conversations={chat.conversations}
        desktopCollapsed={desktopRailCollapsed}
        disabled={chat.turnActive}
        mobileOpen={drawerOpen}
        onClose={closeConversationRail}
        onCreate={() => void createConversation()}
        onSelect={(id) => void selectConversation(id)}
        product={product}
      />

      <main className="chat-main">
        <header className="chat-header">
          <button
            aria-label={product.openRailLabel}
            className="icon-button rail-toggle-main"
            onClick={openConversationRail}
            type="button"
          >
            <FateThreadGateIcon open={false} />
          </button>
          <div className="active-thread">
            <span className="active-thread-kicker">
              {product.currentConversationLabel}
            </span>
            <strong>{chat.activeTitle}</strong>
          </div>
          <span className="mode-seal">{modeLabel}</span>
        </header>

        <div aria-live="polite" className="transcript" ref={transcriptRef}>
          <div className="transcript-column">
            {chat.bootError && <div className="boot-error">{chat.bootError}</div>}
            {!chat.bootError && chat.messages.length === 0 && (
              <section className="empty-weave">
                <div className="empty-mark-wrap">
                  <Mark className="empty-mark" />
                </div>
                <p className="empty-eyebrow">{product.emptyEyebrow}</p>
                <h1>{product.emptyTitle}</h1>
                <p>{product.emptyHint}</p>
              </section>
            )}
            {chat.messages.map((message) => (
              <Message
                Mark={Mark}
                assistantName={product.assistantName}
                key={message.id}
                message={message}
                onRegenerate={
                  message.id === chat.liveReplyId && chat.turnState === "idle"
                    ? chat.regenerateReply
                    : undefined
                }
                regenerateLabel={product.regenerateLabel}
              />
            ))}
            {chat.recoveryMessage && (
              <RecoveryPanel
                chooseLabel={product.recoveryChooseLabel}
                createLabel={product.recoveryCreateLabel}
                message={chat.recoveryMessage}
                onChooseConversation={() => setDrawerOpen(true)}
                onCreateConversation={() => void createConversation()}
                title={product.recoveryTitle}
              />
            )}
          </div>
        </div>

        <footer className="composer-dock">
          <Composer
            cancelling={chat.turnState === "cancelling"}
            draft={chat.draft}
            inputLabel={product.inputLabel}
            onCancel={() => void chat.cancelTurn()}
            onDraftChange={chat.setDraft}
            onSubmit={(message) => void chat.sendMessage(message)}
            placeholder={product.composerPlaceholder}
            sendLabel={product.sendLabel}
            stopLabel={product.stopLabel}
            stoppingLabel={product.stoppingLabel}
            turnActive={chat.turnActive}
          />
          <p className="privacy-line">
            <span className="privacy-dot" />
            {privacyLabel}
          </p>
        </footer>
      </main>
    </div>
  );
}
