# TODO_future.md

Backlog and roadmap for work outside the currently admitted plan. Each item
gets its own admitted numbered plan when it becomes the focus.
Owner-confirmed as future work, 2026-08-10. Roadmap last updated 2026-09-23.

## Weaver memory system (design shape confirmed 2026-08-10, own plan after v1)

Follows the Hermes/Nous pattern verified against the owner's live ~/.hermes
setup (Jade): three context files, bounded and curated, not one open-ended
file.

- SOUL.md: weaver's persona. Identity (agent of the nightmare spell, the
  eighth lineage), voice, and his favorite character as an emergent trait.
- MEMORY.md: weaver's durable notes. Canon corrections with status, learned
  conventions, environment facts, product rules. Hard cap ~2200 chars
  (~800 tokens), tool-enforced, curation on overflow, 8-15 entries typical.
- USER.md: the reader's profile. Name, reading progress, favorites, spoiler
  preferences, communication style. Single file for v1, per-user when auth
  lands.
- Injected as a frozen snapshot at session start (part of context assembly).
- Security scan on writes before acceptance (public BYOK app, hostile input
  can poison memory files that end up in the prompt).
- Escalation rule: corrected once = a note; called out repeatedly = a HARD
  rule. Proven pattern from the owner's own MEMORY.md.
- Recall layer: sqlite conversation history with FTS5 full-text search
  (session_search equivalent). Memory files hold only critical facts.
- External memory provider (honcho-style) as a future learning slice,
  alongside the files, never replacing.

Open questions for the owner when this plan is admitted:
- Corrections: record with status (user-said / canon-verified / disputed)
  and push back when canon contradicts? or accept blindly?
- Echoes feature mapping: saved character personas you can chat with, or
  something else?
- Weaver's favorite character: emergent from his reading record, or
  owner-seeded?
- User-facing Memories vault: quote-sized items with rank flavor (per the
  no-bulk-reproduction product rule)?

## Roadmap (plan order, owner-set 2026-08-10, updated 2026-09-23)

- Plan 16: done, owner-accepted (refresh the shelf safely).
- Plan 17: done, owner-accepted (notebook read through chapter 3148).
- Plan 018: the pre-v1 plan, accepted and closed 2026-08-14. It
  closed Plan 015 with a scope decision, cleaned stale repo context,
  audited and standardized docs (README, architecture, CONTRIBUTING.md),
  recorded the no-chapter-links decision, and audited the retrieval
  stack. Next: v1.
- Then v1: a numberless plan, deployment and CI/CD for automatic updates
  (Docker, EC2, CI, release). Closed 2026-08-18 after the owner confirmed the
  published `v1.0.0` release.
- Side plan 018.5 (2026-08-15, owner decision): refresh stabilization
  (retries, first-404 probe, last-chapter reporting) + full local
  re-embed redo of the colab skirmish + question-sweep baseline before
  quantization. Closed 2026-08-18 with a scope cut: refresh stabilization,
  shelf refresh, benchmark, and rebuild tooling accepted; the full re-embed
  and question evaluations remain deferred.
- Plan 020 closed 2026-08-18 with tier 0 and tier 1 accepted. Tiers 2-4,
  missing-page creation, and overview verification remain deferred.
- Plans 022-027 completed the Hidden Thread lane: canon and identity,
  conversation metadata foundations, visual foundation, initiation rite, then
  one continuous Conversation Chamber, Thread Archive, and integration trial
  with three owner checkpoints. Mobile proof covers 320 x 568 through 412 x
  915, available owner phones, and a desktop composition alongside each
  production surface. Plan 027 and Plan 027.5 are closed. The old drafted
  Plans 028 and 029 were superseded. The replacement sequence is now drafted:
  Plan 028 builds sponsored DeepSeek access, Plan 029 builds Weaver's reading
  and conversation intelligence, reserved side UI Plan 029.5 forms the
  Spellweave during initial load, and Plan 030 qualifies, rolls out, and
  launches v2.0.0.

## Standing series (no plan number, runs across plans)

- Architecture teaching sessions: go over the whole app piece by piece, layer
  by layer (config and prefs, corpus and storage, retrieval, conversation
  loop, model layer, web layer) until the final product. Anchored in the
  existing docs and plans. The v1 release build doubles as the first lessons.
- Canon tagline verification: DONE (2026-08-10). Read chapter 3109 (The
  Spellweave) and grep-checked neighbors. Canon: Weaver created the Nightmare
  Spell (3109), the Spell is a spellweave woven from Strings of Fate (3109),
  it supplies Memories and Echoes to study (3109), and it is presented as
  intentionally distinct from Weaver with its own priesthood (2946). The word
  "agent" never appears in canon for the Spell, and the phrase "agent of the
  nightmare spell" inverts the canon relationship (the Spell is Weaver's
  creation, not the reverse); it survives as a product pun (the app is an AI
  agent themed on the Spell). Owner chose to keep it. Canon-exact
  alternatives if ever needed: "who wove the nightmare spell", "master of
  the spellweave".

## Learning slices (the owner's AI curriculum)

- Vector database: Plan 014 already landed retrieval on embedded Qdrant
  (`QdrantClient(path=...)`, local files, no server), so the old
  "numpy/onnx index" framing is stale. Plan 018 audits the real stack and
  records whether anything needs to change; the deeper slice (faiss,
  qdrant-server, or similar) stays a learning exercise for after v1.
- Langchain / langgraph hands-on: the comparison doc explains why they were
  rejected for weaver's loop; a future slice can build a toy app with one to
  teach the tradeoffs from the inside.
- Fine-tuning: pick a slice of the corpus or conversation data and fine-tune
  a small model, compare against the RAG pipeline on the reader trials.
- ECS/Fargate deployment: redeploy the same dockerized app the "modern" aws
  way (task definitions, services, load balancer) as a learning exercise, not
  as the v1 host.
- Model quantization: int8 conversion of the bge-large onnx model.
  DECIDED (2026-08-10): the v1 host will run the quantized model. Owner
  wants to learn quantization by doing it, and accepts reduced retrieval
  accuracy, since the loop never depended heavily on rag results. The
  deep-dive lesson is part of the v1 build.

## Product backlog (owner gates that stay open)

- DeepSeek access direction: OWNER-CONFIRMED 2026-09-23 and split across
  drafted Plans 028-030. Weaver stays DeepSeek-only. Normal readers receive an
  owner-funded shared daily allowance; optional browser-local DeepSeek BYOK
  remains under Advanced.
- Plan 028 starting limits: three sponsored questions per reader per UTC day,
  one active sponsored turn, a $1 global daily ceiling, and a manually funded
  $10 wallet. Automatic top-up and silent fallback are forbidden.
- Anonymous sponsored access uses a signed browser pass, atomic server-side
  reservations, coarse abuse protection, safe cost accounting, and the global
  ceiling as the final financial boundary.
- Memory panel design for the chat UI.
- Spoiler-free mode.
- Chapter-link integration: DECIDED OUT (2026-08-14). No chapter links in
  the product. Weaver references the chapter number and quotes prose in a
  `>` blockquote when asked; novel sources stay server-side and invisible.
- PWA installability, then a native mobile app (webnovel fans are mostly on
  phones; v1 is a normal website).
- Sponsored DeepSeek funding remains a fan-project allowance. Accounts,
  subscriptions, reader payments, donations, ads, automatic recharge, and
  multiple accounts used to evade limits remain outside v2.0.0.
- Weaver intelligence under Plan 029: fiction-specific retrieval and direct
  rereading, time-aware context, evidence and contradiction tracking,
  conversational continuity, answer planning, poetic-reader voice, quote-safe
  em-dash removal, and targeted generic-AI style repair.
- Reserved side UI Plan 029.5, Spellweave formation: after Plan 029 closes,
  replace the temporary circular reveal with a real one-time formation event.
  Conversations appear first on a lightless void. A central knot ignites, stars
  expand toward their final positions with staggered depth, silver threads grow
  only between arrived stars, one quiet pulse crosses the completed network,
  and the scene settles into the normal living Star Web.
  - Use the existing Three.js `BufferGeometry`, shader uniforms, and animation
    loop. Keep star origin and final positions on the GPU and update one shared
    progress value per frame.
  - Keep mobile render profiles, adaptive quality, the 30 FPS background cap,
    delayed renderer loading, WebGL fallback, and immediate reduced-motion
    state. Add no bloom, post-processing chain, per-star React state, or
    per-frame geometry rebuild.
  - Preserve the accepted Conversation Chamber, Soul Seas, Balanced intensity,
    composer, Archive, First Nightmare, and desktop composition.
  - Prove startup order, formation stages, cancellation on hidden pages, and
    settled-state continuity with deterministic tests. Profile real mobile and
    desktop hardware before accepting any frame-time claim.
  - This is fake-only UI work with no provider calls, private chapter reading,
    retrieval changes, persistence changes, or AWS work.
  - Scaffold the full plan only after Plan 027.5 closes. If Plan 029.5 is later
    admitted, amend Plan 030 to depend on its owner-accepted closure before v2
    qualification begins.
- Weaver v2.0.0 under Plan 030: final DeepSeek qualification through the
  finished system, measured sponsored allowance, release candidate,
  Foundational Reader Trials, rollback proof, and public launch.
- After Plan 030 closes, run the standing 021-030 checkpoint before drafting or
  admitting Plan 031.
- Privacy-light analytics (umami-style) if the public launch is real enough
  to need it.

## Side plans 019 + 020 (drafted 2026-08-15)

The notebook is stale and unstructured (missing gods/daemons pages,
tiny entity pages, no importance ranking, no overview tables). Split
into two side plans so they can be done before returning to v1:

- **019** Notebook structure + character importance (ADMITTED 2026-08-15): finish reading
  3149-3160, wiki structure study, page standard, importance ranking,
  overview articles, structure checker. Fake-only.
- **020** Notebook entity sweep (CLOSED 2026-08-18, accepted with scope cut):
  tier 0 and tier 1 accepted. Tiers 2-4, missing core pages, and overview
  verification remain future work.
