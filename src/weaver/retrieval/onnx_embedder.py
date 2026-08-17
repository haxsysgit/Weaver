"""Fastembed-compatible embedder over a local onnx file.

fastembed only knows registry model ids, so the self-quantized int8
model (built by scripts/colab_build_runner.py via onnxruntime
quantize_dynamic) is loaded directly: onnx file + sibling
tokenizer.json, mean-pooled and L2-normalized like the fastembed
model config does. Used both by the index build and the runtime
query path so index and queries always share one model (mixing
models corrupts ranking).
"""

from __future__ import annotations

from pathlib import Path


class DirectOnnxEmbedder:
    """Minimal fastembed-compatible embedder over a local onnx file."""

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
