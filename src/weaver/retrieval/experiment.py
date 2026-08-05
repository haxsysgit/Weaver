"""Plan 014 slice 2: the 1-1000 retrieval experiment.

Five retrieval arms measured against Qdrant embedded local mode on the
same labeled question set and the same reader-position ceiling:

1. exact novel search (sparse BM25 over novel chunks);
2. exact notebook search (sparse BM25 over notebook statements);
3. vector search (dense embeddings, cosine);
4. hybrid search (dense + sparse prefetch, RRF fusion);
5. notebook connections followed by direct chapter reading (machinery).

Fusion (plain RRF / weighted RRF / DBSF) and the sparse encoder
(hand-rolled BM25 vs fastembed SPLADE) are measured on the same
question set. Nothing here touches the conversation DB; durable
records keep only chapter references, line ranges, and hashes.
"""

from __future__ import annotations

import hashlib
import json
import re
from dataclasses import dataclass, field
from pathlib import Path

from qdrant_client import QdrantClient, models

NOVEL_COLLECTION = "novel_chunks"
NOTEBOOK_COLLECTION = "notebook_statements"
DENSE_SIZE = 384  # all-MiniLM-L6-v2
CHUNK_LINES = 15  # ~170 words, inside all-MiniLM's 256-token window


# ---------------------------------------------------------------------------
# Question set
# ---------------------------------------------------------------------------

@dataclass
class Question:
    """One labeled retrieval question with known evidence location."""

    id: str
    text: str
    expected_chapter: int
    expected_lines: tuple[int, int]
    statement_id: str | None  # notebook evidence when known
    paraphrase: bool  # True when the question shares no words with the source


def load_questions(path: Path) -> list[Question]:
    """Load the labeled question set (JSON list)."""
    raw = json.loads(path.read_text())
    return [
        Question(
            id=q["id"],
            text=q["text"],
            expected_chapter=q["expected_chapter"],
            expected_lines=tuple(q["expected_lines"]),
            statement_id=q.get("statement_id"),
            paraphrase=bool(q.get("paraphrase", False)),
        )
        for q in raw
    ]


# ---------------------------------------------------------------------------
# Novel chunking
# ---------------------------------------------------------------------------

@dataclass
class NovelChunk:
    """A line range of one chapter, with its text and source hash."""

    chapter: int
    line_start: int
    line_end: int
    text: str
    source_hash: str


def chunk_chapter(chapter: int, text: str, chunk_lines: int = CHUNK_LINES) -> list[NovelChunk]:
    """Split a chapter into fixed-size line chunks. Line 1 is the title
    heading, never story text, so chunks start at line 2."""
    lines = text.splitlines()
    body_start = 2 if len(lines) > 1 else 1
    source_hash = hashlib.sha256(text.encode("utf-8")).hexdigest()[:16]
    chunks: list[NovelChunk] = []
    for start in range(body_start, len(lines) + 1, chunk_lines):
        end = min(start + chunk_lines - 1, len(lines))
        chunks.append(
            NovelChunk(
                chapter=chapter,
                line_start=start,
                line_end=end,
                text="\n".join(lines[start - 1:end]),
                source_hash=source_hash,
            )
        )
    return chunks


# ---------------------------------------------------------------------------
# Sparse encoding: hand-rolled BM25 terms
# ---------------------------------------------------------------------------

_TOKEN_RE = re.compile(r"[a-z0-9']+")


def _stem(token: str) -> str:
    """Snowball English stemmer (cached per process)."""
    try:
        from py_rust_stemmers import SnowballStemmer

        stemmer = SnowballStemmer("english")
        return stemmer.stem_word(token)
    except Exception:
        return token


def tokenize(text: str) -> list[str]:
    """Lowercase word tokens, stemmed. Stems unify inflections (kills,
    killed, killing) so lexical search is not a strawman; the novel
    shows kills without always saying the word."""
    return [_stem(t) for t in _TOKEN_RE.findall(text.lower())]


def bm25_sparse_vector(text: str) -> models.SparseVector:
    """Term-frequency sparse vector. IDF is applied at query time by the
    collection's SparseVectorParams(modifier=IDF)."""
    counts: dict[str, int] = {}
    for token in tokenize(text):
        counts[token] = counts.get(token, 0) + 1
    terms = sorted(counts)
    indices = [abs(hash(t)) % (2**31 - 1) for t in terms]
    return models.SparseVector(
        indices=indices,
        values=[float(counts[t]) for t in terms],
    )


def splade_encoder(model) -> callable:
    """Wrap a fastembed SparseTextEmbedding (SPLADE) as a sparse encoder."""
    def encode(text: str) -> models.SparseVector:
        vec = list(model.embed([text]))[0]
        return models.SparseVector(indices=list(vec.indices), values=list(vec.values))

    return encode


def _point_id(key: str) -> int:
    """Deterministic point id for a string key."""
    return abs(hash(key)) % (2**63 - 1)


# ---------------------------------------------------------------------------
# Indexing
# ---------------------------------------------------------------------------

def create_novel_collection(
    client: QdrantClient,
    chunks: list[NovelChunk],
    embedder=None,
    *,
    dense_size: int = DENSE_SIZE,
    sparse_encoder=bm25_sparse_vector,
) -> None:
    """Novel chunks: named dense + sparse vectors. Payload keeps only
    chapter, line range, and source hash (no prose in the payload).

    The dense vectors come from the embedder (fastembed at experiment
    time, a deterministic fake in tests). The sparse arm is either
    hand-rolled BM25 term frequencies (default) or a fastembed sparse
    encoder (SPLADE); IDF applies at query time via modifier=IDF.
    """
    if client.collection_exists(NOVEL_COLLECTION):
        client.delete_collection(NOVEL_COLLECTION)
    client.create_collection(
        collection_name=NOVEL_COLLECTION,
        vectors_config={
            "dense": models.VectorParams(size=dense_size, distance=models.Distance.COSINE),
        },
        sparse_vectors_config={
            "bm25": models.SparseVectorParams(
                index=models.SparseIndexParams(on_disk=False),
                modifier=models.Modifier.IDF,
            ),
        },
    )
    if embedder is not None:
        texts = [c.text for c in chunks]
        dense = [list(v) for v in embedder.embed(texts)]
    else:
        dense = [[0.0] * dense_size for _ in chunks]
    points = [
        models.PointStruct(
            id=_point_id(f"{c.chapter}:{c.line_start}"),
            vector={
                "dense": dense[i],
                "bm25": sparse_encoder(c.text),
            },
            payload={
                "chapter": c.chapter,
                "line_start": c.line_start,
                "line_end": c.line_end,
                "source_hash": c.source_hash,
                "source_kind": "novel",
            },
        )
        for i, c in enumerate(chunks)
    ]
    client.upsert(NOVEL_COLLECTION, points)


def create_notebook_collection(
    client: QdrantClient,
    statements: list[dict],
    *,
    sparse_encoder=bm25_sparse_vector,
) -> None:
    """Notebook statements: sparse BM25 over statement text; payload
    carries statement id, kind, chapter, links, first_known_chapter."""
    if client.collection_exists(NOTEBOOK_COLLECTION):
        client.delete_collection(NOTEBOOK_COLLECTION)
    client.create_collection(
        collection_name=NOTEBOOK_COLLECTION,
        sparse_vectors_config={
            "bm25": models.SparseVectorParams(
                index=models.SparseIndexParams(on_disk=False),
                modifier=models.Modifier.IDF,
            ),
        },
    )
    points = [
        models.PointStruct(
            id=_point_id(st["id"]),
            vector={"bm25": sparse_encoder(st["statement"])},
            payload={
                "statement_id": st["id"],
                "kind": st["kind"],
                "chapter": st["chapter"],
                "first_known_chapter": st.get("first_known_chapter"),
                "links": st.get("links", []),
            },
        )
        for st in statements
    ]
    client.upsert(NOTEBOOK_COLLECTION, points)


# ---------------------------------------------------------------------------
# Ceiling filter
# ---------------------------------------------------------------------------

def ceiling_filter(chapter: int | None) -> list[models.FieldCondition]:
    """Reader-position ceiling as a payload Range filter. The ceiling is
    applied by machinery; the model never supplies it."""
    if chapter is None:
        return []
    return [
        models.FieldCondition(
            key="chapter",
            range=models.Range(lte=chapter),
        )
    ]


# ---------------------------------------------------------------------------
# Search arms
# ---------------------------------------------------------------------------

@dataclass
class ArmResult:
    """Ranked hits for one question from one arm."""

    arm: str
    question_id: str
    hits: list[dict] = field(default_factory=list)
    ceiling: int | None = None

    def hit_at(self, chapter: int, lines: tuple[int, int]) -> bool:
        """True when any hit covers the expected evidence location."""
        for h in self.hits:
            if h["chapter"] != chapter:
                continue
            if h.get("line_start") is None:
                return True  # chapter-level hit (notebook arm)
            if h["line_end"] >= lines[0] and h["line_start"] <= lines[1]:
                return True
        return False


def _novel_hits(points) -> list[dict]:
    return [
        {
            "chapter": p.payload["chapter"],
            "line_start": p.payload["line_start"],
            "line_end": p.payload["line_end"],
            "score": p.score,
        }
        for p in points
    ]


def arm_exact_novel(client: QdrantClient, question: str, *, ceiling: int | None, limit: int = 10, sparse_encoder=bm25_sparse_vector) -> list[dict]:
    """Arm 1: sparse BM25 over novel chunks."""
    res = client.query_points(
        NOVEL_COLLECTION,
        query=sparse_encoder(question),
        using="bm25",
        query_filter=models.Filter(must=ceiling_filter(ceiling)),
        limit=limit,
        with_payload=True,
    )
    return _novel_hits(res.points)


def arm_exact_notebook(client: QdrantClient, question: str, *, ceiling: int | None, limit: int = 10, sparse_encoder=bm25_sparse_vector) -> list[dict]:
    """Arm 2: sparse BM25 over notebook statements."""
    res = client.query_points(
        NOTEBOOK_COLLECTION,
        query=sparse_encoder(question),
        using="bm25",
        query_filter=models.Filter(must=ceiling_filter(ceiling)),
        limit=limit,
        with_payload=True,
    )
    return [
        {
            "chapter": p.payload["chapter"],
            "line_start": None,
            "line_end": None,
            "score": p.score,
            "statement_id": p.payload["statement_id"],
            "kind": p.payload["kind"],
        }
        for p in res.points
    ]


def arm_dense_novel(client: QdrantClient, embedder, question: str, *, ceiling: int | None, limit: int = 10) -> list[dict]:
    """Arm 3: dense cosine over novel chunks."""
    vector = list(embedder.embed([question]))[0]
    res = client.query_points(
        NOVEL_COLLECTION,
        query=vector,
        using="dense",
        query_filter=models.Filter(must=ceiling_filter(ceiling)),
        limit=limit,
        with_payload=True,
    )
    return _novel_hits(res.points)


def arm_hybrid(
    client: QdrantClient,
    embedder,
    question: str,
    *,
    ceiling: int | None,
    fusion: models.Fusion,
    limit: int = 10,
    sparse_encoder=bm25_sparse_vector,
) -> list[dict]:
    """Arm 4: dense + sparse prefetch fused (RRF or DBSF)."""
    dense = list(embedder.embed([question]))[0]
    res = client.query_points(
        NOVEL_COLLECTION,
        prefetch=[
            models.Prefetch(query=dense, using="dense", limit=limit * 2),
            models.Prefetch(query=sparse_encoder(question), using="bm25", limit=limit * 2),
        ],
        query=models.FusionQuery(fusion=fusion),
        query_filter=models.Filter(must=ceiling_filter(ceiling)),
        limit=limit,
        with_payload=True,
    )
    return _novel_hits(res.points)


def arm_notebook_connections(
    client: QdrantClient,
    question: str,
    connections: dict[str, list[str]],
    *,
    ceiling: int | None,
    depth: int = 2,
    seed_limit: int = 3,
    limit: int = 10,
    sparse_encoder=bm25_sparse_vector,
) -> list[dict]:
    """Arm 5: notebook connections followed by direct chapter reading.

    Seeds from exact notebook search, then walks the connection graph
    (depth-capped BFS over statement links) and reports the chapters of
    every reached statement. Pure machinery: no LLM, no model calls.
    """
    seeds = arm_exact_notebook(client, question, ceiling=ceiling, limit=seed_limit, sparse_encoder=sparse_encoder)
    reached: set[str] = set()
    frontier = [s["statement_id"] for s in seeds if s.get("statement_id")]
    for _ in range(depth):
        nxt: list[str] = []
        for node in frontier:
            if node in reached:
                continue
            reached.add(node)
            nxt.extend(connections.get(node, []))
        frontier = nxt

    hits: list[dict] = []
    if reached:
        res = client.retrieve(
            NOTEBOOK_COLLECTION,
            ids=[_point_id(st) for st in reached],
            with_payload=True,
        )
        for p in res:
            hits.append(
                {
                    "chapter": p.payload["chapter"],
                    "line_start": None,
                    "line_end": None,
                    "score": 0.5,  # graph distance ordering below
                    "statement_id": p.payload["statement_id"],
                    "kind": p.payload["kind"],
                }
            )
        # order: seed statements first (by seed rank), then by statement id
        seed_order = {s["statement_id"]: i for i, s in enumerate(seeds) if s.get("statement_id")}
        hits.sort(key=lambda h: (seed_order.get(h["statement_id"], 99), h["statement_id"]))
    return hits[:limit]


# ---------------------------------------------------------------------------
# Scoring
# ---------------------------------------------------------------------------

@dataclass
class ArmScore:
    """hit@k and mean reciprocal rank over the question set."""

    arm: str
    hit_at_1: float
    hit_at_5: float
    hit_at_10: float
    mrr: float
    misses: list[str]


def score_arm(results: list[ArmResult], questions: list[Question]) -> ArmScore:
    n = len(results)
    if n == 0:
        return ArmScore("", 0.0, 0.0, 0.0, 0.0, [])
    by_id = {q.id: q for q in questions}
    hit1 = hit5 = hit10 = 0
    rr_total = 0.0
    misses: list[str] = []
    for res in results:
        q = by_id.get(res.question_id)
        if q is None:
            continue
        rank = None
        for i, h in enumerate(res.hits, start=1):
            if h["chapter"] == q.expected_chapter and (
                h.get("line_start") is None
                or (h["line_end"] >= q.expected_lines[0] and h["line_start"] <= q.expected_lines[1])
            ):
                rank = i
                break
        if rank is None:
            misses.append(q.id)
            continue
        rr_total += 1.0 / rank
        if rank <= 1:
            hit1 += 1
        if rank <= 5:
            hit5 += 1
        if rank <= 10:
            hit10 += 1
    return ArmScore(
        arm=results[0].arm,
        hit_at_1=hit1 / n,
        hit_at_5=hit5 / n,
        hit_at_10=hit10 / n,
        mrr=rr_total / n,
        misses=misses,
    )
