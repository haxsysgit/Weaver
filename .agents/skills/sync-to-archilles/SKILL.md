---
name: sync-to-archilles
description: Sync local files/directories to the Archilles VPS agent.
category: devops
triggers:
  - "send this to archilles"
  - "copy to archilles"
  - "sync to archilles"
  - "put this on the VPS"
---

# Sync to Archilles

Use `rsync` to mirror local directories to Archilles (the VPS agent at 178.105.245.120, SSH alias `archilles`). Archilles home is `/home/hermes/`.

## Steps

1. First decide whether this is a **one-off file transfer** or a **project that should have Git as the source of truth**.
   - One-off/context copy → use rsync/scp below.
   - Shared codebase or live service → prefer GitHub + an update command on Archilles, so Jade/local, the user, and Archilles are not working from stale divergent folders.
2. Find the source directory. If the user says "send this folder" and you're in it, use `pwd`. If they name it but the path is ambiguous, do `find /home/hax -maxdepth 3 -type d -iname "*<name>*"`.
3. Check size with `du -sh <dir>` so you know what timeout to use.
4. Rsync with archive mode and compression:

```
rsync -avz --progress <source_dir>/ archilles:/home/hermes/<target_dir>/
```

5. Verify with `ssh archilles "du -sh /home/hermes/<target_dir> && ls /home/hermes/<target_dir>/"`.

## Git-backed live project workflow

When a project is edited by Jade/local and run by Archilles, avoid raw rsync as the long-term workflow. Normalize it like a small engineering team:

1. Make GitHub the source of truth.
2. Pull/copy Archilles' live source back into the local repo once, excluding runtime/private data.
3. Commit and push the synchronized source.
4. Turn the Archilles folder into a real git checkout, preserving runtime dirs.
5. Install a project-specific update command, e.g. `haxjobs-update`, that pulls latest GitHub and restarts services.
6. After that, local work flows: edit → test → commit → push → `ssh archilles haxjobs-update`.

For the HaxJobs-specific implementation and pitfalls, see `references/haxjobs-git-sync.md`.

## HaxJobs private lane guardrail

For HaxJobs after the private/public split, do not sync the old mixed checkout or public-release lane to Archilles. The safe source lane is:

```text
/home/hax/haxjobs-private-dev
```

The live Archilles runtime is:

```text
/home/hermes/haxjobs
```

Public release work belongs in `/home/hax/haxjobs-public-release` and must not be rsynced to Archilles blindly. Never use `rsync --delete` for HaxJobs unless Arinze explicitly approves the exact source, target, and excluded runtime dirs. Runtime/private dirs on Archilles (`state/`, `intake/`, `packs/`, `reports/`, `outreach/`, `profile/`) are protected.

### Git bundle relay (when Archilles has no GitHub credentials)

When Archilles cannot pull from the private repo directly, relay the commit through a git bundle:

```bash
# One-shot from Jade:
cd /home/hax/haxjobs-private-dev
scripts/update-archilles-private
```

What it does:
1. Validates Jade private-dev is clean and pushed to private GitHub.
2. Creates a temporary git bundle: `git bundle create /tmp/haxjobs-private-main-XXXXXX.bundle main`
3. Copies bundle to Archilles via `scp`.
4. Archilles fetches from the bundle: `git fetch /tmp/bundle main:refs/remotes/origin/main`
5. Archilles hard-resets tracked source only, preserving runtime dirs.
6. Removes bundle from both machines.
7. Restarts dashboard/API and runs a health check.

No GitHub credentials ever touch Archilles. No `rsync --delete`. Tracked source only.

## Post-sync cleanup (when user only needs code + docs for context)

After a full sync, the user may ask to "trim it down" or "I only need docs and code for context." This is a second phase -- sync everything first, then strip bloat remotely.

1. **Find the weight**: `ssh archilles "du -sh /home/hermes/<dir>/*/" | sort -rh | head -20`
2. **Strip aggressively** -- these are safe to remove on the VPS (they bloat and aren't context):
   - `.venv/` -- virtualenv (usually the biggest after node_modules)
   - `.git/` -- git history (Archilles doesn't need it)
   - `__pycache__/` -- find and delete: `find . -name '__pycache__' -type d -exec rm -rf {} +`
   - `.pytest_cache/` -- cached test metadata
   - `dist/`, `*.egg-info/` -- build artifacts
   - `node_modules/` -- JS dependencies (check with `find . -name 'node_modules' -type d -exec du -sh {} \;`)
   - Large test fixture directories with real app data (e.g., `testframe/`, `testhaxaml/`)
3. **What to KEEP**: source code (`src/`, `haxaml/`, `packages/`), tests, docs, research, schemas, config files
4. **Verify**: `ssh archilles "du -sh /home/hermes/<dir>"` -- target is single-digit MB

Example: 820MB Haxaml repo trimmed to 3.5MB by stripping testframe (736MB, including node_modules), .venv (55MB), .git (7.6MB), 408 pycache dirs, dist, egg-info, temp, testhaxaml.

## Pitfalls

- **Trailing slashes matter**. `<dir>/` copies the *contents* into the target. `<dir>` (no slash) copies the directory itself. Prefer the trailing-slash form to match user expectation of "send this folder's contents."
- **Large transfers need longer timeouts**. 23MB = fine with default 180s. 820MB+ = use `timeout=600`.
- **Don't exclude .git or __pycache__** unless the user says to. "Exactly how it is" means everything. The cleanup phase is separate and happens after the full sync.
- Always verify with a quick `ssh archilles` command afterwards -- rsync can succeed with zero exit code but worth confirming the right stuff landed.
- **scp for single files**. When pulling/pushing individual files (not directories), use `scp archilles:<remote_path> <local_path>` directly -- it's simpler and faster than rsync.
