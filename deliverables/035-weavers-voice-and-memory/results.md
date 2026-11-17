# Results

## Status

Slice 2 (voice samples) done 2026-11-17. Waiting on the owner's voice choice
(slice 3). Nothing built.

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
