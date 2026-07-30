# Post-work report format

After any task that changes files (deletions, rewrites, config changes, plan execution), the final message must be a detailed change report. Never end with test counts or verification summaries.

## Why this matters

Arinze wants to know what actually happened to the codebase. Test counts tell him nothing — he can run tests himself. He wants to know which files changed, what was deleted, what was rewritten, and how the change affects what he's building.

## Required structure

```
What was done:

**Deleted: `path/to/file`** — why it was dead / why it was deleted
**Deleted: `path/to/other`** — (same)

**Changed: `path/to/changed.py`** — what was removed (old behavior) → what replaced it (new behavior)

**New: `path/to/new.toml`** — what it does, why it exists

**Impact:** one sentence on how this affects the pipeline/product
```

## Concrete examples

### BAD (what NOT to do)

```
Stage 1 done. 218 passed, py_compile clean, bash syntax OK. Ready for Stage 2.
```

```
Verified: bash syntax clean, Python compiles, HAXJOBS_HOME fixed. No stale discovery refs.
```

These tell the user nothing about what files changed or what was actually done. They're verification noise.

### GOOD

```
Stage 1 finalized. What was changed:

**Deleted: `discovery/`** — 23 files. Scrapers, filters, company lists. Zero runtime references. All were documentation, not function.

**Changed: `cron/run_pipeline.sh`** — removed the dead `discovery/job_classifier.py classify` call. `pipeline_db.py classify-roles` already handles classification via DB.

**Changed: `haxjobs_config.py`** — rewritten from 89 lines to 68. All defaults moved to `haxjobs.toml`. Thin parser with env overrides.

**New: `haxjobs.toml`** — canonical config. Three sections: [paths], [email], [telegram]. Edit this to change defaults.

**Impact:** Stage 1 pipeline is now: jobs enter via API/seed → classified in SQLite → evaluated. No discovery scrapers. DB is the only classification path.
```

## When to use this format

- After any plan execution (improve `execute` path)
- After stage cleanup/polish work
- After config migrations
- After deleting dead code
- After rewriting a module

Basically whenever files changed. If you find yourself typing "X passed, Y OK, ready for next" — delete that line and write the change report instead.

## Additional rules

- List every file touched. Don't say "cleaned up the evaluator" — say which file and what changed.
- Put file paths in backticks so they're copyable.
- End with one impact sentence. No questions. No "ready for Stage N."
- If the user asks "what exactly was changed" — you already failed. The report should have been in the previous message.
