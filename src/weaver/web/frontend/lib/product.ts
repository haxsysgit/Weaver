export interface ChatProduct {
  assistantName: string;
  brandLine: string;
  cancelFailedMessage: string;
  closeRailLabel: string;
  conversationNoun: string;
  composerPlaceholder: string;
  connectionLostMessage: string;
  currentConversationLabel: string;
  emptyEyebrow: string;
  emptyTitle: string;
  emptyHint: string;
  footerLine: string;
  incompleteTurnMessage: string;
  inputLabel: string;
  navigationLabel: string;
  newConversationLabel: string;
  newConversationTitle: string;
  openRailLabel: string;
  recentConversationsLabel: string;
  recoveryChooseLabel: string;
  recoveryCreateLabel: string;
  recoveryTitle: string;
  regenerateLabel: string;
  sendLabel: string;
  storageKey: string;
  stopLabel: string;
  stoppingLabel: string;
  wakeErrorMessage: string;
}

export const weaverProduct: ChatProduct = {
  assistantName: "Weaver",
  brandLine: "the eighth lineage",
  cancelFailedMessage: "The cut did not reach Weaver.",
  closeRailLabel: "Close conversation rail",
  conversationNoun: "thread",
  composerPlaceholder: "Ask Weaver about Shadow Slave...",
  connectionLostMessage: "The connection was lost. This turn cannot resume.",
  currentConversationLabel: "current weave",
  emptyEyebrow: "Shadow Slave, remembered",
  emptyTitle: "What thread are we pulling?",
  emptyHint: "Bring a scene, a theory, a character, or one of your hottest takes.",
  footerLine: "the eighth lineage, still weaving...",
  incompleteTurnMessage:
    "The connection ended before Weaver finished. This turn cannot resume.",
  inputLabel: "Message Weaver",
  navigationLabel: "Conversation threads",
  newConversationLabel: "New weave",
  newConversationTitle: "A new thread",
  openRailLabel: "Open conversation rail",
  recentConversationsLabel: "Recent threads",
  recoveryChooseLabel: "Choose another thread",
  recoveryCreateLabel: "Start a new weave",
  recoveryTitle: "The thread broke.",
  regenerateLabel: "Regenerate",
  sendLabel: "Send message",
  storageKey: "weaver.active-conversation",
  stopLabel: "Stop Weaver",
  stoppingLabel: "Stopping Weaver",
  wakeErrorMessage: "Weaver could not wake.",
};
