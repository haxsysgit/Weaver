"""Deterministic library machinery: the engine behind the two reading
tools (search_library, open_chapters).

Everything here is pure machinery. No LLM calls, no model arguments.
The model-facing tools in tools.py only validate and format; all
decisions (ceiling, alias resolution, connection traversal, story-state
assembly, output limits) live here and are fully tested without a model.

The library is the private story knowledge base:
- the novel (immutable chapter files, the source of truth);
- the notebook (reading/NNNN.json records, entity pages, connections).

Reader position (the ceiling) is conversation state, never a model
argument: every read path takes the ceiling from the caller and applies
it as a payload filter or range check, so a model cannot widen its own
spoiler boundary.
"""

from __future__ import annotations

import hashlib
import json
import re
from dataclasses import dataclass
from pathlib import Path

ENTITY_MARKER = re.compile(r"<!--\s*entity-id:\s*([^\s]+)\s*-->")
ALIAS_MARKER = re.compile(r"<!--\s*alias:\s*([^\s]+)\s*-->")
STATEMENT_ID_RE = re.compile(r"^statement:chapter-(\d{4}):(\d+)$")
CONNECTION_ID_RE = re.compile(r"^conn-(\d{4})-\d+")

# ---------------------------------------------------------------------------
# Data shapes
# ---------------------------------------------------------------------------


@dataclass(frozen=True)
class Passage:
    """A concrete slice of the novel, ready to hand to a model."""

    chapter: int
    line_start: int
    line_end: int
    text: str
    source_hash: str
    source_kind: str = "novel"


@dataclass(frozen=True)
class CanonicalHit:
    """One retrieved novel passage, with enough metadata to re-open it."""

    chapter: int
    line_start: int
    line_end: int
    score: float
    passage_handle: str  # "novel:NNNN:start-end"
    source_hash: str


@dataclass(frozen=True)
class NotebookHit:
    """One retrieved notebook statement."""

    statement_id: str
    kind: str
    chapter: int
    text: str
    links: tuple[str, ...] = ()
    score: float = 0.0


@dataclass(frozen=True)
class SearchResult:
    """Grouped, tagged result of one search job."""

    query: str
    ceiling: int | None
    canonical_hits: list[CanonicalHit]
    notebook_hits: list[NotebookHit]
    surface: str = "both"  # both | novel | notebook


@dataclass(frozen=True)
class StoryState:
    """The story as of a chapter: entities with known facts."""

    ceiling: int
    entities: dict[str, list[dict]]  # canonical id -> statement dicts


# ---------------------------------------------------------------------------
# Handles
# ---------------------------------------------------------------------------


def make_passage_handle(chapter: int, line_start: int, line_end: int) -> str:
    return f"novel:{chapter:04d}:{line_start}-{line_end}"


def parse_passage_handle(handle: str) -> tuple[int, int, int] | None:
    """novel:0098:101-123 -> (98, 101, 123). None when malformed."""
    m = re.fullmatch(r"novel:(\d{4,5}):(\d+)-(\d+)", handle)
    if not m:
        return None
    chapter, start, end = int(m.group(1)), int(m.group(2)), int(m.group(3))
    if start < 1 or end < start:
        return None
    return chapter, start, end


# ---------------------------------------------------------------------------
# Chapter index
# ---------------------------------------------------------------------------


class ChapterIndex:
    """Resolve chapter numbers to immutable novel files.

    The novel directory layout is NNNN-NNNN+99/chapter-NNNN.txt
    (e.g. chapter 98 lives at 0001-0100/chapter-0098.txt). Each file's
    sha256 is cached so opened passages can be verified against the
    source of truth.
    """

    def __init__(self, novel_dir: Path):
        self.novel_dir = novel_dir
        self._hash_cache: dict[int, str] = {}

    def _path(self, chapter: int) -> Path:
        if chapter < 1:
            raise ValueError(f"chapter must be >= 1, got {chapter}")
        lo = ((chapter - 1) // 100) * 100 + 1
        return self.novel_dir / f"{lo:04d}-{lo + 99:04d}" / f"chapter-{chapter:04d}.txt"

    def source_hash(self, chapter: int) -> str:
        if chapter not in self._hash_cache:
            text = self._path(chapter).read_text(encoding="utf-8")
            self._hash_cache[chapter] = hashlib.sha256(text.encode("utf-8")).hexdigest()[:16]
        return self._hash_cache[chapter]

    def open_lines(self, chapter: int, line_start: int, line_end: int) -> Passage:
        """Open a passage by line range. Line 1 is the title heading and
        is never story text; ranges are clamped to the file."""
        text = self._path(chapter).read_text(encoding="utf-8")
        lines = text.splitlines()
        if line_start < 1:
            raise ValueError("line_start must be >= 1")
        end = min(line_end, len(lines))
        if line_start > len(lines) or line_start > end:
            raise ValueError(
                f"passage {chapter}:{line_start}-{line_end} outside chapter "
                f"({len(lines)} lines)"
            )
        body = "\n".join(lines[line_start - 1 : end])
        return Passage(
            chapter=chapter,
            line_start=line_start,
            line_end=end,
            text=body,
            source_hash=self.source_hash(chapter),
        )

    def open_handle(self, handle: str) -> Passage:
        parsed = parse_passage_handle(handle)
        if parsed is None:
            raise ValueError(f"malformed passage handle: {handle!r}")
        chapter, start, end = parsed
        return self.open_lines(chapter, start, end)


# ---------------------------------------------------------------------------
# Entity map (canonical ids + aliases)
# ---------------------------------------------------------------------------


class EntityMap:
    """Canonical entity ids with alias resolution.

    Entity pages declare <!-- entity-id: X --> and repeatable
    <!-- alias: X --> markers (see the checker's alias contract). A link
    to any alias resolves to its canonical id; unclaimed links stay as
    written so callers can decide.
    """

    def __init__(self, notebook_dir: Path):
        self.canonical: dict[str, str] = {}  # id or alias -> canonical id
        self.aliases: dict[str, str] = {}
        for sub in ("people", "places", "powers", "items", "groups"):
            for page in sorted((notebook_dir / sub).glob("*.md")):
                text = page.read_text(encoding="utf-8")
                ids = ENTITY_MARKER.findall(text)
                alias = ALIAS_MARKER.findall(text)
                if not ids:
                    continue
                canon = ids[0]
                self.canonical[canon] = canon
                for a in alias:
                    self.aliases[a] = canon
                    self.canonical[a] = canon

    def resolve(self, link: str) -> str:
        return self.canonical.get(link, link)

    def is_known(self, link: str) -> bool:
        return link in self.canonical


# ---------------------------------------------------------------------------
# Connection traversal (depth-capped BFS, machinery only)
# ---------------------------------------------------------------------------


class ConnectionGraph:
    """Statement-level adjacency, walked deterministically."""

    def __init__(self, notebook_dir: Path, ceiling: int | None = None):
        self.adj: dict[str, list[str]] = {}
        self.chapter_of: dict[str, int] = {}
        self._ceiling = ceiling
        self._load(notebook_dir)

    def _load(self, notebook_dir: Path) -> None:
        path = notebook_dir / "connections.jsonl"
        if not path.exists():
            return
        for line in path.read_text(encoding="utf-8").splitlines():
            if not line.strip():
                continue
            try:
                conn = json.loads(line)
            except json.JSONDecodeError:
                continue
            source = conn.get("source", "")
            target = conn.get("target", "")
            chapter = conn.get("first_known_chapter")
            if not source or not target:
                continue
            self.adj.setdefault(source, []).append(target)
            self.adj.setdefault(target, []).append(source)
            if chapter is not None:
                self.chapter_of.setdefault(source, int(chapter))
                self.chapter_of.setdefault(target, int(chapter))

    def neighbors(self, node: str, ceiling: int | None = None) -> list[str]:
        """Neighbors within the ceiling (applied by machinery)."""
        cap = ceiling if ceiling is not None else self._ceiling
        out = []
        for n in self.adj.get(node, []):
            if cap is not None and self.chapter_of.get(n, 0) > cap:
                continue
            out.append(n)
        return out

    def reachable(self, seeds: list[str], *, depth: int = 2, ceiling: int | None = None, max_nodes: int = 200) -> list[str]:
        """Depth-capped BFS from seeds, bounded output."""
        cap = ceiling if ceiling is not None else self._ceiling
        reached: list[str] = []
        seen: set[str] = set()
        frontier = [s for s in seeds if (cap is None or self.chapter_of.get(s, 0) <= cap)]
        for _ in range(depth):
            if not frontier or len(reached) >= max_nodes:
                break
            nxt: list[str] = []
            for node in frontier:
                if node in seen or len(reached) >= max_nodes:
                    continue
                seen.add(node)
                reached.append(node)
                for n in self.neighbors(node, ceiling=cap):
                    if n not in seen:
                        nxt.append(n)
            frontier = nxt
        return reached


# ---------------------------------------------------------------------------
# Notebook statements
# ---------------------------------------------------------------------------


class NotebookReader:
    """Statements and entity pages from the notebook."""

    def __init__(self, notebook_dir: Path, ceiling: int | None = None):
        self.notebook_dir = notebook_dir
        self._ceiling = ceiling
        self.statements: list[dict] = []
        self.by_id: dict[str, dict] = {}
        self._load()

    def _load(self) -> None:
        cap = self._ceiling
        for rec in sorted((self.notebook_dir / "reading").glob("[0-9]*.json")):
            try:
                data = json.loads(rec.read_text(encoding="utf-8"))
            except json.JSONDecodeError:
                continue
            chapter = int(data.get("chapter", 0))
            if cap is not None and chapter > cap:
                continue
            for st in data.get("statements", []):
                self.statements.append(st)
                self.by_id[st["id"]] = st

    def statement_chapter(self, statement_id: str) -> int | None:
        m = STATEMENT_ID_RE.match(statement_id)
        if m:
            return int(m.group(1))
        st = self.by_id.get(statement_id)
        if st and st.get("evidence"):
            return st["evidence"][0].get("chapter")
        return None


# ---------------------------------------------------------------------------
# Persistent index build
# ---------------------------------------------------------------------------


def build_library_index(
    novel_dir: Path,
    notebook_dir: Path,
    out_dir: Path,
    *,
    ceiling: int,
    dense_model: str = "BAAI/bge-large-en-v1.5",
    sparse_model: str = "Qdrant/bm42-all-minilm-l6-v2-attentions",
    chunk_target: int = 12,
    chunk_overlap: int = 5,
) -> dict:
    """Build the persistent Qdrant index for the library.

    Deterministic machinery: chunks the novel with the story-aware
    chunker, embeds dense (local fastembed) and sparse (BM42), stores
    payload metadata only (chapter, lines, hash, kind, ids, never
    prose). Run once per library state; the runtime opens the result.
    Returns a summary dict with counts.
    """
    from qdrant_client import QdrantClient

    from weaver.retrieval.chunker import chunk_chapter
    from weaver.retrieval.experiment import (
        create_novel_collection,
        create_notebook_collection,
        splade_encoder,
    )

    chunks = []
    for n in range(1, ceiling + 1):
        lo = ((n - 1) // 100) * 100 + 1
        path = novel_dir / f"{lo:04d}-{lo + 99:04d}" / f"chapter-{n:04d}.txt"
        text = path.read_text(encoding="utf-8")
        chunks.extend(chunk_chapter(n, text, target_lines=chunk_target, overlap_lines=chunk_overlap))

    statements = []
    for n in range(1, ceiling + 1):
        rec = json.loads((notebook_dir / "reading" / f"{n:04d}.json").read_text(encoding="utf-8"))
        for st in rec.get("statements", []):
            st = dict(st)
            st["chapter"] = n
            statements.append(st)

    from fastembed import SparseTextEmbedding, TextEmbedding

    if dense_model == "openai":
        from weaver.retrieval.experiment import OpenAiEmbedder

        embedder = OpenAiEmbedder("text-embedding-3-large")
    else:
        embedder = TextEmbedding(dense_model, threads=4)
    sparse = splade_encoder(SparseTextEmbedding(sparse_model))
    out_dir.mkdir(parents=True, exist_ok=True)
    client = QdrantClient(path=str(out_dir))
    try:
        dense_size = len(list(embedder.embed(["probe"]))[0])
        create_novel_collection(client, chunks, embedder, dense_size=dense_size, sparse_encoder=sparse)
        create_notebook_collection(client, statements, sparse_encoder=sparse)
    finally:
        client.close()
    return {"chunks": len(chunks), "statements": len(statements), "ceiling": ceiling}
