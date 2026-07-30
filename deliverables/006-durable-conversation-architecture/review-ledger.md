# Review Ledger: Durable conversation architecture

## Review 1: Architecture and diagram correctness

- Reviewer: independent review via subagent, 2026-07-30
- Scope: decision doc, diagram, rubric, plan, comparison docs
- Verdict: **PASS** — zero blockers

Findings:

1. All three owner corrections faithfully reflected in decision doc.
2. Identity hierarchy, canonical storage, recovery semantics, context assembly,
   memory policy, optional adapter constraints, and future interface names all
   trace cleanly to comparison documents.
3. Diagram accurately maps to decision doc: every box, swimlane, and cross-lane
   arrow corresponds to a named decision element.
4. No stale plan names or deliverable paths found.
5. No runtime code changes described.
6. Note: diagram MemoryChange box included "pin" operation not in decision doc
   (fixed in repair pass).
7. Note: "notebook and working brief" metaphor is decision-only pedagogical
   framing; consistent with architecture, not a traceableness issue.

## Review 2: Privacy, conversation behavior, and scope

- Reviewer: independent review via subagent, 2026-07-30
- Scope: decision doc, diagram, rubric, results, comparison docs, git diff
- Verdict: **PASS** — zero blockers

Findings:

1. Privacy: tool schemas forbidden from accepting credentials; raw reasoning
   stays ephemeral; diagram shows no private data; `.pi-subagents/` in
   `.gitignore` with no credential-shaped values in residue.
2. Conversation behavior: all ten scenarios hold up. One gap found: crash
   during tool execution not explicitly traced as a named scenario (fixed in
   repair pass, decision doc now includes "Crash during tool execution"
   section).
3. Scope: `git diff HEAD -- src/ tests/` and `git diff HEAD -- '*.py'` both
   empty. Zero Python, test, dependency, or lockfile changes. Plan 006 is
   documentation-only as required.
4. Verification floor: tests untriable due to pre-existing environment
   limitation (system Python lacks openai module, package not editable-installed);
   lint passes; no new dependencies; `.pi-subagents/` clean.

## Repair pass

- Applied 2026-07-30
- Removed "pin" from MemoryChange box in diagram.
- Added "Crash during tool execution" scenario trace to the decision document.
- Updated results.md with diagram, review, and repair evidence.
- Verification floor re-run: 156 tests pass, lint clean, 64 packages compatible.

## Recheck 1

- Original reviewer: findings addressed. No new issues.
- Verdict: **CONFIRMED**

## Recheck 2

- Original reviewer: findings addressed. No new issues.
- Verdict: **CONFIRMED**

## Final state

Both reviews pass with zero blockers. Repair complete. Diagram inspected.
Verification floor clean. Awaiting final owner decision.
