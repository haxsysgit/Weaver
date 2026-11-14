# Learning Note

## Gate status

**Admitted 2026-11-07** by the owner ("alright admit, but do what you think
is best, dont over complicate and over engineer"). No separate learning gate:
the diagnosis was confirmed from the 033.6 transcripts and the code on
2026-11-07, before admission.

## Accepted decisions

1. **2026-11-14, owner.** Stop being stuck on the 033 family, which had lost
   sight of the actual goals, and continue without approval prompts. The
   plan closes on this directive. The two target trials pass; the full
   twelve-trial gate is not re-passed and is carried to Plan 040.
2. **2026-11-07, owner.** Admit 033.7. Trim it as the executor sees fit; do
   not over-complicate or over-engineer.
2. **2026-11-07, executor within decision 1.** The plan carries four small
   changes and nothing else:
   - the publication pass gets the thread's own published exchanges;
   - end-of-scene follow-ups carry the scene skill;
   - the scene read is sized to a fight (16 lookups, 24,000-character packet);
   - the exposed-machinery check learns the phrases the transcripts show.
3. **2026-11-07, executor within decision 1.** Dropped from the draft:
   - the Plan 033 check set (it is Plan 034's, and it was already failing
     before 033.6, so it cannot be a 033.7 gate);
   - trim-variant logging (triage comfort, not a gate);
   - the planned "outcome cannot contradict its own evidence" check (too
     fuzzy to build honestly here; replaced by reading the resolution, and
     measured in the live run).

## Hypotheses

- **H1.** The Trial 9 failure is memory, not judgement: the publication call
  cannot see earlier answers. Giving it the last exchanges fixes the
  callbacks, the "no changes" falsehood, and the invented third place.
- **H2.** The Trial 12 failure is budget and routing, not knowledge: eight
  lookups cannot reach the end of a ten-chapter fight, and the follow-up
  drops to four. Sixteen lookups with the scene skill carried lets the same
  turn reach the resolution.
- **H3.** Both fixes work for any long thread and any fight, so the trial
  prompts stay examples and nothing keys on their wording.

## Observations (confirmed, not hypotheses)

- `final_history` in `agent/turn.py` is built from the current reader
  message alone; earlier turns are absent from the publishing call.
- `prior_weaver_position` is cut to 2,000 characters, so a two-turn-old list
  survives only as an excerpt, if at all.
- "who actually won?" routes to `quick_recall` (4 lookups): no scene
  follow-up marker matches, so the carry machinery is never reached.
- `scene_explanation` carries `tool_budget=8` and `packet_cap=16_000`; a
  2701-2800 chapter file is about 6.5 KB, so a ten-chapter fight is about
  65 KB of prose.
