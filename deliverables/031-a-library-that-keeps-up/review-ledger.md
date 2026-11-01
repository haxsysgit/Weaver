# Review Ledger

## Status

Independent review done 2026-11-01 by a separate agent with no write
access, over the code diff `d5acb91..HEAD` (src, tests, scripts). Verdict:
no blockers. Two major and several minor findings; the ones below marked
fixed were repaired test-first and rechecked by the full floor.

## Checked and fine

- No path overwrites a valid chapter or writes to `novels/` outside the
  Plan 002 tools. No refresh is reachable from chat or a model tool.
- The URL ledger still rejects foreign addresses: only the exact current
  and old templates parse, anchored, no query strings.
- Boundary validation (server 422 against the edge, frontend clamp), the
  open-ended last volume, the notification text escaping, and the prompt
  being rebuilt only when the edge moves.

## Findings

| # | Severity | Finding | Outcome |
|---|---|---|---|
| 1 | Major | The scheduled run caught only `CorpusError`. Any other error (a locked file, a corrupt timestamp) left no status, no log line, and no alert. | Fixed: any error is recorded as `failed / unexpected` with its type name only, alerted, and the lock released. Test added. |
| 2 | Major | An empty or unreadable lock file (a crash mid-write) was never treated as stale, so every later run skipped silently. | Fixed: an unreadable lock is aged by its file time. Tests for stale and fresh. |
| 3 | Minor | Appends-only was enforced only by reading the preview. A broken file past the ledger's end could be replaced unattended. | Fixed: `appends_only` now reaches the write itself and refuses any existing file (`CONFLICT / appends_only`). Test added. |
| 4 | Minor | A manual `weaver refresh --apply` could overlap the Saturday run. | Fixed: a manual apply takes the same lock. Test added. |
| 5 | Minor | A manual apply never updated the status, so Settings kept an old note for a week; a run that failed part-way did not move the edge. | Fixed: a manual apply records its own status; saved chapters move `last_chapter` and the new-chapter time even when the run fails later. Tests added. |
| 6 | Minor | The PowerShell quoting doubled only the straight apostrophe; PowerShell also reads curly single quotes. | Fixed. Test added. |
| 7 | Minor | Web and runtime tests read the owner's real shelf and status through the current folder. | Fixed: an autouse fixture points `WEAVER_PROJECT_ROOT` at an empty folder. |
| 8 | Minor | The chapter text cache has no size bound (about 35 to 70 MB after a whole-shelf scan); the notebook and packet paths read raw text with debris. | Open, accepted for now: the shelf is bounded and local. Plan 033 owns the notebook path. |
| 9 | Nit | The fast debris gate checks raw text, the line check normalizes spaces. | Open: shelf files are written normalized. |
| 10 | Nits | `search_through` read once at startup; the frontend reads the edge on mount only (the server still guards); 30-minute task limit; `--scheduled --source` ignored; "on on" copy. | Copy fixed. The rest open and noted; finding 1 and 2 cover a run killed by the time limit. |

## Recheck

Full floor after the fixes: 815 backend passed (4 Windows skips), 183
frontend, `tsc` clean, build clean, no new ruff findings on changed lines.
One real scheduled run after the fixes: `up_to_date`, exit 0, 12.6 s, lock
released.
