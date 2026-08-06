# Plan 014 results

## Slice 1: private tool material never reaches the DB

- `DURABLE_EVIDENCE_KEY = "durable_evidence"` reserved key in a tool result
  dict (src/weaver/conversation/items.py): when present, only the evidence
  record (source_kind, chapter, line_start, line_end, source_hash,
  passage_handle) is persisted; the prose stays in-memory for the current
  turn only. Backward compatible: results without the marker persist
  verbatim, non-dict evidence raises ValueError.
- Committed as 6db3462 (full suite 292 green).

## Slice 2: the 1-1000 retrieval experiment (v2, 35 questions)

Private run material (question set, full reports, Qdrant stores) lives
under `.weaver/research/retrieval-experiment/` and is never committed.
Only the numbers are public.

Setup (v2, after the chunking bug fix):
- 35 questions, 21 paraphrased, anchored to verified notebook statements.
  15 questions (q21-q35) were harvested from r/ShadowSlave threads and
  grounded in notebook evidence; the harvest caught two real notebook
  evidence errors (flaw reveal ch16->ch17, Caster's clan ch21->ch148),
  both fixed in the private notebook.
- 7316 novel chunks (story-aware chunker: paragraph-safe, dialogue-sticky,
  bracket blocks whole, 12-line target with 5-line overlap).
- 2454 notebook statements. Ceiling 1000, payload-filter enforced.
- Dense: OpenAI text-embedding-3-large vs local bge-large (comparison
  still running on the 1-200 slice when this was written).
- Sparse: Qdrant BM42 (neural sparse, replaces the hand-rolled BM25).

OpenAI results (hit@5 / MRR):

| arm | hit@5 | MRR |
|---|---|---|
| 2-exact-notebook-bm25 | 0.86 | 0.62 |
| 5-notebook-connections | 0.74 | 0.59 |
| 4-hybrid-dbsf | 0.51 | 0.41 |
| 4-hybrid-rrf | 0.49 | 0.39 |
| 3-dense-novel | 0.49 | 0.35 |
| 1-exact-novel-bm25 | 0.34 | 0.25 |

Unbiased review (5 fresh-context reviewer subagents, 35 questions, each
judging whether the retrieved passage actually answers the question by
reading the novel text):
- 23/35 (66%) answered by at least one novel arm's top-2.
- Systematic failures: answer lands just below the chunk cutoff
  (q01, q02, q04); dialogue-payoff questions where the answer is a name
  or event in a short quote line (q03, q04, q07); paraphrase questions
  drag all arms to popular-mention chapters.
- BM25 alone never answers paraphrase questions; dense and hybrids win
  when the question names a distinctive scene.

Findings:
- The notebook wins because summaries are written in question-shaped
  prose; the novel shows events without naming them.
- 12-line chunks fit bge-large's 512-token window; the earlier 60-line
  chunks silently truncated dense evidence (all-MiniLM's 256-token
  window made it worse).
- SPLADE measured at ~0.4s/text (too slow to index the novel); BM42 is
  the chosen sparse encoder.
- bge-large on this CPU (900MHz powersave governor under load) takes
  hours to index; the comparison runs on a 1-200 slice.

## Slice 3: machinery + the two reading tools

- src/weaver/retrieval/library.py: deterministic machinery (chapter
  index with source hashes, passage handles, alias/canonical entity map,
  depth-capped connection traversal, notebook reader, persistent index
  build).
- src/weaver/retrieval/tools.py: the two thin tools, search_library and
  open_chapters. READ-only. Ceiling is conversation state threaded to
  the tool context, never a model argument; the model can only narrow
  it, never widen it (owner-endorsed Codex correction).
- open_chapters emits the durable_evidence marker: the passage text is
  temporary model material, only the evidence record persists (Slice 1
  split proven end-to-end in test_retrieval_proof.py).
- Web profile now carries the two reading tools with a truth-first
  system prompt ("the novel is the source of truth; the notebook is a
  summary map that can be wrong").
- scripts/build_library_index.py builds the persistent Qdrant index.

Verification: full suite 332 green (was 305), ruff clean, both commits
pushed (0e1bd5e, 2effb6e).

Deferred:
- Weighted RRF (20 questions too small for a train/val split; the 35-set
  from r/ShadowSlave makes a future split plausible).
- bge-large full-corpus comparison (slice runs on the 1-200 set).
- Dense search in the web tools (embedder not wired; sparse-only).
