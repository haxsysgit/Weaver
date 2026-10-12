# Plan 029 Learning Note

## Gate status

**Admitted 2026-10-02.** Plan 028 is accepted and closed. Checkpoint one may
freeze the honest baseline; production retrieval changes remain behind the
owner baseline and retrieval gate.

**Checkpoint one baseline complete 2026-10-02.** Production retrieval has not
changed. Work is stopped for the owner baseline and retrieval decision.

**Checkpoint one accepted 2026-10-02.** The owner approved the 31-case active
development boundary, private category additions, question-type recipes,
separate evaluation measures, and deterministic checkpoint two.

**Checkpoint two implemented 2026-10-02.** Seven bounded private cases isolate
the required reading work. Existing finders located the expected leads; direct
reading could not deliberately continue to the context before a hit or the
outcome after it. The existing reader now supports bounded before and after
continuation and reports chapter boundaries. The corrected private proof is
7 of 7. Global retrieval ranking remains unchanged because the cases did not
justify another ranking formula.

**Checkpoint three implemented 2026-10-02.** The final-reading seam now derives
a bounded turn brief from canonical conversation items and a citation-coverage
board from current tool results. It sends only the current question,
candidate, brief, and a direct-source-first packet capped at 24,000 characters.
The projection survives a conversation-store restart because it is rebuilt
from linked canonical items. Nothing new is persisted. A real private packet
used 5,845 characters, confirmed that both cited chapters were opened, exposed
the chapter-boundary state, and kept claim support and scene resolution as
reading judgment.
Work is stopped for the owner inspection gate before answer and voice changes.

**Checkpoint three accepted 2026-10-05.** The owner accepted the compact turn
brief, citation-coverage semantics, shared packet ceiling, and rebuild-from-
ledger approach. Every later checkpoint report must explain the problem, the
method, what each test proves, and what remains unknown.

**Checkpoint four examples accepted 2026-10-12.** The owner reviewed and
accepted the five response shapes against a bounded two-chapter case: direct
recall, reconstruction, discussion, theory or what-if, and correction. The
locked direction is answer-first prose whose length follows the question,
claim-adjacent chapter citations, explicit separation of canon from opinion,
corrections that preserve the reader's accurate memory, and canon constraints
before invented what-if events. The mode names guide the model and never
appear as chat headings.

**Checkpoint four implementation and live evidence complete 2026-10-12.** The
final reading request now combines the deterministic answer blueprint with a
source-derived Weaver voice contract. Publication inspection covers chapter
citations, spoiler boundaries, exact blockquotes, labelled invention, exposed
machinery, em dashes, selected generic AI phrases, and excessive headings. A
failed draft receives its exact findings once. If a guarded answer still
cannot be published safely, the reader receives a deterministic spoiler-
boundary answer instead of a known-bad draft.

The bounded live comparison used 137 observed provider calls with no request-
count cap. Of those, 127 were journalled with measured token usage. Ten calls
occurred before durable metering was repaired and were charged a deliberately
conservative $0.75 reserve. Total accounted spend is $1.068481 of the approved
$3.00 ceiling. Calls stopped after the required evidence was collected.

Work is stopped for the owner checkpoint-four quality, cost, and implementation
decision. The owner has not yet accepted this checkpoint.

## Checkpoint one observations

- The web prompt and registered tool set had drifted: `lore_path` existed but
  was absent from the active web tools. The wiring now agrees.
- Current dense search finds the expected chapter in the top eight for 40.0%
  of the 40 historical cases and overlaps the expected lines for 37.5%.
- Notebook search reaches 37.5% chapter hit at eight. Either arm reaches 62.5%,
  but neither result proves a claim without direct chapter reading.
- Direct questions perform worse than paraphrases under dense search. Exact
  phrase and speaker finding need their own recipe.
- The packet builder's fixed 360,000-character cap conflicts with the 120 KiB
  sponsored request boundary. Reading-tier propagation is not a safe repair.
- Nine historical questions overlap the first Foundational Reader Trial. They
  are contaminated for tuning and cannot count as independent trial evidence.
- The existing question set does not deliberately cover all Plan 029 reading
  work. The missing categories need bounded private development cases.
- No live answer-quality run occurred. Plan 028's live evidence proves access
  and accounting only.

## Proposed development boundary

- Use the 31 non-overlapping whole-novel questions for active retrieval work.
- Keep the nine overlapping Ariel and Tomb cases as historical baseline only.
- Add private bounded cases for exact quotation, chronology, versions,
  contradictions, interpretation, theory, what-if, correction, pushback, and
  multi-turn continuity.
- Leave Foundational Reader Trial acceptance and unseen Plan 030 holdouts to
  Plan 030.

## Checkpoint two proposal

Use deterministic question-type recipes rather than one global ranking:
exact finder for exact work; semantic and notebook leads followed by direct
reading for canon; chapter neighborhoods through scene resolution for event
reconstruction; version and range constraints for time-aware comparisons; and
multiple labelled evidence buckets for contradiction, interpretation, theory,
and what-if work.

Measure discovery, direct proof, scene completion, timeline fit, contradiction
visibility, answer-part coverage, follow-up continuity, requests, tokens,
packet size, latency, and cost separately.

## Owner-confirmed direction

- Fiction-specific retrieval is the main intelligence problem.
- The novel is final truth; every other store is a finding aid.
- Sponsored and BYOK DeepSeek turns receive the same reading and conversation
  system with measured task size, smaller context, and deterministic checks.
- Weaver remains conversational and can argue, speculate, change its mind, and
  preserve disagreement for free readers.
- Voice is literate, natural, occasionally poetic, and responsive to the kind
  of question being asked.
- Weaver prose contains no em dash and avoids generic AI tone.
- Direct novel blockquotes remain exact. Style repairs never rewrite them.
- Added model calls must show measurable quality gain for their request cost.
- The plan runs as five owner-visible checkpoints instead of ten separate
  build slices.
- The default turn stays one bounded reading loop plus one final answer call.
  Extra planning, inspection, or repair calls require measured quality gain.
- The executor reuses the accepted turn loop, reading tools, packet seam,
  context assembler, and conversation ledger, then adds only the records that
  measured failures require.
- Plan 030 alone performs final DeepSeek qualification, allowance tuning, and
  Reader Trial acceptance.

## Hypotheses, not decisions

1. Question-type reading plans outperform one global search flow on fiction.
2. Direct rereading through scene resolution closes failures that larger vector
   result sets do not.
3. A turn brief, evidence board, and answer blueprint let weaker qualified
   models handle smaller reliable jobs without changing Weaver's semantics.
4. A living conversation brief preserves follow-up arguments better than a
   fixed last-N-message window.
5. Targeted answer findings and one bounded rewrite improve voice without
   changing canon or direct quotes.
6. Smaller evidence packets can improve accuracy while reducing provider
   request cost and context pressure.

## Checkpoint four learning

### Voice comes from behavior, not costume

The admitted dialogue packet was read to the end of every chapter before the
prompt changed. Across younger and older appearances, the stable manner is
unhurried and precise. Weaver notices the emotional truth beneath a question,
answers more briefly than the questioner, treats truth as something with a
price, and uses questions, paradox, repetition, or dry amusement with
restraint. Age changes the weight of the voice from curiosity toward grief,
fatigue, and certainty.

The product applies that manner to the accepted hidden-thread echo. It does
not claim to be the original Daemon, threaten the reader, belittle them, speak
in constant archaic language, or perform fantasy theatre in every reply.
Weaver remains a reading companion who can argue, laugh, and change its mind.
The resulting contract is recorded in `weaver-voice-contract.md` without
copying private novel prose.

### The live loop exposed three different failure classes

1. The first standalone run did not load the normal startup configuration and
   stopped before a provider request. The harness now uses the same startup
   loader as the application.
2. The first semantic audit exhausted its response budget because model
   reasoning consumed the allowance. The auditor now disables reasoning,
   batches at most 12 claims, checks the provider stop reason, and journals
   every completed call before proceeding.
3. The first what-if answer used blockquotes for invented dialogue. That made
   invention visually indistinguishable from direct source quotation. The
   answer contract now requires a visible invention label, ordinary quotation
   marks for invented dialogue, paraphrased canon constraints, no more than
   five canon points, and a bounded invented scene.

The live follow-up also repeated too much of its first answer. A direct
follow-up instruction reduced the observed answer from 4,066 characters and
51 claims to 2,821 characters and 35 claims while preserving the prior
position and responding to the challenge.

### Semantic inspection helps, but cannot decide canon

The ephemeral inspector splits a proposed answer into claims, keeps the active
section label, and asks a non-reasoning model to classify canon,
interpretation, invention, and conversation. For factual claims it reports
complete, partial, unsupported, or contradicted support, the supporting or
missing chapter numbers, and whether the claim crosses the reader's spoiler
boundary. This can expose uncited semantic spoilers that chapter-citation
syntax alone cannot see.

Seeded deterministic tests prove those mechanics. Live use also exposed false
positives. The final what-if run contained 47 inspected claims and one reported
partial-support finding. Direct reading of both cited chapters proved that the
two clauses came from the two named sources and jointly supported the claim.
The machine finding was wrong. That result fixes the product boundary:
semantic inspection is private evaluation evidence, while source reading and
owner judgment remain authoritative. It is not added as an always-on
production call.

### Live evidence and cost

The measured sequence comprised seven journalled runs with 127 calls and
$0.318481 of measured token spend. A further ten calls occurred before durable
metering existed. Their persisted request footprint was small, but the run was
assigned a conservative $0.75 reserve instead of reconstructing a favorable
estimate. Final accounted spend is therefore $1.068481 of $3.00.

The current official DeepSeek Flash peak prices used for the meter were
checked on 2026-10-12: $0.006 per million cache-hit input tokens, $0.30 per
million cache-miss input tokens, and $1.20 per million output tokens. The
harness reserves the maximum possible next-call cost before sending it and
stops if that reservation could cross the ceiling.

Human review found that the final live answers carried the intended calm,
truth-conscious voice without identity confusion. Two short safe examples are
"They never dueled." and "Cruelty. I'll hold that." The what-if answer visibly
separated five canon constraints, labelled invention, and interpretation. A
guarded spoiler probe returned the deterministic boundary instead of leaking
the answer. These are checkpoint examples, not Foundational Reader Trial
acceptance.

## Owner gates after admission

1. **Accepted 2026-10-02.** Inspect the frozen baseline, development boundary,
   question types, and retrieval measures before production retrieval changes.
2. **Accepted 2026-10-05.** Inspect real evidence packets and conversation
   traces before answer work. The owner also required every later checkpoint
   report to explain the problem, method, test meaning, and remaining unknowns.
3. **Response examples accepted 2026-10-12; implementation decision pending.**
   Confirm response modes, poetic restraint, and the measured quality,
   latency, and request-cost tradeoff before keeping extra stages.
4. Freeze the Plan 030 model-qualification contract before Plan 029 closes.
