# Learning Note: Preserve tool protocol and enforce active capabilities

## Gate status

**Pending owner confirmation.**

No runtime source has been changed for Plan 003. Confirming this note admits
Plan 003 only after Plan 002 has a recorded final decision.

## Tiny model

A tool call is like a claim ticket at a repair shop.

The model says, "Use tool X with these arguments," and gives the request an ID.
The tool result must come back with the same ID. Otherwise the next model call
cannot prove which result belongs to which request.

The active tool list is the locked cabinet. Registering a tool means Weaver
knows it exists. Activating it means this conversation is allowed to reach it.
Both rules matter.

## What is broken now

The current loop correctly creates an assistant tool-call record in a Python
dictionary. Before the next DeepSeek request, it converts that record into a
smaller `Message` and copies only the role and text. The call ID, tool name,
and arguments disappear.

There is a second hole. The active list controls the schemas shown to the
model, but the final registry dispatch accepts any registered name. A provider
response can ask for a registered tool that was never active.

The fake tests miss the first bug because they receive Weaver's internal
request object before the real SDK payload is checked.

## What I understood

1. Plan 003 fixes the inner tool protocol. It does not build chat, memory,
   retrieval, or LangGraph.
2. Weaver will use its own provider-neutral message types. OpenAI or DeepSeek
   SDK objects will not become canonical conversation records.
3. One assistant model step may contain several tool calls. They stay grouped
   under one assistant message.
4. Every tool result must keep the exact call ID of the assistant request it
   answers.
5. Raw argument JSON is preserved for inspection. Weaver may validate it, but
   it does not silently repair or rewrite the provider's string.
6. `active_tools` is checked twice: once when schemas are shown and again
   immediately before dispatch.
7. A registered but inactive tool returns `inactive_tool`. Its handler never
   starts.
8. An unknown tool remains a different error from an inactive tool.
9. A successful empty object stays successful. `{}` must not turn into a tool
   failure because it is falsey in Python.
10. A response cut off by the provider's length limit is not a completed
    answer. Partial tool arguments never execute.
11. Tests cover both the immediate second model request and later history
    replay, because a correct first turn can still be corrupted on the next
    user message.
12. This plan uses fake and local deterministic tests only. The actual SDK
    payload and live provider check belong to Plan 005.

## Proposed target shape

```text
AssistantMessage
  content: optional text
  tool_calls:
    - id
    - name
    - raw arguments
        |
        v
ToolResultMessage
  tool_call_id: same id
  result or safe error
        |
        v
Next model request keeps both records
```

The registry path becomes:

```text
registered? -> active? -> effect allowed? -> arguments valid? -> run handler
```

Plan 003 owns the first two checks. Plan 004 adds the effect and cancellation
rules.

## Why this comes first

Every interesting Weaver capability will eventually return through this
protocol: library inspection, web search, memory lookup, updates, and later
reader tools.

If the ID link or capability boundary is wrong, adding more tools just gives
the bug more power.

## What this plan will prove

- a full fake model, tool, model round trip has the right message shape;
- multiple calls stay grouped;
- saved history replays correctly;
- inactive tools cannot run;
- partial tool calls cannot run;
- empty results stay valid;
- no private library data or network is needed.

## What it will not prove

- that DeepSeek accepts the real HTTP payload;
- that a running tool stops safely;
- that write tools have owner approval;
- that Weaver has a usable conversation entry point.

Those are Plans 004, 005, and 007.

## Confirmation record

- Owner choice: pending
- Date: pending
- Corrections or added constraints: pending

Confirming means: "This is what Plan 003 should test and build." It does not
accept the future implementation.
