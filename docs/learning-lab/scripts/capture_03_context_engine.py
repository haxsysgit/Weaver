"""Capture 03 tour: the context engine, live token counts.

Design lesson (module 03): every conversation needs a context window
manager. Watch the real ContextAssembler decide WHAT survives, and at
each step, what the design is and why. The interactive part lets you
type a token budget and predict which history survives before the run.

Run:  .venv/bin/python docs/learning-lab/scripts/capture_03_context_engine.py
Fast:  ... --autopilot
"""

import asyncio
import json
import re
from pathlib import Path

import tiktoken

from weaver.agent.messages import project_messages
from weaver.chat_runtime import WEB_SYSTEM_PROMPT
from weaver.conversation.assembler import (
    ContextAssembler,
    _count_messages,
    _group_blocks,
)
from weaver.conversation.items import items_to_messages
from weaver.conversation.repository import ItemRecord

import lab

EVIDENCE = Path(__file__).resolve().parent.parent / "evidence" / "03-context-engine"

ENCODING = tiktoken.get_encoding("cl100k_base")

ID32_RE = re.compile(r"\b[0-9a-f]{32}\b")
TS_RE = re.compile(r"\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d+\+\d{2}:\d{2}")


def write(name: str, text: str) -> None:
    raw = EVIDENCE / name
    old = raw.read_text(encoding="utf-8") if raw.exists() else None
    raw.write_text(text, encoding="utf-8")
    if old != text:
        lab.note(f"(artifact {name} written, {len(text)} bytes)")
    else:
        lab.note(f"(artifact {name} unchanged, {len(text)} bytes)")


def item(
    sequence: int,
    kind: str,
    body: dict,
    *,
    conversation_id: str = "conv-fake-knight",
) -> ItemRecord:
    return ItemRecord(
        id=f"item-{sequence:02d}",
        conversation_id=conversation_id,
        sequence=sequence,
        turn_id=f"turn-{(sequence + 1) // 3:02d}",
        run_id="run-1",
        kind=kind,
        body=json.dumps(body),
        created_at="2026-08-13T00:00:00.000000+00:00",
    )


def build_conversation() -> list[ItemRecord]:
    """A small synthetic reading session, oldest first."""
    return [
        item(1, "owner", {"content": "hello weaver"}),
        item(2, "assistant", {"content": "hello. what do you want to read?"}),
        item(3, "owner", {"content": "who is the fake knight?"}),
        item(
            4,
            "assistant",
            {
                "content": "",
                "tool_calls": [
                    {
                        "id": "call-001",
                        "name": "semantic_search",
                        "arguments": json.dumps(
                            {"query": "the fake knight", "limit": 3}
                        ),
                    }
                ],
            },
        ),
        item(
            5,
            "tool_call",
            {
                "tool_call_id": "call-001",
                "name": "semantic_search",
                "arguments": json.dumps({"query": "the fake knight", "limit": 3}),
            },
        ),
        item(
            6,
            "tool_result",
            {
                "tool_call_id": "call-001",
                "name": "semantic_search",
                "result": {
                    "hits": [
                        {
                            "chapter": "Shadow Slave-Chapter 1 - 1: Fake",
                            "score": 0.91,
                            "snippet": "the fake knight fought the fake dragon",
                        }
                    ],
                    "durable_evidence": {
                        "chapter": "Shadow Slave-Chapter 1 - 1: Fake",
                        "line_range": [1, 3],
                        "source_hash": "abc123",
                        "source_kind": "chapter",
                        "handle": "f-000001",
                    },
                },
            },
        ),
        item(
            7,
            "assistant",
            {"content": "the fake knight is a construct who fights the fake dragon."},
        ),
        item(8, "owner", {"content": "what happened in chapter 2?"}),
    ]


def block_label(item: ItemRecord) -> str:
    return f"seq={item.sequence} {item.kind}"


async def main() -> None:
    lab.banner("TOUR 03: THE CONTEXT ENGINE (budget, pin, snapshot)")
    lab.explain(
        "design lesson time. every harness needs a context window manager"
        "\n(someone who decides what the model gets to see each step, the"
        "\ncontext window is the amount of text the model can see at"
        "\nonce). this tour runs the real assembler and talks through"
        "\nevery decision: the policy, the alternatives, the failure each"
        "\nclause is dodging. every number is a real cl100k_base count at"
        "\nthe projection boundary (the exact moment stored items become"
        "\nthe message shape the model reads). tokens are the chunks of"
        "\ntext the model reads and bills you for. nothing is simulated,"
        "\nthis is the actual engine."
    )
    lab.pause()

    items = build_conversation()

    lab.section("STEP 1: the raw material: stored items, oldest first")
    lab.explain(
        "first, the raw material. context assembly eats the persisted item"
        "\nstream (module 07): one row per message, tool call, and tool"
        "\nresult, in sequence order. and it never touches the database"
        "\nitself, that's the seam. the assembler only ever sees this flat"
        "\nlist."
    )
    lab.code("conversation/repository.py:12-22")
    for record in items:
        lab.note(block_label(record))
    lab.pause()

    lab.section("STEP 2: group items into atomic exchange blocks")
    lab.explain(
        "first design decision: what's the unit of history? and the answer"
        "\nis, not a message. a tool exchange (decision -> call -> result)"
        "\nis one thought. cut inside it and you feed the model a result"
        "\nwithout its call, the api rejects the shape or the model straight"
        "\nup invents data. so the assembler groups first: a block starts at"
        "\nevery owner/assistant item and swallows its tool items."
    )
    lab.code("conversation/assembler.py:62-80")
    lab.think(
        "why must the cutoff never land between a tool call and its result?",
        "cos the next model step would receive a tool_result it never"
        "\nrequested (or a call whose result vanished). the api rejects that"
        "\nshape, or the model hallucinates the missing data. blocking makes"
        "\nthe cutoff land on conversation boundaries, never mid-thought."
        "\nthis is the classic naive-truncator bug, and now you know why"
        "\nit's a bug."
    )
    blocks = _group_blocks(items)
    for index, block in enumerate(blocks, start=1):
        lab.note(f"block {index}: " + " | ".join(block_label(i) for i in block))
    lab.pause()

    lab.section("STEP 3: count tokens at the projection boundary")
    lab.explain(
        "second design decision: how do you measure cost? in the same units"
        "\nyou're billed in. the budget counts what the model will actually"
        "\nsee after items become messages (roles, contents, arguments)."
        "\nraw-text counts are a lie: they miss projection transforms and"
        "\ncount fields the model never reads. the tokenizer is cl100k_base,"
        "\nan explicit approximation cos deepseek doesn't publish one."
        "\nhonest error bar, keep headroom."
    )
    lab.code("conversation/assembler.py:39-59")
    block_counts = [
        _count_messages(ENCODING, items_to_messages(block)) for block in blocks
    ]
    system_tokens = len(ENCODING.encode(WEB_SYSTEM_PROMPT))
    for index, (block, count) in enumerate(zip(blocks, block_counts), start=1):
        lab.note(f"block {index}: {count} tokens   (web system prompt: {system_tokens})")
    lab.note(f"whole conversation = {system_tokens} (system) + {sum(block_counts)} (blocks)")
    lab.think(
        "which block is the heaviest, and why?",
        "block 2, the tool exchange, at 92 tokens. the tool_result message"
        "\ncarries the full result the model has to read this turn. tool"
        "\nresults dominate conversation weight, and that's exactly why"
        "\nmodule 06's durable-evidence split keeps novel prose out of the"
        "\nstore."
    )
    lab.pause()

    lab.section("STEP 4: run the real assembler and inspect the policy")
    lab.explain(
        "third decision: what do you drop, and in what order? the policy:"
        "\npin the newest owner message, that's the user's live intent and"
        "\nit must never vanish. then drop oldest blocks first until the"
        "\nbudget holds. deliberately boring and deterministic, cos a policy"
        "\nyou can reproduce is a policy you can debug. three canned runs:"
    )
    lab.pause()

    # 4a count-only
    lab.note("RUN count-only mode (budget None = measure, never truncate)")
    t0 = lab.stopwatch()
    kept, snapshot = await ContextAssembler(
        WEB_SYSTEM_PROMPT, token_budget=None
    ).assemble(items)
    t0.elapsed("assemble")
    lab.show("snapshot", snapshot.__dict__)
    lab.note(f"kept {len(kept)}/{len(items)} items, first_item_id None = all fit")
    lab.explain(
        "count-only mode is the observability contract. even when nothing"
        "\ngets cut, the snapshot reports first_item_id, item_count,"
        "\ntoken_count, token_budget. that's the context meter the web"
        "\nships in every completed sse frame."
    )
    write("02-count-only.json", json.dumps(
        {"mode": "count-only", "system_prompt_tokens": system_tokens,
         "kept_sequences": [i.sequence for i in items],
         "snapshot": snapshot.__dict__}, indent=2
    ))
    lab.pause()

    # 4b budgeted
    budget = system_tokens + sum(block_counts[:2]) + 40
    lab.note(f"RUN budget {budget} (system + 2 oldest blocks + 40 headroom)")
    t0 = lab.stopwatch()
    kept, snapshot = await ContextAssembler(
        WEB_SYSTEM_PROMPT, token_budget=budget
    ).assemble(items)
    t0.elapsed("assemble")
    kept_seq = [i.sequence for i in kept]
    dropped = [i.sequence for i in items if i.sequence not in kept_seq]
    lab.show("snapshot", snapshot.__dict__)
    lab.note(f"DROPPED (oldest first): sequences {dropped}")
    lab.note(f"KEPT: sequences {kept_seq}  -> first_item_id = {snapshot.first_item_id}")
    lab.think(
        "why does the oldest block go, not the newest?",
        "recent turns matter most in a reading conversation, and the newest"
        "\nowner is pinned anyway. oldest-first is the cheapest deterministic"
        "\npolicy that protects the live question. clever importance-scoring"
        "\nbuys nothing at this scale and kills reproducibility."
    )
    write("03-budgeted.json", json.dumps(
        {"mode": "budgeted", "budget": budget, "system_prompt_tokens": system_tokens,
         "block_token_counts": block_counts,
         "kept_sequences": kept_seq, "dropped_sequences": dropped,
         "snapshot": snapshot.__dict__}, indent=2
    ))
    lab.pause()

    # 4c pin fallback
    tiny = system_tokens + block_counts[-1] - 5
    lab.note(f"RUN budget {tiny} (BELOW system prompt + pin block)")
    kept, snapshot = await ContextAssembler(
        WEB_SYSTEM_PROMPT, token_budget=tiny
    ).assemble(items)
    lab.show("snapshot", snapshot.__dict__)
    lab.note(f"kept sequences: {[i.sequence for i in kept]}")
    lab.note(f"token_count {snapshot.token_count} > budget {tiny}: the pin came")
    lab.note("back ALONE, over budget. never raise, never drop the pin.")
    lab.think(
        "when everything overflows, why return a broken budget instead of failing?",
        "availability over perfection. a one-message brief answers a"
        "\ndegraded question; a raised exception answers nothing and kills"
        "\nthe turn. and it can actually happen: one giant tool result"
        "\n(packet bursts, module 06) would otherwise fail every turn. the"
        "\nsnapshot keeps the overflow visible, the meter shows you're over"
        "\nbudget."
    )
    write("04-pin-fallback.json", json.dumps(
        {"mode": "pin-fallback", "budget": tiny,
         "system_prompt_tokens": system_tokens,
         "kept_sequences": [i.sequence for i in kept],
         "token_count_vs_budget": {"token_count": snapshot.token_count,
                                   "token_budget": snapshot.token_budget},
         "snapshot": snapshot.__dict__}, indent=2
    ))
    write("01-block-anatomy.json", json.dumps(
        [
            {
                "block": index,
                "items": [block_label(i) for i in block],
                "messages": [
                    {
                        "role": m.role,
                        "content": (m.content or "")[:40],
                        "tool_calls": [
                            f"{c.name}({c.arguments_json[:40]})"
                            for c in (getattr(m, "tool_calls", None) or ())
                        ],
                    }
                    for m in project_messages(system_prompt="", history=items_to_messages(block))
                ],
                "tokens_at_boundary": count,
            }
            for index, (block, count) in enumerate(zip(blocks, block_counts), start=1)
        ],
        indent=2,
    ))
    lab.pause()

    lab.section("STEP 5: YOUR OWN EXPERIMENTS (type a budget, predict first)")
    lab.explain(
        "practice time, this is where the muscle grows. before each run,"
        "\npredict which blocks survive. budgets: 1139+ = system prompt;"
        "\ntry 1200, 1268, 1150, 1145, 1. empty answer = count-only; 'q' ="
        "\nmove on."
    )
    lab.pause()
    if lab.AUTOPILOT:
        lab.note("(autopilot: skipping the interactive loop, run without")
        lab.note(" --autopilot to type budgets and watch blocks survive)")
    while not lab.AUTOPILOT:
        raw = lab.ask("token budget?", "")
        if raw == "q":
            break
        if not raw:
            budget = None
            mode = "count-only"
        else:
            try:
                budget = int(raw)
            except ValueError:
                lab.note("not a number, count-only it is")
                budget = None
                mode = "count-only"
            else:
                mode = f"budget {budget}"
        lab.explain("predict first: which sequences survive this budget? (enter to run)")
        t0 = lab.stopwatch()
        kept, snapshot = await ContextAssembler(
            WEB_SYSTEM_PROMPT, token_budget=budget
        ).assemble(items)
        t0.elapsed("assemble")
        kept_seq = [i.sequence for i in kept]
        dropped = [i.sequence for i in items if i.sequence not in kept_seq]
        lab.note(f"{mode}: kept {kept_seq}  dropped {dropped}")
        lab.note(
            f"snapshot: {snapshot.item_count} items, "
            f"{snapshot.token_count}/{snapshot.token_budget or 'unlimited'} tokens, "
            f"first_item_id={snapshot.first_item_id}"
        )
        lab.explain(
            "was your prediction right? if you predicted a block survives"
            "\nand it didn't: it got cut because the pin block and"
            "\neverything newer than it are untouchable. everything else"
            "\ndrops oldest-first until the budget holds."
        )
    lab.pause()

    lab.banner("END OF TOUR 03: now hold the discussion in modules/03-context-engine.md")


if __name__ == "__main__":
    asyncio.run(main())