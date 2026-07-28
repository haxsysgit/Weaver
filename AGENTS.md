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

## Private sources and generated state

- Treat everything under `novels/` as immutable private source material.
- Never modify raw novels.
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
- Audit staged files for credentials and private source text before any commit.
- A passing implementation is not an accepted experiment until the owner
  records the decision.
