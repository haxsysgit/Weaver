# Private/public release lane pattern

Use this when a repo is both a private live deployment and about to become a public product.

## Trigger

The repo contains user-specific profile data, generated artifacts, deployment paths, or live runtime state, and the next milestone is a public cleanup or package release.

## Sequence

1. **Freeze the private copy first**
   - Create a non-git private copy outside the public checkout.
   - Preserve profile data, CV/application sources, generated artifacts, and deployment-specific scripts.
   - Add a private marker file that says the copy must not be pushed, published, or synced publicly.

2. **Snapshot live/generated artifacts before updating the live peer**
   - Inspect the live checkout read-only first.
   - If only untracked generated/private dirs exist, copy them into a local private snapshot.
   - If tracked source files are modified, STOP and report. Do not reset over them.

3. **Align the live peer via the approved update path**
   - Use the repo-approved updater, not ad-hoc reset commands, unless the plan explicitly says otherwise.
   - Verify local HEAD, origin/main, and the live checkout HEAD match after update.
   - Verify syntax/service status without printing secrets.

4. **Only then scrub the public repo**
   - Remove/redact personal data, private absolute paths, private profile files, generated CV/output artifacts, and user-specific fallback copy.
   - Replace with example profiles/templates and config-driven paths.

## Verification pattern

After plan-index or marker-file changes, create a focused temporary script with a `/tmp/hermes-verify-*` prefix. Check the exact changed paths, run `git diff --check` for plan/index files, verify private-copy preservation facts, remove the temp script, and report the result as ad-hoc verification, not suite green.

## Pitfalls

- `git diff --name-only` misses untracked plan files. Use `git status --short` when verifying expected changed paths.
- Do not let a public scrub run before the private copy exists and has been smoke-tested.
- Do not update the live peer if it has tracked source modifications not present locally.
- Do not read or print `.env`, DB contents, tokens, or credential files while preserving/snapshotting.
