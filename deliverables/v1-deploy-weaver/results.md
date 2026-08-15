# Results: Plan v1 (Deploy Weaver) — Slice 2

Date: 2026-08-14. Status: slice 2 complete.

## Cleanup

Removed from `.weaver/` (private state, not git):

| Path | Size | Reason |
| --- | --- | --- |
| research/retrieval-experiment/v2-openai/ | 207M | dead qdrant index from the OpenAI-embedding sweep (plan 014); superseded by live bge index |
| research/retrieval-experiment/v2-bge/ | 20M | old sweep index, superseded |
| research/chatgpt-ui/ | 4.2M | browser profile from the retired ChatGPT-UI experiment |
| weaver-chatgpt-appraisal/ | 53M | Chrome profile debris (cache, cookies, metrics) from the appraisal experiment |

`.weaver/` total: 453M → **170M** (freed 283M). The small experiment reports
(build-report, colab-sweep, openai reports, questions) were kept as
history (~520K).

## Prod bundle tool

`scripts/build_prod_bundle.py` — copies the three read-path sources into
a bundle that mirrors the project root layout:

- `novels/shadow-slave/` (raw chapter files, read by ChapterIndex)
- `.weaver/retrieval/` (embedded qdrant index)
- `.weaver/knowledge/` (story notebook)

Corpus packets (`.weaver/corpus/`) are fetch-pipeline artifacts, NOT read
path: the server never reads them, so they are not bundled. `receipts`
and `exports` subdirs are excluded from knowledge/corpus copies.

The script writes `manifest.json` (per-file sha256 + sizes), refuses to
overwrite an existing bundle, and **fails hard on any leak**: any file
whose path contains a forbidden name (research, receipts, runs, state,
reviews, plan002-models, appraisals, config.toml, .env) aborts the build.

Verification: `--demo` self-check passes (3-file fake bundle + leak
plant detection). Real bundle: **12,685 files, 137.0 MiB**.

## Smoke (bundle as WEAVER_PROJECT_ROOT)

- `weaver doctor`: PASS (6/6 checks).
- Chapter read: chapter 98 opens from bundle, text present ("Shadow
  Slave-Chapter 98...").
- Notebook: loads from bundle.
- Qdrant index: opens from bundle, collections `novel_chunks` (6826
  points, dense) and `notebook_statements` (2456 points).

## Bugs found by verification (fixed in the tool)

1. Bundle spec originally included corpus packets and missed novels/ —
   ChapterIndex reads novels/shadow-slave directly. Fixed spec.
2. Leak check only scanned files, so an empty forbidden dir would slip
   through. Now scans dirs too (os.walk over the output).
3. Demo planted the leak in the output dir instead of the source; fixed.

## Note

The bundle contains raw novel text (novels/). It ships to the owner's
own server over SSH only — it is never committed, never public. Same
rule as the local state.

## Slice 3: BYOK + device scoping

Date: 2026-08-14. Status: complete (504 tests green, frontend build ok).

### Device scoping (backend)

- Schema v1 -> v2 migration: `conversation.device_id TEXT NOT NULL
  DEFAULT ''`. Verified both paths: fresh DB builds v2, legacy v1 DB
  upgrades in place (ALTER TABLE + version row).
- Repository: `_insert_conversation` carries device_id;
  `load_conversations(limit, device_id)` filters by owner;
  `conversation_owner(id)` lookup added.
- Session/coordinator: `start_conversation(owner_text, device_id="")`,
  `list_conversations(limit, device_id="")`,
  `conversation_owned_by(id, device)`.
- Web layer: `_own_conversation` guard on every conversation route
  (list, create, messages, turns, retry, regenerate, stream, cancel,
  delete). Other-device ids and unknown ids are both 404 (no existence
  oracle). Empty device id (no header) matches legacy rows.

### BYOK (backend)

- `current_api_key` contextvar in model_layer/deepseek.py; provider
  resolves it at call time per task, falling back to the construction
  (env) key. Clients cached per key.
- Web layer: `X-Weaver-Key` header read per turn request, bound to the
  turn task's contextvar, reset in finally. Header never enters
  request bodies or stored text.
- No-log rule proven by test: a full turn with a fake browser key
  leaves the key in zero API responses and zero sqlite bytes.

### Frontend

- `lib/identity.ts`: device id minted once (crypto.randomUUID) in
  localStorage; api key stored/cleared in localStorage; weaverHeaders()
  attaches X-Device-Id always + X-Weaver-Key when set.
- chatApi.ts: single `authed` wrapper adds headers to every call.
- SettingsModal: "Your DeepSeek key" password field, stored locally,
  hint text explains the browser-only storage and server fallback.

### Tests added

- test_web.py: device isolation (two devices see disjoint lists, 404
  cross-access, owner-only delete); BYOK no-log (key absent from
  responses and sqlite bytes).
- test_deepseek_provider.py: contextvar picks per-request key per task
  (a/b/server-env sequence), proving concurrent turns keep their own
  keys.
