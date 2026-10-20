# Plan 030: Weaver v2.0.0 qualification and rollout

> **Executor instructions:** Qualify the finished Weaver system on its admitted
> DeepSeek model, measure the real sponsored cost, let the owner set the public
> daily allowance, run the twelve Reader Experience Trials, and release v2.0.0
> only after the owner accepts the complete product.

## Status

- **Tooling:** Plan 028 sponsored-access inspection, Plan 029 evaluation tools,
  fake mode, pytest, Ruff, root Vitest and Vite commands, browser and installed
  PWA trials, bounded live DeepSeek runs, Docker and the retired EC2 image
  history, the disabled GitHub Actions deploy workflow, Cloudflare launch
  tooling selected in CP7, rollback proof, Chrome DevTools browser probes, and
  the 2026-10-17 read-only draft audit in
  [`draft-audit.md`](../deliverables/030-weaver-v2-qualification-and-rollout/draft-audit.md).
- **State:** drafted 2026-08-24, rewritten 2026-09-23 for the DeepSeek-only
  sponsored direction, amended 2026-10-17 after Plans 028 and 029 closed.
  **Admitted 2026-10-17.** Plan 029.5 is not admitted and does not block.
  **Checkpoint cadence: 7 (owner decision 2026-10-17).** The EC2 and Tailscale
  Funnel path is retired. The public v1.2.1 site is down: instance `weaver-v1`
  stopped 2026-10-17, the `/srv/weaver` data volume preserved, and the old
  deploy workflow disabled. The Cloudflare launch is CP7 inside Plan 030.
  **CP1 through CP4 are complete. CP4.5 is complete: buddy and storyteller
  voice packs, revised speed target met, vs mode, clear-night rail, green
  floor. The Reader Experience Trial contract is signed off. CP5 evaluator
  run 1 failed 22 of 49 turns; run 2 completed 59 of 60. The first-timer
  failure is fixed. The fanfic empty-answer failure is fixed by the skills and
  domain amendment: a private live missing-scene turn wrote 3,900 characters
  labelled as invention, and a continuation turn in the same thread wrote
  4,152 characters consistent with it. Evaluator run 5 put the twelve trials
  through the skills build: 10 of 12 pass, the first timer (2 of 5 turns) and
  the theory (1 of 5) are open, and no suite is accepted. The evaluator is not
  satisfied yet.**
- **Depends on:** Plan 028 closed 2026-10-02 with sponsored access and financial
  safety accepted; Plan 029 closed 2026-10-17 with the intelligence and
  conversation system accepted. Plan 029.5 is not admitted.
- **Priority:** P1. This is the v2 qualification and owner-controlled public
  release gate.
- **Effort:** L to XL.
- **Risk:** High. This plan combines real model cost, anonymous public traffic,
  private-source retrieval, a retired v1.2.1 baseline, a new Cloudflare launch
  target, rollback, and owner-only Reader Trial decisions.
- **Budget:** about 220k to 360k agent-context tokens for qualification, browser
  proof, release work, and two independent reviews. Live provider spend is
  capped at $5 unless the owner explicitly changes it; agent-context spend is
  measured separately and recorded in `results.md`. The earlier $2.50 to $10.80
  estimate is superseded because it exceeded the live cap and mixed executor
  tokens with provider cost. Re-base the provider estimate from Plan 029's
  measured $1.164388 and add a per-trial reserve. Automatic top-up remains
  forbidden.

## Owner direction (locked decisions)

1. (2026-08-24, amended 2026-09-23) Weaver v2 uses DeepSeek only. There is no
   provider tournament or active model pool in this release.
2. (2026-09-23) Normal readers use the owner-funded shared daily allowance from
   Plan 028. Optional browser-local DeepSeek BYOK remains under Advanced.
3. (2026-09-23, confirmed 2026-10-17) The Plan 028 starting limits are three
   sponsored questions per reader per UTC day, one active sponsored turn, a $1
   global daily ceiling, and a manually funded $10 wallet. The CP3 measurement
   supports keeping them: a complete turn costs $0.009 to $0.014, and the $1
   ceiling supports about 23 to 37 readers per day.
4. (2026-09-23) Weaver is a fan product. Accounts, subscriptions, reader
   payments, donations, ads, and automatic wallet recharge stay out.
5. (2026-08-24) Quality is measured through the finished Plan 029 reading and
   conversation system, never through isolated trivia prompts.
6. (2026-08-24) Every failed, cancelled, retried, incomplete, and exhausted turn
   remains in the denominator. Failed evidence cannot disappear from reports.
7. (2026-08-24, rewritten 2026-10-20) The twelve Reader Experience Trials are
   fresh-session, multi-turn product conversations judged on two axes:
   conversation and storytelling. The old three Foundational Reader Trials
   remain a retrieval regression set. Trial answers are never hard-coded into
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
12. (2026-08-24, amended 2026-10-17) Release uses the existing GitHub Actions
    and container build, with the public deploy target moved to Cloudflare in
    CP7. The EC2 and Tailscale Funnel path is retired, and the old deploy
    workflow is disabled. The Cloudflare path needs a CI test job, a versioned
    artifact and rollback target, a health check, a pre-deploy backup, and a
    release-branch deploy gate.
13. (2026-10-17) The semantic claim inspector remains a private qualification
    tool. It is not an always-on paid production call and cannot automatically
    decide canon. Source reading and the owner decide truth.
14. (2026-10-17) The compact turn brief remains the production design. It
    preserves the actual ask, prior positions, explicit version signals,
    challenge state, and canonical item links. The reading loop resolves
    ambiguous referents, aliases, character versions, and timeline details
    from direct source evidence. Plan 030 owns the held-out proof of that
    resolution.
15. (2026-10-17) Plan 030 is admitted. Implementation, paid qualification,
    deploy, tag, and release happen only inside this plan and its owner gates.
16. (2026-10-17) No push to `main` before the owner's launch approval. The old
    `main` deploy workflow is disabled and the EC2 and Tailscale Funnel path is
    retired. Plan 030 work runs on a release branch or a gated workflow, and
    the launch merge is a separate owner gate.
17. (2026-10-17) The old live surface was v1.2.1 and is now down. The v2 public
    surface is the Cloudflare launch in CP7, and it is the first sponsored
    deployment and the first deployment of the Plan 029 reading system. The
    release candidate must record the retired baseline and the Cloudflare
    rollback target.
18. (2026-10-17) Local access uses the honest rite plus BYOK. Fake mode skips
    sponsored consent. Local live without a sponsored ledger explains that no
    shared allowance is configured and routes the reader to BYOK. This plan
    does not add a loopback server-key voice or a local sponsored ledger.
19. (2026-10-17) The EC2 and Tailscale Funnel deployment is retired. The public
    v1.2.1 site is down. The v2.0.0 public surface moves to a Cloudflare domain
    in CP7, after the qualification, trials, and review are accepted.
20. (2026-10-17) The Cloudflare launch is CP7 inside Plan 030. The exact service
    shape (Cloudflare Tunnel to a container host, Cloudflare Containers, or
    another supported target) is decided and proven in CP7 with the owner.

## Adopted amendments (2026-10-17)

These were adopted with the plan admission on 2026-10-17. They are binding on
execution and come from the read-only audit in
[`draft-audit.md`](../deliverables/030-weaver-v2-qualification-and-rollout/draft-audit.md).

1. **Release branch and deploy gate.** Work on a release branch. Do not push
   `main` before the launch gate. The launch merge is its own owner decision.
2. **Sponsored production preflight.** Require `WEAVER_SPONSORED_ENABLED=1`, a
   fresh price version and valid-until beyond the release date, a pass secret
   of at least 32 bytes, a funded provider balance, and one real sponsored turn
   on the release candidate before any public deploy.
3. **First-run and local access.** Adopted path: honest rite plus BYOK. Fake
   mode skips sponsored consent. Local live without a sponsored ledger
   explains that no shared allowance is configured and routes the reader to
   BYOK. The path gets a real integration regression. No loopback server-key
   voice and no local sponsored ledger in this plan.
4. **Held-out resolution proof.** Add a fresh held-out conversation set for
   ambiguous referents, aliases, character versions, and timeline points. No
   expected-string matching.
5. **Deploy pipeline.** Add a CI test job, a versioned deploy artifact and
   digest, a retained previous deployment, a health check, a pre-deploy
   backup, and a deploy gate that does not run on unreviewed `main` pushes.
   Prove rollback with the retained deployment.
6. **State bundle.** Record the current host's novel, index, notebook, and
   model versions. Export the private bundle from the stopped instance's
   volume through a snapshot or helper instance, never by exposing the old
   site. Refresh `scripts/build_prod_bundle.py` output when it differs from the
   candidate, and prove the deployed reading tools see the expected shelf.
7. **Rollback and backup.** Back up the private state bundle before the
   Cloudflare deploy. Prove restore and conversation, schema, and
   sponsored-ledger integrity on a copy. Prove the retired v1.2.1 database
   compatibility or define the supported rollback point.
8. **Release metadata.** Bump `src/weaver/__init__.py` to 2.0.0, tag the
   deploy artifact by version and digest, and prove the built wheel reports
   2.0.0.
9. **Public privacy copy.** Replace the absolute "novels never leave the
   machine" claim with the real data flow. Add a public privacy page and a
   robots policy. Make the deployed footer accurate.
10. **Trial rubric.** Each trial includes at least one challenge turn and one
    correction turn. Record the exact question, follow-ups, environment reset,
    and the owner's separate pass or fail decision. The rubric uses the
    capabilities in `AGENTS.md`, without expected prose.
11. **CI tests and docs.** Add a test job before the deploy artifact build.
    Update `README.md`, `CONTRIBUTING.md`, `docs/architecture.md`,
    `docs/vision.md`, `TODO_future.md`, and the deploy comments for the v2
    access and reading model.
12. **Budget re-base.** Separate agent-context tokens from provider spend.
    Re-base the provider estimate from Plan 029's measured $1.164388. Add a
    per-trial reserve and prove the three-question allowance under the $1
    ceiling and the $0.37 reservation.

## Scope

- Freeze the accepted Plan 028 access boundary and Plan 029 intelligence build
  into one release candidate. Record exact model ID, model version when
  available, price version, prompt version, library/index versions, schema,
  assets, and source commit.
- Record the retired baseline: v1.2.1 was deployed and is now down,
  `/api/access` is absent, and Plans 028 and 029 are local commits ahead of
  `origin/main`. Create the release branch and freeze the deploy artifact
  digest.
- Run the sponsored production preflight and one real sponsored turn on the
  release candidate before the Cloudflare launch.
- Inspect the Cloudflare proxy request headers and prove the client address and
  network limit behave for two distinct readers.
- Export and refresh the private state bundle when the current host's novel,
  index, notebook, or model versions differ from the candidate, and record
  both sets of versions.
- Repair the first-run and local-live access path inside the accepted
  architecture, or record an owner-approved amendment before changing the
  access gate.
- Add the held-out conversation set for ambiguous referents, aliases, character
  versions, and timeline points.
- Add the CI test job, versioned deploy artifact and digest, retained previous
  deployment, health check, pre-deploy backup, and release-branch deploy gate.
- Update the public privacy copy, privacy page, robots policy, and the stale
  product documentation.
- Bump the package to 2.0.0 and prove the wheel and deploy artifact metadata.
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
  previous-deployment rollback, configuration rollback, and sponsored shutdown
  on a release-candidate environment.
- Repair bounded release-candidate defects inside Plan 030 when they preserve
  the accepted Plan 028 and Plan 029 architecture. If evidence requires a new
  allowance, credential, retrieval, conversation, or answer architecture, stop
  for an owner-approved Plan 030 amendment or close this plan as rejected and
  draft a successor. Closed plans never reopen.
- Run the twelve Reader Experience Trials in fresh sessions through the real
  product. Continue each conversation through owner challenge and correction.
  Judge both axes: conversation and storytelling. The old three are retrieval
  regression only.
- Record the owner's pass or fail separately for each of the twelve. A failed
  trial blocks v2.0.0 and triggers the Plan 030 amendment-or-successor path.
- After all gates pass, tag v2.0.0, publish release notes, deploy through the
  Cloudflare launch gate, verify live assets and health, and preserve the
  previous deployment for rollback.

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
7. Rollback proof restores the previous deployment and compatible database
   state, then returns to the release candidate without losing conversations
   or budget truth.
8. `uv run pytest -q`, `uv run ruff check src/weaver tests`, `npm test`, and
   `npm run build` pass on the tagged source. Committed `src/weaver/web/dist/`
   matches the build. If the default `uv` cache is not writable in the release
   environment, record the exact working `UV_CACHE_DIR` invocation.
9. Two independent reviews pass: intelligence/privacy/trial validity first,
   then cost/concurrency/operations/rollback.
10. The owner records a separate decision for each Foundational Reader Trial,
    the production allowance, and the final v2.0.0 launch.
11. The deployed artifact comes from the approved release branch or tag. `main`
    was not pushed before the owner's launch approval, and the live digest
    matches the approved candidate.
12. The sponsored preflight passes: enabled, fresh price version and valid-until,
    a pass secret of at least 32 bytes, a funded provider balance, one real
    sponsored turn, and the three-question allowance under the $1 ceiling and
    the $0.37 reservation.
13. The Cloudflare proxy client-address proof passes: two distinct readers do
    not share a network bucket, and the six-per-hour behavior matches the
    accepted design.
14. First-run proof passes in fake mode, the chosen local-live access path, and
    production. The shared-allowance path either completes or routes to BYOK
    without a stuck rite or a silently disabled send button.
15. The held-out resolution set passes: ambiguous referents, aliases, character
    versions, and timeline points, resolved from direct source evidence, with
    no expected-string matching.
16. Each Foundational Reader Trial includes at least one challenge turn and one
    correction turn. The owner records a separate pass or fail decision for each
    trial.
17. The deployed state bundle versions match the candidate. The reading tools
    see the expected shelf end, index version, notebook version, and model.
18. The CI test job is green on the tagged source. The deploy artifact is
    tagged by version and digest, the previous deployment is retained, the
    health check passes, and a pre-deploy backup restores without losing
    conversations or budget truth.
19. The wheel, deploy artifact, manifest, and release notes report 2.0.0. No
    deployed metadata still says 1.2.1.
20. The public privacy page, robots policy, deployed footer, `README.md`,
    `CONTRIBUTING.md`, `docs/architecture.md`, `docs/vision.md`, `TODO_future.md`,
    and deploy comments match the shipped behavior.
21. The verification record shows at least 628 backend tests and 132 frontend
    tests, with no decrease, plus green Ruff and production build.

## STOP conditions

- If Plan 028 or Plan 029 is not owner-accepted and closed, stop.
- If an admitted Plan 029.5 remains open, stop before release qualification.
- If the release branch is not separate from `main`, or any push to `main` would
  deploy before the owner's launch approval, stop.
- If the sponsored preflight is incomplete, if the pass secret is short, if the
  price date is past, or if the provider balance cannot cover the reservation,
  stop before the deploy.
- If the previous deployment is not retained, or rollback cannot restore a
  working service without corrupting conversation or budget state, stop before
  the deploy.
- If the current host's state bundle version is unknown or differs from the
  candidate and cannot be exported safely, stop.
- If the Cloudflare proxy client-address and network-limit proof fails or
  remains unverified, stop before public traffic.
- If the Cloudflare service shape cannot preserve the private state bundle,
  the fail-closed access gate, and the rollback target, stop before the launch.
- If the stopped instance's data volume cannot be exported without exposing the
  old site, stop.
- If the first-run shared-allowance path fails in the candidate and no owner
  decision covers the replacement path, stop.
- If the public privacy copy still claims the novels never leave the machine,
  stop before launch.
- If the CI test job is absent or red, stop before the deploy artifact build.
- If the version metadata is not 2.0.0, stop before the tag.
- If the exact DeepSeek model, price version, prompt, code, library, or index
  changes during qualification, invalidate affected evidence and restart the
  relevant gate.
- If measured worst-case exposure can exceed the accepted reader or global
  ceiling, stop for an owner-approved Plan 030 amendment or a rejected closure
  and successor plan.
- If live evaluation spend could exceed $5, stop before the request.
- If any Reader Experience Trial fails, stop the launch. Record the failure and
  return to the owner for a Plan 030 amendment or a rejected closure and
  successor plan.
- If private material or credentials enter telemetry, evidence, or browser
  state, stop and contain it.
- If the owner has not explicitly accepted all twelve trials and the release,
  do not tag or deploy v2.0.0.

## Slices

1. **Admission, live baseline, and release-candidate freeze**
   - Admit only after Plans 028 and 029 close, plus Plan 029.5 if it was
     admitted. Freeze versions, budgets, private boundaries, and evidence sets.
   - Record the retired baseline: v1.2.1 was deployed and is now down,
     `/api/access` is absent, and Plans 028 and 029 are local commits ahead of
     `origin/main`.
   - Create the release branch. Do not push `main` before the launch gate.
   - Record the completed takedown: `weaver-v1` stopped 2026-10-17, the
     `/srv/weaver` data volume preserved, and the old deploy workflow disabled.
   - Record the 7-checkpoint cadence, the honest-rite-plus-BYOK local access
     decision, and the Cloudflare CP7 decision.
   - Freeze the deploy artifact digest, the Cloudflare rollback target, and the
     current host's novel, index, notebook, and model versions.
   - Start the sponsored production preflight and the release-candidate
     version bump.
2. **DeepSeek and intelligence requalification**
   - Re-run the complete Plan 028 and Plan 029 deterministic floors on the exact
     candidate. Repair bounded failures inside Plan 030 without changing the
     accepted Plan 028 or Plan 029 architecture.
   - Repair the first-run and local-live access path, or record the owner's
     accepted alternative.
   - Run the held-out ambiguity, alias, version, and timeline conversations.
3. **Cost, capacity, and allowance gate**
   - Measure complete-turn cost and latency under realistic sponsored use.
   - Prove parallel budget safety, the three-question allowance under the $1
     ceiling, and the $0.37 reservation behavior.
   - Prove the sponsored preflight: enabled flag, fresh price, pass secret,
     funded provider balance, and one real sponsored turn.
   - Present allowance options and stop for the owner's production-cap
     decision.
4. **Reader and operations trial**
   - Run phone, desktop, installed PWA, accessibility, slow-network, outage,
     exhaustion, BYOK, monitoring, restart, and emergency-shutdown journeys.
   - Run the first-run journey in fake mode, the chosen local-live path, and
     production.
   - Prove the Cloudflare proxy client address and network limit for two
     distinct readers.
   - Verify the public privacy page, robots policy, footer, and AI-output
     disclosure.
5. **Reader Experience Trials**
   - Run all twelve fresh-session conversations through the real candidate.
   - Include at least one challenge or correction turn in each trial.
   - Judge both axes: conversation and storytelling. Storytelling is mandatory
     in Trials 3, 7, 11, and 12.
   - Run the old three Foundational Reader Trials as retrieval regression, not
     the final gate.
   - Stop after each trial for the owner's explicit pass or fail decision.
   - The full suite is
     `deliverables/030-weaver-v2-qualification-and-rollout/reader-experience-trials.md`.
6. **Independent review and release gate**
   - Complete both reviews, repair findings, run the full floor, prove rollback,
     and present the exact release evidence.
   - Prove the CI test job, versioned deploy artifact and digest, retained
     previous deployment, health check, pre-deploy backup, restore, and
     migration rollback.
   - Confirm the version is 2.0.0 and the public documentation matches the
     shipped behavior.
   - Stop for owner launch approval.
7. **Publish and verify**
   - After approval, merge the approved release branch, tag v2.0.0, publish
     release notes, deploy through the Cloudflare launch gate, verify live
     health and assets, and retain the previous deployment for rollback.
8. **Observe and close**
   - Observe the accepted live window, reconcile sponsored cost and failures,
     verify rollback readiness, and present the deployed evidence.
   - Confirm the old v1.2.1 surface remains down and the data volume is
     preserved for migration.
   - Stop for the owner's dated final accept or reject decision, then record
     closure and the measured plan budget.

## Checkpoints (7)

Owner-selected cadence on 2026-10-17. Every checkpoint ends with a short owner
report and an explicit gate. No checkpoint auto-advances.

1. **CP1: Admission, live baseline, release-candidate freeze.** Slice 1.
   Gate: baseline, branch, local access path, live takedown, and budget.
2. **CP2: Requalification, local access fix, held-out resolution.** Slice 2.
   Gate: evidence and diff review.
3. **CP3: Cost, capacity, allowance, sponsored preflight.** Slice 3.
   Gate: allowance numbers and live cap.
4. **CP4: Reader and operations journeys, privacy and docs.** Slice 4.
   Gate: copy and docs approval.
5. **CP5: Reader Experience Trials.** Slice 5.
   Gate: the evaluator runs all twelve trials through the product API, judges
   both axes, iterates until satisfied, and records the results. The owner
   gives the final acceptance on the evidence. The full suite is
   `deliverables/030-weaver-v2-qualification-and-rollout/reader-experience-trials.md`.
6. **CP6: Independent review and release gate.** Slice 6.
   Gate: release-candidate approval and launch authorization.
7. **CP7: Cloudflare launch, observe, close.** Slices 7 and 8. CP7 is inside
   Plan 030; the exact Cloudflare service shape is decided and proven in this
   checkpoint with the owner. Gate: final accept or reject and the measured
   budget.

## Experience amendment (CP4.5, 2026-10-17)

The owner ran Trial 1 and gave Trial 2 feedback. Both are not accepted. This
amendment keeps the work inside Plan 030 and adds one checkpoint before the
re-trials.

### Owner decisions

1. The witness/essay voice is rejected. Weaver talks like a Reddit/deadpan
   buddy: short, reactive, lowercase-friendly, contractions and natural slang,
   no essay shape, no headings unless asked, and a real follow-up rather than
   a canned offer.
2. Speed target (revised 2026-10-17): quick chat p50 15 seconds or less and
   p95 25 seconds or less; deep or vs p95 60 seconds or less. The original
   10/20/45 target was not reachable without cutting the deep reading pass.
   The trial turns measured 137.7 and 149.5 seconds before the rebuild.
3. Matchups use a vs structure, not a what-if story: versions and conditions,
   both kits, win conditions and counters, how it goes, verdict, difficulty,
   confidence, and what flips it. Canon, inference, and invention stay labeled.
4. The sidebar is a clear-night rail: transparent, the star web visible, thread
   points and a thin thread line instead of chat-app cards. Mobile gets a light
   edge sheet, not an opaque drawer.
5. Voice is config-selected. `buddy` is the chat default; `storyteller`
   preserves the literary voice for prose and fan fiction. Each pack is an
   identity and soul pair under `prompts/voices/`, selected by `WEAVER_VOICE`.
   Later fan fiction needs the same writing quality as the novel.
6. Quick turns skip the final reading pass when the first answer is already
   clean; deep and vs keep it.
7. CP5 is invalidated by the voice and experience change. The three Reader
   Trials re-run after CP4.5 is accepted.

### Scope

- Rewrite the packaged identity and soul to the buddy register while preserving
  evidence, citation, spoiler, and invention rules.
- Add an intent router and turn profiles: quick, discussion, deep/vs. Tune the
  tool budget, answer length, packet cap, final reading pass, and title call.
- Add a vs response mode with the structure above.
- Restyle the rail and mobile sheet to the clear-night direction.
- Measure speed on a representative private set before the re-trials.

### Out of scope

- New retrieval, evidence, or conversation durability architecture.
- Native mobile applications.
- Any visual redesign outside the rail and its mobile sheet.

### Verification floor

- Prompt-content tests prove the buddy rules and remove the witness voice.
- A private speed set measures p50 and p95 for quick, discussion, and deep/vs
  turns against the owner targets.
- A vs sample shows versions, kits, win conditions, how it goes, verdict,
  confidence, citations, and labels.
- Browser screenshots verify the transparent rail and the mobile edge sheet,
  with no horizontal overflow and 24px controls.
- 631 backend and 141 frontend tests or higher, Ruff, `tsc`, and the production
  build pass.
- No live call without the owner-approved cap. CP4.5 live spend is capped at
  `$1.00` on top of the `$0.990386` already spent.

### STOP conditions

- If the quick speed target cannot be met without dropping direct evidence,
  stop and report the tradeoff.
- If the voice, vs, or rail samples are rejected, iterate at CP4.5 rather than
  re-running the trials.
- If a change needs a new retrieval or evidence architecture, stop for a new
  plan.
- If the re-trials are reached, the owner still decides each pass or fail.

### Slices

1. **E1 Voice.** Rewrite identity and soul, answer blueprint, and voice tests.
2. **E2 Speed.** Intent router, turn profiles, packet cap, final pass, title
   call, and a private timing set.
3. **E3 VS.** Classifier, obligations, blueprint, and tests for the vs card.
4. **E4 Rail.** Clear-night CSS and the mobile edge sheet.
5. **E5 Gate.** Present samples, timings, screenshots, and the floor. Owner
   accepts or rejects CP4.5, then the Reader Experience Trials run.

## Skills and domain amendment (CP5, 2026-10-20)

The evaluator run and the fanfic re-run showed two structural problems. The
answer shape was chosen by a single hard classifier, so a hundred-chapter
recap and a one-fact lookup used the same machine. And the turn had no notion
of a canon thread versus a fanfic thread, so a prose request was validated
like a canon claim and returned empty.

### Owner decisions

1. Skills are loadable and lenient. The model chooses. It may load more than
   one related skill per message, and the system's job is to make each skill
   good and the catalogue clear, not to force one skill per turn.
2. A canon and fanfic split is required, not optional, so an invented
   continuation cannot corrupt canon context. The fanfic thread keeps the
   novel as a constraint and the thread as its own continuation.
3. Story-writing requests are prose, not recall. They label invention, they do
   not need a canon citation inside the invented text, and they still read the
   canon anchor before writing.

### Slices

1. **S1 Skills.** `src/weaver/skills/` with the catalogue, the router, the
   `load_skill` tool, per-skill budgets, shapes, quote rules, and worked
   examples. The catalogue sits in the system prompt as one line per skill.
   Loading a bigger skill raises the reading budget mid-turn.
2. **S2 Streaming.** The reader only sees the validated answer. Raw model
   tokens are buffered and never published; the validated text is published
   once, after the reading pass and any repair.
3. **S3 Domain.** Schema v4 adds `domain` and `fanfic_kind` to a conversation.
   The turn prompt switches on the domain, the profile routes fanfic skills,
   and the answer blueprint treats prose as prose.
4. **S4 Indicator.** The gathering state is three wobbly golden stars joined by
   a flowing thread, replaced by the mode visual at the first streamed word.
5. **S5 Evidence.** A private live fanfic trial: a missing scene and a
   continuation in the same thread, judged for label, canon anchor, voice, and
   consistency. Results go to `results.md`, never a public file.

### Verification floor

- 686 backend and 141 frontend tests or higher, Ruff, `tsc`, and the
  production build pass.
- Router tests cover the scope ladder: fact, passage, scene, arc, versus,
  theory, correction, discussion, company, discovery, lore, and the three
  fanfic skills.
- A companion answer is not failed for missing citations; a canon answer still
  is.
- The fanfic trial writes a labelled missing scene and a consistent
  continuation in the same thread, and does not cite an invented event to a
  chapter.
