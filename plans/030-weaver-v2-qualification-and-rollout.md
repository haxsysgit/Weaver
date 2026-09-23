# Plan 030: Weaver v2.0.0 qualification and rollout

> **Executor instructions:** Qualify the finished Weaver system on its admitted
> DeepSeek model, measure the real sponsored cost, let the owner set the public
> daily allowance, run the three Foundational Reader Trials, and release v2.0.0
> only after the owner accepts the complete product.

## Status

- **Tooling:** Plan 028 sponsored-access inspection, Plan 029 evaluation tools,
  fake mode, pytest, Ruff, root Vitest and Vite commands, browser and installed
  PWA trials, bounded live DeepSeek runs, the existing GitHub Actions deployment,
  Docker Compose, EC2, and rollback proof.
- **State:** drafted 2026-08-24 and rewritten 2026-09-23 for the DeepSeek-only
  sponsored direction. Awaiting Plans 028 and 029.
- **Depends on:** Plan 028 closed with sponsored access and financial safety
  accepted; Plan 029 closed with the intelligence and conversation system
  accepted. If side UI Plan 029.5 is admitted, its accepted closure also becomes
  a dependency.
- **Priority:** P1 after Plans 028 and 029. This is the v2 qualification and
  owner-controlled public release gate.
- **Effort:** L to XL.
- **Risk:** High. This plan combines real model cost, anonymous public traffic,
  private-source retrieval, deployment, rollback, and owner-only Reader Trial
  decisions.
- **Budget:** about 220k to 360k agent-context tokens for qualification, browser
  proof, release work, and two independent reviews, estimated $2.50 to $10.80.
  Fake and replay work comes first. Live DeepSeek evaluation and pilot spend is
  capped at $5 unless the owner explicitly changes it. Automatic top-up remains
  forbidden.

## Owner direction (locked decisions)

1. (2026-08-24, amended 2026-09-23) Weaver v2 uses DeepSeek only. There is no
   provider tournament or active model pool in this release.
2. (2026-09-23) Normal readers use the owner-funded shared daily allowance from
   Plan 028. Optional browser-local DeepSeek BYOK remains under Advanced.
3. (2026-09-23) The Plan 028 starting limits are three sponsored questions per
   reader per UTC day, one active sponsored turn, a $1 global daily ceiling,
   and a manually funded $10 wallet. Plan 030 may propose changes only from
   measured complete-turn cost and owner approval.
4. (2026-09-23) Weaver is a fan product. Accounts, subscriptions, reader
   payments, donations, ads, and automatic wallet recharge stay out.
5. (2026-08-24) Quality is measured through the finished Plan 029 reading and
   conversation system, never through isolated trivia prompts.
6. (2026-08-24) Every failed, cancelled, retried, incomplete, and exhausted turn
   remains in the denominator. Failed evidence cannot disappear from reports.
7. (2026-08-24) The three Foundational Reader Trials are fresh-session,
   multi-turn product conversations. Their answers are never hard-coded into
   prompts, fixtures, retrieval rules, or expected strings.
8. (2026-08-24) Only the owner can accept a Reader Trial and authorize launch.
   Automated checks and reviewers collect evidence only.
9. (2026-09-23) The shared allowance closes cleanly when its reader or global
   budget is exhausted. Existing conversations remain readable and BYOK remains
   available.
10. (2026-09-23) Production monitoring stores safe counts, cost, latency, and
    failure categories only. It stores no prompts, answers, chapter text, raw
    network identifiers, credentials, cookies, or model reasoning.
11. (2026-09-23) One switch must disable sponsored DeepSeek access immediately
    without disabling BYOK reading or corrupting conversations.
12. (2026-08-24) Release uses the existing GitHub Actions, container, EC2, and
    rollback path unless evidence proves a separate infrastructure plan is
    necessary.

## Scope

- Freeze the accepted Plan 028 access boundary and Plan 029 intelligence build
  into one release candidate. Record exact model ID, model version when
  available, price version, prompt version, library/index versions, schema,
  assets, and source commit.
- Re-run Plan 028's real-SDK DeepSeek contract and all allowance, reservation,
  reconciliation, credential, privacy, error, and emergency-shutdown tests.
- Re-run Plan 029's retrieval, evidence, chronology, conversation, answer,
  quote, spoiler, and style qualification on held-out development cases.
- Measure complete reader turns rather than isolated API calls: model requests,
  cached and uncached input, reasoning and output tokens, tool rounds, latency,
  cancellation, retry, failure category, and final dollar cost.
- Report median, 95th percentile, maximum, and complete failure denominator for
  cost and latency. Keep prompts, answers, private passages, and reasoning out
  of public records.
- Exercise the starting three-question reader allowance and $1 global ceiling
  under realistic parallel traffic. Prove atomic reservations prevent
  overspend across processes and restarts.
- Test honest exhaustion, UTC reset, insufficient balance, DeepSeek outage,
  stale pricing, cancelled turns, interrupted streams, disabled sponsored mode,
  browser-storage reset, burst traffic, and BYOK continuation.
- Propose the production reader allowance, global ceiling, maximum turn shape,
  and wallet amount from measured cost. Stop for the owner's capacity gate
  before changing the Plan 028 defaults.
- Run accessibility, phone, desktop, installed PWA, slow-network, reduced-motion,
  and renderer-fallback proof without changing the accepted visual system.
- Verify privacy copy, AI-output disclosure, shared-allowance copy, UTC reset,
  BYOK escape path, and emergency-disabled state in the real browser surface.
- Build safe operational views and alerts for remaining daily budget, completed
  sponsored questions, active reservations, p95 cost, failures, DeepSeek 401,
  402, 429, 500 and 503 responses, and stale price configuration.
- Prove database migration, deployment, restart recovery, service-worker update,
  previous-image rollback, configuration rollback, and sponsored shutdown on a
  release-candidate environment.
- Repair bounded release-candidate defects inside Plan 030 when they preserve
  the accepted Plan 028 and Plan 029 architecture. If evidence requires a new
  allowance, credential, retrieval, conversation, or answer architecture, stop
  for an owner-approved Plan 030 amendment or close this plan as rejected and
  draft a successor. Closed plans never reopen.
- Run the three Foundational Reader Trials in fresh sessions through the real
  product. Continue each conversation through owner challenge and correction.
- Record the owner's pass or fail separately for each trial. A failed trial
  blocks v2.0.0 and triggers the Plan 030 amendment-or-successor path.
- After all gates pass, publish release notes, deploy, tag v2.0.0, verify the
  live assets and health, and preserve the previous image for rollback.

## Out of scope

- OpenRouter, additional model providers, provider rankings, automatic model
  routing, or silent model fallback.
- New retrieval, answer, conversation, voice, allowance-ledger, or credential
  architecture without an owner-approved Plan 030 amendment.
- Accounts, cloud sync, payments, subscriptions, donations, ads, or commercial
  product work.
- Hard-coded Reader Trial answers, trial-specific retrieval branches, expected
  prose matching, or automated Reader Trial acceptance.
- Native mobile applications or a visual redesign.
- Automatic wallet recharge or an owner spend above the accepted ceiling.

## Deterministic proof / verification floor

1. The exact release candidate passes Plan 028's full DeepSeek, sponsored
   allowance, BYOK, privacy, cost, concurrency, and failure contracts.
2. The exact release candidate passes Plan 029's full retrieval, evidence,
   chronology, conversation, answer, quote, spoiler, and style contracts.
3. Cost evidence includes every request and every terminal outcome. Totals
   reconcile with DeepSeek usage fields and the sponsored ledger.
4. Parallel load proves reader and global ceilings remain hard across processes,
   restarts, cancellation, and stale-reservation recovery.
5. Browser proof covers normal allowance, last question, exhausted state, UTC
   reset, BYOK continuation, provider outage, disabled sponsored mode, phone,
   desktop, installed PWA, keyboard, screen reader, and reduced motion.
6. Privacy inspection finds no credential, prompt, answer, chapter text, raw IP
   address, cookie, raw provider body, raw tool payload, or reasoning in logs,
   metrics, receipts, browser storage, or public evidence.
7. Rollback proof restores the previous image and compatible database state,
   then returns to the release candidate without losing conversations or budget
   truth.
8. `uv run pytest -q`, `uv run ruff check src/weaver tests`, `npm test`, and
   `npm run build` pass on the tagged source. Committed `src/weaver/web/dist/`
   matches the build.
9. Two independent reviews pass: intelligence/privacy/trial validity first,
   then cost/concurrency/operations/rollback.
10. The owner records a separate decision for each Foundational Reader Trial,
    the production allowance, and the final v2.0.0 launch.

## STOP conditions

- If Plan 028 or Plan 029 is not owner-accepted and closed, stop.
- If an admitted Plan 029.5 remains open, stop before release qualification.
- If the exact DeepSeek model, price version, prompt, code, library, or index
  changes during qualification, invalidate affected evidence and restart the
  relevant gate.
- If measured worst-case exposure can exceed the accepted reader or global
  ceiling, stop for an owner-approved Plan 030 amendment or a rejected closure
  and successor plan.
- If live evaluation spend could exceed $5, stop before the request.
- If any Reader Trial fails, stop the launch. Record the failure and return to
  the owner for a Plan 030 amendment or a rejected closure and successor plan.
- If private material or credentials enter telemetry, evidence, or browser
  state, stop and contain it.
- If rollback cannot restore a working service without corrupting conversation
  or budget state, stop before deployment.
- If the owner has not explicitly accepted all three trials and the release,
  do not tag or deploy v2.0.0.

## Slices

1. **Admission and release-candidate freeze**
   - Admit only after Plans 028 and 029 close, plus Plan 029.5 if it was
     admitted. Freeze versions, budgets, private boundaries, and evidence sets.
2. **DeepSeek and intelligence requalification**
   - Re-run the complete Plan 028 and Plan 029 deterministic floors on the exact
     candidate. Repair bounded failures inside Plan 030 without changing the
     accepted Plan 028 or Plan 029 architecture.
3. **Cost, capacity, and allowance gate**
   - Measure complete-turn cost and latency under realistic sponsored use.
   - Prove parallel budget safety, present allowance options, and stop for the
     owner's production-cap decision.
4. **Reader and operations trial**
   - Run phone, desktop, installed PWA, accessibility, slow-network, outage,
     exhaustion, BYOK, monitoring, restart, and emergency-shutdown journeys.
5. **Foundational Reader Trials**
   - Run all three fresh-session, multi-turn trials through the real candidate.
   - Stop after each trial for the owner's explicit pass or fail decision.
6. **Independent review and release gate**
   - Complete both reviews, repair findings, run the full floor, prove rollback,
     and present the exact release evidence. Stop for owner launch approval.
7. **Publish and verify**
   - After approval, commit, push, tag v2.0.0, publish release notes, deploy
     through the existing workflow, verify live health and assets, and retain
     the previous image for rollback.
8. **Observe and close**
   - Observe the accepted live window, reconcile sponsored cost and failures,
     verify rollback readiness, and present the deployed evidence.
   - Stop for the owner's dated final accept or reject decision, then record
     closure and the measured plan budget.
