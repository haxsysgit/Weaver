# Learning Note: Lore graph build (Shadow Slave 1-100)

## Gate status

**Confirmed by owner 2026-08-03** — direction and pilot accepted.

The owner re-scoped this plan on 2026-08-03: it is an agent-executed
reading build, not a Weaver codebase experiment. The chapter-1 pilot was
executed early (before the gate record was formalized), verified against
the source, and accepted by the owner with two binding rules. The final
owner decision still follows the full run and independent review.

The superseded 2026-07-30 draft (a Weaver experiment comparing
`deepseek-v4-flash` vs `deepseek-v4-pro` on a single novel packet, with
packets, receipts, and `run_direct_reading`) is history; git preserves it.
Every current record describes the lore-graph build.

## Owner direction (2026-08-03, corrected)

1. **Agent-executed lore-graph build.** The coordinator (pi or Codex — the
   plan is harness-agnostic, see `docs/process/subagent-fleet.md`) reads
   the novel directly and builds an interconnected knowledge base (lore
   graph) the best way it can. Weaver is NOT the reader and is not touched:
   it lacks subagents, multi-agent orchestration, and read/bash tooling and
   is a later milestone.
2. **Multi-eye reading.** The coordinator dispatches two fresh-context
   reader subagents per chapter so every chapter gets three pairs of eyes.
   The analyses build on each other through the accumulated knowledge base.
   Readers run with clean context, open only their assigned chapter file,
   and return analysis text only; the coordinator is the sole writer.
3. **The flash/Terra arms are not dead; they are the fleet.** The
   coordinator runs as deepseek-v4-flash; a GPT-5.6 Terra/Codex reader may
   join later. Context window claims (1M flash, 272K Terra) are
   owner-stated, unverified in committed evidence, and unnecessary for
   per-chapter reading; the plan does not rely on them.
4. **Chapters:** start from the beginning of the novel, chapters 1-100
   (verified: `novels/shadow-slave/0001-0100/`, 100 chapter files).
5. **Pure reading knowledge base.** No vector database (Qdrant), RAG, or
   other retrieval machinery in this plan. The accumulated reading output
   IS the knowledge base; later plans build retrieval on top of it.
6. **Research component.** The plan researches how to enable/implement
   fictional understanding for agents (lore graphs, narrative
   comprehension) and feeds the method.
7. **Deliverable home:** `.weaver/knowledge/shadow-slave/` — private,
   owner-only, never committed. Committed deliverables contain no novel
   prose or story-derived knowledge.

## Binding rules (owner-approved 2026-08-03)

1. **Fresh-context readers** — every reader subagent starts with a clean
   context containing only its task prompt, the accepted-knowledge digest,
   and the exact chapter file path. No session inheritance, no repo
   browsing, no KB access.
2. **Read exactly the assigned chapter(s)** — the only file a reader may
   open is its assigned novel chapter file. Nothing else.

## Roles (harness-agnostic)

| Role | Contract |
| --- | --- |
| Coordinator and graph writer | reads every chapter; curates the accepted-knowledge digest; dispatches the two readers; reconciles; sole writer of the KB |
| Plot and causality reader | fresh-context subagent; assigned chapter only; analysis text only |
| Character and world-state reader | fresh-context subagent; assigned chapter only; analysis text only |
| Independent reviewer | fresh-context, post-run; consistency checks; never edits |

## Graph contract (summary)

The full write contract is in `plans/012-direct-reading-baseline.md`.
Essentials: append-only JSONL records (entity/edge/thread/checkpoint);
atomic per-chapter batches; stable ids with aliases; confidence and
verification marking per record; per-chapter checkpoints with source sha256;
duplicate and dangling-edge detection; restart from the last checkpoint.

## Confirmation record

- Owner choice: direction confirmed and chapter-1 pilot accepted with the
  binding rules above
- Date: 2026-08-03
- Corrections or added constraints: pure reading only (no vector DB/RAG);
  chapters 1-100 from the start; harness-agnostic (no pi/fork-specific
  patterns); readers fresh-context and chapter-file-only; coordinator sole
  writer; git cannot restore novels (0 tracked files)
