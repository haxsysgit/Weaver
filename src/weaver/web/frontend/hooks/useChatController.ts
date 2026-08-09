import { useEffect, useMemo, useRef, useState } from "react";

import type {
  ChatApi,
  ConversationSummary,
  StoredMessage,
  StreamEvent,
} from "../lib/chatApi";
import type { ChatProduct } from "../lib/product";
import type { DisplayMessage } from "../lib/chatModel";

export type TurnState = "idle" | "streaming" | "cancelling";

export interface ToolActivity {
  name: string;
  status: string;
  detail: string;
  preview?: string;
  handles?: string[];
}

function localMessageId(prefix: string): string {
  const randomId =
    globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random()}`;
  return `${prefix}-${randomId}`;
}

function toDisplayMessage(message: StoredMessage): DisplayMessage {
  return {
    id: message.message_id,
    role: message.role,
    content: message.content,
  };
}

function updateReply(
  messages: DisplayMessage[],
  replyId: string,
  content: string,
  streaming: boolean,
): DisplayMessage[] {
  return messages.map((message) => {
    if (message.id !== replyId) {
      return message;
    }
    return { ...message, content, streaming };
  });
}

function findConversationTitle(
  conversations: ConversationSummary[],
  conversationId: string | null,
  fallbackTitle: string,
): string {
  if (!conversationId) {
    return fallbackTitle;
  }
  return (
    conversations.find((item) => item.conversation_id === conversationId)?.title ??
    fallbackTitle
  );
}

export function useChatController(api: ChatApi, product: ChatProduct) {
  const [conversations, setConversations] = useState<ConversationSummary[]>([]);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const conversationIdState = conversationId;
  const [messages, setMessages] = useState<DisplayMessage[]>([]);
  const [draft, setDraft] = useState("");
  const [turnState, setTurnState] = useState<TurnState>("idle");
  const [liveReplyId, setLiveReplyId] = useState<string | null>(null);
  const [lastOwnerText, setLastOwnerText] = useState<string | null>(null);
  const [recoveryMessage, setRecoveryMessage] = useState<string | null>(null);
  const [bootError, setBootError] = useState<string | null>(null);
  const [activity, setActivity] = useState<ToolActivity[]>([]);
  const activeLoad = useRef(0);
  const activityTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // the ticker is transient: clear its auto-fade timer on unmount
  useEffect(
    () => () => {
      if (activityTimer.current) {
        clearTimeout(activityTimer.current);
      }
    },
    [],
  );

  const activeTitle = useMemo(
    () =>
      findConversationTitle(
        conversations,
        conversationId,
        product.newConversationTitle,
      ),
    [conversationId, conversations, product.newConversationTitle],
  );
  const turnActive = turnState !== "idle";

  useEffect(() => {
    let mounted = true;

    async function bootstrap() {
      try {
        let availableConversations = await api.listConversations();
        let nextConversationId = localStorage.getItem(product.storageKey);
        const savedConversationExists = availableConversations.some(
          (conversation) => conversation.conversation_id === nextConversationId,
        );

        if (!savedConversationExists) {
          nextConversationId = availableConversations[0]?.conversation_id ?? null;
        }
        if (!nextConversationId) {
          const created = await api.createConversation();
          nextConversationId = created.conversation_id;
          availableConversations = await api.listConversations();
        }

        const storedMessages = await api.loadMessages(nextConversationId);
        if (!mounted) {
          return;
        }
        setConversations(availableConversations);
        setConversationId(nextConversationId);
        setMessages(storedMessages.map(toDisplayMessage));
        localStorage.setItem(product.storageKey, nextConversationId);
      } catch (error) {
        if (mounted) {
          setBootError(
            error instanceof Error ? error.message : product.wakeErrorMessage,
          );
        }
      }
    }

    void bootstrap();
    return () => {
      mounted = false;
    };
  }, [api, product.storageKey, product.wakeErrorMessage]);

  async function refreshConversations() {
    setConversations(await api.listConversations());
  }

  async function createConversation() {
    // ChatGPT-style: inside a fresh, unused weave a New weave click is a
    // no-op - there is nothing to leave.
    if (turnActive || messages.length === 0) {
      return false;
    }
    const created = await api.createConversation();
    setConversationId(created.conversation_id);
    setMessages([]);
    setLastOwnerText(null);
    setLiveReplyId(null);
    setRecoveryMessage(null);
    localStorage.setItem(product.storageKey, created.conversation_id);
    await refreshConversations();
    return true;
  }

  async function deleteConversation(conversationId: string) {
    if (turnActive) {
      return;
    }
    await api.deleteConversation(conversationId);
    if (conversationId === conversationIdState) {
      // the active weave is gone: land on the newest remaining one or a
      // fresh weave
      const remaining = (await api.listConversations()).filter(
        (item) => item.conversation_id !== conversationId,
      );
      if (remaining.length > 0) {
        await selectConversation(remaining[0].conversation_id);
      } else {
        await createConversation();
      }
    }
    await refreshConversations();
  }

  async function loadPassage(handle: string) {
    return api.getPassage(handle);
  }

  async function selectConversation(nextConversationId: string) {
    if (turnActive || nextConversationId === conversationId) {
      return false;
    }

    const loadId = activeLoad.current + 1;
    activeLoad.current = loadId;
    const storedMessages = await api.loadMessages(nextConversationId);
    if (activeLoad.current !== loadId) {
      return false;
    }

    setConversationId(nextConversationId);
    setMessages(storedMessages.map(toDisplayMessage));
    setLastOwnerText(null);
    setLiveReplyId(null);
    setRecoveryMessage(null);
    localStorage.setItem(product.storageKey, nextConversationId);
    return true;
  }

  function handleStreamEvent(
    event: StreamEvent,
    replyId: string,
    partialReply: string,
  ): { text: string; terminal: boolean } {
    if (event.type === "delta") {
      if (activityTimer.current) {
        clearTimeout(activityTimer.current);
      }
      setActivity([]);
      const nextText = partialReply + event.text;
      setMessages((current) => updateReply(current, replyId, nextText, true));
      return { text: nextText, terminal: false };
    }
    if (event.type === "completed") {
      setMessages((current) => updateReply(current, replyId, event.text, false));
      setLiveReplyId(replyId);
      return { text: event.text, terminal: true };
    }

    if (event.type === "tool") {
      // the ticker shows one tool call at a time, then fades
      setActivity([
        {
          name: event.name,
          status: event.status,
          detail: event.detail,
          preview: event.preview,
          handles: event.handles,
        },
      ]);
      if (activityTimer.current) {
        clearTimeout(activityTimer.current);
      }
      activityTimer.current = setTimeout(() => setActivity([]), 3500);
      return { text: partialReply, terminal: false };
    }

    setMessages((current) => updateReply(current, replyId, partialReply, false));
    setRecoveryMessage(event.message);
    return { text: partialReply, terminal: true };
  }

  async function sendMessage(text: string) {
    if (!conversationId || turnActive) {
      return;
    }

    const replyId = localMessageId("assistant");
    setDraft("");
    setLastOwnerText(text);
    setLiveReplyId(null);
    setRecoveryMessage(null);
    setActivity([]);
    setTurnState("streaming");
    setMessages((current) => [
      ...current,
      { id: localMessageId("owner"), role: "owner", content: text },
      { id: replyId, role: "weaver", content: "", streaming: true },
    ]);

    let partialReply = "";
    let terminalEventReceived = false;
    try {
      for await (const event of api.streamTurn(conversationId, text)) {
        const result = handleStreamEvent(event, replyId, partialReply);
        partialReply = result.text;
        terminalEventReceived = result.terminal;
        if (result.terminal) {
          break;
        }
      }
      if (!terminalEventReceived) {
        setMessages((current) => updateReply(current, replyId, partialReply, false));
        setRecoveryMessage(product.incompleteTurnMessage);
      }
    } catch (error) {
      setMessages((current) => updateReply(current, replyId, partialReply, false));
      const message =
        error instanceof Error ? error.message : product.connectionLostMessage;
      setRecoveryMessage(
        error instanceof Error
          ? `${message} This turn cannot resume.`
          : product.connectionLostMessage,
      );
    } finally {
      setTurnState("idle");
      try {
        await refreshConversations();
      } catch {
        // The transcript stays usable if only the conversation list refresh fails.
      }
    }
  }

  async function cancelTurn() {
    if (!conversationId || turnState !== "streaming") {
      return;
    }
    setTurnState("cancelling");
    try {
      await api.cancelTurn(conversationId);
    } catch (error) {
      setRecoveryMessage(
        error instanceof Error ? error.message : product.cancelFailedMessage,
      );
      setTurnState("streaming");
    }
  }

  // Regenerate (2026-08-09): re-answers the LAST question in place.
  // The old answer bubble is removed and replaced by the fresh stream -
  // the question stays exactly once, never re-sent as a new message.
  async function regenerateReply() {
    if (!conversationId || turnState !== "idle" || !liveReplyId) {
      return;
    }
    const oldReplyId = liveReplyId;
    const replyId = localMessageId("assistant");
    setLiveReplyId(null);
    setRecoveryMessage(null);
    setActivity([]);
    setTurnState("streaming");
    setMessages((current) => [
      ...current.filter((message) => message.id !== oldReplyId),
      { id: replyId, role: "weaver", content: "", streaming: true },
    ]);
    await drainTurnStream(replyId, api.regenerateTurn(conversationId));
  }

  // Plan 15 retry (2026-08-09): the dead-end refusal after a broken turn
  // is gone - the recovery panel retries the same message server-side
  // (the backend reloads it from the store; the client never re-sends).
  async function retryLastTurn() {
    if (!conversationId || turnState !== "idle" || !lastOwnerText) {
      return;
    }
    const replyId = localMessageId("assistant");
    setLiveReplyId(null);
    setRecoveryMessage(null);
    setActivity([]);
    setTurnState("streaming");
    setMessages((current) => [
      ...current,
      { id: replyId, role: "weaver", content: "", streaming: true },
    ]);
    await drainTurnStream(replyId, api.retryTurn(conversationId));
  }

  // Shared turn loop for retry and regenerate: drain the SSE stream into
  // the reply bubble, then settle the state (recovery message on failure,
  // conversation list refresh either way).
  async function drainTurnStream(
    replyId: string,
    stream: AsyncIterable<StreamEvent>,
  ) {
    let partialReply = "";
    let terminalEventReceived = false;
    try {
      for await (const event of stream) {
        const result = handleStreamEvent(event, replyId, partialReply);
        partialReply = result.text;
        terminalEventReceived = result.terminal;
        if (result.terminal) {
          break;
        }
      }
      if (!terminalEventReceived) {
        setMessages((current) =>
          updateReply(current, replyId, partialReply, false),
        );
        setRecoveryMessage(product.incompleteTurnMessage);
      }
    } catch (error) {
      setMessages((current) =>
        updateReply(current, replyId, partialReply, false),
      );
      const message =
        error instanceof Error ? error.message : product.connectionLostMessage;
      setRecoveryMessage(
        error instanceof Error
          ? `${message} This turn cannot resume.`
          : product.connectionLostMessage,
      );
    } finally {
      setTurnState("idle");
      try {
        await refreshConversations();
      } catch {
        // The transcript stays usable if only the conversation list refresh fails.
      }
    }
  }

  return {
    activeTitle,
    activity,
    bootError,
    cancelTurn,
    conversationId,
    conversations,
    createConversation,
    deleteConversation,
    loadPassage,
    draft,
    liveReplyId,
    messages,
    recoveryMessage,
    regenerateReply,
    retryLastTurn,
    selectConversation,
    sendMessage,
    setDraft,
    turnActive,
    turnState,
  };
}
