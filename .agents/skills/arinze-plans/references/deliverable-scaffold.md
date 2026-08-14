# Deliverable Scaffold

Every numbered plan gets a deliverable directory:
`deliverables/{{NNN}}-{{slug}}/`. The scaffold script creates it with the
six files below.

## Files

| File | Purpose | Initial state |
| --- | --- | --- |
| `README.md` | File table with each file's current state | Current |
| `plan.md` | Pointer to the canonical plan doc | Current |
| `learning.md` | Owner-confirmed decisions + gate status | Unadmitted / Confirmed |
| `results.md` | Deterministic observations and commands | Not started |
| `review-ledger.md` | Independent findings, repairs, and rechecks | Not started |
| `decision.md` | Owner's final accept or reject record | Pending |

## Rules

- No private prose, chats, credentials, private receipts, generated
  knowledge, or raw model reasoning belongs here.
- The learning gate's confirmation is recorded in `learning.md` with the
  owner's words quoted.
- The final decision is recorded in `decision.md` with: status (Accepted
  or Rejected), date, and reason. The owner records it; no agent closes a
  plan without it.
- Checkers and validators are format gates, never content graders. A PASS
  proves the output is well-shaped, not that it is correct.

## README.md template

```markdown
# Plan {{NNN}}-{{slug}} deliverables

| File | Purpose | Current state |
| --- | --- | --- |
| `plan.md` | Pointer to the canonical implementation plan | Current |
| `learning.md` | Owner-confirmed decisions | Unadmitted |
| `results.md` | Deterministic observations and commands | Not started |
| `review-ledger.md` | Independent findings, repairs, and rechecks | Not started |
| `decision.md` | Owner's final accept or reject record | Pending |

No private prose, chats, credentials, private receipts, generated
knowledge, or raw model reasoning belongs here.
```
