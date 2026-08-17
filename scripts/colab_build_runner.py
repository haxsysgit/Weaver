"""Colab build runner: full-novel index (novel_chunks + notebook_statements).

Runs inside Google Colab (Plan 018.5 slice 6). Uses the REAL weaver
chunker and collection creators - no parallel copy, no drift. Supports
two dense models:

  --dense BAAI/bge-large-en-v1.5        fastembed id (fp32, GPU-capable)
  --dense /path/to/model_quantized.onnx local self-quantized int8 onnx
                                       (loaded directly via onnxruntime;
                                        tokenizer.json must sit beside it)

Produces the same qdrant layout the runtime opens
(.weaver/retrieval/index) so the result can be unzipped in place.
"""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

from qdrant_client import QdrantClient, models

sys.path.insert(0, str(Path(__file__).resolve().parent))

from weaver.retrieval.chunker import chunk_chapter
from weaver.retrieval.onnx_embedder import DirectOnnxEmbedder  # noqa: E402
from weaver.retrieval.experiment import (  # noqa: E402
    create_novel_collection,
    create_notebook_collection,
    splade_encoder,
)


class ProgressEmbedder:
    """Wraps any embedder, printing live progress every N items."""

    def __init__(self, inner, label: str, every: int = 200) -> None:
        self._inner = inner
        self._label = label
        self._every = every
        self._n = 0

    def embed(self, texts: list[str]) -> list:
        out = self._inner.embed(texts)
        self._n += len(texts)
        if self._n % self._every < len(texts):
            print(f"{self._label}: {self._n} embedded", flush=True)
        return out


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--novel-dir", type=Path, required=True)
    ap.add_argument("--notebook-dir", type=Path, required=True)
    ap.add_argument("--out", type=Path, required=True)
    ap.add_argument("--ceiling", type=int, default=3160,
                    help="novel chapter ceiling (default 3160)")
    ap.add_argument("--chunk-target", type=int, default=40,
                    help="chunker target lines (sweep winner)")
    ap.add_argument("--chunk-overlap", type=int, default=10,
                    help="chunker overlap lines")
    ap.add_argument("--dense", default="BAAI/bge-large-en-v1.5",
                    help="fastembed id, or path to a local .onnx (int8)")
    ap.add_argument("--sparse", default="Qdrant/bm42-all-minilm-l6-v2-attentions")
    ap.add_argument("--provider", choices=["auto", "cpu"], default="auto",
                    help="auto: CUDA then CPU fallback; cpu: force CPU (int8 dynamic models can be slow on CUDA)")
    args = ap.parse_args()

    from fastembed import SparseTextEmbedding, TextEmbedding

    if args.dense.lower().endswith(".onnx"):
        embedder = DirectOnnxEmbedder(args.dense, provider=args.provider)
        dense_size = len(list(embedder.embed(["probe"]))[0])
    else:
        # CUDA first (T4 in colab), CPU fallback.
        try:
            embedder = TextEmbedding(
                args.dense, threads=4, providers=["CUDAExecutionProvider"]
            )
        except Exception:
            embedder = TextEmbedding(args.dense, threads=4)
        dense_size = len(list(embedder.embed(["probe"]))[0])
    sparse = splade_encoder(SparseTextEmbedding(args.sparse))

    chunks = []
    for n in range(1, args.ceiling + 1):
        lo = ((n - 1) // 100) * 100 + 1
        path = args.novel_dir / f"{lo:04d}-{lo + 99:04d}" / f"chapter-{n:04d}.txt"
        if not path.exists():
            print(f"skip missing chapter {n}")
            continue
        text = path.read_text(encoding="utf-8")
        chunks.extend(
            chunk_chapter(
                n, text,
                target_lines=args.chunk_target,
                overlap_lines=args.chunk_overlap,
            )
        )

    statements = []
    for n in range(1, args.ceiling + 1):
        rec_path = args.notebook_dir / "reading" / f"{n:04d}.json"
        if not rec_path.exists():
            continue
        rec = json.loads(rec_path.read_text(encoding="utf-8"))
        for st in rec.get("statements", []):
            st = dict(st)
            st["chapter"] = n
            statements.append(st)

    print(f"chunks: {len(chunks)}, statements: {len(statements)}, "
          f"dense dim: {dense_size}")
    embedder = ProgressEmbedder(embedder, "dense embed", every=500)
    args.out.mkdir(parents=True, exist_ok=True)
    client = QdrantClient(path=str(args.out))
    try:
        create_novel_collection(client, chunks, embedder,
                                dense_size=dense_size, sparse_encoder=sparse)
        create_notebook_collection(client, statements, sparse_encoder=sparse)
    finally:
        client.close()
    print("DONE", args.out)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
