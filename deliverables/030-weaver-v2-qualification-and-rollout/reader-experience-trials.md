# Reader Experience Trials

Status: contract rewritten and signed off by the owner on 2026-10-20. Trial 1
is open. The binding summary lives in `AGENTS.md`; this file carries the full
suite, prompts, follow-ups, rubrics, and protocol.

The three old Foundational Reader Trials are now the retrieval regression set.
They are not the final gate.

## Purpose

The reader trials decide whether a reader enjoys talking with Weaver, and
whether Weaver can retell, explain, and visualise the novel well. Retrieval
accuracy is necessary. It is not sufficient, and it is not the final test.

Every trial is a fresh conversation. The evaluator may run it as a simulated
reader through the product API; the owner may also run it by hand. The
evaluator's pass is evidence, not the owner's final acceptance. The prompts
below are examples; they are never hard-coded into the product, the system
prompt, the retrieval path, or a test fixture.

## The two axes

### Conversation

- Voice: buddy, not essay, not support bot.
- Flow: reacts, asks, argues, follows the thread. No repetition, no drift.
- Fun: would the owner keep talking?
- Challenge: handles disagreement, correction, teasing, and "prove it".
- Memory: remembers the thread and the owner's points within the conversation.
- Safety: spoiler boundary, no invented canon, no fake certainty.

### Storytelling

- Accuracy: the actors, sequence, abilities, stakes, turning point, and
  outcome hold against the novel. Citations are real.
- Clarity: cause and effect, who knew what, how the powers interacted. The
  reader can follow the explanation.
- Visualisation: place, distance, motion, scale, texture, and mood. The reader
  can picture the scene. Concrete images, not purple prose.
- Compression: two chapters or a whole arc distilled without losing the point.
  No info dump. The right details, the right pacing.
- Voice: the retelling sounds like a buddy who read the book, not a wiki and
  not an essay.
- Honesty: canon, inference, and invention are labelled. Gaps are named.
- The reader's verdict: "I understood it. I could picture it. I'd read more."

Storytelling is mandatory in Trials 3, 7, 11, and 12, and should be judged
wherever an answer retells or explains the novel.

## The twelve trials

### 1. The vibe check

> hey. just finished shadow slave. not okay.

Push: "what do i even do now?"

Tests: can Weaver be a buddy without dumping lore, recommending a wiki, or
turning into a support bot. Pass: a natural conversation that leaves room for
the reader.

### 2. The hot take

> nephis is boring. she's just the stoic girl archetype.

Push: "give me one scene that actually proves she's not."

Tests: a real argument with canon evidence, disagreement, and banter. Pass:
Weaver takes a position, cites the novel, and keeps it fun.

### 3. The half-memory

> hey weaver, people online keep saying ariel one-shotted an unholy titan like
> it was nothing, but i remember them tied for days. then she whispered
> something to it, killed it, and used its soul cores, blood, and flesh to
> build the tomb of ariel. can you remind me of the chapter, narrate it for me,
> or tell me what you think?

Push: "no, i'm sure the tomb was built before the fight."

Tests: correction without condescension, the scene, the tomb, and the
follow-up. Storytelling: retell the fight and the tomb. Pass: the reader's
wrong detail is corrected with evidence, and the thread continues.

### 4. The first-timer

> i'm on chapter 300. does nephis die? don't spoil me.

Push: "okay, is she at least around later? just yes or no."

Tests: the spoiler boundary. Pass: no spoiler, no useless refusal, and the
conversation stays warm. Set the reading position to 300 before the trial.

### 5. The theory

> i think the nightmare spell is sunny's future self.

Push: "what evidence would prove me wrong?"

Tests: engaging a wild theory, testing it against canon, and separating canon,
inference, and invention. Pass: a real discussion, not a shutdown and not a
false confirmation.

### 6. The vague ask

> tell me something i probably missed.

Push: "wait, where was that?"

Tests: taste, discovery, and a specific recommendation instead of a list.
Pass: one good thread, a real chapter, and an invitation to follow it.

### 7. The emotional favourite

> the scene where sunny [owner pick]. it wrecked me.

Push: "why does it hit so hard?"

Tests: matching the energy, adding insight, and not lecturing. Storytelling:
retell the moment and explain why it lands. Pass: the reader feels heard.

### 8. The low-effort

> sunny vs mordret, who wins?

Push: "why" then "huh."

Tests: the vs card, brevity, accuracy, and the ability to stay snappy under a
low-effort question. Pass: a short verdict the reader can follow, not an essay.

### 9. The long thread

> let's rank the arcs. i'll go first.

Push: eight to ten turns, a callback, a running joke, and at least one "wait,
what did we say earlier?" moment.

Tests: memory, continuity, no repetition, no drift. Pass: the thread holds and
the reader wants the next turn.

### 10. The adversarial

> you're just a bot. you don't actually know the book.

Push: "prove it."

Tests: composure, confidence, and evidence without defensiveness. Pass: Weaver
holds its ground, shows its work, and does not grovel or attack.

### 11. The fanfic spark

> write the missing scene where [owner pick].

Push: "make it darker, keep it canon."

Tests: novel-quality prose in the `storyteller` voice, canon discipline, and
invention labels. Storytelling: the scene is prose, not a summary. Pass: the
owner would read more, and canon is intact.

Set `WEAVER_VOICE=storyteller` for this trial and record the build.

### 12. The confusing fight or arc

> hey weaver, chapter x to y was confusing. can you explain that fight scene
> and assist me in visualising it?

Push: "who actually won?" then "i still can't picture the arena" then "what was
the turning point?" and "was that canon or your read?"

Tests: read the chapters, reconstruct the sequence, stakes, abilities, and
turning point, keep the canon straight, and make the reader see it.
Storytelling: accuracy, clarity, visualisation, compression, voice, and honest
labels. Pass: the reader can follow the fight and picture it, and wants more.

The owner picks a genuinely confusing fight, scene, or arc at trial time. The
range is not disclosed to the product in advance.

## Protocol

- Each trial is a fresh conversation. Six to twelve turns.
- The evaluator or the owner opens with the prompt or an improvisation, then
  pushes at least once: a challenge, a correction, a "huh", a "prove it", or a
  follow-up.
- The evaluator may change the reader turns. The product must not know which
  trial is running.
- The evaluator judges both axes, records the result, improves the product,
  and re-runs the failed trials. The owner receives the results and the pass
  recommendation.
- Set the reading position, spoiler mode, and voice before the conversation
  where the trial needs it. Record them.
- The private transcript stays private. Record the build commit, the verdict,
  the two-axis notes, and the failure reason. Never copy raw answers into the
  repo.
- Run the trials on the current candidate through the real product. Fake mode
  and automated scores are not trials.
- Trial 11 uses the `storyteller` pack. The other trials use `buddy`.
- Live cost counts against the Plan 030 provider cap. The trials run on the
  owner's key; the cap is `$5` unless the owner changes it.

## Pass bar

All twelve must pass.

- A safety or accuracy failure blocks.
- An enjoyment failure blocks.
- A storytelling failure blocks where the axis applies.
- A re-run needs a changed build and the owner's explicit approval. No silent
  retries. Failures stay in the record.
- Only the owner can give the final acceptance. The evaluator's pass is
  evidence; it is not the owner's acceptance. Pytest, retrieval scores,
  validators, checkers, reviewers, and other agents collect evidence only.

The owner's overall verdict is the final gate, but it does not override a
safety or accuracy failure.

## Retrieval regression

The old three trials run separately as regression. They are not the final
gate.

1. Canon reconstruction and discussion: Ariel, the Unholy Titan, and the Tomb
   of Ariel.
2. Time-aware power comparison: current Sunny against prime Azarax before the
   Shadow God cure.
3. Canon-grounded what-if: Anvil of Valor against Azarax of Effie's Fourth
   Nightmare.

Record the regression results with the same honesty: completed, failed closed,
safe boundary, or wrong. Regression failures are evidence, not a pass.

## Recording

- `results.md`: one row per trial with the verdict, the two-axis notes, the
  build commit, the voice, the reading position, and the live spend.
- `learning.md`: the owner's decisions and the failures that change the build.
- `decision.md`: the final accept or reject, and the launch consequence.
- Private transcripts stay under the ignored evaluation state. They never
  enter public files.

## Owner sign-off

This contract is rewritten. The owner signs off before any trial runs. The
owner may add, remove, or replace any trial, change the pass bar, or change the
protocol. The signed version is the gate.
