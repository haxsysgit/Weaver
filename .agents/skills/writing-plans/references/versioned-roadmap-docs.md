# Versioned roadmap documentation pattern

Use when the user wants an expanded roadmap split by release lines (`0.1.x`, `0.2.x`, etc.) rather than a single implementation plan.

## Pattern

1. Read existing direction/product docs first.
2. Digest the product boundary and major themes before writing.
3. Keep `docs/ROADMAP.md` as the summary/index.
4. Create one detailed file per version line under `docs/roadmaps/`.
5. Use the exact filename pattern the user requested, e.g.:
   - `0.1.x_Haxjobs.md`
   - `0.2.x_Haxjobs.md`
6. In each detailed file, include:
   - major theme
   - final outcome for the version line
   - product scope: included / not included
   - subversion sections (`0.1.0`, `0.1.1`, ...)
   - what each subversion builds
   - done-when criteria
   - risks and decisions
   - exit criteria for the whole line
7. Update the main roadmap index to link to each detailed file.
8. Verify with a script or file listing:
   - every requested file exists
   - each file has the expected subversion headings
   - the main index links to the detail files

## HaxJobs example breakdown

- `0.1.x`: foundation, app skeleton, DB, models, CRUD, manual job save, local docs
- `0.2.x`: Hermes task queue, task contracts, source platforms, snapshots, polling/SSE path
- `0.3.x`: dashboard, job inbox, pipeline, job detail, task UI, timeline, polish
- `0.4.x`: profile, Hermes survey flow, sensitive answers, saved answers, pack library
- `0.5.x`: Chrome extension capture flow
- `0.6.x`: Firefox extension and shared cross-browser extension setup
- `0.7.x`: assisted apply, approval checkpoints, outreach, audit trail
- `0.8.x`: testing, deployment, backup/export, Postgres path, security, polish, 1.0 readiness

## Pitfalls

- Do not stop at a high-level summary if the user asked for per-file detailed docs.
- Do not invent a filename convention when the user gave one.
- Do not treat roadmap docs like code-level TDD plans; roadmap docs need outcomes, scope, sequencing, and exit criteria more than code snippets.
- Do not skip verification. The deliverable is documented files, not just a described roadmap.
