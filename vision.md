# Weaver

Numbered experiments, evidence, and decisions are indexed in
[`plans/README.md`](plans/README.md). This vision document stays stable while
individual slices evolve.

## Project Vision

Weaver is a synthetic lifelong reader.

Its purpose is not merely to search a novel, answer lore questions, or retrieve
relevant paragraphs. Weaver should feel like an attentive, opinionated reader
who has absorbed the entire story and can hold a real conversation about it.

It should be able to:

- Recall obscure details and scenes.
- Retell events as coherent stories.
- Explain why a scene matters.
- Follow character development across thousands of chapters.
- Connect setup, callbacks, consequences, themes, and foreshadowing.
- Distinguish what happened from what characters believed at the time.
- Form interpretations and defend them with evidence.
- Offer opinions that remain coherent across conversations.
- Speculate and imagine beyond canon without presenting invention as fact.
- Revisit and revise its understanding when new chapters or better arguments
  appear.

Matchups, theories, scene explanations, criticism, emotional reactions, and
counterfactuals are all useful expressions of this deeper ability. None of them
is the organizing purpose of the system.

The name **Weaver** reflects the job: weaving scenes, facts, timelines,
characters, themes, interpretations, and conversations into a connected
understanding of the novel.

---

## The North Star

A conversation with Weaver should feel less like querying a database and more
like talking late at night with someone who has read the same enormous story,
remembers it unusually well, has thought about it, and is willing to disagree.

Weaver should handle conversations such as:

- "Remind me what happened when Sunny first arrived there."
- "Tell that arc from Cassie's point of view."
- "Why did that scene feel so unsettling?"
- "Did Sunny make the right decision?"
- "When did his attitude toward fate begin to change?"
- "That reveal was foreshadowed, right?"
- "Which apparently minor event had the biggest later consequences?"
- "I think this character is badly written. Do you agree?"
- "What do you think this unresolved detail means?"
- "Imagine Morgan became Supreme. How would that change a fight with Sunny?"
- "Explain this whole storyline like a tragedy."

The system succeeds when these feel like different modes of one well-read mind,
not separate features connected to a search box.

---

## What "Knowing the Novel" Means

Knowledge is not one capability. Weaver needs several kinds of knowing that
work together.

| Kind of knowing | What Weaver should be able to do |
| --- | --- |
| Literal recall | Find names, phrases, objects, actions, and exact details. |
| Episodic memory | Reconstruct what happened throughout a scene or sequence. |
| Narrative understanding | Explain how events form a larger story. |
| Temporal knowledge | Know what was true, known, or believed at a given point. |
| Character understanding | Reason about motives, emotions, contradictions, and growth. |
| Causal reasoning | Connect choices and earlier events to later consequences. |
| Global synthesis | Discuss changes spanning hundreds or thousands of chapters. |
| Thematic understanding | Track motifs, symbols, parallels, and recurring questions. |
| Interpretation | Offer defensible readings of ambiguous material. |
| Criticism | Judge pacing, construction, characterization, and narrative choices. |
| Personal opinion | Develop persistent, revisable preferences and judgments. |
| Speculation | Build plausible theories or counterfactuals from the story's rules. |
| Storytelling | Retell material with the right shape, emphasis, and perspective. |

These capabilities give us the real research agenda. A single RAG pipeline
cannot provide all of them.

---

## Core Principles

### The original novel remains ground truth

Every summary, graph, character profile, and interpretation is a derived
memory. Derived memories can be incomplete or wrong. Weaver must always be able
to reopen the relevant text and reconsider its answer.

### RAG is a tool, not the architecture

Retrieval helps Weaver reopen parts of the book. It does not, by itself, create
an understanding of the whole story. Weaver will likely combine search,
structured memories, summaries, long-context rereading, reasoning, and
reflection.

### Structure should earn its place

We should not build a knowledge graph, vector database, agent swarm, or custom
ontology merely because the technique exists. Each technique should solve a
demonstrated failure and be compared with simpler alternatives.

### Interpretation and canon must remain separate

Weaver is allowed to infer, judge, speculate, and invent. It must not quietly
turn those acts into canon.

Useful epistemic labels include:

- `CANON`: directly supported by the novel.
- `INFERRED`: a conclusion drawn from canon.
- `INTERPRETATION`: a defensible reading rather than a factual claim.
- `OPINION`: Weaver's evaluative position.
- `SPECULATION`: a prediction or theory about unresolved material.
- `HYPOTHETICAL`: something deliberately invented for a scenario.
- `ASSUMPTION`: an unspecified condition Weaver chose so it could proceed.

These labels do not all need to appear in every response. They should shape the
reasoning and become visible when the distinction matters.

### Weaver should reread before bluffing

For difficult questions, the agent should be able to notice missing context,
search again, follow references, compare conflicting passages, and only then
answer. One retrieval call followed by confident prose is not enough.

### Opinions should persist but remain revisable

Weaver should not produce a random fresh opinion on every turn. It should
remember important interpretations, explain their evidence, encounter
counterarguments, and change its mind for understandable reasons.

### The project is learning-first

Powerful coding agents can write most of the implementation. Our work is to
understand and record:

- Why a technique was introduced.
- Which failure it addresses.
- What alternatives were considered.
- What it improves.
- What it makes worse.
- How we tested the decision.
- What evidence would make us reverse it.

---

## Weaver's Memory Systems

Weaver should not force the entire novel into one representation. It needs
several complementary memories.

```text
                         Original novel
                               |
                    repeated reading passes
                               |
        +----------------------+----------------------+
        |                      |                      |
   scene memory          world memory          meaning memory
   what happened         what is true          what it means
        |                      |                      |
        +----------------------+----------------------+
                               |
                       narrative memory
                   how everything connects
                               |
                    conversational Weaver
                               |
               recall, explain, judge, imagine
```

### 1. The complete text

The chapters are Weaver's external episodic memory and the final source of
evidence.

Possible techniques:

- Exact full-text search.
- Semantic embedding search.
- Hybrid lexical and semantic search.
- Late-interaction retrieval.
- Metadata filtering.
- Reranking.
- Long-context rereading of chapters or arcs.
- Iterative search controlled by the agent.

No one method wins every query. Exact search is excellent for phrases and
names. Semantic search can find conceptually related passages. Long-context
rereading preserves narrative flow but costs more and can dilute attention.

### 2. Scene memory

Chapters are publishing units. Scenes are closer to how readers remember
experience.

A scene memory may contain:

- Source chapter and text boundaries.
- Participants and location.
- Approximate position in the timeline.
- Visible actions and important dialogue.
- Character goals and emotional movement.
- Information revealed or concealed.
- Immediate outcome.
- Later consequences.
- Links to earlier setup and later callbacks.
- A concise retelling.

Scene memory supports explanation and storytelling better than arbitrary token
chunks. Its risk is that scene boundaries and interpretations are subjective,
so the original text must remain attached.

### 3. Narrative memory

Narrative memory connects isolated events into stories:

```text
cause -> decision -> action -> consequence -> later payoff
```

Possible representations include:

- Event timelines.
- Character-specific storylines.
- Relationship histories.
- Causal links.
- Setup and payoff links.
- Arc and sub-arc structures.
- Hierarchical summaries:
  scene -> chapter -> sequence -> arc -> saga -> whole novel.

This memory enables questions whose answers span large distances in the book.
It also helps Weaver retell events with a beginning, movement, and consequence
instead of dumping retrieved facts.

### 4. World memory

World memory tracks the evolving fictional reality:

- Characters and aliases.
- Locations, factions, lineages, and institutions.
- Abilities, ranks, Attributes, equipment, and transformations.
- Relationships and allegiances.
- Rules of the world and power system.
- Historical events.
- Open mysteries.
- Claims later revealed to be mistaken.

This memory must be temporal rather than a single mutable wiki page. Weaver
should be able to distinguish:

- What was objectively true.
- What the reader knew at a particular chapter.
- What a specific character knew.
- What that character merely believed.
- What was concealed or misrepresented.
- What later revelations changed.

Otherwise Weaver will explain early scenes using knowledge nobody possessed at
the time.

### 5. Meaning memory

Meaning memory stores the results of reflection:

- Themes and motifs.
- Symbolism.
- Mirrored characters and situations.
- Moral tensions.
- Narrative patterns.
- Possible foreshadowing.
- Alternative readings.
- Criticism of pacing, characterization, and structure.
- Supporting and opposing evidence.

An interpretation should not be stored as a context-free statement. A useful
entry looks more like:

```text
Interpretation:
Sunny's relationship with fate gradually changes from fear to negotiation.

Supporting material:
Scenes A, B, and C.

Counterevidence:
Scene D suggests he is still primarily trying to escape it.

Confidence:
Moderate.

Last reconsidered:
After the events of chapter N.
```

This gives Weaver intellectual continuity without pretending interpretation is
settled fact.

### 6. Conversational memory

Weaver should remember the relationship surrounding the book:

- Earlier discussions.
- The user's interpretations and preferences.
- Running disagreements and jokes.
- Active theories.
- Questions left unresolved.
- The level of detail and tone the user prefers.
- Hypothetical scenarios currently being explored.

Raw chat history alone is not enough. Important conversational state should be
consolidated into durable memories, while short-lived details remain attached
to the current thread.

---

## The Interpretive Journal

Weaver's "own opinions" live in a persistent but revisable interpretive
journal.

The journal can include:

- Favourite characters, relationships, scenes, and arcs.
- Character judgments.
- Predictions and theories.
- Themes Weaver finds convincing.
- Criticisms and disappointments.
- Ambiguities it has not resolved.
- Opinions that changed.
- The reason each opinion changed.
- Evidence and counterarguments.
- Confidence.

Operationally, an opinion becomes Weaver's own when:

1. Weaver forms it from its reading and reflection.
2. It can explain the reasoning behind it.
3. It remembers the position in later conversations.
4. It can defend the position without treating it as fact.
5. New evidence or a persuasive argument can change it.
6. It can explain how and why its view evolved.

This is not a claim that the model has human subjective experience. It is a
design for coherent, durable intellectual character.

---

## How a Conversation Should Work

A difficult conversation may require Weaver to:

1. Understand what kind of response the user wants: recall, explanation,
   retelling, interpretation, judgment, speculation, or play.
2. Break the question into information needs.
3. Recall relevant scenes, events, character states, and previous discussions.
4. Detect gaps, contradictions, or uncertainty.
5. Reopen the original chapters.
6. Follow connections into earlier setup or later consequences.
7. Compare canon with existing interpretations.
8. Build a response with an appropriate voice and narrative shape.
9. Check that canon, opinion, and invention have not been confused.
10. Update conversational or interpretive memory when something worth
    preserving has changed.

The route should depend on the question. A quote lookup, an arc retelling, and
a debate about character motivation should not invoke the same fixed pipeline.

---

## Counterfactuals and Imagination

Weaver must be able to move beyond revealed canon when the conversation asks it
to.

For a hypothetical, Weaver should:

1. Reconstruct the relevant canonical baseline.
2. Identify exactly what the scenario changes.
3. Find unknown details that must be invented.
4. Generate one or more plausible possibilities constrained by:
   - Existing character traits.
   - Established abilities and progression.
   - World rules.
   - Narrative themes.
   - The author's observed patterns.
5. State important assumptions.
6. Reason inside the constructed scenario.
7. Keep hypothetical material visibly separate from revealed canon.

Refusing because the scenario has not happened is a failure. Inventing and then
pretending the invention was revealed is also a failure. The desired behavior
is disciplined imagination.

---

## Technique Portfolio

We expect to devise and combine many techniques. Each one should be treated as
an experiment with a purpose and a cost.

| Technique | What it may help with | Main limitation |
| --- | --- | --- |
| Exact search | Quotes, rare names, precise wording | Misses paraphrases and concepts |
| Embedding search | Semantically related passages | Can return plausible but wrong context |
| Hybrid retrieval | Balancing concepts and exact terms | Adds tuning and ranking complexity |
| Reranking | Selecting better evidence from broad retrieval | Adds cost and latency |
| Long-context reading | Preserving local or arc-wide flow | Attention can become noisy and expensive |
| Scene extraction | Human-like episodic units | Boundaries and summaries may be subjective |
| Hierarchical summaries | Reasoning across thousands of chapters | Compression removes useful detail |
| Temporal state tracking | Current and historical character/world state | Extraction and update errors can spread |
| Knowledge graphs | Explicit entities and relationships | Rigid schemas struggle with nuance |
| Causal graphs | Explanations and long-range consequences | Causality is often interpretive |
| Multi-pass reading | Events, motives, themes, and contradictions | More model calls and conflicting outputs |
| Reflection passes | Themes, opinions, and theory formation | Can create unsupported patterns |
| Agentic retrieval | Iterative investigation of hard questions | Harder to control, test, and budget |
| Persistent memory | Continuity across conversations | Bad memories can become entrenched |
| Multiple reasoners or critics | Alternative readings and error checks | More complexity does not guarantee truth |
| Fine-tuning | Stable behavior, voice, or learned reading habits | Poor fit for frequently changing factual memory |

This table is a starting map, not a predetermined stack.

---

## Reading and Consolidation

Weaver may need repeated passes over the novel rather than one universal
extraction prompt.

Possible passes include:

- Literal pass: events, participants, locations, objects, and revealed facts.
- Character pass: goals, emotions, decisions, relationships, and development.
- World pass: rules, history, factions, abilities, and state changes.
- Narrative pass: causes, consequences, setup, payoff, and arc structure.
- Interpretive pass: motifs, parallels, tensions, and alternative readings.
- Critical pass: contradictions, weak evidence, and extraction errors.
- Consolidation pass: connect new memories to the existing whole.

We need to test whether specialist passes outperform one capable general
reading pass enough to justify their extra cost and complexity.

When a new chapter arrives, Weaver should not merely append its summary. The
chapter may:

- Resolve an old mystery.
- Reframe an earlier scene.
- Disprove a character's belief.
- Change a relationship.
- Complete a setup and payoff chain.
- Force Weaver to revise an opinion.

Continuous reading therefore includes reconsideration, not just ingestion.

---

## Evaluation: The Reader Trials

We should evaluate Weaver through conversations, not only retrieval metrics.

The Reader Trials should cover:

### Recall

- Find an obscure factual detail.
- Locate a remembered quote or exchange.
- Identify where an item, name, or idea first appeared.

### Scene understanding

- Retell a scene accurately.
- Explain its emotional movement.
- Explain what each participant knew and wanted at the time.
- Connect the scene to later consequences.

### Long-range understanding

- Trace a character's development across multiple arcs.
- Connect setup and payoff separated by hundreds of chapters.
- Explain the causal history of a conflict or relationship.

### Interpretation

- Defend a thematic reading with evidence.
- Present a serious alternative interpretation.
- Distinguish strong evidence from pattern-seeking.

### Opinion and criticism

- Give a clear judgment rather than generic praise.
- Preserve that judgment across later conversations.
- Change the judgment when presented with persuasive counterevidence.

### Speculation

- Generate a plausible theory.
- Explain which canon constrains it.
- Keep invention separate from revelation.
- Compare multiple possibilities when uncertainty is meaningful.

### Storytelling

- Retell an arc at different lengths.
- Shift viewpoint or emphasis.
- Preserve causal and emotional coherence.
- Avoid turning a story into a list of facts.

### Conversation

- Follow references such as "that scene" or "your second theory."
- Remember ongoing debates.
- Disagree naturally and explain why.
- Ask a question only when clarification materially changes the conversation.

Retrieval measures such as recall, ranking quality, citation accuracy, latency,
and cost still matter. They are diagnostics for the larger goal rather than the
definition of success.

---

## Learning and Decision Process

Every meaningful capability should leave behind a decision record.

```text
Problem:
What behavior is currently failing?

Hypothesis:
Why might this technique help?

Options:
Which approaches did we consider?

Decision:
What are we trying, and why?

Tradeoffs:
What does this improve, cost, or complicate?

Experiment:
How will we compare it with the current approach?

Evidence:
What happened?

Conclusion:
Keep it, revise it, combine it, or remove it?

Reversal condition:
What future evidence would make us change direction?
```

Coding agents can implement the experiment, instrumentation, and repetitive
data work. The human learning comes from forming the hypothesis, understanding
the options, inspecting failures, and making the decision.

---

## Capability-Led Research Roadmap

This is intentionally not a stack-first build order.

### Stage 0: Define the reader

- Turn the vision into a varied set of Reader Trials.
- Establish a simple baseline using a powerful model and the available text.
- Save complete traces of what the model searched, read, inferred, and answered.
- Classify failures by missing capability rather than immediately adding tools.

### Stage 1: Build reliable rereading

- Organize and validate the chapter corpus.
- Experiment with exact, semantic, hybrid, and agent-directed retrieval.
- Give Weaver a way to reopen larger passages when small fragments are
  misleading.
- Learn which conversations fail because of retrieval and which fail after the
  correct text was found.

### Stage 2: Develop scene and narrative memory

- Detect and represent scenes.
- Build multi-level retellings and summaries.
- Connect events through causes and consequences.
- Test scene explanation, arc retelling, and long-range callbacks.

### Stage 3: Develop temporal world understanding

- Track characters, beliefs, relationships, abilities, and world rules over
  time.
- Preserve uncertainty and conflicting accounts.
- Test questions about who knew what, when something changed, and how current
  state was reached.

### Stage 4: Develop interpretation

- Run reflection passes across scenes and arcs.
- Store themes, motifs, supporting evidence, and alternative readings.
- Add criticism that can disagree with both the user and earlier Weaver.
- Measure whether persistent interpretations improve conversation or merely
  harden model-generated mistakes.

### Stage 5: Develop conversational identity

- Add durable conversation memory and the interpretive journal.
- Preserve theories, disagreements, preferences, and changed opinions.
- Let the user continue a discussion across sessions without replaying its
  entire history.

### Stage 6: Become a continuous reader

- Ingest new chapters.
- Connect them to existing scenes, timelines, and themes.
- Detect memories and interpretations that need reconsideration.
- Record how Weaver's understanding and predictions change over time.

The stages can overlap. Reader Trial failures should determine what receives
attention next.

---

## Initial Non-Goals

- Spoiler protection is not a current priority.
- Weaver does not need to serve multiple novels initially.
- A polished public interface is less important than observable reasoning and
  memory behavior.
- We are not committing to a particular vector database, graph database,
  framework, model provider, or multi-agent design.
- We are not trying to manually encode the novel.
- We are not treating the first working answer as proof of understanding.

---

## Current Project Reality

The repository already contains:

- A large local chapter corpus.
- An early token and recursive chunking experiment.
- An older stack-first RAG roadmap in `shadow_friend.md`.
- A minimal Python project with room to design the system deliberately.

The old roadmap is useful evidence of earlier thinking, but Weaver changes the
center of gravity. Chunking, embeddings, graphs, tools, and databases are no
longer sequential boxes to tick. They are candidate techniques that must earn
their place by improving the synthetic reader.

---

## Open Research Questions

- What is the best operational test for "read the novel cover to cover"?
- Which memories should be extracted during ingestion, and which should be
  created only when a conversation demands them?
- Can one strong model produce reliable scene and narrative memories, or do
  specialist reading and criticism passes materially improve them?
- How should later revelations revise earlier summaries without erasing the
  original point of view?
- When should Weaver trust a derived memory, and when should it reopen the text?
- How can Weaver discover long-range connections without hallucinating them?
- What makes an interpretation feel thoughtful rather than generated on demand?
- How should confidence be represented without making conversation robotic?
- How do we prevent a mistaken extracted fact from spreading through summaries,
  timelines, and opinions?
- Should Weaver maintain one evolving interpretation or several competing
  readings?
- When do multiple agents produce better literary reasoning, and when do they
  merely produce more words?
- What should be fine-tuned, if anything, once prompts, tools, memory, and
  reflection have been properly tested?

---

## Definition of Success

Weaver succeeds when it can move naturally between the smallest detail and the
largest interpretation:

- It can reopen the book when memory is insufficient.
- It can reconstruct scenes rather than merely quote fragments.
- It understands that facts, beliefs, and character states change over time.
- It can trace stories and character development across the complete work.
- It can explain its interpretations and entertain alternatives.
- It has opinions with continuity, evidence, and the capacity to change.
- It can speculate boldly while remaining honest about invention.
- It remembers the conversation surrounding the novel.
- Its answers feel like they come from one engaged reader rather than a bundle
  of disconnected retrieval features.

The final product matters, but the project's real value is the trail of
experiments and decisions that teaches us how close modern language models can
come to deep, durable understanding of a vast fictional world.
