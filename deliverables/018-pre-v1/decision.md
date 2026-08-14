# Owner Decision: Plan 018

## Status

**Accepted and closed 2026-08-14.**

## Final choice

**Accepted.** The plan delivered what it set out to: Plan 015 closed
with a scope cut, the repo cleaned of stale artifacts, docs audited and
standardized (README, architecture.md, CONTRIBUTING.md), the
chapter-links decision recorded, and the retrieval stack audited with no
change needed for v1. Independent review returned 10/10 PASS (501 tests
green, no private content in commits). README and docs were adjusted at
the owner's direction after review; the owner recorded additional
deletions of process docs and the audit prompt.

## Decisions recorded in this plan

1. **Plan 015 closed with a scope cut (2026-08-14):** the built agentic
   parts are accepted (spoiler judge, two-phase turn, preferences, spell
   surface); skills, task/prompt classification, and compaction are
   deferred after v1.
2. **Chapter references (2026-08-14):** no chapter-link engineering in
   the product. Weaver references the chapter number in answers and
   quotes the novel's prose in a `>` blockquote when asked; novel
   sources stay server-side and invisible. Frontend markdown already
   renders blockquotes; the system prompt now instructs the model to use
   them. (Removed from the consumer-facing direction doc by owner
   2026-08-14; recorded here instead.)
3. **Retrieval stack (2026-08-14):** no change needed for v1. Embedded
   Qdrant + fastembed/onnx stays; the quantized bge swap is an embedder
   change, not a store change. Risks (index shipping, rebuild-after-
   quantize, model download at first run) go to the v1 plan.

## Final choice

Awaiting owner: accept and close, or reject with reasons.
