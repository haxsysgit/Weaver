# Plan 029: Weaver intelligence and conversation system

> **Executor instructions:** Build the reading, context, evidence,
> conversation, answer, and style system that makes the admitted DeepSeek model
> act like Weaver. Measure each layer's benefit and request cost; smaller, cleaner
> context and deterministic checks come before extra model calls.

## Status

- **Tooling:** `uv`, pytest, Ruff, existing library and retrieval experiments,
  deterministic fixtures, fake DeepSeek profiles from Plan 028, and explicit
  bounded live development runs through Plan 028's accepted access boundary.
- **State:** drafted 2026-08-24 and amended 2026-09-23. Awaiting Plan 028
  closure.
- **Depends on:** Plan 028 closed with sponsored access, BYOK, usage,
  reservation, and budget contracts accepted. Plans 009, 012,
  014, 015, 017, and 018.5 remain the context, direct-reading, retrieval,
  turn-loop, full-shelf, and rebuild foundations that must be rechecked.
- **Priority:** P1. This is the intelligence and conversational identity that
  Plan 030 will qualify and release as Weaver v2.0.0.
- **Effort:** XL.
- **Risk:** High. Fiction retrieval is time-aware and multi-step; oversized
  context can lower quality; style repair can damage quotes; extra model calls
  consume scarce free capacity; and tuning against known trials can overfit.
- **Budget:** about 320k to 520k agent-context tokens for one executor, focused
  evaluation work, and two independent reviews, estimated $3.60 to $15.60.
  Deterministic retrieval and fake-profile proof comes first. Live development
  runs use the owner-approved DeepSeek development allowance or owner BYOK
  through Plan 028, within a frozen request and dollar ceiling. Production
  traffic remains Plan 030 work.

## Owner direction (locked decisions)

1. (2026-08-24, amended 2026-09-23) Weaver's quality comes from its complete
   reading and conversation system. The admitted DeepSeek model receives enough
   structure and context to feel consistently like Weaver.
2. (2026-08-24, amended 2026-09-23) DeepSeek still needs to meet the finished
   reader-quality floor. Plan 028 proves safe access; Plan 030 proves final
   quality and cost. Plan 029 records a failure if the chosen model cannot
   follow tools or bounded instructions.
3. (2026-08-24) Retrieval is the central intelligence problem for fiction. It
   must find scattered events, exact phrases, aliases, timeline-specific
   character versions, relationships, contradictions, and scene resolutions,
   then reread the actual chapters rather than trust summaries alone.
4. (2026-08-24) The novel is final truth. Notebook, index, embeddings, graph,
   summaries, generated claims, and model memory are finding aids and may be
   wrong.
5. (2026-08-24) Weaver remains a conversational reader. It remembers the
   current subject, resolved references, reader position, Weaver's previous
   take, relevant character versions, accepted evidence, and unresolved
   disagreement without dumping the entire conversation into every request.
6. (2026-08-24, amended 2026-09-23) One bounded DeepSeek execution profile
   serves sponsored and BYOK turns. Task size, packet size, schema strictness,
   and repair count are tuned from measured quality and cost, never from a
   hidden model switch.
7. (2026-08-24, amended 2026-09-23) The exact DeepSeek model remains pinned to
   the conversation. Difficult questions do not trigger a hidden endpoint
   change.
8. (2026-08-24) Deep discussion, disagreement, theories, and what-if scenarios
   are normal Weaver behavior for sponsored and BYOK readers. BYOK changes who
   pays for the same DeepSeek path; it does not unlock a hidden stronger model.
9. (2026-08-24) Weaver sounds like an actual lifelong reader: literate,
   conversational, occasionally poetic, willing to have a take, and clear
   about canon, interpretation, and invention. Response mode follows the
   question so a chapter lookup stays direct and an interpretation gets room.
10. (2026-08-24) Weaver's own published prose contains no em dash and avoids
    generic AI phrasing, support-bot language, repetitive summaries, fake
    headings, and excessive fantasy performance.
11. (2026-08-24) Direct novel blockquotes remain exact. Mechanical cleanup may
    touch Weaver-authored prose only. Broader style problems trigger a targeted
    bounded rewrite instead of a regex rewrite over the whole answer.
12. (2026-08-24) More context and more model calls must earn their place in
    measured quality. The plan keeps the smallest useful reading packet and
    rejects extra stages that do not improve the agreed evidence set.
13. (2026-08-24) The three Foundational Reader Trials remain the finished
    product bar. Development evidence may prepare for them, but only the owner
    can accept them in fresh conversations during Plan 030.

## Scope

- Reinspect the complete current path: system prompt, context assembler, open
  reading loop, reading tools, retrieval index, exact finders, notebook,
  spoiler judge, reading packet, conversation storage, preferences, model
  capability input, and visible response publication.
- Build a versioned development set covering factual recall, exact quote and
  chapter finding, event reconstruction, aliases, chronology, character
  versions, power comparisons, contradictions, interpretation, theories,
  what-if branches, reader pushback, corrections, and multi-turn follow-ups.
  Keep final Reader Trial acceptance and hidden holdout cases for Plan 030.
- Establish isolated retrieval baselines before model synthesis. Measure exact,
  dense, sparse, hybrid, notebook, graph, reranking, direct rereading, and
  combinations on the question types they claim to solve.
- Replace one-size-fits-all retrieval with a fiction reading plan selected from
  the turn's needs. Supported shapes include exact quotation, canon lookup,
  event reconstruction, timeline comparison, relationship tracing,
  interpretation, theory inspection, and canon-grounded what-if.
- Create a structured turn brief containing the reader's actual ask, dialogue
  act, resolved references, entities and aliases, requested versions and
  timeline, spoiler boundary, prior position, current disagreement, and answer
  obligations. Every field must trace to current conversation evidence or be
  marked uncertain.
- Create a reading plan from the turn brief: search terms in novel vocabulary,
  exact finder needs, entity resolution, chapter ranges, candidate count,
  rereading depth, stopping rule, and known gaps. Models fill bounded choices;
  deterministic policy owns the overall question-type recipe.
- Improve candidate retrieval and reranking for fiction. Combine exact search,
  semantic search, timeline filters, aliases, co-occurrence, story-map links,
  notebook leads, chapter neighborhoods, and direct chapter reading according
  to measured results rather than one global ranking formula.
- Read selected chapters through the relevant scene resolution. Expanded
  windows remain evidence-gathering aids; a passage cutoff cannot silently
  decide who acted, who died, or how the closing scene resolved.
- Build an ephemeral evidence board for the current turn. Track each proposed
  claim, source chapter and location, evidence kind, canon or interpretation
  status, support strength, contradiction, timeline applicability, and missing
  proof. Novel prose remains private and absent from public records.
- Add a deterministic gap check before synthesis: unanswered parts, unresolved
  references, missing versions, unsupported claims, conflicting passages,
  spoiler conflicts, and evidence that stops before a scene resolution.
- Build the smallest useful reading packet from the evidence board and current
  question. Preserve direct evidence, claim labels, contradictions, spoiler
  framing, and source locations while removing repeated search results, stale
  tool transcripts, irrelevant history, and oversized summary noise.
- Build a living conversation brief for follow-ups. Preserve established facts,
  cited conclusions, Weaver's prior take, the reader's take, open disagreement,
  entity versions, spoiler boundary, and unresolved questions. It is a
  replaceable projection with links to canonical conversation items, never a
  replacement for the conversation ledger.
- Define an answer blueprint before prose: direct answer, required claims,
  chapter receipts, uncertainty, canon and take labels, invented what-if
  events, counterarguments, response mode, and which prior point must be
  answered.
- Define Weaver response modes with owner-reviewed examples:
  - **Direct recall:** short answer, chapter, necessary context.
  - **Reconstruction:** narrated sequence with evidence and uncertainty.
  - **Discussion:** a clear position, canon basis, counterargument, and natural
    invitation for pushback.
  - **Theory and what-if:** canon constraints first, invention labelled, then a
    believable branch in the characters' motives and world rules.
  - **Correction:** state the corrected fact plainly, explain why, and preserve
    any part of the reader's memory that the novel supports.
- Separate answer content from surface style. The model writes from the answer
  blueprint and evidence packet; Plan 029's response contract controls voice,
  density, citations, quote formatting, rhythm, and in-world flavor.
- Add deterministic publication checks for empty or placeholder prose,
  textual tool calls, missing required answer parts, malformed citations,
  unsupported chapter numbers, spoiler violations, unlabeled invention,
  repeated conclusions, exposed machinery, em dashes in Weaver prose, and
  mutation of direct blockquotes.
- Add a style inspection that detects generic AI openings, support-bot phrases,
  fake balance, repetitive section summaries, excessive headings, canned
  closing offers, overdone fantasy voice, and unexplained jargon. It returns
  specific findings and one bounded rewrite request; it never grades canon.
- Add a claim inspection that compares the proposed answer blueprint and final
  answer against the evidence board. Mechanical failures get precise repairs.
  Ambiguous literary judgment remains visible as interpretation rather than
  being forced into a false pass or fail.
- Keep correction candidates, evidence boards, reading packets, rejected
  drafts, style findings, and raw reasoning ephemeral. Persist the final answer
  and safe versioned conversation projection only after validation succeeds.
- Define one measured DeepSeek execution profile. Sponsored and BYOK turns use
  the same turn brief, evidence, answer, and publication contracts.
- Measure quality, latency, requests, tokens, context size, tool steps, and
  failure for every development run. Compare the current system, retrieval
  improvements, structured context, answer blueprint, and final inspection so
  each added layer has visible benefit and cost.
- Update reader-facing disclosure and internal docs for how Weaver reads,
  remembers the current discussion, separates canon from takes, and protects
  quotes without exposing private library machinery.

## Out of scope

- Sponsored-access accounting, BYOK credentials, signed reader passes, and
  allowance enforcement. Plan 028 owns those foundations.
- Final DeepSeek qualification, allowance tuning, public load proof, rollout,
  deployment, release tagging, or v2.0.0. Plan 030 owns those decisions.
- Accounts, usernames, passwords, billing, subscriptions, or gating deep
  conversation behind payment or BYOK.
- A hidden turn-level router that changes provider or model for hard questions.
- Persisting private reading packets, raw novel prose, rejected drafts, style
  findings, raw tool results, or model reasoning.
- Treating notebook statements, embeddings, similarity scores, graph links,
  generated summaries, automated judges, or checkers as the novel's truth.
- Hard-coded Foundational Reader Trial answers, prompt-specific branches, trial
  answers in the system prompt, or tuning only against those three questions.
- Unlimited planner, critic, judge, or rewrite calls. Every model call has a
  named job, fixed ceiling, and measured benefit.
- Rewriting direct novel quotations to fit Weaver's style.
- UI redesign, provider setup UI, deployment topology, native mobile apps, or
  unrelated story-notebook expansion.

## Deterministic proof / verification floor

1. Frozen retrieval cases prove exact phrase, vocative, alias, co-occurrence,
   timeline, version, chapter-range, relationship, scene-resolution, and
   contradiction finding against bounded private source packets.
2. Retrieval reports separate discovery from proof. A hit is useful only when
   direct chapter rereading supports the expected claim and reaches the needed
   scene resolution.
3. Turn-brief tests cover fresh questions, pronouns, corrections, challenges,
   changed time points, spoiler boundaries, ambiguous names, and follow-ups
   that depend on the prior position rather than the last message alone.
4. Evidence-board tests prove every factual answer claim has a chapter and
   location, interpretations stay labelled, contradictions remain visible,
   and invented what-if events cannot become canon on later turns.
5. Context tests prove the selected packet stays within the configured DeepSeek
   context, output, and request budget, preserves current obligations and
   relevant prior conclusions, keeps
   tool exchanges valid, and removes irrelevant history deterministically.
6. Answer-blueprint and publication tests cover all response modes, required
   claims, citations, uncertainty, spoiler framing, quote formatting,
   unsupported chapters, hidden machinery, and incomplete answers.
7. Style tests prove Weaver-authored prose contains no em dash, direct
   blockquotes remain byte-identical, generic AI and support-bot patterns
   produce targeted findings, and cleanup never rewrites novel prose.
8. Repair tests prove each retry receives exact findings, has a fixed ceiling,
   stays ephemeral, and falls back only to a previously validated answer.
9. Conversation tests prove established facts, positions, versions, and
   unresolved disagreements survive restart while stale tool transcripts,
   packets, rejected drafts, and raw reasoning do not.
10. Execution-profile tests run the same semantic contract through strict and
    combined fake profiles. Provider identity never appears in reading,
    context, answer, or style policy.
11. Ablation reports show the quality and request-cost change when retrieval,
    structured context, evidence checking, answer planning, and style repair
    are added one at a time. An added stage with no agreed improvement is
    removed or returned to the owner.
12. Development runs include repeated multi-turn cases and failures. They may
    show readiness for Plan 030 but cannot accept a Foundational Reader Trial
    or qualify a production model.
13. Focused suites pass, followed by `uv run pytest -q` and
    `uv run ruff check src/weaver tests`. Root `npm test` and `npm run build`
    pass if visible response handling changes.
14. Two independent reviews pass: retrieval/evidence/temporal correctness,
    then conversation/voice/style/privacy/evaluation validity. The owner
    records the final Plan 029 decision.

## STOP conditions

- If Plan 028 is not closed and owner-accepted, STOP. Plan 029 cannot build
  against a moving provider boundary.
- If a proposed retrieval change is judged only by similarity score, checker
  shape, or model preference without direct chapter verification, do not adopt
  it.
- If a bounded source packet does not reach the chapter or scene ending needed
  to verify the claim, extend the admitted packet or record the case unresolved.
- If a stage needs a hidden model switch, STOP and repair the DeepSeek execution
  contract instead.
- If adding context lowers accuracy, follow-up focus, or quote fidelity, record
  the failure and reduce or restructure the packet. Bigger is not a pass.
- If a new model call does not improve the agreed cases enough to justify its
  request and token cost, remove it or ask the owner before keeping it.
- If style cleanup changes a direct quote, citation, factual meaning, canon
  label, or uncertainty, STOP and restore the pre-style validated answer.
- If an automated judge tries to settle literary interpretation or accept a
  Reader Trial, record the disagreement and defer to the owner.
- If a Foundational Reader Trial answer, hidden holdout, or expected wording
  leaks into prompts, retrieval rules, answer templates, or production code,
  invalidate the affected evidence and repair the test boundary.
- If a conversation projection replaces canonical history, loses source item
  links, or carries an invented event forward as canon, STOP.
- If private chapter prose, reading packets, rejected drafts, style findings,
  raw tool payloads, chats, or reasoning enter public logs or deliverables,
  STOP and contain the material.
- If the admitted DeepSeek model cannot meet the agreed development cases
  within the request and cost ceiling, record that result for Plan 030 rather
  than hiding it.

## Slices

1. **Plan admission and baseline freeze**
   - Review scope, budget, evaluation boundary, private-source limits, and
     owner gates after Plan 028 closes. Record admission before experiments.
   - Freeze the current turn, retrieval, context, conversation, packet, answer,
     and request-cost baselines on the development set.

2. **Learn the fiction retrieval problem**
   - Group development questions by the reading work they require and inspect
     exact failures in the current finders, index, notebook, graph, reranking,
     windows, timeline handling, and stopping behavior.
   - Read bounded private packets straight through for each admitted case and
     record public-safe locations and failure categories.
   - Propose the reading-plan recipes and evaluation measures. STOP for the
     owner retrieval gate before changing the production reading path.

3. **Build the turn brief and reading plans**
   - Add failing tests for intent, dialogue acts, referents, versions,
     timelines, spoiler boundaries, prior positions, and answer obligations.
   - Build the versioned turn brief and deterministic question-type reading
     recipes, with explicit uncertainty and no provider names.

4. **Build measured retrieval and direct rereading**
   - Improve exact, semantic, hybrid, alias, co-occurrence, timeline,
     neighborhood, notebook, and story-map selection only where isolated cases
     prove the benefit.
   - Add reranking, direct rereading through scene resolution, and explicit gap
     and contradiction detection. Keep failures in the report.

5. **Build the evidence board and context engine**
   - Add claim, citation, kind, version, conflict, and missing-proof records for
     the current turn, then derive the smallest useful reading packet.
   - Build the living conversation brief from canonical item links and prove
     restart-safe follow-up continuity without carrying private transient state.
   - STOP for owner inspection of real context packets before synthesis work.

6. **Build answer blueprints and Weaver voice**
   - Define and owner-review the direct recall, reconstruction, discussion,
     theory/what-if, and correction modes using public-safe synthetic examples.
   - Build answer blueprints from evidence and conversation obligations, then
     write the response contract for citations, canon/take/invention labels,
     rhythm, poetic restraint, and natural pushback.

7. **Build publication inspection and bounded repair**
   - Add content, citation, spoiler, quote, machinery, em-dash, and style checks
     before publication. Keep mechanical cleanup limited to Weaver prose.
   - Add one specific bounded repair path and preserve the last validated
     answer when a rewrite fails or cancellation wins.

8. **Build the measured DeepSeek execution profile**
   - Compare strict and combined task sizes through the same DeepSeek boundary.
   - Measure accuracy, continuity, latency, requests, tokens, packet size, and
     repair rate. Remove stages that do not earn their cost.

9. **Use and inspect multi-turn Weaver**
   - Run repeated development conversations for canon reconstruction,
     time-aware comparison, interpretation, reader pushback, correction,
     theory, and what-if changes through fake and owner-approved live DeepSeek.
   - Keep the Foundational Reader Trials unaccepted and reserve final blind
     DeepSeek qualification for Plan 030.

10. **Review, owner decision, and handoff**
    - Run the verification floor and staged-file private-text audit.
    - Complete both independent reviews, repair findings with focused tests,
      and recheck the complete affected slices.
    - Present retrieval gains, conversation evidence, voice examples, request
      cost, failed hypotheses, and the frozen Plan 030 qualification contract.
      Stop for the owner's dated decision, then close Plan 029.
