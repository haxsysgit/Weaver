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

Implemented in commit `8b9edcb`.

- A signed HttpOnly, SameSite=Strict anonymous pass authorizes sponsored use.
  Conversation ownership remains on the existing device id and does not grant
  spend.
- The SQLite ledger reserves one question and $0.37 atomically with
  `BEGIN IMMEDIATE`. A partial unique index permits one active sponsored turn
  per reader. Two worst-case reservations fit under the $1 daily ceiling; a
  third is refused.
- Reservations move through `reserved`, `started`, `settled`, `released`, or
  `uncertain`. Pre-provider failures release. Started work with missing usage,
  cancellation, ambiguous failure, or process loss charges the full
  reservation.
- Sponsored calls are fixed to `deepseek-flash`, eight model calls, four tool
  rounds, a 120 KiB payload, 4,096 search-output tokens, 12,288 answer-output
  tokens, and zero provider retries. A first-turn title uses the deterministic
  fallback and spends no additional call.
- Cost reconciliation uses integer microdollars and the accepted peak Flash
  cache-hit, cache-miss, and output prices. Deterministic tests cover multiple
  calls and a changed price schedule.
- A short-lived official balance check fails closed. Disabled mode, stale
  prices, insufficient balance, reader exhaustion, global exhaustion, and
  network bursts all refuse a new sponsored turn.
- The network control persists only a keyed daily digest. The reader ledger,
  DeepSeek `user_id`, and network key use separate HMAC purposes.
- BYOK remains browser-local under Advanced, keeps Flash and Pro selection,
  and bypasses the shared ledger. A turn chooses sponsored or BYOK before it
  begins and never changes source.
- `weaver shared-allowance` reports only counts, microdollar totals, remaining
  capacity, the price version, and reset time.

Focused deterministic evidence on 2026-09-30:

- `uv run pytest -q tests/test_sponsored_access.py tests/test_deepseek_provider.py tests/test_provider_tool_contract.py tests/test_chat_runtime.py tests/test_web.py tests/test_web_server.py tests/test_cli.py tests/test_config.py tests/test_config_and_fake.py`
  passed: **168 tests**.
- The real OpenAI-compatible SDK ran through `httpx.MockTransport` for
  sponsored and BYOK request construction, streaming, tools, usage, errors,
  and reader-key authorization.
- The fake web journey passed the one-time notice, completed a sponsored
  conversation, reduced the allowance from three to two, and proved a BYOK
  turn leaves the allowance at three.
- `npm test -- --run src/weaver/web/frontend/lib/chatApi.test.ts src/weaver/web/frontend/lib/chatRecovery.test.ts src/weaver/web/frontend/lib/identity.test.ts src/weaver/web/frontend/components/FirstNightmareSetup.test.tsx src/weaver/web/frontend/components/SpellSurfaceChatApp.test.tsx src/weaver/web/frontend/components/SpellSurfaceSettings.test.tsx`
  passed: **63 tests**.
- No live DeepSeek request was sent and no owner-funded token was used.

## Bounded live cost proof

Waiting at the separate slice 6 owner gate. The accepted maximum is three live
sponsored turns with an immediate combined stop at $0.25. The evidence will
record only request count, usage totals, timing, outcome, price version, and
calculated cost. It will not record prompts, answers, chapter text, passes,
keys, provider bodies, or private reasoning.

## Handoff to Plan 029

Pending accepted sponsored and BYOK boundary, exact DeepSeek model, allowance
contract, cost evidence, safe usage metadata, and known limitations.
