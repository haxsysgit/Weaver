#!/usr/bin/env python3
"""Standalone Shadow Slave index builder + retrieval eval for Colab.

Self-contained on purpose: no weaver imports, just qdrant-client and
fastembed. Run this on Colab (T4 GPU) to:

  * sweep chunk sizes against a labeled question set and pick the best
  * build the full-novel index (all 3,127 chapters) and zip it

Novel layout expected: <novels-dir>/NNNN-NNNN+99/chapter-NNNN.txt

Example (Colab):
    pip install qdrant-client fastembed onnxruntime-gpu
    python colab_index.py --novels-dir novels/shadow-slave \\
        --questions questions-colab.json --sweep 12,20,30,40
    python colab_index.py --novels-dir novels/shadow-slave \\
        --chunk-target 20 --chunk-overlap 8 --zip-out index.zip
"""

from __future__ import annotations

import argparse
import hashlib
import json
import re
import shutil
import sys
import time
import zipfile
import zlib
from dataclasses import dataclass, field
from pathlib import Path

# ---------------------------------------------------------------------------
# Chunker: verbatim copy of weaver.retrieval.chunker (self-contained here so
# Colab needs no repo checkout). Line 1 of every chapter is the title
# heading, never story text.
# ---------------------------------------------------------------------------

TARGET_LINES = 40
OVERLAP_LINES = 10

_QUOTE_RE = re.compile(r'^\s*["\']')


@dataclass(frozen=True)
class _Unit:
    line_start: int
    line_end: int
    text: str
    is_bracket: bool = False
    is_dialogue: bool = False


@dataclass(frozen=True)
class Chunk:
    chapter: int
    line_start: int
    line_end: int
    text: str
    source_hash: str
    flags: frozenset = field(default_factory=frozenset)


def _is_blank(line: str) -> bool:
    return not line.strip()


def _is_bracket(line: str) -> bool:
    return bool(line.strip().startswith("["))


def _is_quote(line: str) -> bool:
    return bool(_QUOTE_RE.match(line))


def split_units(lines: list[str]) -> list[_Unit]:
    """Atomic units: paragraphs (never split), bracket blocks (whole),
    dialogue runs (sticky)."""
    units: list[_Unit] = []
    start = None
    block_type = None

    def flush(end: int) -> None:
        nonlocal start, block_type
        if start is None:
            return
        units.append(
            _Unit(
                start,
                end,
                "\n".join(lines[start - 1 : end]),
                block_type == "bracket",
                block_type == "dialogue",
            )
        )
        start = None
        block_type = None

    for idx, line in enumerate(lines, start=1):
        if _is_blank(line):
            flush(idx - 1)
        elif _is_bracket(line):
            if block_type != "bracket":
                flush(idx - 1)
                start, block_type = idx, "bracket"
        elif _is_quote(line):
            if block_type != "dialogue":
                flush(idx - 1)
                start, block_type = idx, "dialogue"
        else:
            if block_type != "plain":
                flush(idx - 1)
                start, block_type = idx, "plain"
    flush(len(lines))
    return units


def merge_units(
    chapter: int,
    units: list[_Unit],
    *,
    target_lines: int = TARGET_LINES,
    overlap_lines: int = OVERLAP_LINES,
    source_hash: str = "",
) -> list[Chunk]:
    """Merge atomic units into chunks of roughly target_lines, keeping
    overlap_lines of trailing lines so straddling evidence survives."""
    chunks: list[Chunk] = []
    current: list[_Unit] = []
    current_lines = 0
    overlap_tail: list[_Unit] = []

    def emit() -> None:
        nonlocal current, current_lines, overlap_tail
        if not current:
            return
        flags = set()
        if any(u.is_bracket for u in current):
            flags.add("memory-block")
        if any(u.is_dialogue for u in current):
            flags.add("dialogue")
        chunks.append(
            Chunk(
                chapter=chapter,
                line_start=current[0].line_start,
                line_end=current[-1].line_end,
                text="\n\n".join(u.text for u in current),
                source_hash=source_hash,
                flags=frozenset(flags),
            )
        )
        overlap_tail = []
        if overlap_lines > 0:
            tail_lines = 0
            for unit in reversed(current):
                tail_lines += unit.line_end - unit.line_start + 1
                overlap_tail.append(unit)
                if tail_lines >= overlap_lines:
                    break
            overlap_tail.reverse()
        current = []
        current_lines = 0

    for unit in units:
        if current and current_lines + (unit.line_end - unit.line_start + 1) > target_lines:
            emit()
            current = list(overlap_tail)
            current_lines = sum(u.line_end - u.line_start + 1 for u in current)
        current.append(unit)
        current_lines += unit.line_end - unit.line_start + 1
    emit()
    return chunks


def chunk_chapter(
    chapter: int, text: str, *, target_lines: int = TARGET_LINES, overlap_lines: int = OVERLAP_LINES
) -> list[Chunk]:
    lines = text.splitlines()
    body = lines[1:] if len(lines) > 1 else []
    source_hash = hashlib.sha256(text.encode("utf-8")).hexdigest()[:16]
    shifted = []
    for u in split_units(body):
        shifted.append(
            _Unit(u.line_start + 1, u.line_end + 1, u.text, u.is_bracket, u.is_dialogue)
        )
    return merge_units(
        chapter, shifted, target_lines=target_lines, overlap_lines=overlap_lines, source_hash=source_hash
    )


# ---------------------------------------------------------------------------
# Stable hashing (Colab and local must agree on ids; Python's builtin hash
# is per-process randomized, so never use it for ids).
# ---------------------------------------------------------------------------

def stable_key(s: str) -> int:
    return zlib.crc32(s.encode("utf-8")) & 0x7FFFFFFF


def tokenize(text: str) -> list[str]:
    """Lowercase word tokens, stemmed (kills/killed/killing unify)."""
    try:
        from py_rust_stemmers import SnowballStemmer

        stemmer = SnowballStemmer("english")
        stem = stemmer.stem_word
    except Exception:
        stem = lambda t: t  # noqa: E731 - fallback when the package is absent
    return [stem(t) for t in re.findall(r"[a-z0-9']+", text.lower())]


def bm25_sparse_vector(text: str):
    """Term-frequency sparse vector (IDF applied at query time)."""
    from qdrant_client import models

    counts: dict[str, int] = {}
    for t in tokenize(text):
        counts[t] = counts.get(t, 0) + 1
    terms = sorted(counts)
    return models.SparseVector(
        indices=[stable_key(t) for t in terms],
        values=[float(counts[t]) for t in terms],
    )


def splade_encoder(model):
    """Wrap a fastembed SparseTextEmbedding (BM42/SPLADE) as an encoder."""
    from qdrant_client import models

    def encode(text: str):
        vec = list(model.embed([text]))[0]
        return models.SparseVector(indices=list(vec.indices), values=list(vec.values))

    return encode


# ---------------------------------------------------------------------------
# Novel discovery
# ---------------------------------------------------------------------------

def find_chapters(novels_dir: Path, max_chapters: int | None = None) -> list[tuple[int, Path]]:
    found: list[tuple[int, Path]] = []
    for d in sorted(novels_dir.iterdir()):
        if not d.is_dir() or not re.match(r"^\d{4}-\d{4}$", d.name):
            continue
        for f in sorted(d.glob("chapter-*.txt")):
            m = re.match(r"chapter-(\d{4})\.txt", f.name)
            if m:
                found.append((int(m.group(1)), f))
    found.sort(key=lambda x: x[0])
    if max_chapters:
        found = found[:max_chapters]
    return found


def chunk_all(novels_dir: Path, *, target_lines: int, overlap_lines: int, max_chapters: int | None = None) -> list[Chunk]:
    chapters = find_chapters(novels_dir, max_chapters)
    chunks: list[Chunk] = []
    t0 = time.time()
    for i, (num, path) in enumerate(chapters, start=1):
        text = path.read_text(encoding="utf-8")
        chunks.extend(chunk_chapter(num, text, target_lines=target_lines, overlap_lines=overlap_lines))
        if i % 500 == 0:
            print(f"  chunked {i}/{len(chapters)} chapters ({len(chunks)} chunks, {time.time()-t0:.0f}s)", flush=True)
    print(f"chunked {len(chapters)} chapters -> {len(chunks)} chunks in {time.time()-t0:.0f}s")
    return chunks


# ---------------------------------------------------------------------------
# Index build
# ---------------------------------------------------------------------------

def providers() -> list[str] | None:
    """CUDA first when onnxruntime-gpu is installed (Colab T4)."""
    try:
        import onnxruntime as ort

        avail = ort.get_available_providers()
        if "CUDAExecutionProvider" in avail:
            return ["CUDAExecutionProvider", "CPUExecutionProvider"]
    except Exception:
        pass
    return None


def _active_providers(model) -> list[str]:
    """Which providers the model session actually uses (not just installed).

    fastembed wraps the onnx InferenceSession in one or two wrapper layers
    (TextEmbedding -> OnnxTextEmbedding -> InferenceSession), so walk down
    .model a few levels and only call get_providers on something that has
    it. Never crash here: this is the diagnostic path.
    """
    inner = model
    for _ in range(3):
        sess = getattr(inner, "model", None)
        if sess is None or sess is inner:
            break
        inner = sess
    getter = getattr(inner, "get_providers", None)
    if callable(getter):
        try:
            return list(getter())
        except Exception:
            return []
    return []


def _check_gpu(model, name: str) -> None:
    used = _active_providers(model)
    print(f"{name} providers: {used}")
    if "CUDAExecutionProvider" not in used:
        print("WARNING: CUDA NOT ACTIVE - embedding runs on CPU and will take hours.")
        print("Fix (Colab, CUDA 12): pip uninstall -y onnxruntime && pip install -q onnxruntime-gpu \\")
        print("     --extra-index-url https://aiinfra.pkgs.visualstudio.com/PublicPackages/_packaging/onnxruntime-cuda-12/pypi/simple/")
        print("     then Runtime -> Restart session and re-run from cell 3.")


def make_embedder(dense_model: str):
    from fastembed import TextEmbedding

    prov = providers()
    try:
        embedder = TextEmbedding(dense_model, threads=4, providers=prov) if prov else TextEmbedding(dense_model, threads=4)
    except TypeError:
        embedder = TextEmbedding(dense_model, threads=4)
    _check_gpu(embedder, "dense")
    return embedder


def make_sparse(sparse_model: str):
    from fastembed import SparseTextEmbedding

    prov = providers()
    try:
        model = SparseTextEmbedding(sparse_model, providers=prov) if prov else SparseTextEmbedding(sparse_model)
    except TypeError:
        model = SparseTextEmbedding(sparse_model)
    _check_gpu(model, "sparse")
    return splade_encoder(model)


def build_index(client, chunks: list[Chunk], embedder, sparse_encoder, *, dense_size: int) -> None:
    from qdrant_client import models

    if client.collection_exists("novel_chunks"):
        client.delete_collection("novel_chunks")
    client.create_collection(
        collection_name="novel_chunks",
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
    batch_size = 64
    t0 = time.time()
    for i in range(0, len(chunks), batch_size):
        batch = chunks[i : i + batch_size]
        dense = [list(v) for v in embedder.embed([c.text for c in batch])]
        client.upsert(
            "novel_chunks",
            [
                models.PointStruct(
                    id=stable_key(f"{c.chapter}:{c.line_start}"),
                    vector={"dense": dense[j], "bm25": sparse_encoder(c.text)},
                    payload={
                        "chapter": c.chapter,
                        "line_start": c.line_start,
                        "line_end": c.line_end,
                        "source_hash": c.source_hash,
                        "source_kind": "novel",
                    },
                )
                for j, c in enumerate(batch)
            ],
        )
        done = min(i + batch_size, len(chunks))
        if done % 512 == 0 or done == len(chunks):
            print(f"  indexed {done}/{len(chunks)} chunks ({time.time()-t0:.0f}s)", flush=True)
    print(f"indexed {len(chunks)} chunks in {time.time()-t0:.0f}s")


# ---------------------------------------------------------------------------
# Eval (novel arms only; the notebook arms are private and stay local)
# ---------------------------------------------------------------------------

def ceiling_filter(chapter: int | None):
    from qdrant_client import models

    if chapter is None:
        return []
    return [models.FieldCondition(key="chapter", range=models.Range(lte=chapter))]


def eval_arms(client, embedder, sparse_encoder, questions: list[dict], *, ceiling: int | None, limit: int = 10):
    from qdrant_client import models

    def _hits(points):
        return [
            {
                "chapter": p.payload["chapter"],
                "line_start": p.payload["line_start"],
                "line_end": p.payload["line_end"],
                "score": p.score,
            }
            for p in points
        ]

    arms = {
        "1-exact-novel-bm25": lambda q: _hits(
            client.query_points(
                "novel_chunks",
                query=sparse_encoder(q),
                using="bm25",
                query_filter=models.Filter(must=ceiling_filter(ceiling)),
                limit=limit,
                with_payload=True,
            ).points
        ),
        "3-dense-novel": lambda q: _hits(
            client.query_points(
                "novel_chunks",
                query=list(embedder.embed([q]))[0],
                using="dense",
                query_filter=models.Filter(must=ceiling_filter(ceiling)),
                limit=limit,
                with_payload=True,
            ).points
        ),
        "4-hybrid-rrf": lambda q: _hits(
            client.query_points(
                "novel_chunks",
                prefetch=[
                    models.Prefetch(query=list(embedder.embed([q]))[0], using="dense", limit=limit * 2),
                    models.Prefetch(query=sparse_encoder(q), using="bm25", limit=limit * 2),
                ],
                query=models.FusionQuery(fusion=models.Fusion.RRF),
                query_filter=models.Filter(must=ceiling_filter(ceiling)),
                limit=limit,
                with_payload=True,
            ).points
        ),
        "4-hybrid-dbsf": lambda q: _hits(
            client.query_points(
                "novel_chunks",
                prefetch=[
                    models.Prefetch(query=list(embedder.embed([q]))[0], using="dense", limit=limit * 2),
                    models.Prefetch(query=sparse_encoder(q), using="bm25", limit=limit * 2),
                ],
                query=models.FusionQuery(fusion=models.Fusion.DBSF),
                query_filter=models.Filter(must=ceiling_filter(ceiling)),
                limit=limit,
                with_payload=True,
            ).points
        ),
    }

    results = {name: [] for name in arms}
    for q in questions:
        qid, text = q["id"], q["text"]
        exp_ch, exp_lines = q["expected_chapter"], tuple(q["expected_lines"])
        for name, fn in arms.items():
            hits = fn(text)
            rank = None
            for i, h in enumerate(hits, start=1):
                if h["chapter"] == exp_ch and h["line_end"] >= exp_lines[0] and h["line_start"] <= exp_lines[1]:
                    rank = i
                    break
            results[name].append({"question_id": qid, "rank": rank})

    out = {}
    for name, rows in results.items():
        n = len(rows)
        hit1 = sum(1 for r in rows if r["rank"] is not None and r["rank"] <= 1) / n
        hit5 = sum(1 for r in rows if r["rank"] is not None and r["rank"] <= 5) / n
        hit10 = sum(1 for r in rows if r["rank"] is not None and r["rank"] <= 10) / n
        mrr = sum(1.0 / r["rank"] for r in rows if r["rank"] is not None) / n
        misses = [r["question_id"] for r in rows if r["rank"] is None]
        out[name] = {"hit@1": hit1, "hit@5": hit5, "hit@10": hit10, "mrr": mrr, "misses": misses}
    return out


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main() -> int:
    ap = argparse.ArgumentParser(description="Standalone Shadow Slave index + eval (Colab-ready)")
    ap.add_argument("--novels-dir", required=True, type=Path, help="dir holding NNNN-NNNN/chapter-NNNN.txt")
    ap.add_argument("--questions", type=Path, help="labeled questions JSON for eval")
    ap.add_argument("--sweep", help="comma list of chunk-target sizes to evaluate, e.g. 12,20,30,40")
    ap.add_argument("--chunk-target", type=int, default=TARGET_LINES)
    ap.add_argument("--chunk-overlap", type=int, default=OVERLAP_LINES)
    ap.add_argument("--dense", default="BAAI/bge-large-en-v1.5")
    ap.add_argument("--sparse", default="Qdrant/bm42-all-minilm-l6-v2-attentions")
    ap.add_argument("--ceiling", type=int, help="reader ceiling for eval (default: all chapters)")
    ap.add_argument("--max-chapters", type=int, help="limit chapters (smoke tests)")
    ap.add_argument("--db-path", type=Path, default=Path("/content/index"), help="qdrant local-mode dir (zip root becomes index/)")
    ap.add_argument("--report", type=Path, default=Path("/content/report.md"))
    ap.add_argument("--zip-out", type=Path, help="zip the built index to this file")
    args = ap.parse_args()

    print(f"=== colab_index: dense={args.dense} sparse={args.sparse} ===")
    embedder = make_embedder(args.dense)
    sparse = make_sparse(args.sparse)
    probe = list(embedder.embed(["probe"]))[0]
    dense_size = len(probe)
    print(f"dense model ready, dim={dense_size}; sparse model ready")

    questions = None
    if args.questions:
        questions = json.loads(args.questions.read_text())
        print(f"loaded {len(questions)} questions")

    ceiling = args.ceiling
    if ceiling is None and questions:
        ceiling = max(q["expected_chapter"] for q in questions)
        print(f"ceiling defaulted to max expected chapter: {ceiling}")

    report_lines: list[str] = []
    last_chunk_info = (args.chunk_target, args.chunk_overlap, 0)

    if args.sweep:
        sizes = [int(x) for x in args.sweep.split(",")]
        report_lines.append("# Chunk-size sweep\n")
        report_lines.append(
            f"- questions: {len(questions) if questions else 0}, ceiling: {ceiling}, dense: {args.dense}, sparse: {args.sparse}\n"
        )
        report_lines.append("| size | arm | hit@1 | hit@5 | hit@10 | MRR | misses |\n|---|---|---|---|---|---|---|\n")
        best = None
        for size in sizes:
            overlap = max(1, size // 2 - 1)
            print(f"=== sweep size {size} (overlap {overlap}) ===")
            shutil.rmtree(args.db_path, ignore_errors=True)
            from qdrant_client import QdrantClient

            client = QdrantClient(path=str(args.db_path))
            chunks = chunk_all(args.novels_dir, target_lines=size, overlap_lines=overlap, max_chapters=args.max_chapters)
            build_index(client, chunks, embedder, sparse, dense_size=dense_size)
            if questions:
                scores = eval_arms(client, embedder, sparse, questions, ceiling=ceiling)
                for arm, s in scores.items():
                    report_lines.append(
                        f"| {size} | {arm} | {s['hit@1']:.2f} | {s['hit@5']:.2f} | {s['hit@10']:.2f} | {s['mrr']:.2f} | {','.join(s['misses'])} |\n"
                    )
                hit5 = {arm: s["hit@5"] for arm, s in scores.items()}
                dense_h5 = hit5.get("3-dense-novel", 0.0)
                if best is None or dense_h5 > best[1]:
                    best = (size, dense_h5)
            last_chunk_info = (size, overlap, len(chunks))
            client.close()
        if best:
            report_lines.append(f"\nBest dense hit@5: size {best[0]} ({best[1]:.2f})\n")
        print(f"\nBest dense hit@5: size {best[0]} ({best[1]:.2f})" if best else "\nno questions: sweep built indexes only")

    else:
        report_lines.append("# Full-novel index build\n")
        shutil.rmtree(args.db_path, ignore_errors=True)
        from qdrant_client import QdrantClient

        client = QdrantClient(path=str(args.db_path))
        chunks = chunk_all(args.novels_dir, target_lines=args.chunk_target, overlap_lines=args.chunk_overlap, max_chapters=args.max_chapters)
        build_index(client, chunks, embedder, sparse, dense_size=dense_size)
        if questions:
            scores = eval_arms(client, embedder, sparse, questions, ceiling=ceiling)
            report_lines.append("| arm | hit@1 | hit@5 | hit@10 | MRR |\n|---|---|---|---|---|\n")
            for arm, s in scores.items():
                report_lines.append(f"| {arm} | {s['hit@1']:.2f} | {s['hit@5']:.2f} | {s['hit@10']:.2f} | {s['mrr']:.2f} |\n")
        last_chunk_info = (args.chunk_target, args.chunk_overlap, len(chunks))
        client.close()

    target, overlap, nchunks = last_chunk_info
    report_lines.append(f"\n- chunks: {nchunks} (target {target}, overlap {overlap})\n")
    if args.zip_out:
        print(f"zipping {args.db_path} -> {args.zip_out} ...")
        with zipfile.ZipFile(args.zip_out, "w", zipfile.ZIP_DEFLATED) as zf:
            for f in sorted(args.db_path.rglob("*")):
                if f.is_file():
                    zf.write(f, f.relative_to(args.db_path.parent))
        size_mb = args.zip_out.stat().st_size / 1e6
        print(f"zip ready: {args.zip_out} ({size_mb:.1f} MB)")

    args.report.parent.mkdir(parents=True, exist_ok=True)
    args.report.write_text("".join(report_lines))
    print(f"report written: {args.report}")
    print("DONE")
    return 0


if __name__ == "__main__":
    sys.exit(main())
