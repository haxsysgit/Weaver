"""Agent session — owns interaction boundaries, history, and cancellation.

A thin session that orchestrates turns through the turn runtime.
Much simpler than HaxJobs' session — Weaver is single-user, conversational.
"""

from __future__ import annotations

import asyncio
import logging
import uuid
from typing import Callable

from weaver.agent.errors import safe_error
from weaver.agent.messages import ConversationMessage, UserMessage
from weaver.agent.tools import ToolRegistry
from weaver.agent.turn import TurnExitReason, TurnResult, run_turn
from weaver.client import ModelClient

logger = logging.getLogger(__name__)


def _mid() -> str:
    return uuid.uuid4().hex[:12]


class AgentSession:
    """Owns history, tool registry, model, and cancellation for one conversation.

    One pending message slot for busy-input policy.
    """

    def __init__(
        self,
        *,
        session_id: str,
        model: ModelClient,
        system_prompt: str,
        tool_registry: ToolRegistry,
        active_tools: tuple[str, ...] = (),
    ) -> None:
        self.session_id = session_id
        self._model = model
        self._system_prompt = system_prompt
        self._tool_registry = tool_registry
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
        """Send a user message and run one turn. Busy-input policy active."""
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
        turn_id = _mid()

        # Persist user message
        user_msg = UserMessage(
            message_id=_mid(),
            turn_id=turn_id,
            content=user_text,
        )
        self._history.append(user_msg)

        try:
            result = await run_turn(
                turn_id=turn_id,
                model=self._model,
                system_prompt=self._system_prompt,
                history=list(self._history),
                tool_registry=self._tool_registry,
                active_tools=self._active_tools,
                cancel_event=self._cancel_event,
            )
        except Exception as exc:
            logger.warning("turn %s crashed: %s", turn_id, exc, exc_info=True)
            result = TurnResult(
                turn_id=turn_id,
                exit_reason=TurnExitReason.MODEL_FAILED,
                safe_failure=safe_error("turn"),
            )

        # Persist new messages from this turn
        self._history.extend(result.new_messages)
        self._turn_count += 1
        self._busy = False
        self._cancel_event = None

        # Process queued message
        pending = self._pending_message
        self._pending_message = None
        if pending is not None:
            return await self.send(pending)

        return result

    def cancel(self) -> None:
        """Request cancellation of the current turn."""
        if self._cancel_event is not None:
            self._cancel_event.set()
