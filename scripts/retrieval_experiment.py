"""Plan 014 slice 2 runner: the 1-1000 retrieval experiment.

Usage:
  uv run python scripts/retrieval_experiment.py --novel-dir novels/shadow-slave \
      --notebook-dir .weaver/knowledge/shadow-slave \
      --questions .weaver/research/retrieval-experiment/questions.json \
      --out .weaver/research/retrieval-experiment/report.md \
      --ceiling 1000 [--limit 10]

Reads chapter files directly from the immutable novel (never modifies
them), indexes into a temporary Qdrant embedded-local store, runs the
five arms on the labeled question set, and writes a comparison report.
The report contains only chapters, line ranges, scores, and hashes:
no novel prose is copied into the output.
"""

from __future__ import annotations

import argparse
import json
import tempfile
from pathlib import Path

from qdrant_client import QdrantClient, models

from weaver.retrieval.experiment import (
    ArmResult,
    CHUNK_LINES,
    arm_dense_novel,
    arm_exact_novel,
    arm_exact_notebook,
    arm_hybrid,
    arm_notebook_connections,
    chunk_chapter,
    create_novel_collection,
    create_notebook_collection,
    load_questions,
    score_arm,
)

VOLUME_DIRS = 10  # 0001-0100 .. 0901-1000


def _chapter_path(novel_dir: Path, chapter: int) -> Path:
    """Chapter N lives in directory NNNN-NNNN+99 as chapter-NNNN.txt."""
    lo = ((chapter - 1) // 100) * 100 + 1
    hi = lo + 99
    return novel_dir / f"{lo:04d}-{hi:04d}" / f"chapter-{chapter:04d}.txt"


def _load_chapters(novel_dir: Path, ceiling: int) -> list:
    """All chapter texts 1..ceiling, read only (never written)."""
    chapters = []
    for n in range(1, ceiling + 1):
        p = _chapter_path(novel_dir, n)
        chapters.append((n, p.read_text(encoding="utf-8")))
    return chapters


def _load_statements(notebook_dir: Path, ceiling: int) -> list[dict]:
    """All notebook statements from reading/NNNN.json records."""
    statements = []
    for n in range(1, ceiling + 1):
        rec = json.loads((notebook_dir / "reading" / f"{n:04d}.json").read_text())
        for st in rec.get("statements", []):
            st = dict(st)
            st["chapter"] = n
            statements.append(st)
    return statements


def _load_connections(notebook_dir: Path) -> dict[str, list[str]]:
    """connections.jsonl -> adjacency: node id -> linked node ids."""
    adj: dict[str, list[str]] = {}
    path = notebook_dir / "connections.jsonl"
    for line in path.read_text().splitlines():
        if not line.strip():
            continue
        conn = json.loads(line)
        adj.setdefault(conn["source"], []).append(conn["target"])
    return adj


def _embedder(model_id: str):
    """Local fastembed ONNX model, cached after first use."""
    from fastembed import TextEmbedding

    return TextEmbedding(model_id)


def _sparse_encoder():
    """fastembed SPLADE sparse encoder, for the sparse-arm variable."""
    from fastembed import SparseTextEmbedding

    return SparseTextEmbedding("prithivida/Splade_PP_en_v1")


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--novel-dir", required=True, type=Path)
    ap.add_argument("--notebook-dir", required=True, type=Path)
    ap.add_argument("--questions", required=True, type=Path)
    ap.add_argument("--out", required=True, type=Path)
    ap.add_argument("--ceiling", type=int, default=1000)
    ap.add_argument("--limit", type=int, default=10)
    ap.add_argument("--chunk-lines", type=int, default=None, help="novel chunk size in lines (default 15)")
    ap.add_argument("--dense-model", type=str, default="sentence-transformers/all-MiniLM-L6-v2",
                    help="fastembed dense model id")
    ap.add_argument("--sparse", choices=("bm25", "splade"), default="bm25",
                    help="sparse encoder for the exact/hybrid arms")
    ap.add_argument("--db-path", type=Path, default=None, help="persist the Qdrant store (default: temp)")
    args = ap.parse_args()

    questions = load_questions(args.questions)
    chapters = _load_chapters(args.novel_dir, args.ceiling)
    statements = _load_statements(args.notebook_dir, args.ceiling)
    connections = _load_connections(args.notebook_dir)

    chunks = []
    chunk_lines = args.chunk_lines or CHUNK_LINES
    for n, text in chapters:
        chunks.extend(chunk_chapter(n, text, chunk_lines=chunk_lines))
    print(f"indexed {len(chunks)} novel chunks ({chunk_lines}-line windows), "
          f"{len(statements)} statements, {args.ceiling} chapters, {len(questions)} questions")

    embedder = _embedder(args.dense_model)
    if args.sparse == "splade":
        from weaver.retrieval.experiment import splade_encoder

        sparse_encoder = splade_encoder(_sparse_encoder())
    else:
        from weaver.retrieval.experiment import bm25_sparse_vector

        sparse_encoder = bm25_sparse_vector
    client = QdrantClient(path=str(args.db_path or tempfile.mkdtemp(prefix="weaver-retrieval-")))
    try:
        dense_size = len(list(embedder.embed(["probe"]))[0])
        create_novel_collection(client, chunks, embedder, dense_size=dense_size, sparse_encoder=sparse_encoder)
        create_notebook_collection(client, statements, sparse_encoder=sparse_encoder)
        print("collections ready")

        arms = {
            "1-exact-novel-bm25": lambda q: arm_exact_novel(client, q, ceiling=args.ceiling, limit=args.limit, sparse_encoder=sparse_encoder),
            "2-exact-notebook-bm25": lambda q: arm_exact_notebook(client, q, ceiling=args.ceiling, limit=args.limit, sparse_encoder=sparse_encoder),
            "3-dense-novel": lambda q: arm_dense_novel(client, embedder, q, ceiling=args.ceiling, limit=args.limit),
            "4-hybrid-rrf": lambda q: arm_hybrid(client, embedder, q, ceiling=args.ceiling, fusion=models.Fusion.RRF, limit=args.limit, sparse_encoder=sparse_encoder),
            "4-hybrid-dbsf": lambda q: arm_hybrid(client, embedder, q, ceiling=args.ceiling, fusion=models.Fusion.DBSF, limit=args.limit, sparse_encoder=sparse_encoder),
            "5-notebook-connections": lambda q: arm_notebook_connections(client, q, connections, ceiling=args.ceiling, limit=args.limit, sparse_encoder=sparse_encoder),
        }

        report: list[str] = [
            "# Retrieval experiment: chapters 1-1000",
            "",
            f"- questions: {len(questions)} ({sum(1 for q in questions if q.paraphrase)} paraphrased)",
            f"- ceiling: {args.ceiling}",
            f"- novel chunks: {len(chunks)}",
            f"- notebook statements: {len(statements)}",
            "- dense: all-MiniLM-L6-v2 (local fastembed ONNX)",
            "- sparse: hand-rolled BM25 (modifier=IDF)",
            "",
            "| arm | hit@1 | hit@5 | hit@10 | MRR | misses |",
            "|---|---|---|---|---|---|",
        ]
        all_scores = []
        for name, fn in arms.items():
            results = []
            for q in questions:
                hits = fn(q.text)
                results.append(ArmResult(arm=name, question_id=q.id, hits=hits, ceiling=args.ceiling))
            score = score_arm(results, questions)
            all_scores.append((name, score))
            report.append(
                f"| {name} | {score.hit_at_1:.2f} | {score.hit_at_5:.2f} | "
                f"{score.hit_at_10:.2f} | {score.mrr:.2f} | {', '.join(score.misses) or '-'} |"
            )

        report.append("")
        report.append("## Miss detail")
        for name, score in all_scores:
            if score.misses:
                report.append(f"- **{name}** misses: {', '.join(score.misses)}")

        # top-1 hit chapters per question for the winning arm
        best = max(all_scores, key=lambda s: s[1].mrr)
        report.append("")
        report.append(f"## Best arm: {best[0]}")
        report.append("")
        report.append("| question | expected ch | top hit ch |",
                      )
        # re-run best arm to print detail
        fn = arms[best[0]]
        for q in questions:
            hits = fn(q.text)
            top = hits[0]["chapter"] if hits else None
            report.append(f"| {q.id} | {q.expected_chapter} | {top} |")

        args.out.parent.mkdir(parents=True, exist_ok=True)
        args.out.write_text("\n".join(report))
        print(f"report written: {args.out}")
        for name, score in sorted(all_scores, key=lambda s: -s[1].mrr):
            print(f"  {name:28s} hit@5={score.hit_at_5:.2f}  mrr={score.mrr:.2f}")
    finally:
        client.close()
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
