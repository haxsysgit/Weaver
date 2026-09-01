import { useEffect, useMemo, useRef, useState } from "react";

import type {
  ChatApi,
  ConversationMetadataPatch,
  ConversationSummary,
  StoredMessage,
  StreamEvent,
} from "../lib/chatApi";
import { ChatApiError } from "../lib/chatApi";
import type { ChatProduct } from "../lib/product";
import type { DisplayMessage } from "../lib/chatModel";
import {
  incompleteRecovery,
  recoveryFromError,
  recoveryFromStreamEvent,
  type RecoveryIssue,
} from "../lib/chatRecovery";

export type TurnState = "idle" | "streaming" | "cancelling";

export interface ToolActivity {
  name: string;
  status: string;
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

function conversationActionMessage(error: unknown): string {
  if (!(error instanceof ChatApiError)) {
    return "The change could not be saved. Try again.";
  }
  if (error.status === 404) {
    return "That thread can no longer be found.";
  }
  if (error.status === 409) {
    return "That thread is still weaving. Let its answer settle first.";
  }
  if (error.status === 422) {
    return "The Spell could not accept that change.";
  }
  return "The change could not be saved. Try again.";
}

function conversationRecallMessage(error: unknown): string {
  if (error instanceof ChatApiError) {
    if (error.status === 404) {
      return "That thread can no longer be found.";
    }
    if (error.status === 409) {
      return "That thread is still weaving. Let its answer settle first.";
    }
  }
  return "That thread could not be recalled. Try again.";
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
  const [recovery, setRecovery] = useState<RecoveryIssue | null>(null);
  const [booting, setBooting] = useState(true);
  const [bootError, setBootError] = useState<string | null>(null);
  const [activity, setActivity] = useState<ToolActivity[]>([]);
  const [conversationActionError, setConversationActionError] = useState<string | null>(null);
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
    const loadId = activeLoad.current + 1;
    activeLoad.current = loadId;

    async function bootstrap() {
      try {
        let availableConversations = await api.listConversations();
        let nextConversationId = localStorage.getItem(product.storageKey);
        const savedConversationExists = availableConversations.some(
          (conversation) =>
            conversation.conversation_id === nextConversationId &&
            !conversation.archived,
        );

        if (!savedConversationExists) {
          nextConversationId = availableConversations.find(
            (conversation) => !conversation.archived,
          )?.conversation_id ?? null;
        }
        if (!nextConversationId) {
          const created = await api.createConversation();
          nextConversationId = created.conversation_id;
          availableConversations = await api.listConversations();
        }

        const storedMessages = await api.loadMessages(nextConversationId);
        if (!mounted || activeLoad.current !== loadId) {
          return;
        }
        setConversations(availableConversations);
        setConversationId(nextConversationId);
        setMessages(storedMessages.map(toDisplayMessage));
        localStorage.setItem(product.storageKey, nextConversationId);
      } catch (error) {
        if (mounted && activeLoad.current === loadId) {
          setBootError(recoveryFromError(error).message);
        }
      } finally {
        if (mounted && activeLoad.current === loadId) {
          setBooting(false);
        }
      }
    }

    void bootstrap();
    return () => {
      mounted = false;
    };
  }, [api, product.storageKey, product.wakeErrorMessage]);

  async function refreshConversations() {
    const refreshed = await api.listConversations();
    setConversations(refreshed);
    return refreshed;
  }

  async function startFreshConversation() {
    const loadId = activeLoad.current + 1;
    activeLoad.current = loadId;
    try {
      const created = await api.createConversation();
      setConversationId(created.conversation_id);
      setMessages([]);
      setLastOwnerText(null);
      setLiveReplyId(null);
      setRecovery(null);
      localStorage.setItem(product.storageKey, created.conversation_id);
      await refreshConversations();
    } finally {
      if (activeLoad.current === loadId) {
        setBooting(false);
      }
    }
  }

  async function createConversation() {
    setConversationActionError(null);
    if (turnActive) {
      setConversationActionError(
        "That thread is still weaving. Let its answer settle first.",
      );
      return false;
    }
    if (messages.length === 0) {
      return true;
    }
    try {
      await startFreshConversation();
      return true;
    } catch (error) {
      setConversationActionError(conversationActionMessage(error));
      return false;
    }
  }

  async function deleteConversation(conversationId: string) {
    setConversationActionError(null);
    try {
      await api.deleteConversation(conversationId);
      const remaining = (await api.listConversations()).filter(
        (item) => item.conversation_id !== conversationId,
      );
      setConversations(remaining);
      if (conversationId === conversationIdState) {
        const nextActive = remaining.find((item) => !item.archived);
        if (nextActive) {
          await selectConversation(nextActive.conversation_id);
        } else {
          await startFreshConversation();
        }
      }
      return true;
    } catch (error) {
      setConversationActionError(conversationActionMessage(error));
      return false;
    }
  }

  async function updateConversation(
    conversationId: string,
    patch: ConversationMetadataPatch,
  ) {
    setConversationActionError(null);
    try {
      const updated = await api.updateConversation(conversationId, patch);
      const nextConversations = conversations.map((conversation) => {
        return conversation.conversation_id === conversationId
          ? updated
          : conversation;
      });
      setConversations(nextConversations);

      if (updated.archived && conversationId === conversationIdState) {
        const nextActive = nextConversations.find((conversation) => {
          return !conversation.archived && conversation.conversation_id !== conversationId;
        });
        if (nextActive) {
          await selectConversation(nextActive.conversation_id);
        } else {
          await startFreshConversation();
        }
      }
      return true;
    } catch (error) {
      setConversationActionError(conversationActionMessage(error));
      if (error instanceof ChatApiError && error.status === 404) {
        try {
          await refreshConversations();
        } catch {
          // Keep the safe action error visible if the refresh also fails.
        }
      }
      return false;
    }
  }

  async function selectConversation(nextConversationId: string) {
    setConversationActionError(null);
    if (turnActive) {
      setConversationActionError(
        "That thread is still weaving. Let its answer settle first.",
      );
      return false;
    }
    if (nextConversationId === conversationId) {
      return true;
    }

    const loadId = activeLoad.current + 1;
    activeLoad.current = loadId;
    try {
      const storedMessages = await api.loadMessages(nextConversationId);
      if (activeLoad.current !== loadId) {
        return false;
      }

      setConversationId(nextConversationId);
      setMessages(storedMessages.map(toDisplayMessage));
      setLastOwnerText(null);
      setLiveReplyId(null);
      setRecovery(null);
      localStorage.setItem(product.storageKey, nextConversationId);
      return true;
    } catch (error) {
      if (activeLoad.current === loadId) {
        setConversationActionError(conversationRecallMessage(error));
      }
      return false;
    } finally {
      if (activeLoad.current === loadId) {
        setBooting(false);
      }
    }
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
        },
      ]);
      if (activityTimer.current) {
        clearTimeout(activityTimer.current);
      }
      activityTimer.current = setTimeout(() => setActivity([]), 3500);
      return { text: partialReply, terminal: false };
    }

    setMessages((current) => updateReply(current, replyId, partialReply, false));
    setRecovery(recoveryFromStreamEvent(event));
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
    setRecovery(null);
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
        setRecovery(incompleteRecovery());
      }
    } catch (error) {
      setMessages((current) => updateReply(current, replyId, partialReply, false));
      setRecovery(recoveryFromError(error));
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
      setRecovery(recoveryFromError(error));
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
    setRecovery(null);
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
    setRecovery(null);
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
        setRecovery(incompleteRecovery());
      }
    } catch (error) {
      setMessages((current) =>
        updateReply(current, replyId, partialReply, false),
      );
      setRecovery(recoveryFromError(error));
    } finally {
      setTurnState("idle");
      try {
        await refreshConversations();
      } catch {
        // The transcript stays usable if only the conversation list refresh fails.
      }
    }
  }

  // The regenerate affordance belongs under the LAST reply: the last
  // message is a weaver reply and the turn is idle. This holds across
  // page reloads too (liveReplyId only exists for the in-session
  // stream, so it could never light up a server-loaded transcript).
  const lastReplyId = (() => {
    const last = messages[messages.length - 1];
    return last && last.role === "weaver" ? last.id : null;
  })();

  return {
    activeTitle,
    activity,
    booting,
    bootError,
    cancelTurn,
    conversationId,
    conversationActionError,
    conversations,
    createConversation,
    deleteConversation,
    draft,
    lastReplyId,
    liveReplyId,
    messages,
    recovery,
    recoveryMessage: recovery?.message ?? null,
    regenerateReply,
    retryLastTurn,
    selectConversation,
    sendMessage,
    setDraft,
    turnActive,
    turnState,
    updateConversation,
  };
}
