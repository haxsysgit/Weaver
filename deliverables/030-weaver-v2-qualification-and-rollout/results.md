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

## Sponsored preflight (CP3)

Not started. Every item stays open until proven on the release candidate.

- [ ] `WEAVER_SPONSORED_ENABLED=1`.
- [ ] Fresh price version and valid-until beyond the release date.
- [ ] Pass secret of at least 32 bytes.
- [ ] Funded provider balance covering the reservation.
- [ ] One real sponsored turn through the product path.
- [ ] Three-question allowance under the $1 ceiling and the $0.37 reservation.
- [ ] Exhaustion, UTC reset, and disabled-sponsored paths.
- [ ] No secret or provider body in logs or evidence.

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
