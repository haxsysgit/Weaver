# Learning Note: Plan 018

## Gate status

**Drafted 2026-08-14. Awaiting owner admission.**

## Locked decisions (owner-confirmed 2026-08-14)

1. Plan 018 is the pre-v1 plan: close Plan 015, repo cleanup, docs
   audit + standard docs (README, architecture, CONTRIBUTING.md),
   chapter-links decision, retrieval stack audit. Then the v1 plan
   (numberless: deployment, CI/CD).
2. No chapter links in the product. Weaver references the chapter
   number and quotes prose in a `>` blockquote when asked. Novel
   sources stay server-side. The frontend already renders blockquotes;
   slice 7 adds the missing prompt line.
3. v1 stays BYOK; friends can get DeepSeek keys. Pooled keys deferred
   unless real external usage appears.
4. The vector db item is an audit, not a swap. Plan 014 already landed
   embedded Qdrant; the TODO_future "numpy/onnx index" line is stale.
5. Skills, task/prompt classification, and compaction leave Plan 015's
   scope and stay deferred after v1.
