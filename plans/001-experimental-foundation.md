# Plan 001 — Experimental Foundation

## Status

Implementation admitted on 2026-07-28 after the owner:

1. confirmed the exposed Firecrawl credential was rotated; and
2. confirmed the “What I understood” section in
   [`learning.md`](../deliverables/001-experimental-foundation/learning.md),
   with one correction: future orchestration candidates are Deep Agents,
   LangGraph, or Pydantic AI rather than core LangChain.

## Goal

Create the smallest trustworthy foundation for later Weaver experiments:

- a public/private repository boundary;
- a thin asynchronous DeepSeek Chat Completions adapter;
- provider-neutral request and response types;
- a deterministic fake model;
- explicit fake/live CLI modes;
- private, redacted experiment receipts;
- deterministic tests;
- one synthetic live smoke suite;
- review and human decision records.

## Explicitly out of scope

- Reading or modifying novel text.
- Building chat, retrieval, a wiki, or a vault.
- Drawing conclusions about literary quality.
- Adding Deep Agents, LangGraph, Pydantic AI, streaming, sessions, a tool
  execution loop, vector storage, graph storage, RAG frameworks, or a
  multi-agent runtime.

`shadow_friend.md` and `chunking_practice.py` remain historical thinking. They
do not define this architecture.

## Slice workflow

```text
Learn → Analyze → Confirm what I understood → Hypothesis
→ Human gate → Build → Test → Use → Inspect
→ Independent review → Human decision → Record conclusion
```

Hypotheses, observations, and accepted decisions must remain visibly separate.
Failures are evidence and must not be hidden by retries.

## Safety boundary

Before the first commit:

- confirm the Firecrawl credential rotation;
- keep `temp.md` absent;
- ignore `.env`, `.firecrawl/`, `.vscode/`, `novels/`, `.venv/`, private
  receipts, generated wiki/vault data, caches, and build output;
- add `.env.example` with variable names only;
- use the existing `DEEPSEEK_KEY` name without printing or persisting its
  value;
- audit staged content for credentials and novel text.

Never commit secrets, chapters, chats, generated wiki content, private run
state, or raw reasoning traces.

## Candidate architecture

```text
CLI → experiment runner → model boundary → DeepSeek
                    ↓
             private receipts
```

The candidate uses Python 3.11 and the OpenAI Python SDK as transport for
DeepSeek's OpenAI-compatible Chat Completions API.

The provider-neutral boundary is:

```python
await ModelClient.complete(request)
```

It will define messages, requests, responses, tool calls, and usage data. The
only admitted provider is DeepSeek, with exact aliases:

- `flash` → `deepseek-v4-flash`
- `pro` → `deepseek-v4-pro`

The adapter will use an explicit timeout and `max_retries=0`. It will normalize
normal content, JSON response mode, function calls, finish reason, returned
model ID, and usage fields including prompt, completion, total, reasoning,
cache-hit, and cache-miss tokens when returned.

Raw `reasoning_content` may be handled in memory for provider compatibility,
but it must never enter receipts, reports, reviews, or Weaver explanations.
Tool-call argument strings are preserved exactly and never silently repaired.

## CLI and private receipts

```bash
uv run weaver doctor
uv run weaver experiment model-smoke --fake
uv run weaver experiment model-smoke --live
```

`--fake` and `--live` are mutually exclusive and explicit. There is no fallback
between them.

Every run creates an owner-only ignored directory containing:

- `manifest.json`
- `events.jsonl`
- `request.json`
- `response.json`
- `review.md`

Receipts include the run ID, experiment version, model, settings, latency,
finish reason, normalized usage/cache metrics, outcome, and a safe error
category. API keys and reasoning content are always redacted.

## Synthetic smoke

The live smoke contains no novel text:

1. Request structured JSON from Flash.
2. Repeat the same Flash prefix and observe cache fields without requiring a
   hit.
3. Force a synthetic function call from Pro and verify normalization.
4. Record latency, usage, finish reason, returned model ID, and provider
   differences.

Live evidence is manual and is never part of the automated test suite.

## Verification floor

```bash
uv lock --check
uv run pytest -q
uv run python -m compileall src tests
uv run weaver --help
uv run weaver doctor
uv run weaver experiment model-smoke --fake
git diff --check
```

Tests must cover missing credentials, invalid aliases, fake determinism,
request/response normalization, JSON mode, exact function argument
preservation, usage/cache mapping, timeout/provider error classification,
redaction, receipt permissions, fake CLI operation without network, and live
rejection without credentials.

## Review and acceptance

After deterministic verification and the live smoke, one frozen candidate is
reviewed twice with `deepseek-v4-pro`:

1. Architecture, privacy, secret handling, and scope.
2. Tests, experiment validity, receipts, diagrams, and evidence.

Accepted findings may be repaired once. Both reviewers then recheck the same
repaired candidate. Any remaining blocker stops the slice.

The owner then reviews the learning note, diagrams, live smoke evidence,
results, and review ledger. Only the owner can finalize `decision.md`.

Acceptance requires all of the following:

- Firecrawl rotation confirmed and `temp.md` absent.
- No tracked secret, novel text, private receipt, or generated wiki data.
- All deterministic checks pass.
- Both exact DeepSeek models complete their smoke assignments.
- Receipts are complete, readable, permission-safe, and redacted.
- Both Pro reviews have no blocker.
- The owner confirms the foundation and tradeoffs are understood.

The intended history has three checkpoints, but no commit is made without
explicit owner direction:

1. Approved plan and safe baseline.
2. Tested implementation candidate.
3. Final accepted or rejected decision and evidence.
