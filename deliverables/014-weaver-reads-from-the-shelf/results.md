# Plan 014 results

## Slice 1: private tool material never reaches the DB

- `DURABLE_EVIDENCE_KEY = "durable_evidence"` reserved key in a tool result
  dict (src/weaver/conversation/items.py): when present, only the evidence
  record (source_kind, chapter, line_start, line_end, source_hash,
  passage_handle) is persisted; the prose stays in-memory for the current
  turn only. Backward compatible: results without the marker persist
  verbatim, non-dict evidence raises ValueError.
- Committed as 6db3462 (full suite 292 green).

## Slice 2: the retrieval experiments

> Correction (2026-08-09): the first v2 run below used a 35-question set
> derived from notebook statements, which the owner called out as a fatal
> flaw (the notebook is not the canon, the novel is). The 40-question
> whole-novel set (questions-v2.json: 20 grounded in chapters 1-1000, 20
> in 1001-3127, every statement_id null so the notebook gets no edge,
> 30 paraphrased, phrased as a reader asks) is the canon test data. The
> honest numbers, whole novel at ceiling 3127 (v2-3127 report):

| arm | hit@1 | hit@5 | hit@10 | MRR |
|---|---|---|---|---|
| 2-exact-notebook-sparse | 0.07 | 0.35 | 0.38 | 0.16 |
| 3-dense-novel (bge-large) | 0.15 | 0.23 | 0.40 | 0.13 |
| 5-notebook-connections | 0.10 | 0.23 | 0.28 | 0.13 |
| 4-hybrid-rrf | 0.13 | 0.20 | 0.33 | 0.12 |
| 4-hybrid-dbsf | 0.08 | 0.17 | 0.33 | 0.15 |
| 1-exact-novel-sparse | 0.07 | 0.12 | 0.15 | 0.09 |

> Verdict on the honest set: no single arm is a reliable answer machine.
> The notebook arm is structurally capped (zero statements beyond
> ch1000) and still leads, dense meaning search gives leads not answers
> (the ch2976 Vile Thieving Bird battle ranked the ch81 spawn-kill first).
> This is why the product pivoted to finder-based retrieval (find_text,
> browse, read) inside the two-phase loop instead of trusting any one
> arm. The 35-question numbers below are kept only as a historical
> record of the circular set and must never be quoted as evidence.

## Slice 2 appendix: the superseded 35-question run (circular test data)

Private run material (question set, full reports, Qdrant stores) lives
under `.weaver/research/retrieval-experiment/` and is never committed.
Only the numbers are public.

Private run material (question set, full reports, Qdrant stores) lives
under `.weaver/research/retrieval-experiment/` and is never committed.
Only the numbers are public.

Setup (35-question set, after the chunking bug fix):
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

## The embedding-model comparison: bge-large vs OpenAI

Same 16 questions (chapters 1-200 slice), same chunks, same ceiling, same
BM42 sparse. bge-large wins every arm (hit@5):

| arm | OpenAI h5 | OpenAI MRR | bge h5 | bge MRR |
|---|---|---|---|---|
| 1-exact-novel-bm25 | 0.38 | 0.25 | 0.56 | 0.38 |
| 2-exact-notebook-bm25 | 0.75 | 0.53 | 0.88 | 0.62 |
| 3-dense-novel | 0.44 | 0.27 | 0.56 | 0.38 |
| 4-hybrid-rrf | 0.44 | 0.31 | 0.75 | 0.49 |
| 4-hybrid-dbsf | 0.44 | 0.33 | 0.62 | 0.50 |
| 5-notebook-connections | 0.69 | 0.51 | 0.75 | 0.58 |

Takeaway: local bge-large (BAAI/bge-large-en-v1.5, 1024 dims, free, ~1.3GB)
outperforms the paid OpenAI text-embedding-3-large on this novel-retrieval
task. The owner's instinct to test both was right; the numbers pick bge.
Cost note: bge is slow on this CPU (hours for the full corpus at 900MHz
powersave), which is a one-time index cost, not a per-query one.

## Slice 4: proof and the live trial

Deterministic proof written and passing (test_retrieval_proof.py): scripted
fake-model turn runs search_library -> open_chapters -> cited answer; no
novel prose in the durable store; ceiling blocks the model from widening.

Live trial ran 2026-08-07 against real `weaver web` (live deepseek-v4-flash,
real bge-large index at `.weaver/retrieval/index`). One turn, one question
("Who killed the leader of the hunting party in the dark city?"):
- 8 SSE tool events streamed (search_library/open_chapters, start/done ok
  x2 each) followed by 231 deltas and one completed event.
- The answer was grounded and canon-correct: Sunny killed the party leader
  with a thrown kunai, cited chapters 99 and 101, after opening both.
- Durable store check: the 4 tool_result rows for that turn contain zero
  novel prose. search_library rows keep hit metadata + passage handles;
  open_chapters rows persist only the `durable_evidence` record
  (source_kind/chapter/line range/source_hash/passage_handle).
- Honest note: the dense arm ranked chapter 313 top for that query (the
  Dark City arc spans ~90-350); the model still reached the right chapters
  via the notebook hits and its second search. Ranking quality stays a
  known weak spot, not a blocker for the seam.

Seam shipped with the trial: `on_tool_event` (name/status/detail) threads
from tools dispatch through run_turn/SessionWeave.send to the web SSE layer
as `tool` events, and the React frontend renders them as dim activity lines
("search_library ok") instead of the model narrating its steps. The web
system prompt was tightened: never narrate steps, search at most twice,
open 1-2 hits, answer in the same message.

Deferred:
- Weighted RRF (20 questions too small for a train/val split; the 35-set
  from r/ShadowSlave makes a future split plausible).
- bge-large full-corpus comparison (slice runs on the 1-200 set; the
  per-arm gap is consistent enough to trust the slice).
- Search ranking quality (dense ranked ch313 top for the trial question).
