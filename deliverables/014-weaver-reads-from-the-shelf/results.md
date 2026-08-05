# Plan 014 results

## Slice 1: private tool material never reaches the DB

- `DURABLE_EVIDENCE_KEY = "durable_evidence"` reserved key in a tool result
  dict (src/weaver/conversation/items.py): when present, only the evidence
  record (source_kind, chapter, line_start, line_end, source_hash,
  passage_handle) is persisted; the prose stays in-memory for the current
  turn only. Backward compatible: results without the marker persist
  verbatim, non-dict evidence raises ValueError.
- Committed as 6db3462 (full suite 292 green).

## Slice 2: the 1-1000 retrieval experiment

Private run material (question set, full report, Qdrant store) lives under
`.weaver/research/retrieval-experiment/` and is never committed. Only the
numbers are public.

Setup:
- 20 questions, 11 paraphrased, anchored to verified notebook statements
  with expected chapter and line ranges.
- 7579 novel chunks (15-line windows, line 1 excluded as the title heading).
- 2454 notebook statements.
- Ceiling 1000 (chapters 1-1000), enforced by machinery as a payload filter.
- Dense: all-MiniLM-L6-v2 local fastembed ONNX. Sparse: hand-rolled BM25,
  Snowball-stemmed, IDF modifier at query time.
- All arms on Qdrant embedded local mode.

Results (hit@5 / MRR):

| arm | hit@5 | MRR |
|---|---|---|
| 2-exact-notebook-bm25 | 0.60 | 0.37 |
| 5-notebook-connections | 0.40 | 0.30 |
| 4-hybrid-rrf | 0.35 | 0.21 |
| 4-hybrid-dbsf | 0.35 | 0.21 |
| 1-exact-novel-bm25 | 0.30 | 0.22 |
| 3-dense-novel | 0.25 | 0.17 |

Findings:
- The notebook (statements written in question-like prose) beats the novel
  text for finding the right chapter: the novel shows kills without saying
  the word (the ch98 kill scene describes the kunai striking from behind),
  and statement prose matches question wording much better than raw
  fiction.
- The two hybrid fusions tie on this question set (RRF and DBSF both 0.35
  hit@5); no fusion winner on 20 questions.
- Chunk size matters: 60-line chunks (~680 words) exceed all-MiniLM's
  256-token window, truncating evidence away. 15-line chunks fix it.
- SPLADE (prithivida/Splade_PP_en_v1) measured at ~0.4s per text on this
  CPU; a full 7579-chunk index would take ~50 minutes and was stopped at 15
  minutes still indexing. BM25 is the practical sparse arm.

Deferred:
- Weighted RRF (needs a train/val split; 20 questions is too small).
- SPLADE on a smaller corpus if a sparse-neural comparison is ever wanted.
- Dense model comparison (all-MiniLM vs longer-context models) if the
  questions shift toward longer passages.
