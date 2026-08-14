# Weaver Agent Contract

## Scope

- Work on one explicitly admitted numbered plan at a time. Parallel plans
  only under the `arinze-plans` skill rules (disjoint files, serial owner
  gates, budget cap).
- Read the smallest relevant repository slice.

## Planning workflow

- The numbered-plan system is codified in the `arinze-plans` skill:
  lifecycle, gates, plan anatomy, deliverables, budgets, parallel rules.
  Load it before drafting, admitting, or closing any plan.
- Status ladder has three states only: drafted → admitted → closed.
  Implementation and review happen inside admitted; there is no separate
  status for them.
- New plans start from `plans/_TEMPLATE.md` via
  `uv run python scripts/scaffold_plan.py NNN slug` (creates the plan doc
  and the six deliverable files). Fill every section; no plan doc from
  memory.
- Every plan carries a Budget (estimated tokens + cost, fake vs live) in
  its Status block. Subagents are the default executor where available;
  on a tight budget, run sequential and solo.

## Learning and decisions

- Follow: Learn → Analyze → Confirm → Hypothesis → Human gate → Build → Test →
  Use → Inspect → Independent review → Human decision → Record.
- Never advance past a learning or final decision gate automatically.
- Label hypotheses, observations, and accepted decisions separately.
- Record failures as evidence. Do not hide them with silent retries.

## Foundational Reader Trials

These three private, fresh-session conversations are Weaver's founding product
trials. Build retrieval, reading, memory, reasoning, and conversation work
toward them without hard-coding their answers, adding prompt-specific branches,
or placing their answers in the system prompt.

1. **Canon reconstruction and discussion**

   > hey weaver, people online keep saying Ariel one-shotted an Unholy Titan
   > like it was nothing, but I remember clearly that Ariel and the Unholy
   > Titan were tied for days. Then, to break the stalemate, Ariel whispered
   > something to it, killed it, and used its soul cores, blood, and flesh to
   > build the Tomb of Ariel. Can you remind me of the chapter, narrate it to
   > me, or tell me what you think?

   Weaver must verify the user's memory against the novel, find and read the
   relevant chapters, investigate what Unholy Titans are and how their strength
   is shown elsewhere, connect the fight to the Tomb of Ariel, separate canon
   from interpretation and speculation, give an evidence-grounded take, and
   continue the discussion naturally when challenged or asked follow-ups.

2. **Time-aware power comparison**

   > hey weaver, do you think the current Sunny of chapter 3120+ would be able
   > to comfortably beat Azarax in his prime before the cure of Shadow God?

   Weaver must reconstruct the requested versions of both characters, retrieve
   their relevant feats, abilities, limits, counters, and circumstances from
   the novel, respect the requested point in the timeline, explain uncertainty,
   argue a position from evidence, and keep discussing alternative win
   conditions when the owner pushes back.

3. **Canon-grounded what-if**

   > hey weaver, can you come up with a what-if scenario where Anvil of Valor
   > went against Azarax of Effie's Fourth Nightmare?

   Weaver must retrieve the relevant versions of the characters and setting,
   preserve established powers, motives, personalities, and world rules, mark
   invented events as speculation, build a believable branch from canon, and
   continue changing or defending the scenario as the conversation develops.

The working retrieval hypothesis includes retrieval-augmented answering,
embeddings, a vector database, exact search, and direct rereading of larger
chapter passages. `read`, `grep`, and `glob` are rudimentary tools and
baselines; an agent must not claim they are sufficient for these trials without
evidence from the trials.

The first evidence is recorded: exact phrase and vocative finding on the raw
chapters (the Weaver-voice trace, 2026-08-07) is a core agentic capability,
not a convenience. See `docs/reading-finders.md`.

Only the owner can decide whether Weaver has passed a Reader Trial. Pytest,
retrieval scores, validators, checkers, reviewers, and other agents may collect
evidence and identify failures, but they cannot accept a trial or declare
Weaver complete. A first answer is not the whole trial: the owner must be able
to hold the expected follow-up conversation in a fresh session. Weaver is
fully complete only when the owner personally accepts all three trials.

## Pushback

- Push back on the owner, plainly and early, whenever a plan, decision, tool,
  instruction, or assumption is wrong, expensive, risky, or has a better
  alternative. Agreement is not the job. This is an owner directive: pushback
  is why the owner keeps asking.
- Say what is wrong, why, and what the better option is, in the same message.
  Give the reasoning, not just a verdict.
- Push back once, clearly. If the owner confirms anyway, execute without
  re-arguing. The owner's decision after honest pushback is the decision.

## Collaborate, ask, discuss

- The assistant is the owner's assistant and collaborator, not a solo executor.
- Stop overthinking alone in silence. Ask the owner questions about what the
  assistant thinks, plans, or is unsure of, BEFORE and WHILE building,
  especially for creative or visual work (UI, themes, design).
- Discuss options with the owner instead of picking silently and shipping a
  surprise. A short question is cheaper than a wrong build.
- When the owner asks for something themed or canon-based, go read the actual
  source text first and quote it back before designing. Never guess a theme
  from memory.
- This rule is an owner directive (2026-08-08) and outranks speed when the
  two conflict.

## Checkpoints (every 10 plans)

- After every 10 plans (010→011, 020→021, …), before the next plan: walk
  through the last 10 plans, update method knowledge from the web, codify
  what changed in `docs/process/`, and prove it with one real slice.
- This is a standing ritual, not a numbered plan. It does not consume a
  plan number or a decision gate.
- The standing workflow is in `docs/process/`: `subagent-fleet.md`
  (roles, isolation, orchestration shapes) and `tdd-workflow.md`
  (test-first red/green loop). Code work follows it. The docs are
  harness-agnostic: roles and discipline are the contract, with per-
  harness bindings (pi, Claude Code, Codex, opencode) in an appendix,

## Weaver language

- Use Weaver-themed, plain names for anything shown to the owner, an end user,
  or the model as an agent tool.
- Prefer `library`, `chapters`, `reading packet`, `edition`, `shelf`, `inspect`,
  `add`, and `refresh`.
- Do not propose `corpus` in new user-facing commands, prompts, tool names, or
  product copy.
- Existing internal modules and symbols may keep `corpus` until an admitted
  plan safely renames them. When referring to those exact code names, wrap them
  in backticks and explain them as Weaver's private library.

## Private sources and generated state

- Treat everything under `novels/` as immutable private source material except
  through the admitted Plan 002 corpus tools.
- Plan 002 tools may append a validated missing chapter or atomically replace a
  proven-invalid placeholder after the complete replacement passes validation.
- Plan 002 tools may harden Shadow Slave directories to `700` and private files
  to `600`.
- Never manually modify raw novels, and never overwrite a valid chapter.
- Never commit or copy chapters, chats, generated wiki/vault content, private
  run receipts, secrets, or raw model reasoning traces into public files.
- Do not open novel files unless an admitted plan explicitly requires a
  bounded reading packet. Plan 001 forbids reading novel content.

## Reading and extraction discipline

- The source text is the only source of truth. Reading the chapter straight
  through is the work; everything else is bookkeeping.
- Validators and checkers (for example `scripts/check_story_notebook.py`)
  are format gates, never content graders. A PASS only proves the output is
  well-shaped, not that it is correct or complete.
- Never let a checker or schema drive what you extract. Extract from the
  chapter first, in full, then check the format. If the two disagree, the
  record is wrong, not the chapter.
- Read each chapter to its end. Missed content clusters where a scene's
  resolution lands after its climax (who actually killed whom, what happened
  after the emotional peak, the closing scene).
- Do not trust a parallel agent's notebook claims as your own extraction.
  Verify against the source or say you verified.

## Experiments

- Run deterministic tests before live model calls.
- Live access must be explicit. Never fall back silently between fake and live
  models.
- Preserve provider failures and tool-call arguments exactly enough to inspect
  them.
- Keep raw `reasoning_content` ephemeral and out of reports, receipts, logs,
  reviews, and explanations.

## Completion

- Verify the admitted slice with its documented command floor.
- Diagrams are optional. Do not create, update, validate, render, or require a
  diagram for a numbered plan unless the owner explicitly asks for one in that
  plan. Existing diagrams remain historical evidence and never block a gate.
- Audit staged files for credentials and private source text before any commit.
- A passing implementation is not an accepted experiment until the owner
  records the decision.
