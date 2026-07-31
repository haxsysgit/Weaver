"""ContextAssembler: pick the working brief that fits the token budget.

Plan 009 contract: counts tokens at the projection boundary
(project_messages output), drops the oldest exchange blocks first, never
splits an exchange (assistant tool_calls + its tool_call/tool_result
items), and never drops the most recent owner message.
"""

from __future__ import annotations

import logging
from dataclasses import dataclass

import tiktoken

from weaver.agent.messages import ConversationMessage, project_messages

from .common import now, uid
from .items import items_to_messages
from .repository import ItemRecord

logger = logging.getLogger(__name__)


@dataclass
class ContextSnapshot:
    """In-memory record of which items entered the working brief."""

    id: str
    conversation_id: str
    first_item_id: str | None  # oldest included exchange's first item; None if all fit
    last_item_id: str
    item_count: int
    token_count: int
    token_budget: int | None  # None = count-only mode, no truncation
    created_at: str


def _count_messages(
    encoding,
    messages: list[ConversationMessage],
) -> int:
    """Tokens of one exchange block at the projection boundary.

    The system prompt is counted separately (once), so blocks project with
    an empty system prompt. Tool schemas are never part of this count: they
    live in the request, not in project_messages output.
    """
    # ponytail: cl100k_base is an approximation of DeepSeek's real
    # tokenizer, and content+arguments under-counts role markers and tool
    # names. Fine until a real tokenizer binding exists (plan maintenance
    # note); determinism tests guard the formula, not cross-tokenizer
    # equality.
    total = 0
    for model_message in project_messages(system_prompt="", history=messages):
        total += len(encoding.encode(model_message.content or ""))
        for call in model_message.tool_calls:
            total += len(encoding.encode(call.arguments_json))
    return total


def _group_blocks(items: list[ItemRecord]) -> list[list[ItemRecord]]:
    """Group items into atomic exchange blocks.

    A block starts at every owner/assistant item; tool_call/tool_result
    items belong to the block they follow (the assistant that declared the
    calls). A lone tool item without a preceding block (corrupt data) gets
    its own block rather than attaching sideways.
    """
    blocks: list[list[ItemRecord]] = []
    for item in items:
        # ponytail: corrupt data with no owner anywhere leaves pin_index 0,
        # so the overflow branch could return a lone tool block (orphaned
        # tool role). Unreachable per the pinned mapping table (tools always
        # follow their assistant); guard comment only, no extra code.
        if item.kind in ("owner", "assistant") or not blocks:
            blocks.append([item])
        else:
            blocks[-1].append(item)
    return blocks


class ContextAssembler:
    """Token-budgeted selection over ItemRecord history."""

    def __init__(
        self,
        system_prompt: str,
        token_budget: int | None,
        encoding_name: str = "cl100k_base",
    ) -> None:
        """budget None = count-only mode: no truncation, token_count still
        reported (used by the TUI's context meter; Plan 010 Phase D)."""
        self._system_prompt = system_prompt
        self._token_budget = token_budget
        self._encoding = tiktoken.get_encoding(encoding_name)

    async def assemble(
        self,
        items: list[ItemRecord],
    ) -> tuple[list[ItemRecord], ContextSnapshot]:
        """Return the items that fit the budget, oldest dropped first.

        The most recent owner message is pinned: it is never dropped, and
        if it alone exceeds the budget the assembler returns it anyway
        (token_count > token_budget, no raise).
        """
        conversation_id = items[0].conversation_id if items else ""
        system_tokens = len(self._encoding.encode(self._system_prompt))

        blocks = _group_blocks(items)
        block_counts = [
            _count_messages(self._encoding, items_to_messages(block))
            for block in blocks
        ]
        total = system_tokens + sum(block_counts)

        if self._token_budget is None or total <= self._token_budget:
            return items, self._snapshot(
                conversation_id=conversation_id,
                kept_items=items,
                first_item_id=None,
                token_count=total,
            )

        # Pin: the block holding the most recent owner message.
        pin_index = 0
        for index in range(len(blocks) - 1, -1, -1):
            if any(item.kind == "owner" for item in blocks[index]):
                pin_index = index
                break

        # Drop whole blocks from the oldest end until the budget holds.
        # Blocks older than the pin are droppable; the pin and everything
        # newer than it are not.
        keep_from = 0
        # ponytail: O(n²) recount via sum(block_counts[keep_from:]); fine at
        # realistic conversation sizes, prefix sums if it ever matters.
        while keep_from < pin_index:
            total_kept = system_tokens + sum(block_counts[keep_from:])
            if total_kept <= self._token_budget:
                break
            keep_from += 1
        kept_blocks = blocks[keep_from:]

        # If the pin (plus anything newer) still overflows the budget,
        # the contract requires returning the pinned owner message alone
        # with token_count > token_budget — never raise, never drop the pin.
        token_count = system_tokens + sum(block_counts[keep_from:])
        if token_count > self._token_budget:
            kept_blocks = [blocks[pin_index]]
            token_count = system_tokens + block_counts[pin_index]

        kept_items = [item for block in kept_blocks for item in block]

        return kept_items, self._snapshot(
            conversation_id=conversation_id,
            kept_items=kept_items,
            first_item_id=kept_blocks[0][0].id,
            token_count=token_count,
        )

    def _snapshot(
        self,
        *,
        conversation_id: str,
        kept_items: list[ItemRecord],
        first_item_id: str | None,
        token_count: int,
    ) -> ContextSnapshot:
        return ContextSnapshot(
            id=uid(),
            conversation_id=conversation_id,
            first_item_id=first_item_id,
            last_item_id=kept_items[-1].id if kept_items else "",
            item_count=len(kept_items),
            token_count=token_count,
            token_budget=self._token_budget,
            created_at=now(),
        )
