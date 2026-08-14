# Plan 018 slice 8 — Retrieval stack audit

Audit date: 2026-08-14. Evidence: code inspection at the commit after
slice 7 (`6f10348`), plus plan 014 records.

## What the stack actually is

| Piece | Reality | Evidence |
| --- | --- | --- |
| Vector store | **Embedded Qdrant** — `QdrantClient(path=...)`, local files, in-process, no server process, no network port | `retrieval/library.py:683` (build), `retrieval/tools.py:211` (search, lazy client) |
| Index layout | Two collections: `novel_chunks` and `notebook_statements`, under `.weaver/retrieval/index/collection/` | `library.py:686-687`, `.weaver/retrieval/` = 81M |
| Dense embeddings | **fastembed onnx**, `BAAI/bge-large-en-v1.5` | `library.py:636` |
| Sparse embeddings | **BM42** (`Qdrant/bm42-all-minilm-l6-v2-attentions`) | `library.py:637` |
| Search strategy | Dense-first, sparse fallback; range filters built in code, never model args | `tools.py:259-305` |
| Chunking | 40-line chunks (measured best at plan 014 sweep) | `tools.py:262` comment |
| faiss / numpy index | **None.** The TODO_future "numpy/onnx index" line is stale, written before plan 014 | grep over `retrieval/*.py` |

## The v1 question

The v1 host runs the int8-quantized bge-large onnx model (owner decision
2026-08-10, TODO_future). Does embedded Qdrant survive deployment?

**Yes, with one requirement.** Embedded Qdrant is a directory of local
files. In a container it needs:

1. The index shipped with the image or restored from backup into
   `WEAVER_STATE_DIR/retrieval/index/` before the app starts.
2. A persistent volume (or a rebuild-at-boot path) so a container restart
   does not lose it.

Both are ordinary v1 packaging work, not a stack change. Nothing about
embedded Qdrant blocks containerization: it is just files.

## Recommendation: NO stack change for v1

- Embedded Qdrant already works, is tested (501 tests), and is one
  process instead of two.
- The quantized model swap changes the embedder, not the store: same
  Qdrant client, same collections, new embedding vectors. The store does
  not need to know.
- A qdrant server adds a second process, a port, a health check, and a
  volume — no benefit at one-user-group scale.
- faiss would be a rewrite with fewer features (no metadata filters, no
  persistence story) for no measured gain.

## The deferred learning slice (TODO_future)

The vector-database learning item stays after v1. When it is picked up,
it should be framed as: run a qdrant server (or faiss) side by side with
the embedded path on the same index and measure what actually changes
(latency, memory, hit rate at scale). Until then the stack is final.

## Risks to note for v1

1. `.weaver/retrieval/` is 81M of generated state — the v1 plan must
   decide ship-with-image vs restore-from-backup vs rebuild-at-boot.
2. The quantized bge swap changes embedding vectors; the index must be
   rebuilt (or re-embedded) with the new model, or the search silently
   degrades. The v1 plan should sequence: quantize -> rebuild index ->
   verify hit rate.
3. `fastembed` downloads models on first use (network at first run) —
   the v1 plan should pin/cache model files in the image.
