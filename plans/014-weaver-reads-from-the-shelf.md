# Plan 014: Reading tools and the 1-1000 retrieval experiment

> **Executor instructions:** This plan gives the web Weaver its first real
> reading tools. The novel is canon and is always the primary source. The
> notebook (`.weaver/knowledge/shadow-slave/`) is our interpretation and
> data about the novel, never a substitute for it. The retrieval
> experiment decides which search methods Weaver's tool uses. Weaver code
> changes; novel files and the private notebook never change.
>
> **Tools versus machinery:** the LLM only reasons, chooses tool calls,
> judges evidence, and answers. Everything mechanical is deterministic
> code with tests, no LLM inside it: chapter management, story state,
> connection traversal, alias maps, ceilings, library refresh, notebook
> maintenance. Tools are thin envelopes over machinery. Never expose a
> mechanical operation as a model tool.

## Status

- **Tooling:** repo commands via `uv` (pytest, ruff, pip check). New
  dependencies in this plan: `qdrant-client` (embedded local mode, no
  server) and the embedding source chosen in Slice 2 (fastembed local
  ONNX is the Qdrant-documented pairing with DeepSeek; an API embedder
  is the alternative). A vector database is **in scope by owner
  decision**: Qdrant.
- **State:** Completed and owner-accepted 2026-08-07
- **Depends on:** Plan 013 accepted and closed (the tools wire into the
  web profile, and the reader conversations run in the web chat).
- **Priority:** P1
- **Effort:** M
- **Risk:** Medium (privacy of private novel passages; persisted-schema
  change; tool surface the model can misuse)

## Owner direction (locked decisions)

1. **The novel is canon, always.** The notebook is our interpretation and
   data about the novel. For accurate text, consult the novel first, then
   interpret with the notebook. If they disagree, the novel wins.
2. **Retrieval is tested inside chapters 1-1000, now.** Paraphrasing
   exists inside 1-1000. The experiment compares exact novel search,
   exact notebook search, vector search, hybrid, and notebook-connection
   guided reading on the same questions and the same chapter ceiling.
3. **The reader position is conversation state, not a model argument.**
   The backend applies it to every search automatically. The model cannot
   override or invent a ceiling. The user changes position only through a
   controlled path.
4. **No bash in public Weaver.** Story discussion does not need shell.
   The developer profile keeps its existing tools.
5. **Privacy split is a prerequisite.** The model receives private
   passages as temporary model input. Durable records (tool events, run
   receipts, conversation items) keep only chapter references, hashes,
   counts, outcomes, and result IDs, never novel prose. Today's code
   persists full tool results into the conversation DB (verified:
   `turn.py:426`, `coordinator.py:184-228`, `items.py:157-166`), so this
   split must land before any live retrieval tool.
6. **`read`, `grep`, `glob` are baselines, not proof.** The founding
   Reader Trials in AGENTS.md are the finished-product bar. The 1-1000
   conversations in Plan 015 are capability probes, not trial passes.
7. **Trial reference evidence is re-verified in an admitted bounded
   reading before any trial wording locks.** Another agent's story claims
   stay untrusted until checked against the source.
8. **The LLM manages nothing mechanical.** (Owner directive, 2026-08-04.)
   The model reasons and answers; it does not manage chapters, story
   state, connections, or the library. Tools only enable searching,
   reading, reasoning, and answering. Everything else is deterministic
   machinery (see the model below, grounded in Anthropic's building
   effective agents / writing effective tools and OpenAI's practical
   guide to building agents).
9. **Qdrant is the vector engine.** (Owner decision, 2026-08-04.) The
   owner uses Qdrant; this plan uses `qdrant-client` in embedded local
   mode (`QdrantClient(path=...)`) for the experiment and the local
   product, with the same API as the server mode so migrating later
   means changing client initialization only. The experiment runs on
   the real engine, not a hand-rolled approximation: cosine similarity,
   metadata filtering, and hybrid dense-plus-sparse search are all
   exercised against Qdrant itself. Novel chunks and notebook statements
   are indexed as points with payload metadata; the reader-position
   ceiling, chapter ranges, source kinds, and statement kinds are
   payload filters applied by machinery, never model arguments.

## The tools-versus-machinery model

**Model-facing tools (exactly two, thin envelopes):**

1. **`search_library`** (one search job).
   - Returns grouped results: `canonical_hits` (chapter, lines, passage
     handle, score) and `notebook_hits` (statement id, kind, evidence
     locations, links, score).
   - Optional refinements: `surface` (novel or notebook only; default
     both with the hierarchy visible) and a chapter range, which is a
     narrowing within the backend-enforced ceiling and can never widen
     it.
   - Internally: alias resolution, exact and meaning-based search,
     connection-aware expansion, ceiling enforcement. Those are
     implementation pieces, not separate tools.
   - A structured "state as of chapter N" query (statements about an
     entity filtered by `first_known_chapter`, kind, ordered) is a
     filter this tool applies on request; the model never assembles it
     hop by hop.
2. **`open_chapters`** (opens the canonical novel context behind a
   passage handle: surrounding paragraphs, the full chapter, or
   neighbouring chapters within the reader's limit. Opens the novel only;
   a notebook record is inspected through its evidence or connection
   reference, keeping the canon/notes distinction sharp.

**Deterministic machinery (no LLM, all tested as plain code):**

- chapter index: locations, line counts, source hashes
- canonical entity and alias map
- connection traversal: a graph walk with a depth cap, used internally by
  search; never a model-orchestrated hop
- story-state assembly as-of chapter N: filtering records by
  `first_known_chapter`, kind, and entity
- reader position and ceiling enforcement
- notebook validation, entity-page rebuild, ledger regeneration (existing
  scripts)
- library refresh lives in Plan 016 and is automation with preview and
  explicit owner confirmation, not a model tool

**Never expose as a model tool:** following connections by hand,
inspecting story state, managing chapters, updating the library,
running validation. If the trials prove the model needs a capability the
tools cannot express, the fix is a refinement to one of the two tools or
a deterministic pre-assembly step, not a new tool.

## Slices

### Slice 1: temporary-versus-durable result split

Tool results today are persisted verbatim into the conversation database
and replayed to the model on later turns. Before any reading tool goes
live, every result needs two forms:

- **temporary model material:** the actual passage Weaver reads during
  that turn;
- **durable evidence record:** chapter, line range, source hash, source
  kind (novel or notebook), and a passage handle that can reopen the
  passage from the immutable novel.

The persisted `tool_result` item schema changes to carry the evidence
record, not the prose. Existing rows stay readable (backward-compatible
handling, same pattern as the checkpoint-audit `ok` fix). On restart,
Weaver reopens the passage by handle and confirms the hash.

This also transfers to HaxJobs: CVs and private documents are never
copied into every tool record.

### Slice 2: the 1-1000 retrieval experiment

A labeled question set inside chapters 1-1000, with known evidence
locations, tests five retrieval methods on the same questions and the
same reader-position ceiling. All five arms run against Qdrant embedded
local mode so the comparison measures the production engine:

1. exact novel search (sparse/lexical, BM25);
2. exact notebook search (sparse/lexical against statement payloads);
3. vector search (dense embeddings, cosine);
4. hybrid search (Qdrant native dense + sparse prefetch fused with
   Reciprocal Rank Fusion);
5. notebook connections followed by direct chapter reading (the
   traversal runs as machinery, exactly as it will inside the tool).

Fusion is an evaluated choice, not a default. The Qdrant docs say to
use weighted RRF when an eval set exists (ours does: the labeled
question set), DBSF when raw scores are trusted without an eval set,
and plain RRF otherwise. The experiment measures RRF and DBSF on the
same question set and picks with data (both tied at 0.35 hit@5 on 20
questions, so plain RRF stays the default). The sparse arm is also a
variable: hand-rolled BM25 (`modifier=IDF`) vs a fastembed sparse neural
encoder (SPLADE or miniCOIL), decided on the same question set. Measured
result: SPLADE costs ~0.4s per text on this CPU (a full 7579-chunk index
would take ~50 minutes), so BM25 is the chosen sparse arm; SPLADE stays
a documented alternative for smaller corpora.

The experiment reports which method finds the right evidence, and where
each method misses. Paraphrased questions that share no words with the
source are included on purpose. The owner sees the numbers before the
tool is built around the result.

Embedding source decided in this slice: local fastembed ONNX models
vs an API embedder, on cost, quality on the question set, and offline
behavior. Doc-verified facts this slice depends on: `QdrantClient(path=...)`
local mode (same API as server mode; Qdrant Edge is a separate package
and a later upgrade path, not this slice), `prefetch` + `RrfQuery` for
hybrid, `FieldCondition` payload filters for the ceiling, and explicit
fastembed embedding with named-vector `PointStruct` upserts (the
`Document` sugar fails on named vectors in local mode).

### Slice 3: machinery first, then the two tools

Build the deterministic engine before any model surface exists, and test
it without an LLM:

- chapter index and handle resolution;
- alias and canonical entity map;
- connection traversal with depth cap;
- story-state assembly query;
- Qdrant collections for novel chunks and notebook statements, points
  carrying payload metadata (chapter, lines, source hash, kind,
  `first_known_chapter`, entity ids);
- ceiling enforcement as a payload filter applied at query time;
- output limits and cancellation plumbing.

Only after the machinery has deterministic tests, add the two thin
tools (`search_library`, `open_chapters`) on top. The tools contain no
logic of their own beyond validation and formatting.

### Slice 4: deterministic proof and live permission

One scripted turn (fake model) proving: grouped tagged results; bounded
chapter opening; answers citing chapter locations; no novel prose or
private paths in receipts or durable tool events; ceiling enforced with
no model override path; output limits and cancellation mid-search. Only
after the proof passes do we ask the owner's permission for one live
trial.

## Backend boundary

- The Plan 011 HTTP and SSE contract stays unchanged. No new routes.
- The web profile's tool registry changes from empty to the two-tool
  reading set.
- The developer profile keeps its existing tools untouched.
- The `tool_result` item schema change is backward compatible.
- Reader position lives in conversation state (stored with the reader's
  preferences is a later feature).

## Out of scope (later plans)

- Refresh of the shelf (fetch/update/export): Plan 016.
- Reading continuation 1001-3200 into the notebook: later plan.
- The founding Reader Trials as the finished-product bar: AGENTS.md.
- Durable reader memory (opinions, favorites, theories): later plan.
- Chunking-pipeline tuning, reranking models, or retrieval
  infrastructure beyond what the 1-1000 experiment proves necessary
  (Qdrant server mode, scaling, multi-process access).

## Verification floor

```sh
uv run pytest -q
uv run ruff check src/weaver tests
uv pip check
```

plus the deterministic proof script, plus a staged-diff audit for
credentials, private story text, chats, and generated private state before
any commit.

## STOP conditions

- Tool results leak novel prose into durable records (the split fails).
- The reader-position ceiling can be overridden or invented by the model.
- The experiment compares methods with different chapter ceilings.
- The tools are built before the experiment results are recorded.
- A mechanical operation (connections, state, chapters, refresh) is
  exposed as a model tool.
- This plan claims the tools pass the founding Reader Trials.
- The private notebook is modified or committed.
