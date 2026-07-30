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
| [007 - Restart-safe conversation proof](007-restart-safe-conversation-proof.md) | Unadmitted; learning cycle required | Plan 006 accepted | Prove exact fake conversation history survives a subprocess restart without replay or duplicates |
| 008 - Direct-reading baseline | Deferred | Plans 002-007 accepted | Blind Flash/Pro comparison over selected chapter packets |
| 009 - First compiled-memory experiment | Deferred | Plan 008 accepted | Compare bounded compiled Markdown memory with direct rereading |

## Execution order

Plans 003-006 are accepted. Plan 007 is unadmitted and requires a complete
learning cycle before its owner gate.

1. Confirm each plan's `learning.md`.
2. Implement, test, use, inspect, review, and decide Plan 003.
3. Repeat the full loop for Plans 004, 005, and 006, one at a time.
4. Before each final owner gate, deliver and inspect that plan's editable
   Draw.io architecture plus its rendered preview.
5. Plan 007 proves the durable ledger before relationship curation, context
   compaction, live chat, or literary memory.
6. Begin the direct-reading baseline only after the runtime sequence is
   accepted.

Only one numbered plan may be active in implementation or review at a time.
Plan 007 begins a fresh learning cycle only after Plan 006's final owner
decision.
