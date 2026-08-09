interface RecoveryPanelProps {
  chooseLabel: string;
  createLabel: string;
  message: string;
  onChooseConversation: () => void;
  onCreateConversation: () => void;
  onRetry?: () => void;
  retryLabel?: string;
  title: string;
}

export function RecoveryPanel({
  chooseLabel,
  createLabel,
  message,
  onChooseConversation,
  onCreateConversation,
  onRetry,
  retryLabel,
  title,
}: RecoveryPanelProps) {
  return (
    <section aria-label="Turn recovery" className="recovery-panel">
      <span className="recovery-knot" />
      <div>
        <strong>{title}</strong>
        <p>{message}</p>
        <div className="recovery-actions">
          {onRetry && retryLabel && (
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
