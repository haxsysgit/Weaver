# Plan 030 Owner Decision

## Status

**Closed 2026-11-01. Accepted with a scope cut: v2.0.0 is released offline.**

## Decision

The owner accepted the v2.0.0 build on 2026-11-01 after all twelve Reader
Experience Trials passed the evaluator on the candidate (ten in the full run,
Trials 9 and 11 on the re-run after their fixes; see `results.md`). The owner
chose to release v2.0.0 to `main` and tag it, but not to deploy it.

Reason: the EC2 and Tailscale Funnel path was retired on 2026-10-17 (instance
`weaver-v1` stopped, deploy workflow disabled), and the owner moved the
domain, Cloudflare, and production environment work into Plan 039 rather than
reviving the old box. Releasing now records the finished product while the
next plans run.

## Scope cut (moved, not dropped)

- Public deployment, the Cloudflare launch (old CP7), production sponsored
  preflight, and rollback proof: Plan 039.
- Library coverage (the shelf ends at 3160; the novel is at about 3230):
  Plan 031.
- The three Foundational Reader Trials as a retrieval regression: folded into
  Plan 032, the retrieval verdict.
- The lorekeeper voice, reader card, and per-device opinions: Plans 034 and
  035. The next owner-accepted release after them is v3.0.0 at Plan 040.

## Known issues accepted with the release

- Trial 9 continuity slips (it forgot its own top five once).
- Fanfic threads use the server voice pack unless `WEAVER_VOICE=storyteller`.
- A stripped citation in mid-sentence can still leave a dangling word.
- Some answers drift between lowercase and normal capitalisation.
