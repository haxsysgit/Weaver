# Private/Public Scrub Verification Notes

Use this reference when executing or reviewing a public scrub plan for a repo that also serves a private/live deployment.

## Durable lesson from HaxJobs Plan 013

A public safety scan that only targets obvious source/template directories can still miss private identifiers in root docs and agent guide files. In the HaxJobs scrub, tests passed and the focused safety scan passed, but the mandatory done-criteria cross-check caught remaining private absolute paths in `README.md` and `AGENTS.md`.

## Recommended verification shape

1. Preserve private data first.
   - Confirm the private copy exists before removing tracked private files.
   - Confirm generated/live artifacts were snapshotted if the live checkout has untracked runtime outputs.

2. Remove private files from public tracking, not from the preserved private copy.
   - Use `git rm --cached` for files that must remain local but stop being tracked.
   - Add `.gitignore` rules for private profile files, generated CV artifacts, runtime dirs, DBs, cookies, browser profiles, and private snapshots.

3. Make the scan `git ls-files` based.
   - Scan tracked public files, not the whole working tree.
   - Exclude the scan test itself if it must contain blocked token strings.
   - Report token labels and paths only, not secret values.

4. Include root docs and agent guides in the scan.
   - Scan at least: `README.md`, `AGENTS.md`, source scripts, templates, examples, tests, and config helpers.
   - Plans and private-history docs may be excluded only if the plan explicitly allows them.

5. Cross-check done criteria separately from passing commands.
   - Re-read the plan checklist.
   - Source-dive/grep every criterion against the live tree.
   - If the cross-check finds a gap after the full baseline passed, fix the gap and rerun the relevant baseline.

6. Run baseline after the last edit, even if the final edit was docs or plan status.
   - Then run a focused `/tmp/hermes-verify-*` script for plan-index status edits so Hermes has fresh evidence for the changed path.

## Common pitfalls

- `grep -r` scans too much and may trip on private preserved copies; prefer `git ls-files` for public-release checks.
- Tests can accidentally encode private facts as expected values. Convert them to example-candidate expectations rather than deleting coverage.
- Python string rewrites around shell commands often create syntax errors. Run `py_compile` before assuming path-config edits are safe.
- Public docs can leak private paths even when source code and templates are clean.
