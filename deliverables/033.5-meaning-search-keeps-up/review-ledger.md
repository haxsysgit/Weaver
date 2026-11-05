# Review Ledger

## Status

**Slice 5 review done (2026-11-04)** by a fresh subagent that did not
build the work, read-only, without opening the live index (a Reader
Trials run held it). No blockers; every finding is repaired in
`3f3ddde` or recorded below.

## Findings

| # | Severity | Finding | Repair |
|---|---|---|---|
| 1 | Major | A run killed during a write could leave a chapter with only some of its chunks, all with the right hash: the check called it current forever. A killed run also skipped the `finally`, so `coverage.json` could overstate reach. | New points carry `chunks` (the chapter's chunk count) and the check requires it. New points are written first, then the chapter's other points removed. Recorded coverage is lowered before any write. Tests: a short chapter is repaired; a run that fails part-way records true coverage and the next run finishes; coverage drops before models load. |
| 2 | Major | "Current" looked only at the raw file's hash, so a change to Weaver's debris list (which blanks lines without touching files) would never re-embed, and the 81 debris chapters (3047 to 3127) kept vectors embedded from raw text, contrary to the module's own claim. The match test picked only debris-free chapters. | New points carry `text_hash` (the text Weaver reads) and the check requires it. Points from the first build (no `text_hash`) count as current only when the read text equals the raw file. This flags the 81 chapters (and any debris chapter among 3128 to 3232) for one re-embed, run after the Reader Trials released the index. Tests: first-build points with debris are stale; a change in what Weaver reads re-embeds. |
| 3 | Minor | A busy index on every Saturday would be recorded as waiting forever with no alert, and Settings and `weaver schedule status` never showed it. | `library_status` returns `index`; the third waiting week in a row sends one alert (`waiting_runs`). Test added. |
| 4 | Minor | The failure paths were untested. | Covered by the tests under 1. |
| 5 | Minor | `weaver library index` exited 0 with no hint when the machine has no index. | Exits 1 and names the build script. Test added. |
| 6 | Minor | `scripts/build_library_index.py` with no arguments now rebuilt the live index (delete and recreate). | Refuses when `--out` exists unless `--replace` is passed. Test added. |
| 7 | Nit | The stable-id test passes for `hash()` under a fixed `PYTHONHASHSEED`. | Pinned to the SHA-256 value. |
| 8 | Nit | The plan's findings still said 81 chapters "changed on disk". | Correction recorded in the plan and `results.md`. |

## Checked and sound (reviewer)

The collection is never dropped or recreated by the update; old points go
by chapter filter whatever their ids; ids are stable SHA-256; the busy path
matches the installed Qdrant lock message; the weekly step never changes
the refresh outcome or exit code and stores only an exception's type name;
`--check` loads no models and writes nothing; coverage stops below gaps,
missing, and stale chapters; run outputs match the report; LF throughout;
no novel text in committed files; no ranking, prompt, or UI change.
