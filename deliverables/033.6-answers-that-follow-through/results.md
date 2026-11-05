# Results

## Status

Slices 2 to 4 complete, 2026-11-05. No model spend. Slices 5 to 8 not
started.

## Slice 2: diagnosis (from the Plan 033.5 run records)

Sources: the 033.5 trial conversations in the private evaluation database
(12 conversations, 65 answered turns, 66 runs), the trial log, and the private
transcripts. Committed here: counts, check names, chapter numbers. No
answer or novel text.

### 1. The gap answers: earlier reading is never credited

All three gap answers came from the same path: the answer and its one
repair both failed the publication checks, and the last-resort ladder
(drop citations, or drop quotes) could not clear them.

| Turn | Reader push | Failing checks |
| --- | --- | --- |
| long thread, answer 5 | asks about a claim Weaver made two turns earlier | `unsupported_chapter`, `unopened_quote` |
| confusing fight, answer 3 | "still can't picture" the scene painted the turn before | `unsupported_chapter`, `long_quote`, `changed_quote` |
| fanfic, answer 5 | does the scene fit "before chapter 400" | `unsupported_chapter`, `unopened_quote` |

`unsupported_chapter` is in all three. Causes, in order of weight:

1. **Credit for chapters opened in earlier turns has never worked in the
   app** (observation). The turn reloads history from the database
   (`conversation/runner.py`), and persistence stores only a tool result's
   evidence record, unwrapped (`conversation/items.py`). The credit
   function looks for the wrapper key (`_earlier_opened_chapters` in
   `agent/turn.py`), so on real history it finds nothing. Replayed on the
   033.5 history: **204 chapter reads stored, 0 credited.** Its unit test
   builds history in the in-memory shape, so it passed. This is the
   "tests send what the real client sends" lesson again.
2. **Any "chapter N" in an answer counts as a citation**, including a
   chapter the reader named ("before chapter 400") or one only listed by
   title. A fit question cannot be answered without naming the chapter.
   The quote check credits the reader's own words; the chapter check does
   not.
3. **Quote checks see only this turn's passages.** Passage text from
   earlier turns is not stored (by design, it is private), so a quote of
   something opened two turns ago is "unopened". The long-thread push
   quoted Weaver's own earlier claim back at it.
4. **The last-resort ladder tries each strip alone.** All three needed
   both (citations and quotes) removed or repaired.
5. Inconsistency found on the way: a turn that opens nothing skips the
   chapter check entirely (`if allowed_chapters:`), so a cheap follow-up
   may cite anything while a turn that reads more is held strictly. Seen
   in the long thread (answer 8 cites a chapter with no read that turn,
   and passes).

### 2. The stalls: no bound on a call or a turn

| Run set | Canon turns, max | Fanfic turns |
| --- | --- | --- |
| Plan 030 v2 trials (same harness) | 62 s | 13 turns, 50 to 111 s |
| Plan 033.5 trials | 97 s | 55 s, 102 s, **834 s, 984 s**; one run failed after **845 s** with a provider stream error; its retry ran **29,750 s** |

- The same trial took 50 to 111 s per turn in Plan 030 with similar call
  counts, so the 033.5 fanfic times are provider stalls, not long work.
- The provider client's 30 s timeout bounds each network read; a stream
  that keeps sending a little never trips it, and nothing bounds a whole
  call or a turn.
- **Per-call durations are not recorded**, so the stall cannot be pinned to
  a single call. The run record should carry them.
- A 4-minute turn bound would have ended the 834 s and 984 s turns, which
  were judged as passing. That is the intended effect: a 14-minute wait is
  a failure for a reader even when the text is fine.

### 3. The early stop: the model fenced its own search

The confusing-fight question misspelled a name.

- Exact search for the misspelling: 1 hit (ch. 2691). The correct spelling
  appears in 65 chapters, 32 of them between 2680 and 2716, so the scene
  runs well past 2700.
- The model then limited its meaning search to chapters 2680 to 2700 and
  browsed 2680 to 2700, read five chapters up to 2699, and said the fight
  does not happen. It used 5 of 8 lookups.
- Nothing asked it to look past the last chapter it read before making a
  "never happens" or "who won" claim. Exact search does not suggest a
  close spelling.

### 4. Invention stated as canon, and the leaked draft

- **Routing.** "give me one more, but not a wiki dump" (the vague ask's
  fourth push) routes to `companion` (no evidence needed, 2 lookups, no
  final pass, "not for lore"), not the `discovery` skill the thread began
  with. Replayed: the router still picks `companion` with the earlier asks
  given.
- **The claim.** The answer cites a chapter it opened (ch. 2439) for a real
  mechanic, then ties it to an earlier scene and vision with no citation
  of its own and no source. Only citations and quotes are checked, so an
  uncited sentence beside a cited one passes.
- **The model claim inspector** (Plan 029, `agent/claim_inspection.py`) is
  not wired into turns, by Plan 029's choice (cost and false positives).
- **The leaked draft.** The next answer announced a "correction on my end"
  of a title it never published; only the private draft had it. The final
  pass instruction forbids this, and no check enforces it.

### Consequences for slices 3 to 5 (planning agent's decisions)

- **Slice 3, deadlines:** 120 s per model call (above the slowest healthy
  whole turn, 111 s, since per-call times are not stored), 240 s per turn,
  one retry of a timed-out call inside the turn bound, and per-call
  durations in the run record. The admitted proposal was 90 s per call;
  raised because no evidence shows a healthy call fits in 90 s.
- **Slice 4, follow through:** credit earlier reads on the stored shape
  (with a test built from real persisted items); let a turn re-open
  earlier passages by handle so quote checks can see them; treat a chapter
  the reader named as citable context; let the ladder strip citations and
  quotes together before the gap answer; a fence rule: before saying how a
  scene ends or that it never happens, look past the last chapter read;
  exact search offers the close spelling when a name finds almost nothing.
- **Slice 5, canon stays canon:** follow-up routing keeps the thread's
  evidence skill ("one more" is not company); a deterministic check for
  draft-edit announcements; an uncited recalled-scene sentence beside
  cited ones is rejected or labelled as a read.

Each fix is checked by a test built from the real failure's shape, then
the full floor.

## Slice 3: time limits (built)

- Every model call: 120 s. Every turn: 240 s. A call gets the smaller of
  its limit and what is left of the turn.
- The call has its own stop signal, set by the limit or by the reader.
  Providers answer a stop with an "aborted" reply rather than an error,
  so the limit is tracked by its own flag: a timeout never reads as the
  reader pressing stop.
- A timed-out call is retried once per turn, inside the turn's time. If it
  still has nothing checked to publish, the turn fails cleanly with
  `model_timeout` and the reader sees "Weaver took too long to answer.
  Try again." with the app's existing retry. A timeout is never covered
  with the gap answer. A stalled final reread publishes the draft that
  already passed the checks.
- Each run now records `call_seconds`, the time of every model call.
- Tests (10, `tests/test_turn_deadlines.py`): a stream that trickles
  forever and one that goes silent, both shaped like the real provider
  (stop answered with an aborted reply); retry then answer; repeated stall
  ends clean and retryable; the turn limit bounds the retry; a call after
  tools gets only the time left; a stalled reread publishes the checked
  draft; the reader's stop is still an interruption; durations recorded;
  the default limits.
- Floor: backend 906 passed, 4 skipped (896 plus 10 new); ruff adds no
  finding on the changed files. Frontend untouched.

## Slice 4: follow through (built)

- **Earlier reads count.** `_earlier_evidence` reads both the stored
  record and the in-memory wrapper. Tests build history through the real
  save and reload path. Replayed on the 033.5 history: every conversation
  with reads now credits its chapters (for example 12 distinct chapters in
  the confusing fight, 13 in the long thread), where it credited 0.
- **Earlier passages are re-opened, not just credited.** When a draft cites
  a chapter opened in an earlier turn, that passage's stored record goes
  into this turn's reading packet, and the packet builder reads it again
  from the library. The quote checks, the citation check and the final
  reread all see the text. An earlier passage the draft does not cite is
  not added.
- **A chapter the reader named can be named back.** "It fits before
  chapter 400" passes when the reader asked about chapter 400; "(ch. 400)"
  as a source still needs the chapter opened.
- **Last resort trims both.** Before the gap answer, the fallback now also
  tries the answer without block quotes and without unopened citations
  together.
- **Reading on.** A draft that says the outcome is not shown ("no verdict
  on the page", "the passage stops", "never happens") while the next
  chapter is unread and inside the reader's limit is sent back once to
  open it. Measured on every published answer from the Plan 030 v2 and
  033.5 trials: 3 of 141 match, two of them the confusing-fight answers;
  the third costs one extra read in a half-memory answer. Not for fanfic,
  and not when the lookup budget is spent.
- **Deferred:** a close-spelling hint for exact search (the reader's
  misspelling found 1 chapter). It needs a name index, which is search
  work this plan leaves out; the read-on check covers the trial's failure.
- Unchanged and recorded: a turn that opens nothing still skips the
  chapter check; its earlier-citation guard now works because the credit
  does.
- Floor: backend 916 passed, 4 skipped (906 plus 10 new); ruff adds no
  finding on the changed files.
