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

function parseEventBlock(block: string): RawStreamEvent | null {
  const lines = block.split(/\r?\n/);
  const eventLine = lines.find((line) => line.startsWith("event:"));
  const dataLine = lines.find((line) => line.startsWith("data:"));
  if (!eventLine || !dataLine) {
    return null;
  }

  try {
    return {
      event: eventLine.slice("event:".length).trim(),
      data: JSON.parse(dataLine.slice("data:".length).trim()) as Record<string, unknown>,
    };
  } catch {
    return null;
  }
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

async function* readEventStream(response: Response): AsyncGenerator<StreamEvent> {
  if (!response.body) {
    throw new Error("The reply stream was empty.");
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  while (true) {
    const { done, value } = await reader.read();
    buffer += decoder.decode(value, { stream: !done });

    let separatorIndex = buffer.search(/\r?\n\r?\n/);
    while (separatorIndex >= 0) {
      const block = buffer.slice(0, separatorIndex);
      const separator = buffer.slice(separatorIndex).match(/^\r?\n\r?\n/)?.[0];
      buffer = buffer.slice(separatorIndex + (separator?.length ?? 2));

      const rawEvent = parseEventBlock(block);
      if (rawEvent) {
        const event = toStreamEvent(rawEvent);
        if (event) {
          yield event;
        }
      }
      separatorIndex = buffer.search(/\r?\n\r?\n/);
    }

    if (done) {
      break;
    }
  }

  const trailingEvent = parseEventBlock(buffer);
  if (trailingEvent) {
    const event = toStreamEvent(trailingEvent);
    if (event) {
      yield event;
    }
  }
}

export function createHttpChatApi(fetcher: typeof fetch = fetch): ChatApi {
  return {
    async getPreferences() {
      const response = await fetcher("/api/preferences");
      return requireJson<UserPreferences>(response, "Loading preferences");
    },

    async deleteConversation(conversationId: string) {
      const response = await fetcher(`/api/conversations/${conversationId}`, {
        method: "DELETE",
      });
      return requireJson<{ deleted: string }>(response, "Deleting conversation");
    },

    async getPassage(handle: string) {
      const response = await fetcher(
        `/api/passages?handle=${encodeURIComponent(handle)}`,
      );
      return requireJson<Passage>(response, "Loading passage");
    },

    async savePreferences(prefs) {
      const response = await fetcher("/api/preferences", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(prefs),
      });
      return requireJson<UserPreferences>(response, "Saving preferences");
    },

    async listConversations() {
      const response = await fetcher("/api/conversations");
      return requireJson<ConversationSummary[]>(response, "Loading conversations");
    },

    async createConversation() {
      const response = await fetcher("/api/conversations", { method: "POST" });
      return requireJson<{ conversation_id: string }>(
        response,
        "Creating a conversation",
      );
    },

    async loadMessages(conversationId) {
      const response = await fetcher(
        `/api/conversations/${encodeURIComponent(conversationId)}/messages`,
      );
      return requireJson<StoredMessage[]>(response, "Loading the conversation");
    },

    async *streamTurn(conversationId, message) {
      const response = await fetcher(
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
      yield* readEventStream(response);
    },

    async cancelTurn(conversationId) {
      const response = await fetcher(
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
