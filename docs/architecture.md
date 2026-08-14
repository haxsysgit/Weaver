# Weaver Architecture

Status: current as of 2026-08-14 (plan 018). This document describes what
the code actually does. When it and a plan disagree, the code is the truth
until an admitted plan changes it.

## What Weaver is

Weaver is a synthetic lifelong reader: an agent that has read a novel
whole, remembers it, and discusses it in natural conversation. It is a
companion, not a reader — users never read the novel inside the product
(see `docs/WEAVER_WEB_PRODUCT_DIRECTION.md`).

The one rule: the novel is the source of truth. Every factual claim traces
to the novel text or a notebook statement; the model's trained knowledge
is only for guessing where to look.

## Process view: one turn

```
 browser (React + SSE)
      │  POST /turns, GET /stream
      ▼
 web/app.py            FastAPI, SSE stream, origin checks
      │
      ▼
 chat_runtime.py       system prompt, workflow, answer validation
      │
      ▼
 agent/turn.py         the two-phase turn: locate, then read and answer
      │                (semantic_search / find_text / browse_chapters /
      │                 who_is / lore_path / read_chapters)
      ▼
 conversation/         durable ledger: items, coordinator, session,
                       repository (sqlite)
      │
      ▼
 model_layer/          provider protocol: DeepSeek, fake, streaming layer
```

## Packages

| Package | Responsibility | Key modules |
| --- | --- | --- |
| `src/weaver/web/` | FastAPI app, SSE endpoints, React 19 + Vite + TypeScript frontend | `app.py` (31K), `frontend/` |
| `src/weaver/agent/` | Agent loop: tool dispatch, message handling, the turn | `turn.py` (34K), `tools.py` |
| `src/weaver/chat_runtime.py` | The developer system prompt, answer candidate validation, fake responses | — |
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
  tools.py:211) — local files, no server process.
- Embeddings: fastembed (onnx) dense + BM42 sparse, hybrid combination.
- Reading tools: `semantic_search` (meaning), `find_text` (exact phrase +
  speaker + co-occurrence), `browse_chapters` (range skim),
  `who_is` / `lore_path` (notebook entity map, chapters 1-1000),
  `read_chapters` (open prose).
- The agent decides how to retrieve; the assembler and the LLM decide
  ranking (see `docs/reading-finders.md`, locked 2026-08-07).

## Web surface

- FastAPI serves the API and the built frontend from
  `src/weaver/web/dist/` (hatchling packages it into the wheel).
- Endpoints: `/api/conversations` (list, create, delete), `/api/turns`
  (start, retry, regenerate, stream, cancel), `/api/preferences`,
  `/api/passages` (local-only passage endpoint), static assets.
- Frontend: React 19, plain CSS tokens, markdown parsed locally (model
  text never becomes raw HTML), SSE streaming, PWA manifest + service
  worker.
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
4. The public surface is chat, memory, and links. Never chapter text.
5. One numbered plan at a time (see `AGENTS.md` and the `arinze-plans`
   skill).

## History

- Plans 001-010: foundation, library, model layer, cancellation,
  durability, restart safety, conversation loop (checkpoint recorded).
- Plans 011-014: web chat, notebook build, React PWA surface, reading
  tools + retrieval experiment.
- Plans 015-017: agentic product (spoiler judge, two-phase turn, spell
  surface, preferences), safe refresh, reading continuation to 3148.
- Plan 018: pre-v1 cleanup and standard docs. Next: v1 (deployment,
  CI/CD).
