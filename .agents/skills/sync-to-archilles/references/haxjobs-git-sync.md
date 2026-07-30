# HaxJobs Git-backed Archilles sync

Use this when HaxJobs needs to avoid stale local/VPS copies.

## Source of truth

- GitHub repo: `haxsysgit/Haxjobs`
- Jade/local checkout: `/home/hax/haxjobs`
- Archilles live checkout: `/home/hermes/haxjobs`
- Archilles update command: `haxjobs-update`

## Intended workflow

1. Work on Jade/local in `/home/hax/haxjobs`.
2. Run local checks before pushing:
   - Python syntax: `python3 -m py_compile $(find . -path './dashboard/node_modules' -prune -o -path './.git' -prune -o -path './.venv' -prune -o -name '*.py' -print)`
   - Shell syntax: `bash -n cron/run_pipeline.sh scripts/haxjobs-update dashctl.sh build-dash.sh dev-watch.sh pack_builder.sh`
   - Dashboard build: `cd dashboard && npm ci && npm run build`
3. Commit and push to `origin/main`.
4. On Archilles, run `haxjobs-update`.
5. Verify live services:
   - `curl -s -o /dev/null -w 'API %{http_code}\n' http://127.0.0.1:8800/api/status`
   - `curl -s -o /dev/null -w 'Vite %{http_code}\n' http://127.0.0.1:5173/`

## What `haxjobs-update` should do

- Fetch `origin/main`.
- Hard reset live checkout to latest commit.
- Preserve runtime-only directories: `intake/`, `packs/`, `state/`, `reports/`, `outreach/`, `.venv/`.
- Install dashboard dependencies with `npm ci` when package files exist.
- Restart the API/dashboard stack through `dashctl.sh`.
- Restart Vite dev server on port 5173 with full SSH detachment:

```bash
nohup bash -lc "cd '$APP_DIR/dashboard' && exec npx vite --port 5173 --host 127.0.0.1" \
  > /tmp/haxjobs-vite.log 2>&1 < /dev/null &
```

This avoids SSH hanging after the update command prints Done.

## Bootstrap pattern for a live folder that is not a git checkout

If `/home/hermes/haxjobs` is a loose runtime folder:

1. Move runtime dirs into a timestamped backup directory.
2. Clone GitHub into a temporary clone path.
3. Move the old folder aside.
4. Move the clone into `/home/hermes/haxjobs`.
5. Restore runtime dirs into the new checkout.
6. Run normal update/restart.

Never commit cookies, `.env`, SQLite DBs, browser profiles, generated Vite bundles, `node_modules`, or live packs/intake/state.
