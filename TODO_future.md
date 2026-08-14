# TODO_future.md

Backlog of work that is deliberately NOT part of the current or next plan.
Each item gets its own admitted numbered plan when it becomes the focus.
Owner-confirmed as future work, 2026-08-10.

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

## Roadmap (plan order, owner-set 2026-08-10, updated 2026-08-14)

- Plan 16: done, owner-accepted (refresh the shelf safely).
- Plan 17: done, owner-accepted (notebook read through chapter 3148).
- Plan 018: the pre-v1 plan, accepted and closed 2026-08-14. It
  closed Plan 015 with a scope decision, cleaned stale repo context,
  audited and standardized docs (README, architecture, CONTRIBUTING.md),
  recorded the no-chapter-links decision, and audited the retrieval
  stack. Next: v1.
- Then v1: a numberless plan, deployment and CI/CD for seamless updates
  (Docker, EC2, CI, release). Do not draft it before 018 closes; plans go
  one by one.

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

- Auth and multi-user (users, accounts, where conversations live).
- Memory panel design for the chat UI.
- Spoiler-free mode.
- Chapter-link integration: DECIDED OUT (2026-08-14). No chapter links in
  the product. Weaver references the chapter number and quotes prose in a
  `>` blockquote when asked; novel sources stay server-side and invisible.
- More model providers: openai, anthropic claude, gemini, grok (deepseek
  only for v1, all BYOK).
- PWA installability, then a native mobile app (webnovel fans are mostly on
  phones; v1 is a normal website).
- Pooled-key subscription tier so casual fans who won't top up a deepseek
  account can still use the app (v1 is BYOK-only).
- Privacy-light analytics (umami-style) if the public launch is real enough
  to need it.
