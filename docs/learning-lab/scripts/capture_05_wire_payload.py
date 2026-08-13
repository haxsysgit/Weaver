"""Capture 05 tour: what the model actually receives, and how tools run.

Four live views of the same machinery (all offline, FakeModelProvider):
- STEP 1  the exact DeepSeek wire payload for a mid-turn request
- STEP 2  argument stabilization (key order never reaches the handler)
- STEP 3  the ModelLayer round-trip as the provider recorded it
- STEP 4  the ToolRegistry dispatch gates, in order, with live JSON

Run:  .venv/bin/python docs/learning-lab/scripts/capture_05_wire_payload.py
Fast:  ... --autopilot
"""

import asyncio
import json
from pathlib import Path

from weaver.agent.tools import (
    EffectKind,
    ToolDefinition,
    ToolExecutionContext,
    ToolExecutionPolicy,
    ToolRegistry,
)
from weaver.model_layer.deepseek import (
    DeepSeekProvider,
    _stable_arguments_json,
)
from weaver.model_layer.fake import FakeModelProvider
from weaver.model_layer.layer import ModelLayer
from weaver.model_layer.types import (
    ModelMessage,
    ModelReasoning,
    ModelRequest,
    ModelSpec,
    ModelStreamEventType,
    ModelToolCall,
    ModelToolSchema,
)

import lab

EVIDENCE = Path(__file__).resolve().parent.parent / "evidence" / "05-wire"

FLASH = ModelSpec(
    provider_id="deepseek",
    model_id="deepseek-v4-flash",
    api_family="openai-chat-completions",
    default_output_tokens=4096,
    supports_reasoning=True,
)

SEARCH_SCHEMA = ModelToolSchema(
    name="semantic_search",
    description="Search the library for passages about a topic.",
    parameters={
        "type": "object",
        "properties": {
            "query": {"type": "string"},
            "limit": {"type": "integer"},
        },
        "required": ["query"],
    },
)


def mid_turn_request() -> ModelRequest:
    """The messages of a turn after one reading tool round trip."""
    return ModelRequest(
        messages=(
            ModelMessage(
                role="user",
                content="who is the fake knight?",
            ),
            ModelMessage(
                role="assistant",
                content=None,
                reasoning_content="the owner asks about a specific fighter",
                tool_calls=(
                    ModelToolCall(
                        call_id="call-001",
                        name="semantic_search",
                        arguments_json=json.dumps(
                            {"limit": 3, "query": "the fake knight"}
                        ),
                    ),
                ),
            ),
            ModelMessage(
                role="tool",
                content="Tool `semantic_search` returned a result.",
                name="semantic_search",
                tool_call_id="call-001",
            ),
            ModelMessage(
                role="assistant",
                content="the fake knight fought the fake dragon.",
            ),
        ),
        tools=(SEARCH_SCHEMA,),
        tool_choice=None,
        reasoning=ModelReasoning(enabled=True, effort="low"),
    )


def write(name: str, text: str) -> None:
    raw = EVIDENCE / name
    old = raw.read_text(encoding="utf-8") if raw.exists() else None
    raw.write_text(text, encoding="utf-8")
    if old != text:
        lab.note(f"(artifact {name} written, {len(text)} bytes)")
    else:
        lab.note(f"(artifact {name} unchanged, {len(text)} bytes)")


async def main() -> None:
    lab.banner("TOUR 05: THE WIRE AND THE TOOL PROTOCOL")
    lab.explain(
        "design lesson: when your loop wants to talk to a model company"
        "\n(provider: the company running the model, like deepseek), you"
        "\nhave two seams to design: the wire (the exact bytes that leave"
        "\nyour machine to the api) and the gate (every tool call passes"
        "\ncheckpoints before any real work happens). this tour shows"
        "\nboth, live, with the fake provider (the scripted stand-in)"
        "\nrecording everything verbatim."
    )
    lab.pause()

    # STEP 1: wire payload
    lab.section("STEP 1: the exact DeepSeek wire payload")
    lab.explain(
        "_request_payload() builds the JSON body that would actually be"
        "\nPOSTed to the api. the design rule: ONE source of truth for"
        "\nthe wire format, never ad-hoc dicts scattered in the loop."
        "\nwatch the assistant message: it carries reasoning_content"
        "\n(the model's private thinking text; deepseek 400s if it's"
        "\nmissing in thinking mode) plus tool_calls, and the previous"
        "\ntool result is replayed as role: tool, so the model"
        "\nremembers its own earlier call."
    )
    lab.code("model_layer/deepseek.py:312-319")
    lab.code("model_layer/deepseek.py:223-255")
    request = mid_turn_request()
    payload = DeepSeekProvider._request_payload(FLASH, request, max_output_tokens=4096)
    lab.show("payload", payload)
    write("01-wire-payload.json", json.dumps(payload, indent=2, sort_keys=True))
    lab.pause()

    # STEP 2: stable arguments
    lab.section("STEP 2: argument stabilization (key order is meaningless)")
    lab.note("the model may emit {b, a, c}; handlers must always see one order")
    messy = {"b": 2, "a": {"z": 1, "y": [3, 1]}, "c": None}
    lab.code("model_layer/deepseek.py:231-239")
    lab.show("_stable_arguments_json(messy)", _stable_arguments_json(messy))
    write(
        "02-stable-arguments.json",
        json.dumps(
            {
                "model_sent": json.dumps(messy),
                "stabilized": _stable_arguments_json(messy),
            },
            indent=2,
        ),
    )
    lab.pause()

    # STEP 3: layer round-trip
    lab.section("STEP 3: the ModelLayer round-trip (provider's recording)")
    lab.explain(
        "the middleman's promise: exactly one terminal event, no data"
        "\nafter it, no missing terminal. the fake provider records the"
        "\nrequest verbatim (this is PROOF the layer delivers exactly"
        "\nwhat the loop assembled) and plays one scripted reply."
    )
    lab.code("model_layer/layer.py:75-120")
    provider = FakeModelProvider("deepseek", models=(FLASH,))
    layer = ModelLayer()
    layer.register_provider(provider)
    events = []
    async for event in layer.stream(FLASH, mid_turn_request(), asyncio.Event()):
        if event.event_type != ModelStreamEventType.RESPONSE_COMPLETE:
            events.append(
                {"event_type": event.event_type.value, "delta": event.delta}
            )
        else:
            events.append(
                {
                    "event_type": event.event_type.value,
                    "response": {
                        "stop_reason": event.response.stop_reason.value,
                        "content": event.response.assistant_message.content,
                    },
                }
            )
    call = provider.calls[0]
    recorded = {
        "recorded_request": {
            "model": call.model.model_id,
            "messages": [
                {
                    "role": m.role,
                    "content": m.content,
                    "tool_call_id": m.tool_call_id,
                    "tool_calls": [
                        {
                            "id": c.call_id,
                            "name": c.name,
                            "arguments_json": c.arguments_json,
                        }
                        for c in m.tool_calls
                    ],
                }
                for m in call.request.messages
            ],
            "tool_count": len(call.request.tools),
            "reasoning": {
                "enabled": call.request.reasoning.enabled,
                "effort": call.request.reasoning.effort,
            },
        },
        "events": events,
    }
    lab.show("provider recorded", recorded)
    write("03-layer-roundtrip.json", json.dumps(recorded, indent=2))
    lab.note("one RESPONSE_COMPLETE, no data after it, tool_count=1 schema")
    lab.note("(schema = the shape description telling the model what arguments a tool accepts)")
    lab.pause()

    # STEP 4: dispatch gates
    lab.section("STEP 4: the ToolRegistry dispatch gates, in order")
    lab.explain(
        "now the bouncer. every tool call must pass checkpoints before"
        "\nany work happens: registered (is it on the list?), active"
        "\n(is it switched on?), effect allowed (the policy is read-only"
        "\nhere, writing tools are refused), arguments valid json?"
        "\ncheap checks first, no work for calls that won't pass."
    )
    lab.code("agent/tools.py:203-230")

    async def echo_handler(arguments: dict, context) -> dict:
        return {"echo": arguments}

    async def write_handler(arguments: dict, context) -> dict:
        return {"wrote": True}

    registry = ToolRegistry()
    registry.register(
        ToolDefinition(
            name="echo",
            description="Echo back arguments.",
            parameters={
                "type": "object",
                "properties": {"message": {"type": "string"}},
            },
            handler=echo_handler,
            effect_kind=EffectKind.READ,
        )
    )
    registry.register(
        ToolDefinition(
            name="mark_read",
            description="Mark a chapter as read.",
            parameters={"type": "object", "properties": {}},
            handler=write_handler,
            effect_kind=EffectKind.INTERNAL_WRITE,
        )
    )

    context = ToolExecutionContext(
        session_id="s",
        conversation_id="c",
        turn_id="t",
        call_id="1",
        cancel_event=asyncio.Event(),
    )

    async def gate(name: str, arguments: str, *, active: tuple[str, ...]) -> dict:
        result = await registry.dispatch(
            name,
            arguments,
            active_names=active,
            policy=ToolExecutionPolicy.read_only(),
            context=context,
        )
        return {
            "tool": name,
            "arguments": arguments,
            "ok": result.ok,
            "error_code": result.error_code,
            "error": result.error,
            "result": result.result,
        }

    gates = [
        await gate("no_such_tool", "{}", active=("echo",)),
        await gate("mark_read", "{}", active=("mark_read",)),
        await gate("echo", "not json", active=("echo",)),
        await gate("echo", '{"message": "hello"}', active=("echo",)),
    ]
    for entry in gates:
        lab.note(json.dumps(entry, sort_keys=True))
    write("04-dispatch-gates.json", json.dumps(gates, indent=2))
    lab.note("1) unknown tool 2) write under read-only policy 3) bad JSON")
    lab.note("4) success, the handler ran and returned {'echo': ...}")
    lab.pause()

    lab.banner("END OF TOUR 05: read modules/05-model-layer.md")


if __name__ == "__main__":
    asyncio.run(main())