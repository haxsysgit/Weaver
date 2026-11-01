# Weaver Plans

This directory is the numbered index for admitted Weaver experiments. A plan
does not become accepted merely because its code exists. Its learning,
evidence, review, and human decision gates must also be complete.

| Plan | Status | Depends on | Scope |
| --- | --- | --- | --- |
| [001 - Experimental foundation](001-experimental-foundation.md) | Closed 2026-07-29; owner accepted | None | Safe repository boundary, thin DeepSeek client, private receipts, deterministic tests, synthetic live smoke |
| [002 - Trusted Shadow Slave library](002-trusted-shadow-slave-library.md) | Closed 2026-07-30; owner accepted | Plan 001 closed | Maintain the private Shadow Slave library through deterministic agent tools without interpreting it |
| [003 - Weaver model layer and preserved tool protocol](003-preserve-tool-protocol.md) | Closed 2026-07-30; owner accepted | Plan 002 closed | Add a provider-independent model layer, keep complete tool calls, and refuse inactive tools |
| [004 - Make cancellation and side effects explicit](004-cancellation-and-side-effects.md) | Closed 2026-07-30; owner accepted | Plan 003 closed | Cancel running async tools cooperatively and block unapproved effect classes |
| [005 - Provider-neutral tool payload contract](005-provider-tool-contract.md) | Closed 2026-07-30; owner accepted | Plan 004 closed | Prove the neutral two-request tool round trip through the real SDK path for Flash and Pro |
| [006 - Durable conversation architecture](006-durable-conversation-architecture.md) | Closed 2026-07-30; owner accepted | Plan 005 closed | Record direct coordination, canonical conversation evidence, recovery, context, and optional adapters |
| [007 - Restart-safe conversation proof](007-restart-safe-conversation-proof.md) | Closed 2026-07-30; owner accepted and repaired | Plan 006 closed | Prove exact fake conversation history survives a subprocess restart without replay or duplicates |
| [007.5 - Audit repair](007.5-audit-repair.md) | Closed 2026-08-01; absorbed into Plan 007 | Plan 007 closed | Retry method, tool-call uniqueness constraint, single-tx start, dedup, repo tests, stale docs |
| [008 - Wire the conversation loop](008-wire-conversation-loop.md) | Closed 2026-07-31; owner accepted | Plan 007 closed | Zip conversation/ and agent/ into one working conversation: SessionWeave.send() calls run_turn() |
| [009 - Context assembler](009-context-assembler.md) | Closed 2026-07-31; owner accepted | Plan 008 closed | Give run_turn() a context window it can't exceed: token budget, truncation, pinned owner message |
| [010 - TUI entrypoint](010-tui-entrypoint.md) | Closed 2026-08-02; owner accepted, surface retired by Plan 013 | Plan 009 closed | Historical terminal experiment, later removed when the browser became the single product surface |
| [011 - Local browser chat entrypoint](011-web-chat-entrypoint.md) | Closed 2026-08-03; owner accepted | Plan 010 closed; checkpoint 001-010 complete | Appraise current ChatGPT behaviour, then prove one private local browser conversation |
| [012 - Direct reading baseline](012-direct-reading-baseline.md) | Closed 2026-08-04; owner accepted | Plan 011 closed | Private chapter-evidenced notebook and connection map completed through chapter 1000, without retrieval changing the reading method |
| [013 - Responsive interface and installable PWA](013-responsive-interface-pwa.md) | Closed 2026-08-05; owner accepted | Plan 012 closed | One responsive React chat surface with the Shadow Slave theme, real conversation controls, safe Markdown, and PWA |
| [014 - Reading tools and the 1-1000 retrieval experiment](014-weaver-reads-from-the-shelf.md) | Closed 2026-08-07; owner accepted | Plan 013 closed | Split tool results into temporary and durable forms, run the 1-1000 retrieval experiment on Qdrant (exact, notebook, vector, hybrid, connections), then build search_library and open_chapters around the winner |
| [015 - Weaver the agent (context + agentic parts)](015-reader-trials-1-1000.md) | Closed 2026-08-14; owner accepted with scope cut | Plan 014 closed | Whole-novel search, spoiler map + judge, preferences, two-phase turn, spell surface. Skills / router / compaction deferred after v1 |
| [016 - Refresh the shelf safely](016-refresh-the-shelf-safely.md) | Closed 2026-08-10; owner accepted | Plan 014 closed | `weaver refresh`: preview-first (no network, no shelf writes), explicit `--apply` confirmation, Plan 002 validation and atomic repair, metadata-only receipts, never a model tool |
| [017 - Reading continuation to 3148](017-reading-continuation.md) | Closed 2026-08-11; owner accepted | Plans 012, 014, and 016 closed | Direct sequential source reading of Shadow Slave 1501-3148 into the private story notebook, checker at milestones 2000/2500/3000/3148, no stopping until the shelf end |
| [018 - Pre-v1 cleanup and standard docs](018-pre-v1.md) | Closed 2026-08-14; owner accepted | Plans 015-017 closed | Close Plan 015, clean stale context, standardize docs, record chapter-reference policy, and audit retrieval before v1 |
| [v1 - Deploy Weaver](v1-deploy-weaver.md) | Closed 2026-08-18; owner accepted and published `v1.0.0` | Plan 018 closed | Docker, EC2, CI/CD, Funnel, BYOK, device scoping, and the first published release |
| [018.5 - Refresh stabilization + full re-embed](018.5-refresh-and-reembed.md) | Closed 2026-08-18; owner accepted with scope cut | v1 side plan | Refresh stabilization, shelf refresh, benchmark, and rebuild tooling accepted; full re-embed and evaluations deferred, current index ends at chapter 3127 |
| [019 - Notebook structure and importance](019-notebook-structure-and-importance.md) | Closed 2026-08-16 | 018.5 slices 1-4 (side plan, disjoint files) | Finish reading 3149-3160, wiki structure study, page standard, character importance ranking, overview articles, structure checker |
| [020 - Notebook entity sweep](020-notebook-entity-sweep.md) | Closed 2026-08-18; owner accepted with scope cut | Plan 019 closed | Tier 0 and tier 1 accepted; tiers 2-4, missing pages, and overview verification deferred |
| [021 - First Nightmare setup + mobile polish](021-first-nightmare-setup-and-mobile.md) | Closed 2026-08-17 (owner accepted) | v1 (parallel, disjoint frontend files) | First-run animated setup modal (Spell-themed, DeepSeek key explainer + entry), mobile drawer real-app fix, mobile polish + animations |
| [022 - Hidden Thread canon and identity](022-hidden-thread-canon-and-identity.md) | Closed 2026-08-18; owner accepted | v1, 018.5, and 020 closed | Bounded canon read, product-fiction split, stable identity terms, and `shadow-slave` Edition id |
| [023 - Conversation metadata foundations](023-conversation-metadata-foundations.md) | Closed 2026-08-18; owner accepted | Plan 022 closed | Durable rename, archive, pin, Edition metadata, PATCH route, and exact device ownership |
| [024 - Hidden Thread responsive prototype](024-hidden-thread-responsive-prototype.md) | Closed 2026-08-18; owner rejected alternate visual direction | Plan 022 closed | Disposable rite, chamber, and archive lab across the phone matrix and desktop |
| [025 - Spellweave visual foundation](025-spellweave-visual-foundation.md) | Closed 2026-08-19; owner accepted | Plan 024 closed | v1-first responsive background engine, semantic materials, shared primitives, and measured performance contract |
| [026 - Hidden Thread initiation rite](026-hidden-thread-initiation-rite.md) | Closed 2026-08-21; owner accepted | Plans 022 and 025 closed | Replace the setup card with the four-act full-screen rite while preserving first-run and BYOK behavior |
| [027 - Conversation chamber, Thread Archive, and integration trial](027-conversation-chamber.md) | Closed 2026-08-31; owner accepted | Plans 022, 023, 025, and 026 closed | One continuous full-stack plan with chamber, archive, and full fake-mode integration checkpoints |
| [027.5 - v1.2.1 mobile thread hotfix](027.5-v1-2-1-mobile-thread-hotfix.md) | Closed 2026-09-08 | Plan 027 closed and Weaver 1.2.0 released | Repaired startup ordering, New Weave, mobile thread recall, installed-app behavior, and conversation-first Spellweave loading |
| [028 - Sponsored DeepSeek access](028-sponsored-deepseek-access.md) | Closed 2026-10-02, accepted | Plan 027.5 closed; Plans 003, 005, and 015 foundations | Owner-funded daily allowance, preserved DeepSeek BYOK, atomic cost limits, anonymous access, and privacy controls |
| [029 - Weaver intelligence and conversation](029-weaver-intelligence-and-conversation.md) | Closed 2026-10-17; owner accepted | Plan 028 closed and owner-accepted | Fiction retrieval, direct rereading, context and evidence, conversation continuity, answer planning, voice, and bounded inspection |
| [030 - Weaver v2.0.0 qualification and rollout](030-weaver-v2-qualification-and-rollout.md) | Closed 2026-11-01; accepted, v2.0.0 released offline | Plans 028 and 029 closed and owner-accepted | DeepSeek qualification, the twelve Reader Experience Trials, settings slices, and the v2.0.0 release; deployment moved to Plan 039 |
| 031 - A library that keeps up | Not yet drafted | Plan 030 closed; 021-030 checkpoint done | Fetch to the novel's latest chapter, scheduled checks, validation, alerts |
| 032 - The retrieval verdict | Not yet drafted | Plan 031 closed | Measure vector search, notebook, and plain reading against each other; decide the pipeline; retrieval regression |
| 033 - The knowledge pipeline | Not yet drafted | Plan 032 closed | Chain what survives 032 into the updater: notebook pages, incremental embeddings, reload |
| 034 - Weaver's mind | Not yet drafted | Plan 033 closed | Reader card every turn, lookup tool, arc map, prompt restructure for the 1M window |
| 035 - Weaver's voice and memory | Not yet drafted | Plan 034 closed | Lorekeeper voice, per-device opinions with defined categories, fanfic voice per thread |
| 036 - The Spell in 3D | Not yet drafted | Plan 035 closed | Source-read Spell visuals, 3D toolchain, performance budget |
| 037 - The Soul Sea and the themes | Not yet drafted | Plan 036 closed | Soul Sea redesign and novel-grounded themes on 036's engine |
| 038 - Echoes and small delights | Not yet drafted | Plan 037 closed; optional | Echo companion, Memories, spoiler fog, "I just read chapter N" |
| 039 - Weaver's home on the web | Not yet drafted | Plan 038 closed or skipped | Domain, Cloudflare Tunnel, EC2 or new host, staging, backups, monitoring |
| 040 - Weaver v3.0.0 qualification and release | Not yet drafted | Plan 039 closed | All twelve trials on the final build, performance audit, owner acceptance, public v3.0.0 |

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
6. **016**: refresh the shelf safely with preview and confirmation. Closed
   2026-08-10 as the `weaver refresh` CLI command (owner-directed 2026-08-09),
   verification audit green, live run fetched 3129-3148 and repaired chapter
   2843.
7. **018**: pre-v1 cleanup and standard docs (close 015, repo cleanup, docs audit, standard docs, chapter-links decision, retrieval audit).
8. **v1 (numberless)**: deployment and CI/CD for automatic updates.
   Closed 2026-08-18 after the owner confirmed the published `v1.0.0` release.
9. **018.5 (side plan)**: refresh stabilization (retries, first-404
   probe, last-chapter reporting) + full re-embed redo + sweep
   baseline before quantization. Closed 2026-08-18 with a scope cut. Refresh,
   benchmark, and tooling landed; full re-embed and evaluations are deferred.
10. **019 (side plan)**: closed 2026-08-16 after reading 3149-3160,
    studying wiki structure, defining the page standard and importance ranking,
    and building overview articles plus the structure checker.
11. **020 (side plan)**: closed 2026-08-18 with tier 0 and tier 1 accepted;
   remaining tiers and overview work deferred.
12. **022-027**: Hidden Thread identity, backend metadata, visual engine, rite,
   then one continuous Conversation Chamber, Thread Archive, and integration
   trial with broad phone support and three owner checkpoints.
13. **028**: after Plan 027.5 closes, add owner-funded sponsored DeepSeek
   access with a small daily reader allowance, hard global budget, signed
   anonymous passes, preserved BYOK, and measured cost accounting.
14. **029**: after Plan 028 closes, build Weaver's fiction reading, context,
   evidence, conversation, answer, voice, and bounded inspection system.
15. **030**: after Plan 029 closes, qualify DeepSeek through the finished
   system, tune the sponsored allowance from measured cost, prove the release
   candidate and rollback, run the Foundational Reader Trials, and publish
   Weaver v2.0.0 only after the owner launch gate.
16. **031 to 040** (owner-set 2026-10-31): see the roadmap in
   `TODO_future.md`. Durable memory lands in Plan 035 as per-device opinions.

Historical references to Plans 028 and 029 inside Plans 023-027 refer to the
old Thread Archive and integration drafts that Plan 027 absorbed. They do not
refer to the replacement Plans 028-030. Plan 028 and Plan 030 were rewritten
for the DeepSeek-only sponsored direction on 2026-09-23.

After Plan 030 closes, the standing 021-030 checkpoint must run before any
Plan 031 is drafted or admitted.

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
