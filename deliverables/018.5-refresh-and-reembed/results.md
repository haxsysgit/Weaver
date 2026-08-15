# Plan 018.5 results

## Slice 2 - refresh stabilization (2026-08-15)

- Source retries: transient (timeout/provider/429) retried with backoff
  up to max_attempts=3; hard errors (auth/config/not-found/security)
  raise immediately (src/weaver/corpus/source.py).
- CLI reports `last known chapter: N-1` after a first-404 stop.
- Tests: 5 new (retry-then-succeed, give-up-after-max, no-retry-on-hard,
  probe-composes-with-retries, persistent-failure-keeps-saves-and-resumes).

## Slice 2.5 - direct HTTP source (2026-08-15)

- Firecrawl transiently redirected chapter 3152 to novelphoenix.com; the
  final_url_mismatch guard stopped the run (correct). Direct probing
  proved the site itself serves the real article to a browser UA, so the
  redirect was site-side bot detection, not a domain move.
- Built DirectHttpChapterSource: httpx (already a transitive dep) with a
  desktop-Chrome header set over HTTP/2, same retry contract, $0.
  CLI flag `--source direct|firecrawl`.
- LIVE PROOF (slice 4 work): `weaver refresh --apply --source direct`
  saved chapters 3152-3160 (9 chapters, all real prose) and stopped at
  3161 on the same conditional redirect the guard caught. Shelf now
  current to chapter 3160. No firecrawl credits spent.
- Direct is now the default source; firecrawl stays as fallback
  (owner-approved 2026-08-15: weaver self-served except the model).

## Slices 5-9 - not started

## Slice 5 - eval data + embed speed benchmark (2026-08-15)

- Eval data recovered from disk (never deleted): questions-colab.json,
  questions-v2.json, questions-slice-200.json, colab-sweep-bge-40wins.md
  (baseline: 40-line chunks, dense hit@5 0.57), all in
  .weaver/research/retrieval-experiment/.
- The colab scripts themselves are NOT restored: they were a parallel
  copy that drifted; the native chunker + build_library_index is the
  single source of truth.
- Speed measured (this machine, CPU-only onnxruntime 1.28):
  - chunking only: 0.1s per 200 chapters (negligible)
  - fp32 embed via real build path: 3.23 s/chunk -> ~6.2 h full novel
  - int8 self-quantized: 53 ms/chunk vs 80 ms fp32 (1.51x), full ~5 h
- Quantization reality check (corrects earlier 4x-speed folklore):
  - Qdrant/bge-large-en-v1.5-onnx-Q is FP16 (668MB), not int8; fp16 on
    CPU is SLOWER (0.73x) - rejected.
  - Real int8: self-quantize trusted fp32 in-house via quantize_dynamic
    (26s, 1337->431 MB, cos(fp32,int8) ~0.97). No community models.
  - Space rule proven: index and query MUST use the same model; mixed
    setups silently degrade ranking (no error).
