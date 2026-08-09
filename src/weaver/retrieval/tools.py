"""The five reading tools: semantic_search, read_chapters, find_text,
find speaker clusters, browse_chapters and who_is.

Thin surfaces over deterministic machinery (library.py). The tools
contain no logic of their own beyond validation and formatting:

- semantic_search: one meaning-search job; returns grouped notebook hits
  and canonical (novel) hits with passage handles and scores. The
  whole novel is always searchable;
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
        description="Narrow the search to chapters at or after this chapter.",
    )
    chapter_to: int | None = Field(
        default=None,
        ge=1,
        description="Narrow the search to chapters at or before this chapter.",
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
    query: str | None = Field(
        default=None,
        max_length=500,
        description="Exact phrase (phrase mode) or a character name (speaker mode).",
    )
    mode: str = Field(
        default="phrase",
        description=(
            "'phrase' finds every line containing the exact text; 'speaker' finds "
            "where the character speaks; 'together' finds chapters where EVERY "
            "group has at least one hit (pass groups)."
        ),
    )
    groups: list[list[str]] | None = Field(
        default=None,
        description=(
            "For mode 'together': AND across groups, OR inside a group. "
            "e.g. [[\"Weaver\"], [\"Noctis\"]] finds chapters where both appear; "
            "[[\"Weaver\"], [\"died\", \"death\", \"killed\"]] finds where Weaver and "
            "any death word co-occur."
        ),
    )
    within_lines: int | None = Field(
        default=None,
        ge=1,
        le=500,
        description=(
            "For mode 'together': keep only chapters where the closest mentions "
            "from different groups are within this many lines of each other."
        ),
    )
    chapter_from: int | None = Field(
        default=None,
        ge=1,
        description="Narrow to chapters at or after this chapter.",
    )
    chapter_to: int | None = Field(
        default=None,
        ge=1,
        description="Narrow to chapters at or before this chapter.",
    )
    limit: int = Field(default=20, ge=1, le=50, description="Maximum hits to return.")

    @model_validator(mode="after")
    def _check_mode(self) -> "FindTextInput":
        if self.mode == "together":
            if not self.groups or len(self.groups) < 2:
                raise ValueError("mode 'together' needs groups: at least two term groups")
            if any(not any(t.strip() for t in g) for g in self.groups):
                raise ValueError("mode 'together' groups need at least one real term each")
        else:
            if self.mode not in ("phrase", "speaker"):
                raise ValueError("mode must be one of: phrase, speaker, together")
            if not self.query:
                raise ValueError(f"mode '{self.mode}' needs a query")
        return self


class BrowseChaptersInput(BaseModel):
    start: int = Field(ge=1, description="First chapter to skim.")
    end: int = Field(ge=1, description="Last chapter to skim.")
    titles_only: bool = Field(
        default=False,
        description="Return only the chapter titles - orient across a whole volume in one call.",
    )

    @model_validator(mode="after")
    def _check_range(self) -> "BrowseChaptersInput":
        if self.end < self.start:
            raise ValueError("end must be >= start")
        max_span = 99 if self.titles_only else 49
        if self.end - self.start > max_span:
            raise ValueError(f"browse at most {max_span + 1} chapters per call")
        return self


class WhoIsInput(BaseModel):
    name: str = Field(min_length=1, max_length=200, description="A name from the story: person, place, power, item, or group.")


class LorePathInput(BaseModel):
    from_name: str = Field(
        min_length=1,
        max_length=200,
        description="Starting name (person, place, power, item, or group).",
    )
    to_name: str = Field(
        min_length=1,
        max_length=200,
        description="Target name to connect to.",
    )
    max_hops: int = Field(
        default=8,
        ge=2,
        le=12,
        description="Longest connection chain to accept (default 8 hops).",
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
    # semantic_search
    # ------------------------------------------------------------------

    async def semantic_search(
        self,
        arguments: dict[str, Any],
        context: ToolExecutionContext,
    ) -> dict[str, Any]:
        try:
            inp = SearchStoryInput(**arguments)
        except Exception as exc:
            return {"ok": False, "error_category": "validation", "error": str(exc)}
        try:
            result = self._run_search(
                inp.query,
                surface=inp.surface,
                chapter_from=inp.chapter_from,
                chapter_to=inp.chapter_to,
            )
        except Exception as exc:
            logger.warning("semantic_search failed: %s", exc)
            return {"ok": False, "error_category": "tool_failed", "error": "search failed"}
        return {"ok": True, "result": result}

    def _run_search(
        self,
        query: str,
        *,
        surface: str,
        chapter_from: int | None,
        chapter_to: int | None,
    ) -> dict[str, Any]:
        canonical: list[dict[str, Any]] = []
        notebook_hits: list[dict[str, Any]] = []
        if surface in ("both", "novel"):
            canonical = self._search_novel(query, chapter_from, chapter_to)
        if surface in ("both", "notebook"):
            notebook_hits = self._search_notebook(query, chapter_from, chapter_to)
        return {
            "query": query,
            "canonical_hits": canonical,
            "notebook_hits": notebook_hits,
        }

    def _search_novel(
        self,
        query: str,
        chapter_from: int | None,
        chapter_to: int | None,
    ) -> list[dict[str, Any]]:
        """Dense-first, sparse fallback (measured at the Plan 014 sweep:
        bge-large dense hit@5 0.57 beats BM42 0.40 at 40-line chunks, so
        dense is the primary arm and sparse is the backup for keyword
        queries the embedder smears). Range filters are built here, never
        model arguments."""
        from qdrant_client import models

        client = self._client()
        if client is None:
            return []
        filters: list[Any] = []
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
        chapter_from: int | None,
        chapter_to: int | None,
    ) -> list[dict[str, Any]]:
        from qdrant_client import models

        client = self._client()
        if client is None or self.sparse_encoder is None:
            return []
        filters: list[Any] = []
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

        try:
            if inp.mode == "together":
                hits = self.index.find_text_together(
                    inp.groups or [],
                    chapter_from=inp.chapter_from or 1,
                    chapter_to=inp.chapter_to,
                    within_lines=inp.within_lines,
                    limit=inp.limit,
                )
            elif inp.mode == "speaker":
                hits = self.index.speaker_clusters(
                    inp.query or "",
                    chapter_from=inp.chapter_from or 1,
                    chapter_to=inp.chapter_to,
                    limit=inp.limit,
                )
            else:
                hits = self.index.find_text(
                    inp.query or "",
                    chapter_from=inp.chapter_from or 1,
                    chapter_to=inp.chapter_to,
                    limit=inp.limit,
                )
        except Exception:
            logger.warning("find_text failed for %r", inp.query, exc_info=True)
            return {"ok": False, "error_category": "tool_failed", "error": "search failed"}
        if inp.mode == "together":
            durable = {
                "source_kind": "novel",
                "kind": "find_text:together",
                "hits": [
                    {
                        "chapter": h["chapter"],
                        "line_start": h["span_start"],
                        "line_end": h["span_end"],
                        "source_hash": self.index.source_hash(h["chapter"]),
                        "passage_handle": lib.make_passage_handle(
                            h["chapter"], h["span_start"], h["span_end"]
                        ),
                    }
                    for h in hits
                ],
            }
            return {
                "ok": True,
                "durable_evidence": durable,
                "result": {
                    "mode": "together",
                    "groups": inp.groups,
                    "within_lines": inp.within_lines,
                    "hits": hits,
                },
            }
        durable = {
            "source_kind": "novel",
            "kind": f"find_text:{inp.mode}",
            "hits": [
                {
                    "chapter": h["chapter"],
                    "line_start": h.get("line_start", h.get("line")),
                    "line_end": h.get("line_end", h.get("line")),
                    "source_hash": self.index.source_hash(h["chapter"]),
                    "passage_handle": lib.make_passage_handle(
                        h["chapter"],
                        h.get("line_start", h.get("line")),
                        h.get("line_end", h.get("line")),
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
        try:
            chapters = self.index.browse(inp.start, inp.end, titles_only=inp.titles_only)
        except Exception:
            logger.warning("browse_chapters failed for %d-%d", inp.start, inp.end, exc_info=True)
            return {"ok": False, "error_category": "tool_failed", "error": "could not browse chapters"}
        if inp.titles_only:
            # titles are navigational metadata, not story prose: the
            # durable record carries only chapter + hash, no title text
            durable = {
                "source_kind": "novel",
                "kind": "browse_chapters:titles",
                "chapters": [
                    {
                        "chapter": c["chapter"],
                        "line_start": 2,
                        "line_end": 2,
                        "source_hash": self.index.source_hash(c["chapter"]),
                        "passage_handle": lib.make_passage_handle(c["chapter"], 2, 2),
                    }
                    for c in chapters
                ],
            }
            return {
                "ok": True,
                "durable_evidence": durable,
                "result": {"start": inp.start, "end": inp.end, "titles": chapters},
            }
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
                    "note": "not in the story map (the map covers chapters 1-1000; "
                    "if the name is older than that, try find_text instead)",
                    "suggestions": self.entities.suggest(inp.name),
                },
            }
        return {"ok": True, "result": {"found": True, "entity": found}}

    async def lore_path(
        self,
        arguments: dict[str, Any],
        context: ToolExecutionContext,
    ) -> dict[str, Any]:
        inp = LorePathInput.model_validate(arguments)
        start = self.entities.lookup(inp.from_name)
        end = self.entities.lookup(inp.to_name)
        if start is None or end is None:
            missing = [
                n for n, r in ((inp.from_name, start), (inp.to_name, end)) if r is None
            ]
            return {
                "ok": True,
                "result": {
                    "found": False,
                    "note": "name(s) not in the story map: "
                    + ", ".join(missing)
                    + " (the map covers chapters 1-1000; try find_text for older names)",
                },
            }
        start_id, end_id = start["entity_id"], end["entity_id"]
        path = self.graph.shortest_path(start_id, end_id, max_hops=inp.max_hops)
        if path is None:
            return {
                "ok": True,
                "result": {
                    "found": False,
                    "note": f"no connection found within {inp.max_hops} hops",
                    "from": inp.from_name,
                    "to": inp.to_name,
                },
            }
        steps: list[dict[str, Any]] = []
        for node in path:
            if node.startswith("statement:"):
                stmt = self.notebook.by_id.get(node)
                steps.append(
                    {
                        "id": node,
                        "kind": "statement",
                        "chapter": self.graph.chapter_of.get(node),
                        "text": (stmt.get("statement") if stmt else None),
                    }
                )
            else:
                page = self.entities.lookup(node)
                steps.append(
                    {
                        "id": node,
                        "kind": "entity",
                        "title": page["title"] if page else node,
                    }
                )
        return {
            "ok": True,
            "result": {
                "found": True,
                "from": inp.from_name,
                "to": inp.to_name,
                "hops": len(path) - 1,
                "path": path,
                "steps": steps,
            },
        }


def register_reading_tools(
    registry: ToolRegistry,
    service: LibraryService,
) -> None:
    """Register the reading tools (Plan 15 tool design, 2026-08-07)."""
    registry.register(
        ToolDefinition(
            name="semantic_search",
            description=(
                "Meaning search across the whole story (the novel and the story notebook). "
                "Use to LOCATE where something happens when you do not know the exact words. "
                "Returns grouped hits: notebook statements first (short summaries with chapter "
                "evidence, read these first, they often carry the answer) and novel passages "
                "(chapter + line handles to open with read_chapters). Scores run 0-1; close "
                "scores are not proof of the right chapter. The whole novel is always "
                "automatically and can only be narrowed."
            ),
            parameters=SearchStoryInput.model_json_schema(),
            handler=service.semantic_search,
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
                "semantic_search, find_text or browse_chapters hits. Novel only, read-only. "
                "Use whenever the answer needs the actual prose: verify, quote, or follow "
                "a scene to its end."
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
                "containing an exact phrase, case-insensitive, for names, quotes and "
                "distinctive in-world words; each hit carries the NEXT line too (the "
                "novel writes dialogue on its own line with the attribution on the "
                "next one). mode 'speaker': where a character SPEAKS - pass the name, "
                "get their dialogue lines with context. mode 'together': pass groups "
                "and get chapters where every group matches (AND across groups, OR "
                "inside), with the distance between the closest mentions and a tight "
                "span to open - e.g. [[\"Weaver\"],[\"Noctis\"]] for their conversations, "
                "[[\"Weaver\"],[\"died\",\"death\",\"killed\"]] for where Weaver died; "
                "add within_lines to require nearness. Use when meaning "
                "search cannot rank the answer (e.g. 'where does Weaver speak'). Returns "
                "chapter + line hits to open with read_chapters. The whole novel is "
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
                "chapters to read fully before answering a broad question. With "
                "titles_only: a whole volume's titles (100 chapters) in one call - cheap "
                "orientation before reading. The reader "
                "always searchable."
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
                "power, item or group - and read that entity's full profile: biography page, "
                "canonical stats, aliases, and first known chapter. Demon of Dread is Ariel, "
                "Lost from Light is Sunny, Mongrel is Sunny. Use before searching when you do "
                "not recognize a name, or to refresh who someone is. The map covers chapters "
                "1-1000; when a name does not resolve it may simply be beyond the map, so "
                "fall back to find_text. For who two entities are CONNECTED THROUGH, use "
                "lore_path instead."
            ),
            parameters=WhoIsInput.model_json_schema(),
            handler=service.who_is,
            max_result_chars=24_000,
            effect_kind=EffectKind.READ,
            retry_safe=True,
        )
    )
    registry.register(
        ToolDefinition(
            name="lore_path",
            description=(
                "The shortest connection between two entities through the story map, "
                "with the statements that actually make the connection (entity -> "
                "statement -> entity chains). Use for 'how is X connected to Y' - the "
                "steps show WHY they are linked, so you can judge whether the relation "
                "is meaningful or incidental. The map covers chapters 1-1000; names "
                "beyond it do not resolve (fall back to find_text)."
            ),
            parameters=LorePathInput.model_json_schema(),
            handler=service.lore_path,
            max_result_chars=24_000,
            effect_kind=EffectKind.READ,
            retry_safe=True,
        )
    )
