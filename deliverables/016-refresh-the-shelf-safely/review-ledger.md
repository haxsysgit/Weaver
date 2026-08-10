# Review Ledger: Plan 016 (refresh the shelf safely)

## Review 1 — independent reviewer (2026-08-10)

Reviewer: fresh-context reviewer subagent (runtime verify commands:
focused pytest on tests/test_cli.py + tests/test_corpus_fetch_update.py,
ruff on the refresh slice). Read the plan, cli.py, corpus service/storage/
models/tools/source/text, config, chat_runtime, web/app.py, and the tests.

**Verdict: PASS** — all six invariants verified against code and tests:

1. Preview: no network, no shelf writes (only a metadata receipt).
2. `--apply` requires an explicit flag + working key before any call or
   state creation (exit 2), with CLI-credentials fallback.
3. No model tool can trigger a refresh (web registry has reading tools
   only; `register_corpus_tools` has no runtime caller; whole-tree grep
   confirms no tool registration or web endpoint).
4. Receipts metadata-only with owner-only permissions
   (`_assert_metadata_only` rejects prose keys; ChapterAction has no
   prose field; test asserts 700/600 modes + no secret/prose).
5. Ordinary conversation can never auto-trigger a refresh (sole trigger
   is the human-typed `weaver refresh --apply`).
6. Tests genuinely cover the paths.

Findings:

- **minor** — `test_refresh_apply_runs_the_live_loop` and
  `test_refresh_through_cap_is_passed` were non-hermetic: they deleted
  the env key but not `Path.home`, so they passed only on machines with
  `~/.config/firecrawl-cli/credentials.json` (verified failing with
  `HOME=/tmp/empty-home`).
- **minor** — no service-level test asserted the update (refresh) preview
  makes zero source calls and writes nothing to the shelf (the fetch
  preview had one; the refresh headline path was only CLI-flag-tested).
- **note** — `weaver library update|fetch --apply` (pre-existing Plan 002
  paths) exit with 1 via CONFIGURATION instead of refresh's exit-2 gate;
  safe (no network/write), out of this plan's scope.
- **note** — decision record and plan state lagged the implementation
  (fixed by this close-out).

## Repair pass (2026-08-10)

1. **FIXED (minor 1)** — both apply tests now `monkeypatch.setenv`
   `FIRECRAWL_API_KEY` instead of deleting the env key and depending on
   the machine's real credentials file; they pass with an empty HOME.
2. **FIXED (minor 2)** — new red-first test
   `test_update_preview_selects_gaps_without_source_calls`
   (tests/test_corpus_fetch_update.py) asserts zero source calls, the
   exact gap action set (missing chapter, invalid placeholder, probe-next
   URL), and no shelf writes for the refresh preview.
3. **NOTE (no action)** — the pre-existing `library update|fetch --apply`
   exit-code inconsistency stays out of scope; documented in the plan's
   corrections section.

## Recheck (2026-08-10)

```sh
HOME=/tmp/empty-home timeout 180 uv run pytest -q tests/test_cli.py \
  tests/test_corpus_fetch_update.py tests/test_corpus_text_and_models.py
# 43 passed
uv run ruff check tests/test_cli.py tests/test_corpus_fetch_update.py \
  src/weaver/cli.py src/weaver/corpus
# clean
```
