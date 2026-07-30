# Results: Cancellation and side effects

## Status

Implementation and the one admitted repair pass are complete. Both final
reviewer rechecks passed with no open blocker. The final owner decision remains
pending.

## Hypothesis

An explicit read-default policy plus cooperative task cancellation can stop
unapproved effects and settle running async tools without detached work.

## Observations

1. `ToolExecutionPolicy.read_only()` admits `READ`.
2. `ToolExecutionPolicy.maintenance()` admits `READ` and `INTERNAL_WRITE` for
   the full session.
3. Policy construction rejects `EXTERNAL_EFFECT`.
4. Every `ToolDefinition` must state its effect class.
5. Dispatch checks registration, activity, effect permission, JSON syntax,
   object shape, and cancellation before starting a handler.
6. `ToolResult.started` separates dispatch attempts from handlers that began.
7. A running handler and the cancellation waiter are named tasks.
8. If completion and cancellation are observable together, the completed
   handler result wins.
9. If cancellation wins, dispatch cancels the handler and waits for cleanup.
   A handler that catches cancellation and returns still settles as cancelled.
10. No retry occurs, including when `retry_safe=True`.
11. Handlers receive the real session, turn, and call IDs.
12. After cancellation, later calls in the grouped assistant batch receive
    linked cancelled results without starting, and no later model request runs.

## Confirmed baseline

| Command | Exit | Observation |
| --- | ---: | --- |
| `uv run pytest -q tests/test_agent_turn.py` | 0 | 38 passed in 1.10s |
| `uv run pytest -q` | 0 | 116 passed in 2.96s |
| `uv run ruff check src/weaver/agent tests/test_agent_turn.py` | 0 | All checks passed |
| `uv pip check` | 0 | 64 packages compatible |
| `git diff --check` | 2 | Pre-existing `README.md:27` trailing space |

The modified `README.md` and untracked `tempplan.md` are owner-owned. Their
hashes are recorded in the canonical plan. Both remain untouched and excluded
from Plan 004 commits.

## Red-stage and intermediate failures

| Stage | Exit | Observation |
| --- | ---: | --- |
| Policy tests before implementation | 2 | Collection failed because `ToolExecutionPolicy` did not exist |
| First running-cancellation test | terminated | The old registry kept awaiting the handler after cancellation, so the event-driven test hung |
| Execution-evidence tests before session ID wiring | 1 | One handler received an empty session ID and direct `run_turn()` rejected the new argument |
| Whole-tree whitespace check | 2 | Pre-existing `README.md:27` trailing space |

The hung red test process was stopped. It made no network request and left no
runtime change behind.

## Final verification record

| Command | Exit | Result |
| --- | ---: | --- |
| `uv run pytest -q tests/test_tool_execution.py tests/test_agent_turn.py tests/test_corpus_outputs_and_agent.py` | 0 | 71 passed in 2.22s |
| `uv run pytest -q` | 0 | 142 passed in 3.05s |
| Planned scoped `uv run ruff check ...` | 0 | All checks passed |
| `uv pip check` | 0 | 64 packages compatible |
| Candidate-range whitespace scan from `b101737` | 0 | No whitespace errors outside owner-owned paths |
| Whole-tree `git diff --check` | 2 | Only the pre-existing `README.md:27` trailing space |
| Changed-path search for `novels/` | 0 | No changed path |
| Arbitrary-sleep search in focused tests | 1 | No matches, expected exit 1 |

The tests are deterministic and offline. No live model or Firecrawl request
ran.

## Cancellation limit

Cancellation is cooperative. Plan 004 proves that awaited async handlers
receive task cancellation and settle before the turn returns. It does not stop
blocking synchronous code, kill a worker, reverse a completed write, or undo
an outside action.

This is why outside actions stay blocked in every Plan 004 policy.

## Architecture evidence

The deliverable set includes:

- `architecture.drawio`, the editable source;
- `architecture.svg`, the matching rendered preview.

Diagram checks:

| Command or inspection | Exit | Result |
| --- | ---: | --- |
| `drawio --version` | 127 | Native exporter is not installed |
| Draw.io structural validator | 0 | 0 errors and 0 warnings |
| XML and SVG parse | 0 | 38 cells, 21 vertices, 15 edges, no missing edge geometry |
| ImageMagick inspection render | 0 | Capped at 1800 by 960 |
| First visual inspection | N/A | Found the completed-result route crossing the cancellation box |
| Second visual inspection | N/A | Route corrected; labels, groups, and paths are readable |

No network install was attempted. The editable source and matching SVG use the
documented exporter-missing fallback.

```text
36f0ccd020090481c36c78a33e6174b24aebaf184c580aed229e243ccfb89430  architecture.drawio
351aee962ae90b1a88fe724b9b81647344d787496274b1d2492425da322b7701  architecture.svg
```

## Privacy and scope inspection

- No tracked file under `novels/` changed.
- No private novel file was opened.
- No private-library algorithm changed.
- No credential-shaped addition or raw reasoning text was found.
- Operational evidence contains IDs and safe error categories, not tool
  payload content.
- `README.md` and `tempplan.md` retain their recorded hashes.

## Runtime and test hashes

```text
542b1ba4a249012e0f0eee1d22ca47638b5ee84dff46354afb291a960e49bc7d  src/weaver/agent/__init__.py
1e83f56382d8d65706e21c0036cee7681e09df64664eed955b3f840a6cdb0e7e  src/weaver/agent/errors.py
c5ac77fdcf535348765f57ad964dab38308d561bbf5b35040d49f1e22745d7ef  src/weaver/agent/session.py
5756e91aacb73c9640252886797178eb2fba2cf43860a868c01483d779d05846  src/weaver/agent/tools.py
fddb9aaa611bcac472e5aee917aa05d8ae374baa0100fcd5b0e2ab5508e24f0e  src/weaver/agent/turn.py
6b65e44f56df853ae854d26ce7d199312158637e4fc3dbcfe154fb45a0e1dcc0  tests/test_tool_execution.py
6d6c4faf169d81d4fa584a9b0a2dad3812331fef9bd30047b0e0d3aabaa1ad64  tests/test_agent_turn.py
5dedd7bc4ae633b1da2b5c90ed03b47563f6ea826ffc2de86dc54dd5cf225e7d  tests/test_corpus_outputs_and_agent.py
```

## Slice commits

- `780df8c` accepts Plan 003 and confirms the Plan 004 boundary.
- `d851e1f` adds explicit tool execution policies.
- `5798030` cancels running tool handlers and waits for cleanup.
- `dc262e6` preserves cancelled batches and real execution IDs.

## Independent review

Both initial reviewers required repair on the frozen candidate tree
`b6c86b7bbc7ec12a4741501a61dccaec60586867`.

Shared findings:

1. a caller-supplied mutable effect collection could change after policy
   construction and admit an outside effect;
2. later unknown, inactive, or blocked calls in a cancelled batch went through
   normal dispatch gates instead of settling as cancelled.

The evidence reviewer also found that the canonical plan and plan index still
described implementation as only admitted.

## Accepted repair pass

The single repair pass:

- copies and validates allowed effects into a private `frozenset`;
- rejects values outside `EffectKind`;
- checks handler completion at observation time for the tie rule;
- marks the batch cancelled after the first cancelled result or observed event;
- settles every later call directly as cancelled without dispatch;
- stops the turn without another model request;
- extends the batch test with blocked, inactive, and unknown later calls;
- updates the plan status and evidence.

No second repair pass is admitted. Both final rechecks passed. The evidence
reviewer confirmed the corrected 142-test count, four-call label, repaired tree
hash, and review outcomes.

## Readability pass

After the repaired candidate was accepted, the owner requested a focused
readability audit. Five improvements landed without changing behavior:

1. **Error code constants** — `errors.py` now owns shared `UNKNOWN_TOOL`,
   `CANCELLED`, `EFFECT_NOT_ALLOWED` etc. constants. `tools.py` and `turn.py`
   import and reference them instead of repeating string literals. Single
   source of truth for dispatch error codes and their safe messages.
2. **Dispatch gate ordering documented** — `dispatch()` docstring now explains
   the five-gate sequence and why effect permission checks happen before JSON
   parsing.
3. **Cancellation race explained** — a comment block above the two-task
   `asyncio.wait` race explains the completion-tie rule and the finally-block
   cleanup guarantee.
4. **Result variable lifetime clarified** — a one-line comment in the success
   branch notes that `result` is alive through the finally block and all
   error branches return early.
5. **EXTERNAL_EFFECT constraint annotated** — `__post_init__` now carries a
   comment noting this is a Plan 004 constraint, not a permanent prohibition.

All 142 tests pass with zero source changes beyond comments, imports, and
constant renaming.
