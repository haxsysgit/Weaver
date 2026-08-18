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
from weaver.agent.turn import (
    DeltaCallback,
    PacketBuilder,
    ToolEventCallback,
    TurnExitReason,
    TurnResult,
)
from weaver.model_layer import ModelLayer, ModelSpec
from weaver.model_layer.types import ReasoningEffort

from .common import now, uid
from .coordinator import RunCoordinator, _tx
from .repository import (
    ConversationRepository,
    ConversationSummaryRecord,
    ItemRecord,
    RunRecord,
)
from .runner import INTERRUPTED_RUN_EXISTS, ConversationRunner

logger = logging.getLogger(__name__)


class TranscriptMessage(TypedDict):
    """One owner-visible message from Weaver's persisted chat history."""

    message_id: str
    run_id: str
    turn_id: str
    role: Literal["owner", "weaver"]
    content: str
    created_at: str


class ConversationSummary(TypedDict):
    """One device-owned conversation suitable for the public web API."""

    conversation_id: str
    title: str
    created_at: str
    archived: bool
    pinned: bool
    edition_id: str


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
        on_tool_event: ToolEventCallback | None = None,
        tool_budget: int | None = None,
        reasoning: ReasoningEffort | None = None,
        packet_builder: PacketBuilder | None = None,
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

        Plan 15 seam: tool_budget caps the tool-calling steps; the final
        answer call is always guaranteed. None keeps the legacy
        max_model_steps behavior.

        Plan 15 seam: reasoning picks the per-call reasoning effort
        (always-on thinking). None keeps thinking disabled.
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
            on_tool_event=on_tool_event,
            tool_budget=tool_budget,
            reasoning=reasoning,
            packet_builder=packet_builder,
        )

    async def start_conversation(self, owner_text: str, device_id: str = "") -> str:
        """Create relationship + conversation + first turn in one transaction.
        Returns conversation_id."""
        assert self._coordinator is not None
        conv_id, _, _ = await self._coordinator.start_conversation_and_turn(
            owner_text, device_id
        )
        return conv_id

    @staticmethod
    def _last_owner_text(last_owner_body: str | None) -> str:
        if not last_owner_body:
            return ""
        try:
            body = json.loads(last_owner_body)
        except ValueError:
            return ""
        content = body.get("content", "")
        return content if isinstance(content, str) else ""

    @classmethod
    def _conversation_summary(
        cls, record: ConversationSummaryRecord
    ) -> ConversationSummary:
        manual_title = (record.manual_title or "").strip()
        generated_title = (record.generated_title or "").strip()
        fallback_title = cls._last_owner_text(record.last_owner_body)[:80]
        title = manual_title or generated_title or fallback_title or "New chat"
        return {
            "conversation_id": record.id,
            "title": title,
            "created_at": record.created_at,
            "archived": record.archived_at is not None,
            "pinned": record.pinned_at is not None,
            "edition_id": record.edition_id,
        }

    async def list_conversations(
        self, limit: int = 12, device_id: str = ""
    ) -> list[ConversationSummary]:
        """Return newest-first summaries owned by one exact device id."""
        assert self._repo is not None
        records = await self._repo.load_conversation_summaries(limit, device_id)
        return [self._conversation_summary(record) for record in records]

    async def set_generated_title(self, conversation_id: str, title: str) -> bool:
        """Store automatic naming without changing a reader's manual title."""
        assert self._repo is not None
        return await self._repo.set_generated_title(conversation_id, title)

    async def update_conversation_metadata(
        self,
        conversation_id: str,
        *,
        title: str | None,
        title_is_set: bool,
        archived: bool | None,
        pinned: bool | None,
    ) -> ConversationSummary | None:
        """Persist a partial reader metadata update and return its summary."""
        assert self._repo is not None
        archived_at = now() if archived is True else None
        pinned_at = now() if pinned is True else None
        updated = await self._repo.update_conversation_metadata(
            conversation_id,
            manual_title=title,
            update_manual_title=title_is_set,
            archived_at=archived_at,
            update_archived=archived is not None,
            pinned_at=pinned_at,
            update_pinned=pinned is not None,
        )
        if not updated:
            return None
        record = await self._repo.load_conversation_summary(conversation_id)
        if record is None:
            return None
        return self._conversation_summary(record)

    async def delete_conversation(self, conversation_id: str) -> bool:
        """Hard-delete a conversation and all its items, runs and events."""
        assert self._repo is not None
        return await self._repo.delete_conversation(conversation_id)

    async def conversation_exists(self, conversation_id: str) -> bool:
        """Distinguish an empty persisted chat from an unknown ID."""
        assert self._repo is not None
        return await self._repo.conversation_exists(conversation_id)

    async def conversation_owned_by(
        self, conversation_id: str, device_id: str
    ) -> bool:
        """True when the conversation belongs to this device.

        Empty request ids only reach empty-owner legacy conversations.
        """
        assert self._repo is not None
        owner = await self._repo.conversation_owner(conversation_id)
        if owner is None:
            return False
        return owner == device_id

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
                    "run_id": item.run_id,
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

    async def retry_last_turn(
        self,
        conversation_id: str,
        *,
        cancel_event: asyncio.Event | None = None,
        on_delta: DeltaCallback | None = None,
        on_tool_event: ToolEventCallback | None = None,
        tool_budget: int | None = None,
        reasoning: ReasoningEffort | None = None,
        packet_builder: PacketBuilder | None = None,
    ) -> tuple[TurnResult, str] | None:
        """Re-run the last interrupted turn with its own owner message.

        The interrupted run is superseded so future sends are no longer
        refused, the owner message is re-persisted for the new run (the
        runner treats this run's owner item as the current question), and
        the turn runs through the same loop as send(). Returns
        (result, message) or None when there is nothing to retry.
        """
        assert self._repo is not None and self._coordinator is not None
        assert self._runner is not None, (
            "retry_last_turn() requires model_layer, model, tool_registry, "
            "and execution_policy at construction"
        )
        interrupted = await self._repo.find_interrupted_run(conversation_id)
        if interrupted is None:
            return None
        items = await self._repo.load_items(
            conversation_id, for_run_id=interrupted.id
        )
        owner = [item for item in items if item.kind == "owner"]
        if not owner:
            return None
        message = json.loads(owner[-1].body).get("content", "")
        new_run_id, _ = await self._coordinator.retry_interrupted(
            conversation_id, interrupted
        )
        db = self._repo._db
        async with _tx(db):
            seq = await self._repo._next_sequence(conversation_id)
            await self._repo._insert_item(
                ItemRecord(
                    id=uid(),
                    conversation_id=conversation_id,
                    sequence=seq,
                    turn_id=interrupted.turn_id,
                    run_id=new_run_id,
                    kind="owner",
                    body=json.dumps({"content": message}),
                    created_at=now(),
                )
            )
            # The failed attempt must not block future sends; the retry run
            # is the owner of this turn now. (_update_run_phase commits
            # nothing on its own, so it must live inside the tx.)
            await self._repo._update_run_phase(interrupted.id, "superseded")
        if cancel_event is None:
            cancel_event = asyncio.Event()
        result = await self._runner.run_turn_in_run(
            conversation_id,
            new_run_id,
            interrupted.turn_id,
            cancel_event,
            on_delta=on_delta,
            on_tool_event=on_tool_event,
            tool_budget=tool_budget,
            reasoning=reasoning,
            packet_builder=packet_builder,
        )
        return result, message

    async def regenerate_last_turn(
        self,
        conversation_id: str,
        *,
        cancel_event: asyncio.Event | None = None,
        on_delta: DeltaCallback | None = None,
        on_tool_event: ToolEventCallback | None = None,
        tool_budget: int | None = None,
        reasoning: ReasoningEffort | None = None,
        packet_builder: PacketBuilder | None = None,
    ) -> tuple[TurnResult, str] | None:
        """Re-answer the last question in place, never as a new message.

        The last owner-bearing run (completed, interrupted, whatever its
        phase) is superseded, its question is re-persisted exactly once
        under a fresh run, and that superseded run's items are excluded
        from the model context — so the model answers the question fresh
        instead of anchoring on its own previous answer. Returns
        (result, message) or None when there is no question to regenerate
        (empty conversation, or the opener run with its blank message).
        """
        assert self._repo is not None and self._coordinator is not None
        assert self._runner is not None, (
            "regenerate_last_turn() requires model_layer, model, tool_registry, "
            "and execution_policy at construction"
        )
        runs = await self._repo.load_runs(conversation_id)
        target: RunRecord | None = None
        message = ""
        for run in reversed(runs):
            items = await self._repo.load_items(
                conversation_id, for_run_id=run.id
            )
            owner = [item for item in items if item.kind == "owner"]
            if not owner:
                continue
            text = json.loads(owner[-1].body).get("content", "")
            if not text.strip():
                continue  # the empty conversation opener is not a question
            target, message = run, text
            break
        if target is None:
            return None
        new_run_id, _ = await self._coordinator.retry_interrupted(
            conversation_id, target
        )
        db = self._repo._db
        async with _tx(db):
            seq = await self._repo._next_sequence(conversation_id)
            await self._repo._insert_item(
                ItemRecord(
                    id=uid(),
                    conversation_id=conversation_id,
                    sequence=seq,
                    turn_id=target.turn_id,
                    run_id=new_run_id,
                    kind="owner",
                    body=json.dumps({"content": message}),
                    created_at=now(),
                )
            )
            await self._repo._update_run_phase(target.id, "superseded")
        if cancel_event is None:
            cancel_event = asyncio.Event()
        result = await self._runner.run_turn_in_run(
            conversation_id,
            new_run_id,
            target.turn_id,
            cancel_event,
            on_delta=on_delta,
            on_tool_event=on_tool_event,
            tool_budget=tool_budget,
            reasoning=reasoning,
            packet_builder=packet_builder,
            exclude_run_ids={target.id},
        )
        return result, message

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
