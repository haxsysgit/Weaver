"""Deterministic library machinery: the engine behind the two reading
tools (search_library, open_chapters).

Everything here is pure machinery. No LLM calls, no model arguments.
The model-facing tools in tools.py only validate and format; all
decisions (alias resolution, connection traversal, story-state
assembly, output limits) live here and are fully tested without a model.

The library is the private story knowledge base:
- the novel (immutable chapter files, the source of truth);
- the notebook (reading/NNNN.json records, entity pages, connections).

Every read path is whole-novel: no position filter exists anywhere.
Chapter-range narrowing is an optional model-chosen refinement, never an
enforced boundary. Spoiler handling lives in the answer framing (the
spoiler map + judge), not in retrieval.
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
ALIAS_MARKER = re.compile(r"<!--\s*alias:\s*([^<\s]+(?:\s+[^<\s]+)*)\s*-->")
FIRST_KNOWN_RE = re.compile(r"first known:\s*chapter\s*(\d+)", re.IGNORECASE)
QUOTE_STARTS = ("\"", "'", "\u201c", "\u2018")
TITLE_PREFIX = "Shadow Slave-Chapter"
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
    canonical_hits: list[CanonicalHit]
    notebook_hits: list[NotebookHit]
    surface: str = "both"  # both | novel | notebook


@dataclass(frozen=True)
class StoryState:
    """Entities with their known facts from the notebook."""

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

    def last_chapter(self) -> int:
        """The highest chapter number present on the shelf.

        Scans the NNNN-NNNN+99 buckets (one os.walk over a few hundred
        files); used to keep the system prompt honest about the real
        novel length instead of a hardcoded ceiling that goes stale.
        """
        highest = 0
        if not self.novel_dir.exists():
            return highest
        for bucket in self.novel_dir.iterdir():
            if not bucket.is_dir():
                continue
            for chapter_file in bucket.glob("chapter-*.txt"):
                number = chapter_file.stem.removeprefix("chapter-")
                if number.isdigit():
                    highest = max(highest, int(number))
        return highest

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

    # ------------------------------------------------------------------
    # Finders (grep-like machinery over raw chapter text)
    # ------------------------------------------------------------------

    def _scan(self):
        """Yield (chapter, text) for every chapter file, in order."""
        for sub in sorted(self.novel_dir.glob("*")):
            if not sub.is_dir():
                continue
            for path in sorted(sub.glob("chapter-*.txt")):
                try:
                    yield int(path.stem.split("-")[1]), path.read_text(encoding="utf-8")
                except (ValueError, OSError):
                    continue

    def find_text(
        self,
        query: str,
        *,
        chapter_from: int = 1,
        chapter_to: int | None = None,
        limit: int = 30,
    ) -> list[dict]:
        """Exact substring scan over raw chapter text, like grep.

        Line 1 (the title heading) is never story text and is skipped.
        Case-insensitive: a reader saying "noctis" finds "Noctis".
        Returns [{chapter, line, text, next_text}] capped at limit, where
        next_text is the following line (the novel writes dialogue on its
        own line with the attribution on the NEXT line).
        """
        needle = query.casefold()
        hits: list[dict] = []
        for chapter, text in self._scan():
            if chapter < chapter_from:
                continue
            if chapter_to is not None and chapter > chapter_to:
                continue
            lines = text.splitlines()
            for i, line in enumerate(lines, start=1):
                if i == 1:
                    continue
                if needle in line.casefold():
                    hits.append(
                        {
                            "chapter": chapter,
                            "line": i,
                            "text": line,
                            "next_text": lines[i] if i < len(lines) else "",
                        }
                    )
                    if len(hits) >= limit:
                        return hits
        return hits

    def find_text_together(
        self,
        groups: list[list[str]],
        *,
        chapter_from: int = 1,
        chapter_to: int | None = None,
        within_lines: int | None = None,
        limit: int = 10,
    ) -> list[dict]:
        """Chapters where every group has at least one hit (AND across
        groups, OR inside a group), with proximity.

        groups = [["Weaver"], ["Noctis"]] finds chapters where both
        appear. groups = [["Weaver"], ["died", "death", "killed"]]
        finds chapters where Weaver and any death word co-occur - e.g.
        "where did weaver die" without knowing the words. within_lines
        keeps only chapters where the closest mentions from different
        groups are at most that many lines apart ("weaver and noctis
        near each other, not just in the same chapter").

        Returns one entry per chapter: the closest cross-group distance,
        the tightest span covering the closest pair, and every matched
        line (capped per term).
        """
        folded = [[t.casefold() for t in g if t.strip()] for g in groups]
        folded = [g for g in folded if g]
        if len(folded) < 2:
            return []
        all_terms = {t for g in folded for t in g}
        out: list[dict] = []
        for chapter, text in self._scan():
            if chapter < chapter_from:
                continue
            if chapter_to is not None and chapter > chapter_to:
                continue
            lines = text.splitlines()
            found: dict[str, list[tuple[int, str]]] = {}
            for i, line in enumerate(lines, start=1):
                if i == 1:
                    continue
                folded_line = line.casefold()
                for term in all_terms:
                    if term in folded_line:
                        found.setdefault(term, []).append((i, line))
            if not all(any(t in found for t in g) for g in folded):
                continue
            # closest cross-group pair and the tightest span over it
            pairs = [
                (line, g_idx)
                for g_idx, g in enumerate(folded)
                for t in g
                for line, _ in found.get(t, [])
            ]
            best: tuple[int, int, int] | None = None  # (distance, lo, hi)
            for a in range(len(pairs)):
                for b in range(a + 1, len(pairs)):
                    if pairs[a][1] == pairs[b][1]:
                        continue
                    la, lb = pairs[a][0], pairs[b][0]
                    lo, hi = min(la, lb), max(la, lb)
                    if best is None or hi - lo < best[0]:
                        best = (hi - lo, lo, hi)
            if best is None:
                continue
            distance, span_start, span_end = best
            if within_lines is not None and distance > within_lines:
                continue
            matches = [
                {"term": term, "line": line, "text": line_text}
                for term in all_terms
                for line, line_text in found.get(term, [])[:12]
            ]
            matches.sort(key=lambda m: m["line"])
            out.append(
                {
                    "chapter": chapter,
                    "distance": distance,
                    "span_start": span_start,
                    "span_end": span_end,
                    "matches": matches,
                }
            )
        # tightest co-occurrence first; chapter order breaks ties
        out.sort(key=lambda h: (h["distance"], h["chapter"]))
        return out[:limit]

    def speaker_clusters(
        self,
        name: str,
        *,
        chapter_from: int = 1,
        chapter_to: int | None = None,
        limit: int = 20,
    ) -> list[dict]:
        """Find where a character speaks.

        The novel writes dialogue as standalone quote lines with the
        attribution on a neighboring line, so a name match is only a
        lead: this scans the +/-2 line window around every name
        occurrence for quote lines and returns the cluster (name line
        plus the dialogue around it). Case-insensitive name matching.
        Returns [{chapter, line_start, line_end, text}] capped at limit.
        """
        needle = name.strip().lower()
        if not needle:
            return []
        out: list[dict] = []
        seen: set[tuple[int, int, int]] = set()
        for chapter, text in self._scan():
            if chapter < chapter_from:
                continue
            if chapter_to is not None and chapter > chapter_to:
                continue
            lines = text.splitlines()
            for i, line in enumerate(lines, start=1):
                if i == 1 or needle not in line.lower():
                    continue
                lo, hi = max(2, i - 2), min(len(lines), i + 2)
                quotes = [j for j in range(lo, hi + 1) if lines[j - 1].strip().startswith(QUOTE_STARTS)]
                if not quotes:
                    continue
                lo2, hi2 = min(min(quotes), i), max(max(quotes), i)
                key = (chapter, lo2, hi2)
                if key in seen:
                    continue
                seen.add(key)
                out.append(
                    {
                        "chapter": chapter,
                        "line_start": lo2,
                        "line_end": hi2,
                        "text": "\n".join(lines[lo2 - 1 : hi2]),
                    }
                )
                if len(out) >= limit:
                    return out
        return out

    def browse(self, start: int, end: int, *, titles_only: bool = False) -> list[dict]:
        """Skim a chapter range: title, length and opening lines.

        titles_only returns just [{chapter, title}] - enough to orient
        across a whole volume in one call.
        """
        out: list[dict] = []
        for chapter in range(start, end + 1):
            path = self._path(chapter)
            if not path.exists():
                continue
            lines = path.read_text(encoding="utf-8").splitlines()
            heading = lines[0] if lines else ""
            title = heading.split(":", 1)[1].strip() if ":" in heading else heading
            if titles_only:
                out.append({"chapter": chapter, "title": title})
                continue
            preview = "\n".join(lines[1 : min(7, len(lines))])
            out.append(
                {
                    "chapter": chapter,
                    "title": title,
                    "line_count": len(lines),
                    "preview": preview,
                }
            )
        return out


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
        # canonical id -> page metadata for who_is lookups
        self.pages: dict[str, dict] = {}
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
                title = ""
                for line in text.splitlines():
                    if line.startswith("# ") and not line.startswith("## "):
                        title = line[2:].strip()
                        break
                m = FIRST_KNOWN_RE.search(text)
                self.pages[canon] = {
                    "title": title or page.stem,
                    "first_known": int(m.group(1)) if m else None,
                    "aliases": alias,
                    "body": text,
                }

    def resolve(self, link: str) -> str:
        return self.canonical.get(link, link)

    def is_known(self, link: str) -> bool:
        return link in self.canonical

    def lookup(self, name: str) -> dict | None:
        """Resolve a user-style name to the canonical entity page.

        Matches entity ids, aliases, and page titles, case-insensitive;
        falls back to title containment. Returns the page metadata or
        None when the name is unknown.
        """
        needle = name.strip().lower()
        if not needle:
            return None
        canon = None
        for key, cid in self.canonical.items():
            short = key.split(":", 1)
            if key.lower() == needle or (
                len(short) > 1 and short[1].lower() == needle
            ):
                canon = cid
                break
        if canon is None:
            for cid, page in self.pages.items():
                if page["title"].lower() == needle or needle in page["title"].lower():
                    canon = cid
                    break
        if canon is None:
            return None
        page = self.pages[canon]
        return {
            "entity_id": canon,
            "kind": canon.split(":", 1)[0],
            "title": page["title"],
            "aliases": sorted(page["aliases"]),
            "first_known_chapter": page["first_known"],
            "body": page["body"],
        }

    def suggest(self, name: str, *, limit: int = 5) -> list[str]:
        """Close ids and titles for unknown names (who_is not-found)."""
        needle = name.strip().lower()
        out: list[str] = []
        for cid, page in self.pages.items():
            short = cid.split(":", 1)[1]
            if (
                needle in cid.lower()
                or needle in page["title"].lower()
                or (needle and short in needle)
            ):
                out.append(cid)
                if len(out) >= limit:
                    break
        return out


# ---------------------------------------------------------------------------
# Connection traversal (depth-capped BFS, machinery only)
# ---------------------------------------------------------------------------


class ConnectionGraph:
    """Statement-level adjacency, walked deterministically."""

    def __init__(self, notebook_dir: Path):
        self.adj: dict[str, list[str]] = {}
        self.chapter_of: dict[str, int] = {}
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

    def shortest_path(self, start: str, end: str, *, max_hops: int = 8) -> list[str] | None:
        """Shortest hop path between two nodes (BFS, deterministic).

        Returns the node id list start -> ... -> end, or None when no
        path exists within max_hops. Neighbors are walked in sorted
        order so the same graph always yields the same path.
        """
        if start == end:
            return [start]
        if start not in self.adj or end not in self.adj:
            return None
        frontier = [start]
        prev: dict[str, str] = {}
        seen = {start}
        for _ in range(max_hops):
            nxt: list[str] = []
            for node in frontier:
                for neighbor in sorted(self.adj.get(node, [])):
                    if neighbor in seen:
                        continue
                    seen.add(neighbor)
                    prev[neighbor] = node
                    if neighbor == end:
                        path = [end]
                        while path[-1] != start:
                            path.append(prev[path[-1]])
                        return list(reversed(path))
                    nxt.append(neighbor)
            if not nxt:
                return None
            frontier = nxt
        return None

    def neighbors(self, node: str) -> list[str]:
        """Adjacent statement ids (undirected)."""
        return list(self.adj.get(node, []))

    def reachable(self, seeds: list[str], *, depth: int = 2, max_nodes: int = 200) -> list[str]:
        """Depth-capped BFS from seeds, bounded output."""
        reached: list[str] = []
        seen: set[str] = set()
        frontier = list(seeds)
        for _ in range(depth):
            if not frontier or len(reached) >= max_nodes:
                break
            nxt: list[str] = []
            for node in frontier:
                if node in seen or len(reached) >= max_nodes:
                    continue
                seen.add(node)
                reached.append(node)
                for n in self.neighbors(node):
                    if n not in seen:
                        nxt.append(n)
            frontier = nxt
        return reached


# ---------------------------------------------------------------------------
# Notebook statements
# ---------------------------------------------------------------------------


class NotebookReader:
    """Statements and entity pages from the notebook."""

    def __init__(self, notebook_dir: Path):
        self.notebook_dir = notebook_dir
        self.statements: list[dict] = []
        self.by_id: dict[str, dict] = {}
        self._load()

    def _load(self) -> None:
        for rec in sorted((self.notebook_dir / "reading").glob("[0-9]*.json")):
            try:
                data = json.loads(rec.read_text(encoding="utf-8"))
            except json.JSONDecodeError:
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
        rec_path = notebook_dir / "reading" / f"{n:04d}.json"
        if not rec_path.exists():
            # Reading lags novels by design (the gated human step):
            # chapters fetched but not yet read/notebooked simply
            # contribute no statements (Plan 018.5 colab rebuild).
            continue
        rec = json.loads(rec_path.read_text(encoding="utf-8"))
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
