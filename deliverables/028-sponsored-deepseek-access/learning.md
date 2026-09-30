# Plan 028 Learning Note

## Gate status

**Accepted 2026-09-30 by owner direction.** The owner approved the connection
source, model, reservation, ledger recovery, signed pass, retry rule, reader
copy, First Nightmare adjustment, proxy proof requirement, and bounded-live
proof contract below. Implementation may proceed. Live DeepSeek calls still
require the separate slice 6 live gate.

## Owner-confirmed direction

- Weaver stays DeepSeek-only for this product cycle.
- The owner funds a small shared daily allowance for normal readers.
- Optional direct DeepSeek BYOK remains under Advanced and uses the existing
  browser-local key boundary.
- The shared credential stays server-side and never enters reader-visible or
  persisted data.
- The controlled trial begins with three sponsored questions per reader per
  UTC day, one active sponsored turn, a $1 global daily ceiling, and a manually
  funded $10 wallet.
- Automatic top-up, silent fallback, and retries outside a reservation are
  forbidden.
- Reader copy says **shared daily allowance** and explains the reset and BYOK
  option honestly.
- Plan 028 builds access and financial safety. Plan 029 builds intelligence.
  Plan 030 measures usage, tunes the allowance with the owner, runs Reader
  Trials, and decides v2.0.0.

## Refreshed official observations, 2026-09-30

- DeepSeek's Open Platform terms explicitly cover applications built for end
  users. The operator remains responsible for end-user rules, privacy notice,
  consent or another legal basis, security, abuse handling, and the inputs and
  outputs sent through the API.
- The shared API key must stay out of browser code and public disclosure.
- DeepSeek's privacy policy says prompts may be collected, retained, used to
  provide and improve the service, and stored in the People's Republic of
  China. Weaver therefore needs a clear notice before a reader first uses the
  sponsored path.
- The current Flash API id is `deepseek-flash`, served by
  DeepSeek-V4.1-Flash. The old `deepseek-v4-flash` id still routes, but is a
  retired compatibility alias.
- Peak Flash prices are $0.006 per million cache-hit input tokens, $0.30 per
  million cache-miss input tokens, and $1.20 per million output tokens.
  Off-peak prices are half those values. Weaver should reserve and account at
  peak prices so it never understates exposure.
- Streaming usage includes prompt, completion, total, cache-hit, cache-miss,
  and reasoning token counts. The final SSE chunk carries the usage record.
- `GET /user/balance` reports availability plus total, granted, and topped-up
  balances. It is a balance signal, not a spending limit.
- `user_id` accepts an opaque value and provides content-safety, cache, and
  scheduling isolation. It must contain no personal information and does not
  cap cost.
- DeepSeek's published account concurrency is 2,500 for Flash. Weaver still
  needs its own one-turn and daily money limits.
- DeepSeek documents 400, 401, 402, 422, 429, 500, and 503 failures. None gives
  Weaver permission to switch source or charge a second reservation silently.

Official sources checked on 2026-09-30:

- [DeepSeek Open Platform Terms](https://cdn.deepseek.com/policies/en-US/deepseek-open-platform-terms-of-service.html)
- [DeepSeek privacy policy](https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html)
- [DeepSeek models and pricing](https://api-docs.deepseek.com/quick_start/pricing/)
- [DeepSeek chat completions](https://api-docs.deepseek.com/api/create-chat-completion/)
- [DeepSeek context caching](https://api-docs.deepseek.com/guides/kv_cache/)
- [DeepSeek error codes](https://api-docs.deepseek.com/quick_start/error_codes/)
- [DeepSeek balance](https://api-docs.deepseek.com/api/get-user-balance/)
- [DeepSeek rate limits and user isolation](https://api-docs.deepseek.com/quick_start/rate_limit/)

## Accepted implementation contract

The owner accepted the items below on 2026-09-30.

### Connection source and model

- A turn chooses one source before it starts: `reader_byok` when a browser key
  is present, otherwise `sponsored`. It never changes source during the turn.
- Sponsored turns use `deepseek-flash` through the existing streaming Chat
  Completions provider. They ignore browser model selection.
- BYOK remains under Advanced and keeps explicit Flash or Pro selection. The
  stored retired Flash alias migrates to `deepseek-flash`.
- Sponsored first-turn titles use Weaver's existing deterministic title
  fallback. They do not spend a ninth model call.

### Signed anonymous pass

- Weaver issues a separate HttpOnly, SameSite=Strict signed cookie containing
  a random reader id, version, and issue time. The signing secret stays in the
  server environment.
- The ledger stores only a keyed digest of the reader id. DeepSeek receives a
  separate opaque keyed digest as `user_id`. Neither value contains a device
  id, IP address, account name, or other personal information.
- The existing browser device id continues to own conversations. It does not
  authorize sponsored spend.

### Atomic ledger and recovery

- One SQLite ledger transaction reserves both one reader question and the
  maximum turn charge before a sponsored turn is accepted.
- States are `reserved`, `started`, `settled`, `released`, and `uncertain`.
  The provider marks `started` durably before its first network request.
- A deterministic failure before `started` releases the reservation. Any turn
  that reached `started` consumes one reader question.
- A completed turn reconciles token totals against the reservation. Missing
  usage, cancellation after start, process loss, or an ambiguous provider
  failure settles conservatively at the full reserved charge.
- A stale pre-provider reservation is released. A stale started reservation is
  marked `uncertain` and charged at the full reservation. This keeps restarts
  from opening money the server may already have spent.
- A partial unique index permits one active sponsored reservation per reader.
  `BEGIN IMMEDIATE` makes reader and global checks atomic in SQLite.

### Sponsored turn envelope and reservation

- Maximum model calls: 8 total.
- Maximum tool rounds: 4. One model response may batch several tool calls.
- Maximum serialized request payload per model call: 120 KiB, including
  messages and tool schemas. Reservation assumes an input ceiling of 131,072
  tokens per call, leaving an 8,192-token margin for protocol framing.
- Maximum output: 4,096 tokens on search calls and 12,288 on the one answer
  call. Thinking stays enabled; reasoning tokens count inside these limits.
- Automatic provider retries: 0. A manual retry or regenerate is a new
  sponsored question once its provider work starts.
- Reservation uses peak Flash prices and rounds upward:
  - input: 8 x 131,072 x $0.30 per million = $0.314573
  - output: (7 x 4,096 + 12,288) x $1.20 per million = $0.049152
  - maximum exposure: $0.363725, reserved as $0.37
- The $1 daily ceiling can hold two worst-case turns at once. Real usage is
  reconciled after completion, so later turns can use released capacity.

### Pricing, balance, and shutdown

- Money is stored as integer microdollars. No floating-point accounting.
- The initial price record is versioned `deepseek-flash-2026-09-10-peak` and
  expires after 30 days. Expired or missing prices disable sponsored turns.
- A short-lived server cache checks the official balance endpoint. Missing,
  unavailable, or insufficient USD balance disables new sponsored turns.
- `WEAVER_SPONSORED_ENABLED=0` refuses new sponsored turns while BYOK,
  conversations, settings, and reading remain available.
- Operator inspection is a local CLI summary only: daily reserved and settled
  cost, remaining capacity, question counts, failures, price version, and UTC
  reset. It contains no prompts, answers, keys, cookies, raw addresses, or
  chapter text.

### Abuse boundary

- Three sponsored questions per signed reader pass per UTC day and one active
  sponsored turn per reader remain the first trial limits.
- A keyed daily digest of the trusted client network address feeds a small
  rolling burst bucket. Raw addresses are never stored or logged.
- Proxy headers are trusted only when the direct proxy address is explicitly
  configured. Without that proof, Weaver uses the direct peer and the $1
  global ceiling remains the final browser-reset and spoofing boundary.
- The repo cannot prove which original-address header the current Tailscale
  Funnel path supplies. Sponsored production mode stays disabled until a
  redacted header-path check confirms it.

### Reader copy

Normal chat status:

> 3 shared questions remain. Renews at 00:00 UTC.

Exhausted state:

> [The shared thread rests until 00:00 UTC.] Your conversations are still
> here. Return after the reset, or bind your own DeepSeek key in Advanced.

First sponsored-use notice:

> Weaver sends your question and the story passages it opens to DeepSeek to
> generate a reply. DeepSeek may retain and process that content under its
> terms and privacy policy, including on servers in China. Do not include
> private or sensitive information. Weaver's replies are AI-generated and can
> be wrong, so use the chapter references to check the story.

The First Nightmare keeps its current visual language. Its normal action
becomes `Continue with the shared allowance`; `Use my own key` moves to
Advanced. The reader confirms the notice once before the first sponsored turn.

### Bounded live proof

- Proposed fixed live proof: three sponsored turns through Weaver's real
  harness, with a hard combined stop at $0.25.
- The proof records only request count, usage totals, timing, result category,
  price version, and calculated cost. No prompt, answer, chapter text, cookie,
  key, provider body, or private reasoning enters the deliverables.

## Hypotheses to prove

1. One atomic ledger can reserve both a reader question and maximum monetary
   exposure before provider work starts.
2. A signed anonymous pass plus a hard global ceiling gives a fan project
   enough protection without requiring reader accounts.
3. Current DeepSeek usage fields are sufficient to reconcile cached input,
   uncached input, reasoning, and output cost after every provider call.
4. A manually funded wallet plus the application ceiling gives two independent
   limits on owner spend.
5. The accepted immersive UI can explain allowance, reset, privacy, and AI
   output truth without becoming a billing dashboard.

## Owner learning gate

Accepted 2026-09-30. The owner approved implementation of the full contract.
This approval does not authorize live DeepSeek calls. Slice 6 stops again for
the separate live gate before any request can spend the owner's balance.
