"""The narrow tools that write Weaver's memory of a reader (Plan 035).

Four tools, each able to write one kind of record and nothing else:

- ``keep_opinion``: an opinion in an agreed category, with its reason and
  the chapters behind it;
- ``remember_reader``: one profile field, only from words the reader wrote
  in this conversation;
- ``keep_note``: a correction with its status, or a learned convention;
- ``keep_story_frame``: a fanfic thread's point of view, tense, invented
  details and canon anchors.

The device is never an argument. It is the device that owns the
conversation, looked up from the turn's conversation id, so the model cannot
write into another reader's memory. Every value is scanned by the store.
"""

from __future__ import annotations

import re
from typing import Any, Protocol

from weaver.agent.tools import EffectKind, ToolDefinition, ToolRegistry
from weaver.reader_memory import (
    CORRECTION_STATUSES,
    NOTE_KINDS,
    OPINION_CATEGORIES,
    PROFILE_FIELDS,
    TENSES,
    ReaderMemory,
    WriteOutcome,
)

MEMORY_TOOLS = ("keep_opinion", "remember_reader", "keep_note", "keep_story_frame")
READER_WORDS_LIMIT = 300


class MemoryContext(Protocol):
    """What the tools need to know about the turn's conversation."""

    async def device(self, conversation_id: str) -> str | None: ...

    async def domain(self, conversation_id: str) -> str: ...

    async def reader_messages(self, conversation_id: str) -> tuple[str, ...]: ...


class SessionMemoryContext:
    """Resolves the conversation through the chat session, set after open."""

    def __init__(self) -> None:
        self.session = None

    async def device(self, conversation_id: str) -> str | None:
        if self.session is None or not conversation_id:
            return None
        return await self.session.conversation_device(conversation_id)

    async def domain(self, conversation_id: str) -> str:
        if self.session is None:
            return "canon"
        domain, _kind = await self.session.conversation_domain(conversation_id)
        return domain

    async def reader_messages(self, conversation_id: str) -> tuple[str, ...]:
        if self.session is None:
            return ()
        transcript = await self.session.load_transcript(conversation_id)
        return tuple(
            item["content"] for item in transcript if item.get("role") == "owner"
        )


def _plain(text: str) -> str:
    return " ".join(re.findall(r"[a-z0-9']+", text.casefold()))


def _said_by_reader(words: Any, messages: tuple[str, ...]) -> bool:
    """True when ``words`` appear in something the reader wrote here."""
    if not isinstance(words, str) or len(words) > READER_WORDS_LIMIT:
        return False
    wanted = _plain(words)
    if len(wanted) < 2:
        return False
    return any(f" {wanted} " in f" {_plain(message)} " for message in messages)


def _result(outcome: WriteOutcome, *, kept_note: str = "") -> dict[str, Any]:
    result: dict[str, Any] = {"kept": outcome.ok}
    if outcome.reason:
        result["reason"] = outcome.reason
    if outcome.changed_from:
        result["changed_from"] = outcome.changed_from
        result["say"] = (
            f"You changed your mind from {outcome.changed_from}. Tell the reader "
            "plainly, with the reason."
        )
    if outcome.rule:
        result["rule"] = True
    if outcome.curated:
        result["curated"] = outcome.curated
    if not outcome.ok:
        result["say"] = (
            "Nothing was kept. Do not tell the reader it was remembered."
        )
    elif kept_note:
        result.setdefault("say", kept_note)
    return result


def _refused(reason: str) -> dict[str, Any]:
    return _result(WriteOutcome(ok=False, reason=reason))


def _string(arguments: dict, name: str) -> str | None:
    value = arguments.get(name)
    return value if isinstance(value, str) else None


def _list(arguments: dict, name: str) -> list | None:
    value = arguments.get(name, [])
    return value if isinstance(value, list) else None


def _beyond(chapters: list, max_chapter: int | None) -> bool:
    if max_chapter is None:
        return False
    try:
        return any(int(chapter) > max_chapter for chapter in chapters)
    except (TypeError, ValueError):
        return False


def register_memory_tools(
    registry: ToolRegistry, memory: ReaderMemory, context: MemoryContext
) -> None:
    """Register the four memory tools on a web registry."""

    async def keep_opinion(arguments: dict, ctx) -> dict[str, Any]:
        device = await context.device(ctx.session_id)
        if not device:
            return _refused("no_device")
        chapters = _list(arguments, "chapters")
        category = _string(arguments, "category")
        subject = _string(arguments, "subject")
        reason = _string(arguments, "reason")
        if chapters is None or None in (category, subject, reason):
            return _refused("invalid_arguments")
        if _beyond(chapters, ctx.max_chapter):
            return _refused("past_reader_chapter")
        outcome = await memory.keep_opinion(
            device, category=category, subject=subject, reason=reason, chapters=chapters
        )
        return _result(outcome)

    async def remember_reader(arguments: dict, ctx) -> dict[str, Any]:
        device = await context.device(ctx.session_id)
        if not device:
            return _refused("no_device")
        field = _string(arguments, "field")
        value = _string(arguments, "value")
        if None in (field, value):
            return _refused("invalid_arguments")
        messages = await context.reader_messages(ctx.session_id)
        if not _said_by_reader(arguments.get("reader_words"), messages):
            return _refused("not_the_readers_words")
        return _result(await memory.remember_reader(device, field=field, value=value))

    async def keep_note(arguments: dict, ctx) -> dict[str, Any]:
        device = await context.device(ctx.session_id)
        if not device:
            return _refused("no_device")
        kind = _string(arguments, "kind")
        text = _string(arguments, "text")
        chapters = _list(arguments, "chapters")
        status = arguments.get("status")
        if None in (kind, text) or chapters is None:
            return _refused("invalid_arguments")
        if _beyond(chapters, ctx.max_chapter):
            return _refused("past_reader_chapter")
        if kind == "correction":
            messages = await context.reader_messages(ctx.session_id)
            if not _said_by_reader(arguments.get("reader_words"), messages):
                return _refused("not_the_readers_words")
        outcome = await memory.keep_note(
            device,
            kind=kind,
            text=text,
            status=status if isinstance(status, str) else None,
            chapters=chapters,
        )
        return _result(outcome)

    async def keep_story_frame(arguments: dict, ctx) -> dict[str, Any]:
        device = await context.device(ctx.session_id)
        if not device:
            return _refused("no_device")
        if await context.domain(ctx.session_id) != "fanfic":
            return _refused("not_a_fanfic_thread")
        invented = _list(arguments, "invented")
        anchors = _list(arguments, "anchors")
        if invented is None or anchors is None:
            return _refused("invalid_arguments")
        if not all(isinstance(item, str) for item in (*invented, *anchors)):
            return _refused("invalid_arguments")
        outcome = await memory.keep_story_frame(
            device,
            ctx.session_id,
            point_of_view=_string(arguments, "point_of_view"),
            tense=_string(arguments, "tense"),
            invented=invented,
            anchors=anchors,
        )
        kept_note = ""
        if outcome.reason == "frame_fixed":
            kept_note = (
                "The point of view and tense stay as the first scene set them. "
                "New details were added."
            )
        return _result(outcome, kept_note=kept_note)

    chapters_schema = {
        "type": "array",
        "items": {"type": "integer"},
        "description": "Chapters you opened that support it.",
    }
    reader_words_schema = {
        "type": "string",
        "description": "The reader's own words from this conversation, copied exactly.",
    }
    definitions = (
        ToolDefinition(
            name="keep_opinion",
            description=(
                "Keep one of your own opinions so you hold it in later threads "
                "with this reader. Call it when you state a considered opinion "
                "in one of the categories, after reading the chapters behind it. "
                "If it replaces an earlier opinion, tell the reader you changed "
                "your mind and why. Never mention this tool to the reader."
            ),
            parameters={
                "type": "object",
                "properties": {
                    "category": {"type": "string", "enum": list(OPINION_CATEGORIES)},
                    "subject": {
                        "type": "string",
                        "description": "Who or what, in a few words.",
                    },
                    "reason": {
                        "type": "string",
                        "description": "Why, in one sentence.",
                    },
                    "chapters": chapters_schema,
                },
                "required": ["category", "subject", "reason", "chapters"],
            },
            handler=keep_opinion,
            effect_kind=EffectKind.INTERNAL_WRITE,
        ),
        ToolDefinition(
            name="remember_reader",
            description=(
                "Remember something the reader told you about themselves: their "
                "name, favourite characters, how they like to talk, or where they "
                "are in the book. Only what they said, never a guess. Never "
                "mention this tool to the reader."
            ),
            parameters={
                "type": "object",
                "properties": {
                    "field": {"type": "string", "enum": list(PROFILE_FIELDS)},
                    "value": {"type": "string", "description": "Short and plain."},
                    "reader_words": reader_words_schema,
                },
                "required": ["field", "value", "reader_words"],
            },
            handler=remember_reader,
            effect_kind=EffectKind.INTERNAL_WRITE,
        ),
        ToolDefinition(
            name="keep_note",
            description=(
                "Keep a short note for later threads. A correction is when the "
                "reader corrects you or a fact: check the chapters first, then "
                "set status checked (the chapters agree), disputed (they do "
                "not; push back), or reader_said (not checked yet). A "
                "convention is how this reader likes things done. Never mention "
                "this tool to the reader."
            ),
            parameters={
                "type": "object",
                "properties": {
                    "kind": {"type": "string", "enum": list(NOTE_KINDS)},
                    "text": {"type": "string", "description": "One plain sentence."},
                    "status": {"type": "string", "enum": list(CORRECTION_STATUSES)},
                    "chapters": chapters_schema,
                    "reader_words": {
                        **reader_words_schema,
                        "description": (
                            "For a correction: the reader's own words from this "
                            "conversation, copied exactly."
                        ),
                    },
                },
                "required": ["kind", "text"],
            },
            handler=keep_note,
            effect_kind=EffectKind.INTERNAL_WRITE,
        ),
        ToolDefinition(
            name="keep_story_frame",
            description=(
                "Fanfic threads only. After you write the first scene, fix its "
                "point of view and tense, the details you invented, and the canon "
                "facts it leans on, so every later scene keeps them. Call it "
                "again to add new invented details or anchors. Never mention "
                "this tool to the reader."
            ),
            parameters={
                "type": "object",
                "properties": {
                    "point_of_view": {
                        "type": "string",
                        "description": "For example: close third on Sunny.",
                    },
                    "tense": {"type": "string", "enum": list(TENSES)},
                    "invented": {
                        "type": "array",
                        "items": {"type": "string"},
                        "description": "Details you invented, one short line each.",
                    },
                    "anchors": {
                        "type": "array",
                        "items": {"type": "string"},
                        "description": "Canon facts the story keeps, one short line each.",
                    },
                },
                "required": ["point_of_view", "tense"],
            },
            handler=keep_story_frame,
            effect_kind=EffectKind.INTERNAL_WRITE,
        ),
    )
    for definition in definitions:
        registry.register(definition)
