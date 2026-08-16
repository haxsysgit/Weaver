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

from weaver.retrieval.chunker import chunk_chapter  # noqa: E402
from weaver.retrieval.experiment import (  # noqa: E402
    create_novel_collection,
    create_notebook_collection,
    splade_encoder,
)


class DirectOnnxEmbedder:
    """Minimal fastembed-compatible embedder over a local onnx file.

    Used for the self-quantized int8 model: fastembed only knows
    registry ids, so we load the onnx + sibling tokenizer.json directly
    and mean-pool the token embeddings (same pooling the fastembed
    model config uses).
    """

    def __init__(self, onnx_path: str, provider: str = "auto") -> None:
        import glob

        import numpy as np
        import onnxruntime as ort
        from tokenizers import Tokenizer

        self.np = np
        self._ort = ort
        onnx_path = str(onnx_path)
        model_dir = Path(onnx_path).parent
        tokenizer_files = glob.glob(str(model_dir / "tokenizer.json"))
        if not tokenizer_files:
            raise SystemExit(
                "DirectOnnxEmbedder needs tokenizer.json beside the onnx file"
            )
        self.tokenizer = Tokenizer.from_file(tokenizer_files[0])
        # Try CUDA (T4 in colab), fall back to CPU. --provider cpu forces CPU
        # (int8 dynamic models can be slower on CUDA due to per-layer dequant).
        try:
            _providers = (
                ["CPUExecutionProvider"]
                if provider == "cpu"
                else ["CUDAExecutionProvider", "CPUExecutionProvider"]
            )
            self.session = ort.InferenceSession(onnx_path, providers=_providers)
        except Exception:
            self.session = ort.InferenceSession(
                onnx_path, providers=["CPUExecutionProvider"]
            )

    def embed(self, texts: list[str]) -> list:
        np = self.np
        enc = self.tokenizer.encode_batch(texts)
        # bge-large has max_position_embeddings=512: longer sequences
        # are truncated (fastembed does the same silently). Truncate to
        # 512 here or the model errors on broadcast.
        maxlen = min(max(len(e.ids) for e in enc), 512)
        ids = np.zeros((len(enc), maxlen), dtype=np.int64)
        mask = np.zeros((len(enc), maxlen), dtype=np.int64)
        for i, e in enumerate(enc):
            n = min(len(e.ids), maxlen)
            ids[i, :n] = e.ids[:n]
            mask[i, :n] = 1
        out = self.session.run(
            None,
            {
                "input_ids": ids,
                "attention_mask": mask,
                "token_type_ids": np.zeros_like(ids),
            },
        )[0]
        m = mask.astype(np.float32)
        pooled = (out * m[..., None]).sum(axis=1) / m.sum(axis=1, keepdims=True)
        return list(pooled / np.linalg.norm(pooled, axis=1, keepdims=True))


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
