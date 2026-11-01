import { fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import type {
  ChatApi,
  ConversationMetadataPatch,
  ConversationSummary,
  StoredMessage,
  UserPreferences,
} from "../lib/chatApi";
import { FIRST_NIGHTMARE_STORAGE_KEY } from "../lib/firstNightmare";
import { SpellSurfaceChatApp } from "./SpellSurfaceChatApp";

vi.mock("./SpellBackground", () => ({
  SpellBackground: ({ paused }: { paused: boolean }) => (
    <canvas data-paused={paused} data-testid="spell-background" />
  ),
}));

interface DurableFakeStore {
  conversations: ConversationSummary[];
  messages: Map<string, StoredMessage[]>;
}

function createDurableFakeApi(): { api: ChatApi; store: DurableFakeStore } {
  const store: DurableFakeStore = {
    conversations: [],
    messages: new Map(),
  };
  let conversationSequence = 0;
  let messageSequence = 0;
  let preferences: UserPreferences = {
    reader_chapter: 1000,
    spoiler_mode: "protect" as const,
  };

  function findConversation(conversationId: string): ConversationSummary {
    const conversation = store.conversations.find((item) => {
      return item.conversation_id === conversationId;
    });
    if (!conversation) {
      throw new Error(`Missing fake conversation: ${conversationId}`);
    }
    return conversation;
  }

  function appendMessage(
    conversationId: string,
    role: StoredMessage["role"],
    content: string,
  ) {
    messageSequence += 1;
    const messages = store.messages.get(conversationId) ?? [];
    messages.push({
      content,
      created_at: `2026-08-24T12:00:${String(messageSequence).padStart(2, "0")}Z`,
      message_id: `message-${messageSequence}`,
      role,
      turn_id: `turn-${messageSequence}`,
    });
    store.messages.set(conversationId, messages);
  }

  const api: ChatApi = {
    async cancelTurn() {
      return "idle";
    },
    async createConversation() {
      conversationSequence += 1;
      const conversationId = `thread-${conversationSequence}`;
      store.conversations.unshift({
        archived: false,
        conversation_id: conversationId,
        created_at: `2026-08-24T12:00:0${conversationSequence}Z`,
        edition_id: "shadow-slave",
        pinned: false,
        title: "New chat",
      });
      store.messages.set(conversationId, []);
      return { conversation_id: conversationId };
    },
    async deleteConversation(conversationId) {
      store.conversations = store.conversations.filter((conversation) => {
        return conversation.conversation_id !== conversationId;
      });
      store.messages.delete(conversationId);
      return { deleted: conversationId };
    },
    async getPreferences() {
      return preferences;
    },
    async listConversations() {
      return store.conversations.map((conversation) => ({ ...conversation }));
    },
    async loadMessages(conversationId) {
      return [...(store.messages.get(conversationId) ?? [])];
    },
    async *regenerateTurn() {
      yield { type: "completed" as const, text: "The answer was rewoven." };
    },
    async *retryTurn() {
      yield { type: "completed" as const, text: "The thread was recovered." };
    },
    async savePreferences(nextPreferences) {
      preferences = nextPreferences;
      return preferences;
    },
    async *streamTurn(conversationId, message) {
      const conversation = findConversation(conversationId);
      const answer = [
        "## Canon check",
        "",
        "The answer settles in chapter 709.",
        "",
        "<script>alert('unsafe')</script>",
        "",
        "[unsafe](javascript:alert(1))",
      ].join("\n");
      appendMessage(conversationId, "owner", message);
      appendMessage(conversationId, "weaver", answer);
      conversation.title = "Ariel and the Tomb";
      yield {
        name: "semantic_search",
        status: "done",
        type: "tool" as const,
      };
      yield { type: "delta" as const, text: "## Canon check" };
      yield { type: "completed" as const, text: answer };
    },
    async updateConversation(
      conversationId: string,
      patch: ConversationMetadataPatch,
    ) {
      const conversation = findConversation(conversationId);
      if (patch.archived !== undefined) {
        conversation.archived = patch.archived;
      }
      if (patch.pinned !== undefined) {
        conversation.pinned = patch.pinned;
      }
      if (patch.title !== undefined) {
        conversation.title = patch.title ?? "New chat";
      }
      return { ...conversation };
    },
  };

  return { api, store };
}

function setDesktopMedia() {
  Object.defineProperty(window, "matchMedia", {
    configurable: true,
    value: vi.fn().mockReturnValue({
      addEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
      matches: false,
      media: "(max-width: 767px)",
      onchange: null,
      removeEventListener: vi.fn(),
    }),
  });
  Object.defineProperty(window, "innerWidth", {
    configurable: true,
    value: 1440,
  });
}

describe("Plan 027 deterministic fake journey", () => {
  beforeEach(() => {
    localStorage.clear();
    setDesktopMedia();
  });

  it("survives initiation, discussion, Archive actions, and a full remount", async () => {
    const { api, store } = createDurableFakeApi();
    const firstSession = render(
      <SpellSurfaceChatApp api={api} privacyLabel="Local fake mode" />,
    );

    const rite = await screen.findByRole("dialog", {
      name: "First Nightmare setup",
    });
    fireEvent.click(within(rite).getByRole("button", { name: "Enter later" }));
    expect(localStorage.getItem(FIRST_NIGHTMARE_STORAGE_KEY)).toBe("deferred");

    const composer = await screen.findByRole("textbox", { name: "Message Weaver" });
    fireEvent.change(composer, {
      target: { value: "What really happened with Ariel?" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Send message" }));

    const reply = await screen.findByTestId("weaver-message-runes");
    await waitFor(() => {
      expect(reply).toHaveTextContent("The answer settles in chapter 709.");
    });
    expect(reply).toHaveTextContent("<script>alert('unsafe')</script>");
    expect(reply.querySelector("script")).toBeNull();
    expect(reply.querySelector('a[href^="javascript:"]')).toBeNull();

    fireEvent.click(await screen.findByRole("button", {
      name: "Open threads and settings",
    }));
    let thread = await screen.findByTestId("thread-thread-1");
    fireEvent.click(within(thread).getByRole("button", {
      name: "Rename Ariel and the Tomb",
    }));
    const renameInput = within(thread).getByRole("textbox", {
      name: "Rename thread",
    });
    fireEvent.change(renameInput, { target: { value: "Ariel canon check" } });
    fireEvent.keyDown(renameInput, { key: "Enter" });

    thread = await screen.findByTestId("thread-thread-1");
    fireEvent.click(within(thread).getByRole("button", {
      name: "Pin Ariel canon check",
    }));
    const chats = await screen.findByRole("region", { name: "Chats" });
    thread = within(chats).getByTestId("thread-thread-1");
    fireEvent.click(within(thread).getByRole("button", {
      name: "Archive Ariel canon check",
    }));

    await waitFor(() => {
      expect(store.conversations.find((item) => item.conversation_id === "thread-1"))
        .toMatchObject({ archived: true, pinned: true, title: "Ariel canon check" });
    });

    firstSession.unmount();
    render(<SpellSurfaceChatApp api={api} privacyLabel="Local fake mode" />);

    expect(screen.queryByRole("dialog", { name: "First Nightmare setup" })).toBeNull();
    fireEvent.click(await screen.findByRole("button", {
      name: "Open threads and settings",
    }));
    fireEvent.click(await screen.findByRole("button", {
      name: /Open archived threads/,
    }));
    const archivedThread = await screen.findByTestId("thread-thread-1");
    expect(within(archivedThread).getByText("Ariel canon check")).toBeVisible();
    fireEvent.click(within(archivedThread).getByRole("button", {
      name: "Restore Ariel canon check",
    }));

    fireEvent.click(screen.getByRole("button", { name: "Return to active threads" }));
    const restoredChats = await screen.findByRole("region", {
      name: "Chats",
    });
    const restoredThread = within(restoredChats).getByTestId("thread-thread-1");
    fireEvent.click(within(restoredThread).getByRole("button", {
      name: "Delete Ariel canon check",
    }));
    fireEvent.click(within(restoredThread).getByRole("button", {
      name: "Delete thread",
    }));

    await waitFor(() => {
      expect(store.conversations.some((item) => item.conversation_id === "thread-1"))
        .toBe(false);
    });
  }, 20_000);
});
