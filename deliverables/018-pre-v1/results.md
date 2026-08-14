# Results: Plan 018 slice 5 — docs audit

Audit date: 2026-08-14. Every doc in `docs/`, `plans/`, and the repo root
was read and classified. Verdicts below; the owner reviewed the deletion
list in slice 3/4 (approved 2026-08-14).

## Verdicts

| Doc | Verdict | Why |
| --- | --- | --- |
| `docs/WEAVER_WEB_PRODUCT_DIRECTION.md` | **Keep** | Live product direction; the chapter-links rule lands here in slice 7 |
| `docs/reading-finders.md` | **Keep** | Locked capability requirement (owner 2026-08-07); AGENTS.md references it |
| `docs/decisions/006-conversation-architecture.md` | **Keep** | Accepted decision record, live architecture reference |
| `docs/process/agent-primitives.md` | **Keep** | Standing map, observation record |
| `docs/process/checkpoints.md` | **Keep** | Standing ritual definition |
| `docs/process/checkpoint-001-010.md` | **Keep** | Historical checkpoint record |
| `docs/process/test-audit-001-010.md` | **Keep** | Historical audit record |
| `docs/process/subagent-fleet.md` | **Keep** | Standing workflow, referenced by AGENTS.md |
| `docs/process/tdd-workflow.md` | **Keep** | Standing workflow, referenced by AGENTS.md |
| `docs/learning-lab/` (README + 7 modules + evidence) | **Keep** | Teaching series, verifiable offline captures |
| `README.md` | **Refresh** (slice 6) | Personality is good; claims are stale (reads 3148 now, not "still reading 3000+"; the "series of experiments" layer table is out of date; mentions deleted things) |
| `vision.md` | **Refresh** (slice 6) | Vision is stable; "Current Project Reality" section references deleted `shadow_friend.md` and chunking experiments; "system succeeds" framing predates the product pivot |
| `plans/README.md` | **Refresh** (slice 6) | Execution-order list stale: still says 011-015 are upcoming; they are closed |
| `plans/001..018` | **Keep** | Plan records, historical evidence (001 mentions deleted shadow_friend.md/chunking_practice.py as history — correct to leave) |
| `plans/pi-langgraph-audit-prompt.md` | **Flag** | 20.8K one-off audit prompt, not a plan; its audit report was deleted in slice 4. Candidate deletion — owner decision |

## Deleted in slice 4 (owner-approved)

`docs/WEAVER_TUI_RESEARCH.md`, `docs/WEAVER_CREWAI_PATTERNS.md`,
`docs/WEAVER_CODEX_HERMES_CONVERSATION_COMPARISON.md`,
`docs/WEAVER_PI_LANGGRAPH_COMPARISON.md`, `advisor-plans/` (whole dir).

## Stale references fixed or noted

- `vision.md`: "Current Project Reality" references deleted
  `shadow_friend.md` and the chunking experiment — rewritten in slice 6.
- `AGENTS.md`: removed the "do not treat shadow_friend.md/chunking_practice.py
  as current architecture" line (both files are gone).
- Closed-plan docs keep historical mentions of deleted names — that is
  correct, they are records.

## Findings

1. `vite.config.ts` was deleted in the working tree before this plan
   (uncommitted); `npm run build` failed. Restored from HEAD in slice 4.
2. `docs/decisions/006-conversation-architecture.md` was deleted in the
   working tree before this plan (uncommitted); restored in slice 4.
3. `LICENSE` (MIT) is untracked — committed in slice 6.
4. `plans/pi-langgraph-audit-prompt.md` is the last orphaned artifact:
   a one-off audit prompt whose report no longer exists. Awaiting owner
   decision (slice 6 commit).
