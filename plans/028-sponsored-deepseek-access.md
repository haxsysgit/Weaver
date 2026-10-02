# Plan 028: Sponsored DeepSeek access

> **Executor instructions:** Give normal readers a small owner-funded daily
> DeepSeek allowance while preserving optional browser-local DeepSeek BYOK.
> Put hard server-side limits around every sponsored request so a fan project
> can never become an open-ended API bill.

## Status

- **Tooling:** `uv`, pytest, Ruff, the real DeepSeek SDK through
  `httpx.MockTransport`, Weaver fake mode, root Vitest and Vite commands, and
  explicit bounded live DeepSeek cost proof after the owner learning gate.
- **State:** closed 2026-10-02. Owner accepted the sponsored-access boundary,
  measured live cost proof, review repairs, and verification evidence.
- **Depends on:** Plan 027.5 closed and Weaver v1.2.1 released. Plans 003, 005,
  and 015 supply the accepted provider, turn-loop, and private-reasoning
  boundaries.
- **Priority:** P1. Normal readers need a safe path that does not require an
  API key before Plan 029 improves Weaver's reading and conversation system.
- **Effort:** M to L.
- **Risk:** High. A public server credential without atomic allowance and cost
  controls can spend the owner's balance quickly.
- **Budget:** about 90k to 150k agent-context tokens for implementation and two
  independent reviews, estimated $1.00 to $4.50. Deterministic and fake work
  comes first. Live product proof has a separate owner-approved request count
  and a maximum charge of $0.25. No automatic top-up is allowed.

## Owner direction (locked decisions)

1. (2026-09-23) Weaver stays DeepSeek-only. OpenRouter and additional provider
   adapters are removed from Plans 028-030.
2. (2026-09-23) Normal readers receive a small daily allowance paid by the
   owner through one server-side DeepSeek account.
3. (2026-09-23) Direct DeepSeek BYOK remains optional under Advanced. BYOK
   usage does not consume the shared allowance.
4. (2026-09-23) The owner credential never reaches browser code, responses,
   logs, receipts, public evidence, or persisted conversations.
5. (2026-09-23) Reader copy calls the funded path the **shared daily
   allowance**, not a free trial. The UI shows the remaining questions and the
   reset time.
6. (2026-09-23) The first controlled trial starts with three sponsored
   questions per anonymous reader per UTC day, one active sponsored turn per
   reader, a $1 global daily ceiling, and a manually funded $10 wallet.
7. (2026-09-23) Automatic top-up, silent provider switching, silent BYOK use,
   paid fallback, and retries that bypass a reservation are forbidden.
8. (2026-09-23) Exhausted readers keep access to their conversations and can
   return after reset or use their own DeepSeek key.
9. (2026-09-23) A signed anonymous browser pass supplies a pseudonymous reader
   identity. Coarse network burst controls protect the shared pool. DeepSeek's
   `user_id` receives only an opaque value with no personal information.
10. (2026-09-23) The global daily ceiling is the final financial boundary. A
    reader resetting browser storage must never bypass it.
11. (2026-09-23) Plan 028 builds access, accounting, and protection. Plan 029
    improves Weaver's intelligence. Plan 030 measures real usage, lets the
    owner tune the allowance, runs the Reader Trials, and decides v2.0.0.

## Scope

- Recheck official DeepSeek API documentation, pricing, terms, privacy duties,
  model IDs, token fields, cache accounting, errors, concurrency, and
  `user_id` behavior at admission. Record dated links and unknowns.
- Inspect the existing DeepSeek provider, browser-local key path, fake runtime,
  turn loop, cancellation, conversation ownership, usage fields, persistence,
  configuration, deployment secret path, and public privacy copy.
- Define two explicit connection sources: `sponsored` and `reader_byok`. A
  turn has one source from start to finish and never changes it silently.
- Keep the owner-funded DeepSeek key server-side. Keep the reader's BYOK key in
  the existing browser-local path and out of server persistence and logs.
- Add a signed anonymous reader pass that contains no raw IP address, email,
  account name, or stable cross-site identity.
- Add a server-side sponsored-usage ledger for daily reader allowance, active
  reservations, actual provider usage, safe cost totals, UTC reset boundary,
  and the global daily ceiling.
- Reserve a sponsored question and its maximum permitted cost atomically before
  the first provider request. Reconcile the reservation with actual input,
  cached-input, reasoning, and output usage after every provider call.
- Count a sponsored question once provider work begins. Deterministic failures
  before the provider call release the reservation. Provider-started failures
  remain counted and inspectable so retries cannot drain the pool invisibly.
- Put explicit per-turn ceilings around provider calls, tool rounds, context,
  and output. Calculate the maximum reservation from the current configured
  price schedule and those ceilings.
- Refuse a sponsored turn when the reader allowance, global daily budget,
  configured price facts, server balance state, or reservation capacity cannot
  safely cover it.
- Add one-active-turn-per-reader enforcement and coarse network burst limits.
  A challenge may appear only for suspicious traffic, never as the normal
  reading flow.
- Send DeepSeek an opaque `user_id` derived for scheduling and cache isolation.
  Do not send personal information in that field.
- Add reader-facing shared-allowance status, reset time, exhaustion copy, BYOK
  escape path, privacy disclosure, and AI-generated-content disclosure without
  exposing provider internals throughout the normal chat.
- Add safe operator inspection for the global spend, reservations, completed
  sponsored questions, failures, price version, reset boundary, and remaining
  capacity. It must contain no prompts, answers, keys, raw IP addresses, or
  private chapter text.
- Prove pricing changes, parallel reservations, cancellation, provider errors,
  process restart, UTC rollover, browser reset attempts, insufficient balance,
  and disabled sponsored mode through fake and deterministic tests.
- After the owner learning gate, run a fixed-count live DeepSeek cost proof
  within the $0.25 ceiling. Record token and cost totals without prompts,
  answers, private reasoning, or chapter text.
- Document emergency shutdown: one configuration switch disables sponsored
  turns immediately while BYOK conversations and reading remain available.

## Out of scope

- OpenRouter, OpenAI, Anthropic, Gemini, Qwen, provider catalogues, model
  routers, multi-provider fallbacks, or provider tournaments.
- Retrieval, direct chapter rereading, evidence boards, answer planning,
  conversation memory, Weaver voice, or answer-quality improvement. Plan 029
  owns those changes.
- Final allowance tuning, public load testing, Foundational Reader Trial
  acceptance, deployment, or v2.0.0 launch. Plan 030 owns those decisions.
- User accounts, email login, payments, subscriptions, donations, ads, or a
  commercial tier.
- Automatic wallet recharge, unlimited retries, unlimited sponsored turns, or
  any route whose maximum charge cannot be calculated before it begins.
- Persisting prompts, answers, novel prose, credentials, cookies, raw provider
  bodies, raw tool payloads, or raw model reasoning in usage records.

## Deterministic proof / verification floor

1. Real-SDK tests through `httpx.MockTransport` prove sponsored and BYOK
   request construction, streaming, tools, usage fields, cancellation, and safe
   DeepSeek error mapping.
2. Atomic ledger tests prove parallel requests cannot overspend reader or
   global allowances and restarts cannot lose active reservations.
3. Cost tests cover cached input, uncached input, output, reasoning, multiple
   provider calls, price changes, incomplete usage, and maximum reservation.
4. Access tests prove exactly three initial sponsored questions per reader per
   UTC day, one active sponsored turn, truthful rollover, and independent BYOK
   use.
5. Abuse tests prove browser-storage reset cannot bypass the global ceiling,
   burst controls do not store raw IP addresses, and opaque DeepSeek `user_id`
   values contain no personal information.
6. Privacy tests prove neither credential enters the wrong boundary and no
   prompt, answer, chapter text, raw reasoning, cookie, or private handle enters
   logs, receipts, usage inspection, or public evidence.
7. Failure tests cover insufficient balance, 401, 402, 429, 500, 503, timeout,
   cancellation, missing usage, stale pricing, exhausted reader allowance, and
   exhausted global budget without automatic retry or fallback.
8. UI tests prove remaining allowance, UTC reset, exhaustion, emergency
   shutdown, and BYOK choice remain readable on phone and desktop.
9. `uv run pytest -q`, `uv run ruff check src/weaver tests`, `npm test`, and
   `npm run build` pass. The committed `src/weaver/web/dist/` is refreshed.
10. The staged-file audit contains no credentials, `.env`, private source text,
    chats, raw provider data, or unrelated worktree drift.
11. Two independent reviews pass: financial/privacy/concurrency first, then
    reader experience/failure truth/deployment safety.
12. The owner sees measured fake and bounded-live cost evidence and records the
    final accept or reject decision.

## STOP conditions

- If current DeepSeek terms do not permit the proposed downstream reader use,
  stop before implementation.
- If the server credential can reach the browser, logs, receipts, persistence,
  or public evidence, stop and contain it.
- If the maximum sponsored-turn charge cannot be calculated and reserved
  before provider work begins, stop before live use.
- If concurrent requests can exceed the $1 daily ceiling, stop and repair the
  ledger before continuing.
- If price information is missing or stale, sponsored mode stays disabled.
- If a retry can create a second charge without a new reservation, stop.
- If the implementation needs automatic top-up, multiple DeepSeek accounts,
  or disguised traffic to remain usable, stop and return to the owner.
- If privacy or AI-output disclosures conflict with the accepted immersive UI,
  stop and show the exact reader copy before production styling.
- If live proof could exceed $0.25, stop before sending the request.

## Slices

1. **Admission and current-state audit**
   - Record explicit owner admission and commit the drafted contract.
   - Inspect the existing DeepSeek, BYOK, conversation, persistence, privacy,
     fake-mode, and deployment-secret paths.
2. **Official research and learning gate**
   - Recheck DeepSeek pricing, terms, model IDs, usage fields, errors, cache,
     and `user_id` behavior from official sources.
   - Present the signed-pass, ledger, reservation, pricing, retry, disclosure,
     and emergency-shutdown design. Stop for owner confirmation before code or
     live calls.
3. **Red financial and privacy contracts**
   - Add failing tests for atomic reservations, global and reader ceilings,
     BYOK separation, credentials, usage reconciliation, and all error states.
4. **Sponsored DeepSeek foundation**
   - Build the server credential path, signed reader pass, usage ledger,
     reservation and reconciliation flow, price configuration, hard ceilings,
     and emergency shutdown.
5. **Reader experience and abuse boundary**
   - Add shared-allowance status, reset and exhaustion states, optional BYOK,
     disclosures, one-turn enforcement, and coarse burst protection.
6. **Fake use and bounded live cost proof**
   - Exercise complete sponsored and BYOK journeys in fake mode, including
     failures, restarts, parallel attempts, and UTC rollover.
   - Stop for the live gate, then run only the approved fixed-count DeepSeek
     requests within the $0.25 ceiling.
7. **Inspect, review, and decide**
   - Run the full verification floor, privacy and staged-file audits, both
     independent reviews, and the emergency-shutdown demonstration.
   - Present measured cost, remaining risks, failures, and deviations. Stop for
     the owner's dated final decision before closure.
