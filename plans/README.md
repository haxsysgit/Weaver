# Weaver Plans

This directory is the numbered index for admitted Weaver experiments. A plan
does not become accepted merely because its code exists. Its learning,
evidence, review, and human decision gates must also be complete.

| Plan | Status | Depends on | Scope |
| --- | --- | --- | --- |
| [001 - Experimental foundation](001-experimental-foundation.md) | Accepted 2026-07-29 | None | Safe repository boundary, thin DeepSeek client, private receipts, deterministic tests, synthetic live smoke |
| [002 - Trusted Shadow Slave library](002-trusted-shadow-slave-library.md) | Accepted 2026-07-30 | Plan 001 accepted | Maintain the private Shadow Slave library through deterministic agent tools without interpreting it |
| [003 - Weaver model layer and preserved tool protocol](003-preserve-tool-protocol.md) | Active; learning confirmed 2026-07-30 | Plan 002 accepted | Add a provider-independent model layer, keep complete tool calls, and refuse inactive tools |
| [004 - Make cancellation and side effects explicit](004-cancellation-and-side-effects.md) | Draft; learning gate pending | Plan 003 accepted | Cancel running async tools cooperatively and block unapproved effect classes |
| [005 - Prove the DeepSeek tool payload contract](005-provider-tool-contract.md) | Draft; learning gate pending | Plan 004 accepted | Test the real SDK payload shape and run one explicit synthetic live contract smoke |
| [006 - Settle the LangGraph boundary](006-settle-langgraph-boundary.md) | Draft; learning gate pending | Plan 005 accepted | Record where LangGraph may sit without owning Weaver's tools, private library, or memory |
| [007 - Open the first Weaver conversation](007-minimal-conversation-entrypoint.md) | Draft; learning gate pending | Plans 002-006 accepted | Wire DeepSeek, the custom runtime, and library inspection into a minimal local chat |
| 008 - Direct-reading baseline | Deferred | Plans 002-007 accepted | Blind Flash/Pro comparison over selected chapter packets |
| 009 - First compiled-memory experiment | Deferred | Plan 008 accepted | Compare bounded compiled Markdown memory with direct rereading |

## Execution order

The owner admitted Plans 003–007 for planning as one batch. That does not admit
five simultaneous builds.

1. Confirm each plan's `learning.md`.
2. Implement, test, use, inspect, review, and decide Plan 003.
3. Repeat the full loop for Plans 004, 005, 006, and 007, one at a time.
4. Plan durable turn events and context budgeting only after Plan 007 works.
5. Begin the direct-reading baseline only after the runtime sequence is
   accepted.

Only one numbered plan may be active in implementation or review at a time.
Approval of all five learning notes admits the sequence, not parallel work and
not automatic acceptance.
