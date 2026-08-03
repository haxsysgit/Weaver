# Research Gate: Fictional understanding for agents

## Status

Complete 2026-08-03. Owner gate confirmed; findings verified against primary
sources (checked 2026-08-03). No private story knowledge belongs in this
file.

## Summary for Plan 012

Three verified sources directly shape the notebook design: the Narrative
World Model (typed temporal-state graph that answers who-knows-what-when,
setup/payoff, and relationship-shift questions), ReadAgent (hierarchical
gist memory with lookups back into the source text), and Shadow-Loom
(versioned graphical world model with causal and narrative physics where the
LLM is only the extractor and auditor, never the storage). They agree on the
core method: keep a typed, versioned, structured record of the story and let
the model read and reconcile against it, instead of expecting the model's
weights to be the story memory. Plan 012 applies that without RAG,
embeddings, or a vector database.

## Evidence contract

- Primary papers and official project pages, checked 2026-08-03.
- Each finding records the source, the observation, the Plan 012
  implication, and an adopt/defer/reject decision.
- Hypotheses are separated from demonstrated results.
- No novel prose, character names, plot facts, private paths, raw
  reasoning, or private knowledge-base content.

## Findings

### 1. Narrative World Model (NWM)

- Source: Saifullah et al., "Narrative World Model: Narratology-Grounded
  Writer Memory for Long-Form Fiction", arXiv:2607.05577 (2026-07-06),
  https://arxiv.org/abs/2607.05577
- Checked: 2026-08-03
- Observation: NWM pairs a narratology-grounded typed temporal-state graph
  with query-conditioned retrieval. It answers multi-hop questions the
  notebook must answer later: who knows a secret and when they learned it,
  whether an event preceded the narration that revealed it, whether a setup
  paid off, and how a relationship shifted. It substantially outperforms
  Graphiti/Zep, GraphRAG, and flat retrieval on narratological QA. The
  advantage is representational, not extractor quality: it survives
  rebuilding the baseline with NWM's own extractor.
- Plan 012 implication: the notebook needs typed records (entity, relation,
  event, mystery, interpretation), temporal state (when knowledge became
  known), and explicit setup/payoff tracking. This validates the plan's
  per-entry fields: first-known chapter, later corrections, and the
  mystery ledger.
- Decision: adopt (structure), defer (the retrieval half belongs to later
  plans that add search).

### 2. ReadAgent: gist memory for long contexts

- Source: Lee et al., "A Human-Inspired Reading Agent with Gist Memory of
  Very Long Contexts", arXiv:2402.09727 (2024-02-15),
  https://arxiv.org/abs/2402.09727
- Checked: 2026-08-03
- Observation: ReadAgent increases effective context length 3.5-20x by
  chunking a long document into memory episodes, compressing each into a
  short gist memory, and looking up the original passage only when a task
  needs the detail. It beats retrieval baselines and raw long-context
  baselines on QuALITY, NarrativeQA, and QMSum.
- Plan 012 implication: the chapter JSON files are the gist records and the
  novel chapters are the original text. Later Weaver should retrieve from
  the notebook records and look back into the novel only for the passage
  behind a claim. This validates keeping the novel as the source of truth
  and the notebook as the index.
- Decision: adopt (the look-up-back-to-source pattern), defer (gist
  compression is a later-plan method; Plan 012 reads chapters directly).

### 3. Shadow-Loom: causal and narrative physics over a world model

- Source: Wilmot, "Shadow-Loom: Causal Reasoning over Graphical World Model
  of Narratives", arXiv:2605.02475 (2026),
  https://arxiv.org/html/2605.02475v1
- Checked: 2026-08-03
- Observation: Shadow-Loom turns a narrative into a versioned graphical
  world model and scores it against structural reader states: mystery,
  dramatic irony, suspense, and surprise. The LLM is used only at the
  boundary (extraction, rendering, audit); identification, intervention,
  and counterfactual reasoning run as typed code over the graph, the way a
  compiler and test suite reject bad code. Its stated reason: LLMs are
  weak at story-internal counterfactual consistency and multi-hop
  belief-conditioned action prediction.
- Plan 012 implication: the notebook checker plays the compiler-and-tests
  role: typed records, deterministic validation, rejection before
  acceptance. The reader-positioned knowledge decision (talk according to
  where the reader is) is exactly the dramatic-irony/mystery state
  Shadow-Loom formalizes.
- Decision: adopt (typed records + deterministic checker), defer (causal
  physics, counterfactual calculus, and the reader-state scoring are later
  plans; Plan 012 only records the knowledge they would reason over).

### 4. Believability and contradiction research (context)

- Source: Gu et al., 2026; Kim et al., 2023; Cross et al., 2024, as
  surveyed in Shadow-Loom (arXiv:2605.02475). Demonstrated result: LLMs
  read causal relations from text competently but degrade sharply on
  multi-hop belief-conditioned prediction and story-internal
  counterfactual consistency.
- Checked: 2026-08-03
- Plan 012 implication: do not expect any single model to hold the story
  straight across 100 chapters. The notebook's epistemic labels
  (confirmed_fact, character_belief, interpretation, theory, conflict) and
  per-entry evidence locations are the correction mechanism, and the
  checker is what keeps unsupported claims out.
- Decision: adopt (epistemic labels and evidence refs stay mandatory).

## Hypotheses vs demonstrated results

- Demonstrated: typed temporal-state graphs outperform flat retrieval and
  generic agent memory on multi-hop story QA (NWM); gist-plus-lookup
  reading beats long-context reading on long-document QA (ReadAgent);
  LLMs are unreliable at story-internal counterfactual consistency
  (surveyed).
- Hypothesis, not yet demonstrated for this notebook: that three
  independent reads reconciled by a lead reduce contradiction more than
  one read does. This is the experiment Plan 012 runs, and the reviewer
  checks the outcome. The plan does not claim it as proven.

## Decisions for Plan 012

- Adopt: typed per-chapter JSON records with stable IDs, epistemic labels,
  evidence locations, first-known chapter, later corrections.
- Adopt: mystery ledger (open questions, clues, answers, and where they
  changed) as the setup/payoff tracker.
- Adopt: deterministic notebook checker that rejects unsupported claims
  before they enter the notebook.
- Adopt: novel chapters remain the source of truth; the notebook points
  back to them instead of copying them (ReadAgent pattern).
- Defer: retrieval, embeddings, vector database, gist compression, causal
  physics, counterfactual reasoning, and reader-state scoring to later
  plans that build on the notebook.
