# Module 04: the turn loop (the heart of the machine)

![Turn](diagrams/04-turn.png)

`run_turn` (`agent/turn.py:454`) is the heart of a conversation turn:
it walks the loop (think, maybe call a tool, look at the result, repeat,
answer), validates every candidate answer (checks the answer the model
wants to give is actually well-formed), and returns a `TurnResult` (a
report card). here's the design rule that matters: it never raises for
ordinary failures (no exceptions exploding out of it), it reports an
`exit_reason` (a verdict: how did this turn end).

## the loop (`turn.py:536`) (the beat of the heart)

each iteration, until `max_steps` is reached (the step cap, see the
tool budget below):

1. **check the cancel event first** (`turn.py:537`), cooperative
   cancellation: the loop checks the flag between steps, the web layer
   never force-kills mid-write. stop at the safe point.
2. **build the request** (assemble what to send the model): project
   `history + new_messages` through `project_messages` (convert stored
   items into the message shape the model reads), add the budget
   reminder (a note saying "you have N tool steps left") when tool
   steps are low, then wrap in a `ModelRequest` (the typed envelope
   the model layer sends), `turn.py:599`.
3. **stream the model** (ask the model, reading the answer as it
   arrives piece by piece) via `model_layer.complete` (which drains
   the stream when there is no delta callback, `_complete_buffered_stream`
   buffers candidate text when there is one: the pieces stay private
   until the whole candidate is checked, `turn.py:642-650`). you don't
   show the world a half-baked answer.
4. **branch on the stop reason** (the model's declared reason for
   ending its reply).

## stop reasons and what each means (`turn.py:730-838`)

| stop_reason (why the model stopped) | outcome |
|---|---|
| `ABORTED` / cancel set | `INTERRUPTED`: the turn was cancelled, safe failure text |
| `ERROR` | `MODEL_FAILED`, with the provider's error category recorded (auth, rate limit, timeout, etc.) |
| `LENGTH` | persist the truncated answer as `status: interrupted`, exit `INCOMPLETE` |
| `STOP` | candidate answer, goes to validation (below) |
| `TOOL_USE` | tool dispatch (below) |
| anything else | `MODEL_FAILED`, protocol violation (the model said something no model should say) |

the final phase is special (`in_final_phase`, `turn.py:545`): after a
candidate passes validation and the reading packet is built (the bundle
of cited passages, module 06), one last curated call runs with only the
recent exchanges + candidate + packet. the point: the model answers
from the actual cited text, not from whatever it half-remembers. it gets
`SYNTHESIS_HISTORY_EXCHANGES` recent exchanges (the last few turns of
context), no current-turn tool transcripts (the messy tool chatter gets
dropped), `turn.py:555-579`. the model's tools are stripped (no more
calling, answer now) and `ANSWER_MAX_OUTPUT_TOKENS` gives the answer
headroom (enough tokens to write a real answer), `turn.py:604-612`. a
provider failure in that phase can never erase the validated candidate
(`turn.py:666-679`), fail-soft: the answer you already have stays.

## candidate validation (`turn.py:760-822`) (quality control at the door)

a `STOP` response (the model says "i'm done") is checked:

- tool calls present in a STOP (the model wants to call a tool but
  also says it's done) become `MODEL_FAILED` (`model_protocol`): that
  shape is against the protocol.
- textual tool-call slips (the model writes a tool call as plain text
  instead of the proper format) get a rejection note and a retry, up
  to `TEXT_TOOL_SLIP_LIMIT` times, each time with a correction note
  telling it what went wrong.
- if the model never used a tool, one zero-evidence reprompt
  (`ZERO_EVIDENCE_CORRECTION`, `turn.py:795-798`): weaver is a reader,
  answer from the text, try again.
- then the **reading packet** is built from the turn's tool results
  (the passages found this turn) and the candidate becomes
  `validated_candidate` (approved); the final reading call answers
  over the packet (`turn.py:800-814`). without a packet builder, the
  candidate persists directly.

## the tool budget (`turn.py:479-488`) (how many tool calls is too many)

`_MAX_MODEL_STEPS = 100` (the absolute ceiling on loop iterations).
tiers map to tool budgets: awakened 50, ascended 70, transcendent 90
(`TOOL_BUDGET_TIERS`; stronger models get more room to read). when a
budget is set, the tool calls are capped at it and the final answer
call is always guaranteed: `max_steps = tool_budget + 1 +
correction_steps` (tools + one answer + room for fixes). the last tool
step is *forced* to be the answer: tools are stripped from the request
(`turn.py:604`) and the reminder says so. a tool call on a forced
answer is `LIMIT_REACHED` (`turn.py:828-833`): the budget can never
starve the final answer.

## tool dispatch inside the loop (`turn.py:857-930`) (the exchange counter)

for each call the turn persists `tool_call` evidence (saves the record
of the call), dispatches through the registry (module 05's gates: the
checkpoints the call must pass), then persists the `tool_result` (saves
the result), and the two persistence steps are each their own
transaction (module 02: one row, one transfer). `tool_starts` counts
dispatches where the handler actually started (the tool really ran,
tracked with a race-respecting `started` flag: only count it if it
truly began).

## what the capture shows

`evidence/06-retrieval/02-turn-result.json`, the scripted reading turn:
`model_steps 3, tool_starts 2, exit completed`, final text the cited
answer. the three steps: semantic_search (TOOL_USE) then read_chapters
(TOOL_USE) then STOP answer. the persisted items in
`03-persisted-items.json` show the full shape of one turn in the store:
owner message, assistant with tool calls, tool_call, tool_result,
assistant answer.

## exit reasons (`turn.py:279`) (the verdicts)

`completed` (done), `incomplete` (cut short), `model_failed` (the model
or api broke), `limit_reached` (budget spent), `interrupted`
(cancelled), `persistence_failed` (the store refused). every ordinary
failure path picks a reason and a safe, stable failure string
(`safe_error`, a human-readable message). the web client never sees a
stack trace, only the reason and a message a person can read.

## inspect it yourself

```bash
.venv/bin/python docs/learning-lab/scripts/capture_06_retrieval.py
```

then change the scripted responses (e.g. make step 3 call a tool again
instead of answering) and watch the exit reason change.

## key invariants

- the loop checks cancellation between every step, never mid-write.
- the answer call is always guaranteed, a tool budget can never starve
  the final answer.
- a validated candidate survives a final-phase provider failure.
- deltas are private until validation; only the final answer is
  published.
