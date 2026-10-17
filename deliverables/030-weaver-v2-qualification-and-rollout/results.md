# Plan 030 Results

## Status

Checkpoint 1 in progress. Plan 030 admitted 2026-10-17. Plans 028 and 029 are
closed. The 2026-10-17 read-only audit is recorded in
[`draft-audit.md`](draft-audit.md); it is not qualification evidence and does
not replace this results file.

## Checkpoint 1: admission and live baseline

- Admission: owner admitted Plan 030 on 2026-10-17.
- Release branch: `plan-030`, created from `main` at `1d32797`.
- `main` is 20 commits ahead of `origin/main`. No push was made.
- Deterministic floor on the frozen source: 628 backend tests, 132 frontend
  tests, Ruff, `tsc --noEmit`, and `weaver doctor` all pass.
- Read-only audit: [`draft-audit.md`](draft-audit.md).
- Takedown 2026-10-17: instance `weaver-v1` stopped, its 20 GB data volume
  preserved, the Tailscale Funnel URL no longer answers, and the old GitHub
  Actions deploy workflow disabled. The instance was not terminated.
- Public surface: retired v1.2.1. The Cloudflare launch is CP7 inside Plan
  030, set up with the owner.

| Item | Frozen value |
| --- | --- |
| Source commit | `1d32797` (frozen baseline) |
| Package version | `2.0.0` (bumped 2026-10-17) |
| Branch | `plan-030` |
| Model | `deepseek-flash` (DeepSeek V4.1 Flash alias) |
| Price version | `deepseek-flash-2026-09-10-peak` |
| Price valid until | `2026-10-10T00:00:00+00:00` (expired, must refresh) |
| Prompt resources | `src/weaver/prompts/identity.md`, `src/weaver/prompts/soul.md` |
| Local library | chapters 1 to 3160 |
| Local retrieval index | chapters 1 to 3127 (Plan 018.5 scope cut) |
| Conversation schema | version 3 |
| Frontend assets | `weaver--NzoW5Us.js`, `weaver-BOySgbSR.css` |
| CP2 frontend assets | `weaver-BSzUiTtF.js`, `weaver-BOySgbSR.css` |
| Retired live deployment | v1.2.1, `weaver-D01JqGeM.js`, `weaver-BfjopLb8.css`, `/api/access` 404, stopped 2026-10-17 |
| Current host bundle | on the stopped `weaver-v1` volume, export pending |
| Public surface | Cloudflare launch in CP7 |
| Live provider spend | none in this checkpoint |

Owner decisions at the checkpoint 1 gate:

1. Resolved 2026-10-17: 7 checkpoints.
2. Resolved 2026-10-17: honest rite plus BYOK. Fake mode skips sponsored
   consent; local live without a sponsored ledger routes the reader to BYOK.
3. Resolved 2026-10-17: take the public v1.2.1 site down completely and retire
   the EC2 and Tailscale Funnel path. Done: instance stopped, data volume
   preserved, deploy workflow disabled.
4. Resolved 2026-10-17: the Cloudflare launch is CP7 inside Plan 030. The
   service shape is decided and proven in CP7 with the owner.

## Checkpoint 2: first-run access and held-out set

Status: evidence complete; owner gate pending.

### Implementation

The adopted honest-rite-plus-BYOK path is implemented.

- `FirstNightmareSetup` now receives `sharedStatus` and `voiceBound`.
- Fake mode shows "Continue in fake mode", skips sponsored consent, and goes
  to the appraisal.
- Local live without a sponsored ledger shows "No shared allowance is
  configured on this server", offers no shared-allowance button, and routes
  the reader to BYOK or Enter later.
- An exhausted reader or a closed shared allowance is explained honestly and
  routes to BYOK.
- A reader with a bound key can continue with that key without being sent to
  Settings.
- An access-status failure with no bound key is treated as unavailable, so the
  composer cannot submit into a 503. An API without `getAccess` keeps the
  legacy send path instead of being blocked.
- The typed draft is preserved and only submission is disabled.

### Browser proof

Headless Chrome against the built frontend, 2026-10-17. No live model call.

| Path | Result |
| --- | --- |
| Fake mode | "Fake mode is active", no shared button, appraisal reached, rite completed, send enabled, fake turn returned 2 messages, 0 consent calls |
| Local live without a sponsored ledger | "No shared allowance is configured", no shared button, "Use my own key" opened Settings Advanced, 0 consent calls |
| Local live with a bound key | "Continue with your own key", appraisal reached, 0 consent calls |

### Verification

- `628` backend tests passed.
- `141` frontend tests passed, including 9 new first-run and access regressions.
- Ruff passed.
- `tsc --noEmit` passed.
- The production build passed and is committed in `src/weaver/web/dist/`.
- Final build assets: `weaver-BSzUiTtF.js`, `weaver-BOySgbSR.css`.

### Held-out set

Eight private cases across five capabilities: alias resolution, character
version, timeline boundary, ambiguous referent, and correction.

- Stored at `.weaver/evaluation/plan030/heldout.json` and not committed.
- The manifest stores questions and required behaviors only. It contains no
  expected answers, no novel prose, and no model reasoning.
- Shape validated on 2026-10-17: 8 unique IDs, 5 capabilities, no answer
  fields, no null turn lists.
- Live execution is queued for CP3 under the $5 provider cap. The cases are
  not copied into prompts, retrieval rules, fixtures, or product copy.

## Sponsored preflight (CP3)

Status: attempted on a local sponsored server; blocked by the sponsored
answer-call limit. No completed sponsored turn yet.

- [x] `WEAVER_SPONSORED_ENABLED=1`.
- [x] Pass secret of 64 hex characters.
- [x] Explicit price valid-until `2026-11-30` for the local test. The production
  default remains stale and is still a CP7 preflight item.
- [x] Provider balance `$9.32` on 2026-10-17, enough for the `$5` cap and the
  `$0.37` reservation.
- [ ] One real sponsored turn completed through the product path.
- [ ] Three-question allowance under the `$1` ceiling and the `$0.37` reservation.
- [ ] Exhaustion, UTC reset, and disabled-sponsored paths.
- [x] No secret or provider body in this record.

### One real sponsored turn

The local server accepted the consent, reserved the turn, and ran one real
question through the reading and publication path.

- Terminal: `failed` after 58.1 seconds and 10 tool events.
- The first answer failed the deterministic publication checks with
  `unsupported_chapter`, `long_quote`, and `changed_quote`.
- The single repair call was refused with `answer_call_limit`. The sponsored
  turn allows one answer call, so the accepted Plan 029 one-repair ceiling
  cannot run under sponsored access.
- Ledger: `$0.008077` settled, `$0.991923` remaining on the global daily
  ceiling, reader at 2 remaining questions.
- The answer text was withheld. No private answer, prompt excerpt, or passage
  is recorded here.

This is a P1 integration defect between the accepted Plan 028 sponsored limit
and the accepted Plan 029 repair ceiling. The owner decision is whether to
allow one repair answer call under sponsored access. The total call cap stays
at 8, the one-repair ceiling stays, and the `$0.37` reservation covers the
second answer's `12,288`-token output limit.

The live held-out set is deferred until this decision because the sponsored
path is the production path. CP3 spend so far: `$0.008077`.

## DeepSeek qualification

Pending versioned quality and operations evidence, full failure denominator,
owner qualification, and the exact production execution profile.

## Capacity and allowance

Pending complete-turn request, token, and dollar cost, concurrency, hard-budget
evidence, allowance options, and owner decision.

## Release candidate

Pending version, migration, backup, restore, bundle, image, load, device,
privacy, security, and rollback evidence.

## Foundational Reader Trials

Pending the owner's separate fresh-session accept or reject record for canon
reconstruction, time-aware comparison, and canon-grounded what-if, including
their follow-up conversations.

## v2.0.0 rollout

Pending tag, exact artifact, deployment, public health, safe launch metrics,
incidents, rollback status, and measured plan budget.
