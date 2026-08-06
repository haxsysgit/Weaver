"""The two reading tools: search_library and open_chapters.

Thin surfaces over deterministic machinery (library.py). The tools
contain no logic of their own beyond validation and formatting:

- search_library: one search job; returns grouped canonical (novel)
  hits and notebook hits, with passage handles and scores. The reader
  ceiling is applied by machinery as a payload filter and can never be
  widened by the model. The optional chapter-range and surface
  refinements only narrow the search.
- open_chapters: opens bounded canonical novel context behind a passage
  handle. Novel only, never the notebook. Handles are verified against
  the immutable source (line range + source hash) before any text is
  returned.

Both are EffectKind.READ: they never write, never touch the library.
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


class SearchLibraryInput(BaseModel):
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
    def _check_surface(self) -> "SearchLibraryInput":
        if self.surface not in ("both", "novel", "notebook"):
            raise ValueError("surface must be one of: both, novel, notebook")
        return self


class OpenChaptersInput(BaseModel):
    handle: str = Field(min_length=1, max_length=64, description="Passage handle like novel:0098:101-123.")
    lines: int | None = Field(
        default=None,
        ge=1,
        le=MAX_PASSAGE_LINES,
        description="Optional line count to open (default: the whole handle range).",
    )


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
    # search_library
    # ------------------------------------------------------------------

    async def search_library(
        self,
        arguments: dict[str, Any],
        context: ToolExecutionContext,
    ) -> dict[str, Any]:
        try:
            inp = SearchLibraryInput(**arguments)
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
            logger.warning("search_library failed: %s", exc)
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
    # open_chapters
    # ------------------------------------------------------------------

    async def open_chapters(
        self,
        arguments: dict[str, Any],
        context: ToolExecutionContext,
    ) -> dict[str, Any]:
        try:
            inp = OpenChaptersInput(**arguments)
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
            logger.warning("open_chapters failed for %r", inp.handle, exc_info=True)
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


def register_reading_tools(
    registry: ToolRegistry,
    service: LibraryService,
) -> None:
    """Register the two reading tools (Plan 014 Contract)."""
    registry.register(
        ToolDefinition(
            name="search_library",
            description=(
                "Search Weaver's private library: the novel (canonical passages with "
                "chapter and line handles) and the story notebook (statements with "
                "links). Returns grouped hits; open any canonical hit with open_chapters. "
                "The reader ceiling is applied automatically and can only be narrowed."
            ),
            parameters=SearchLibraryInput.model_json_schema(),
            handler=service.search_library,
            max_result_chars=24_000,
            effect_kind=EffectKind.READ,
            retry_safe=True,
        )
    )
    registry.register(
        ToolDefinition(
            name="open_chapters",
            description=(
                "Open a bounded passage of the novel by handle (novel:NNNN:start-end) "
                "to read the actual text. Novel only. Never opens beyond the reader ceiling."
            ),
            parameters=OpenChaptersInput.model_json_schema(),
            handler=service.open_chapters,
            max_result_chars=24_000,
            effect_kind=EffectKind.READ,
            retry_safe=True,
        )
    )
