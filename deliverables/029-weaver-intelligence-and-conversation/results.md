# Plan 029 Results

## Status

Checkpoints one and three were accepted by the owner. Checkpoint two's
retrieval and direct-rereading repair is implemented and locally verified.
The checkpoint-four response examples were accepted, and the answer blueprint,
publication inspection, bounded repair path, source-derived voice, and live
semantic-evaluation evidence are implemented. Owner review of checkpoint four
remains open. Detailed method and test interpretation is required at every
later report.

## Development and holdout boundary

The existing private whole-novel set contains 40 questions: 30 paraphrased and
10 direct, split evenly between chapters 1 to 1000 and chapters 1001 onward.
Every case has an expected chapter and expected line range. The questions,
answers, and chapter prose remain in ignored owner-only state.

Nine historical cases overlap the first Foundational Reader Trial's Ariel and
Tomb evidence. They remain useful historical measurements, but Plan 029 must
not tune production rules against them or present them as independent trial
proof. The proposed active development boundary is therefore:

- 31 non-overlapping whole-novel cases for retrieval development;
- new bounded private cases for the missing reading-work categories;
- all three Foundational Reader Trials reserved for owner acceptance in Plan
  030;
- Plan 030 holdouts neither authored nor inspected during Plan 029.

The 40-case set mainly covers factual recall, locations, event mechanics, and
event reconstruction. Exact quotation, chronology, character-version
comparison, contradictions, interpretation, theory, what-if branches,
corrections, reader pushback, and multi-turn continuity are absent or only
incidental. Checkpoint two must add bounded cases for those gaps instead of
pretending the current set covers them.

## Baseline wiring audit

The web prompt promised `lore_path`, and the tool was implemented and
registered, but the web active-tool tuple omitted it. The prompt and runtime
now expose the same six read-only tools. This is a wiring repair, not a new
retrieval strategy.

The audit also found unresolved legacy budget drift:

- stored history is capped at 200,000 approximate tokens;
- final synthesis kept the last three owner and Weaver exchanges at baseline;
- the reading packet always uses the Ascended cap of 360,000 characters,
  regardless of the selected reading tier;
- packet assembly expands opened passages by 20 lines on each side and keeps
  at most 12 passages plus five notebook statements;
- the sponsored boundary permits a 120 KiB serialized request, four tool
  rounds, at most eight provider calls, one answer-sized call, and no provider
  retry;
- BYOK still carries the older 50, 70, or 90 tool-step limits.

Changing the hard-coded packet tier directly would allow a Transcendent packet
of 700,000 characters and worsen the conflict with the 120 KiB sponsored
ceiling. Checkpoint one therefore records the mismatch without changing the
reading path. Checkpoint two should replace the legacy tier caps with one
measured evidence-packet budget shared by sponsored and BYOK turns.

Checkpoint three resolves that recorded packet mismatch with one 24,000-
character evidence budget for both access paths and a compact conversation
projection instead of three full exchanges.

## Current retrieval baseline

The current local production index ran over all 40 historical questions. No
model call, DeepSeek key, or paid token was used.

| Retrieval view | hit@1 | hit@5 | hit@8 | MRR |
| --- | ---: | ---: | ---: | ---: |
| Canonical dense, expected chapter | 2.5% | 25.0% | 40.0% | 0.1293 |
| Canonical dense, expected line overlap | 2.5% | 22.5% | 37.5% | 0.1243 |
| Notebook, expected chapter | 7.5% | 35.0% | 37.5% | 0.1600 |

Either the canonical or notebook arm found the expected chapter in the top
eight for 62.5% of cases. That figure is discovery only. It does not prove the
claim, reach the end of a scene, resolve contradictions, or produce a good
answer.

Canonical dense retrieval by subset:

| Subset | hit@1 | hit@5 | hit@8 | MRR |
| --- | ---: | ---: | ---: | ---: |
| Paraphrased, 30 cases | 3.3% | 26.7% | 43.3% | 0.1398 |
| Direct, 10 cases | 0.0% | 20.0% | 30.0% | 0.0976 |
| Chapters 1 to 1000, 20 cases | 0.0% | 15.0% | 35.0% | 0.0805 |
| Chapters 1001 onward, 20 cases | 5.0% | 35.0% | 45.0% | 0.1780 |

The run took 79.486 seconds. Median query time was 0.605 seconds. The maximum
was 55.652 seconds because the local embedding model fetched missing files on
its cold start. A harmless Qdrant destructor error appeared during interpreter
shutdown after the report was complete. Both anomalies stay recorded rather
than being removed from the evidence.

The baseline confirms three things:

1. Semantic retrieval is a lead generator, not proof.
2. Expected-line overlap is lower than chapter discovery, so opening the right
   chapter still does not guarantee opening the evidence.
3. Directly worded questions perform worse than paraphrases under dense search.
   Exact finding must be an explicit reading recipe, not another dense-query
   variant.

Existing deterministic finder tests still prove phrase, case-insensitive,
speaker, and co-occurrence mechanics on synthetic fixtures. The earlier
bounded Weaver-voice trace proves that exact phrase and vocative search can
find source passages that meaning search misses. Those are capability proofs,
not a whole-novel accuracy score.

## Proposed reading recipes

The owner accepted these as the checkpoint-two direction. The web reading
workflow now selects the smallest suitable finder, treats searches and story
maps as leads, requires direct novel support, follows events through their
outcome, checks requested character versions, opens both sides of a
contradiction, and stops only when each answer part is supported or named as a
gap.

| Reading work | Smallest proposed recipe | Stop rule |
| --- | --- | --- |
| Exact phrase or chapter lookup | exact phrase or speaker finder, then open the hit | the requested words and speaker or context are directly verified |
| Factual canon lookup | dense or notebook lead, exact novel vocabulary, then direct chapter read | every answer claim has direct chapter support |
| Event reconstruction | co-occurrence and semantic leads, chapter neighborhood, then read through the scene resolution | actors, sequence, outcome, and aftermath are supported |
| Alias or relationship | `who_is` or `lore_path` as a lead, then direct chapter evidence | identity or connection is proven in the novel |
| Timeline or character version | resolve the requested time point, constrain ranges, gather feats and limits for that version | both versions and the comparison date are explicit |
| Contradiction or correction | retrieve each competing claim and reread both source scenes | supported and unsupported parts are separated visibly |
| Interpretation or theory | collect the minimum canon constraints, counterevidence, and gaps | canon is complete enough for a labelled take |
| Canon-grounded what-if | establish powers, motives, setting, and timeline before invention | every invented event is labelled and respects the canon constraints |
| Follow-up or pushback | resolve the referent and prior positions before new reading | the current challenge and relevant prior take are both answered |

## Checkpoint two: retrieval and direct rereading

Seven private cases were added under ignored owner-only state after reading the
bounded source chapters to their ends. They cover exact phrase and speaker
context, alias identity, co-occurrence, event reconstruction, chapter
neighborhoods, multi-chapter scene resolution, correction, contradiction,
timeline, character version, and relationships. Their questions and source
text are absent from public deliverables and tests.

The isolated failure was in direct reading: `read_chapters` could reopen or
shorten a hit but could not continue before or after it. A 20-line packet halo
could therefore stop before a scene's outcome, and the tool gave no explicit
signal that more of the chapter remained.

The smallest repair extends the existing reader rather than adding a new tool:

- `direction: "before"` and `direction: "after"` continue from an existing
  passage handle, with the existing 200-line ceiling;
- every returned durable handle names the lines actually opened;
- `start_of_chapter` and `end_of_chapter` expose whether more chapter text
  remains;
- `proof_status: "direct_source"` distinguishes an opened passage from a
  search lead;
- the tool description tells the model to continue through the outcome and
  inspect the next chapter when necessary.

The first private proof run reported 5 of 7 because its expected chapter end
used `wc -l`. One source file has no trailing newline, so that command reported
216 while the actual final line is 217. The mismatch was preserved, checked
against the source, and corrected in the private case record. The second run
passed all 7 of 7 cases, including both multi-chapter LO49 cases.

No semantic, sparse, notebook, graph-ranking, or global hybrid algorithm was
changed. The frozen dense baseline therefore remains the comparison point.
Existing finder mechanics already located the new exact, alias,
co-occurrence, timeline, and relationship leads; the measured missing
capability was reading beyond the lead to direct proof and scene resolution.

## Proposed evaluation measures

Checkpoint two should keep the measures separate so a search hit cannot hide a
reading failure:

- discovery: expected chapter hit at 1, 5, and 8, plus reciprocal rank;
- proof: expected line overlap and direct source support for each required
  claim;
- completion: whether reading reaches the needed scene outcome and aftermath;
- temporal correctness: requested chapter, version, and spoiler boundary;
- conflict handling: competing evidence remains visible and unresolved gaps
  stay explicit;
- coverage: every part of the reader's question receives support or an honest
  gap;
- conversation: referent, prior Weaver position, reader position, correction,
  and disagreement survive a follow-up and restart;
- efficiency: provider requests, tool rounds, input and output tokens, packet
  characters, time to first text, total latency, and sponsored cost;
- publication: no private prose, tool payload, reasoning, unsupported chapter,
  unlabeled invention, changed quotation, or exposed machinery.

## Context, conversation, answer, and cost baseline

At checkpoint one, the system had a canonical conversation ledger, a
200,000-token locate-history assembler, three recent exchanges in final
synthesis, an unstructured ephemeral reading packet, deterministic fake
profiles, and safe provider usage metadata. It did not have a turn brief,
claim-to-source evidence board, explicit gap record, or compact conversation
projection.

No live answer-quality baseline was run in checkpoint one. Plan 028's live run
proved provider access and accounting, not fiction intelligence. A meaningful
live comparison requires the owner to freeze the cases, maximum calls, and
dollar ceiling first. Until then, quality, end-to-end latency, answer-token
use, and repair-call value remain unmeasured rather than estimated.

## Checkpoint three: evidence and conversation continuity

The final reading seam now builds two ephemeral projections.

The turn brief is rebuilt from canonical conversation items on every turn. It
contains the actual ask, linked message ids, the prior reader and Weaver
positions, whether prior context is required, explicit timeline or version
signals, whether the reader is challenging the prior answer, and the answer
obligation. Each position is bounded to 2,000 characters. The final call sends
the current question, candidate, compact brief, and evidence packet instead of
three full exchanges. A restart test proves the same prior positions are
reconstructed after closing and reopening the conversation store.

The evidence board is rebuilt from current tool results and the candidate. It
records direct chapter and line sources, notebook lead chapters, candidate
claims, chapter citations per claim, unopened citations, uncited claims, and
whether each opened passage reached the chapter boundary. Its deterministic
check proves citation coverage only: an opened chapter may still contain the
wrong passage for a claim. Exact claim support remains reading judgment for the
final reader and checkpoint-four inspection. A chapter boundary also cannot
prove scene resolution.

One packet budget now serves sponsored and BYOK turns:

- maximum evidence packet: 24,000 characters;
- direct novel evidence has priority over notebook leads;
- the board and spoiler framing survive packet trimming;
- old tool transcripts and full prior exchanges are absent from the final
  request;
- packets, boards, briefs, candidates, and private prose remain ephemeral.

A real owner-only packet was inspected against the two-chapter LO49 correction
case. Public-safe metadata from that inspection:

- packet size: 5,845 of 24,000 characters;
- direct sources: chapter 900 lines 185 to 217 and chapter 901 lines 3 to 13;
- candidate claims: one, with its cited chapters opened;
- unsupported chapters: none;
- uncited claims: none;
- chapter 900 boundary reached; chapter 901 boundary not reached;
- prior context required and reader challenge detected;
- message links preserved for the current ask and both prior positions;
- spoiler verdict: full at the test reader position.

This is a real evidence packet, not an automated correctness verdict. The
source was read straight through for the bounded case, while the board records
what machinery can know and leaves literary scene completion to reading
judgment.

Checkpoint-three verification passed on 2026-10-02:

- 79 retrieval, packet, runtime, and proof tests;
- 137 turn and conversation tests;
- 65 web tests;
- Ruff and `git diff --check`.

## Owner gate

Accepted by the owner on 2026-10-05:

1. the compact turn-brief fields and 2,000-character position bounds;
2. citation-level claim mapping, explicit missing-citation and unopened-chapter
   gaps, and honest chapter-boundary semantics;
3. the 24,000-character shared evidence-packet ceiling and direct-source
   priority;
4. rebuilding the projection from canonical items instead of persisting a
   second conversation memory store.

## Later checkpoints

Repeated multi-turn proof, independent review, and the Plan 030 handoff remain
pending.

## Checkpoint four: answer shape and publication inspection

### Problem

The final reading pass received the evidence packet and a generic instruction
to write the answer, but it did not receive an explicit response shape. A
direct chapter lookup, a disputed memory, a theory, and a canon-grounded
what-if therefore depended on the model inferring different obligations from
the same broad prompt. There was also no final deterministic boundary against
unopened chapter citations, changed direct quotations, unlabelled invention,
spoiler citations, exposed reading machinery, em dashes, or selected generic
AI language.

### Method

The owner first reviewed five response examples against a bounded two-chapter
case. Those examples fixed the behavior before code was written. The runtime
then gained a small deterministic answer layer:

1. It classifies the reader's question as direct recall, reconstruction,
   discussion, theory or what-if, or correction.
2. It builds a blueprint from the current ask, prior Weaver position, challenge
   state, spoiler framing, and the packet's declared direct-source chapters.
3. It sends the blueprint with the turn brief and evidence packet to the
   existing final reading call. Mode names are instructions, not visible
   headings.
4. It inspects the proposed answer without judging literary canon. The check
   covers citation boundaries, later-chapter spoiler citations, exact
   blockquotes, labelled invention, private machinery leaks, em dashes,
   selected generic AI phrases, and excessive headings.
5. A failed proposal receives one repair request containing only the observed
   findings. The rejected proposal and findings are not persisted or streamed.
6. If the repair fails, the turn uses the previously validated candidate only
   when it passes the same publication inspection. If neither answer is safe,
   the turn fails with the existing model-protocol boundary instead of
   publishing a known-bad answer.

The ordinary path still uses three provider calls in the existing scripted
turn shape. A publication failure raises that turn to four calls. No separate
planner, critic, or always-on style call was added.

### Deterministic evidence

The focused answer and turn suites pass 105 tests. The answer-layer tests prove
all five question shapes, preservation of the prior position during a
challenge, direct-source chapter extraction, clean grounded publication,
missing and unopened citation findings, exact-blockquote protection,
guarded-spoiler citation rejection, what-if labelling, selected AI-style
findings, and a repair instruction containing only observed failures.

The turn tests prove that the blueprint reaches the final request, a failed
proposal triggers exactly one repair, the failed draft is not persisted, and a
failed repair falls back to a clean validated candidate. The complete turn
suite also protects the existing three-call clean path and exposed one
compatibility defect during implementation: older packet fixtures did not
declare direct-source chapters. Citation membership is now enforced only when
the packet provides that boundary, rather than treating all legacy citations
as unsupported.

These tests prove deterministic control flow and publication boundaries. They
do not prove literary quality, semantic support for an uncited claim, semantic
spoiler detection, or DeepSeek's compliance with the blueprint. The response
classifier is intentionally a small keyword rule and can misclassify an
ambiguous question. Direct chapter support and scene resolution remain reading
judgment, not a regex verdict.

The initial checkpoint-four affected floor passed on 2026-10-12:

- 152 answer, turn, and conversation tests;
- 74 chat-runtime and web integration tests;
- 226 focused tests in total;
- Ruff on the four changed Python files and `git diff --check`.

The final all-repository pytest and Ruff floor remains checkpoint-five work, as
agreed with the owner.

### Source-derived voice extension

The owner kept checkpoint four open for literary proof. Six primary dialogue
chapters and four supporting chapters were read completely under the admitted
bounded packet. The recurring voice behavior, rather than surface fantasy
vocabulary, became the prompt contract: precise and unhurried answers, dry
amusement, attention to the truth hidden beneath a question, restrained use of
paradox and repetition, and heavier grief or menace only when the subject earns
it.

The system prompt now identifies Weaver as the hidden-thread echo accepted in
Plan 022. It borrows the Daemon's manner without claiming to be the original
Daemon. Constant threats, reader-directed cruelty, belittling, archaic
roleplay, and ornamental riddles are explicitly rejected.

The answer blueprint also answers the pressure point first, keeps a challenged
follow-up shorter than the original reconstruction, requires claim-adjacent
support, and gives theories a visible separation between canon,
interpretation, and invention.

### Claim-by-claim semantic evaluation

An ephemeral evaluation inspector now:

1. splits the proposed answer into claims while retaining the active section
   label;
2. compares batches of no more than 12 claims with the opened source passages;
3. classifies each claim as canon, interpretation, invention, or conversation;
4. records complete, partial, unsupported, or contradicted support;
5. reports supporting and missing chapters; and
6. reports semantic spoilers, including factual claims with no explicit
   citation.

The inspector uses JSON-only, non-reasoning calls and verifies provider stop
reasons. It remains outside production turns. Plan 028 permits one answer-
sized sponsored call, and the live evidence shows that this inspector can
produce false positives. Adding its cost and judgment to every reader turn is
not justified by checkpoint-four evidence.

Deterministic publication protection remains in production. If a spoiler-
guarded answer and its one repair both fail, Weaver now publishes a safe fixed
boundary message instead of leaking the answer or returning a protocol error.

### Live DeepSeek evaluation

The owner authorized unlimited request count under a hard $3.00 cumulative
ceiling. Seven journalled runs used 127 provider calls and measured $0.318481
of token spend. An earlier ten-call run occurred before durable per-call
metering was repaired. Rather than infer a favorable number after the fact,
the run was assigned a conservative $0.75 reserve. Total accounted spend is
$1.068481 of $3.00.

The meter used the official DeepSeek Flash peak rates checked on 2026-10-12:
$0.006 per million cache-hit input tokens, $0.30 per million cache-miss input
tokens, and $1.20 per million output tokens. Every later call was journalled,
and the harness reserved its possible maximum before sending it. Raw answers,
receipts, prompts, and source passages remain in ignored private evaluation
state.

The run sequence exposed and repaired real failures:

- the standalone harness originally missed application startup configuration;
- the first audit reached its output limit because reasoning consumed its
  allowance;
- the first follow-up repeated too much of the initial reconstruction;
- a guarded spoiler answer could not safely publish;
- invented dialogue used source-style blockquotes; and
- section headings were initially discarded, causing labelled invention to be
  audited as canon.

After repair, the live spoiler probe published only the safe boundary. The
final what-if answer used 11 calls, separated canon from invention and
interpretation, and produced 47 inspectable claims. The semantic inspector
reported one partial-support finding. Direct reading of both cited chapters
showed that each chapter supplied one of the claim's two clauses, so the
finding was a false positive. This is direct evidence for the rule that the
inspector may find questions but cannot settle canon.

Human literary review found the final responses concise at their pressure
points, capable of dry humor and disagreement, and free of original-Daemon
identity claims. A challenged follow-up fell from 4,066 characters and 51
claims to 2,821 characters and 35 claims while retaining its position. The
final theory visibly separated five canon constraints from labelled invented
events and a closing interpretation.

These runs prove that DeepSeek can follow the new voice and representation
contracts on the bounded cases, that the hard spend ceiling works after the
meter repair, and that a semantic auditor can reveal unsupported or spoiler-
sensitive claims. They do not prove all future answers are literary, correct,
or spoiler-safe. They do not accept any Foundational Reader Trial.
