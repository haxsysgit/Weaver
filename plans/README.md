# Weaver Plans

This directory is the numbered index for admitted Weaver experiments. A plan
does not become accepted merely because its code exists. Its learning,
evidence, review, and human decision gates must also be complete.

| Plan | Status | Depends on | Scope |
| --- | --- | --- | --- |
| [001 - Experimental foundation](001-experimental-foundation.md) | Accepted 2026-07-29 | None | Safe repository boundary, thin DeepSeek client, private receipts, deterministic tests, synthetic live smoke |
| [002 - Trusted Shadow Slave library](002-trusted-shadow-slave-library.md) | Accepted 2026-07-30 | Plan 001 accepted | Maintain the private Shadow Slave library through deterministic agent tools without interpreting it |
| [003 - Weaver model layer and preserved tool protocol](003-preserve-tool-protocol.md) | Accepted 2026-07-30 | Plan 002 accepted | Add a provider-independent model layer, keep complete tool calls, and refuse inactive tools |
| [004 - Make cancellation and side effects explicit](004-cancellation-and-side-effects.md) | Accepted 2026-07-30 | Plan 003 accepted | Cancel running async tools cooperatively and block unapproved effect classes |
| [005 - Provider-neutral tool payload contract](005-provider-tool-contract.md) | Accepted 2026-07-30 | Plan 004 accepted | Prove the neutral two-request tool round trip through the real SDK path for Flash and Pro |
| [006 - Durable conversation architecture](006-durable-conversation-architecture.md) | Accepted | Plan 005 accepted | Record direct coordination, canonical conversation evidence, recovery, context, and optional adapters |
| [007 - Restart-safe conversation proof](007-restart-safe-conversation-proof.md) | Implemented; repair applied | Plan 006 accepted | Prove exact fake conversation history survives a subprocess restart without replay or duplicates |
| [007.5 - Audit repair](007.5-audit-repair.md) | Implemented | Plan 007 complete | Retry method, tool-call uniqueness constraint, single-tx start, dedup, repo tests, stale docs |
| [008 - Wire the conversation loop](008-wire-conversation-loop.md) | Accepted 2026-07-31 | Plan 007 accepted | Zip conversation/ and agent/ into one working conversation: SessionWeave.send() calls run_turn() |
| [009 - Context assembler](009-context-assembler.md) | Accepted 2026-07-31 | Plan 008 accepted | Give run_turn() a context window it can't exceed: token budget, truncation, pinned owner message |
| [010 - TUI entrypoint](010-tui-entrypoint.md) | Accepted; reopened for UI sharpening | Plan 009 accepted | Owner chat window: weaver chat opens Textual TUI with direct await session.send() |
| [011 - Direct-reading baseline](011-direct-reading-baseline.md) | Planned; learning gate required | Plan 010 accepted | Compare Flash and Pro reading the same novel packet blind: the first time Weaver reads a novel |
| [012 - Subagent fleet and TDD workflow](012-subagent-fleet-tdd.md) | Planned; learning gate required | Plans 001-010 accepted | Codify the subagent fleet, orchestration playbook, and red/green TDD loop; prove it with a pilot slice |
| 013 - Direct-reading baseline (original) | Deferred (renumbered from 008; historical) | Plans 002-011 accepted | Blind Flash/Pro comparison over selected chapter packets |
| 014 - First compiled-memory experiment (original) | Deferred (renumbered from 009; historical) | Plan 013 (original) accepted | Compare bounded compiled Markdown memory with direct rereading |

## Execution order

Plans 001-007 are complete (007.5 applied). Plans 008-011 are sequential
building blocks:

1. **008** — wire the loop. Without this, SessionWeave can't run a turn.
2. **009** — context assembler. Without this, long conversations exceed budgets.
3. **010** — TUI. Without this, the owner can't talk to Weaver.
4. **011** — direct-reading baseline. The first time Weaver reads a novel.

The rows marked (original) are the deferred literary experiments, renumbered
from the old plans 008/009; they wait until the conversation infrastructure
(008-011) is complete. The active 012 is the subagent fleet and TDD workflow
plan.

Only one numbered plan may be active in implementation or review at a time.
Plan 008's final owner decision is recorded as **Accepted** in
`deliverables/008-wire-conversation-loop/decision.md` (2026-07-31).
Plan 009 is **Accepted** (2026-07-31); its decision is recorded in
`deliverables/009-context-assembler/decision.md`.
Plan 010 is **Accepted** (2026-07-31) and **reopened by the owner for UI
sharpening** (2026-07-31); its decision is recorded in
`deliverables/010-tui-entrypoint/decision.md`. It shipped live-by-default
chat with `--fake` opt-in and startup config loading (`.env` +
`.weaver/config.toml`). New UI phases amend the plan with their own review
and owner gate. Plan 011 (direct-reading baseline) stays gated until the
owner finishes the UI work.
