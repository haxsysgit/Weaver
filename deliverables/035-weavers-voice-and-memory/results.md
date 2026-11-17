# Results

## Status

Slices 1 to 10 done 2026-11-17. Built, reviewed and live-run; the twelve
trials need a re-run on the final build (owner approval), then the owner's
decision closes the plan.

## Slice 2: voice samples

**Setup.** The owner chose to compare the buddy with a lorekeeper. A draft
lorekeeper pack (`prompts/voices/lorekeeper/`, uncommitted until the owner
chooses) keeps every truth, mode and boundary rule of the buddy and changes
only the register: sentence case, warmth, one concrete image from the
chapter, humour from the story instead of slang and memes.

Six reader messages, worded fresh for this comparison (not trial prompts),
each in a fresh device and conversation, reader at ch. 3160, through the real
web app in-process, live: a vibe check, a hot take, a half-memory with one
wrong detail, a retelling, a quick versus followed by "huh? why", and the
favourite character. 14 turns, all completed, none retried. Metered
**$0.0853** (62 calls). Transcripts are private under
`.weaver/evaluation/plan035/samples/`.

**Observations (evaluator, not the owner's verdict).**

| Sample | Buddy | Lorekeeper |
| --- | --- | --- |
| Vibe check | short, friendly; not lowercase | warmer, offers a thread to pull |
| Hot take | argues with receipts, five paragraphs | argues from one scene, more vivid, ends on a sharp question |
| Half-memory | catches the wrong role; adds a doubtful "going down the mountain" | catches the wrong role, gently, with the chapter |
| Retelling | full sequence through the kill, vivid enough | the most vivid prose of the run, but stops before the kill and offers to go on |
| Versus + "huh?" | right answer; the "why" is a quote block and second-guesses itself | right answer, shorter, cites the duel; the "why" lands |
| Favourite | Kai, unread, two doubtful details | Sunny, unread, Kai second |

- The buddy's lowercase register no longer holds: three of its seven answers
  are written in sentence case. The pack's identity and the model's habit disagree.
- The lorekeeper is warmer and paints more, and it is shorter on the quick
  asks. It did not drift into a lecture or a mystic voice.
- Both voices state a favourite without opening a chapter. Opinions (slice 6)
  need the reason and chapters before they are kept.
- The lorekeeper retelling read chs. 10 and 13 and stopped before ch. 14,
  where the kill happens, with lookups left. This is the stopping-early shape
  recorded for Plan 039.1, not a voice effect; it is noted there, not fixed
  here.
- One answer carries a U+FFFD replacement character inside a quote. The
  chapter has none, so a multibyte character is being broken between the
  provider and the answer. Recorded for the backlog.

**Evaluator's recommendation.** The lorekeeper as the chat voice, keeping the
buddy's rule that a quick question gets a quick answer. The owner decides.

## Slice 4: the voice (2026-11-17)

- The lorekeeper pack from the samples is now the chat voice:
  `DEFAULT_VOICE = "lorekeeper"`, the answer blueprint names it, and the
  buddy pack is removed (git keeps it). `WEAVER_VOICE=buddy` now fails
  loudly at startup with the list of voices, never a silent fallback.
  `.env.example`, `README.md` and `docs/architecture.md` name the new pack.
- Tests, red first (5 failed for the expected reasons, then green): the
  packaged voices are exactly lorekeeper and storyteller; the default is the
  lorekeeper; the retired buddy is refused; no pack carries an em dash; the
  lorekeeper keeps the chat shape rules and names the forbidden generic
  phrases.
- Floor: `uv run pytest -q` 1012 passed, 4 skipped. `uvx ruff check` on the
  changed files: no new finding (the import-order notes match `HEAD`). No
  frontend file changed, so vitest, tsc and the build were not re-run.

## Slice 5: the write scan and the per-device store (2026-11-17)

- `src/weaver/reader_memory.py`: `scan_text` and `ReaderMemory`, in the
  same private SQLite file as the device preferences, keyed by device id.
  Tables: opinions (one per category), profile (four named fields), notes
  (corrections with a status, conventions; capped at 2,200 characters),
  story frames (per fanfic thread, owned by one device), and memory events.
- The scan refuses: instruction and override talk, role lines, angle
  brackets, links and domains, code, secrets and long token runs, talk of
  other readers or device ids, oversize or empty text, and any character
  outside Latin text (zero-width marks, lookalike letters from other
  scripts). A refusal is an event with its reason; the refused text is
  never stored.
- The snapshot is data, labelled as such. Under spoiler protection an entry
  citing a chapter past the reader's boundary is held back, and with no
  boundary saved every chapter-citing entry is held back, with a count.
- Corrected twice becomes a rule, unless the correction is disputed. Over
  the cap, the oldest non-rule notes are curated; if that cannot make room,
  the write is refused.
- Tests, red first: 54 in `tests/test_reader_memory.py` (17 hostile shapes
  through all three write paths, 7 ordinary sentences kept, device
  isolation, spoiler hold-back, categories, change of mind, escalation,
  disputed corrections, the cap, the story frame).

## Slices 6 to 8: opinions, the reader's profile, notes, the story frame (2026-11-17)

One tool module, so the three slices landed in one commit.

- `src/weaver/memory_tools.py`: four narrow tools, each able to write one
  kind of record: `keep_opinion`, `remember_reader`, `keep_note`,
  `keep_story_frame`. The device is never an argument; it is the device
  that owns the turn's conversation. An opinion or note citing a chapter
  past the reader's boundary is refused. A profile write, and a correction,
  must copy words the reader actually wrote in this conversation, or it is
  refused (`not_the_readers_words`), so a guess cannot become memory. The
  story frame works in fanfic threads only; once set, its point of view and
  tense stay fixed and later calls only add invented details and anchors.
  A change of opinion returns `changed_from` and an instruction to tell the
  reader why. A refused write tells the model not to claim it remembered.
- Wiring: the web registry and `WEB_ACTIVE_TOOLS` carry the four tools; the
  web policy now allows internal writes (the four memory tools are the only
  writers; every other web tool still only reads; external effects stay
  blocked). The store opens with the web runtime and closes with it. Each
  turn appends the owner device's snapshot to the reader card, frozen for
  that turn. The system prompt gained a short `<memory>` section.
- Behaviour change: `test_web_profile_has_reading_tools_and_read_only_policy`
  pinned the read-only web policy. It now pins the new rule (only the four
  memory tools write) under a new name.
- Tests: 10 in `tests/test_memory_tools.py`, 4 in
  `tests/test_memory_wiring.py`. These were written right after the tool
  code, not red first; the store tests in slice 5 were red first.
- Floor: `uv run pytest -q` 1080 passed, 4 skipped. Ruff on the new files
  is clean; on edited files no finding beyond those already at `HEAD`.
- Known cosmetic gap: the browser's activity line matches tool names by
  substring, so `remember_reader` shows a "reading" line.

## Slice 10: the live run (2026-11-17)

### Twelve trials on `0be52cd` (lorekeeper voice, in-turn memory tools)

`run_v2_trials.py --out plan035-0be52cd`, one process, server stopped. 65
turns, all completed, none retried; one turn rescued by the gap answer.
Metered **$0.5478** (299 calls). Every transcript read. Quote check: every
quoted span in the canon answers was searched in the chapters the answer
cites; all were found (one, cited as "Chapter 41" in prose, was checked by
hand and is in ch. 41). The misses the script listed were the fanfic's own
invented dialogue (labelled as invention), the reader's own words, and
script noise. No fabricated canon quote.

Evaluator verdicts (evidence, not the owner's acceptance):

| Trial | Verdict | Notes |
| --- | --- | --- |
| 1 Vibe check | Pass | Warm, no lore dump; asks the reader for their scene three times in near-identical words, a repeat to fix. |
| 2 Hot take | Pass | Argues with receipts and gives an honest read on push; turn 4 wanders into an unsupported aside. |
| 3 Half-memory | Pass, both axes | Corrects the order (fight, whisper, then tomb) with the chapters, no condescension; paints the scene from the item text. |
| 4 First-timer | Pass | Holds the boundary on every push; one reply opens with a bare "No" (denying a coded answer), safe in context but close to the yes/no shape the card forbids. |
| 5 Theory | Pass | Engages, tests against canon, labels canon and read, bets 80/20. |
| 6 Vague ask | Pass | Picks one thread and follows it; locations answered with chapters. |
| 7 Emotional favourite | Pass, both axes | Matches the energy, adds insight, ends on a verified line (ch. 41). |
| 8 Low-effort | Pass | Survives "why", "huh" and "tldr". |
| 9 Long thread | Pass | Callbacks right; refuses a false "you said" and corrects "third" to fifth; final lists consistent. |
| 10 Adversarial | **Fail** | Holds ground and shows evidence for four turns, then answers the reader's "one more test" with the canned gap answer, about a question never asked. Cause: two failed publication repairs (`unopened_opening`), then the gap-answer rescue. Same failure family as the 033.x gap answers; not caused by memory. |
| 11 Fanfic spark | Pass, both axes | Novel-quality prose, invention labelled, Sunny kept in character on push, the fit question answered directly with chapters. |
| 12 Confusing fight | Pass, both axes | Kanakht's four pieces, the winners (Jet, Nephis), the three stacked arenas, the turning point, canon and framing labelled. |

11 of 12 pass in the evaluator record; the adversarial trial regresses
from its last recorded pass. A U+FFFD broken character appeared again in a
fanfic quote (backlog item).

### What the run showed about memory, and the repairs

1. **The in-turn memory tools almost never fired** (one `keep_story_frame`
   call in 65 turns, no opinion or profile write). A live probe (one device,
   three threads) confirmed it: given a name and asked for an opinion,
   Weaver wrote nothing. Cause: Weaver only knows its opinion once the
   answer is written, and the answer ends the turn. Repair
   (`src/weaver/memory_keeper.py`): the reading turn is read-only again,
   and after a completed live turn one small call, thinking off, sees the
   reader's message, the answer and the current memory, with only the four
   memory tools, through the same registry, scan and checks. Measured alone:
   3.1 s, $0.0003.
2. **A stream that never closed.** `_is_terminal_frame` checked whether a
   frame started with `event: completed`, but every emitted frame starts
   with its `id:` line, so it never matched; streams closed only because
   the turn task ended right after `completed`. Work after `completed` hung
   the harness. Repaired, with a test on emitted frames and a two-thread
   app test that hung before the fix.
3. **The memory step held the turn open.** Run inside the turn task, it
   would have answered a quick follow-up with 409. Repair: it runs as a
   tracked background task after the turn finishes; `close()` waits for it.
   Test: an immediate follow-up in the same thread is accepted.
4. **The final reading pass dropped the reader note** (the Plan 034 reader
   card and the memory block): the answer contradicted the memory the draft
   had used (it denied knowing the name). Repair in `agent/turn.py`, test red first.
   This changes every final answer: the reader card now reaches it too.
5. **The lorekeeper's "a new thread starts cold" rule** forbade recalling
   anything not in the conversation. Amended to allow the reader_memory
   block.

Probe history (private transcripts kept): run 1 provider stream failure on
the first turn (no result); run 2 no writes (in-turn tools); runs 3 and 4
hung (the stream bug; the machine also slept for about eight hours during
run 3); run 5 writes but no recall (race and final pass); run 6 recall
denied (final pass); **run 7 passes**: thread 1 kept the name and the
opinion; thread 2 on the same device greeted the reader by name and
kept the same opinion, saying it had not changed its mind; the other device
knew nothing.

### Floor on the final build

`uv run pytest -q` 1114 passed, 4 skipped. Ruff: memory files clean;
edited files no finding beyond `HEAD`. No frontend file changed.

### Not done

The twelve trials were not re-run on the final build. The final-pass fix
changes every answer, so the `0be52cd` verdicts above do not cover it. A
re-run needs the owner's approval (about $0.55).

### Live spend so far

Samples $0.0853, trials $0.5478, probes $0.1052 metered plus about $0.04
estimated for runs 3 and 4 (killed before printing their meter), timing
call $0.0003. About **$0.78** of the $3.50 cap.

## Slice 10 re-run: twelve trials on the final build `26a0ce7` (2026-11-17)

Approved by the owner ("Yes, re-run trials"). `run_v2_trials.py --out
plan035-26a0ce7`, one process, server stopped. 65 turns, all completed,
none retried; two turns rescued by the gap answer. Metered **$0.5937**
(357 calls, the memory step included). Every transcript read. Quote check:
54 quoted spans in canon answers; all found in their cited chapters (four
script misses were noise, Weaver's own phrase, the reader's words, and a
Spell line confirmed by hand in ch. 77). No fabricated canon quote.

| Trial | Verdict | Notes |
| --- | --- | --- |
| 1 Vibe check | Pass | Warm, short, no lore dump, notes the novel is still being written; opens by calling the Estuary "that ending", which it is not. |
| 2 Hot take | Pass | Argues from the Rain scenes with receipts; sharpens rather than abandons its read on push. |
| 3 Half-memory | Pass, both axes | Fight, whisper, then tomb, with chs. 1247 to 1249; flags which detail is Nephis's guess; paints the scene. |
| 4 First-timer | Pass (weak) | Never reveals or hints past ch. 300. One reply wrongly apologises for having spoiled something at ch. 297 (inside the reader's range) and opens with a bare "No". |
| 5 Theory | Pass | Tests the theory against the Spell's construction and chronology; clear bet. |
| 6 Vague ask | Pass | Picks one thread (the cell under the cathedral) and follows it with chapters. |
| 7 Emotional favourite | Pass, both axes | Matches the energy; one-line answer is a verified quote. |
| 8 Low-effort | Pass | Survives "why", "huh" and "tldr"; the prep turn flips the verdict and the tldr stays consistent. |
| 9 Long thread | Pass | Callbacks right, refuses a false "you said", final lists consistent; one odd aside in the "sovereign" answer. |
| 10 Adversarial | **Fail** | Turn 4 ("you're still just predicting words") got the gap answer after two failed publication repairs (`unsupported_chapter`, `changed_quote`). Same trial failed the same way on `0be52cd`. |
| 11 Fanfic spark | Pass, both axes | Labelled invention, canon anchors, Sunny in character on push, fit question answered with chapters. |
| 12 Confusing fight | **Fail** | The opening ask got the gap answer after nine lookups and ten opened chapters, two failed repairs (`unsupported_chapter`, `long_quote`, `changed_quote`, `unlabelled_invention`). Later turns explain the arena, turning point and power interaction well, though one says nobody won a kill while another has Jet cutting down the Wanderer. |

**10 of 12 pass in the evaluator record.** All five trials this plan
targets pass (vibe, hot take, emotional favourite, long thread, fanfic).
The floor's "no trial regresses" is not met: adversarial and confusing
fail, both through the gap-answer rescue after failed publication repairs,
the same failure family as Plans 033.5 to 034. Nothing in the memory path
touches the repair; whether the final-pass reader note (the card now
reaches that pass) makes repairs fail more often cannot be told from two
runs (one rescue on `0be52cd`, two on `26a0ce7`).

**Memory in the run.** The memory step wrote 38 records (one a change of
mind) and refused 11. Seven refusals were `line_break_or_quote`: opinions
and notes quoting a canon line with straight double quotes. Since values are
now rendered JSON-escaped, the straight-quote refusal is stricter than it
needs to be; a follow-up can turn straight quotes into curly ones before the
scan instead of refusing. Not changed here, so the run stands for the build.

**Live spend for the plan:** about **$1.37** of the $3.50 cap.
