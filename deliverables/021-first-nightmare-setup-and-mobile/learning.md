# Plan 021 — learning.md

## Status

- Admitted 2026-08-17 by owner (parallel to v1's remaining backend slices,
  disjoint frontend files).
- Slice 2 copy approved by the owner on 2026-08-17.
- Animation direction locked by the owner on 2026-08-17: use the existing
  motion tokens and Spell language, then make a more polished setup-specific
  particle-fragment rune instead of copying the current animation.
- Slices 3-6 may proceed. The final owner decision remains pending.

## Checkpoint walk 020 -> 021 (per arinze-plans skill)

Walked the last ten plans (011-020) for method knowledge:

- **Cost doctrine hardened** (019/020): off-peak DeepSeek rates are the
  only truth; harness cost fields use stale flat rates and understate
  spend; real cost = input_miss x 0.22/M + output x 0.66/M + cacheRead x
  0.007/M; balance-check before live batches; record measured spend in
  results.md from session files.
- **Cache-hit doctrine** (019/020): byte-identical shared prefix from
  token 0; batch same-type work in one session; cache hits ~50x cheaper.
- **Freeze as a decision** (020): the owner can freeze a plan mid-course
  with a recorded freeze-decision appended to the plan doc; tiers 2-4
  deferred post-v1.
- **Subagent fleets** (019/020): budgeted context:fresh workers with
  hard caps; one writer per file; disjoint files for parallel runs.
- **Commit discipline** (018): every commit starts `Plan NNN:`; generic
  prefixes banned.

Web method update (2026-08-17, handoff prompts): handoffs must be
execution contracts — self-contained, concrete file paths + commands,
explicit out-of-scope, and an ending that names the next concrete step.
A vague "pick up from here" invites wandering; a prompt ending in exact
commands creates momentum.

Codified: the owner now receives handoff prompts shaped as contracts
(see the executor prompt for this plan). Proven by: this plan's own
executor prompt, which follows the contract shape.
