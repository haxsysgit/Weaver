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
| [010 - TUI entrypoint](010-tui-entrypoint.md) | Accepted and closed 2026-08-02; surface retired by Plan 013 | Plan 009 accepted | Historical terminal experiment, later removed when the browser became the single product surface |
| [011 - Local browser chat entrypoint](011-web-chat-entrypoint.md) | Accepted 2026-08-03 | Plan 010 closed; checkpoint 001-010 complete | Appraise current ChatGPT behaviour, then prove one private local browser conversation |
| [012 - Direct reading baseline](012-direct-reading-baseline.md) | Accepted 2026-08-04 | Plan 011 accepted | Private chapter-evidenced notebook and connection map completed through chapter 1000, without retrieval changing the reading method |
| [013 - Responsive interface and installable PWA](013-responsive-interface-pwa.md) | Accepted and closed 2026-08-05 | Plan 012 accepted | One responsive React chat surface with the Shadow Slave theme, real conversation controls, safe Markdown, and PWA |
| [014 - Reading tools and the 1-1000 retrieval experiment](014-weaver-reads-from-the-shelf.md) | Completed and owner-accepted 2026-08-07 | Plan 013 accepted | Split tool results into temporary and durable forms, run the 1-1000 retrieval experiment on Qdrant (exact, notebook, vector, hybrid, connections), then build search_library and open_chapters around the winner |
| [015 - Weaver the agent (context + agentic parts)](015-reader-trials-1-1000.md) | Closed 2026-08-14 (accepted, scope cut) | Plan 014 accepted | Whole-novel search, spoiler map + judge, preferences, two-phase turn, spell surface. Skills / router / compaction deferred after v1 |
| [016 - Refresh the shelf safely](016-refresh-the-shelf-safely.md) | Completed and owner-accepted 2026-08-10 | Plan 014 accepted | `weaver refresh`: preview-first (no network, no shelf writes), explicit `--apply` confirmation, Plan 002 validation and atomic repair, metadata-only receipts, never a model tool |
| [017 - Reading continuation to 3148](017-reading-continuation.md) | Completed and owner-accepted 2026-08-14 | Plan 012, 014, 016 | Direct sequential source reading of Shadow Slave 1501-3148 into the private story notebook, checker at milestones 2000/2500/3000/3148, no stopping until the shelf end |
| [018.5 - Refresh stabilization + full re-embed](018.5-refresh-and-reembed.md) | Admitted 2026-08-15 | v1 slices 1-3 (side plan, disjoint files) | Stabilize `weaver refresh` (retries, first-404, last-chapter report), live refresh to shelf end, recover colab machinery, fix ceiling bug, re-embed whole novel, sweep baseline. Slice 6 (re-embed) blocked on 019+020: notebook must be structured before embedding |
| [019 - Notebook structure and importance](019-notebook-structure-and-importance.md) | Admitted 2026-08-15 | 018.5 slices 1-4 (side plan, disjoint files) | Finish reading 3149-3160, wiki structure study, page standard, character importance ranking, overview articles, structure checker |
| [020 - Notebook entity sweep](020-notebook-entity-sweep.md) | Admitted 2026-08-15 | Plan 019 closed | Full entity sweep to the 019 standard: rebuild all pages tier by tier, create missing core pages, verify overviews, unblock the colab re-embed |
| Later - Founding Reader Trials | Not yet drafted | Reading continuation | The finished-product bar: Ariel and the Unholy Titan, Sunny 3120+ versus Azarax, Anvil versus Azarax what-if |
| Later - Durable reader memory | Not yet drafted | Founding trials | Reader opinions, favorites, theories, and unresolved disagreements kept separately from canon |

## Execution order

Plans 001-010 are complete (007.5 applied). The next sequence is:

1. **011**: appraise chat behaviour, stop at the owner gate, then prove one
   local browser conversation.
2. **012**: run the private notebook build (chapters 1-100), then record the owner decision.
3. **013**: replace the redundant terminal and vanilla browser surfaces with
   one responsive React chat and keep the accepted FastAPI and SSE backend;
   quick identity repair, then the owner browser check.
4. **014**: split tool results into temporary and durable forms, run the
   1-1000 retrieval experiment, then build the reading tools around the
   winner.
5. **015**: weaver as a full agentic product: spoiler map + judge, two-phase read, router + skills, then compaction.
6. **016**: refresh the shelf safely with preview and confirmation — closed 2026-08-10 as the `weaver refresh` CLI command (owner-directed 2026-08-09), verification audit green, live run fetched 3129-3148 and repaired chapter 2843.
7. **018**: pre-v1 cleanup and standard docs (close 015, repo cleanup, docs audit, standard docs, chapter-links decision, retrieval audit).
8. **v1 (numberless)**: deployment and CI/CD for seamless updates.
   Admitted 2026-08-14 (`plans/v1-deploy-weaver.md`).
9. **018.5 (side plan)**: refresh stabilization (retries, first-404
   probe, last-chapter reporting) + full re-embed redo + sweep
   baseline before quantization. Admitted 2026-08-15
   (`plans/018.5-refresh-and-reembed.md`); slices 1-5 done; slice 6
   (re-embed) blocked on the notebook being structured.
10. **019 (side plan)**: notebook structure + character importance —
   finish reading 3149-3160, wiki structure study, page standard,
   importance ranking, overview articles, structure checker.
   Admitted 2026-08-15 (`plans/019-notebook-structure-and-importance.md`).
11. **020 (side plan)**: notebook entity sweep — rebuild all 500+
   entity pages tier by tier to the 019 standard, create missing core
   pages, verify overviews. Unblocks 018.5 slice 6, then back to v1.
   Admitted 2026-08-15 (`plans/020-notebook-entity-sweep.md`).
12. **Later**: the founding Reader Trials, then durable reader memory.

Native Android and iOS remain deferred until Plan 013 proves a concrete PWA
limitation.

Only one numbered plan may be active in implementation or review at a time.
Plan 008's final owner decision is recorded as **Accepted** in
`deliverables/008-wire-conversation-loop/decision.md` (2026-07-31).
Plan 009 is **Accepted** (2026-07-31); its decision is recorded in
`deliverables/009-context-assembler/decision.md`.
Plan 010 is **Accepted and closed** (2026-08-02); its decision is recorded in
`deliverables/010-tui-entrypoint/decision.md`. Plan 013 later retired and
deleted that terminal surface when the browser became Weaver's only chat UI.

Plan 011 is **Accepted** (2026-08-03); both owner decisions are recorded in
`deliverables/011-web-chat-entrypoint/decision.md`. Plan 012 is **Accepted**
(2026-08-04); its notebook build, review, and final owner decision are all
complete. Plan 013's React repair is implemented, independent review
returned PASS, and the owner accepted and closed the plan on 2026-08-05.
