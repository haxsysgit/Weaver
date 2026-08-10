# Results: Plan 016 (refresh the shelf safely)

## Verification audit (2026-08-10)

The owner directed verifying Plan 016 properly, confirming it was fully
implemented, and closing it. The implementation was built owner-directed
on 2026-08-09 as the `weaver refresh` CLI command and verified against
the plan's invariants.

## Deterministic proofs (CLI shape)

| # | Claim | Evidence |
| --- | --- | --- |
| 1 | Preview reports exactly what will change with no network and no shelf writes | `weaver refresh` calls `update_novel_corpus(preview=True)`; the preview path emits `_preview_action` only (no fetch) and writes a metadata receipt. Locked by `test_refresh_defaults_to_preview` (tests/test_cli.py:182) and corpus preview tests. |
| 2 | `--apply` without a live key exits 2 before any call, receipt, or state dir | `_run_refresh` checks `_firecrawl_api_key()` before `update_novel_corpus`. Locked by `test_refresh_live_without_api_key_exits_2_before_any_call` (tests/test_cli.py:260). |
| 3 | A confirmed apply runs the Plan 002 fetch/validate/atomic-commit loop, records hashes/counts, stops at first 404/500, receipts metadata-only | Live run 2026-08-09: fetched and saved chapters 3129-3148 (20 files), stopped at 3149 (first non-success), repaired the broken chapter 2843 file atomically. Locked by `test_refresh_apply_runs_the_live_loop`, `test_refresh_through_cap_is_passed`, and `test_mutating_tool_hardens_corpus_and_receipts_are_metadata_only` (tests/test_corpus_fetch_update.py:312, receipt perms 700/600, metadata-only). |
| 4 | An interrupt never leaves a torn chapter; next run resumes from inventory | Each write is individually validated and atomically committed per Plan 002 rules; the loop is inventory-driven. |
| 5 | No refresh tool in any model tool registry; ordinary conversation never triggers a refresh | `grep refresh src/weaver` finds only the CLI parser/runner; the web profile registers only the Plan 014 reading tools. |

## Commands run

```sh
timeout 240 uv run pytest -q tests/test_cli.py tests/test_corpus_fetch_update.py tests/test_corpus_text_and_models.py -x
# 42 passed
uv run ruff check src/weaver/cli.py src/weaver/corpus
# clean
uv run python scripts/check_story_notebook.py --root .weaver/knowledge/shadow-slave --through 1500 --novel-dir novels/shadow-slave
# counts: chapters=1500 statements=3545 connections=9861 problems=0
```

## Live run record (2026-08-09, owner-directed)

- `uv run weaver refresh --apply` fetched Shadow Slave chapters 3129-3148
  and stopped at chapter 3149 on the first non-success, matching the
  owner's stated latest chapter.
- The same run repaired the previously-broken chapter 2843 file
  (`replace_broken_atomically`).
- Receipt: `update_novel_corpus-20260809T234442-fe6bab61416a.json`
  (metadata only).

## STOP-condition check

None triggered: no update fired during ordinary conversation or from a
model tool call; no network/write happened before preview and explicit
confirmation; no novel prose or fetched raw text entered durable records;
`novels/` was only modified through the Plan 002 rules.
