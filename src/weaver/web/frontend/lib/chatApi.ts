import { weaverHeaders } from "./identity";

export interface CreateThreadOptions {
  domain?: "canon" | "fanfic";
  fanfic_kind?: string | null;
}

export interface ConversationSummary {
  archived: boolean;
  conversation_id: string;
  created_at: string;
  domain?: "canon" | "fanfic";
  edition_id: string;
  pinned: boolean;
  title: string;
}

export interface ConversationMetadataPatch {
  archived?: boolean;
  pinned?: boolean;
  title?: string | null;
}

export interface StoredMessage {
  message_id: string;
  turn_id: string;
  role: "owner" | "weaver";
  content: string;
  created_at: string;
}

export type StreamEvent =
  | { type: "delta"; text: string }
  | { type: "completed"; text: string; tokenCount?: number; tokenBudget?: number }
  | { type: "interrupted"; message: string }
  | { type: "failed"; message: string; code?: string }
  | { type: "tool"; name: string; status: string };

export interface UserPreferences {
  reader_chapter: number | null;
  spoiler_mode: "protect" | "none";
  tier: "awakened" | "ascended" | "transcendent";
}

export interface AccessStatus {
  consented: boolean;
  development?: boolean;
  enabled: boolean;
  remaining_questions: number;
  reset_at: string | null;
  source: "reader_byok" | "sponsored" | "unavailable";
}

export interface ChatApi {
  getAccess?(): Promise<AccessStatus>;
  acceptSponsoredNotice?(): Promise<AccessStatus>;
  listConversations(): Promise<ConversationSummary[]>;
  updateConversation(
    conversationId: string,
    patch: ConversationMetadataPatch,
  ): Promise<ConversationSummary>;
  createConversation(options?: CreateThreadOptions): Promise<{ conversation_id: string }>;
  loadMessages(conversationId: string): Promise<StoredMessage[]>;
  streamTurn(conversationId: string, message: string): AsyncIterable<StreamEvent>;
  retryTurn(conversationId: string): AsyncIterable<StreamEvent>;
  regenerateTurn(conversationId: string): AsyncIterable<StreamEvent>;
  cancelTurn(conversationId: string): Promise<"cancelling" | "idle">;
  deleteConversation(conversationId: string): Promise<{ deleted: string }>;
  getPreferences(): Promise<UserPreferences>;
  savePreferences(prefs: UserPreferences): Promise<UserPreferences>;
}

interface RawStreamEvent {
  event: string;
  data: Record<string, unknown>;
}

export class ChatApiError extends Error {
  readonly action: string;
  readonly code?: string;
  readonly status: number;

  constructor(action: string, status: number, code?: string) {
    super(`${action} failed (${status})`);
    this.name = "ChatApiError";
    this.action = action;
    this.code = code;
    this.status = status;
  }
}

async function responseError(response: Response, action: string): Promise<ChatApiError> {
  let code: string | undefined;
  try {
    const body = (await response.clone().json()) as {
      detail?: { code?: unknown };
    };
    if (typeof body.detail?.code === "string") {
      code = body.detail.code;
    }
  } catch {
    // Empty and non-JSON errors still retain their safe status mapping.
  }
  return new ChatApiError(action, response.status, code);
}

async function requireJson<T>(response: Response, action: string): Promise<T> {
  if (!response.ok) {
    throw await responseError(response, action);
  }
  return (await response.json()) as T;
}

function toStreamEvent(rawEvent: RawStreamEvent): StreamEvent | null {
  const text = typeof rawEvent.data.text === "string" ? rawEvent.data.text : "";
  const message =
    typeof rawEvent.data.message === "string" ? rawEvent.data.message : "";

  if (rawEvent.event === "delta") {
    return { type: "delta", text };
  }
  if (rawEvent.event === "completed") {
    return {
      type: "completed",
      text,
      tokenCount:
        typeof rawEvent.data.token_count === "number"
          ? rawEvent.data.token_count
          : undefined,
      tokenBudget:
        typeof rawEvent.data.token_budget === "number"
          ? rawEvent.data.token_budget
          : undefined,
    };
  }
  if (rawEvent.event === "interrupted") {
    return { type: "interrupted", message: message || "The turn was interrupted." };
  }
  if (rawEvent.event === "failed") {
    return {
      type: "failed",
      message: message || "The reply failed.",
      code: typeof rawEvent.data.code === "string" ? rawEvent.data.code : undefined,
    };
  }
  if (rawEvent.event === "tool") {
    return {
      type: "tool",
      name: typeof rawEvent.data.name === "string" ? rawEvent.data.name : "tool",
      status: typeof rawEvent.data.status === "string" ? rawEvent.data.status : "start",
    };
  }
  return null;
}

/**
 * hermes-webui pattern (owner, 2026-08-08): the turn runs server-side and
 * the reply is read over a per-turn EventSource. The browser reconnects
 * automatically with Last-Event-ID and the server replays the missed
 * events, so a dropped connection resumes the reply instead of killing
 * it. The generator ends on the terminal event (or when the connection
 * permanently closes without one).
 */
async function* streamEvents(source: EventSource): AsyncGenerator<StreamEvent> {
  const pending: StreamEvent[] = [];
  let waiters: Array<() => void> = [];
  let failure: Error | null = null;
  let errorCount = 0;

  // The server sends NAMED events (event: delta / tool / completed / ...),
  // which EventSource dispatches to addEventListener, not onmessage.
  const EVENT_NAMES = [
    "delta",
    "tool",
    "completed",
    "interrupted",
    "failed",
  ] as const;
  for (const name of EVENT_NAMES) {
    source.addEventListener(name, (message: MessageEvent<string>) => {
      try {
        const event = toStreamEvent({
          event: name,
          data: JSON.parse(message.data) as Record<string, unknown>,
        });
        if (event) {
          pending.push(event);
          waiters.splice(0).forEach((wake) => wake());
        }
      } catch {
        // malformed frame; ignore
      }
    });
  }
  source.onerror = () => {
    // EventSource auto-reconnects (Last-Event-ID resume); a few errors
    // are normal blips, but a dead stream must surface eventually.
    errorCount += 1;
    if (source.readyState === EventSource.CLOSED || errorCount > 4) {
      failure = new Error("The reply stream was interrupted.");
      waiters.splice(0).forEach((wake) => wake());
    }
  };

  try {
    while (true) {
      if (pending.length > 0) {
        yield pending.shift() as StreamEvent;
      } else if (failure) {
        throw failure;
      } else {
        await new Promise<void>((resolve) => waiters.push(resolve));
      }
    }
  } finally {
    source.close();
  }
}

async function* openTurnStream(
  conversationId: string,
): AsyncGenerator<StreamEvent> {
  const source = new EventSource(
    `/api/conversations/${encodeURIComponent(conversationId)}/stream`,
  );
  let terminalSeen = false;
  for await (const event of streamEvents(source)) {
    yield event;
    if (
      event.type === "completed" ||
      event.type === "interrupted" ||
      event.type === "failed"
    ) {
      terminalSeen = true;
      break;
    }
  }
  if (!terminalSeen) {
    throw new Error("The reply stream closed without finishing.");
  }
}

export function createHttpChatApi(fetcher: typeof fetch = fetch): ChatApi {
  // Plan v1 slice 3: every call carries the device id (always) and the
  // user's DeepSeek key (when set). Merged into a wrapper so no caller
  // can forget the headers.
  const authed = (
    input: string | URL | Request,
    init?: RequestInit,
  ): Promise<Response> =>
    fetcher(input, {
      ...init,
      headers: {
        ...weaverHeaders(),
        ...(init?.headers as Record<string, string> | undefined),
      },
    });
  return {
    async getAccess() {
      const response = await authed("/api/access");
      return requireJson<AccessStatus>(response, "Loading shared allowance");
    },

    async acceptSponsoredNotice() {
      const response = await authed("/api/access/consent", { method: "POST" });
      return requireJson<AccessStatus>(response, "Accepting the privacy notice");
    },

    async getPreferences() {
      const response = await authed("/api/preferences");
      return requireJson<UserPreferences>(response, "Loading preferences");
    },

    async deleteConversation(conversationId: string) {
      const response = await authed(
        `/api/conversations/${encodeURIComponent(conversationId)}`,
        { method: "DELETE" },
      );
      return requireJson<{ deleted: string }>(response, "Deleting conversation");
    },

    async savePreferences(prefs) {
      const response = await authed("/api/preferences", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(prefs),
      });
      return requireJson<UserPreferences>(response, "Saving preferences");
    },

    async listConversations() {
      const response = await authed("/api/conversations");
      return requireJson<ConversationSummary[]>(response, "Loading conversations");
    },

    async updateConversation(conversationId, patch) {
      const response = await authed(
        `/api/conversations/${encodeURIComponent(conversationId)}`,
        {
          body: JSON.stringify(patch),
          headers: { "Content-Type": "application/json" },
          method: "PATCH",
        },
      );
      return requireJson<ConversationSummary>(response, "Updating conversation");
    },

    async createConversation(options?: CreateThreadOptions) {
      const response = await authed("/api/conversations", {
        body: options ? JSON.stringify(options) : undefined,
        headers: options ? { "Content-Type": "application/json" } : undefined,
        method: "POST",
      });
      return requireJson<{ conversation_id: string }>(
        response,
        "Creating a conversation",
      );
    },

    async loadMessages(conversationId) {
      const response = await authed(
        `/api/conversations/${encodeURIComponent(conversationId)}/messages`,
      );
      return requireJson<StoredMessage[]>(response, "Loading the conversation");
    },

    async *streamTurn(conversationId, message) {
      const response = await authed(
        `/api/conversations/${encodeURIComponent(conversationId)}/turns`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message }),
        },
      );
      if (!response.ok) {
        throw await responseError(response, "Sending the message");
      }
      yield* openTurnStream(conversationId);
    },

    // Plan 15 retry (2026-08-09): the server reloads the failed turn's
    // own message from the store, so the client never re-sends text.
    async *retryTurn(conversationId) {
      const response = await authed(
        `/api/conversations/${encodeURIComponent(conversationId)}/retry`,
        { method: "POST" },
      );
      if (!response.ok) {
        throw await responseError(response, "Retrying");
      }
      yield* openTurnStream(conversationId);
    },

    // Regenerate (2026-08-09): re-answers the last question in place.
    // The client sends no text - the server reloads the question from
    // the store and supersedes the old answer - so the question is never
    // re-sent as a new message.
    async *regenerateTurn(conversationId) {
      const response = await authed(
        `/api/conversations/${encodeURIComponent(conversationId)}/regenerate`,
        { method: "POST" },
      );
      if (!response.ok) {
        throw await responseError(response, "Regenerating");
      }
      yield* openTurnStream(conversationId);
    },

    async cancelTurn(conversationId) {
      const response = await authed(
        `/api/conversations/${encodeURIComponent(conversationId)}/cancel`,
        { method: "POST" },
      );
      if (response.status === 202) {
        return "cancelling";
      }
      if (response.status === 200) {
        return "idle";
      }
      throw await responseError(response, "Stopping the reply");
    },
  };
}
