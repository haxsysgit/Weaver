# Plan 028 Results

## Status

Admitted 2026-09-30. Slice 1 current-state inspection and slice 2 official
research are complete. Production code and live calls are paused at the owner
learning gate.

## Current-state inspection, 2026-09-30

- `DeepSeekProvider` already streams through the official OpenAI-compatible
  endpoint, normalizes input, output, reasoning, cache-hit, and cache-miss
  token counts, maps provider failures, and keeps private reasoning out of
  public answers.
- Browser BYOK uses `X-Weaver-Key`, a task-local `ContextVar`, and browser
  `localStorage`. The key is absent from API responses and conversation state.
- A missing browser key currently falls back silently to the server key. Plan
  028 must replace that implicit fallback with an explicit `sponsored` source.
- Conversation ownership uses a browser-created device id. That id is useful
  for conversation scoping but cannot protect funded usage because clearing
  browser state creates another id.
- The conversation SQLite schema has no allowance, reservation, provider-call,
  or cost ledger. The active-turn map is process-local and cannot protect the
  global budget across a restart.
- The live runtime already requires a server-side `DEEPSEEK_KEY`. Docker Compose
  injects it from the box environment and never puts it in the built frontend.
- The current default `deepseek-v4-flash` id is a retired alias. DeepSeek now
  directs API clients to `deepseek-flash` for DeepSeek-V4.1-Flash.
- Existing web turns allow up to 200,000 context tokens, 50 to 90 tool steps,
  8,192 output tokens on search calls, and 16,384 on answer calls. That shape
  cannot fit a small pre-reserved sponsored charge.
- The first-turn title generator makes an extra model call outside the main
  turn result. Sponsored turns need deterministic titles so that call cannot
  escape the reservation.
- Provider retry currently permits three opening attempts for transient
  failures. Sponsored turns need one attempt because an ambiguous timeout can
  represent a charged call with no usage record.
- Settings and the First Nightmare still treat BYOK as the normal path. The
  normal path must become the shared allowance, with BYOK under Advanced.

## DeepSeek research

Official sources were refreshed on 2026-09-30. The findings and proposed
contract are recorded in `learning.md`.

## Allowance and cost proof

Pending atomic reader and global reservations, usage reconciliation, pricing,
parallel requests, restart recovery, BYOK separation, and failure evidence.

## Bounded live cost proof

Pending explicit owner authorization within the $0.25 ceiling. Record only safe
request, token, timing, outcome, and cost totals.

## Handoff to Plan 029

Pending accepted sponsored and BYOK boundary, exact DeepSeek model, allowance
contract, cost evidence, safe usage metadata, and known limitations.
