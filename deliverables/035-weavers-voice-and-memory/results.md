# Results

## Status

Slices 2 to 4 done 2026-11-17: samples shown, the owner chose the
lorekeeper, and it is now the chat voice. Next: the write scan and store.

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
