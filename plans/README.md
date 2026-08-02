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
| [010 - TUI entrypoint](010-tui-entrypoint.md) | Accepted and closed 2026-08-02 | Plan 009 accepted | Weaver's developer and debugging console; maintenance fixes only, no further product polish |
| [011 - Local browser chat entrypoint](011-web-chat-entrypoint.md) | Planned; appraisal learning gate required | Plan 010 closed; checkpoint 001-010 complete | Appraise current ChatGPT behaviour, then prove one private local browser conversation |
| [012 - Direct-reading baseline](012-direct-reading-baseline.md) | Planned; learning gate required | Plan 011 accepted | Compare Flash and Pro reading the same novel packet blind: the first time Weaver reads a novel |
| 013 - Responsive interface and installable PWA | Deferred | Plan 012 accepted | Build the polished responsive Weaver interface and test installability |
| 014+ - Compiled-memory experiments | Deferred | Plan 013 accepted | Compare bounded compiled memory with direct rereading |

## Execution order

Plans 001-010 are complete (007.5 applied). The checkpoint before Plan 011 is
recorded in `docs/process/checkpoint-001-010.md`. The next sequence is:

1. **011**: appraise chat behaviour, stop at the owner gate, then prove one
   local browser conversation.
2. **012**: run the direct-reading baseline.
3. **013**: turn the accepted proof into a polished responsive PWA.
4. **014+**: begin compiled-memory experiments.

Native Android and iOS remain deferred until Plan 013 proves a concrete PWA
limitation.

Only one numbered plan may be active in implementation or review at a time.
Plan 008's final owner decision is recorded as **Accepted** in
`deliverables/008-wire-conversation-loop/decision.md` (2026-07-31).
Plan 009 is **Accepted** (2026-07-31); its decision is recorded in
`deliverables/009-context-assembler/decision.md`.
Plan 010 is **Accepted and closed** (2026-08-02); its decision is recorded in
`deliverables/010-tui-entrypoint/decision.md`. It remains Weaver's developer
and debugging console. Maintenance bug fixes are allowed, but it receives no
further product polish and is no longer a product surface.

Plan 011 is admitted for implementation (Gate 1 appraisal accepted
2026-08-02; behaviour decisions in `deliverables/011-web-chat-entrypoint/decision.md`).
The shared runtime is extracted; the server and browser interface are in
implementation. Plan 012 remains gated behind Plan 011. Do not begin Plan 013
automatically.
