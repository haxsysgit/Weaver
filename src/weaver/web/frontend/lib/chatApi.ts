import { weaverHeaders } from "./identity";

export interface ConversationSummary {
  conversation_id: string;
  title: string;
  created_at?: string;
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
  | {
      type: "tool";
      name: string;
      status: string;
      detail: string;
      preview?: string;
      handles?: string[];
    };

export interface UserPreferences {
  reader_chapter: number | null;
  spoiler_mode: "protect" | "none";
  tier: "awakened" | "ascended" | "transcendent";
}

export interface Passage {
  handle: string;
  chapter: number;
  line_start: number;
  line_end: number;
  text: string;
  volume: number;
  beats: string[];
}

export interface ChatApi {
  listConversations(): Promise<ConversationSummary[]>;
  createConversation(): Promise<{ conversation_id: string }>;
  loadMessages(conversationId: string): Promise<StoredMessage[]>;
  streamTurn(conversationId: string, message: string): AsyncIterable<StreamEvent>;
  retryTurn(conversationId: string): AsyncIterable<StreamEvent>;
  regenerateTurn(conversationId: string): AsyncIterable<StreamEvent>;
  cancelTurn(conversationId: string): Promise<"cancelling" | "idle">;
  deleteConversation(conversationId: string): Promise<{ deleted: string }>;
  getPassage(handle: string): Promise<Passage>;
  getPreferences(): Promise<UserPreferences>;
  savePreferences(prefs: UserPreferences): Promise<UserPreferences>;
}

interface RawStreamEvent {
  event: string;
  data: Record<string, unknown>;
}

async function requireJson<T>(response: Response, action: string): Promise<T> {
  if (!response.ok) {
    throw new Error(`${action} failed (${response.status})`);
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
    const handles = Array.isArray(rawEvent.data.handles)
      ? rawEvent.data.handles.filter((h): h is string => typeof h === "string")
      : undefined;
    return {
      type: "tool",
      name: typeof rawEvent.data.name === "string" ? rawEvent.data.name : "tool",
      status: typeof rawEvent.data.status === "string" ? rawEvent.data.status : "start",
      detail: typeof rawEvent.data.detail === "string" ? rawEvent.data.detail : "",
      preview: typeof rawEvent.data.preview === "string" ? rawEvent.data.preview : undefined,
      handles: handles && handles.length > 0 ? handles : undefined,
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
    authed(input, {
      ...init,
      headers: {
        ...weaverHeaders(),
        ...(init?.headers as Record<string, string> | undefined),
      },
    });
  return {
    async getPreferences() {
      const response = await authed("/api/preferences");
      return requireJson<UserPreferences>(response, "Loading preferences");
    },

    async deleteConversation(conversationId: string) {
      const response = await authed(`/api/conversations/${conversationId}`, {
        method: "DELETE",
      });
      return requireJson<{ deleted: string }>(response, "Deleting conversation");
    },

    async getPassage(handle: string) {
      const response = await authed(
        `/api/passages?handle=${encodeURIComponent(handle)}`,
      );
      return requireJson<Passage>(response, "Loading passage");
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

    async createConversation() {
      const response = await authed("/api/conversations", { method: "POST" });
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
        throw new Error(`Sending the message failed (${response.status})`);
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
        throw new Error(`Retrying failed (${response.status})`);
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
        throw new Error(`Regenerating failed (${response.status})`);
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
      throw new Error(`Stopping the reply failed (${response.status})`);
    },
  };
}
