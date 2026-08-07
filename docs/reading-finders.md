# Reading finders: exact search is a core Weaver capability

Status: locked by the owner on 2026-08-07 as a capability requirement for
Plan 15 and the Reader Trials. Owner's words: "THIS IS THE CAPABILITY I
WANT WEAVER TO HAVE."

## The one-line takeaway

When a reader asks "find where this character speaks" (or wants any exact
fact from the novel), meaning search (vector similarity, embeddings) is the
wrong tool. Exact phrase and vocative (addressing someone by name) search
on the raw chapters is the right tool. Weaver must have both. The exact
one is not optional.

## The trace that proved it (2026-08-07)

The owner asked: look at how Weaver speaks in the actual novel and tell me
what you think of his tone. Here is exactly how that was answered.

Tools used: `cat`, `grep -rn`, `sed -n` on the raw chapter files under
`novels/shadow-slave/`. No web, no retrieval index, no model knowledge as
the source of any claim.

1. **Map first.** Read the private notebook's entity page for Weaver
   (`people/person-weaver.md`). It held the lore skeleton with chapter
   refs (the mask at ch277, refusing the war at ch451, "Hail Weaver,
   Demon of Fate" at ch454, the seven daemons at ch691) but zero actual
   Weaver dialogue. The notebook is a map, never the territory.

2. **First hunt, and the miss that matters.** A same-line pattern
   (quote + "Weaver" + a speech verb like said or spoke on one line)
   returned nothing. This novel writes dialogue as standalone quote
   lines with the attribution on its own line ("Weaver remained silent
   for a while, then spoke:"). Same-line patterns are structurally blind
   to that. Pattern blindness, not absence of content.

3. **The breakthroughs were distinctive phrases from the world:**
   - `grep '"Weaver'` (lines addressing him directly, the vocative)
   - `grep "Hail Weaver"` (the prayer)
   - `grep "Where is my eye"` (the Memory)
   - `grep "thousand hopeless prayers"` (his voice)
   The voice line at ch2321:27 pointed at the scene: Weaver speaking to
   the Demon of Dread on broken ice. "Brother, my brother..." then "I
   thought I'd offer you to play a game." then "A game of death, of
   course."

4. **Read the passages.** `sed -n` around every hit turned grep hits
   into verified quotes and established who spoke: "Weaver, you
   bastard..." is Sunny talking about Weaver (ch2326); "Let me show you
   how gods die" is Weaver's own words quoted by Sunny thousands of
   years later (ch2411). A hit is a pointer, never an answer.

## The principles

1. Raw source text is the only truth (standing rule, already in
   AGENTS.md).
2. The notebook tells you where to look, never what to say. It had no
   Weaver dialogue because the run never looked for dialogue.
3. Meaning search cannot rank "where does Weaver speak": the scene is
   not semantically similar to the question. Exact phrase and vocative
   patterns find it in seconds.
4. Build finders for this novel's actual text structure. Dialogue
   attribution lives on separate lines, so generic patterns miss it.
5. Knowing which phrases to grep comes from having read the story.
   Reading is the seed of search.
6. Always read the passage around a hit before claiming anything.

## What this means for Weaver's tools

- The reading toolset is now the five finders + readers (2026-08-07):
  search_story (meaning search), find_text (exact phrase + speaker
  mode), browse_chapters (range skim), who_is (entity map), read_chapters
  (open prose by handle). The old two-tool set (search_library,
  open_chapters) was renamed and extended into this set.
- The Ariel Reader Trial depends on this exact capability. "Find where
  Ariel fought the Unholy Titan" was answered by grepping "Unholy
  Titan" across the corpus (co-occurrence at ch1247/1248/1319/1482/
  1492/1547) and then reading ch1247 in full.
- A future finder should accept a phrase seed and return every chapter
  and line where it appears, verbatim, bounded by the reader's position,
  and let the model open and read. The model decides which hits matter;
  the finder never re-ranks by meaning.
- Meaning search answers "what is this about". Exact search answers
  "where is this thing". They are complements, never substitutes.

## Agentic capabilities (owner, 2026-08-07)

The owner recognised what this trace is: agentic capability. Weaver will
in the future need bash- and sed-grade finders and readers for real
agentic RAG and search. That means a tool family shaped like this:

- a grep-like finder (phrase seed in, every chapter and line out,
  verbatim, ceiling-bounded)
- a sed-like reader (open a chapter, read a line range, return the
  text)
- a chapter browser (walk a range, list titles, jump)
- entity and connection traversal over the notebook

Scoped to the library: the model gets these tools against `novels/` and
the notebook, never raw operating-system access. Read-only, ceiling
enforced by machinery, prose never persisted (temp-vs-durable split).
The design principle stays: the model reasons and finds, deterministic
machinery does the rest.

## The whole-novel measurement that settled the strategy (2026-08-07)

The first honest non-circular run: 40 questions drawn from the novel
itself (30 paraphrased, half beyond chapter 1000 where the notebook has
no statements), ceiling 3127, against the real persistent index.

Numbers (hit@5 / MRR): notebook exact 0.35/0.16, dense novel 0.23/0.13,
notebook connections 0.23/0.13, hybrid rrf 0.20/0.12, hybrid dbsf
0.17/0.15, novel sparse 0.12/0.09. Dense hit@10: 0.40. Dense hit@1:
0.03.

Meaning: no single arm is reliable enough to be the answer machine.
The old 0.86 was circular (questions written from notebook statements)
and inside the notebook's coverage. On the real whole-novel task,
retrieval is a lead generator: the right chapter is usually in the top
10, almost never at the top.

Locked direction, the hybrid:
- meaning search (dense and sparse) finds candidate chapters, never
  final answers
- the agent (the model) decides how to retrieve: which search, whether
  to refine, when to fall back to an exact phrase
- the finder tools (grep-like exact phrase, sed-like reading, chapter
  browsing) catch what meaning search cannot rank; the Weaver-voice
  trace above is the proof
- the context assembler (the weaving) decides what goes into the
  reading packet
- the LLM decides how to rank the candidates after reading the real
  text
- exact parameters (tool budgets, fallback rules, packet size) are
  tuned by experiment, not decree

## Status

Locked by the owner on 2026-08-07 as a capability requirement for Plan
15 and the Reader Trials. Owner's words: "THIS IS THE CAPABILITY I WANT
WEAVER TO HAVE." Amended the same day with the whole-novel measurement:
retrieval is a hybrid of meaning search plus finder tools; the agent
decides how to retrieve, the assembler and the LLM decide ranking,
parameters by experiment.
