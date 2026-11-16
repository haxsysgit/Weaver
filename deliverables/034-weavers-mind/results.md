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

## Slice 3 - the name index behind who_is

- `src/weaver/name_index.py`: a chapter-derived index. `names_in` extracts
  capitalised names (single words and adjacent two-word names, possessives
  cleaned, stopwords rejected). `NameIndex` resolves exact, containment and
  close-spelling matches (`difflib`, cutoff 0.72), reports the chapters
  where the name appears, suggests alternatives, and knows the last chapter
  it covers. JSON save and load.
- `src/weaver/retrieval/tools.py`: `LibraryService.name_index()` loads
  `.weaver/retrieval/names.json` once, rebuilds it when the file is missing
  or older than the shelf, and saves it. `who_is` falls through to the index
  when the notebook map misses, returns the name, chapters, first and last
  appearance and match kind, unions suggestions, and refuses to reveal a
  name whose first appearance is past `context.max_chapter`. Results are
  capped to that chapter.
- `scripts/build_name_index.py`: builds the real index. On 2026-11-16 it
  indexed 5,488 names from chapters 1-3246 (1.37 MB, private under
  `.weaver/`). The 033.5 miss now resolves: `kanakt` -> `Kanakht`, chapters
  1721 to 3243.
- `tests/test_name_index.py`: eleven tests. `tests/test_retrieval_tools.py`:
  two who_is tests (a name beyond the notebook, and the boundary cap).

Floors:

- `uv run pytest -q`: 973 passed, 4 skipped.
- Focused: `tests/test_name_index.py` and `tests/test_retrieval_tools.py`,
  69 passed.
- `ruff` on the new files: clean.

## Slice 4 - the arc map

- `src/weaver/arc_map.py`: `Arc`, `ArcMap`, `parse_arc_ledger`. The map is
  parsed from the private continuity ledger at
  `.weaver/knowledge/shadow-slave/arcs.md`, which was written from reading
  the novel. It places a chapter in its arc, builds a prompt block capped at
  the reader's chapter (an arc that crosses the cap is clipped and marked
  "so far"), and states how far the map reaches.
- The real ledger parses 28 arcs through chapter 1816. The shelf is 3246, so
  later chapters are unmapped and the block says so.
- Checked against the source at the sample points: ch95 ends with the volume
  one marker, ch350 with volume two; ch601 opens *Kingdom of Hope*, ch751
  *Master Sunless*, ch1061 *Dire Strait*. These match the ledger's headings.
- `tests/test_arc_map.py`: six tests.

Floors:

- Focused: 6 passed.
- `uv run pytest -q`: 979 passed, 4 skipped.
- `ruff` on the new files: clean.
