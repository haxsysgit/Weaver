# The LLM layer: what broke, how pi does it, and how weaver's gets good

(Plan 15, 2026-08-08. Investigation of the "The thread broke. Model stream
failed." recurrence, plus pi internals and DeepSeek agent research.)

## 1. What happened in the latest session

Conversation `28913877...` (12:12 UTC): "what chapter did weaver say 'come let
me show you how gods die' and what happened in that chapter".

The trace (from `conversation_item`):
1. `find_text "show you how gods die"` -> hits ch2411, ch2834
2. `search_story "let me show you how gods die"` -> canonical hit ch2124
3. `read_chapters novel:2411:90-110`
4. `read_chapters novel:2834:80-105`

Then the 3rd model call failed with `MODEL_FAILED` (`safe_error("model")` =
"Model stream failed."). No draft, no answer. The run's phase became
`interrupted`, and the `run_event` table recorded nothing except `run_queued`.

Two root-cause candidates, both real, both now fixed:

**A. The DeepSeek thinking-mode contract was being violated.** The official
docs (api-docs.deepseek.com/guides/thinking_mode) state it verbatim: "for
requests carrying the `tools` parameter, the `reasoning_content` must be fully
passed back to the API in all subsequent requests. If your code does not
correctly pass back `reasoning_content`, the API will return a 400 error."
Weaver streamed reasoning deltas but never stored or re-sent them. The 400
hits exactly where the turn died: on a later tool-loop call, after the
previous assistant turns carried tool calls. (The earlier 10-tool-step daemons
turn surviving is luck/API tolerance, not the contract.)

**B. No retry on transient provider failures.** A 429/5xx/connection drop or
the API's `finish_reason="insufficient_system_resource"` (a documented
finish reason: "the request is interrupted due to insufficient resource of
the inference system") ends the whole turn with "Model stream failed." Nothing
retries.

**C. No visibility.** The live runner recorded no failure event, so "why does
this keep happening" could not be answered from the state DB at all.

## 2. How pi handles its LLM layer (from the installed source)

Key files:
- `@earendil-works/pi-ai/dist/utils/retry.js` — retry classification + loop
- `@earendil-works/pi-coding-agent/dist/core/agent-session.js` — auto-retry
  orchestration, compaction handoff
- `@earendil-works/pi-ai/dist/api/openai-completions.js` — provider payloads,
  stop-reason mapping
- `@earendil-works/pi-ai/dist/models.js` — thinking-level clamping

The three mechanisms that matter:

**1. Provider failures are typed terminal states, not raw exceptions.**
`mapStopReason` maps every finish reason to a typed `AssistantMessage`:
`stop`, `length`, `toolUse`, or `error` with an `errorMessage`
(`content_filter`, `network_error`, unknown reasons). The agent loop never
catches raw provider exceptions for these; it receives a structured message.
That is the core discipline: the LLM layer turns "what went wrong" into data.

**2. Bounded retry with exponential backoff and strict classification.**
`retryAssistantCall(produce, policy, signal, callbacks)`:
- default policy: `enabled`, `maxRetries: 3`, `baseDelayMs: 2000`, delay =
  `baseDelayMs * 2^(attempt-1)` (2s, 4s, 8s)
- retryable (regex list): overloaded, rate limit, too many requests, 429,
  500/502/503/504/524, service/server unavailable, provider returned error,
  network/connection errors, fetch failures, timeouts, websocket closes,
  "stream ended before ...", HTTP/2 no response, "you can retry your request"
- NOT retryable: quota/billing exhaustion (insufficient_quota, out of budget,
  usage-limit errors, available balance) — those fail fast
- aborts are never retried; a cancel during the backoff sleep normalizes to
  an aborted message
- context overflow is never retried: "handled by compaction instead"
- callbacks (`onRetryScheduled`, `onRetryAttemptStart`, `onRetryFinished`)
  emit `auto_retry_*` UI events so the user sees the retry

**3. Thinking levels are per-model clamps, never raw passthrough.**
`clampThinkingLevel(model, level)` clamps the requested level to
`getSupportedThinkingLevels(model)`; providers map effort through a
`thinkingLevelMap` (openai-completions.js sends `thinking` +
`reasoning_effort`; anthropic sends effort plus a thinking token budget).
The effort is a per-call parameter; it never touches the agent loop (pi has
no step budget — the loop runs until the model stops calling tools).

Also notable: `stopReason === "length"` fails the whole truncated tool batch
(pi does not execute tool calls with cut-off arguments).

## 3. DeepSeek official agent guidance (api-docs.deepseek.com, fetched 2026-08-08)

- **Thinking mode**: `{"thinking": {"type": "enabled|disabled"}}`, default
  enabled; OpenAI-SDK calls must put it in `extra_body`. `reasoning_effort`
  is `low|high|max` (default high); `deepseek-v4-flash` supports all three,
  `deepseek-v4-pro` only high/max for now (low clamps to high). `medium`/
  `xhigh` map to `high`. Thinking mode ignores temperature/top_p/penalties.
- **max_tokens**: "The maximum number of tokens that can be generated in the
  chat completion" — reasoning tokens count against it (our 4096 cap caused
  the earlier cut answer; the answer calls now use 16384).
- **reasoning_content contract** (the big one): quoted in section 1. For
  non-tool-call turns it is ignored if passed; for tool-call turns it MUST
  be passed back in every later request or the API 400s.
- **finish_reason values**: `stop`, `length`, `content_filter`, `tool_calls`,
  `insufficient_system_resource` (server-side resource interruption —
  retryable).
- **Usage**: `usage.completion_tokens_details.reasoning_tokens` reports
  thinking tokens; `prompt_cache_hit_tokens`/`prompt_cache_miss_tokens`
  report automatic prefix caching.
- **Tools**: max 128 functions; `strict` mode (beta) via `/beta` base_url.
- **Error surface**: OpenAI-compatible status codes; 401 auth, 402 balance,
  429 rate limit (retryable), 400 invalid request (our missing-reasoning bug
  class), 5xx retryable.
- **awesome-deepseek-integration** (github.com/deepseek-ai): a curated list
  (apps, agent frameworks, RAG frameworks, IDE extensions, providers). It is
  an index, not guidance; the frameworks all consume the same OpenAI-
  compatible API documented above. No extra protocol requirements.

## 4. What weaver's LLM layer now does (this change)

1. **reasoning_content passes back** (the contract fix): `ModelMessage` and
   `AssistantMessage` carry `reasoning_content`; the provider accumulates
   streamed reasoning into the terminal response; `_message_payload` sends it
   back; the item store persists and restores it. So every tool-loop call and
   every later turn re-sends the reasoning the API requires.
2. **Retry with backoff** (pi's pattern): the provider retries `create()`
   up to 3 times, 2s * 2^(attempt-1), for `rate_limit`, `timeout`,
   `connection`, and generic `provider` (5xx) categories. `invalid_request`
   (400), `authentication` (401), and `balance` (402) fail fast. A cancel
   during the backoff aborts. Mid-stream failures still end the turn but are
   now recorded.
3. **Failure details are persisted**: `TurnResult` carries `error_category`
   and `raw_stop_reason`; the runner's failure path writes a `run_failed`
   `run_event` with `{exit_reason, message, error_category,
   raw_stop_reason}`. The next broken thread is diagnosable from
   `.weaver/state/weaver.sqlite3` without the server's stderr.

## 5. The design rules (for every future LLM layer change)

1. Failures are data: category + stop reason, recorded durably, never just an
   exception in a log.
2. Retry transient, fail fast on the deterministic (auth/balance/invalid).
   Backoff with cancel-awareness.
3. Honor provider contracts literally (thinking-mode tool calls) — the API
   docs are the spec, and "it worked in practice" is not a contract.
4. Answers get output headroom; tool-call steps stay bounded (the two-budget
   split) so thinking never starves the answer.
5. Visibility before shipping: if a failure cannot be explained from the
   state DB, the layer is not done.
