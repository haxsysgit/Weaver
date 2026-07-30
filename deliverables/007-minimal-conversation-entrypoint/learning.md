# Learning Note: Open the first Weaver conversation

## Gate status

**Pending owner confirmation.**

Plan 007 starts only after Plans 002–006 are accepted.

## Tiny model

Right now Weaver has parts on a workbench:

- DeepSeek client;
- agent session;
- tool registry;
- library inspector;
- CLI.

Plan 007 connects those parts into one small working path. The goal is not a
beautiful assistant. The goal is one honest conversation where the model can
inspect library metadata and explain what it found.

## The one capability

The chat gets only:

```text
inspect_library("shadow-slave")
```

It does not get add, refresh, reading-packet, edition, web search, retrieval, or
memory.

The inspector returns counts, ranges, paths, hashes, and safe statuses. It does
not return chapter prose. It may update an owner-only manifest and receipt, but
it does not change novel files or call Firecrawl.

## What I understood

1. Plan 007 is a composition test. It proves the accepted runtime pieces work
   together.
2. The local conversation command is `weaver chat`. Direct maintenance commands
   are documented under `weaver library`, not the old technical parser name.
3. Fake and live modes are explicit and mutually exclusive.
4. One-shot `--message` mode exists for repeatable tests and evidence.
5. Interactive mode keeps short in-memory history until exit. It is not durable.
6. Live mode checks `DEEPSEEK_KEY` before creating a call. There is no fallback
   to fake mode or another model.
7. The model alias becomes explicit configuration instead of a `pro` literal
   hidden inside `run_turn()`.
8. The composition root creates the model, registry, local library service,
   prompt, policy, and session. The CLI only parses input and prints safe
   output.
9. Only `inspect_library` is registered. Mutating tools are absent, not merely
   hidden.
10. Library inspection uses `live_source=False`, so chat cannot call Firecrawl.
11. The system prompt tells Weaver it has metadata only and must not pretend it
    has read the novel.
12. Default tests use temporary synthetic library structure, not the real
    private library.
13. After tests pass, one explicit live message may inspect real library metadata
    through the admitted Plan 002 tool.
14. Public evidence records counts such as model steps and tool starts, not the
    full chat or raw tool result.
15. Plan 007 does not add durable events, context budgeting, retrieval, literary
    memory, streaming token UI, or a polished TUI.
16. LangGraph follows the accepted Plan 006 boundary. The proposed default is no
    LangGraph dependency in this minimal slice unless Plan 006 identifies a
    concrete outer-coordinator job.

## The full path

```text
terminal message
      |
      v
small CLI adapter
      |
      v
Weaver composition root
  model + prompt + read policy
      |
      v
AgentSession
      |
      v
custom model/tool loop
      |
      v
ToolRegistry
  inspect_library only
      |
      v
Internal library service
  metadata only
  no Firecrawl
      |
      v
linked tool result
      |
      v
final assistant text
```

## Normal use

Deterministic:

```text
weaver chat --fake --message "Inspect the Shadow Slave library."
```

Explicit live:

```text
weaver chat --live --model pro --message "Inspect the Shadow Slave library and report metadata only."
```

The live command is not run during planning.

## What success looks like

The fake model asks for `inspect_library`, receives metadata, and gives a final
answer. Tests prove `refresh_library` is not registered and no network path
exists.

The live model does the same with real library metadata. It must not claim it
read the chapter content.

## What failure still teaches us

- If the model never calls the tool, the prompt or tool description is weak.
- If the provider rejects the second request, Plan 005 did not cover the real
  case well enough.
- If private content appears, the library-to-agent boundary is wrong.
- If the session needs durable storage just to survive one short exchange, the
  runtime split is wrong.

Each failure gets recorded. No silent retries.

## What comes after

Only after Plan 007 is accepted should we plan:

1. durable turn events;
2. context-window measurement and budgeting;
3. resumable sessions;
4. then the direct-reading baseline.

This order gives those features real conversation data to work from.

## Confirmation record

- Owner choice: pending
- Date: pending
- Default model correction, if any: pending
- LangGraph correction, if any: pending
- Other constraints: pending

Confirming approves this exact minimal conversation boundary. It does not
accept the future implementation or authorize a live call by itself.
