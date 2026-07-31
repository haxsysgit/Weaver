# Plan 011: Direct-reading baseline

> **Executor instructions:** Execute only after Plan 010 is accepted. Read this
> plan, the accepted Plan 010 results, and every file in "Current state" before
> editing. Run each verification gate and record failures. Slice 0 repairs
> three provider edge cases and one library-integrity ordering bug before the
> experiment is built — do not skip it.

## Status

- **State:** Planned; learning gate required
- **Priority:** P2
- **Effort:** L
- **Risk:** Medium (first novel-content test, live model calls required)
- **Depends on:** Plan 010 accepted
- **Category:** Experiment and comprehension
- **Planned at:** commit `e523383`, 2026-07-30
- **Audited at:** 2026-07-31 — current-state claims corrected (real packet
  signature, no experiment registry, not all tools deterministic); provider
  edge cases and the timeout gap pinned as prerequisite repairs
- **Learning gate:** `deliverables/011-direct-reading-baseline/learning.md`
- **Final decision:** pending

## Goal

Compare two models reading the same novel packet blind and answering the same
questions.

After this plan, a deterministic experiment sends identical chapter packets
to both `deepseek-v4-flash` and `deepseek-v4-pro`, asks the same set of
comprehension questions, and produces a structured comparison report. The
experiment proves the reading pipeline (library → packet → model → answer)
end-to-end before any compiled memory or retrieval system is built. Receipts
and results contain answer text and metadata only — never chapter prose.

## Why this matters

Plans 001--010 built the infrastructure to have a conversation. Plan 011 is
the first time Weaver reads a novel. It answers: can a model, given raw
chapter text in a single context window, understand what happened?

The result is the baseline against which every future approach (compiled
memory, RAG, narrative threads, Karpathy-style wiki) is measured. If Flash
and Pro perform identically, that's a data point. If neither can answer
basic plot questions, the approach needs rethinking before investing in
sophisticated memory systems.

This was the original Plan 008, deferred until the conversation
infrastructure existed.

The audit before this rewrite found four things the earlier plan text got
wrong or missed — they are repaired/corrected in Slice 0 and the contract:

1. `build_novel_packet` takes `(novel_id, chapters: list[int])`, not
   `(start_chapter, end_chapter)`.
2. There is no experiment registry — `cli.py` dispatches by name; the real
   pattern is `run_model_smoke(model_layer, *, flash_model, pro_model, mode,
   receipt_root, secrets, timeout_seconds) -> ExperimentResult`.
3. Not all library tools are deterministic — fetch/update are network-backed
   (Firecrawl); only inspect/packet/export are.
4. `timeout_seconds` is recorded in manifests but **never enforced**
   (no `asyncio.wait_for` anywhere in `experiment.py`) — a trickling model
   would run forever. Plan 011 mandates enforcement.

## Current state

### `src/weaver/corpus/tools.py:77-83` — build_novel_packet (corrected)

```python
build_novel_packet(novel_id, chapters: list[int])  # sorts, dedups, validates
```

Assembles validated chapters into a private ordered Markdown reading packet
under `.weaver/corpus/shadow-slave/packets/`. `export_novel` writes **one
private file** (txt/md/epub) under state exports (`service.py:380-390`) — it
does not "export the library to a directory".

### `src/weaver/experiment.py:550-560` — the real experiment pattern (corrected)

```python
run_model_smoke(model_layer, *, flash_model, pro_model, mode, receipt_root,
                secrets, timeout_seconds) -> ExperimentResult
```

There is **no registry**: `cli.py:161-197` dispatches experiment names via
if/else and constructs the provider from `--fake|--live`. `run_direct_reading`
must follow this signature pattern. Note: `timeout_seconds` is written to the
manifest only — no `asyncio.wait_for` bounds the calls (`experiment.py:336-341,589-595`).

### `src/weaver/model_layer/deepseek.py` — DeepSeek provider

`DEEPSEEK_KEY` from the process environment only (config never auto-loads
`.env`). Models: `deepseek-v4-flash`, `deepseek-v4-pro`. Errors surface as
terminal events with `error_category` (`deepseek.py:311-334`); `reasoning_content`
is ephemeral (REASONING_DELTA only, sanitized at receipts).

Known edge cases from the audit (repaired in Slice 0):

- `_status_category` (`deepseek.py:398-407`) maps 401→authentication,
  402→balance, 429→rate_limit, 400/422→invalid_request — **403 falls into the
  generic "provider" bucket**.
- A stream ending `finish_reason="tool_calls"` with no tool deltas produces
  `TOOL_USE` with **zero tool calls** (`deepseek.py:221-231`), unguarded.
- Cancellation/early-exit paths skip stream cleanup: `except CancelledError`
  awaits inside the handler (sticky cancellation) and there is no `finally`
  around the chunk loop (`deepseek.py:124-215,151-157`).

### `src/weaver/receipts.py:33-44` — sanitize()

Redaction is **key-name based** (`_SENSITIVE_KEYS` incl. `reasoning_content`,
api keys, bearer regex). It cannot and does not block arbitrary prose. The
same holds for `CorpusStore._assert_metadata_only` (`storage.py:615-633`,
`_FORBIDDEN_METADATA_KEYS` incl. `chapter_text`, `prose`). **Guaranteeing no
chapter text in receipts is the experiment's job, not the sanitizer's.**

### `src/weaver/corpus/service.py:858-866` — fetch ordering (corrected)

`_fetch_one` calls `commit_chapter` **before** `ensure_url_recorded`. If the
URL list has a structural error, the chapter file lands on disk without a URL
entry, the fetch reports failure, and the orphaned file is invisible to
`update` (its repair scan is bounded by the URL list) and reported VALID by
`inspect` (missing = expected − raw paths). Repaired in Slice 0.

### `src/weaver/model_layer/fake.py` — FakeModelProvider

Dual-mode experiments use scripted fake responses for the dry run
(`--fake`) and live responses for the real run (`--live`).

### Verified baseline (2026-07-31)

- `uv run pytest -q` → 166 passed; `uv run ruff check src/weaver tests` → clean.
- `uv run weaver experiment model-smoke --fake` works (existing dry-run path).

## Contract to prove

### 1. Prerequisite repairs (Slice 0)

Provider (`src/weaver/model_layer/deepseek.py`) — each with a regression test
in `tests/test_deepseek_provider.py`:

1. **403 → `authentication`** in `_status_category` (`deepseek.py:398-407`).
2. **TOOL_USE with zero tool calls → provider error** (raise
   `ModelProtocolError` or emit `ERROR` with `invalid_request`-style
   category) at `deepseek.py:221-231`.
3. **Stream cleanup on every exit path**: wrap the chunk loop in
   `try/finally` that closes the SDK stream; never `await` inside a
   `CancelledError` handler (sticky cancellation); emit the ABORTED terminal
   only where it can actually be delivered (or accept CancelledError
   propagation as the documented contract — pick one and pin it in the code).

Library (`src/weaver/corpus/service.py`, `storage.py`):

4. **`ensure_url_recorded` before `commit_chapter`** in `_fetch_one`
   (`service.py:858-866`), so a URL without a file is the normal
   inspectable "missing" state and a file without a URL can never be
   created. Regression test: malformed `urls.md` → fetch fails and no
   chapter file exists on disk.

### 2. Packet and chapter selection

- Packet built via `build_novel_packet(novel_id, chapters=[...])` with an
  explicit chapter list — the list is a learning-gate decision (Slice 1).
- The packet text exists only in memory and in the private packet file. It
  must never be serialized into receipts, results, logs, or committed
  files. Receipt payloads contain only: packet id + chapter list + hashes,
  per-model answers, token counts, error categories, comparison matrix.
- Post-run assertion: scan every receipt/results file for a sample of
  packet sentences and for the `_FORBIDDEN_METADATA_KEYS` names; fail the
  experiment if any appear.

### 3. Blind protocol

- Each model call is constructed independently: same packet text, same
  questions, isolated prompt. Neither model sees the other's answer or any
  expected answer.
- Fixed order (flash, then pro); comparison happens offline after both
  calls settle.
- If a call fails, record the failure (`error_category`, http status) as
  evidence and continue to the other model — no silent retry, no silent
  skip.

### 4. Timeout enforcement

- Every model call is wrapped in `asyncio.wait_for(..., timeout=timeout_seconds)`
  with `timeout_seconds` from the manifest (default 30.0 per
  `config.DEFAULT_TIMEOUT_SECONDS`).
- A timeout is recorded as a failed call with `error_category="timeout"`
  and reported — never retried silently. This closes the audit gap
  (`experiment.py` accepted `timeout_seconds` but never enforced it).

### 5. Comparison methodology

Per question, classify: **agree** (same entities/events), **partial**
(overlapping but divergent details), **disagree** (contradictory claims),
**unverifiable** (citation not found in packet). Hallucination check: any
cited passage must substring-match the packet; mismatches are recorded as
citations-not-found. The matrix plus both raw answers land in
`deliverables/011-direct-reading-baseline/results.md`.

### 6. Live discipline

- Dry run (`--fake`) must pass before any live run; deterministic tests
  before live calls (AGENTS.md Experiments).
- Live run requires `DEEPSEEK_KEY` (absent → exit 2, no call, no receipt).
- `reasoning_effort`: `max` is confirmed valid for V4-Flash-0731; **`high`
  must be verified on the first live call** — if rejected, retry with
  `max` and record the difference (STOP condition if both fail).
- Stated semantics: the smoke experiment stops at the first failed call;
  this experiment continues across models (matches
  `run_provider_tool_contract`) — the asymmetry is deliberate and recorded.

### 7. Scope fence

No changes to `conversation/` or `agent/`. `model_layer/` and `corpus/`
change only in Slice 0 repairs.

## Scope

### In scope

- `src/weaver/model_layer/deepseek.py` + `tests/test_deepseek_provider.py`
  (Slice 0 repairs 1-3)
- `src/weaver/corpus/service.py`, `src/weaver/corpus/storage.py` + corpus
  tests (Slice 0 repair 4)
- `src/weaver/experiment.py` (`run_direct_reading`)
- `src/weaver/cli.py` (`direct-reading` experiment name)
- `src/weaver/model_layer/fake.py` only if a scripted direct-reading
  response set is needed (additive only)
- Plan 011 deliverables and `plans/README.md`

### Out of scope

- `conversation/`, `agent/`
- compiled memory, retrieval, LangGraph, wiki generation (Plan 012+)
- multi-packet reading; packet text in receipts; `.env` loading

## Commands

| Purpose | Command | Expected result |
| --- | --- | --- |
| Dry run | `uv run weaver experiment direct-reading --fake` | Structured output; receipts contain no packet text |
| Provider repair tests | `uv run pytest -q tests/test_deepseek_provider.py` | All pass (incl. new 403/TOOL_USE-empty/cleanup tests) |
| Corpus repair tests | `uv run pytest -q tests/test_corpus*.py` (or the corpus test module name) | All pass (incl. fetch-ordering regression) |
| Full suite | `uv run pytest -q` | All pass (166 baseline; expect 173+) |
| Lint | `uv run ruff check src/weaver/experiment.py src/weaver/cli.py src/weaver/model_layer/deepseek.py src/weaver/corpus tests` | Exit 0 |
| Receipt scan | post-run assertion (Contract §2) | No packet sentences, no blacklist keys |

## Steps

### Slice 0: Prerequisite repairs

Apply Contract §1 repairs 1-4 with their regression tests. Each repair lands
as its own commit (`repair: deepseek 403 category`, `repair: TOOL_USE empty
guard`, `repair: stream cleanup on exit`, `repair: url recorded before
chapter commit`).

**Verify:** the four new regression tests pass; full suite green; no
behavior change observed in existing provider/corpus tests.

### Slice 1: Confirm the learning gate

Answer five questions in `deliverables/011-direct-reading-baseline/learning.md`:

1. Packet selection: which chapters from Shadow Slave form the reading
   packet, and what makes them a good test (standalone arc, known
   characters, clear events)? Express it as a chapter list for
   `build_novel_packet(novel_id, chapters=[...])`.
2. Question design: which comprehension questions cover literal recall,
   character state, causal reasoning, and thematic interpretation?
3. Comparison methodology: what constitutes agree vs. partial vs. disagree,
   and how is the matrix structured (Contract §5)?
4. Token budget: do the chapters fit in a single context window for both
   Flash and Pro (verify the actual limit on the first live call; the 128K
   claim is unverified), and what happens if they don't?
5. Blind protocol: how is each model call isolated (Contract §3)?

Re-verify every cited line in the drafted 2026-07-30 answers (the packet
signature claim there is stale).

Commit: `plan 011: learning gate answers`

### Slice 2: Build the reading experiment

Add `run_direct_reading` to `src/weaver/experiment.py` following the
`run_model_smoke` signature pattern (model_layer, models, mode,
receipt_root, secrets, timeout_seconds → `ExperimentResult`), and
`"direct-reading"` to the CLI if/else dispatch (`cli.py:161-197`).

Steps:

1. `build_novel_packet(novel_id, chapters=...)` → packet (id, chapter list,
   hash).
2. System prompt: "Read the following chapters and answer the questions.
   Cite specific passages."
3. Per model (flash, pro), in fixed order: `asyncio.wait_for(model_layer.complete(...), timeout=timeout_seconds)` (Contract §4).
4. Parse answers; build the comparison matrix offline (Contract §5).
5. Receipt payload: packet metadata + hashes + answers + token counts +
   error categories only (Contract §2). Post-run receipt scan (Contract §2).

Commit: `plan 011: direct-reading experiment`

### Slice 3: Fake-model dry run

Scripted fake responses (additive `fake.py` set) simulate two models giving
slightly different answers, producing a realistic comparison matrix.

```bash
uv run weaver experiment direct-reading --fake
```

The dry run must complete without a key and produce the same receipt
structure as the live run.

Commit: `plan 011: fake dry-run for direct reading`

### Slice 4: Live run and evidence

With `DEEPSEEK_KEY` set:

```bash
uv run weaver experiment direct-reading --live
```

Record: raw answers, token counts, the comparison matrix, refusals,
hallucinations (citations-not-found), and error categories. Write results to
`deliverables/011-direct-reading-baseline/results.md` — answer text and
metadata only, no chapter text. Verify `reasoning_effort: high` on the first
call (Contract §6).

Commit: `plan 011: live direct-reading evidence`

## Test plan

1. Provider repairs: 403 → authentication; TOOL_USE-empty → provider error;
   stream closed on cancel and on early exit (deterministic via events, no
   sleeps).
2. Fetch ordering: malformed `urls.md` → fetch fails, no chapter file on
   disk; normal fetch still records URL + file.
3. Dry run determinism: `--fake` produces the same receipt structure twice;
   no key needed; no live client constructed.
4. Timeout: a scripted slow provider + small `timeout_seconds` → recorded
   `timeout` failure, no retry, other model still runs.
5. Receipt scan: packet sentences and blacklist key names absent from every
   receipt produced by the dry run.
6. CLI: `experiment direct-reading --fake` exit 0; `--live` without key
   exits 2 before any call.

## Independent review

1. Reviewer 1 (pipeline/leakage): blind protocol, timeout enforcement,
   receipts contain no chapter text (scan evidence), failure recording
   (no silent retry).
2. Reviewer 2 (methodology/scope): comparison matrix definitions,
   hallucination check, question design, no `conversation/`/`agent/`
   changes, Slice 0 repairs minimal.
3. One repair pass is allowed.
4. Both reviewers recheck the repaired candidate.

## Done criteria

- [ ] Owner confirmed Plan 011 learning gate (chapter list, questions,
  methodology).
- [ ] Plan 010 is accepted.
- [ ] Slice 0 repairs merged with their regression tests.
- [ ] `run_direct_reading` exists with fake and live modes; timeout enforced.
- [ ] `weaver experiment direct-reading --fake` produces a structured
  output with no packet text in receipts.
- [ ] Live run evidence recorded in results.md with no chapter text;
  `reasoning_effort` verified.
- [ ] Full tests and lint pass.
- [ ] No changes to `conversation/` or `agent/`.
- [ ] Two independent reviews have no open blocker.
- [ ] Owner records Plan 011 final decision.

## STOP conditions

Stop and report if:

- The selected chapters exceed the verified context window for either model;
- a model refuses to answer or answers from "general knowledge" of Shadow
  Slave rather than the provided text (record it; do not silently accept);
- `DEEPSEEK_KEY` is absent during the live run;
- chapter text enters receipts, logs, or committed files (the post-run
  scan fails);
- a model call exceeds the enforced timeout and the failure is not recorded
  as evidence;
- both `reasoning_effort` values fail on live calls;
- private prose, credentials, or raw reasoning enter evidence.

## Maintenance notes

- The metadata-only guards (`sanitize`, `_assert_metadata_only`) are
  key-name based conventions, not content filters — every future experiment
  that handles novel text must guarantee by construction that prose never
  reaches receipt writers (this plan's receipt-scan pattern is the template).
- This baseline is the control group for compiled-memory experiments
  (Plan 012+); keep the packet selection and question set stable so later
  results are comparable.
- The smoke-vs-contract stop-on-first-failure asymmetry is deliberate
  (Contract §6); if it ever changes, both experiments must be updated
  together.
- The three provider repairs (403, TOOL_USE-empty, stream cleanup) harden
  the same code the TUI (Plan 010) and the conversation loop (Plan 008)
  depend on — the tests added here are their regression suite.

## Deferred work

- Compiled-memory experiments (Plan 012+) — use this baseline as the control
  group.
- Multi-packet reading (chapters across multiple context windows).
- Tool-based retrieval (lookup_passage tool during conversation).
- Karpathy-style wiki generation from reading sessions.
