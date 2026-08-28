import type { RecoveryIssue } from "../lib/chatRecovery";

interface RecoveryPanelProps {
  chooseLabel: string;
  createLabel: string;
  issue: RecoveryIssue;
  onChooseConversation: () => void;
  onCreateConversation: () => void;
  onRetry?: () => void;
  retryLabel?: string;
}

export function RecoveryPanel({
  chooseLabel,
  createLabel,
  issue,
  onChooseConversation,
  onCreateConversation,
  onRetry,
  retryLabel,
}: RecoveryPanelProps) {
  return (
    <section
      aria-label="Turn recovery"
      className="recovery-panel"
      data-recovery-kind={issue.kind}
      role="region"
    >
      <span className="recovery-knot" />
      <div>
        <strong>{issue.title}</strong>
        <p>{issue.message}</p>
        <div className="recovery-actions">
          {issue.canRetry && onRetry && retryLabel && (
            <button className="recovery-retry" onClick={onRetry} type="button">
              {retryLabel}
            </button>
          )}
          <button onClick={onCreateConversation} type="button">
            {createLabel}
          </button>
          <button onClick={onChooseConversation} type="button">
            {chooseLabel}
          </button>
        </div>
      </div>
    </section>
  );
}
