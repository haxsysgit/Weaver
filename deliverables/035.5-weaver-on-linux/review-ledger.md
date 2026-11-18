# Review Ledger

## Status

Self-review by the executor on 2026-11-18. No independent reviewer has run;
the owner may ask for one before close.

## Findings and repairs

1. **Unit quoting.** The first draft quoted `ExecStart` with
   `shlex.quote`, whose `'"'"'` trick systemd does not accept (it does not
   join adjacent quoted pieces). Repaired: double quotes with `\`, `"`, `%`
   and (on Exec lines) `$` escaped. A test renders a repo path holding a
   curly and a straight apostrophe, double quotes, `%` and `$HOME`, and
   `systemd-analyze --user verify` accepts the units.
2. **Notification text.** `notify-send` gets the title and body after
   `--`, so a body starting with `-` cannot read as a flag. It never raises,
   and the alert is also printed so the journal keeps it.
3. **`uv.lock` safety.** The unit runs `uv run --frozen`, so a weekly run
   cannot rewrite the lock (a lesson from Plans 021 to 030). The lock's
   checksum was unchanged after every command in this plan.
4. **Model cache in tests.** `load_startup_config` now fills
   `FASTEMBED_CACHE_PATH`; an autouse fixture sets it to an empty folder so
   no test writes the owner's cache path into the environment.
5. **AGENTS.md line 292.** A first edit replaced `weaver.cmd` with
   `uv run weaver web --port 8787`, but that line describes the DSH `web`
   profile, which `weaver.cmd` started, not Weaver's own server. Repaired
   to say Linux has no launcher yet, and to name plain Weaver's command
   separately. This line is in the owner's uncommitted section and is not
   committed.

## Not reviewed

- The timer has not fired for real: enabling it is the owner's call.
- The first Saturday run will download the dense embedding model
  (about 1.3 GB) into the new cache inside the unit's 30-minute limit.
