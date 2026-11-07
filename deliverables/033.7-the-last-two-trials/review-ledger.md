# Review Ledger

## Independent review, 2026-11-07

A separate agent with no part in the build reviewed `6415c04..6f74833` (the
admission and the build commit) against the plan. It ran the full suite
itself: 941 passed, 4 skipped. No blocker. Two should-fix findings, both
repaired below, and four notes recorded without a code change.

### Finding 1 (should-fix) — a scene-end phrase overrode the named-scope rule

`SCENE_END_FOLLOW_UPS` was matched inside the 18-word marker block, before
the `BOOK_NOUNS` early-out, so a message that names its own scene was
treated as a follow-up and inherited the newest earlier ask's skill.
Verified: after "rank the ten strongest characters", "who won in chapter
2714?" planned `('ranking', 'quick_recall')` with `follow_up='carry'`,
`ranking`'s obligations ("commit to the list, best to worst"), and the short
carry shape. The same happened for "who won, nephis or mordret?", "who died
in the tomb of ariel?", "who lived in the spire?".

Repair: the scene-end check moved after the `BOOK_NOUNS` early-out and the
six-word limit, and returns a distinct kind, `carry_scene`. `plan_for_turn`
carries only when the earlier skill is `scene_explanation`; after any other
kind of answer the outcome question is planned on its own words.

Red proof: with the old rule restored by monkeypatch, all four phrases plan
`['ranking', 'quick_recall']`, `follow_up='carry'`. With the repair they plan
their own route with `follow_up=None`.

Tests: `test_an_outcome_question_that_names_its_own_scene_is_its_own_question`
and `test_the_end_of_a_scene_after_another_kind_of_answer_is_its_own_question`.

### Finding 2 (should-fix) — the plan's turn-3 test was missing and the window was unpinned

The reviewer patched `_final_history` back to `[current]`: 10 of 11
final-phase tests stayed green, only one failed. So the rewritten window test
and the tool-transcript test passed on the old code, and `results.md` claimed
a new contract that was not pinned. A two-exchange window
(`FINAL_HISTORY_TURNS=2`) also passed everything.

Repair:

- `test_the_publication_pass_keeps_a_list_from_three_turns_back` is the
  plan's literal requirement: turn 0 published a ten-item list, the current
  message is turn 3, the list must be in the publishing call. Its answer is
  not the latest one, so the turn brief cannot stand in for it.
- The window test now asserts two exchanges back ("the sea rose", "the shore
  had a colossus") and the oldest exchange out. With
  `FINAL_HISTORY_TURNS=2` it fails.
- `test_the_publication_pass_starts_with_the_reader` covers the orphan case:
  a window cut mid-exchange no longer opens with an answer to a question the
  call cannot see. `_final_history` drops leading assistant messages.

Red proof: with `_final_history` patched to `[current]`, three tests fail
(the two above and the original turn-2 test). 11 pass, which is correct: the
tool-transcript and orphan guards have nothing to catch on the old code.

### Finding 3 (note) — sizing is roomy but not enough for a ten-chapter fight

24,000 characters is the product-wide `PACKET_CHAR_CAP`, so nothing is
breached; `MAX_OPENED_PASSAGES=12` still bounds the passages; tool budget 16
is below `MAX_TOOL_BUDGET` 20. But 24,000 characters is 3-4 chapters, not
ten, and `allowed_chapters` is rebuilt from the kept sources, so a beat
citing a read-but-trimmed chapter can fire `unsupported_chapter` and burn
the one repair. Recorded, not changed: the live run measures whether the
draft carries the earlier beats. If Trial 12 comes back thin around chapters
2709-2711, the fix is one of the two named in the transcript, and it gets
its own evidence then.

Also recorded: `TURN_DEADLINE_SECONDS=240` does not scale with 16 lookups.
A long-fight turn could hit the turn deadline in the live run. That would be
a measured failure, not a guess to patch now.

### Finding 4 (note) — `_final_history` edges left alone

- A retried turn can put the same reader ask in the window twice (the retry
  re-inserts the owner message under a new run). Not repaired: a repeated
  ask is not contradictory, and the fix would touch session retry semantics.
- An interrupted assistant answer persisted as complete can appear in the
  window complete while the reader saw part of it. Same class as the above,
  outside this plan.

### Finding 5 (note) — stale comment, repaired

The comment above the final phase still said old exchanges stay out. It now
says the publishing call carries the thread's own published exchanges and
keeps this turn's tool transcripts out.

Recorded nuance: the prior exchange now appears twice in the publishing call
(the turn brief plus the thread window), and a blockquote copied from an
earlier published answer can be flagged `changed_quote` against this turn's
packet, costing the one repair. Not repaired: stripping quotes from the
window would take away the reader's ability to ask about a quote it saw.

### Finding 6 (note) — plan and record gaps, closed here

- The plan's slice 2 named `_published_exchanges`; the function is
  `_final_history`. The plan text is corrected.
- The plan's slice 2 said "turn 3"; the test now does turn 3.
- This ledger was still the scaffold. It is not now.
- The live run is slice 6 and is still pending, as expected.
- "Only messages the reader actually saw" is met except on the retry edge in
  finding 4.

### No finding

- `EXPOSED_MACHINERY` additions: the positive test is genuinely red on the
  old code, the negative is a guard, and no ordinary phrase collides.
- Nothing else relied on the isolated final-phase call; the "7 daemons" guard
  still passes and the private-draft rule still holds.
