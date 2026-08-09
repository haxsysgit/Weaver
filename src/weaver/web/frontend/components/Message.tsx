import { useEffect, useRef, useState, type ComponentType } from "react";

import type { DisplayMessage } from "../lib/chatModel";
import { CopyIcon, QuoteIcon, RegenerateIcon } from "./Icons";
import { FateWeavingLoader } from "./FateWeavingLoader";
import { Markdown } from "./Markdown";
import type { WeaverMarkProps } from "./WeaverMark";

interface MessageProps {
  Mark: ComponentType<WeaverMarkProps>;
  assistantName: string;
  message: DisplayMessage;
  onQuote?: (text: string) => void;
  onRegenerate?: () => void;
  regenerateLabel: string;
}

export function Message({
  Mark,
  assistantName,
  message,
  onQuote,
  onRegenerate,
  regenerateLabel,
}: MessageProps) {
  const [copied, setCopied] = useState(false);
  const [quoteText, setQuoteText] = useState<string | null>(null);
  const [quotePosition, setQuotePosition] = useState<{ top: number; left: number } | null>(
    null,
  );
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleSelectionChange() {
      if (message.role !== "weaver" || !onQuote || !contentRef.current) {
        return;
      }
      const selection = window.getSelection();
      const selected = selection ? selection.toString().trim() : "";
      const container = contentRef.current;
      const inMessage =
        selection &&
        selection.rangeCount > 0 &&
        container.contains(selection.getRangeAt(0).commonAncestorContainer);
      if (selected.length >= 2 && inMessage) {
        const rect = selection!.getRangeAt(0).getBoundingClientRect();
        setQuoteText(selected);
        setQuotePosition({ top: rect.bottom + 6, left: rect.left });
      } else {
        setQuoteText(null);
        setQuotePosition(null);
      }
    }

    document.addEventListener("selectionchange", handleSelectionChange);
    return () => document.removeEventListener("selectionchange", handleSelectionChange);
  }, [message.role, onQuote]);

  async function copyMessage() {
    await navigator.clipboard?.writeText(message.content);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  }

  if (message.role === "owner") {
    return (
      <article className="message message-owner">
        <div className="owner-message-content">
          <div className="owner-bubble">{message.content}</div>
          <div className="message-actions">
            <button aria-label="Copy owner message" onClick={copyMessage} type="button">
              <CopyIcon />
              <span>{copied ? "Copied" : "Copy"}</span>
            </button>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      className={`message message-weaver ${message.streaming ? "message-streaming" : ""}`}
    >
      <div className="weaver-avatar">
        <Mark compact />
      </div>
      <div className="weaver-message-content">
        <div className="message-role">{assistantName}</div>
        <div className="markdown-body" ref={contentRef}>
          {message.content ? <Markdown>{message.content}</Markdown> : <FateWeavingLoader />}
        </div>
        {!message.streaming && message.content && (
          <div className="message-actions">
            <button aria-label="Copy reply" onClick={copyMessage} type="button">
              <CopyIcon />
              <span>{copied ? "Copied" : "Copy"}</span>
            </button>
            {onRegenerate && (
              <button aria-label="Regenerate reply" onClick={onRegenerate} type="button">
                <RegenerateIcon />
                <span>{regenerateLabel}</span>
              </button>
            )}
          </div>
        )}
      </div>
      {quoteText && quotePosition && (
        <button
          aria-label="Ask about the selected passage"
          className="quote-action"
          onClick={() => {
            onQuote?.(quoteText);
            setQuoteText(null);
            setQuotePosition(null);
          }}
          style={{ top: quotePosition.top, left: quotePosition.left }}
          type="button"
        >
          <QuoteIcon />
          <span>ask about this</span>
        </button>
      )}
    </article>
  );
}
