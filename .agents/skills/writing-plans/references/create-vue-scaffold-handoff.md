# Create Vue scaffold handoff pitfall

Session source: HaxJobs 0.1.0/0.1.1 setup after creating the Vue frontend with `create-vue`.

## Lesson

When a generated frontend scaffold is created inside an existing monorepo, verify the generated directory and all edit paths before writing or committing. A path/cwd mismatch can silently create nested duplicates like `frontend/frontend/src/...` while the real app lives at `frontend/src/...`.

## Practical guardrail

After running a scaffold generator such as `npm create vue@latest frontend`:

1. Confirm the actual tree shape before editing generated files.
2. Use absolute or repo-root-relative paths consistently.
3. Before committing, inspect untracked/changed paths for accidental nested scaffolds.
4. Run both backend and frontend verification from their real working directories.
5. If cleanup is destructive or commit-amending, respect the environment/user approval result; do not force the same outcome through another command after denial.

## Why this matters

This keeps the implementation handoff clean: the plan says exactly where the app lives, the tests run against the intended app, and the commit does not accidentally preserve duplicate generated files.
