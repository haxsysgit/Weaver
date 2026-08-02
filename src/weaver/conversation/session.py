"""SessionWeave: thin top-level orchestrator for Weaver conversations."""

from __future__ import annotations

import asyncio
import json
import logging
import os
from pathlib import Path
from typing import Literal, TypedDict

import aiosqlite

from weaver.agent.tools import ToolExecutionPolicy, ToolRegistry
from weaver.agent.turn import DeltaCallback, TurnExitReason, TurnResult
from weaver.model_layer import ModelLayer, ModelSpec

from .coordinator import RunCoordinator
from .repository import ConversationRepository
from .runner import INTERRUPTED_RUN_EXISTS, ConversationRunner

logger = logging.getLogger(__name__)


class TranscriptMessage(TypedDict):
    """One owner-visible message from Weaver's persisted chat history."""

    message_id: str
    turn_id: str
    role: Literal["owner", "weaver"]
    content: str
    created_at: str


class SessionWeave:
    """Wires repository and coordinator.
    Only public surface for subprocess tests.
    """

    def __init__(
        self,
        state_dir: Path,
        *,
        model_layer: ModelLayer | None = None,
        model: ModelSpec | None = None,
        system_prompt: str = "",
        tool_registry: ToolRegistry | None = None,
        active_tools: tuple[str, ...] = (),
        execution_policy: ToolExecutionPolicy | None = None,
        token_budget: int | None = None,
    ) -> None:
        self._state_dir = state_dir
        self._db: aiosqlite.Connection | None = None
        self._repo: ConversationRepository | None = None
        self._coordinator: RunCoordinator | None = None
        self._runner: ConversationRunner | None = None

        self._model_layer = model_layer
        self._model = model
        self._system_prompt = system_prompt
        self._tool_registry = tool_registry
        self._active_tools = active_tools
        self._execution_policy = execution_policy
        self._token_budget = token_budget

        provided = [
            model_layer is not None,
            model is not None,
            tool_registry is not None,
            execution_policy is not None,
        ]
        if any(provided) and not all(provided):
            raise ValueError(
                "model_layer, model, tool_registry, and execution_policy "
                "must be provided together to enable send()"
            )

    @property
    def repo(self) -> ConversationRepository:
        assert self._repo is not None, "call open() first"
        return self._repo

    @property
    def coordinator(self) -> RunCoordinator:
        assert self._coordinator is not None, "call open() first"
        return self._coordinator

    async def open(self) -> None:
        """Create state directory, open database, run migrations."""
        self._state_dir.mkdir(mode=0o700, parents=True, exist_ok=True)
        db_path = self._state_dir / "weaver.sqlite3"
        self._db = await aiosqlite.connect(str(db_path))
        self._repo = ConversationRepository(self._db)
        await self._repo.setup()
        self._coordinator = RunCoordinator(self._repo)
        if self._model_layer is not None and self._tool_registry is not None:
            assert self._model is not None
            assert self._execution_policy is not None
            self._runner = ConversationRunner(
                self._repo,
                self._coordinator,
                model_layer=self._model_layer,
                model=self._model,
                system_prompt=self._system_prompt,
                tool_registry=self._tool_registry,
                active_tools=self._active_tools,
                execution_policy=self._execution_policy,
                token_budget=self._token_budget,
            )

        # Enforce owner-only file permissions
        os.chmod(str(db_path), 0o600)

    async def close(self) -> None:
        if self._db is not None:
            await self._db.close()
            self._db = None
            self._repo = None
            self._coordinator = None

    async def send(
        self,
        conversation_id: str,
        user_text: str,
        cancel_event: asyncio.Event | None = None,
        on_delta: DeltaCallback | None = None,
    ) -> TurnResult:
        """Run one full turn with the owner's input and return the result.

        Requires the model/tool kwargs at construction. Contract §5: if an
        interrupted run exists, returns a safe error instead of
        auto-continuing; continue_interrupted/retry_interrupted remain the
        explicit recovery methods.

        Plan 010 seam: the caller may pass its own cancel event (the TUI
        sets it on Ctrl+C). None keeps the Plan 008/009 internal event.

        Plan 010 Phase B seam: an async on_delta callback receives live
        text chunks as the model streams them; deltas are a preview only,
        the final assistant message is what persists. None keeps the
        buffered behavior.
        """
        assert self._repo is not None and self._coordinator is not None
        assert self._runner is not None, (
            "send() requires model_layer, model, tool_registry, and "
            "execution_policy at construction"
        )
        interrupted = await self._repo.find_interrupted_run(conversation_id)
        if interrupted is not None:
            return TurnResult(
                turn_id="",
                exit_reason=TurnExitReason.INTERRUPTED,
                safe_failure=INTERRUPTED_RUN_EXISTS,
            )

        turn_sequence = await self._repo._next_turn_sequence(conversation_id)
        turn_id, run_id = await self._coordinator.start_turn(
            conversation_id,
            user_text,
            turn_sequence=turn_sequence,
        )
        if cancel_event is None:
            cancel_event = asyncio.Event()
        return await self._runner.run_turn_in_run(
            conversation_id,
            run_id,
            turn_id,
            cancel_event,
            on_delta=on_delta,
        )

    async def start_conversation(self, owner_text: str) -> str:
        """Create relationship + conversation + first turn in one transaction.
        Returns conversation_id."""
        assert self._coordinator is not None
        conv_id, _, _ = await self._coordinator.start_conversation_and_turn(owner_text)
        return conv_id

    async def list_conversations(self, limit: int = 12) -> list[dict]:
        """Recent conversations, newest first, with the last owner message.

        Each entry: conversation_id, created_at, last_owner_text (may be
        empty when the conversation has no owner item yet).
        """
        assert self._repo is not None
        rows = await self._repo.load_conversations(limit)
        out = []
        for conv_id, created_at, last_owner in rows:
            text = ""
            if last_owner:
                try:
                    text = json.loads(last_owner).get("content", "")
                except ValueError:
                    text = ""
            out.append(
                {
                    "conversation_id": conv_id,
                    "created_at": created_at,
                    "last_owner_text": text,
                }
            )
        return out

    async def conversation_exists(self, conversation_id: str) -> bool:
        """Distinguish an empty persisted chat from an unknown ID."""
        assert self._repo is not None
        return await self._repo.conversation_exists(conversation_id)

    async def load_transcript(
        self, conversation_id: str
    ) -> list[TranscriptMessage]:
        """Return only persisted prose intended for the owner.

        Empty openers, assistant tool requests, tool calls, tool results,
        and empty assistant records stay inside Weaver's private protocol.
        """
        assert self._repo is not None
        items = await self._repo.load_items(conversation_id)
        transcript: list[TranscriptMessage] = []
        for item in items:
            if item.kind not in ("owner", "assistant"):
                continue
            try:
                body = json.loads(item.body)
            except json.JSONDecodeError as error:
                raise ValueError(
                    f"item {item.id}: body is not valid JSON"
                ) from error
            if not isinstance(body, dict):
                raise ValueError(f"item {item.id}: body is not a JSON object")

            content = body.get("content", "")
            if not isinstance(content, str):
                raise ValueError(f"item {item.id}: content is not text")
            if not content.strip():
                continue
            if item.kind == "assistant" and body.get("tool_calls"):
                continue

            role: Literal["owner", "weaver"]
            role = "owner" if item.kind == "owner" else "weaver"
            transcript.append(
                {
                    "message_id": item.id,
                    "turn_id": item.turn_id,
                    "role": role,
                    "content": content,
                    "created_at": item.created_at,
                }
            )
        return transcript

    async def list_recent_turns(
        self, conversation_id: str, limit: int = 12
    ) -> list[dict]:
        """Recent runs of a conversation for the TUI's history screen.

        Each entry: run_id, created_at, status (completed/interrupted/
        running), owner_text (the user message that started the run).
        Plan 010 Phase D: observability without touching the send path.
        """
        assert self._repo is not None
        runs = await self._repo.load_runs(conversation_id)
        items = await self._repo.load_items(conversation_id)
        owner_by_run: dict[str, str] = {}
        for item in items:
            if item.kind == "owner" and item.run_id not in owner_by_run:
                # Item bodies are JSON (see items.py); owner items carry
                # the message text under 'content'.
                try:
                    body = json.loads(item.body)
                except ValueError:
                    body = {}
                owner_by_run[item.run_id] = str(body.get("content", ""))
        entries = []
        for run in runs[-limit:][::-1]:
            # queued = the conversation opener (owner message, no model
            # call yet), so it carries no outcome.
            if run.phase == "completed":
                status = "completed"
            elif run.phase == "interrupted":
                status = "interrupted"
            elif run.phase == "queued":
                status = "—"
            else:
                status = "running"
            entries.append(
                {
                    "run_id": run.id,
                    "created_at": run.created_at,
                    "status": status,
                    "owner_text": owner_by_run.get(run.id, ""),
                }
            )
        return entries

    async def continue_interrupted(self, conversation_id: str) -> str | None:
        """If an interrupted run exists, continue it.
        Returns new run_id or None."""
        assert self._repo is not None and self._coordinator is not None
        interrupted = await self._repo.find_interrupted_run(conversation_id)
        if interrupted is None:
            return None
        new_run_id, _, _ = await self._coordinator.continue_interrupted(
            conversation_id, interrupted
        )
        return new_run_id

    async def retry_interrupted(self, conversation_id: str) -> str | None:
        """If an interrupted run exists, retry it (omit interrupted items).
        Returns new run_id or None."""
        assert self._repo is not None and self._coordinator is not None
        interrupted = await self._repo.find_interrupted_run(conversation_id)
        if interrupted is None:
            return None
        new_run_id, _ = await self._coordinator.retry_interrupted(
            conversation_id, interrupted
        )
        return new_run_id

    async def find_interrupted_runs(self) -> list[dict]:
        """Load all conversations and return any with interrupted runs."""
        assert self._repo is not None
        cursor = await self._repo._db.execute("SELECT id FROM conversation")
        rows = await cursor.fetchall()
        result = []
        for (conv_id,) in rows:
            interrupted = await self._repo.find_interrupted_run(conv_id)
            if interrupted is not None:
                items = await self._repo.load_items(conv_id)
                result.append(
                    {
                        "conversation_id": conv_id,
                        "interrupted_run": {
                            "id": interrupted.id,
                            "attempt": interrupted.attempt,
                            "phase": interrupted.phase,
                        },
                        "item_count": len(items),
                    }
                )
        return result
