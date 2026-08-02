# Review Ledger: Local browser chat entrypoint

## Status

Gate 1 research-tooling review complete 2026-08-02 (one PASS after repair).
The two required reviews below happen after the appraisal gate admits
implementation and the deterministic and manual evidence is complete.

## Required reviews

1. Runtime, API, streaming, cancellation, persistence, and privacy.
2. Browser UX, accessibility, responsive behaviour, and appraisal fidelity.

## Gate 1 review (2026-08-02)

Independent review of the appraisal command slice
(`src/weaver/chatgpt_appraisal.py`, its tests, contracts doc, learning.md,
dev-group playwright pin). Verdict: FIX, no blockers.

Findings and disposition:

1. Major: unproven required states did not fail visibly (probes recorded a
   miss but the command exited 0). Fixed: `unproven_probe_ids` helper plus
   stderr summary and exit 3 when a required state is unproven, evidence
   still written first.
2. Minor: profile directory name did not match the recorded
   `weaver-chatgpt-appraisal` name. Fixed: dir renamed in `build_paths`,
   module docstring, and test.
3. Minor: results.md/review-ledger.md were stale. Fixed: rewritten above.
4. Minor: untracked personal files in the tree are excluded from commits
   (standing policy).

Verify commands (reviewer-run): 18 focused tests passed; full suite 263
passed; ruff check and format clean; module imports; forbidden-API grep
clean (only the FORBIDDEN_APIS tuple itself); git status shows only the
expected slice files.
