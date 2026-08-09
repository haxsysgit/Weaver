# The LLM layer: why turns keep breaking, how pi does it, and weaver's fix (Plan 15, 2026-08-08)

Owner asks this document answers:

1. Why does "The thread broke. Model stream failed." keep happening?
2. How does pi actually implement its LLM layer?
3. What does DeepSeek's official guidance say about building agents on it
   (and what is "awesome deepseek agent")?
4. What makes a good LLM layer, and what did weaver adopt?

---

## 1. The root cause of the repeated breaks

### The trace from the latest broken session (12:12 turn)

The failed turn did exactly two locate rounds (4 tool calls):

1. `find_text "show you how gods die"` -> hits ch2411, ch2834
2. `semantic_search "let me show you how gods die"` -> hits ch2124
3. `read_chapters novel:2411:90-110`
4. `read_chapters novel:2834:80-105`

Then the **third model call died** with `MODEL_FAILED` (the exact text the
UI shows, `safe_error("model")` = "Model stream failed."). No draft, no
answer was ever produced. Nothing in the DB recorded why — that gap is
fixed in this change (section 4).

### The documented failure

DeepSeek's thinking-mode guide states it plainly:

> For turns that do perform tool calls, the `reasoning_content` must be
> fully passed back to the API in all subsequent requests. If your code
> does not correctly pass back `reasoning_content`, the API will return a
> 400 error.

The exact 400, hit by every major framework:

> `The reasoning_content in the thinking mode must be passed back to the API.`
> (`invalid_request_error`, HTTP 400)

Confirmed by official docs and by real bug reports in langchain
(issue 37177), LiteLLM (issue 26395), and the hermes-agent (issue 16137 —
"hermes returns a 400 after the model performs a tool call", the exact
weaver shape). Weaver never stored `reasoning_content` at all, so every
request after the first tool call was missing it. It is a **race with the
API's enforcement**: sometimes the check fires on the next request after a
tool round, sometimes later — which is why some turns ran 10 tool steps
fine and others died on the third call.

### The fix

Weaver now does what pi does (section 2):

- The provider **captures** `reasoning_content` from the stream (it was
  already streaming REASONING_DELTA events; it just never kept them).
- Every assistant message sent back to DeepSeek **carries the field**
  (real text when captured, `""` when never seen — the empty string
  satisfies the API's presence check, pi's exact fallback).
- It is **persisted** with the assistant item (private local DB) and
  **replayed** on reload, so the requirement survives restarts.
- It never reaches the UI: the turn loop only forwards TEXT_DELTAs. The
  AGENTS.md rule (reasoning stays out of reports, receipts, reviews) is
  untouched — the DB is private local storage, not a report.

## 2. How pi's LLM layer works (from the installed source)

Source: `~/.local/lib/node_modules/@earendil-works/pi-coding-agent` with
`pi-ai` inside it (`@earendil-works/pi-ai/dist`).

### Provider model catalog + compat flags

`pi-ai/dist/providers/data/deepseek.json` defines each model with
capability flags the request builder reads. `deepseek-v4-flash`:

```json
{"reasoning": true, "contextWindow": 1000000, "maxTokens": 384000,
 "compat": {"requiresReasoningContentOnAssistantMessages": true,
            "thinkingFormat": "deepseek"},
 "thinkingLevelMap": {"minimal": null, "low": null, "medium": null,
                      "high": "high", "max": "max"}}
```

So pi's catalog says flash does **not** support low/medium thinking
(they clamp **up** to high — `clampThinkingLevel` in `pi-ai/dist/models.js`
walks to the next supported level). This matters for weaver: the locate
steps use `reasoning_effort=low`, which is doc-legal for flash
("currently only deepseek-v4-flash supports the three effort levels"),
but pi chooses not to. If low ever misbehaves, the fix is to map it like
pi (clamp to high).

### The reasoning_content requirement is handled at the wire level

`pi-ai/dist/api/openai-completions.js` (the message transformer, ~line
930):

```js
if (compat.requiresReasoningContentOnAssistantMessages &&
    model.reasoning &&
    assistantMsg.reasoning_content === undefined) {
    assistantMsg.reasoning_content = "";
}
```

Every assistant message going to DeepSeek gets the field (real value or
`""`), gated on the **model capability**, not the per-request thinking
toggle. Weaver now does the same, gated on `model.supports_reasoning`.

### Retry policy (pi-ai/dist/utils/retry.js + agent-session.js)

- **Budget**: 3 retries max, base delay 2s, exponential
  (`baseDelayMs * 2 ** (attempt - 1)` -> 2s, 4s, 8s), `maxRetries` and
  `baseDelayMs` configurable via `retry` settings.
- **Retryable** (regex `RETRYABLE_PROVIDER_ERROR_PATTERN`): `overloaded`,
  `rate.?limit`, `too many requests`, `429`, `500/502/503/504/524`,
  `service.?unavailable`, `server.?error`, `internal.?error`,
  `provider.?returned.?error`, `network.?error`, connection refused /
  reset, and other transport failures.
- **NOT retryable** (`NON_RETRYABLE_PROVIDER_LIMIT_ERROR_PATTERN`):
  `insufficient_quota`, `out of budget`, `quota exceeded`, `billing`,
  GoUsageLimitError / FreeUsageLimitError, monthly usage limits — these
  are account states, not transient throttles.
- **Context overflow is not retried** either — it is handled by
  compaction instead (`isRetryableAssistantError` returns false on
  `isContextOverflow`, and `agent-session.js` calls `_checkCompaction`).
- The retry loop lives in `retryAssistantCall` (utils/retry.js): it
  re-runs the whole stream call; retries are cancelled if the abort
  signal fires during backoff (normalized to `stopReason: "aborted"`).
- The agent-session tracks `_retryAttempt`, resets it on the first
  non-error assistant response, and emits `auto_retry_start/end` events
  to the UI.

Weaver's version: `DeepSeekProvider._create_with_retry` — same budget
(3 attempts, 2s base, exponential), same categories mapped to weaver's
existing error taxonomy (`rate_limit`, `timeout`, `connection`,
`provider` retryable; `authentication`, `balance`, `invalid_request`,
`cancelled` fail fast), cancel-aware backoff via
`asyncio.wait_for(cancel_event.wait(), delay)`. Only the connection
**opening** is retried; a mid-stream drop is never retried because
partial output cannot be resumed (pi retries whole turns at the agent
loop level, weaver does not yet).

### Thinking levels are per-provider maps

`getSupportedThinkingLevels` / `clampThinkingLevel` (pi-ai/dist/models.js)
resolve a requested level against the model's `thinkingLevelMap`; the
deepseek branch in openai-completions.js (~line 592) sends
`thinking: {type: "enabled"|"disabled"}` plus `reasoning_effort` mapped
through the level map. Anthropic instead maps effort plus a thinking
token budget carved from max tokens. A thinking level is a per-call
reasoning effort/token budget — it never touches the agent loop, because
pi has no step budget at all.

### Stop reasons and truncation

`stopReason === "length"` fails the whole truncated tool batch rather
than executing calls with cut-off arguments; the agent loop treats error
and length as assistant-message outcomes. Weaver's equivalent:
`finish_reason="length"` -> LENGTH -> the partial answer is persisted as
interrupted (the daemons-truncation bug, fixed by the 16384 answer cap).

## 3. DeepSeek official guidance for agents

Official sources (api-docs.deepseek.com):

- **Thinking mode**: reasoning is returned as `reasoning_content` beside
  `content`; between two user messages **without** tool calls, the
  intermediate assistant's `reasoning_content` is ignored if passed and
  may be omitted; **with** tool calls it must be passed back or the API
  returns 400. ([guides/thinking_mode])
- **reasoning_effort**: `low | high | max`; default high; `medium` and
  `xhigh` are mapped to high for compatibility; only `deepseek-v4-flash`
  currently supports all three levels, `deepseek-v4-pro` treats low as
  high and xhigh as max. ([api/create-chat-completion])
- **max_tokens**: the maximum tokens generated in the completion; output
  is partially cut off at `finish_reason="length"` when the limit is hit,
  and thinking tokens count against it. ([api/create-chat-completion])
- **Rate limits**: dynamic concurrency based on server load; the API
  returns HTTP 429 the moment concurrency is exceeded; there is no fixed
  RPM/TPM table. Requests within the concurrency limit get a response.
  ([quick_start/rate_limit])
- **Error codes**: the everyday set is 400 (invalid request, including
  the reasoning_content pass-back), 401 (auth), 402 (balance), 422,
  429 (rate limit), 500/503. Retry guidance differs per code: 429/5xx
  are transient, 401/402 are not. ([quick_start/error_codes])

"Awesome DeepSeek": two repos under github.com/deepseek-ai —
`awesome-deepseek-integration` (a catalog of frameworks, apps, RAG tools
integrating DeepSeek; agent frameworks include Anda, SuperAgentX and
many others) and `awesome-deepseek-agent` (per-tool guides for running
DeepSeek-V4-Pro/Flash inside popular coding agents). Neither adds
LLM-layer guidance beyond the API docs; the highest-value pattern in
them is the same one pi implements: pass `reasoning_content` back.

## 4. Weaver's LLM layer after this change

Shipped in this change (red-first tests):

1. **reasoning_content capture + pass-back** (the root-cause fix):
   `ModelMessage.reasoning_content`, provider capture in `stream()`,
   wire-level pass-back gated on `model.supports_reasoning` with `""`
   fallback, persistence + replay through `items.py`, `""` default on
   legacy rows. Tests: codex's `TestReasoningPassbackAndRetry`
   (test_request_passes_reasoning_content_back,
   test_stream_response_carries_joined_reasoning_content) plus the
   round-trip test (test_assistant_reasoning_content_round_trips).
2. **Transient retry with backoff**: `DeepSeekProvider._create_with_retry`
   (3 attempts, 2s base, exponential, cancel-aware; retryable
   rate_limit/timeout/connection/provider; auth/balance/invalid_request/
   cancelled fail fast). Tests:
   test_transient_error_is_retried_with_backoff_then_succeeds,
   test_invalid_request_is_not_retried.
3. **Failure visibility**: every non-completed turn now writes a
   `run_failed` event (exit_reason + safe message) into the local state
   DB, so "the thread broke" is diagnosable from the DB without the
   server's stderr. Test: test_failed_turn_records_run_failed_event.

### The good-LLM-layer checklist (what this adds up to)

- **Wire-level vendor correctness**: per-provider compat flags (pi's
  catalog pattern), reasoning_content pass-back, thinking
  enabled/disabled + effort, max_tokens vs thinking tokens.
- **Transient resilience**: retry 429/5xx/network with backoff; never
  retry auth/balance/invalid requests or context overflow; cancel-aware
  sleeps; never retry mid-stream.
- **Deterministic classification**: every provider failure lands in a
  stable category (authentication/balance/rate_limit/invalid_request/
  timeout/connection/provider) that maps to safe user text and decides
  retry.
- **Visibility**: every failure is recorded with its category and safe
  message where a post-mortem can find it.
- **Privacy boundary**: reasoning is captured for pass-back but never
  surfaced to the UI or reports.

Known residual gaps (future plans): whole-turn retry on mid-stream drops
(pi retries at the agent-loop level), retry stats surfaced in the UI, and
`retry` settings exposed as config.
