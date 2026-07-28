# Decision — Experimental Foundation

## Status

**ACCEPTED BY THE OWNER — 2026-07-29**

Plan 001 is complete. This decision admits later planning work but does not
automatically admit any deferred architecture or private-source experiment.

## Evidence required before decision

- Owner-confirmed learning note.
- Owner-confirmed Firecrawl credential rotation.
- Deterministic verification results.
- Synthetic live smoke results from both exact DeepSeek models.
- Redacted receipt inspection.
- Architecture diagram inspection.
- Two independent Pro reviews and their repaired-candidate rechecks.

## Owner decision

Accepted on 2026-07-29.

The acceptance follows review of the learning note, architecture diagram,
deterministic and live results, review ledger, and the disclosed process
assumption that Codex built the initial candidate while DeepSeek V4 Flash
performed the single admitted repair pass.

## Accepted conclusions

- The repository boundary is safe enough for later bounded Weaver experiments.
- The thin asynchronous DeepSeek boundary is accepted as the Plan 001
  transport, with explicit timeouts and no automatic retries.
- Deterministic fake execution and explicit live execution are sufficiently
  separated.
- Local experiment receipts are complete, permission-safe, and redacted for
  the tested scope.
- Both exact DeepSeek V4 models completed their synthetic assignments.
- The repaired candidate passed 14 deterministic tests and both independent
  V4 Pro rechecks with no remaining finding.
- Deep Agents, LangGraph, and Pydantic AI remain future research candidates,
  not Plan 001 dependencies.

## Limits that remain

- Nothing in Plan 001 proves narrative understanding, retrieval quality,
  compiled-memory quality, conversation memory, or literary judgment.
- The live cache observation was a miss. Cache effectiveness remains
  unproven.
- Novel access remains forbidden until a later admitted plan defines a bounded
  private-source workflow.

## Checkpoints

1. `72f4ca8` — approved plan and safe baseline.
2. `a9972f2` — tested and independently reviewed implementation candidate.
3. Final decision checkpoint — recorded by the commit containing this file.
