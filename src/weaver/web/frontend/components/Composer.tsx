import { useEffect, useRef, useState, type KeyboardEvent } from "react";

import { ArrowUpIcon, ChevronDownIcon, StopIcon } from "./Icons";

export type ReadingTier = "awakened" | "ascended" | "transcendent";

const TIERS: ReadingTier[] = ["awakened", "ascended", "transcendent"];

interface ComposerProps {
  cancelling: boolean;
  draft: string;
  inputLabel?: string;
  onCancel: () => void;
  onDraftChange: (value: string) => void;
  onSubmit: (value: string) => void;
  onTierChange: (tier: ReadingTier) => void;
  placeholder?: string;
  sendLabel?: string;
  stopLabel?: string;
  stoppingLabel?: string;
  textareaRef?: React.RefObject<HTMLTextAreaElement | null>;
  tier: ReadingTier;
  turnActive: boolean;
}

export function Composer({
  cancelling,
  draft,
  inputLabel = "Message assistant",
  onCancel,
  onDraftChange,
  onSubmit,
  onTierChange,
  placeholder = "Write a message...",
  sendLabel = "Send message",
  stopLabel = "Stop assistant",
  stoppingLabel = "Stopping assistant",
  textareaRef,
  tier,
  turnActive,
}: ComposerProps) {
  const innerRef = useRef<HTMLTextAreaElement>(null);
  const resolvedRef = textareaRef ?? innerRef;
  const tierRef = useRef<HTMLDivElement>(null);
  const [tierOpen, setTierOpen] = useState(false);

  useEffect(() => {
    const textarea = resolvedRef.current;
    if (!textarea) {
      return;
    }
    textarea.style.height = "auto";
    textarea.style.height = `${Math.min(textarea.scrollHeight, 160)}px`;
  }, [draft, resolvedRef]);

  // close the tier menu on outside click or Escape
  useEffect(() => {
    if (!tierOpen) {
      return;
    }
    function onPointerDown(event: PointerEvent) {
      if (tierRef.current && !tierRef.current.contains(event.target as Node)) {
        setTierOpen(false);
      }
    }
    function onKeyDown(event: globalThis.KeyboardEvent) {
      if (event.key === "Escape") {
        setTierOpen(false);
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [tierOpen]);

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
          ref={resolvedRef}
          rows={1}
          value={draft}
        />
        <div className="composer-tier" ref={tierRef}>
          <button
            aria-expanded={tierOpen}
            aria-haspopup="listbox"
            aria-label={`Reading tier: ${tier}`}
            className="tier-pill"
            disabled={turnActive}
            onClick={() => setTierOpen((open) => !open)}
            type="button"
          >
            <span className="tier-pill-name">{tier}</span>
            <ChevronDownIcon />
          </button>
          {tierOpen && (
            <ul aria-label="Reading tier" className="tier-menu" role="listbox">
              {TIERS.map((candidate) => (
                <li key={candidate}>
                  <button
                    aria-selected={candidate === tier}
                    onClick={() => {
                      onTierChange(candidate);
                      setTierOpen(false);
                    }}
                    role="option"
                    type="button"
                  >
                    <span className="tier-menu-check">
                      {candidate === tier ? "✦" : ""}
                    </span>
                    {candidate}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
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
