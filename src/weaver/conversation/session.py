"""SessionWeave: thin top-level orchestrator for Weaver conversations."""

from __future__ import annotations

import asyncio
import logging
import os
from pathlib import Path

import aiosqlite

from weaver.agent.tools import ToolExecutionPolicy, ToolRegistry
from weaver.agent.turn import TurnExitReason, TurnResult
from weaver.model_layer import ModelLayer, ModelSpec

from .coordinator import RunCoordinator
from .repository import ConversationRepository
from .runner import INTERRUPTED_RUN_EXISTS, ConversationRunner

logger = logging.getLogger(__name__)


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
        if (
            self._model_layer is not None
            and self._tool_registry is not None
        ):
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
    ) -> TurnResult:
        """Run one full turn with the owner's input and return the result.

        Requires the model/tool kwargs at construction. Contract §5: if an
        interrupted run exists, returns a safe error instead of
        auto-continuing; continue_interrupted/retry_interrupted remain the
        explicit recovery methods.
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
        cancel_event = asyncio.Event()
        return await self._runner.run_turn_in_run(
            conversation_id,
            run_id,
            turn_id,
            cancel_event,
        )

    async def start_conversation(self, owner_text: str) -> str:
        """Create relationship + conversation + first turn in one transaction.
        Returns conversation_id."""
        assert self._coordinator is not None
        conv_id, _, _ = await self._coordinator.start_conversation_and_turn(
            owner_text
        )
        return conv_id

    async def continue_interrupted(
        self, conversation_id: str
    ) -> str | None:
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

    async def retry_interrupted(
        self, conversation_id: str
    ) -> str | None:
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
