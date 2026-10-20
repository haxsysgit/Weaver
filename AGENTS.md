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

## Reader Experience Trials

The final product gate is twelve private, fresh-session conversations with the
owner as a reader. All twelve must pass. The purpose is not retrieval
correctness. It is whether a reader enjoys talking with Weaver, and whether
Weaver can retell, explain, and visualise the novel well.

The full suite, prompts, follow-ups, and rubric live in
`deliverables/030-weaver-v2-qualification-and-rollout/reader-experience-trials.md`.
The twelve:

1. **The vibe check.** No task, no lore question. Can Weaver be a buddy
   without dumping lore or turning into a support bot?
2. **The hot take.** A strong opinion about a character. Can Weaver argue,
   cite, disagree, and keep it fun?
3. **The half-memory.** A half-remembered scene with one wrong detail. Can
   Weaver correct it without condescension and keep the thread alive?
4. **The first-timer.** A spoiler boundary. Can Weaver protect the reader and
   still be useful and fun?
5. **The theory.** A wild fan theory. Can Weaver engage it, test it against
   canon, and label canon, inference, and invention?
6. **The vague ask.** "Tell me something I missed." Can Weaver choose a good
   thread and follow it instead of listing?
7. **The emotional favourite.** A scene the reader loves. Can Weaver match the
   energy, add insight, and avoid lecturing?
8. **The low-effort.** A quick versus question. Can Weaver answer briefly,
   stay accurate, and survive "why" and "huh"?
9. **The long thread.** An eight to ten turn conversation with callbacks and a
   running joke. Can Weaver remember, stay consistent, and not repeat?
10. **The adversarial.** "You're just a bot." Can Weaver hold its ground,
    show evidence, and stay unbothered?
11. **The fanfic spark.** A missing scene request. Can Weaver write
    novel-quality prose in the `storyteller` voice, keep canon, and label
    invention?
12. **The confusing fight or arc.** The reader asks Weaver to explain a
    genuinely confusing fight, scene, or arc and help them visualise it. Can
    Weaver read the chapters, reconstruct the sequence and stakes, keep the
    canon straight, and make the reader see it?

Every trial is judged on two axes:

- **Conversation:** voice, flow, fun, challenge, memory, and safety. Would the
  reader keep talking?
- **Storytelling:** accuracy, sequence, causality, clarity, imagery, character
  motive, and honest citation. Could the reader follow it and picture it? Is it
  a retelling, not a dry summary and not an essay?

The storytelling axis is mandatory in Trials 3, 7, 11, and 12, and should be
judged wherever the answer retells or explains the novel.

## Reader Trial protocol

- Each trial is a fresh conversation. The owner opens with the prompt, then
  pushes at least once: a challenge, a correction, a "huh", a "prove it", or a
  follow-up.
- Six to twelve turns per trial. The owner may improvise. The prompts are
  examples, never hard-coded into the product, the system prompt, or the
  retrieval path.
- The product must not know which trial is running.
- The private transcript stays private. The deliverable records the verdict,
  the axis notes, the failure reason, and the build.
- All twelve must pass. A failure on safety or accuracy blocks. A failure on
  enjoyment or storytelling blocks. A re-run needs a changed build and the
  owner's explicit approval. No silent retries.
- Only the owner can pass a trial or accept the suite. Pytest, retrieval
  scores, validators, checkers, reviewers, and other agents may collect
  evidence, but they cannot accept a trial or declare Weaver complete.

## Retrieval regression

The three old Foundational Reader Trials remain a retrieval regression set,
not the final gate:

1. Canon reconstruction and discussion: Ariel, the Unholy Titan, and the Tomb
   of Ariel.
2. Time-aware power comparison: current Sunny against prime Azarax.
3. Canon-grounded what-if: Anvil of Valor against Azarax of Effie's Fourth
   Nightmare.

The working retrieval hypothesis includes retrieval-augmented answering,
embeddings, a vector database, exact search, and direct rereading of larger
chapter passages. `read`, `grep`, and `glob` are rudimentary tools and
baselines; an agent must not claim they are sufficient without evidence.

The first evidence is recorded: exact phrase and vocative finding on the raw
chapters (the Weaver-voice trace, 2026-08-07) is a core agentic capability,
not a convenience. See `docs/reading-finders.md`.

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
  what changed in the process docs, and prove it with one real slice.
- This is a standing ritual, not a numbered plan. It does not consume a
  plan number or a decision gate.
- The workflow discipline is codified in the `arinze-plans` skill and
  the repo's plan records: roles and isolation for subagent fleets,
  test-first red/green loops, and the numbered-plan gates. Code work
  follows it.

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

## AWS Guidance (from aws/agent-toolkit-for-aws)

- Prefer the AWS MCP Server for AWS interactions — it provides sandboxed
  execution, observability, and audit logging. If unavailable, use the
  AWS CLI directly.
- Before starting a task, check whether a relevant AWS skill is available.
  Load the skill with `retrieve_skill` and prefer its guidance over
  general knowledge.
- When uncertain about specific AWS details (API parameters, permissions,
  limits, error codes), verify against documentation rather than guessing.
  State uncertainty explicitly if you cannot confirm.
- When creating infrastructure, prefer infrastructure-as-code (AWS CDK or
  CloudFormation) over direct CLI commands.
- When working with infrastructure, follow AWS Well-Architected Framework
  principles.
- Do not use em dashes in AWS resource names or descriptions. Use
  hyphens instead.

### Secret Safety

- MUST load the `aws-secrets-manager` skill first for any secret,
  credential, API key, token, or password task. MUST NOT call
  `secretsmanager get-secret-value` or `batch-get-secret-value`, and MUST
  NOT hit the Secrets Manager Agent daemon directly. MUST use
  `{{resolve:secretsmanager:secret-id:SecretString:json-key}}` with
  `asm-exec` so the secret resolves at runtime without entering context.
