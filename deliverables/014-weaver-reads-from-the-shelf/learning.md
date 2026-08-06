# Learning Note: Reading tools and the 1-1000 retrieval experiment

## Gate status

**Confirmed by owner 2026-08-05. Admitted for implementation.**

Plan 013 was accepted and closed on 2026-08-05, its dependency is
satisfied. The owner reviewed the tool, canon, privacy, and retrieval
decisions in the plan conversation on 2026-08-04 and directed drawing
up plans 014-016 after the external agent's review. On 2026-08-04 the
owner further directed studying agentic tool design online before
choosing tools, and locked the tools-versus-machinery split below.
On 2026-08-05 the owner directed testing qdrant-client and fastembed
in a throwaway venv, finished Codex's interrupted web-proof work, and
then closed Plan 013 and admitted this plan's learning gate.

## What this plan is

Give the web Weaver its first real reading tools: one search entry point
that reaches the canonical novel and the private notebook, and a bounded
chapter opener. Before building the tools, run a retrieval experiment
inside chapters 1-1000 comparing exact search, notebook search, vector
search, hybrid, and connection-guided reading on the same questions.
Split tool results into temporary model material and durable evidence
records so novel prose never persists.

## Tools versus machinery (owner directive, grounded in the 2026-08-04 research)

The LLM is only needed to reason and find answers. It does not manage
chapters, story state, the library, or connections. Tools simply enable
searching, reading, reasoning, and answering. Everything mechanical is
deterministic machinery with tests.

Sources consulted 2026-08-04:

- Anthropic, Building effective agents: use deterministic workflows by
  default; add an agent only where judgment or path selection is
  genuinely variable. Decision test: can you draw the full decision tree?
  Then it is a workflow, not an agent task.
- Anthropic, Writing effective tools for agents: design for agents, not
  API parity; prefer composite tools that return task-relevant context
  over forcing the model to assemble raw records across many calls;
  context-efficient outputs; descriptions as prompts; evaluate
  iteratively.
- OpenAI, A practical guide to building agents: separate data tools from
  action tools; small, non-overlapping tool surfaces; start with one
  agent and a small toolset; add tools only when evaluations show a
  clear need.

Consequences for this plan:

- Model-facing tools are exactly two: `search_library` (one search job,
  grouped canonical/notebook hits, passage handles, ceiling enforced by
  the backend) and `open_chapters` (bounded canonical context behind a
  handle).
- Connection following is a deterministic graph walk with a depth cap,
  internal to search, never a model tool.
- Story state as-of chapter N is a structured query the search tool can
  apply on request, never a model-orchestrated hop.
- Library refresh (Plan 016) is automation with preview and explicit
  owner confirmation, not a model tool.
- If trials prove a capability is missing, the fix is a refinement to
  the two tools or a deterministic pre-assembly step, never a new
  mechanical tool.

## Locked decisions (from the 2026-08-04 planning discussion)

1. **The novel is canon, always.** The notebook is interpretation and
   data about the novel, never a substitute. Consult the novel for
   accurate text, interpret with the notebook.
2. **Retrieval is tested inside chapters 1-1000, now.** Paraphrasing
   exists inside 1-1000, so embeddings join the experiment now, not when
   the reading passes chapter 1000. The owner corrected the earlier draft
   that deferred this.
3. **Reader position is conversation state, not a model argument.** The
   backend applies it to every search. The model cannot override or
   invent a ceiling. (Owner correction of the draft's `ceiling=None`
   kwarg.)
4. **No bash in public Weaver.** The developer profile keeps its tools.
5. **Privacy split is a prerequisite.** Tool results today are persisted
   verbatim into the conversation DB (verified: `turn.py:426`,
   `coordinator.py:184-228`, `items.py:157-166`). Durable records keep
   chapter refs, hashes, counts, outcomes, and passage handles, never
   prose. The split lands before any live retrieval tool.
6. **Trial reference evidence is re-verified in an admitted bounded
   reading before wording locks.** Another agent's story claims stay
   untrusted until checked.
7. **The founding Reader Trials in AGENTS.md are the finished bar.** The
   Plan 015 conversations are capability probes, not trial passes.
8. **Qdrant is the vector engine (owner decision, 2026-08-04).** The
   owner uses Qdrant and directed researching it. `qdrant-client` in
   embedded local mode (`QdrantClient(path=...)`) needs no server, has
   the same API as server mode, and is the engine for both the
   experiment and the local product. The experiment measures the real
   engine: cosine similarity, payload filtering, and native hybrid
   dense + sparse (BM25) search fused with Reciprocal Rank Fusion are
   Qdrant features exercised directly. Novel chunks and notebook
   statements are points with payload metadata; the reader-position
   ceiling and chapter/kind filters are payload filters applied by
   machinery, never model arguments. The connection graph stays in the
   notebook JSONL and is walked by deterministic machinery; Qdrant
   indexes, it does not replace the graph.

   Qdrant facts verified 2026-08-04 against the official docs and a
 

Embedding source decision (2026-08-05, from Slice 2 data): local
fastembed all-MiniLM-L6-v2 wins over an API embedder. No embedding API
is configured in the repo (the DeepSeek key is chat-only), local is
zero cost and works offline after the model cache, and the model's
256-token window just fixes the chunk size (15 lines, measured).  throwaway venv (Python 3.11.13, `qdrant-client` 1.19.0, fastembed
   0.8.0; venv deleted after the test):

   - Points live in named collections with id, vector, and payload
     metadata; HNSW index; cosine distance. `QdrantClient(":memory:")`
     is ephemeral and `path=` is persistent local mode, same API as
     server mode. (qdrant.tech/documentation/quickstart)
   - The in-process story now has two flavors. `QdrantClient(path=...)`
     is the classic embedded client. Qdrant Edge
     (`qdrant-edge-py`, qdrant.tech/documentation/edge/edge-quickstart)
     is a separate lightweight engine with its own `EdgeShard` API, a
     write-ahead log, no background optimizer (you call
     `edge_shard.optimize()` yourself), and quantization options. The
     old embedded-mode doc page 404s. We start on `path=` mode; Edge is
     a documented upgrade path, not the same API.
   - Hybrid search is native: one point carries a dense vector and a
     sparse vector under different names; `prefetch` runs both queries;
     `models.RrfQuery(rrf=models.Rrf())` fuses them. The docs' python
     pattern (hybrid-queries page) is `prefetch=[Prefetch(query=SparseVector(...),
     using="bm25"), Prefetch(query=[...], using="dense")],
     query=RrfQuery(rrf=Rrf())`.
   - Fusion choice is an evaluated decision, not a default: with an
     eval set (queries with known-relevant answers) use weighted RRF
     tuned on a train/val split; without an eval set, DBSF if you trust
     the retrievers' raw scores, plain RRF as the safe default. The
     docs explicitly say hand-tuned weights without measurement are
     unlikely to beat the default. Our experiment is the eval set, so
     it can pick the fusion method with data.
   - Sparse BM25 vectors need `modifier=IDF` at collection creation
     (`models.SparseVectorParams(modifier=models.Modifier.IDF)`).
   - The reader-position ceiling is a payload filter:
     `FieldCondition(key="chapter", range=Range(lte=N))` inside
     `must`, with `MatchAny` for multi-value fields and dot-notation
     nested keys. The collections page recommends one collection with
     payload-based partitioning (multitenancy), which is our shape.
   - `qdrant-client[fastembed]` embeds locally with ONNX models (first
     run downloads the model, then offline). FastEmbed also offers
     sparse neural encoders (SPLADE, miniCOIL) and rerankers, so even
     the sparse arm is an experiment variable, not a fixed BM25.
   - Throwaway-venv test results: install clean, cosine search scored
     correctly, ceiling filter returned exactly the in-range points,
     hybrid RRF fused dense + sparse. Two API friction points: the
     `Document(text=..., model=...)` sugar fails on named vectors in
     local mode (embed with fastembed explicitly, then upsert
     `PointStruct(vector={"dense": ..., "bm25": ...})`), and the
     query entry point is `query_points`, not the older `query`/
     `search` names.

   Earlier draft's "no vector database dependency" stance is
   retracted: the owner's point that the experiment should test the
   real engine is correct, and embedded mode removes the
   infrastructure objection entirely.

## Open questions for the owner

- Embedding source for the experiment: local fastembed ONNX models vs
  an API embedder (decided in Slice 2 on cost, quality on the question
  set, and offline behavior). The doc-cited fastembed family also
  offers sparse neural encoders (SPLADE, miniCOIL) and rerankers; the
  experiment should decide whether the sparse arm is hand-rolled BM25
  or a fastembed sparse model, on the same question set.
- Exact wording of the three Plan 015 capability questions.
- Whether the live trial after the proof runs in the web chat UI.

## Confirmation record

- Owner choice: learning gate confirmed and plan admitted (2026-08-05)
- Date: 2026-08-05
- Corrections or added constraints: owner directed testing qdrant-client
  plus fastembed in a throwaway venv before committing the dependency
  (done 2026-08-05, venv deleted), finishing Codex's interrupted
  web_live_proof.py worker-upgrade work (done, proof passes), and
  removing unneeded scripts. The plan doc and learning note now cite
  the official Qdrant docs (quickstart, edge-quickstart, hybrid-queries,
  filtering, collections, fastembed) for the engine facts.

## Locked decision (2026-08-06, owner directive)

- **Never answer from pure knowledge.** The model must never answer any user
  prompt from its trained knowledge alone. Trained knowledge is only a
  hypothesis generator ("I think there is a bird battle around chapter 3000,
  let me find it"), never the answer source. Every factual claim must trace
  to the novel text (canon) or a notebook statement (the map, which points
  at novel locations). Root cause: trained knowledge is where fan
  misinformation lives (the "Ariel one-shotted the Unholy Titan" claim, the
  "seven gods" belief — canon says six, ch372).
- **The novel is canon, always.** The Vile Thieving Bird vs Sunny battle is
  chapter 2976 "Confluence of Fates" (Sunny kills it in Onyx Serpent form in
  the Great River); the notebook (chapters 1-1000) has no record of it. The
  ch80-81 spawn and stolen-eye lore is origin, not the battle. When the
  notebook and the novel disagree or the notebook is silent, the novel wins
  and the notebook gets patched.
- **Other ways to find answers, not just meaning-search.** Retrieval is not
  the only finder: exact phrase search, chapter-range browsing, entity
  lookup, connection traversal, and direct chapter opens (open_chapters by
  handle) are all legitimate machinery paths. The tools expose them; the
  model never fabricates a citation.

## Locked decision (2026-08-06, owner correction: spoiler semantics)

- **Weaver knows the whole novel; answers are calibrated to the reader.**
  The reader-position ceiling is NOT a retrieval limit. Weaver's index and
  knowledge span the full novel; a question like "who is the Vile Thieving
  Bird and how strong must Sunny be to beat it" (reader at ch1000, answer
  at ch2976) gets answered using full-novel knowledge, framed so the
  surprise survives: "a Supreme cannot beat a Cursed being alone, the gap
  is too much, he'd need help from other Supremes... don't be too curious,
  keep reading."
- **Spoiler knob.** There is a spoiler/no-spoiler toggle (conversation
  state, user-controlled, and the user can explicitly say "disregard
  spoilers"). Default: spoilers respected. Knob off: full answers.
- **Machinery change implied:** search_library's ceiling becomes an
  answer-framing input, not a hard retrieval filter; explicit as-of-N
  narrowing stays available for questions that genuinely ask "as of
  chapter N". Retrieval defaults to the full index. The knob and framing
  rules land with the full-novel index work.
