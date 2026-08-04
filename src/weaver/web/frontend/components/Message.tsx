import { useState, type ComponentType } from "react";

import type { DisplayMessage } from "../lib/chatModel";
import { CopyIcon, RegenerateIcon } from "./Icons";
import { Markdown } from "./Markdown";
import type { WeaverMarkProps } from "./WeaverMark";

interface MessageProps {
  Mark: ComponentType<WeaverMarkProps>;
  assistantName: string;
  message: DisplayMessage;
  onRegenerate?: () => void;
  regenerateLabel: string;
}

export function Message({
  Mark,
  assistantName,
  message,
  onRegenerate,
  regenerateLabel,
}: MessageProps) {
  const [copied, setCopied] = useState(false);

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
    <article className={`message message-weaver ${message.streaming ? "message-streaming" : ""}`}>
      <div className="weaver-avatar">
        <Mark compact />
      </div>
      <div className="weaver-message-content">
        <div className="message-role">{assistantName}</div>
        <div className="markdown-body">
          {message.content ? <Markdown>{message.content}</Markdown> : <span className="thinking-thread" />}
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
    </article>
  );
}
