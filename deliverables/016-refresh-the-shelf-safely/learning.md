# Learning Note: Plan 016

## Gate status

**Unadmitted. Owner confirmation required before implementation.**

Drafted 2026-08-04. The owner directed drawing up plans 014-016 after the
external agent's review; this plan's learning gate opens when its
predecessor (Plan 014) is accepted.

## Locked decisions

1. **Refresh is machinery, not a model tool.** The LLM never triggers,
   previews, or confirms a library update (owner directive 2026-08-04:
   the LLM does not manage or update the library). The update flow is a
   UI operation with a human gate, calling the Plan 002 internals
   directly.
2. **Preview first, explicit owner confirmation, no auto-update.**
3. **Effect classification unchanged:** network `EXTERNAL_EFFECT`,
   writes `INTERNAL_WRITE`, previews read-only.
4. **Durable records carry what changed, never novel prose or fetched
   raw text.**

## Confirmation record

- Owner choice: pending
- Date: pending
- Corrections or added constraints: pending
