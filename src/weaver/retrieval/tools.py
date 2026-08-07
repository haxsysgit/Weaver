"""The five reading tools: search_story, read_chapters, find_text,
find speaker clusters, browse_chapters and who_is.

Thin surfaces over deterministic machinery (library.py). The tools
contain no logic of their own beyond validation and formatting:

- search_story: one meaning-search job; returns grouped notebook hits
  and canonical (novel) hits with passage handles and scores. The
  reader ceiling is applied by machinery and can never be widened by
  the model; the optional chapter-range and surface refinements only
  narrow the search.
- read_chapters: opens bounded canonical novel context behind a passage
  handle. Novel only, never the notebook. Handles are verified against
  the immutable source (line range + source hash) before any text is
  returned.
- find_text: grep-like exact-substring finder on raw chapter text
  (mode phrase) and the where-does-a-character-speak finder (mode
  speaker) built on this novel's dialogue-attribution structure.
- browse_chapters: skim a chapter range (titles, lengths, opening
  lines) to orient an arc before reading.
- who_is: resolve any name to its canonical entity page in the story
  map (person, place, power, item, group), with aliases and first
  known chapter.

All are EffectKind.READ: they never write, never touch the library.
Novel prose is ephemeral model material: every tool that returns it
carries durable_evidence pointers only (chapter, lines, hash, handle),
so the conversation store never persists novel text.
"""

from __future__ import annotations

import logging
from dataclasses import dataclass
from typing import Any

from pydantic import BaseModel, Field, model_validator

from weaver.agent.tools import EffectKind, ToolDefinition, ToolExecutionContext, ToolRegistry

from . import library as lib

logger = logging.getLogger(__name__)

MAX_CANONICAL_HITS = 8
MAX_NOTEBOOK_HITS = 8
MAX_PASSAGE_LINES = 200  # ~a chapter-and-a-half, bounded


class SearchStoryInput(BaseModel):
    query: str = Field(min_length=1, max_length=2000, description="The question or search phrase.")
    surface: str = Field(
        default="both",
        description="Search the novel, the notebook, or both.",
    )
    chapter_from: int | None = Field(
        default=None,
        ge=1,
        description="Narrow the search to chapters at or after this chapter. Can only narrow, never widen, the reader's ceiling.",
    )
    chapter_to: int | None = Field(
        default=None,
        ge=1,
        description="Narrow the search to chapters at or before this chapter. Can only narrow, never widen, the reader's ceiling.",
    )

    @model_validator(mode="after")
    def _check_surface(self) -> "SearchStoryInput":
        if self.surface not in ("both", "novel", "notebook"):
            raise ValueError("surface must be one of: both, novel, notebook")
        return self


class ReadChaptersInput(BaseModel):
    handle: str = Field(min_length=1, max_length=64, description="Passage handle like novel:0098:101-123.")
    lines: int | None = Field(
        default=None,
        ge=1,
        le=MAX_PASSAGE_LINES,
        description="Optional line count to open (default: the whole handle range).",
    )


class FindTextInput(BaseModel):
    query: str = Field(min_length=1, max_length=500, description="Exact phrase, or a character name in speaker mode.")
    mode: str = Field(
        default="phrase",
        description="'phrase' finds every line containing the exact text; 'speaker' finds where the character speaks.",
    )
    chapter_from: int | None = Field(
        default=None,
        ge=1,
        description="Narrow to chapters at or after this chapter. Can only narrow, never widen, the reader's ceiling.",
    )
    chapter_to: int | None = Field(
        default=None,
        ge=1,
        description="Narrow to chapters at or before this chapter. Can only narrow, never widen, the reader's ceiling.",
    )
    limit: int = Field(default=20, ge=1, le=50, description="Maximum hits to return.")

    @model_validator(mode="after")
    def _check_mode(self) -> "FindTextInput":
        if self.mode not in ("phrase", "speaker"):
            raise ValueError("mode must be one of: phrase, speaker")
        return self


class BrowseChaptersInput(BaseModel):
    start: int = Field(ge=1, description="First chapter to skim.")
    end: int = Field(ge=1, description="Last chapter to skim (at most 49 after start).")

    @model_validator(mode="after")
    def _check_range(self) -> "BrowseChaptersInput":
        if self.end < self.start:
            raise ValueError("end must be >= start")
        if self.end - self.start > 49:
            raise ValueError("browse at most 50 chapters per call")
        return self


class WhoIsInput(BaseModel):
    name: str = Field(min_length=1, max_length=200, description="A name from the story: person, place, power, item, or group.")


@dataclass
class LibraryService:
    """Owns the deterministic machinery shared by the reading tools.

    The Qdrant client is opened lazily on first search: registry
    construction must never touch the index (an index build in progress
    holds the lock, and eager open fails with AlreadyLocked).
    """

    novel_dir: Any  # pathlib.Path
    notebook_dir: Any
    client: Any = None  # qdrant client; None disables vector search
    embedder: Any = None  # dense embedder; None disables dense/hybrid
    sparse_encoder: Any = None
    index_dir: Any = None  # when set, the client opens lazily from here

    def __post_init__(self) -> None:
        self.index = lib.ChapterIndex(self.novel_dir)
        self.entities = lib.EntityMap(self.notebook_dir)
        self.graph = lib.ConnectionGraph(self.notebook_dir)
        self.notebook = lib.NotebookReader(self.notebook_dir)

    def _client(self):
        """Lazy client: open once on first use, never at construction."""
        if self.client is None and self.index_dir is not None and self.index_dir.exists():
            from qdrant_client import QdrantClient

            self.client = QdrantClient(path=str(self.index_dir))
        return self.client

    # ------------------------------------------------------------------
    # search_story
    # ------------------------------------------------------------------

    async def search_story(
        self,
        arguments: dict[str, Any],
        context: ToolExecutionContext,
    ) -> dict[str, Any]:
        try:
            inp = SearchStoryInput(**arguments)
        except Exception as exc:
            return {"ok": False, "error_category": "validation", "error": str(exc)}
        ceiling = getattr(context, "reader_ceiling", None)
        if ceiling is not None and inp.chapter_to is not None and inp.chapter_to > ceiling:
            return {
                "ok": False,
                "error_category": "validation",
                "error": f"chapter_to {inp.chapter_to} exceeds the reader ceiling {ceiling}; "
                "you can only narrow the search, never widen it.",
            }
        try:
            result = self._run_search(
                inp.query,
                ceiling=ceiling,
                surface=inp.surface,
                chapter_from=inp.chapter_from,
                chapter_to=inp.chapter_to,
            )
        except Exception as exc:
            logger.warning("search_story failed: %s", exc)
            return {"ok": False, "error_category": "tool_failed", "error": "search failed"}
        return {"ok": True, "result": result}

    def _run_search(
        self,
        query: str,
        *,
        ceiling: int | None,
        surface: str,
        chapter_from: int | None,
        chapter_to: int | None,
    ) -> dict[str, Any]:
        canonical: list[dict[str, Any]] = []
        notebook_hits: list[dict[str, Any]] = []
        if surface in ("both", "novel"):
            canonical = self._search_novel(query, ceiling, chapter_from, chapter_to)
        if surface in ("both", "notebook"):
            notebook_hits = self._search_notebook(query, ceiling, chapter_from, chapter_to)
        return {
            "query": query,
            "ceiling": ceiling,
            "canonical_hits": canonical,
            "notebook_hits": notebook_hits,
        }

    def _search_novel(
        self,
        query: str,
        ceiling: int | None,
        chapter_from: int | None,
        chapter_to: int | None,
    ) -> list[dict[str, Any]]:
        """Dense-first, sparse fallback (measured at the Plan 014 sweep:
        bge-large dense hit@5 0.57 beats BM42 0.40 at 40-line chunks, so
        dense is the primary arm and sparse is the backup for keyword
        queries the embedder smears). Ceiling and range are payload
        filters built here, never model arguments."""
        from qdrant_client import models

        client = self._client()
        if client is None:
            return []
        filters: list[Any] = []
        if ceiling is not None:
            filters.append(models.FieldCondition(key="chapter", range=models.Range(lte=ceiling)))
        if chapter_from is not None:
            filters.append(models.FieldCondition(key="chapter", range=models.Range(gte=chapter_from)))
        if chapter_to is not None:
            filters.append(models.FieldCondition(key="chapter", range=models.Range(lte=chapter_to)))
        qfilter = models.Filter(must=filters) if filters else None

        hits: list[lib.CanonicalHit] = []
        if self.embedder is not None:
            vector = list(self.embedder.embed([query]))[0]
            res = client.query_points(
                "novel_chunks",
                query=vector,
                using="dense",
                query_filter=qfilter,
                limit=MAX_CANONICAL_HITS,
                with_payload=True,
            )
            hits = [self._canonical_from_point(p) for p in res.points]
        if not hits and self.sparse_encoder is not None:
            res = client.query_points(
                "novel_chunks",
                query=self.sparse_encoder(query),
                using="bm25",
                query_filter=qfilter,
                limit=MAX_CANONICAL_HITS,
                with_payload=True,
            )
            hits = [self._canonical_from_point(p) for p in res.points]
        return [h.__dict__ for h in hits]

    @staticmethod
    def _canonical_from_point(point: Any) -> lib.CanonicalHit:
        payload = point.payload
        chapter = int(payload["chapter"])
        start = int(payload["line_start"])
        end = int(payload["line_end"])
        return lib.CanonicalHit(
            chapter=chapter,
            line_start=start,
            line_end=end,
            score=float(point.score),
            passage_handle=lib.make_passage_handle(chapter, start, end),
            source_hash=payload.get("source_hash", ""),
        )

    def _search_notebook(
        self,
        query: str,
        ceiling: int | None,
        chapter_from: int | None,
        chapter_to: int | None,
    ) -> list[dict[str, Any]]:
        from qdrant_client import models

        client = self._client()
        if client is None or self.sparse_encoder is None:
            return []
        filters: list[Any] = []
        if ceiling is not None:
            filters.append(models.FieldCondition(key="chapter", range=models.Range(lte=ceiling)))
        if chapter_from is not None:
            filters.append(models.FieldCondition(key="chapter", range=models.Range(gte=chapter_from)))
        if chapter_to is not None:
            filters.append(models.FieldCondition(key="chapter", range=models.Range(lte=chapter_to)))
        qfilter = models.Filter(must=filters) if filters else None
        res = client.query_points(
            "notebook_statements",
            query=self.sparse_encoder(query),
            using="bm25",
            query_filter=qfilter,
            limit=MAX_NOTEBOOK_HITS,
            with_payload=True,
        )
        out = []
        for p in res.points:
            payload = p.payload
            st = self.notebook.by_id.get(payload.get("statement_id", ""), {})
            out.append(
                {
                    "statement_id": payload.get("statement_id"),
                    "kind": payload.get("kind"),
                    "chapter": payload.get("chapter"),
                    "text": st.get("statement", ""),
                    "links": [self.entities.resolve(link) for link in payload.get("links", [])],
                    "score": float(p.score),
                }
            )
        return out

    # ------------------------------------------------------------------
    # read_chapters
    # ------------------------------------------------------------------

    async def read_chapters(
        self,
        arguments: dict[str, Any],
        context: ToolExecutionContext,
    ) -> dict[str, Any]:
        try:
            inp = ReadChaptersInput(**arguments)
        except Exception as exc:
            return {"ok": False, "error_category": "validation", "error": str(exc)}
        parsed = lib.parse_passage_handle(inp.handle)
        if parsed is None:
            return {
                "ok": False,
                "error_category": "validation",
                "error": f"malformed passage handle: {inp.handle!r} (expected novel:NNNN:start-end)",
            }
        chapter, start, end = parsed
        ceiling = getattr(context, "reader_ceiling", None)
        if ceiling is not None and chapter > ceiling:
            return {
                "ok": False,
                "error_category": "validation",
                "error": f"chapter {chapter} is beyond the reader ceiling {ceiling}; "
                "you can only open chapters at or before the reader position.",
            }
        try:
            passage = self.index.open_lines(chapter, start, end)
            if inp.lines is not None and inp.lines < (passage.line_end - passage.line_start + 1):
                passage = self.index.open_lines(chapter, start, start + inp.lines - 1)
        except ValueError as exc:
            return {"ok": False, "error_category": "validation", "error": str(exc)}
        except Exception:
            logger.warning("read_chapters failed for %r", inp.handle, exc_info=True)
            return {"ok": False, "error_category": "tool_failed", "error": "could not open the passage"}
        return {
            "ok": True,
            "durable_evidence": {
                "source_kind": "novel",
                "chapter": passage.chapter,
                "line_start": passage.line_start,
                "line_end": passage.line_end,
                "source_hash": passage.source_hash,
                "passage_handle": inp.handle,
            },
            "result": {
                "chapter": passage.chapter,
                "line_start": passage.line_start,
                "line_end": passage.line_end,
                "source_hash": passage.source_hash,
                "text": passage.text,
            },
        }

    # ------------------------------------------------------------------
    # find_text
    # ------------------------------------------------------------------

    async def find_text(
        self,
        arguments: dict[str, Any],
        context: ToolExecutionContext,
    ) -> dict[str, Any]:
        try:
            inp = FindTextInput(**arguments)
        except Exception as exc:
            return {"ok": False, "error_category": "validation", "error": str(exc)}
        ceiling = getattr(context, "reader_ceiling", None)
        if ceiling is not None and inp.chapter_to is not None and inp.chapter_to > ceiling:
            return {
                "ok": False,
                "error_category": "validation",
                "error": f"chapter_to {inp.chapter_to} exceeds the reader ceiling {ceiling}; "
                "you can only narrow the search, never widen it.",
            }
        try:
            if inp.mode == "speaker":
                hits = self.index.speaker_clusters(
                    inp.query,
                    chapter_from=inp.chapter_from or 1,
                    chapter_to=inp.chapter_to,
                    limit=inp.limit,
                )
            else:
                hits = self.index.find_text(
                    inp.query,
                    chapter_from=inp.chapter_from or 1,
                    chapter_to=inp.chapter_to,
                    limit=inp.limit,
                )
        except Exception:
            logger.warning("find_text failed for %r", inp.query, exc_info=True)
            return {"ok": False, "error_category": "tool_failed", "error": "search failed"}
        durable = {
            "source_kind": "novel",
            "kind": f"find_text:{inp.mode}",
            "hits": [
                {
                    "chapter": h["chapter"],
                    "line_start": h.get("line_start", h["line"]),
                    "line_end": h.get("line_end", h["line"]),
                    "source_hash": self.index.source_hash(h["chapter"]),
                    "passage_handle": lib.make_passage_handle(
                        h["chapter"],
                        h.get("line_start", h["line"]),
                        h.get("line_end", h["line"]),
                    ),
                }
                for h in hits
            ],
        }
        return {"ok": True, "durable_evidence": durable, "result": {"query": inp.query, "mode": inp.mode, "hits": hits}}

    # ------------------------------------------------------------------
    # browse_chapters
    # ------------------------------------------------------------------

    async def browse_chapters(
        self,
        arguments: dict[str, Any],
        context: ToolExecutionContext,
    ) -> dict[str, Any]:
        try:
            inp = BrowseChaptersInput(**arguments)
        except Exception as exc:
            return {"ok": False, "error_category": "validation", "error": str(exc)}
        ceiling = getattr(context, "reader_ceiling", None)
        if ceiling is not None and inp.end > ceiling:
            return {
                "ok": False,
                "error_category": "validation",
                "error": f"end chapter {inp.end} exceeds the reader ceiling {ceiling}; "
                "you can only browse at or before the reader position.",
            }
        try:
            chapters = self.index.browse(inp.start, inp.end)
        except Exception:
            logger.warning("browse_chapters failed for %d-%d", inp.start, inp.end, exc_info=True)
            return {"ok": False, "error_category": "tool_failed", "error": "could not browse chapters"}
        durable = {
            "source_kind": "novel",
            "kind": "browse_chapters",
            "chapters": [
                {
                    "chapter": c["chapter"],
                    "line_start": 2,
                    "line_end": min(6, c["line_count"]),
                    "source_hash": self.index.source_hash(c["chapter"]),
                    "passage_handle": lib.make_passage_handle(c["chapter"], 2, min(6, c["line_count"])),
                }
                for c in chapters
            ],
        }
        return {"ok": True, "durable_evidence": durable, "result": {"start": inp.start, "end": inp.end, "chapters": chapters}}

    # ------------------------------------------------------------------
    # who_is
    # ------------------------------------------------------------------

    async def who_is(
        self,
        arguments: dict[str, Any],
        context: ToolExecutionContext,
    ) -> dict[str, Any]:
        try:
            inp = WhoIsInput(**arguments)
        except Exception as exc:
            return {"ok": False, "error_category": "validation", "error": str(exc)}
        found = self.entities.lookup(inp.name)
        if found is None:
            return {
                "ok": True,
                "result": {
                    "found": False,
                    "name": inp.name,
                    "note": "not in the story map",
                    "suggestions": self.entities.suggest(inp.name),
                },
            }
        return {"ok": True, "result": {"found": True, "entity": found}}


def register_reading_tools(
    registry: ToolRegistry,
    service: LibraryService,
) -> None:
    """Register the reading tools (Plan 15 tool design, 2026-08-07)."""
    registry.register(
        ToolDefinition(
            name="search_story",
            description=(
                "Meaning search across the whole story (the novel and the story notebook). "
                "Use to LOCATE where something happens when you do not know the exact words. "
                "Returns grouped hits: notebook statements first (short summaries with chapter "
                "evidence, read these first, they often carry the answer) and novel passages "
                "(chapter + line handles to open with read_chapters). Scores run 0-1; close "
                "scores are not proof of the right chapter. The reader ceiling is applied "
                "automatically and can only be narrowed."
            ),
            parameters=SearchStoryInput.model_json_schema(),
            handler=service.search_story,
            max_result_chars=24_000,
            effect_kind=EffectKind.READ,
            retry_safe=True,
        )
    )
    registry.register(
        ToolDefinition(
            name="read_chapters",
            description=(
                "Read real novel text by passage handle (novel:NNNN:start-end) from "
                "search_story, find_text or browse_chapters hits. Novel only, read-only. "
                "Use whenever the answer needs the actual prose: verify, quote, or follow "
                "a scene to its end. Never opens beyond the reader ceiling."
            ),
            parameters=ReadChaptersInput.model_json_schema(),
            handler=service.read_chapters,
            max_result_chars=24_000,
            effect_kind=EffectKind.READ,
            retry_safe=True,
        )
    )
    registry.register(
        ToolDefinition(
            name="find_text",
            description=(
                "Exact-text finder, like grep for the novel. mode 'phrase': every line "
                "containing an exact phrase, case-sensitive, for names, quotes and "
                "distinctive in-world words. mode 'speaker': where a character SPEAKS - "
                "pass the name, get their dialogue lines with context. Use when meaning "
                "search cannot rank the answer (e.g. 'where does Weaver speak'). Returns "
                "chapter + line hits to open with read_chapters. The reader ceiling is "
                "applied automatically and can only be narrowed."
            ),
            parameters=FindTextInput.model_json_schema(),
            handler=service.find_text,
            max_result_chars=24_000,
            effect_kind=EffectKind.READ,
            retry_safe=True,
        )
    )
    registry.register(
        ToolDefinition(
            name="browse_chapters",
            description=(
                "Skim a chapter range (start to end, at most 50 chapters): each chapter's "
                "title, length and opening lines. Use to orient an arc or decide which "
                "chapters to read fully before answering a broad question. The reader "
                "ceiling is applied automatically and can only be narrowed."
            ),
            parameters=BrowseChaptersInput.model_json_schema(),
            handler=service.browse_chapters,
            max_result_chars=24_000,
            effect_kind=EffectKind.READ,
            retry_safe=True,
        )
    )
    registry.register(
        ToolDefinition(
            name="who_is",
            description=(
                "The story map: resolve any name to its canonical identity - person, place, "
                "power, item or group. Returns the entity's biography page, aliases, and first "
                "known chapter. Use before searching when you do not recognize a name, or to "
                "refresh who someone is."
            ),
            parameters=WhoIsInput.model_json_schema(),
            handler=service.who_is,
            max_result_chars=24_000,
            effect_kind=EffectKind.READ,
            retry_safe=True,
        )
    )
