# Results

## Status

In progress. Admitted 2026-11-14.

## Baseline

- Backend floor at the 033.7 close: 945 passed, 4 skipped.
- Frontend: 185 tests, `tsc` and the build pass.
- Shelf: chapters 1 to 3246 (weekly refresh, 2026-11-14).
- 033.7 live run: Trials 9 and 12 pass; Trial 11 fails the fit follow-up.

## Slice 2 - the reader card

- `src/weaver/reader_card.py`: `ReaderCard`, `render_reader_card` and
  `card_from_state`. The card states the reader position (a saved boundary
  or none), the spoiler mode, the shelf edge and refresh date, what each
  finder reaches (including an unrecorded index), the notebook caveat, and
  the thread kind. It carries no reader text or chapter prose.
- `src/weaver/web/app.py`: the old `_reader_note` is replaced. The card is
  built at the turn start from the device prefs, the live shelf edge,
  `runtime.search_through`, the weekly refresh status (`library_status`),
  and `conversation_domain`. It is injected for every turn, including
  spoiler mode none.
- `tests/test_reader_card.py`: fifteen tests for the pure facts, the state
  assembly, the no-em-dash rule and the length bound.
- `tests/test_web.py`: the two tests that pinned the old note behaviour were
  rewritten to the new contract. No boundary asks first; spoiler mode none
  still gets a card, with no cap.

Floors:

- `uv run pytest -q`: 960 passed, 4 skipped.
- `npx vitest run`: 185 passed. `npx tsc --noEmit`: clean. `npm run build`:
  built.
- `ruff`: no new finding on the changed lines. The `I001`, `BLE001` and
  `S110` codes in `app.py` and `RUF059` in `test_web.py` are pre-existing at
  `HEAD`.
