# Operational Preservation Cross-Checks

Use this when executing or reviewing preservation/alignment plans where the main artifact is outside the public repo, such as a private copy, live deployment snapshot, or generated artifact backup.

## Lesson from HaxJobs Plans 011-012

A green smoke test and path existence checks are not enough. A preservation plan can appear done while still failing the real goal: preserving useful private/live state before public cleanup.

## Cross-check shape

1. Re-read the plan's done criteria.
   - Treat the prior success output as untrusted.
   - Convert every checklist item into a concrete file/content/state check.

2. Verify preserved content, not just paths.
   - Check that the private copy contains the expected profile/CV/governance files.
   - Check that the preserved files still contain private markers and were not overwritten by public example data.
   - Do not print private values. Report labels such as `real candidate marker present` or `contact marker present`.

3. Verify the private copy cannot accidentally become the public repo.
   - Confirm the private copy has no `.git` directory.
   - Confirm the public repo status and `git ls-files` do not include the private-copy path.

4. Verify generated/live artifact snapshots by hash when possible.
   - File counts are a weak check.
   - Compare path sets and SHA-256 hashes between the live generated artifact directories and the local/private snapshot.
   - Print counts and pass/fail labels, not private filenames if filenames may reveal sensitive details.

5. Verify live peer alignment without mutating it unnecessarily.
   - If the plan already ran an approved updater, do not rerun it just to prove it worked.
   - Instead compare local `origin/main`, live `HEAD`, and live `origin/main`.
   - Check live `git status --short` allows only expected untracked generated/runtime dirs.

6. Verify live safety after alignment.
   - Run syntax/status checks that do not read secrets or DB contents.
   - Avoid `.env`, tokens, and database row dumps.
   - If checking a private profile exists, use `test -f` or a label-only marker check, not file printing.

## Good final evidence

A strong preservation review should produce at least:

- `VERIFICATION_PASSED plan_011_cross_check`
- focused private-copy smoke test output
- `VERIFICATION_PASSED plan_012_cross_check`
- `VERIFICATION_PASSED strict_011_012_artifact_cross_check`

The exact labels can differ, but the review must prove preserved content, artifact integrity, live alignment, and no accidental public tracking.
