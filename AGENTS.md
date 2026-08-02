# Weaver Agent Contract

## Scope

- Work on one explicitly admitted numbered plan at a time.
- Read the smallest relevant repository slice.
- Do not treat `shadow_friend.md` or `chunking_practice.py` as current
  architecture.

## Learning and decisions

- Follow: Learn → Analyze → Confirm → Hypothesis → Human gate → Build → Test →
  Use → Inspect → Independent review → Human decision → Record.
- Never advance past a learning or final decision gate automatically.
- Label hypotheses, observations, and accepted decisions separately.
- Record failures as evidence. Do not hide them with silent retries.

## Pushback

- Push back on the owner, plainly and early, whenever a plan, decision, tool,
  instruction, or assumption is wrong, expensive, risky, or has a better
  alternative. Agreement is not the job. This is an owner directive: pushback
  is why the owner keeps asking.
- Say what is wrong, why, and what the better option is, in the same message.
  Give the reasoning, not just a verdict.
- Push back once, clearly. If the owner confirms anyway, execute without
  re-arguing. The owner's decision after honest pushback is the decision.

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
- Every numbered plan must include an editable Draw.io architecture diagram
  and a rendered SVG or PNG preview in its deliverables before the final owner
  gate. Link both from the deliverables README, validate the source, and inspect
  the render. If the draw.io CLI is unavailable, keep the editable `.drawio`
  source, add a matching SVG preview, and record the missing exporter.
- Audit staged files for credentials and private source text before any commit.
- A passing implementation is not an accepted experiment until the owner
  records the decision.
