# Plan 030 Learning Note

## Gate status

**Admitted 2026-10-17.** Plans 028 (closed 2026-10-02) and 029 (closed
2026-10-17) are owner-accepted. Side UI Plan 029.5 is not admitted and does
not block. The 2026-10-17 read-only audit is complete in
[`draft-audit.md`](draft-audit.md). It is audit evidence, not an independent
review and not an acceptance decision. CP1 through CP4 are complete. The
public privacy copy was approved on 2026-10-17. CP5 is paused: Trial 1 and
Trial 2 were not accepted on voice, structure, and speed. The experience
redesign and Plan 030 amendment-or-successor decision are pending.

## Checkpoint observations

- CP2: the adopted honest-rite-plus-BYOK path is implemented. Fake mode skips
  consented shared use. Local live without a sponsored ledger routes to BYOK.
  The composer fails closed on an access-status error when no key is bound.
- CP2: 628 backend and 141 frontend tests pass; the production build is
  committed. Nine new frontend regressions cover the first-run paths.
- CP2: eight private held-out cases across five capabilities are stored in
  ignored state. They are not in prompts, fixtures, or product copy.
- CP2: no paid model call. Live held-out execution waits for the CP3 cost and
  sponsored preflight gate.
- CP3: provider balance is `$9.32`, enough for the `$5` cap and the `$0.37`
  reservation.
- CP3: the first sponsored turn failed closed because the sponsored turn
  allowed one answer call. The accepted Plan 029 answer path uses a draft, a
  final reading pass, and one repair. The turn needed three tool-less calls.
- CP3: `SponsoredTurn.MAX_ANSWER_CALLS` is now 3; total calls stay at 8;
  commit `9860c96`. A clean sponsored turn then completed with `2,390`
  characters, `9` citations, and `$0.014149`.
- CP3: a clean allowance run completed three questions, then refused the
  fourth with `429 reader_exhausted`. The three-turn cost was `$0.026748`.
- CP3: the first held-out run completed seven of nine turns for `$0.199925`.
  `version-01` failed closed; `timeline-02` and `correction-01` returned the
  safe spoiler boundary.
- CP3: the owner selected the boundary redesign. `timeline-02` and
  `correction-01` moved to reader chapter 3160; `boundary-01` was added at
  chapter 900 to expect the safe boundary.
- CP3: the held-out rerun ran nine cases and ten turns for `$0.225874`.
  Eight turns completed. `version-01` and `correction-01` failed closed with
  unsupported chapters and long or changed quotations. `version-02` returned
  the safe boundary unexpectedly; `boundary-01` returned it as expected.
- CP3: total live spend is `$0.503755` of `$5.00`.
- CP3: the measured complete sponsored turn is `$0.009` to `$0.014`. The owner
  confirmed three questions per reader, a `$1` global daily ceiling, and the
  `$10` wallet.
- CP3: the version-comparison and correction quality defect is carried to CP4
  for a sharper repair instruction and a held-out rerun.
- CP4: the sharper repair fixed `version-01`. The rerun completed seven of ten
  turns for `$0.239550`; the failures moved to `alias-01`, `timeline-02`, and
  `correction-01`.
- CP4: the no-quote repair fixed `alias-01` and `correction-01`. The latest run
  completed eight of ten turns for `$0.247081`. `version-02` and `timeline-01`
  failed closed; `boundary-01` returned the safe boundary as expected.
- CP4: total live spend is `$0.990386` of `$5.00`.
- CP4: the remaining failures move between runs. Further tuning against the
  held-out diagnostic risks overfitting it. The Reader Trials remain the real
  acceptance gate.
- CP4.5: the owner rejected the witness/essay voice, the response structure,
  and the 137.7s and 149.5s turns. The accepted amendment is a buddy voice,
  clear-night rail, vs mode, and a 10/20/45 second speed target.
- CP4.5: the intent profile cut the quick p50 to 11.4s and the vs turn to
  57.8s. The deep max is still 109.3s. The final reading pass and the tool loop
  are the remaining cost.
- CP4.5: two web processes cannot share the embedded Qdrant index. One process
  at a time is an operating constraint, not just a test setup detail.
- CP4.5: the owner asked for config-selected voice packs. `buddy` is the chat
  default; `storyteller` preserves the literary voice for prose and fan
  fiction. The pack is the register foundation, not the full fan-fiction mode.
- CP4.5: the first vs answer opened with "same answer as before", a final-pass
  artifact. The prompt fix held on the next live sample.
- CP4.5: the quick final-pass skip cut the clean quick turn to 6.2s, but quick
  p50 is 14.1s/p95 22.8s and deep p95 is 58.6s. Publication repair and the
  two-character evidence loop are the remaining cost.
- CP4.5: the clear-night rail is transparent with the star web crossing it; the
  mobile rail is a blurred edge sheet.
- CP4.5: the full web suite hang was a test-stub signature bug, not the SSE
  resume path. The one-line send stubs did not accept `final_pass`, so the
  concurrent-turn test waited on a send that raised. The stubs accept it now.
- CP4.5: the owner revised the speed target to quick p50 15s/p95 25s and deep
  p95 60s. The measured 14.1s/22.8s and 58.6s are inside it.
- CP4.5: the owner accepted the two voice packs with config selection. A
  per-conversation picker waits for the fan-fiction mode.
- CP4.5: CP4.5 is accepted. The floor is 640 backend tests, 141 frontend
  tests, Ruff, `tsc`, and the production build. CP5 re-trials are next.
- CP3: the local test used an explicit future price date. The production price
  default is still stale and remains a CP7 preflight item.

## Owner-confirmed direction

- Plan 030 is the final qualification, rollout, and launch plan for v2.0.0.
- Weaver remains DeepSeek-only for this release.
- Normal readers use the owner-funded shared daily allowance. Optional direct
  DeepSeek BYOK remains under Advanced.
- The Plan 028 starting limits are three sponsored questions per reader per
  UTC day, one active turn, a $1 global daily ceiling, and a manually funded
  $10 wallet. Confirmed 2026-10-17 from CP3: a complete turn costs $0.009 to
  $0.014, and the $1 ceiling supports about 23 to 37 readers per day.
- Production limits may change only after complete-turn measurement and owner
  approval.
- Accounts, subscriptions, reader payments, donations, ads, automatic top-up,
  and silent model fallback remain out.
- The current EC2, Compose, GitHub Actions SSH, and Funnel path remains the
  default release path, with the bounded pipeline repairs listed in the plan.
- The owner alone accepts the allowance, Reader Trials, launch, and closure.
- (2026-10-20) The three Founder Trials are not the final gate. The owner
  replaced them with the twelve Reader Experience Trials: all twelve must pass
  on the conversation and storytelling axes. The old three are retrieval
  regression only. The contract was signed off on 2026-10-20.
- (2026-10-20) Evaluator run 1: 9/12 trials reached, 22/49 turns failed closed.
  The product's publication checks, not the reader, end the conversation. The
  long thread failed every turn. The buddy voice lands in the clean turns, but
  the answers are long and the first turn interviews the reader. A quote-strip
  safety net, a read-every-turn and cite-only-opened rule, a 120-word guide,
  and a voice example are in. Run 2: 59/60 turns completed; the long thread
  went 9/9 failed to 9/9 clean; the first-timer spoiler turn is fixed with the
  protect-mode boundary. The fanfic trial still fails on empty storyteller
  answers. The evaluator is not satisfied; the fanfic fix and judge are next.
- (2026-10-17) The public privacy page, README privacy section, and live/fake
  footer copy are approved as drafted.
- (2026-10-17) Trial 1 and Trial 2 are not accepted. The owner rejected the
  witness/essay voice and wants a chat-buddy, gen-z/reddit register, a faster
  pipeline, a vs battle structure, and a transparent star-web sidebar. The
  redesign and plan boundary are open decisions.
- (2026-10-17) The semantic claim inspector is a private qualification tool.
  It is not an always-on production call and cannot decide canon.
- (2026-10-17) The compact turn brief remains the production design. The
  reading loop resolves ambiguous referents, aliases, character versions, and
  timelines from direct source evidence; Plan 030 owns the held-out proof.
- (2026-10-17) The live public surface is v1.2.1. The v2 deploy is the first
  sponsored deployment and the first deployment of the Plan 029 system.
- (2026-10-17) Plan 030 is admitted. Execution, paid qualification, deploy,
  tag, and release happen only inside this admitted plan and its owner gates.
- (2026-10-17) The release branch carries Plan 030 work. No push to `main`
  before the launch gate.
- (2026-10-17) Execution uses 7 owner checkpoints, one per major slice, with
  Cloudflare launch, observation, and closure as CP7.
- (2026-10-17) Local access uses the honest rite plus BYOK. Fake mode skips
  sponsored consent. Local live without a sponsored ledger routes the reader
  to BYOK. No loopback server-key voice and no local sponsored ledger.
- (2026-10-17) The EC2 and Tailscale Funnel deployment is retired. The public
  v1.2.1 site is taken down. The v2 public surface moves to a Cloudflare
  domain after the Plan 030 qualification and trials.
- (2026-10-17) The Cloudflare launch is CP7 inside Plan 030. The exact service
  shape is decided and proven in CP7 with the owner.

## Hypotheses, not decisions

1. The accepted DeepSeek model can pass the finished Plan 029 system within a
   predictable complete-turn cost.
2. Median, p95, maximum, and full failure-denominator measurements can support
   an honest daily allowance and global ceiling.
3. The Plan 028 reservation ledger can keep the global ceiling hard under
   parallel traffic, restarts, cancellation, and abuse attempts.
4. The existing v1 release path can carry v2.0.0 after migration, load,
   rollback, and pipeline repairs without new AWS architecture.
5. A release branch plus a retained previous image can make the deploy gate
   and the v1.2.1 rollback real.
6. The Funnel client address can be trusted through the configured proxy
   header, or a different abuse control is needed.

## Owner gates after admission

1. Confirm the frozen release candidate and live evaluation budget.
2. Review DeepSeek quality, complete-turn cost, latency, and failure evidence.
3. Set the production reader allowance, global daily ceiling, maximum turn
   shape, and wallet amount.
4. Approve the sponsored production preflight and the release branch.
5. Approve the exact release candidate and rollback evidence.
6. Accept or reject each Foundational Reader Trial in a fresh session.
7. Authorize public v2.0.0 release and the launch merge.
8. Record the final launch accept, reject, or scope-cut decision.
