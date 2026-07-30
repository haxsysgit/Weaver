# Learning Note: Settle the LangGraph boundary

## Gate status

**Pending owner confirmation.**

Plan 006 is a decision-and-docs slice. It starts only after Plan 005 is
accepted. It does not install LangGraph or change runtime code.

## Tiny model

Weaver is the actual agent. LangGraph is a possible traffic controller.

The traffic controller may decide which conversation stage runs next. It does
not own the vehicles, the roads, the cargo, or the rules for handling private
books.

## The current contradiction

Plan 002 says LangGraph may later power the conversation loop and nothing else.

The Pi/LangGraph comparison says the live conversation loop should stay plain
Python, while LangGraph may help selected background workflows.

A future agent cannot follow both without guessing.

## Proposed interpretation

There are two layers hiding inside the phrase "conversation loop":

1. **Inner model/tool loop:** send messages to the model, collect tool calls,
   run allowed tools, return linked results, and ask the model again. Weaver
   keeps this as readable plain Python.
2. **Outer conversation coordinator:** accept user turns, choose when to run
   the inner loop, pause, resume, and later connect persistence or approvals.
   LangGraph may sit here if a real requirement justifies it.

So LangGraph is allowed only around conversation coordination. It is not
required merely because Weaver is an agent.

## What I understood

1. Weaver remains a custom agent.
2. Weaver owns `ModelClient`, canonical messages, `ToolRegistry`, effect and
   cancellation policy, library services, future memory schemas, receipts, and
   UI-facing events.
3. The inner model/tool loop fixed in Plans 003–005 stays plain Python.
4. LangGraph may coordinate the outer conversation flow only.
5. Plan 007 should not add LangGraph unless Plan 006 records a concrete job it
   must perform beyond wrapping one function.
6. No LangGraph or LangChain object becomes canonical novel memory,
   conversation truth, tool input, or public UI data.
7. The Plan 002 library pipeline stays fully independent from LangGraph.
8. A tool remains a normal typed Python function registered in Weaver.
9. Future web search, library updates, and memory tools follow the same Weaver
   registry rules.
10. A LangGraph checkpointer, if used later, stores execution progress only. It
    does not become literary memory.
11. Background workflows are outside this decision unless the owner later
    admits a plan that expands the boundary.
12. The current `langchain` dependencies do not prove a LangGraph decision.
    This plan changes no packages.

## Boundary picture

```text
Terminal or future web UI
          |
          v
Outer conversation coordinator
  plain Python now
  LangGraph allowed here if justified
          |
          v
Weaver ConversationRunner
  model -> tool -> model
          |
          +---- Weaver ToolRegistry
          +---- Weaver library services
          +---- future Weaver memory
          +---- Weaver receipts and events
```

LangGraph does not wrap the bottom four boxes.

## Decisions the owner is confirming

1. Keep the inner tool loop plain Python.
2. Treat LangGraph as optional, not mandatory for Plan 007.
3. Allow it only as an outer conversation coordinator.
4. Keep library, memory, tools, provider types, and UI contracts Weaver-owned.
5. Require a new admitted decision before LangGraph is used for background
   pipelines.
6. Do not install it until a plan names the exact missing behavior it solves.

If any line above does not match your intended architecture, correct it before
confirming. Plan 007 depends on this answer.

## What Plan 006 will change

- write one canonical architecture decision;
- reconcile Plan 002 and the Pi/LangGraph comparison;
- draw one boundary diagram;
- ask two fresh reviewers to explain the result;
- record the owner decision.

## What it will not change

- Python source;
- dependencies;
- agent behavior;
- private library or generated state.

## Confirmation record

- Owner choice: pending
- Date: pending
- Corrections or added constraints: pending

Confirming approves the interpretation to be recorded. The final Plan 006
decision still comes after reconciliation and review.
