# Live checkout alignment before writing plans

Use this when an improve/advisor run is happening in one checkout, but the project also has a live peer checkout that may have uncommitted source changes, and the user wants alignment before plans are finalized.

Example shape: Jade/local checkout plus Archilles/VPS live checkout.

## Pattern

1. Pause plan-writing.
2. Inspect both checkouts read-only first:
   - local: `git status --short && git branch --show-current && git log --oneline -5`
   - peer: `ssh <peer> 'cd <repo> && git status --short && git branch --show-current && git log --oneline -5'`
3. On the peer, inspect diffs before committing. Commit only source-worthy tracked changes. Leave generated artifacts, runtime outputs, PDFs, images, logs, DBs, and ignored/private data uncommitted unless the user explicitly asks.
4. Run the smallest relevant verification on the peer before committing. For CV-source changes, run the CV/source validator tests, not the whole app if that would be wasteful.
5. Commit on the peer with repo-local git identity if needed. If the peer cannot push because it lacks GitHub auth, fetch its branch from the local checkout and push to the canonical remote from the authenticated local checkout:
   - `git fetch <peer-host>:<repo-path> main:refs/remotes/<peer>/main`
   - `git push origin refs/remotes/<peer>/main:main`
6. Before pulling locally, preserve local advisor work:
   - `git stash push -u -m pre-<peer>-alignment-before-<sha>`
7. Fast-forward local checkout:
   - `git pull --ff-only origin main`
8. Restore only advisor artifacts that should remain local, usually `plans/`:
   - if untracked files are in the third stash parent: `git checkout stash@{0}^3 -- plans`
   - otherwise use the normal stash path: `git checkout stash@{0} -- plans`
9. Update every plan's `Planned at` and drift-check SHA to the new aligned `HEAD`.
10. Verify alignment and the advisor artifacts:
   - `git ls-remote origin refs/heads/main`
   - `git rev-parse HEAD && git rev-parse origin/main`
   - peer: `git log --oneline -3 && git status --short`
   - `git diff --check -- plans`

## Pitfalls

- `git stash push -u` stores untracked files in the stash's third parent. If `git checkout stash@{0} -- plans` says the path is unknown, try `stash@{0}^3`.
- Do not let generated peer artifacts sneak into source commits. In HaxJobs these include `cv_variants_pdf/`, `output/`, `packs/`, `state/`, reports, DBs, and PDF/image outputs unless explicitly approved.
- If the peer commit changes HEAD after plans were written, stale plan SHAs are misleading. Always restamp plans after alignment.
- Relay-pushing from local is acceptable when the peer lacks GitHub auth, but still verify the remote branch actually points at the peer commit.
