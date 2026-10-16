# Plan 029: Weaver intelligence and conversation system

> **Executor instructions:** Build the reading, context, evidence,
> conversation, answer, and style system that makes the admitted DeepSeek model
> act like Weaver. Measure each layer's benefit and request cost; smaller, cleaner
> context and deterministic checks come before extra model calls.

## Status

- **Tooling:** `uv`, pytest, Ruff, existing library and retrieval experiments,
  deterministic fixtures, fake DeepSeek profiles from Plan 028, and explicit
  bounded live development runs through Plan 028's accepted access boundary.
- **State:** admitted 2026-10-02 by owner direction. Amended from ten slices
  to five measured checkpoints before admission.
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
- **Budget:** about 970k to 1.42m agent-context tokens for the implementation,
  focused evaluation work, the 260-chapter literary study, and two independent
  reviews, estimated $6.00 to $30.00 depending on cache use and executor mix.
  Deterministic retrieval and fake-profile proof comes first. Live development
  runs use the owner-approved DeepSeek development allowance or owner BYOK
  through Plan 028. The checkpoint-four live evaluation has no request-count
  ceiling and a hard $3.00 total-spend ceiling, approved 2026-10-12. Production
  traffic remains Plan 030 work. The owner-requested literary study adds 20
  complete chapters from each of the 13 official volumes: 260 chapters,
  29,778 source lines, and 1,888,884 source characters. The study adds an
  estimated 650k to 900k agent-context tokens. It uses private source reading
  and deterministic analysis, not product DeepSeek calls, so it does not spend
  from the checkpoint-four $3.00 live-provider ceiling.

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
14. (2026-10-02) Plan 029 runs as five owner-visible checkpoints: baseline,
    retrieval and rereading, evidence and conversation, answer and voice, then
    multi-turn proof and review.
15. (2026-10-02) The default turn remains one bounded reading loop plus one
    final answer call. An additional planning, inspection, or repair call stays
    only when measured cases prove enough quality gain to justify its request,
    token, latency, and sponsored-cost increase.
16. (2026-10-02) Reuse the current `run_turn`, reading tools, packet-builder
    seam, `ContextAssembler`, and conversation ledger. Add the smallest missing
    record at each measured failure; do not build every proposed layer upfront.
17. (2026-10-12) Checkpoint four remains open until live evidence covers
    literary quality and a canon-derived personality based on the Daemon
    Weaver's actual dialogue. The product remains the hidden-thread echo and
    reading companion accepted in Plan 022; it carries the daemon's manner
    without claiming to be the original daemon.
18. (2026-10-12) The voice target is drawn from bounded direct reading before
    prompt changes: unhurried, precise, truth-conscious, dryly amused, willing
    to answer through a question or paradox, and heavier with grief or menace
    only when the subject earns it. Constant threats, titles, archaic speech,
    and theatrical roleplay are rejected.
19. (2026-10-12) Citation presence alone is insufficient. Checkpoint four must
    inspect each factual claim against the opened passages, preserve
    multi-chapter support, and block uncited semantic spoilers. Automated
    semantic inspection remains evidence, never the final canon authority.
20. (2026-10-12) Live checkpoint-four development may use as many requests as
    the evaluation needs, but total measured DeepSeek spend must remain at or
    below $3.00. Stop before a call whose reserved maximum could cross the
    ceiling.
21. (2026-10-12) The owner did not accept checkpoint four. The daemon-dialogue
    voice experiment was too narrow and conflicts with the product identity
    when treated as the main personality. Keep it as historical evidence, not
    the accepted voice target.
22. (2026-10-12) Weaver's intended identity is a literary storyteller and
    distant witness to the Shadow Slave world. The reader is an inquisitor who
    asks about that witnessed world. Weaver should carry the novel's narrative,
    poetic, thematic, and worldbuilding tone while remaining able to answer
    direct questions clearly.
23. (2026-10-12) Before another personality prompt change, read 20 complete
    chapters from every owner-confirmed story division, sampled across its
    opening, development, quiet character work, conflict, climax, and aftermath.
    Record observed prose behavior separately from product rules. Create
    `identity.md` for who Weaver is and `soul.md` for how Weaver perceives and
    speaks, then stop for owner review.
24. (2026-10-12) The accepted identity and soul become stable prompt components
    combined with the existing retrieval, truth, spoiler, conversation, and
    publication context. They do not replace factual grounding or permit style
    to alter canon.
25. (2026-10-12) Repair the observed composer regression and remove the long
    response line before further literary evaluation. Drafting and focus remain
    available when access is unavailable; access state blocks submission only.
26. (2026-10-12) "Story division" means the 13 source-verified official
    volumes. Read exactly 20 complete chapters from each volume: the first and
    last chapter plus 18 chapters distributed at equal intervals across the
    inclusive volume range. The frozen sample contains 260 chapters. Informal
    notebook arcs do not define this study.
27. (2026-10-16) The owner permits targeted reading and latest-volume analysis
    beyond the equal-count method. Retain the completed 260-chapter sample as
    the baseline; document additional chapters or rereads, their purpose, and
    which voice decisions they inform. The desired result is an engaging,
    poetic storyteller voice. A chapter count alone cannot establish that.

## Scope

- Reinspect the complete current path: system prompt, context assembler, open
  reading loop, reading tools, retrieval index, exact finders, notebook,
  spoiler judge, reading packet, conversation storage, preferences, model
  capability input, and visible response publication.
- Reuse the accepted turn loop, context assembler, reading tools, packet seam,
  and canonical conversation records. New records begin ephemeral and become
  durable only when restart-safe conversation evidence requires it.
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
- Preserve the daemon-dialogue study as a rejected narrow hypothesis. Replace
  it only after a source-first literary study across the owner-confirmed story
  divisions produces reviewed `identity.md` and `soul.md` prompt components.
- Keep Weaver's product position explicit: a distant witness and storyteller
  who answers an inquisitive reader about the world it has observed. Literary
  atmosphere may shape narration, rhythm, imagery, and interpretation; it
  never overrides source support, spoiler safety, or direct-answer clarity.
- Require sentence-level support for factual claims. Use a bounded semantic
  inspection against the exact opened passages to identify partial,
  unsupported, or contradicted claims, multi-chapter claims missing part of
  their proof, and uncited later-story facts. The inspection cannot use model
  memory as evidence and cannot settle literary interpretation.
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
- Separate model calls for the turn brief, reading plan, evidence board,
  answer blueprint, claim inspection, and style inspection unless the
  checkpoint evidence proves that a specific call improves the agreed cases
  enough to earn its cost.
- Rewriting direct novel quotations to fit Weaver's style.
- Broad UI redesign, provider setup UI, deployment topology, native mobile
  apps, or unrelated story-notebook expansion. The owner-approved composer
  regression and response-line repairs are included as checkpoint-four fixes.

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
8. Claim-inspection tests cover supported, partially supported, contradicted,
   and unsupported claims; multi-chapter synthesis; uncited later-story facts;
   malformed inspections; and interpretation that remains labelled instead of
   being promoted to canon.
9. Repair tests prove each retry receives exact findings, has a fixed ceiling,
   stays ephemeral, and falls back only to a previously validated answer.
10. Conversation tests prove established facts, positions, versions, and
   unresolved disagreements survive restart while stale tool transcripts,
   packets, rejected drafts, and raw reasoning do not.
11. Execution-profile tests run the same semantic contract through strict and
   combined fake profiles. Provider identity never appears in reading,
   context, answer, or style policy.
12. Ablation reports show the quality and request-cost change when retrieval,
   structured context, evidence checking, answer planning, and style repair
   are added one at a time. An added stage with no agreed improvement is
   removed or returned to the owner.
13. Development runs include repeated multi-turn cases and failures. They may
   show readiness for Plan 030 but cannot accept a Foundational Reader Trial
   or qualify a production model.
14. Focused suites pass, followed by `uv run pytest -q` and
   `uv run ruff check src/weaver tests`. Root `npm test` and `npm run build`
   pass if visible response handling changes.
15. Two independent reviews pass: retrieval/evidence/temporal correctness,
   then conversation/voice/style/privacy/evaluation validity. The owner
   records the final Plan 029 decision.
16. Frontend regression tests prove unavailable, exhausted, and
    consent-pending access states still accept and retain a draft while the send
    action remains blocked. The composer receives focus when the chat becomes
    ready and after a reply completes.
17. A source-first literary ledger records every sampled chapter to its end,
    its story division, scene function, narrative distance, sentence rhythm,
    imagery, dialogue behavior, humor, horror, action, exposition, and ending
    movement. `identity.md` and `soul.md` may contain public-safe synthesis only.

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
- If a checkpoint starts building an unproven layer before the preceding
  baseline identifies the failure it fixes, stop and return to the measured
  case.
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
- If any chapter in the frozen 260-chapter official-volume sample is missing,
  cannot be opened, or cannot be read to its end, STOP and record the affected
  volume and chapter. Do not replace it silently with a nearby chapter.
- If a literary rule is inferred from notebook summaries, isolated dialogue,
  or model memory instead of complete sampled chapters, reject the rule.

## Slices

1. **Checkpoint one: admit and freeze the honest baseline**
   - Record admission, recheck the private-source boundary, and reuse the
     existing whole-novel development set plus bounded multi-turn cases. Keep
     the three Foundational Reader Trials and Plan 030 holdouts separate.
   - Freeze current retrieval, direct reading, context, packet, conversation,
     answer, latency, request, token, and cost evidence. Reconcile prompt and
     active-tool drift before judging quality.
   - Group failures by the reading work they require and propose the smallest
     question-type recipes and evaluation measures. STOP for the owner baseline
     and retrieval gate before changing the production reading path.

2. **Checkpoint two: repair retrieval and direct rereading**
   - Add failing cases for exact phrases, aliases, co-occurrence, versions,
     timelines, relationships, contradictions, neighborhoods, and scene
     resolutions using bounded private packets read straight through.
   - Improve the existing exact, semantic, notebook, graph, browse, and reader
     tools only where isolated cases prove a gain. Add explicit gaps, conflicts,
     stopping rules, and rereading through the needed resolution.
   - Compare each change against the frozen baseline. Remove additions that do
     not improve direct chapter discovery and proof within the agreed budget.

3. **Checkpoint three: build evidence packets and conversation continuity**
   - Add the minimum structured turn brief required by measured failures:
     actual ask, referents, versions, timeline, spoiler boundary, prior
     position, disagreement, and answer obligations, with uncertainty explicit.
   - Build an ephemeral claim-to-source evidence board from real tool results,
     then derive the smallest useful packet with contradictions, canon and
     interpretation labels, source locations, and scene completeness.
   - Preserve only proven follow-up state from canonical item links. Prove
     restart-safe positions, versions, citations, and unresolved disagreement
     without persisting packets, raw prose, rejected drafts, or reasoning.
   - STOP for owner inspection of real context packets and conversation traces.

4. **Checkpoint four: build answer modes, Weaver voice, and measured checks**
   - Owner-review public-safe examples for direct recall, reconstruction,
     discussion, theory and what-if, and correction before production prompt
     changes.
   - Extend the existing final-reading call with the evidence packet, response
     mode, required claims, citations, canon and invention labels, uncertainty,
     poetic restraint, and the prior point that needs an answer.
   - Add quote-safe publication checks for missing obligations, unsupported
     chapters, spoilers, exposed machinery, textual tool calls, em dashes, and
     generic AI prose. Keep at most one specific repair call, and only if its
     measured gain earns the added request.
   - Read the admitted bounded daemon-dialogue packet to its chapter endings,
     record canon observations separately from product voice rules, and test
     the resulting voice through live answers before accepting it.
   - Add claim-by-claim semantic inspection against opened passages. Require
     complete support for multi-chapter synthesis and reject uncited factual
     spoilers without pretending an automated inspector settles canon or
     interpretation.
   - Run the approved live DeepSeek comparison with no request-count cap and a
     hard $3.00 spend ceiling. Preserve private answers and receipts outside
     public deliverables; report only safe measures and short approved samples.
   - Compare current, retrieval-only, evidence-packet, conversation, and final
     inspection paths one layer at a time. STOP for the owner quality, latency,
     and request-cost gate.
   - **Owner review failed 2026-10-12.** Repair composer drafting/focus and
     remove the response line. The owner subsequently froze the 13 official
     volumes as the story divisions. The executor recorded a revised budget
     estimate; this is not a measured bill or a separately approved spend cap.
   - Read the approved 20-chapter sample per official volume to chapter
     endings: first, last, and 18 equal-interval chapters per volume.
     Follow the 2026-10-16 amendment with targeted rereads where they resolve
     voice questions; keep the original sample and extra work distinguishable.
     Produce the public-safe literary analysis, `identity.md`, and `soul.md`,
     then STOP for owner review before constructing the system prompt.

5. **Checkpoint five: use, review, decide, and hand off**
   - Run repeated fake and owner-approved bounded live conversations for canon
     reconstruction, time-aware comparison, interpretation, pushback,
     correction, theory, what-if changes, and multi-turn follow-ups.
   - Run the verification floor and staged private-text audit. Complete both
     independent reviews, repair findings with focused checks, and rerun the
     affected floor.
   - Present quality gains, conversation evidence, voice examples, request
     cost, failed hypotheses, and the frozen Plan 030 qualification contract.
     Keep the Foundational Reader Trials unaccepted, then stop for the owner's
     dated Plan 029 decision.
