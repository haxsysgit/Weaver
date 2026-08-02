# Weaver x CrewAI: Patterns Worth Borrowing

> Status: research note, not an accepted plan. Written 2026-07-31 after
> reading the full current English CrewAI docs (docs.crewai.com, v1.15.x).
> Raw docs live in `/home/hax/crewai-docs` (454 pages downloaded as markdown).

## Bottom line

CrewAI is the wrong runtime for Weaver, but three of its design patterns are
worth copying into our plans. Weaver is one long-lived reader with a private
corpus, a custom tool loop, and human decision gates. CrewAI is a
multi-agent orchestration framework built for task-shaped runs (crews) inside
structured pipelines (flows). Switching would trade our tested provider
contract, receipts, and corpus boundary for framework opinions we would still
have to fight.

What we already verified in the docs:

- CrewAI is Python 3.10-3.13, `uv`, Pydantic, and the OpenAI SDK. Stack fit is
  real, unlike the OpenRouter TypeScript docs.
- DeepSeek works through CrewAI via LiteLLM or OpenRouter, and better:
  `custom_openai=True` with `base_url` against DeepSeek's OpenAI-compatible
  endpoint. CrewAI's own docs warn that `litellm` was quarantined on PyPI, so
  the custom OpenAI path is the one that matters.
- Memory and knowledge exist and are serious (LanceDB memory, ChromaDB/Qdrant
  knowledge, local embedders), but their defaults send content through LLM
  analysis and OpenAI embeddings. Our private chapter text would need explicit
  local configuration and auditing.
- The changelog shows breaking changes across 1.14-1.15 (type-safe output,
  memory-less agents by default, removed tools). Fast-moving framework, pin
  versions if we ever touch it.

## Pattern 1: Human feedback as a routed loop

CrewAI's `@human_feedback` decorator pauses a flow, shows output, collects
feedback, and collapses it into an outcome (`approved`, `rejected`,
`needs_revision`). Listeners then route on that outcome, and the review method
can listen to its own revision outcome to form a loop.

Why it maps to Weaver: our decision gates are currently pause-and-answer.
CrewAI's shape is pause, classify, route, loop, and record. It also keeps
`human_feedback_history` for audit trails, which is our "record the decision"
rule with receipts built in.

The `learn=True` option distills lessons from human corrections into memory
(`source="hitl"`) and pre-applies them before the next review. That is
literally "you should not have to correct the same thing twice". We should
steal the concept, not the decorator.

## Pattern 2: Checkpoint semantics: resume and fork

CrewAI checkpoints save full run state (config, task progress, intermediate
outputs, memory, inputs, event history) after selected events. Restoring
skips completed tasks and continues against the saved outputs. Forking
restores the same state under a new lineage so the original run and the
experiment branch write side by side.

Why it maps to Weaver: our experiment workflow is full of "what if" branches
(different prompt, different packet, different reviewer). Resume for the same
run, fork for the experiment. The CLI checkpoint tree even shows branches
nesting under their parent, which is a nicer version of what our run history
screen does.

Storage note: JSON files per checkpoint or SQLite with WAL. Default trigger is
`task_completed`; high-frequency events like `llm_call_completed` exist but
write too much.

## Pattern 3: Memory design vocabulary

CrewAI's unified memory is worth reading before Plan 004, not because we
should use it, but because its vocabulary is good:

- Scopes: hierarchical paths (`/project/alpha/decisions`) that restrict what
  a recall sees. Context-dependent memory.
- Composite scoring: blend semantic similarity, recency decay, and importance
  with configurable weights.
- Source and private flags: provenance on every record, private memories only
  visible when the source matches.
- Consolidation: on save, if similarity passes a threshold, the LLM decides
  keep, update, delete, or insert. Stops duplicate accumulation.
- Graceful failure: LLM analysis failing logs a warning and stores with safe
  defaults instead of crashing. This matches our "record failures as
  evidence" rule.

Weaver-specific caveat: CrewAI memory is generic. Our compiled memory must be
story-shaped (who did what, when they changed, why it mattered), so we copy
the plumbing, not the content model.

## Things we are not taking

- Crews and multi-agent collaboration. Weaver is one reader plus reviewers.
  Two pro reviewers can be a flow or a queue, not a crew.
- JSONC/YAML project shape. Our Python plans and typed tools are already the
  source of truth.
- The framework dependency stack. ChromaDB, LanceDB, LiteLLM history, and
  telemetry (disable-able, but another audit surface) are not worth the
  install for the three patterns above.
- `crewai test`. It is CLI scoring with OpenAI-only model support. Our
  deterministic pytest floor stays.

## Reference

- Source docs: `/home/hax/crewai-docs/pages/edge__en__learn__human-feedback-in-flows.md.md`
- Source docs: `/home/hax/crewai-docs/pages/edge__en__concepts__checkpointing.md.md`
- Source docs: `/home/hax/crewai-docs/pages/edge__en__concepts__memory.md.md`
- Source docs: `/home/hax/crewai-docs/pages/edge__en__learn__litellm-removal-guide.md.md`

## Open decision

Whether to fold any of these patterns into Plans 004, 006, or 011. Not
decided yet. The owner gates it.
