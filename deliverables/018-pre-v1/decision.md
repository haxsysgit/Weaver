# Owner Decision: Plan 018

## Status

**Pending owner decision** (plan closing).

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
