import { useEffect, useRef, useState, type ComponentType } from "react";

import { useChatController } from "../hooks/useChatController";
import type { ChatApi } from "../lib/chatApi";
import { weaverProduct, type ChatProduct } from "../lib/product";
import { Composer, type ReadingTier } from "./Composer";
import { ConversationRail } from "./ConversationRail";
import { RailOpenIcon } from "./Icons";
import { SettingsModal } from "./SettingsModal";
import { Message } from "./Message";
import { SpellBackground } from "./SpellBackground";
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
  const [mobileLayout, setMobileLayout] = useState(() => window.innerWidth < 768);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [settingsPrefs, setSettingsPrefs] = useState<{
    reader_chapter: number | null;
    spoiler_mode: "protect" | "none";
    tier: "awakened" | "ascended" | "transcendent";
  }>({ reader_chapter: null, spoiler_mode: "protect", tier: "ascended" });
  const returnFocusToRailToggle = useRef(false);
  const railToggleRef = useRef<HTMLButtonElement>(null);
  const transcriptRef = useRef<HTMLDivElement>(null);
  const composerRef = useRef<HTMLTextAreaElement>(null);
  const railInteractionHidden = mobileLayout ? !drawerOpen : desktopRailCollapsed;
  const mainInteractionHidden = mobileLayout && drawerOpen;

  useEffect(() => {
    function updateLayout() {
      setMobileLayout(window.innerWidth < 768);
    }

    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  useEffect(() => {
    if (!railInteractionHidden || !returnFocusToRailToggle.current) {
      return;
    }
    railToggleRef.current?.focus();
    returnFocusToRailToggle.current = false;
  }, [railInteractionHidden]);

  useEffect(() => {
    const transcript = transcriptRef.current;
    if (transcript) {
      transcript.scrollTop = transcript.scrollHeight;
    }
  }, [chat.messages, chat.recoveryMessage, chat.activity]);

  function openSettings() {
    void api
      .getPreferences()
      .then((prefs) => {
        setSettingsPrefs(prefs);
        setSettingsOpen(true);
      })
      .catch(() => setSettingsOpen(true));
  }

  function askAboutQuote(quote: string) {
    chat.setDraft(`"${quote}" `);
    composerRef.current?.focus();
  }

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
    if (mobileLayout) {
      setDrawerOpen(true);
      return;
    }
    setDesktopRailCollapsed(false);
  }

  function closeConversationRail() {
    returnFocusToRailToggle.current = true;
    if (mobileLayout) {
      setDrawerOpen(false);
      return;
    }
    setDesktopRailCollapsed(true);
  }

  return (
    <div
      className={`chat-app ${desktopRailCollapsed ? "chat-app-rail-collapsed" : ""}`}
    >
      <SpellBackground
        mode="subtle"
        threadAlpha={0.3}
        transparent
      />
      <ConversationRail
        Mark={Mark}
        activeConversationId={chat.conversationId}
        conversations={chat.conversations}
        desktopCollapsed={desktopRailCollapsed}
        disabled={chat.turnActive}
        interactionHidden={railInteractionHidden}
        mobileLayout={mobileLayout}
        mobileOpen={drawerOpen}
        onClose={closeConversationRail}
        onCreate={() => void createConversation()}
        onDelete={(id) => void chat.deleteConversation(id)}
        onOpenSettings={openSettings}
        onSelect={(id) => void selectConversation(id)}
        product={product}
        readerChapter={settingsPrefs.reader_chapter}
        spoilerMode={settingsPrefs.spoiler_mode}
        tier={settingsPrefs.tier}
      />

      <main
        aria-hidden={mainInteractionHidden}
        className="chat-main"
        inert={mainInteractionHidden}
      >
        <header className="chat-header">
          <button
            aria-controls="conversation-rail"
            aria-expanded={!railInteractionHidden}
            aria-label={product.openRailLabel}
            className="icon-button rail-toggle-main"
            onClick={openConversationRail}
            ref={railToggleRef}
            type="button"
          >
            <RailOpenIcon />
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
                <div className="empty-copy">
                  <p className="empty-eyebrow">{product.emptyEyebrow}</p>
                  <h1>{product.emptyTitle}</h1>
                  <p>{product.emptyHint}</p>
                </div>
              </section>
            )}
            {chat.messages.map((message) => (
              <Message
                Mark={Mark}
                assistantName={product.assistantName}
                key={message.id}
                message={message}
                onQuote={askAboutQuote}
                onRegenerate={
                  message.id === chat.lastReplyId && chat.turnState === "idle"
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
                onChooseConversation={openConversationRail}
                onCreateConversation={() => void createConversation()}
                onRetry={() => void chat.retryLastTurn()}
                retryLabel={product.recoveryRetryLabel}
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
            onTierChange={(tier: ReadingTier) => {
              setSettingsPrefs((current) => ({ ...current, tier }));
              void api.savePreferences({ ...settingsPrefs, tier });
            }}
            placeholder={product.composerPlaceholder}
            sendLabel={product.sendLabel}
            stopLabel={product.stopLabel}
            stoppingLabel={product.stoppingLabel}
            tier={settingsPrefs.tier}
            turnActive={chat.turnActive}
            textareaRef={composerRef}
          />
          <p className="privacy-line">
            <span className="privacy-dot" />
            {privacyLabel}
          </p>
        </footer>
      </main>
      {settingsOpen && (
        <SettingsModal
          initial={settingsPrefs}
          onClose={() => setSettingsOpen(false)}
          onSave={async (prefs) => {
            await api.savePreferences(prefs);
            setSettingsPrefs(prefs);
          }}
        />
      )}
    </div>
  );
}
