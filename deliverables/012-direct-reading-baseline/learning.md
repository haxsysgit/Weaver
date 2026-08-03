# Learning Note: Direct-reading baseline

## Gate status

**Active at the learning gate. Owner confirmation is required before
implementation.**

Plans 010 and 011 are accepted. The remaining gate is the owner's chapter
selection and question approval. That confirmation admits Plan 012
implementation; it does not accept the future implementation. The final owner
decision will still follow tests, inspection, and independent review.

## Tiny model

Weaver has never read a novel. Every plan so far built infrastructure.

Plan 012 is the first time a model receives chapter text and answers
comprehension questions. It sends identical chapter packets to both
`deepseek-v4-flash` and `deepseek-v4-pro`, asks the same questions, and
produces a structured comparison. The result is the baseline against which
every future approach (compiled memory, RAG, narrative threads, wiki) is
measured.

## The pieces

- `build_novel_packet` (`corpus/tools.py`, Plan 002): assembles chapters into
  a `NovelPacket` with metadata. Takes `novel_id` and an explicit
  `chapters: list[int]` (sorted, deduped, validated). This is the reading material.
- `ModelLayer.complete()` (`model_layer/layer.py`, Plan 003): sends a
  `ModelRequest` to a specific model and returns a `ModelResponse`. The
  experiment calls this once per model — no conversation, no turns, no
  tools in the request.
- `deepseek-v4-flash` and `deepseek-v4-pro` (`model_layer/deepseek.py`): the
  two admitted DeepSeek models. Both have 128K token context windows (verify
  actual limit before running). Both require `DEEPSEEK_KEY`.
- `FakeModelProvider` (`model_layer/fake.py:30-56`): pre-programmed responses
  for dry runs. The `--fake` flag scripts two models giving slightly different
  answers to the same questions.
- `experiment.py` (`src/weaver/experiment.py`): existing experiment framework
  with `model-smoke` and `provider-tool-contract`. Plan 012 adds
  `run_direct_reading` following the same pattern: an async function returning
  a `dict` with structured results, registered in the CLI experiment table.
- `receipts.py` (`src/weaver/receipts.py`): writes experiment results to
  owner-only receipt files. The direct-reading receipt must NOT contain
  chapter text — only answers, comparison metadata, and token counts.
- `docs/decisions/006-conversation-architecture.md:28-34`: the notebook is
  exact history. The reading experiment does not use the notebook — each
  model call is a standalone request with no conversation history. This is
  intentional: the baseline measures raw reading comprehension without
  conversation context.

## What I understood

1. The experiment is NOT a conversation. It sends one `ModelRequest` per
   model with the system prompt, chapter packet, and questions as the user
   message. No `run_turn()`, no `SessionWeave`, no tool dispatch. This is
   the simplest possible reading test.
2. Chapter selection: the plan does NOT specify which chapters. The learning
   gate must identify a self-contained arc (10--30 chapters) that a reader
   can follow without prior knowledge. The chapters must fit in one context
   window (verify token count before running). The owner decides the
   selection before implementation.
3. Question design: 5--8 questions covering literal recall ("What happened
   when X arrived at Y?"), character state ("What did character Z believe at
   this point?"), causal reasoning ("Why did event A cause event B?"), and
   thematic interpretation ("What does this arc suggest about the novel's
   larger themes?"). Answers must cite specific passages.
4. Blind protocol: each model receives the same system prompt, chapter text,
   and questions in separate API calls. Neither model sees the other's
   answer. The expected answer is NOT included in the prompt. The comparison
   is done after both calls complete.
5. Comparison methodology: answers are compared on correctness (did the model
   state a fact that appears in the text?), completeness (did it cover the
   key points?), hallucination (did it invent a detail not in the text?),
   and citation accuracy (did the passages it cited actually say what it
   claims?). A structured matrix records agreement, disagreement, and partial
   matches.
6. Fake mode: `FakeModelProvider` is pre-loaded with two `ModelResponse`
   objects — one for Flash (gets 3/5 questions right), one for Pro (gets
   4/5 right, cites better). The `--fake` flag produces a realistic
   comparison without API credits.
7. Live mode: requires `DEEPSEEK_KEY`. Calls Flash then Pro sequentially
   (not parallel). Records the raw answer text, token counts, and the
   comparison matrix. Chapter text does NOT enter receipts or logs.
8. The experiment output is a `dict` with: `flash` and `pro` keys
   (each with `answer`, `token_count`, `stop_reason`), `comparison`
   (matrix of agreement/disagreement per question), and `experiment`
   metadata (chapter range, question count, timestamp).
9. No chapter text is stored in the experiment output. Only answer text,
   comparison, and metadata. The receipt file is written with owner-only
   permissions via `receipts.py`.
10. The experiment is registered as `"direct-reading"` in the CLI.
    `weaver experiment direct-reading --fake` runs the dry run.
    `weaver experiment direct-reading` runs the live comparison.

## Experiment flow

```text
weaver experiment direct-reading [--fake]
    |
    +--> corpus.build_novel_packet(novel_id, chapters=[...]) → packet
    +--> construct system prompt + chapters + questions
    |
    +--> Flash call:
    |       model_layer.complete(flash, request, cancel_event)
    |       → ModelResponse(assistant_message.content, stop_reason, usage)
    |
    +--> Pro call:
    |       model_layer.complete(pro, request, cancel_event)
    |       → ModelResponse(assistant_message.content, stop_reason, usage)
    |
    +--> parse answers → comparison matrix
    +--> write receipt (no chapter text) → return dict
```

## What this plan will prove

- The corpus → packet → model → answer pipeline works end-to-end.
- Two models reading identical text produce comparable answers.
- The comparison methodology distinguishes correct, incomplete, and
  hallucinated answers.
- Token counts are recorded for both models.
- Fake mode produces a realistic comparison without API credits.
- No chapter text leaks into receipts, logs, or committed files.

## What it will not prove

- Conversation-based reading (the model has one turn, no follow-up).
- Multi-packet reading across context windows.
- Compiled memory or retrieval-augmented reading.
- Statistical significance (one packet, two models, N=1).
- A specific model is "better" at reading — this is a baseline, not a
  benchmark.
- Any literary comprehension system is ready to ship.

## Confirmation record

- Owner choice: pending
- Date: pending
- Corrections or added constraints: pending

The learning gate requires the owner to select the chapter range and approve
the question set before implementation.
