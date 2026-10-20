# Weaver Architecture

Status: current as of 2026-10-17 (Plan 030 CP4). This document describes what
the code actually does. When it and a plan disagree, the code is the truth
until an admitted plan changes it.

## What Weaver is

Weaver is a synthetic lifelong reader: an agent that has read a novel
whole, remembers it, and discusses it in natural conversation. It is a
companion, not a reader. Users never read the novel inside the product
(see `docs/WEAVER_WEB_PRODUCT_DIRECTION.md`).

The one rule: the novel is the source of truth. Every factual claim traces
to the novel text or a notebook statement; the model's trained knowledge
is only for guessing where to look.

## Process view: one turn

```
 browser (React + SSE)
      │  POST /turns, GET /stream
      ▼
 web/app.py            FastAPI, SSE stream, origin checks, sponsored gate
      │
      ▼
 chat_runtime.py       system prompt, workflow, answer validation
      │
      ▼
 agent/turn.py         the two-phase turn: locate, then read and answer
      │                (semantic_search / find_text / browse_chapters /
      │                 who_is / lore_path / read_chapters)
      │                evidence packet, publication checks, one repair
      ▼
 conversation/         durable ledger: items, coordinator, session,
                      repository (sqlite)
      │
      ▼
 model_layer/          provider protocol: DeepSeek, fake, streaming layer
                      sponsored reservation and usage accounting
```

## Packages

| Package | Responsibility | Key modules |
| --- | --- | --- |
| `src/weaver/web/` | FastAPI app, SSE endpoints, React 19 + Vite + TypeScript frontend | `app.py` (31K), `frontend/` |
| `src/weaver/agent/` | Agent loop: tool dispatch, the turn, evidence packet, publication checks, one repair | `turn.py`, `tools.py`, `answer.py`, `claim_inspection.py` |
| `src/weaver/chat_runtime.py` | The system prompt, answer candidate validation, fake responses | n/a |
| `src/weaver/prompts/voices/` | Voice packs: `identity.md` and `soul.md` per register; `WEAVER_VOICE` selects the pack | `buddy`, `storyteller` |
| `src/weaver/sponsored.py` | Shared allowance, signed pass, reservations, usage, cost | `SponsoredTurn`, `SponsoredAccess`, `DeepSeekBalance` |
| `src/weaver/conversation/` | Durable conversation ledger (sqlite via aiosqlite), replay, restart safety | `coordinator.py`, `session.py`, `repository.py`, `items.py` |
| `src/weaver/model_layer/` | Provider-neutral model interface | `deepseek.py`, `fake.py`, `layer.py`, `types.py` |
| `src/weaver/corpus/` | The private library: fetch, validate, update, export (plan 002) | `service.py`, `storage.py`, `tools.py`, `text.py`, `source.py`, `spec.py` |
| `src/weaver/retrieval/` | Indexing + retrieval: dense (fastembed/onnx) + sparse (BM42), hybrid | `library.py` (25K), `tools.py` (30K), `packet.py`, `chunker.py`, `experiment.py` |
| `src/weaver/spoilers/` | Spoiler map + judge over the 1-1000 statements | `judge.py` |
| `src/weaver/memory/` | Notebook access (the story map) | `__init__.py` |
| `src/weaver/` | CLI, config, receipts, doctor, prefs | `cli.py`, `config.py`, `receipts.py`, `doctor.py`, `prefs.py`, `experiment.py` |

## The private library

- `novels/` is immutable private source material. Never committed, never
  exposed. Plan 002 tools maintain it (fetch/update/validate) behind
  explicit confirmation.
- The story notebook (`.weaver/knowledge/shadow-slave/`) holds statements
  about the story with chapter evidence, plus entity pages. It is a map,
  never the territory: the agent reopens the novel text when an answer
  needs evidence.
- `.weaver/` is private generated state: corpus, retrieval index
  (embedded Qdrant), notebook, receipts. Never committed.

## Retrieval stack

- Index: embedded Qdrant via `QdrantClient(path=...)` (library.py:683,
  tools.py:211), local files, no server process.
- Embeddings: fastembed (onnx) dense + BM42 sparse, hybrid combination.
- Reading tools: `semantic_search` (meaning), `find_text` (exact phrase +
  speaker + co-occurrence), `browse_chapters` (range skim),
  `who_is` / `lore_path` (notebook entity map, chapters 1-1000),
  `read_chapters` (open prose).
- The agent decides how to retrieve; the assembler and the LLM decide
  ranking (see `docs/reading-finders.md`, locked 2026-08-07).
- Direct source packet (Plan 029): the turn opens the chapters the tools
  found, builds a 24,000-character evidence packet with an evidence board and
  chapter/line locations, then reads the packet before the answer. Notebook
  statements are leads; they cannot satisfy direct quotation proof.
- Publication checks are deterministic: evidence, citations, spoilers,
  quotes, invention labels, private machinery, em dashes, generic AI
  language, and excessive headings. One bounded repair is allowed; a failed
  repair fails closed.

## Web surface

- FastAPI serves the API and the built frontend from
  `src/weaver/web/dist/` (hatchling packages it into the wheel).
- Endpoints: `/api/conversations` (list, create, delete), `/api/turns`
  (start, retry, regenerate, stream, cancel), `/api/preferences`,
  `/api/access`, `/api/access/consent`, `/privacy`, `/robots.txt`, static
  assets.
- Access: the shared sponsored allowance is the default for normal readers;
  optional browser-local DeepSeek BYOK stays under Advanced. The sponsored
  turn reserves a hard cost ceiling before the provider call and settles the
  measured usage after it.
- Frontend: React 19, plain CSS tokens, markdown parsed locally (model
  text never becomes raw HTML), SSE streaming, PWA manifest + service
  worker, the First Nightmare first-run rite.
- The browser is Weaver's only chat surface. The old TUI was retired by
  plan 013.

## Conversation durability

- Every exchange is recorded as items (sqlite via aiosqlite) and survives
  crashes; replay reconstructs state exactly (plan 006/007).
- Cooperative cancellation only; side effects are classified
  (INTERNAL/EXTERNAL) and gated (plans 004/005).

## Key invariants

1. Novel text is the only source of truth. The notebook can be wrong.
2. No live model calls in tests; fake mode is explicit, never a silent
   fallback (`.env` without key exits before any call).
3. No private content (novels, `.weaver/`, receipts, reasoning traces)
   in commits or API responses.
4. The public surface is chat, memory, and chapter references. Never chapter
   text.
5. One numbered plan at a time (see `AGENTS.md` and the `arinze-plans`
   skill).

## History

- Plans 001-010: foundation, library, model layer, cancellation,
  durability, restart safety, conversation loop (checkpoint recorded).
- Plans 011-014: web chat, notebook build, React PWA surface, reading
  tools + retrieval experiment.
- Plans 015-017: agentic product (spoiler judge, two-phase turn, spell
  surface, preferences), safe refresh, reading continuation to 3160.
- Plan 018: pre-v1 cleanup and standard docs.
- Plan v1: Docker, EC2, GitHub Actions, Funnel, BYOK, and the first release.
- Plans 019-020: notebook structure, entity sweep, overview pages.
- Plans 021-027.5: First Nightmare rite, Spellweave visual foundation,
  Conversation Chamber, Thread Archive, mobile thread repairs, v1.2.1.
- Plan 028: sponsored DeepSeek allowance, signed pass, reservations, BYOK.
- Plan 029: fiction reading, direct source packet, conversation continuity,
  answer modes, identity/soul, deterministic publication checks.
- Plan 030: v2.0.0 qualification, sponsored preflight, allowance, Reader
  Trials, Cloudflare launch (admitted 2026-10-17). The EC2/Funnel path is
  retired. The CP4.5 amendment adds voice packs, intent speed profiles, a vs
  mode, and the clear-night rail.
