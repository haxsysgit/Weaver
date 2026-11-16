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

## Slice 5 - the map reaches the model

- `reader_card.py` carries an optional arc block; `card_from_state` passes it
  through. `arc_map.py` gains `load_arc_map` and returns no block for an
  empty ledger.
- `web/app.py`: `_arc_block` reads the continuity ledger and clips the map at
  the reader's chapter. A protected reader with no saved boundary gets no
  map; a reader who allows spoilers gets the whole mapped range. The map is
  part of the per-turn card, so the stable prompt prefix (personality, rules,
  skill catalogue, shelf line) still precedes all per-turn text.
- Sizes: 2,216 characters with the full 28-arc map for a reader at chapter
  3160; 947 characters for a reader at 100.
- The cache and cost measurement is the live run's usage block (slice 8),
  compared with the 033.7 run. No prompt rule was added or removed here; the
  full rule audit stays open for the owner's close.
- Tests: three in `test_reader_card.py`, one in `test_arc_map.py`.
- Review follow-up: `_arc_block` treated a device with no saved prefs as
  spoilers-allowed and injected the full map. It now treats no prefs as
  protect with no boundary, and `tests/test_arc_block.py` covers the four
  cases.

Floors:

- `uv run pytest -q`: 989 passed, 4 skipped.
- `ruff` on the new files: clean.

## Slice 6 - the repair keeps the answer

- The 033.7 fanfic failure: the publication repair found `unsupported_chapter`
  and `unopened_quote`. Its fallback variants removed block quotes and
  sentences with unopened citations, but no variant removed an inline quote,
  so the turn ended as `protocol_publication_repair_2` and the gap answer
  replaced the draft.
- `agent/answer.py`: `drop_unopened_quotes` removes inline quotes of six or
  more words that no opened passage shows, and keeps quotes the passages do
  show.
- `agent/turn.py`: `_fallback_variants` takes the packet, tries the quote
  drop first, then the existing trims. The call site passes the final packet.
- Tests: one in `test_agent_answer.py` (an opened quote is kept, an unopened
  one is dropped), one in `test_answer_follow_through.py` (a publishable
  variant exists after the trim).
- Not yet proven on the live fanfic turn; slice 8 measures it.

Floors:

- Focused: 189 passed (`test_agent_answer.py`, `test_answer_follow_through.py`,
  `test_agent_turn.py`).
- `uv run pytest -q`: 985 passed, 4 skipped.
- `ruff`: no new finding. The `I001`, `UP035` and `PIE810` codes in `turn.py`
  and `I001` in `test_agent_answer.py` are pre-existing at `HEAD`.

## Slice 7 - independent review and repairs

A separate agent with no part in the build reviewed `448147e..HEAD`. It ran
long and was stopped after an interim report with four findings; all four are
repaired. Full record in `review-ledger.md`.

- A clipped arc leaked its name, which could name a future death or return.
  A clipped arc now shows the range only.
- `who_is` leaked the future three ways: the boundary note confirmed the name
  existed later, suggestions were not filtered, and `chapters_seen` was the
  shelf-wide count. All three are fixed, and a notebook page's body is
  withheld before chapter 1000.
- The quote drop deleted the reader's own quote. It now keeps fragments from
  the reader's message.
- The quote drop ran on prose answers, where invented dialogue is legal. It
  now runs only when the findings include `unopened_quote`.

Floors:

- Focused review set: 278 passed.
- `uv run pytest -q`: 991 passed, 4 skipped.
- `ruff`: no new finding; the remaining codes are pre-existing.

## Slice 8 - the live run

Build `3001712`. Twelve trials, one process each, server stopped, wake lock
held. The first loop died after eight trials (the shell's native-error
handling stopped it at low_effort); the remaining four ran in a second loop.
No transcript was lost.

- Spend: $0.5257 for the twelve. A stray harness invocation (an unsupported
  `--help` flag started it) ran two and a half turns, spent $0.0311 and wrote
  no transcripts; it is not a result.
- Usage: 3,112,957 cache hits, 1,003,258 misses, 171,681 output tokens; 75.6%
  hit rate.
- All twelve completed with no failed or retried turns.

Verdicts (evaluator):

| Trial | Verdict | Notes |
| --- | --- | --- |
| Long thread (9) | Pass | The top three hold across nine turns; "no changes" means no changes; the Mordret and Cassie challenges are answered with exact quotes from chs. 3147 and 2808. |
| Confusing fight (12) | Fail on accuracy | The fight, outcome (lulled asleep, not slain) and canon-versus-read separation are correct. One quoted phrase, "natural and seamless", is not in ch. 2710 or the shelf; the chapter says "Cohesion and cooperation were vital... no vulnerabilities left". "Boundless oceans" is cited to 2710 but is in 2711. |
| Fanfic (11) | Pass | The opening scene is invented and labelled, with canon anchors (chs. 766-767). The fit follow-up now answers "No" with chs. 766, 771 and 772 and names where the scene belongs. |
| Other nine | Ran clean, not re-judged | Their 033.7 verdicts (pass) stand. |

Gate status:

- Both old blockers pass.
- Trial 12 fails on a short fabricated quote. The checker only inspects
  quotes of six or more words, so a three-word invention slips through.
- The Plan 033 check set was not run; that gate stays open.
- The full twelve are not re-passed on this build. The owner's close is the
  next decision; no merge, tag, or deploy.

### Check set (Plan 033 regression)

- Three runs of six questions (r15, r35, n18, t1, t2, t3) through arm A:
  18 answers, $0.1599.
- Blind packet: `SEED=34034`; 18 answers, 11 quotes, 1 quote not in a cited
  chapter. That one is the reader's own question quoted back in r35, not a
  fabrication.
- Gate: **3 of 9 scene answers substitute another scene** (gate: at most 1),
  and **2 of 9 trial answers are correct** (gate: at least 6). Fail.
- Why: the r15 answers use the ch. 689 confession instead of Belle's ch. 871
  question; one r35 answer uses the ch. 1580 theft and denies the ch. 2976
  kill; the t2 and t3 answers admit Azarax's and Anvil's cards are absent and
  answer from inference. The reader card and name index did not fix the
  missing facts.
- Verdicts are the blind judge's (a separate agent read the blind file and
  the questions). The evaluator verified the r35 substitution against ch.
  2976 and the r15 substitution against ch. 689.

## Slice 8.5 - repairs after the close review (2026-11-16)

A second review at the owner's close (Claude, with no part in slices 2 to 8)
re-ran the floors (991 passed, 4 skipped; 185 frontend; `tsc` clean), then
probed the built index and the map against the real shelf. Four defects,
each fixed red first. The owner asked for the fixes before the close.

1. **Short invented quotes.** Trial 12's "natural and seamless" was three
   words, under the six-word floor. The check now covers quotes of three or
   more words. A quote with a chapter citation right after it must be in
   that chapter when the chapter is open (the "boundless oceans" miscite
   shape). A quoted name or title ("Lord of Shadows") is exempt. The repair
   takes a short quote's marks off and keeps its words, so the sentence
   still reads; long unopened quotes are still dropped.
2. **Titles resolved to the commonest word inside them.** Probe on the real
   index: "Lord of Shadows" -> Shadow (all 3,246 chapters), "the Sword
   Saint" and "Saint Tyris of Rivers" -> Saint. Now titles joined by "of"
   or "of the" are indexed as one name, containment matches whole words
   only, and the most specific name wins. "Sunny's sister" finds Sunny.
3. **Ordinary words indexed as names.** A single word the chapters write in
   lower case at least as often as capitalised ("Everything") is dropped.
   The real index went from 5,488 names to 2,993. Rebuilt under `.weaver/`.
4. **The arc map stopped at 1816 with holes.** The chapters mark each
   volume's end ("[End of volume one: ...]"), so the map now carries
   volumes 1 to 13 across chapters 1 to 3246; volume 12's end is unmarked
   and the line says so. A volume the reader is still inside shows its range
   only, never its name. The scan runs once per shelf edge (1.3 s, then
   0.06 s), so the weekly refresh extends the map on the next turn. The
   ledger parser also reads headings with no dash (arcs 33 to 35).

Checked on the real shelf, not only in tests: the probe lookups above, and
the volume block for a reader at 1700 (volumes 1 to 7, then "1591-1700
(volume continues past this chapter)").

Not done here: the prompt restructure's before-and-after measurement and
reread budget, a full second review of the whole 034 diff, and the check
set's retrieval depth. Trial 12 is not re-run; a re-run needs the owner.

Floors:

- `uv run pytest -q`: 1008 passed, 4 skipped (991 + 17 new tests).
- `ruff`: no new finding; the codes left in `app.py` and
  `test_agent_answer.py` match `HEAD`.
- No frontend file changed; `npx vitest run` 185 passed and `tsc` clean at
  `fa33d74`.

## Trial 12 re-run (2026-11-16, owner approved)

Build `44cdd1e` (the slice 8.5 repairs). One process, server stopped, wake
lock held, private transcript.

- **Attempt 1 is not a result.** Every call failed in about 12 s with
  `error_category: connection`, no model call was made, $0 spent. The run
  started from a sandboxed shell that cannot open outbound connections; a
  reachability probe confirmed it. Recorded, not retried silently.
- **Attempt 2:** six turns, none failed or retried, 31 model calls, $0.0628
  (cache 398,336 hits, 129,462 misses; 75.5% hit rate).

Verdict (evaluator): **pass, both axes.**

- Accuracy: every cited claim checked against chs. 2710, 2712, 2713 and
  2714 and holds: the shoulder joint blown off and regrown, the flame wall
  and the stalemate with the red sea, the vicious cycle of the two curses,
  the order (curse first, cohort after), Nephis's "defeat but not kill"
  line, the sleep that will not hold for long, the collapse and the escape
  to the Chain Breaker. No inline quotes this run, so nothing to fabricate;
  the one inference (the Titan reaching the Dark Castle without the flame
  wall) is labelled as Weaver's read.
- Storytelling: a real retelling. The arena is built in layers (failing
  hexagon dome, boiling lake, burning shore, the walls of water closing in)
  and the reader is told what to picture. Sequence and stakes are clear.
- Conversation: "who actually won?" gets a two-part answer instead of a
  rerun; "was that canon or your read?" separates the text from the
  framing; "simpler" is simpler. No machinery talk.
- One loose phrase: turn 5 says the curse does "the killing work" and the
  next sentence says it never dies. Not an accuracy failure; noted.

Gate status after the re-run: both 033.7 blockers and Trial 12 pass on the
evaluator record. Nine trials were not re-judged on this build, and the
check set still fails (2 of 9). The owner's close is the next decision.
