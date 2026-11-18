# Results

Machine: Ubuntu (GNOME on Wayland), Python 3.11.18 from uv, Node v24.22.3
from fnm. Branch `plan-035` from `76b1053`. Dates 2026-11-18.

## Before and after

| Check | Before (Linux, `76b1053` + owner's working tree) | After |
| --- | --- | --- |
| `uv run pytest -q` | 1118 passed, 0 skipped, 0 failed (164 s) | 1143 passed, 0 skipped, 0 failed (147 s); +25 new tests |
| `npx vitest run` | 185 passed (25 files) | unchanged (no frontend change) |
| `npx tsc --noEmit` | clean | unchanged |
| `npx vite build` (to a scratch folder) | builds; byte-identical to the committed `src/weaver/web/dist` | unchanged |
| `uvx ruff check` on new files | n/a | clean |
| Live turn (`uv run weaver web --port 8016`) | library at 3246 (shelf and search); one question answered with a chapter cite; no server errors | not re-run (no answer-path change) |
| `weaver library inspect shadow-slave` | 3246 valid, 0 missing or broken; 3281 `owner_only_permission_required` | unchanged (owner decision) |
| `weaver refresh` (preview) | one probe at chapter 3247, an unattended action | unchanged |
| `weaver schedule status` | `ERROR the weekly task uses Windows Task Scheduler` | timer active and enabled, next run Sat 2026-11-21 10:00 GMT |

The Windows floors at the close of 033.6 were 934 passed and 4 skipped; the
four skips were POSIX-only mode tests, which now run and pass.

## Findings, sorted

### A fixed Windows path or command

1. `.claude/launch.json` started the server through PowerShell with
   `UV_PYTHON_INSTALL_DIR=$env:USERPROFILE\.uv\python`. Now `uv run weaver
   web --port 8016`, plus a `weaver-fake` entry. Local file, not committed.
2. `AGENTS.md`: the stash-baseline note named the Windows checkout (fixed,
   committed); the HaxJobs path and the `weaver.cmd` line in the owner's
   uncommitted section (fixed in the working tree only).
3. `HANDOFF.md`: the "Moved" paragraph, the weekly-task paragraph, the
   Windows dev-setup bullet and the handoff prompt. The documented build
   command `npm --prefix src/weaver/web/frontend run build` pointed at a
   folder with no `package.json`; it is `npm run build` at the repo root.

### A Windows-only feature that needed a Linux branch

4. **Weekly refresh.** `weaver schedule` only drove Task Scheduler. New
   `src/weaver/corpus/schedule_linux.py` writes
   `~/.config/systemd/user/weaver-library-refresh.{service,timer}`:
   `OnCalendar=Sat *-*-* 10:00:00`, `Persistent=true`, a oneshot service
   running `<absolute uv> run --frozen weaver refresh --scheduled` in the
   repo with `WEAVER_PROJECT_ROOT` set, `TimeoutStartSec=30min` (the
   Windows task's limit), `Nice=10`. `install` reloads and runs `enable
   --now`; `remove` disables and deletes; `status` reads `systemctl --user
   show`. The CLI picks the branch with `sys.platform`; Windows is
   untouched. Installed and enabled on 2026-11-18 on the owner's yes
   (`uv run weaver schedule install`); `systemctl --user list-timers` shows
   the next run on Sat 2026-11-21 10:00 GMT and `systemd-analyze --user
   verify` accepts the installed units. It has not fired yet.
5. **Alerts.** The scheduled run on Linux calls `notify-send
   --app-name=Weaver` and also prints the alert for the journal. A test
   notification sent from inside a transient systemd user unit (the
   timer's context) exited 0.

### A real bug Linux exposed

6. **Model cache in `/tmp`.** fastembed keeps its models under the temp
   folder. Windows keeps `%TEMP%`; Ubuntu clears `/tmp` at boot, so every
   restart re-downloaded the models (1.3 GB dense, 88 MB sparse) before the
   first search. `load_startup_config` now sets `FASTEMBED_CACHE_PATH` to
   `$XDG_CACHE_HOME/weaver/fastembed` (else `~/.cache/weaver/fastembed`)
   off Windows when it is unset. The 88 MB model the live check fetched was
   moved there; its hashes match the Windows copy.
7. **File modes after the copy.** Everything arrived 755/644 (`novels/`,
   `private/`, `.weaver/`, `.env`, `weaver.sqlite3`). Windows skipped the
   owner-only check; Linux enforces it, so `library inspect` reports 3281
   issues. Nothing blocks: the live turn worked, and the refresh preview
   plans only an append, after which the library tools harden
   `novels/shadow-slave` to 700/600 themselves. Left for the owner.

### Checked and clean

- **Encodings:** every text file under `novels/`, `private/`, `.weaver/`
  state and the source tree decodes as UTF-8; no BOMs, no UTF-16.
- **File-name case:** no two paths differ only by case; no code reference
  uses a different case from the file it names. `tsc` (case-sensitive on
  Linux) and the build pass.
- **Stored path separators:** no Windows paths in `.weaver/state` SQLite,
  root `weaver.sqlite3` or the manifest (`relative_path` is POSIX).
- **Shell-outs:** only `git` (notebook checks) and the scheduler modules.
- **Line endings Weaver writes:** on Linux, LF. Two state files written on
  Windows are CRLF (`library-status.json`, `scheduled.log`); both read
  fine, and the log will mix endings after the first Linux run (harmless).
- **Screenshot harness** `.weaver/tools/shoot.mjs` already defaults to
  `/usr/bin/google-chrome-stable`, which exists here.

## Line endings (diagnosis, proposal pending)

- 49 modified files differ from `HEAD` only by CRLF: every line ends in CR,
  and stripping CR gives `HEAD` byte for byte.
- 22 of the 27 files with real edits are also CRLF, so their diffs show
  every line. `AGENTS.md` is mixed (only its 13 new lines are CRLF).
- 12 committed files are CRLF in the index: scaffolded deliverables,
  written by `scripts/scaffold_plan.py` on Windows.
- There is no `.gitattributes` text rule; `core.autocrlf` is false on both
  machines. Linux writes LF, so new churn should stop.

## Open owner decisions

1. ~~Enable the timer~~: done 2026-11-18 (owner: "Yes, enable it").
2. Line endings: restore the 49 CRLF-only files to LF; optionally convert
   the 22 edited files to LF; optionally add a `.gitattributes` LF rule.
3. File modes: harden `novels/` and the private files now, or let the first
   refresh harden `novels/shadow-slave`.
4. A launcher for the DSH `web` profile on 8787.
