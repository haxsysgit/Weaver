import { ChatApiError, type StreamEvent } from "./chatApi";

export type RecoveryKind =
  | "allowance"
  | "busy"
  | "connection"
  | "consent"
  | "incomplete"
  | "interrupted"
  | "limit"
  | "missing-thread"
  | "model"
  | "network-busy"
  | "rate-limit"
  | "request"
  | "simulated-model"
  | "server"
  | "storage"
  | "unknown";

export interface RecoveryIssue {
  canRetry: boolean;
  kind: RecoveryKind;
  message: string;
  title: string;
}

const ISSUES: Record<RecoveryKind, RecoveryIssue> = {
  allowance: {
    canRetry: false,
    kind: "allowance",
    message: "Your conversations are still here. Return after the UTC reset, or bind your own DeepSeek key in Advanced.",
    title: "[The shared thread rests for now.]",
  },
  busy: {
    canRetry: false,
    kind: "busy",
    message: "Weaver is still answering in this thread. Wait for it to settle or choose another thread.",
    title: "[Another weaving is still active.]",
  },
  connection: {
    canRetry: true,
    kind: "connection",
    message: "Check your connection, then pull the thread again.",
    title: "[The answering thread lost contact.]",
  },
  consent: {
    canRetry: false,
    kind: "consent",
    message: "Review the DeepSeek notice in the First Nightmare before using the shared allowance.",
    title: "[The hidden thread awaits your consent.]",
  },
  incomplete: {
    canRetry: true,
    kind: "incomplete",
    message: "The reply ended before it could settle. Retry the same question.",
    title: "[The answer remains unfinished.]",
  },
  interrupted: {
    canRetry: true,
    kind: "interrupted",
    message: "The answer stopped before completion. You can pull the same thread again.",
    title: "[The thread was cut.]",
  },
  limit: {
    canRetry: true,
    kind: "limit",
    message: "Weaver spent this turn's reading steps before the answer settled. Retry to begin a fresh attempt.",
    title: "[The weave reached its limit.]",
  },
  "missing-thread": {
    canRetry: false,
    kind: "missing-thread",
    message: "Choose another thread or begin a new weave.",
    title: "[This thread can no longer be found.]",
  },
  model: {
    canRetry: true,
    kind: "model",
    message: "DeepSeek could not complete this reply. Check the bound key or account balance, then retry.",
    title: "[The bound voice did not answer.]",
  },
  "network-busy": {
    canRetry: true,
    kind: "network-busy",
    message: "Too many shared requests are coming from this network. Wait a moment, then try again or use your own key in Advanced.",
    title: "[The shared thread is crowded.]",
  },
  "rate-limit": {
    canRetry: true,
    kind: "rate-limit",
    message: "DeepSeek is receiving too many requests. Wait a moment, then retry.",
    title: "[The answering thread is strained.]",
  },
  request: {
    canRetry: true,
    kind: "request",
    message: "Review the question and try sending it again.",
    title: "[The question could not enter the weave.]",
  },
  "simulated-model": {
    canRetry: true,
    kind: "simulated-model",
    message: "This development scenario paused the artificial voice. Pull the thread again to prove recovery.",
    title: "[The simulated voice did not answer.]",
  },
  server: {
    canRetry: true,
    kind: "server",
    message: "Weaver could not finish the request. Wait a moment, then retry.",
    title: "[The Spellweave did not answer.]",
  },
  storage: {
    canRetry: true,
    kind: "storage",
    message: "The answer could not be saved to this thread. Retry before continuing the conversation.",
    title: "[The answer could not be sealed.]",
  },
  unknown: {
    canRetry: true,
    kind: "unknown",
    message: "The answer failed to settle. Retry, or move to another thread if it happens again.",
    title: "[The weave broke unexpectedly.]",
  },
};

function issue(kind: RecoveryKind): RecoveryIssue {
  return { ...ISSUES[kind] };
}

export function recoveryFromStreamEvent(
  event: Extract<StreamEvent, { type: "failed" | "interrupted" }>,
): RecoveryIssue {
  if (event.type === "interrupted") {
    return issue("interrupted");
  }

  if (event.code === "simulated_model") {
    return issue("simulated-model");
  }
  if (event.code === "model_failed") {
    return issue("model");
  }
  if (event.code === "limit_reached") {
    return issue("limit");
  }
  if (event.code === "persistence_failed") {
    return issue("storage");
  }
  if (event.code === "incomplete") {
    return issue("incomplete");
  }
  return issue("unknown");
}

export function incompleteRecovery(): RecoveryIssue {
  return issue("incomplete");
}

export function recoveryFromError(error: unknown): RecoveryIssue {
  if (error instanceof ChatApiError) {
    if (["global_exhausted", "reader_exhausted"].includes(error.code ?? "")) {
      return issue("allowance");
    }
    if (error.code === "consent_required") {
      return issue("consent");
    }
    if (error.code === "network_busy") {
      return issue("network-busy");
    }
    if (error.status === 404) {
      return issue("missing-thread");
    }
    if (error.status === 409) {
      return issue("busy");
    }
    if (error.status === 429) {
      return issue("rate-limit");
    }
    if ([401, 402, 403].includes(error.status)) {
      return issue("model");
    }
    if ([400, 422].includes(error.status)) {
      return issue("request");
    }
    if (error.status >= 500) {
      return issue("server");
    }
  }

  if (error instanceof TypeError) {
    return issue("connection");
  }

  if (error instanceof Error && /stream|connection|network/i.test(error.message)) {
    return issue("connection");
  }

  return issue("unknown");
}
