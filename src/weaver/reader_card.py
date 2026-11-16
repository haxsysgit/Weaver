"""The reader card: Weaver's honest picture of its own situation (Plan 034).

One short block, computed fresh each turn, so the model knows where the
reader is, how far the shelf reaches, what each finder covers, and which
kind of thread it is in. It carries state, never reader text or chapter
prose.
"""

from __future__ import annotations

from dataclasses import dataclass


@dataclass(frozen=True)
class ReaderCard:
    """The facts the card reports. Every one comes from real state."""

    reader_chapter: int | None = None
    spoiler_mode: str = "protect"
    shelf_edge: int | None = None
    search_through: int | None = None
    last_refresh: str | None = None
    thread_kind: str = "canon"


def _position(card: ReaderCard) -> str:
    at = (
        f"at chapter {card.reader_chapter}"
        if card.reader_chapter is not None
        else "no boundary saved"
    )
    if card.spoiler_mode == "none":
        return (
            f"Reader position: {at}. Spoiler mode: none. The reader accepts "
            "spoilers; do not withhold or warn."
        )
    if card.reader_chapter is None:
        return (
            f"Reader position: {at}. You do not know how far they have read. "
            "Before revealing a major beat (a death, a hidden identity, a "
            "twist, an ending), ask once, casually, how far they have read, "
            "unless they already told you. Early setup and general questions "
            "need no check."
        )
    return (
        f"Reader position: {at}. Protect the story: never reveal, confirm, "
        f"deny or hint at anything past chapter {card.reader_chapter}. A "
        "question about whether someone survives, dies or appears later gets "
        "no yes or no, not even a hint. Say it is past their chapter. Never "
        "open a refusal with yes or no; a bare no reads as an answer."
    )


def _shelf(card: ReaderCard) -> str:
    if not card.shelf_edge:
        return (
            "The shelf: no chapter files found. Answer from what you can "
            "open, and say plainly when you cannot open a chapter."
        )
    line = f"The shelf: chapters 1 to {card.shelf_edge}"
    if card.last_refresh:
        line += f", last refreshed {card.last_refresh}"
    line += ". The novel is still being written."
    return line


def _reach(card: ReaderCard) -> str:
    if not card.shelf_edge:
        return ""
    line = (
        "What you can see: read_chapters and find_text reach every shelf "
        "chapter."
    )
    if card.search_through is None:
        line += (
            " Semantic search's coverage is not recorded this turn; trust "
            "what its results show."
        )
    elif card.search_through >= card.shelf_edge:
        line += " Semantic search covers the whole shelf."
    else:
        line += (
            " Semantic search's meaning half covers chapters 1 to "
            f"{card.search_through}; its word half covers the whole shelf."
        )
    return line


def _thread(card: ReaderCard) -> str:
    if card.thread_kind == "fanfic":
        return (
            "Thread: fanfic. This is the reader's continuation of the novel. "
            "Canon stays canon, and everything you invent is labelled as "
            "invention."
        )
    return (
        "Thread: canon. The novel is the only source of story fact; the "
        "notebook is a map to it, never the fact."
    )


def render_reader_card(card: ReaderCard) -> str:
    """The block injected into the turn prompt. Plain words, no prose."""
    parts = [_position(card), _shelf(card)]
    reach = _reach(card)
    if reach:
        parts.append(reach)
    parts.append(
        "The notebook is a summary map that can be wrong. Use it to find "
        "passages; never treat it as the source of truth."
    )
    parts.append(_thread(card))
    body = "\n".join(parts)
    return f"<reader_card>\n{body}\n</reader_card>"


def card_from_state(
    prefs,
    *,
    shelf_edge: int | None,
    search_through: int | None,
    refresh: dict | None,
    domain: str,
) -> str:
    """Build the card from live app state: prefs, the shelf, and the status.

    ``prefs`` is the device's preferences row or None when none is saved.
    ``refresh`` is the weekly refresh's status dict, used only for its date.
    """
    last_refresh = None
    if isinstance(refresh, dict):
        stamp = refresh.get("last_success_at") or refresh.get("last_check_at")
        if isinstance(stamp, str) and len(stamp) >= 10:
            last_refresh = stamp[:10]
    return render_reader_card(
        ReaderCard(
            reader_chapter=getattr(prefs, "reader_chapter", None),
            spoiler_mode=getattr(prefs, "spoiler_mode", "protect"),
            shelf_edge=shelf_edge,
            search_through=search_through,
            last_refresh=last_refresh,
            thread_kind="fanfic" if domain == "fanfic" else "canon",
        )
    )
