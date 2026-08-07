"""Score the v2 question set against the existing persistent library index.

The index at .weaver/retrieval/index was built by scripts/colab_index.py
(bge-large dense, bm42 sparse on both novel_chunks and notebook_statements,
sparse stored under the vector name 'bm25' with IDF modifier). This script
queries that index directly instead of rebuilding collections, so a
40-question run takes minutes, not hours.

Run:  uv run python scripts/score_library_questions.py
      uv run python scripts/score_library_questions.py --max-questions 2   # smoke
"""
from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

from qdrant_client import QdrantClient
from qdrant_client import models

from weaver.retrieval.experiment import (
    NOVEL_COLLECTION,
    NOTEBOOK_COLLECTION,
    ArmResult,
    load_questions,
    score_arm,
)

ROOT = Path(__file__).resolve().parents[1]


# ---------------------------------------------------------------------------
# Sparse encoder: bm42, matched to what the index actually holds
# ---------------------------------------------------------------------------

def bm42_encoder(model):
    """Wrap a fastembed SparseTextEmbedding (BM42) as a sparse encoder."""

    def encode(text: str) -> models.SparseVector:
        vec = list(model.embed([text]))[0]
        return models.SparseVector(indices=list(vec.indices), values=list(vec.values))

    return encode


# ---------------------------------------------------------------------------
# Arms
# ---------------------------------------------------------------------------

def ceiling_filter(chapter: int | None) -> list[models.FieldCondition]:
    if chapter is None:
        return []
    return [models.FieldCondition(key="chapter", range=models.Range(lte=chapter))]


def _novel_hits(res) -> list[dict]:
    return [
        {
            "chapter": p.payload["chapter"],
            "line_start": p.payload["line_start"],
            "line_end": p.payload["line_end"],
            "score": p.score,
        }
        for p in res.points
    ]


def _notebook_hits(res) -> list[dict]:
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


def arm_exact_novel(client, question, *, ceiling, limit, sparse) -> list[dict]:
    res = client.query_points(
        NOVEL_COLLECTION,
        query=sparse(question),
        using="bm25",
        query_filter=models.Filter(must=ceiling_filter(ceiling)),
        limit=limit,
        with_payload=True,
    )
    return _novel_hits(res)


def arm_exact_notebook(client, question, *, ceiling, limit, sparse) -> list[dict]:
    res = client.query_points(
        NOTEBOOK_COLLECTION,
        query=sparse(question),
        using="bm25",
        query_filter=models.Filter(must=ceiling_filter(ceiling)),
        limit=limit,
        with_payload=True,
    )
    return _notebook_hits(res)


def arm_dense_novel(client, embedder, question, *, ceiling, limit) -> list[dict]:
    vec = list(embedder.embed([question]))[0]
    res = client.query_points(
        NOVEL_COLLECTION,
        query=vec,
        using="dense",
        query_filter=models.Filter(must=ceiling_filter(ceiling)),
        limit=limit,
        with_payload=True,
    )
    return _novel_hits(res)


def arm_hybrid(client, embedder, question, *, ceiling, fusion, limit, sparse) -> list[dict]:
    dense = list(embedder.embed([question]))[0]
    res = client.query_points(
        NOVEL_COLLECTION,
        prefetch=[
            models.Prefetch(query=dense, using="dense", limit=limit),
            models.Prefetch(query=sparse(question), using="bm25", limit=limit),
        ],
        query=models.FusionQuery(fusion=fusion),
        query_filter=models.Filter(must=ceiling_filter(ceiling)),
        limit=limit,
        with_payload=True,
    )
    return _novel_hits(res)


def arm_connections(client, question, connections, *, ceiling, limit, sparse,
                    seed_limit: int = 3, depth: int = 2) -> list[dict]:
    """Seed from exact notebook search, then walk the statement graph."""
    seeds = arm_exact_notebook(client, question, ceiling=ceiling, limit=seed_limit, sparse=sparse)
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
        records, _ = client.scroll(
            NOTEBOOK_COLLECTION,
            scroll_filter=models.Filter(
                must=[
                    models.FieldCondition(
                        key="statement_id",
                        match=models.MatchAny(any=sorted(reached)),
                    )
                ]
            ),
            limit=1000,
            with_payload=True,
        )
        for r in records:
            hits.append(
                {
                    "chapter": r.payload["chapter"],
                    "line_start": None,
                    "line_end": None,
                    "score": 0.5,
                    "statement_id": r.payload["statement_id"],
                    "kind": r.payload["kind"],
                }
            )
        seed_order = {s["statement_id"]: i for i, s in enumerate(seeds) if s.get("statement_id")}
        hits.sort(key=lambda h: (seed_order.get(h["statement_id"], 99), h["statement_id"]))
    return hits[:limit]


def load_connections(path: Path) -> dict[str, list[str]]:
    """connections.jsonl -> statement id to linked statement ids."""
    out: dict[str, list[str]] = {}
    for line in path.read_text().splitlines():
        line = line.strip()
        if not line:
            continue
        rec = json.loads(line)
        src, tgt = rec.get("source", ""), rec.get("target", "")
        for a, b in ((src, tgt), (tgt, src)):
            if a.startswith("statement:"):
                out.setdefault(a, []).append(b)
    return out


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--index", type=Path, default=ROOT / ".weaver/retrieval/index")
    ap.add_argument("--questions", type=Path,
                    default=ROOT / ".weaver/research/retrieval-experiment/questions-v2.json")
    ap.add_argument("--notebook", type=Path, default=ROOT / ".weaver/knowledge/shadow-slave")
    ap.add_argument("--ceiling", type=int, default=3127)
    ap.add_argument("--limit", type=int, default=10)
    ap.add_argument("--out", type=Path, default=ROOT / ".weaver/research/retrieval-experiment/v2-3127")
    ap.add_argument("--max-questions", type=int, default=0, help="smoke test: only N questions")
    ap.add_argument("--tag", default="v2-3127")
    args = ap.parse_args()

    questions = load_questions(args.questions)
    if args.max_questions:
        questions = questions[: args.max_questions]
    print(f"questions: {len(questions)}", flush=True)

    connections = load_connections(args.notebook / "connections.jsonl")
    client = QdrantClient(path=str(args.index))
    print(f"novel chunks: {client.count(NOVEL_COLLECTION).count}, "
          f"notebook statements: {client.count(NOTEBOOK_COLLECTION).count}", flush=True)

    from fastembed import SparseTextEmbedding, TextEmbedding

    embedder = TextEmbedding("BAAI/bge-large-en-v1.5", threads=4)
    sparse = bm42_encoder(SparseTextEmbedding("Qdrant/bm42-all-minilm-l6-v2-attentions"))

    arms = {
        "1-exact-novel-sparse": lambda q: arm_exact_novel(client, q, ceiling=args.ceiling, limit=args.limit, sparse=sparse),
        "2-exact-notebook-sparse": lambda q: arm_exact_notebook(client, q, ceiling=args.ceiling, limit=args.limit, sparse=sparse),
        "3-dense-novel": lambda q: arm_dense_novel(client, embedder, q, ceiling=args.ceiling, limit=args.limit),
        "4-hybrid-rrf": lambda q: arm_hybrid(client, embedder, q, ceiling=args.ceiling, fusion=models.Fusion.RRF, limit=args.limit, sparse=sparse),
        "4-hybrid-dbsf": lambda q: arm_hybrid(client, embedder, q, ceiling=args.ceiling, fusion=models.Fusion.DBSF, limit=args.limit, sparse=sparse),
        "5-notebook-connections": lambda q: arm_connections(client, q, connections, ceiling=args.ceiling, limit=args.limit, sparse=sparse),
    }

    results_by_arm: dict[str, list[ArmResult]] = {}
    for name, fn in arms.items():
        results = []
        for i, q in enumerate(questions, start=1):
            results.append(ArmResult(arm=name, question_id=q.id, hits=fn(q.text), ceiling=args.ceiling))
            if i % 5 == 0 or i == len(questions):
                print(f"  {name}: {i}/{len(questions)}", flush=True)
        results_by_arm[name] = results

    lines = [
        "# Retrieval experiment: whole novel at ceiling 3127",
        "",
        f"- questions: {len(questions)} ({sum(1 for q in questions if q.paraphrase)} paraphrased)",
        f"- ceiling: {args.ceiling}",
        "- dense: BAAI/bge-large-en-v1.5 (querying the persistent colab index)",
        "- sparse: bm42 (both collections; index stores it under the 'bm25' name, IDF modifier)",
        f"- tag: {args.tag}",
        "",
        "| arm | hit@1 | hit@5 | hit@10 | MRR | misses |",
        "|---|---|---|---|---|---|",
    ]
    all_scores = []
    for name, results in results_by_arm.items():
        score = score_arm(results, questions)
        all_scores.append((name, score))
        lines.append(
            f"| {name} | {score.hit_at_1:.2f} | {score.hit_at_5:.2f} | "
            f"{score.hit_at_10:.2f} | {score.mrr:.2f} | {', '.join(score.misses) or '-'} |"
        )

    lines.append("")
    lines.append("## Miss detail")
    for name, score in all_scores:
        if score.misses:
            lines.append(f"- **{name}** misses: {', '.join(score.misses)}")

    best = max(all_scores, key=lambda s: s[1].mrr)
    lines.append("")
    lines.append(f"## Best arm: {best[0]}")
    lines.append("")
    lines.append("| question | expected ch | top hit ch |")
    lines.append("|---|---|---|")
    fn = arms[best[0]]
    for q in questions:
        hits = fn(q.text)
        top = hits[0]["chapter"] if hits else None
        lines.append(f"| {q.id} | {q.expected_chapter} | {top} |")

    args.out.mkdir(parents=True, exist_ok=True)
    report = "\n".join(lines) + "\n"
    (args.out / "report.md").write_text(report)
    (args.out / "hits.json").write_text(
        json.dumps(
            {
                "tag": args.tag,
                "questions": [q.__dict__ for q in questions],
                "arms": {
                    name: [{"question_id": r.question_id, "hits": r.hits[:5]} for r in results]
                    for name, results in results_by_arm.items()
                },
            },
            indent=2,
        )
    )
    print(report, flush=True)
    print(f"report written: {args.out / 'report.md'}", flush=True)
    return 0


if __name__ == "__main__":
    sys.exit(main())
