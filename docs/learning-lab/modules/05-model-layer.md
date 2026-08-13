# Module 05: the model layer and the tool protocol (the middleman and the bouncer)

![Wire](diagrams/05-wire.png)

two pieces of machinery in this module:

- the model layer (`model_layer/`), the abstraction (the agreed
  interface) between the turn loop and any model provider (the company
  running the model, like deepseek). the loop never talks to the api
  directly, it talks to the middleman.
- the tool protocol (`agent/tools.py`), the gatekeeper between the
  model's tool calls and weaver's own tools. every tool call passes
  through checkpoints before any real work happens.

## the types (`model_layer/types.py`) (the vocabulary)

`ModelSpec` describes a model (which provider, which model id, which
api family, default output tokens, whether it supports reasoning).
`ModelRequest` is what the turn loop builds: `messages` (the
conversation so far), `tools` (the schemas, the shape descriptions of
each tool), `tool_choice`, `response_format`, `max_output_tokens`,
`reasoning` (enabled + effort). `ModelMessage` carries role
(user/assistant/tool)/content plus the tool fields (`tool_call_id`,
`tool_calls`) and `reasoning_content` (the model's private thinking
text, separate from its answer). `ModelStreamEvent` is `TEXT_DELTA`
(a piece of streamed text, preview only) or `RESPONSE_COMPLETE` (the
single authoritative final response).

## the wire payload, exactly what leaves the machine

`DeepSeekProvider._request_payload` (`deepseek.py:244`) translates a
`ModelRequest` (the typed envelope) into the openai-chat-completions
body (the actual JSON we post to the api). the capture
(`evidence/05-wire/01-wire-payload.json`) shows a mid-turn request:
four messages (user, then assistant with tool_calls + reasoning, then
tool, then assistant), `stream: true` (stream the reply piece by
piece), `stream_options.include_usage`, the deepseek `extra_body.thinking`
block (the thinking-mode switch), and the tool schema.

two details worth knowing (the kind of detail that only shows up when
you ship for real):

- **`reasoning_content` is mandatory on every assistant message**
  (`deepseek.py:312-319`): deepseek 400s (rejects the request) with
  *"The reasoning_content in the thinking mode must be passed back to
  the API"* when an assistant message lacks the field after tool calls.
  this is the model company enforcing that you echo back the model's
  thinking. an empty string satisfies the presence check, and it's
  applied to all assistant messages, gated on the model's capability
  (whether the model supports reasoning at all), not the per-request
  toggle.
- **arguments are stabilized** (made deterministic), `_stable_arguments_json`
  (`deepseek.py:45`) re-serializes with sorted keys and compact
  separators so the same call produces the same JSON every time. the
  capture `02-stable-arguments.json` shows `{"b": 2, "a": {"z": 1,
  "y": [3, 1]}, "c": null}` becoming `{"a":{"y":[3,1],"z":1},"b":2,"c":null}`.
  why bother? deterministic arguments mean deterministic call-id
  matching and replay: the same call always fingerprints the same way.

**retry** (`deepseek.py:64`): 3 attempts, 2.0s base, exponential
backoff (wait 2s, then 4s, then 8s). only for overload/rate-limit/5xx/
network categories (transient stuff: the api is busy, throttle us,
server hiccup, connection blip). auth, balance, invalid-request, and
cancellation are never retried (they won't heal with waiting, so retry
would burn time and money).

## the layer enforces the protocol (`layer.py:75`) (the middleman's promise)

`ModelLayer.stream()` wraps any provider with guarantees: exactly one
terminal `RESPONSE_COMPLETE` per stream (the final event, and only
one), no data after the terminal (nothing past the end), no missing
terminal at the end (every stream must finish properly), `layer.py:94-113`.
`complete()` is the convenience the turn loop uses: drain the stream
and return the final response. the loop can trust the middleman's word.

## the fake provider, why this lab is deterministic (the rehearsal actor)

`FakeModelProvider` (`fake.py:26`) records every call verbatim into
`calls` (the capture `03-layer-roundtrip.json` is the request as the
provider saw it, proof the layer delivers exactly the assembled
request) and replays scripted `ModelResponse`s cyclically (canned
replies, in order, looping). a set cancel event yields the aborted
response (it plays "i was cancelled" when the cancel flag is on). the
lab's capture scripts build scripted providers exactly like the tests
do, same code path, no network. one seam, two uses.

## the tool protocol: dispatch gates in order (`tools.py:203`) (the bouncer's checkpoints)

the registry dispatch applies cheap checks before expensive ones
(check the cheap stuff first, don't do work for calls that won't pass):

1. **registered?** is the tool on the list at all? else `unknown_tool`.
2. **active?** (`active_names`) is it switched on right now? else
   `inactive_tool`.
3. **effect allowed?** `policy.allows(effect_kind)`. the web surface
   runs `ToolExecutionPolicy.read_only()` so any tool that writes is
   `effect_not_allowed`. effect kind is what the tool does: `READ`
   (only looks), `INTERNAL_WRITE` (changes weaver's own store),
   `EXTERNAL_EFFECT` (changes the outside world). the web surface has
   no write tools, the policy is defense in depth (belt and
   suspenders) anyway.
4. **JSON shape?** are the arguments valid json? else
   `malformed_arguments`.
5. **pre-cancel** skip handler creation when the turn already ended.
6. **handler race** run the handler against cancellation (if the turn
   is cancelled mid-run, stop), settle the task before returning (wait
   for it to actually finish, don't leave loose threads).

the capture `04-dispatch-gates.json` shows all four first-gate failures
plus a clean call, exactly as the registry returned them. and
`EffectKind` has three classes: `READ`, `INTERNAL_WRITE`,
`EXTERNAL_EFFECT`. external effects are refused outright until a later
plan builds the approval/undo surface (the "ask the owner first" ui),
`tools.py:78-81`. the system can't undo, so it won't do yet.

## inspect it yourself

```bash
.venv/bin/python docs/learning-lab/scripts/capture_05_wire_payload.py
```

take `01-wire-payload.json` and hand-verify it against
`_request_payload` line by line, then change `mid_turn_request()` and
watch the payload change shape accordingly.

## key invariants

- one source of truth for the wire format: the `_request_payload`
  code, never ad-hoc dicts in the loop.
- assistant messages always carry `reasoning_content` in thinking mode.
- the layer, not the provider, guarantees stream protocol.
- dispatch gates run before any handler work, policy precedes parsing.