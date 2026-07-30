# Plan 007: Open the first Weaver conversation

> **Executor instructions:** Execute only after Plans 003–006 are accepted and
> Plan 002's library inspection tool remains available. Build the smallest local
> conversation that proves the runtime can call one safe tool. Do not turn this
> into the reader-memory or UI plan.

## Status

- **State:** Draft; owner confirmation of `learning.md` pending
- **Priority:** P1
- **Effort:** M
- **Risk:** Medium
- **Depends on:** Plans 002–006 accepted
- **Category:** Product slice and integration
- **Planned at:** commit `96d0729`, dirty working-tree snapshot, 2026-07-30
- **Learning gate:** `deliverables/007-minimal-conversation-entrypoint/learning.md`

## Goal

Add one local conversational entry point that wires:

- an explicit fake or DeepSeek model;
- the accepted custom session and turn runtime;
- an explicit `ToolRegistry`;
- only the metadata-only Shadow Slave library inspection capability;
- a small Weaver system prompt;
- safe terminal output.

This is the first real answer to: "Can Weaver hold a short conversation, decide
to inspect its private library, use the tool, and explain the metadata result?"

## Why this matters

The repo has a model adapter, session prototype, registry, and library tools, but
no composition root joins them. The CLI calls internal library functions
directly, so it does not prove agent behavior.

This slice proves the parts fit before retrieval, literary memory, durable
events, context budgeting, or a polished UI add more moving pieces.

## Current state

- `src/weaver/cli.py` supports doctor, model smoke, and direct library commands
  under the current technical `corpus` parser name.
  It has no chat command.
- `src/weaver/agent/session.py` holds in-memory history and runs one turn.
- `src/weaver/agent/turn.py` currently hard-codes the `pro` alias and 4,096
  output tokens. Plans 003–004 may change its signature.
- `src/weaver/corpus/tools.py:149-208` registers all five library capabilities.
  The minimal chat must not register fetch, update, packet, or export.
- `src/weaver/corpus/service.py:153-175` inspects library metadata and writes an
  owner-only manifest and receipt. It does not return chapter prose.
- `src/weaver/corpus/tools.py:34-49` can create a local service without a live
  source.
- `src/weaver/fake.py` supports scripted stream events for deterministic tests.
- `pyproject.toml:20-21` already exposes the `weaver` command.

Plan 006 decides whether any outer LangGraph adapter is required. The proposed
default is the accepted custom Python session with no graph dependency in this
minimal slice.

## Product behavior

### CLI

Add:

```text
weaver chat --fake
weaver chat --live
weaver chat --fake --message "Inspect the Shadow Slave library."
weaver chat --live --model pro
```

Rules:

- fake and live are mutually exclusive and required;
- live requires `DEEPSEEK_KEY` before creating the client;
- there is no fallback between modes or models;
- `--message` runs one message and exits, which gives tests a stable entry;
- without `--message`, read terminal lines until `/exit` or EOF;
- blank lines do not start a turn;
- `Ctrl+C` requests session cancellation and exits with a clear safe message;
- only final assistant text and safe failures print to the terminal;
- raw tool JSON, provider errors, reasoning, credentials, and novel prose do
  not print.
- documented direct library commands use `weaver library`, not
  `weaver corpus`;
- if the old parser name must remain for compatibility, keep it undocumented
  and print one migration warning.

### Tool surface

Register only the model-visible tool `inspect_library`.

Implement it as a thin agent-facing adapter over the existing internal
`CorpusService.inspect_novel_corpus` method. The model and user must not see the
technical internal name.

Do not register four dangerous tools and rely only on `active_tools` to hide
them. Add a narrow registration function or a name-filtered registration API
whose default cannot accidentally expose all tools.

For this plan, "read" means it does not change novel files or outside systems.
Owner-only manifest and receipt writes are operational metadata. Record this
meaning beside the effect classification.

The service must use `live_source=False`. Library inspection must never call
Firecrawl.

Use this naming family for future model-visible tools and documented commands:

```text
inspect_library
add_chapters
refresh_library
prepare_reading_packet
create_edition
```

### System prompt

Create one versioned prompt in source. It should tell Weaver:

- it is testing a bounded library conversation;
- it may call only the listed tool;
- inspection returns metadata, not book content;
- it must not claim to have read chapter prose;
- it must state uncertainty when metadata cannot answer;
- it must not ask for or reveal credentials, raw paths outside safe tool
  output, or private receipts;
- it must not imply that fetch, update, retrieval, or literary memory exists.

Keep the prompt short enough to inspect in one screen.

### Model choice

Make the model alias an explicit session or runner configuration instead of a
literal inside `run_turn()`. CLI accepts only aliases from
`config.MODEL_ALIASES`. Default to `pro` if the owner confirms that choice in
the learning gate.

Keep the output-token limit named and explicit.

### LangGraph boundary

Follow the accepted Plan 006 decision.

If Plan 006 says LangGraph is conditional and no concrete Plan 007 need exists,
do not install it.

If the owner changes that decision and requires an outer graph here, revise
this plan before execution. Do not improvise a one-node graph during the build.

## Scope

### In scope

- `src/weaver/agent/app.py` (new composition root)
- `src/weaver/agent/prompts.py` (new short versioned prompt)
- `src/weaver/agent/session.py`
- `src/weaver/agent/turn.py`, only for explicit model configuration
- `src/weaver/corpus/tools.py`, only for narrow inspection registration and
  correct effect metadata
- `src/weaver/fake.py`, only for a useful deterministic chat script
- `src/weaver/cli.py`
- `src/weaver/__init__.py` or `src/weaver/agent/__init__.py`, only for public
  exports needed by the entry point
- `tests/test_chat.py` (new)
- `tests/test_cli.py`
- `tests/test_corpus_outputs_and_agent.py`, only for narrow registration
  coverage
- Plan 007 deliverables and `plans/README.md`

### Out of scope

- add, refresh, reading-packet, or edition access from chat;
- Firecrawl and general web search;
- opening or returning novel prose;
- literary questions, retrieval, embeddings, or memory;
- durable sessions, event logs, replay, or context compaction;
- approval UI;
- streaming terminal token deltas;
- polished TUI or web UI;
- parallel tools;
- background jobs;
- silent retry or provider fallback.

## Commands

| Purpose | Command | Expected result |
| --- | --- | --- |
| Focused tests | `uv run pytest -q tests/test_chat.py tests/test_cli.py tests/test_corpus_outputs_and_agent.py` | All focused tests pass |
| Full tests | `uv run pytest -q` | All tests pass |
| Lint | `uv run ruff check src/weaver tests` | Exit 0 |
| Package check | `uv pip check` | All installed packages compatible |
| Fake use | `uv run weaver chat --fake --message "Inspect the Shadow Slave library."` | Safe final answer, no network |
| Missing-key check | `env -u DEEPSEEK_KEY uv run weaver chat --live --message "Hello"` | Exit 2, no model call |
| Explicit live use | `uv run weaver chat --live --model pro --message "Inspect the Shadow Slave library and report metadata only."` | One final answer or one recorded safe provider failure |

The live command runs only after deterministic checks and explicit live
admission.

## Steps

### Step 1: Write integration tests first

Test:

- fake one-shot text conversation;
- fake model calls `inspect_library`, receives metadata, and gives a final
  answer;
- only inspection is registered and active;
- provider-requested `refresh_library` and the internal
  `update_novel_corpus` name cannot execute;
- service construction uses `live_source=False`;
- output contains no tool JSON, raw reasoning, credential, or synthetic chapter
  prose;
- missing live credential fails before client or receipt creation;
- model alias reaches `ModelRequest`;
- two interactive messages share in-memory history;
- `/exit`, EOF, blank input, and `KeyboardInterrupt` settle cleanly.

Use temporary project and state roots. Do not inspect the real library in the
default test suite.

**Verify:** focused tests fail for the missing entry point.

### Step 2: Add narrow library inspection registration

Refactor the internal definition table only enough to register one named
inspection tool without registering the other four.

Keep all existing Plan 002 registration behavior and tests passing. Mark
inspection as `READ` under the Plan 004 definition because it does not modify
novel or outside state. Document the owner-only manifest and receipt write.

**Verify:** registry tests prove exactly one tool is present in the chat
composition.

### Step 3: Build the composition root

Create a function that accepts explicit dependencies for tests and a separate
environment builder for CLI use.

The composition root should:

1. choose fake or DeepSeek explicitly;
2. create a registry;
3. create the local library service with `live_source=False`;
4. register inspection only;
5. create `AgentSession` with the prompt, model alias, read-only policy, and
   active inspection name.

Keep environment reading out of the session and turn modules.

**Verify:** composition tests pass with injected fake dependencies.

### Step 4: Add the prompt and model configuration

Move the hard-coded model alias out of `run_turn()`. Pass model alias and token
limit through named configuration.

Add the short prompt and a prompt version constant. Do not include novel
content.

**Verify:** request-capture tests assert the chosen alias, prompt, and only one
tool schema.

### Step 5: Add one-shot and interactive CLI paths

Keep parsing, composition, and terminal presentation separate. The CLI should
not contain tool logic or model-loop logic.

Ensure `KeyboardInterrupt` calls `session.cancel()` before returning. Do not
claim cancellation can undo a completed effect.

**Verify:** CLI tests and fake use command pass.

### Step 6: Run deterministic checks and inspect privacy

Run focused tests, full tests, lint, and package checks. Scan tracked changes
and deliverables for:

- credential values;
- chapter prose or synthetic markers that resemble real prose;
- raw reasoning fields;
- private receipt content.

**Verify:** scans are clean.

### Step 7: Run the admitted live conversation

Use one explicit live one-shot message asking for library metadata only. This
may run the admitted Plan 002 inspection tool against the private library, but
must not open or send chapter prose and must not call Firecrawl.

Record:

- selected model and provider;
- turn exit reason;
- model-step and tool-start counts;
- tool name;
- metadata-only outcome;
- timing and usage if available;
- safe failure category if it fails.

Do not copy the full chat or private receipt into public results.

### Step 8: Inspect, review, and decide

Inspect the live output for false claims about reading ability. Freeze the
candidate and run two fresh reviews:

1. runtime, tool boundary, and privacy;
2. tests, CLI behavior, and evidence.

Apply one accepted repair pass, recheck, then stop for the owner decision.

## Test plan

The main integration test must prove the complete fake path:

```text
CLI message
  -> AgentSession
  -> DeepSeek-shaped fake tool call
  -> registered inspection handler
  -> metadata tool result
  -> final assistant answer
```

It must also prove that update is absent, not merely hidden.

No deterministic test may use the real library, model API, Firecrawl, or a
credential.

## Independent review

1. A runtime reviewer checks composition, active-tool enforcement, read-only
   policy, cancellation behavior, and the accepted Plan 006 boundary.
2. A test and privacy reviewer checks fake/live separation, CLI failure paths,
   library isolation, and public evidence.
3. Record every accepted and rejected finding.
4. Apply one repair pass.
5. Both reviewers recheck the same repaired candidate.

## Done criteria

- [ ] The owner confirmed Plan 007 `learning.md`.
- [ ] Plans 002–006 are accepted.
- [ ] `weaver chat` has explicit fake and live modes.
- [ ] Only `inspect_library` is registered and active.
- [ ] Chat inspection cannot call Firecrawl or mutate novel files.
- [ ] Model alias and token limit are explicit configuration.
- [ ] Fake end-to-end conversation passes.
- [ ] Missing live credentials fail before a call or receipt.
- [ ] Deterministic tests, lint, and package checks pass.
- [ ] One explicit live metadata conversation is recorded.
- [ ] No prose, credentials, chats, private receipts, or raw reasoning are
      tracked.
- [ ] Two reviews have no open blocker.
- [ ] The owner recorded Plan 007's final decision.

## STOP conditions

Stop and report if:

- any dependency plan is not accepted;
- Plan 006 leaves the conversation coordinator ambiguous;
- inspection cannot be separated from library mutation or Firecrawl;
- chat needs fetch, update, packet, export, retrieval, or memory to appear
  useful;
- the fake path cannot prove a complete tool round trip;
- a live call is requested before deterministic gates pass;
- live output includes chapter prose or raw reasoning;
- adding the entry point requires durable storage or a polished UI;
- a private library file would be modified outside Plan 002 tools.

## Maintenance notes

Plan 007 is a proof of composition. Keep it small.

The next runtime slice may add durable turn events and context budgeting. That
later plan must use observed Plan 007 history growth, usage, and failure data
instead of guessing its policy now.
