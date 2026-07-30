"""Conversation history and cancellation around Weaver turns."""

from __future__ import annotations

import asyncio
import logging
import uuid

from weaver.agent.errors import safe_error
from weaver.agent.messages import ConversationMessage, UserMessage
from weaver.agent.tools import ToolExecutionPolicy, ToolRegistry
from weaver.agent.turn import TurnExitReason, TurnResult, run_turn
from ..model_layer import ModelLayer, ModelSpec

logger = logging.getLogger(__name__)


def _message_id() -> str:
    return uuid.uuid4().hex[:12]


class AgentSession:
    def __init__(
        self,
        *,
        session_id: str,
        model_layer: ModelLayer,
        model: ModelSpec,
        system_prompt: str,
        tool_registry: ToolRegistry,
        execution_policy: ToolExecutionPolicy,
        active_tools: tuple[str, ...] = (),
    ) -> None:
        self.session_id = session_id
        self._model_layer = model_layer
        self._model = model
        self._system_prompt = system_prompt
        self._tool_registry = tool_registry
        self._execution_policy = execution_policy
        self._active_tools = active_tools

        self._history: list[ConversationMessage] = []
        self._cancel_event: asyncio.Event | None = None
        self._busy = False
        self._turn_count = 0
        self._pending_message: str | None = None

    @property
    def history(self) -> list[ConversationMessage]:
        return list(self._history)

    @property
    def turn_count(self) -> int:
        return self._turn_count

    async def send(self, user_text: str) -> TurnResult:
        if self._busy:
            if self._pending_message is not None:
                return TurnResult(
                    turn_id="",
                    exit_reason=TurnExitReason.INTERRUPTED,
                    safe_failure="A message is already queued.",
                )
            self._pending_message = user_text
            return TurnResult(
                turn_id="",
                exit_reason=TurnExitReason.INTERRUPTED,
                safe_failure="Session is busy; message queued.",
            )

        self._busy = True
        self._cancel_event = asyncio.Event()
        turn_id = _message_id()
        user_message = UserMessage(
            message_id=_message_id(),
            turn_id=turn_id,
            content=user_text,
        )
        self._history.append(user_message)

        try:
            result = await run_turn(
                session_id=self.session_id,
                turn_id=turn_id,
                model_layer=self._model_layer,
                model=self._model,
                system_prompt=self._system_prompt,
                history=list(self._history),
                tool_registry=self._tool_registry,
                active_tools=self._active_tools,
                execution_policy=self._execution_policy,
                cancel_event=self._cancel_event,
            )
        except Exception as error:
            logger.warning(
                "turn %s crashed: %s",
                turn_id,
                error,
                exc_info=True,
            )
            result = TurnResult(
                turn_id=turn_id,
                exit_reason=TurnExitReason.MODEL_FAILED,
                safe_failure=safe_error("turn"),
            )

        self._history.extend(result.new_messages)
        self._turn_count += 1
        self._busy = False
        self._cancel_event = None

        pending_message = self._pending_message
        self._pending_message = None
        if pending_message is not None:
            return await self.send(pending_message)
        return result

    def cancel(self) -> None:
        if self._cancel_event is not None:
            self._cancel_event.set()
