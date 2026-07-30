# Plan 011: Direct-reading baseline

> **Executor instructions:** Execute only after Plan 010 is accepted. Read this
> plan, the accepted Plan 010 results, and every file in "Current state" before
> editing. Run each verification gate and record failures.

## Status

- **State:** Planned; learning gate required
- **Priority:** P2
- **Effort:** L
- **Risk:** Medium (first novel-content test, live model calls required)
- **Depends on:** Plan 010 accepted
- **Category:** Experiment and comprehension
- **Planned at:** commit `e523383`, 2026-07-30
- **Learning gate:** `deliverables/011-direct-reading-baseline/learning.md`
- **Final decision:** pending

## Goal

Compare two models reading the same novel packet blind and answering the same
questions.

After this plan, a deterministic experiment sends identical chapter packets
to both `deepseek-v4-flash` and `deepseek-v4-pro`, asks the same set of
comprehension questions, and produces a structured comparison report. The
experiment proves the reading pipeline (corpus → packet → model → answer)
end-to-end before any compiled memory or retrieval system is built.

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

## Current state

### `src/weaver/corpus/tools.py` — corpus tools (Plan 002)

- `inspect_novel_corpus()` — lists available novels and chapter counts.
- `fetch_novel_chapters()` — downloads missing chapters via Firecrawl.
- `build_novel_packet(start_chapter, end_chapter)` — assembles chapters
  into a `NovelPacket` with metadata.
- `export_novel()` — exports the library to a directory.

All tools access the private `novels/` directory. All are deterministic.

### `src/weaver/model_layer/deepseek.py` — DeepSeek provider

Live model access requires `DEEPSEEK_KEY` in the process environment.
Two models admitted: `deepseek-v4-flash` and `deepseek-v4-pro`.

### `src/weaver/experiment.py` — experiments framework

Existing experiments: `model-smoke` (Plan 001) and `provider-tool-contract`
(Plan 005). Each experiment is a registered function that receives a CLI
entrypoint. The pattern:

```python
async def run_model_smoke() -> dict: ...
```

Returns a dict with structured results, written to receipts by the CLI.

### `src/weaver/model_layer/fake.py` — FakeModelProvider

Dual-mode experiments use fake responses for the dry run and live responses
for the real run.

### `docs/decisions/006-conversation-architecture.md:28-34` — notebook

> The notebook is exact history. It never changes after a line settles.

The reading experiment does not need conversation durability
(no conversation happens). It sends one request per model and records the
answer.

## Implementation slices

### 1. Confirm the learning gate

Answer five questions in `deliverables/011-direct-reading-baseline/learning.md`:

1. Packet selection: which chapters from Shadow Slave form the reading packet,
   and what makes them a good test (standalone arc, known characters, clear
   events)?
2. Question design: what comprehension questions cover literal recall,
   character state, causal reasoning, and thematic interpretation?
3. Comparison methodology: what constitutes agreement vs. disagreement vs.
   partial match, and how is the report structured?
4. Token budget: do the chapters fit in a single context window for both
   Flash and Pro, and what happens if they don't?
5. Blind protocol: how is each model call isolated so neither model sees the
   other's answer or the expected answer?

Commit: `plan 011: learning gate answers`

### 2. Build the reading experiment

Add `run_direct_reading` to `src/weaver/experiment.py` following the existing
experiment pattern.

```python
async def run_direct_reading() -> dict:
    """Send the same chapter packet to Flash and Pro, compare answers."""
```

Steps:
1. Call `build_novel_packet(start_chapter, end_chapter)` to get the packet.
2. Construct a system prompt that says "Read the following chapters and
   answer the questions. Cite specific passages."
3. For each model (flash, pro), call `model_layer.complete()` with the
   packet + questions.
4. Parse each answer into the structured comparison format.
5. Return a dict with both raw answers, the comparison matrix, and token
   usage.

Add `"direct-reading"` to the CLI experiment registry alongside
`"model-smoke"` and `"provider-tool-contract"`.

Commit: `plan 011: direct-reading experiment`

### 3. Fake-model dry run

The experiment must accept `--fake` to use `FakeModelProvider` with
pre-scripted responses. This proves the pipeline works without consuming
API credits.

```bash
uv run weaver experiment direct-reading --fake
```

The fake responses should simulate two models giving slightly different
answers to the same questions, producing a realistic comparison report.

Commit: `plan 011: fake dry-run for direct reading`

### 4. Live run and evidence

Run against the real DeepSeek models:

```bash
uv run weaver experiment direct-reading
```

Record:
- Raw answers from both models.
- Token counts for request and response.
- The comparison matrix.
- Any refusals, hallucinations (citing passages that don't exist), or
  contradictory answers between models.

Write results to `deliverables/011-direct-reading-baseline/results.md`.
Receipts go through the existing `receipts.py` module — must not contain
chapter text, only answer text, comparison metadata, and token counts.

Commit: `plan 011: live direct-reading evidence`

## Verification floor

```bash
# Dry run
uv run weaver experiment direct-reading --fake

# Full suite
uv run pytest -q

# Lint experiment and tests
uv run ruff check src/weaver/experiment.py src/weaver/cli.py
```

Expected: dry run produces structured output, full tests pass, lint clean.

## Independent review

1. Reviewer 1 checks the experiment pipeline, blind protocol, and that
   no chapter text leaks into receipts or logs.
2. Reviewer 2 checks the comparison methodology, question design, and scope
   (no compiled memory, no retrieval, no LangGraph).
3. One repair pass allowed.
4. Both reviewers recheck the repaired candidate.

## Done criteria

- [ ] Owner confirmed Plan 011 learning gate (chapter selection, questions,
  comparison methodology).
- [ ] Plan 010 is accepted.
- [ ] `run_direct_reading` experiment exists with fake and live modes.
- [ ] `weaver experiment direct-reading --fake` produces a structured output.
- [ ] Live run evidence recorded in results.md with no chapter text.
- [ ] Full tests and lint pass.
- [ ] No changes to `conversation/` or `agent/`.
- [ ] Two independent reviews have no open blocker.
- [ ] Owner records Plan 011 final decision.

## STOP conditions

- The selected chapters exceed Flash's context window (128K tokens for
  DeepSeek v4 but verify the actual limit).
- A model refuses to answer or answers from "general knowledge" of Shadow
  Slave rather than the provided text.
- `DEEPSEEK_KEY` is absent during the live run.
- Chapter text enters receipts, logs, or committed files.
- Private prose, credentials, or raw reasoning enter evidence.

## Deferred work

- Compiled-memory experiments (original Plan 009, now Plan 012+) — use
  this baseline as the control group.
- Multi-packet reading (chapters across multiple context windows).
- Tool-based retrieval (lookup_passage tool during conversation).
- Karpathy-style wiki generation from reading sessions.
