interface RecoveryPanelProps {
  chooseLabel: string;
  createLabel: string;
  message: string;
  onChooseConversation: () => void;
  onCreateConversation: () => void;
  title: string;
}

export function RecoveryPanel({
  chooseLabel,
  createLabel,
  message,
  onChooseConversation,
  onCreateConversation,
  title,
}: RecoveryPanelProps) {
  return (
    <section aria-label="Turn recovery" className="recovery-panel">
      <span className="recovery-knot" />
      <div>
        <strong>{title}</strong>
        <p>{message}</p>
        <div className="recovery-actions">
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
