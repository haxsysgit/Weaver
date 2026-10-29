import { useEffect, useRef, type KeyboardEvent } from "react";

import { ArrowUpIcon, PlusIcon, StopIcon } from "./Icons";

interface ComposerProps {
  cancelling: boolean;
  draft: string;
  inputLabel?: string;
  onCancel: () => void;
  onDraftChange: (value: string) => void;
  menuButtonRef?: React.RefObject<HTMLButtonElement | null>;
  onOpenMenu?: () => void;
  onSubmit: (value: string) => void;
  placeholder?: string;
  sendDisabled?: boolean;
  sendLabel?: string;
  stopLabel?: string;
  stoppingLabel?: string;
  statusText?: string;
  textareaRef?: React.RefObject<HTMLTextAreaElement | null>;
  turnActive: boolean;
  voiceBound?: boolean;
}

export function Composer({
  cancelling,
  draft,
  inputLabel = "Message assistant",
  menuButtonRef,
  onCancel,
  onDraftChange,
  onOpenMenu,
  onSubmit,
  placeholder = "Write a message...",
  sendDisabled = false,
  sendLabel = "Send message",
  stopLabel = "Stop assistant",
  stoppingLabel = "Stopping assistant",
  statusText,
  textareaRef,
  turnActive,
  voiceBound = true,
}: ComposerProps) {
  const innerRef = useRef<HTMLTextAreaElement>(null);
  const resolvedRef = textareaRef ?? innerRef;

  useEffect(() => {
    const textarea = resolvedRef.current;
    if (!textarea) {
      return;
    }
    textarea.style.height = "auto";
    textarea.style.height = `${Math.min(textarea.scrollHeight, 160)}px`;
  }, [draft, resolvedRef]);

  function submitDraft() {
    const message = draft.trim();
    if (!message || turnActive || sendDisabled) {
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
        {onOpenMenu && (
          <button
            aria-expanded={false}
            aria-haspopup="dialog"
            aria-label="Open threads and settings"
            className="composer-action composer-menu"
            onClick={onOpenMenu}
            ref={menuButtonRef}
            type="button"
          >
            <PlusIcon />
          </button>
        )}
        <textarea
          aria-label={inputLabel}
          onChange={(event) => onDraftChange(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          readOnly={turnActive}
          ref={resolvedRef}
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
            disabled={sendDisabled || !draft.trim()}
            onClick={submitDraft}
            type="button"
          >
            <ArrowUpIcon />
          </button>
        )}
      </div>
      {statusText ? (
        <p className="composer-binding-status">{statusText}</p>
      ) : !voiceBound ? (
        <p className="composer-binding-status">[The voice remains unbound.]</p>
      ) : null}
    </div>
  );
}
