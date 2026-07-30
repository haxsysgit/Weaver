"""Weaver memory systems — stubs for the six memory stores.

These will be built out in later plans. For now they define the interfaces
the agent core will call into.
"""

from __future__ import annotations

from dataclasses import dataclass, field
from typing import Protocol, runtime_checkable


# ── Result types ──


@dataclass
class SceneResult:
    chapter: int
    scene_index: int
    title: str = ""
    summary: str = ""
    participants: list[str] = field(default_factory=list)
    location: str = ""
    text_snippet: str = ""


@dataclass
class CharacterState:
    character_id: str
    name: str
    aliases: list[str] = field(default_factory=list)
    at_chapter: int = 0
    status: str = ""  # alive, dead, unknown, etc.
    faction: str = ""
    abilities: list[str] = field(default_factory=list)
    summary: str = ""


@dataclass
class SearchResult:
    """Generic search result from any memory store."""
    items: list[dict] = field(default_factory=list)
    total: int = 0
    source: str = ""  # which store produced this


# ── Memory store protocols ──


@runtime_checkable
class SceneStore(Protocol):
    """Search and retrieve scenes."""

    async def search(
        self,
        query: str,
        chapter_range: tuple[int, int] | None = None,
        k: int = 5,
    ) -> SearchResult: ...

    async def get(self, chapter: int, scene_index: int) -> SceneResult | None: ...


@runtime_checkable
class CharacterStore(Protocol):
    """Track characters and their evolving state."""

    async def search(self, name: str, k: int = 5) -> SearchResult: ...

    async def get_state(self, character_id: str, at_chapter: int) -> CharacterState | None: ...


@runtime_checkable
class WorldStore(Protocol):
    """Track world facts: locations, factions, abilities, history."""

    async def search(self, query: str, k: int = 5) -> SearchResult: ...


@runtime_checkable
class MeaningStore(Protocol):
    """Store interpretations, themes, opinions."""

    async def get_interpretations(self, topic: str) -> SearchResult: ...

    async def record_interpretation(
        self,
        topic: str,
        interpretation: str,
        evidence: list[str],
        confidence: str,
    ) -> None: ...


# ── Placeholder implementations ──


class PlaceholderSceneStore:
    """Returns empty results — real implementation comes later."""

    async def search(
        self,
        query: str,
        chapter_range: tuple[int, int] | None = None,
        k: int = 5,
    ) -> SearchResult:
        return SearchResult(source="placeholder_scenes")

    async def get(self, chapter: int, scene_index: int) -> SceneResult | None:
        return None


class PlaceholderCharacterStore:
    """Returns empty results — real implementation comes later."""

    async def search(self, name: str, k: int = 5) -> SearchResult:
        return SearchResult(source="placeholder_characters")

    async def get_state(self, character_id: str, at_chapter: int) -> CharacterState | None:
        return None


class PlaceholderWorldStore:
    """Returns empty results — real implementation comes later."""

    async def search(self, query: str, k: int = 5) -> SearchResult:
        return SearchResult(source="placeholder_world")


class PlaceholderMeaningStore:
    """Returns empty results — real implementation comes later."""

    async def get_interpretations(self, topic: str) -> SearchResult:
        return SearchResult(source="placeholder_meaning")

    async def record_interpretation(
        self,
        topic: str,
        interpretation: str,
        evidence: list[str],
        confidence: str,
    ) -> None:
        pass
