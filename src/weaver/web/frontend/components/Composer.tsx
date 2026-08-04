import { useEffect, useRef, type KeyboardEvent } from "react";

import { ArrowUpIcon, StopIcon } from "./Icons";

interface ComposerProps {
  cancelling: boolean;
  draft: string;
  inputLabel?: string;
  onCancel: () => void;
  onDraftChange: (value: string) => void;
  onSubmit: (value: string) => void;
  placeholder?: string;
  sendLabel?: string;
  stopLabel?: string;
  stoppingLabel?: string;
  turnActive: boolean;
}

export function Composer({
  cancelling,
  draft,
  inputLabel = "Message assistant",
  onCancel,
  onDraftChange,
  onSubmit,
  placeholder = "Write a message...",
  sendLabel = "Send message",
  stopLabel = "Stop assistant",
  stoppingLabel = "Stopping assistant",
  turnActive,
}: ComposerProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) {
      return;
    }
    textarea.style.height = "auto";
    textarea.style.height = `${Math.min(textarea.scrollHeight, 160)}px`;
  }, [draft]);

  function submitDraft() {
    const message = draft.trim();
    if (!message || turnActive) {
      return;
    }
    onSubmit(message);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key !== "Enter" || event.shiftKey) {
      return;
    }
    event.preventDefault();
    submitDraft();
  }

  return (
    <div className="composer-wrap">
      <div className="composer-shell">
        <textarea
          aria-label={inputLabel}
          disabled={turnActive}
          onChange={(event) => onDraftChange(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          ref={textareaRef}
          rows={1}
          value={draft}
        />
        {turnActive ? (
          <button
            aria-label={cancelling ? stoppingLabel : stopLabel}
            className="composer-action composer-stop"
            disabled={cancelling}
            onClick={onCancel}
            type="button"
          >
            <StopIcon />
          </button>
        ) : (
          <button
            aria-label={sendLabel}
            className="composer-action composer-send"
            disabled={!draft.trim()}
            onClick={submitDraft}
            type="button"
          >
            <ArrowUpIcon />
          </button>
        )}
      </div>
    </div>
  );
}
