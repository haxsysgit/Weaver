# Learning Note: Plan 016

## Gate status

**Confirmed by owner 2026-08-10. Admitted retrospectively and closed the
same day.**

Plan 016 was drafted 2026-08-04 as a learning-gate plan. Before its gate
was ever opened, the owner directed (2026-08-09) building the novel
freshness automation as a `weaver refresh`-style command — preview what is
missing, fetch with Plan 002 validation, confirm before writing, runnable
from cron/reminder. That command shipped and ran live (chapters 3129-3148
fetched, chapter 2843 repaired). On 2026-08-10 the owner asked to verify
Plan 016 properly, confirm it was fully implemented, and close it; the
verification audit and the owner's close directive are the admission and
acceptance record.

## Locked decisions

1. **Refresh is machinery, not a model tool.** The LLM never triggers,
   previews, or confirms a library update (owner directive 2026-08-04:
   the LLM does not manage or update the library). No refresh tool exists
   in any model tool registry; ordinary conversation can never trigger a
   refresh.
2. **Preview first, explicit owner confirmation, no auto-update.** In the
   CLI shape the gate is: `weaver refresh` (preview, no network, no shelf
   writes) then `weaver refresh --apply` (the owner's explicit flag is
   the confirmation). The draft's web-UI preview-token mechanism was
   superseded by the owner's 2026-08-09 directive.
3. **Effect classification unchanged:** network `EXTERNAL_EFFECT`,
   writes `INTERNAL_WRITE`, previews read-only. The refresh is a CLI
   command, so classification applies to the underlying corpus tools.
4. **Durable records carry what changed, never novel prose or fetched
   raw text.** Receipts store per-chapter metadata (numbers, hashes,
   counts, errors) only, with owner-only permissions.
5. **Interrupt safety:** every written chapter is individually validated
   and atomically committed (Plan 002 rules); an interrupted run never
   leaves a torn file and the next run resumes from the inventory.

## Confirmation record

- Owner choice: close Plan 016 after verification (2026-08-10)
- Date: 2026-08-10
- Corrections or added constraints: the owner's 2026-08-09 CLI directive
  superseded the draft's web-UI product shape; corrections recorded in
  the plan doc's checkpoint-audit section.
