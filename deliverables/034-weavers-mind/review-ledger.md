# Review Ledger

## Independent review, 2026-11-16

A separate agent with no part in the build reviewed `448147e..HEAD` (the
reader card, the name index, the arc map and the repair). It ran long and
was stopped after sending an interim report, so this records four findings,
not a full report.

### Finding 1 (blocker) - a clipped arc leaked its name

`arc_map.py` printed the arc title on a clipped arc. For a reader at chapter
1640 the card would show "The true Bastion and the Winter Beast's death",
an event 19 chapters ahead. Repair: a clipped arc prints
"start-limit (continues past this chapter)" with no title. Tests updated in
`tests/test_arc_map.py` and `tests/test_arc_block.py`.

### Finding 2 (blocker) - who_is leaked the future

Three leaks: the boundary note said a name "first appears past the reader's
chapter" (confirming it exists later); suggestions were not boundary
filtered; `chapters_seen` used the shelf-wide count. Repair: a neutral "not
in what the reader has read", suggestions filtered by first appearance,
`chapters_seen` is the capped list length. Also, a notebook page's body is
withheld when the reader's boundary is before chapter 1000, because the page
was written with knowledge up to 1000. Tests in `tests/test_retrieval_tools.py`.

### Finding 3 (should-fix) - the quote drop deleted the reader's own words

`drop_unopened_quotes` checked only opened passages, while the checker also
allows fragments from the reader's message. Repair: it takes `reader_text`
and keeps fragments found there. `_fallback_variants` passes
`answer_blueprint.question`. Test in `tests/test_agent_answer.py`.

### Finding 4 (should-fix) - the quote drop ran on prose answers

Prose (fanfic) answers opt out of the unopened-quote check, so the drop could
delete invented dialogue for another finding. Repair: `_fallback_variants`
takes `fix_unopened_quote`, set only when the findings include
`unopened_quote`. Test in `tests/test_answer_follow_through.py`.

### Notes

- The reviewer confirmed the prefs-None arc-map fail-open was already fixed
  and covered by `tests/test_arc_block.py`.
- The review was stopped before a full report. A second reviewer pass belongs
  to the owner's close.

### Floors after the repairs

- `uv run pytest -q`: 991 passed, 4 skipped.
- Focused review set: 278 passed.
- `ruff`: no new finding. The `BLE001`, `I001` and `RUF015` codes in the
  touched files are pre-existing at the base commit.
