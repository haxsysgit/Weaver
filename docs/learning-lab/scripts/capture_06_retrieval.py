"""Capture 06 tour: the reading tools and a full retrieval turn.

Synthetic novel + notebook with an in-memory Qdrant index and fake
embedders (no network, no private text). Walks the five reading tools
one by one, shows the failure cases, then runs one full scripted turn
that searches, opens a passage, and answers, proving that only durable
evidence, never novel prose, reaches the conversation store.

Run:  .venv/bin/python docs/learning-lab/scripts/capture_06_retrieval.py
Fast:  ... --autopilot  (interactive: type your own query at STEP 5)
"""

import asyncio
import json
import hashlib
import re
import shutil
from pathlib import Path

from qdrant_client import QdrantClient, models

from weaver.agent.tools import (
    ToolExecutionContext,
    ToolExecutionPolicy,
    ToolRegistry,
)
from weaver.conversation.session import SessionWeave
from weaver.model_layer import ModelLayer
from weaver.model_layer.deepseek import DEEPSEEK_FLASH
from weaver.model_layer.fake import FakeModelProvider
from weaver.model_layer.types import (
    ModelMessage,
    ModelResponse,
    ModelStopReason,
    ModelToolCall,
)
from weaver.retrieval.chunker import chunk_chapter
from weaver.retrieval.experiment import (
    create_novel_collection,
    create_notebook_collection,
)
from weaver.retrieval.library import make_passage_handle
from weaver.retrieval.tools import LibraryService, register_reading_tools

import lab

EVIDENCE = Path(__file__).resolve().parent.parent / "evidence" / "06-retrieval"


class FakeEmbedder:
    def embed(self, texts):
        out = []
        for t in texts:
            v = [0.0] * 384
            for token in t.lower().split():
                h = hashlib.sha256(token.encode()).digest()
                v[int.from_bytes(h[:2], "big") % 384] += 1.0
            out.append(v)
        return out


class FakeSparse:
    def __call__(self, text):
        import re

        seen = {}
        for t in re.findall(r"[a-z0-9']+", text.lower()):
            h = int.from_bytes(hashlib.sha256(t.encode()).digest()[:4], "big")
            seen.setdefault(h, 0)
            seen[h] += 1
        return models.SparseVector(
            indices=sorted(seen),
            values=[seen[i] for i in sorted(seen)],
        )


def write(name: str, text: str) -> None:
    raw = EVIDENCE / name
    old = raw.read_text(encoding="utf-8") if raw.exists() else None
    raw.write_text(text, encoding="utf-8")
    if old != text:
        lab.note(f"(artifact {name} written, {len(text)} bytes)")
    else:
        lab.note(f"(artifact {name} unchanged, {len(text)} bytes)")


def build_library(root: Path) -> LibraryService:
    novel = root / "novel"
    (novel / "0001-0100").mkdir(parents=True)
    (novel / "0101-0200").mkdir()
    ch1 = [
        "Shadow Slave-Chapter 1 - 1: Fake",
        "the fake knight fights the fake dragon",
        "",
        "the dragon breathes fake fire",
    ]
    ch3 = ["Shadow Slave-Chapter 3 - 3: Fake", "the fake knight sneaks through the ruins"]
    ch98 = [
        "Shadow Slave-Chapter 98 - 98: Fake",
        "the leader of the hunting party sneers",
        "",
        "sunny kills the leader with the fake kunai",
    ]
    (novel / "0001-0100" / "chapter-0001.txt").write_text("\n".join(ch1))
    (novel / "0001-0100" / "chapter-0003.txt").write_text("\n".join(ch3))
    (novel / "0001-0100" / "chapter-0098.txt").write_text("\n".join(ch98))

    nb = root / "nb"
    for sub in ("people", "places", "powers", "items", "groups", "reading"):
        (nb / sub).mkdir(parents=True)
    (nb / "people" / "person-sunny.md").write_text(
        "<!-- entity-id: person:sunny -->\n<!-- alias: person:mongrel -->\n# Sunny\n"
    )
    rec = {
        "chapter": 98,
        "statements": [
            {
                "id": "statement:chapter-0098:05",
                "kind": "confirmed_fact",
                "statement": "Sunny kills the hunting party leader with a kunai.",
                "chapter": 98,
                "evidence": [{"chapter": 98, "location": {"line_start": 3, "line_end": 4}}],
                "links": ["person:sunny"],
                "first_known_chapter": 98,
            }
        ],
    }
    (nb / "reading" / "0098.json").write_text(json.dumps(rec))
    (nb / "connections.jsonl").write_text(
        json.dumps(
            {
                "id": "conn-0098-01",
                "source": "statement:chapter-0098:05",
                "target": "person:sunny",
                "relation": "links",
                "evidence": [{"chapter": 98}],
                "first_known_chapter": 98,
            }
        )
        + "\n"
    )

    client = QdrantClient(path=str(root / "qdrant"))
    chunks = []
    for n in (1, 98):
        dirname = "0001-0100"
        text = (novel / dirname / f"chapter-{n:04d}.txt").read_text()
        chunks.extend(chunk_chapter(n, text))
    create_novel_collection(
        client, chunks, FakeEmbedder(), dense_size=384, sparse_encoder=FakeSparse()
    )
    create_notebook_collection(
        client,
        json.loads((nb / "reading" / "0098.json").read_text())["statements"],
        sparse_encoder=FakeSparse(),
    )
    return LibraryService(
        novel,
        nb,
        client=client,
        embedder=FakeEmbedder(),
        sparse_encoder=FakeSparse(),
    )


def ctx() -> ToolExecutionContext:
    return ToolExecutionContext(
        session_id="s",
        conversation_id="c",
        turn_id="t",
        call_id="1",
        cancel_event=asyncio.Event(),
    )


def scripted_provider() -> FakeModelProvider:
    def response(content, tool_calls, stop):
        return ModelResponse(
            assistant_message=ModelMessage(
                role="assistant",
                content=content,
                tool_calls=tuple(tool_calls),
            ),
            provider_id=DEEPSEEK_FLASH.provider_id,
            model_id=DEEPSEEK_FLASH.model_id,
            stop_reason=stop,
            raw_stop_reason=stop.value,
        )

    return FakeModelProvider(
        "deepseek",
        models=(DEEPSEEK_FLASH,),
        responses=(
            response(
                None,
                (
                    ModelToolCall(
                        "c1",
                        "semantic_search",
                        json.dumps({"query": "who killed the hunting party leader", "limit": 3}),
                    ),
                ),
                ModelStopReason.TOOL_USE,
            ),
            response(
                None,
                (
                    ModelToolCall(
                        "c2",
                        "read_chapters",
                        json.dumps({"handle": make_passage_handle(98, 3, 4)}),
                    ),
                ),
                ModelStopReason.TOOL_USE,
            ),
            response(
                "Sunny killed the leader himself with the kunai (chapter 98).",
                (),
                ModelStopReason.STOP,
            ),
        ),
    )


async def main() -> None:
    lab.banner("TOUR 06: THE READING TOOLS AND A FULL RETRIEVAL TURN")
    lab.explain(
        "design lesson: an agent that reads needs hands (the tools) and"
        "\nmemory of what it read (the store keeps only pointers, the"
        "\ndurable evidence). we built a tiny synthetic novel (3 fake"
        "\nchapters) and a notebook record, indexed in an in-memory"
        "\nQdrant (the meaning-search engine, a vector database: text"
        "\nbecomes numbers, similar meanings land close together) with"
        "\nfake embedders (the number-makers, all offline). no network,"
        "\nno private text, same engine as production."
    )
    lab.pause()

    lab.section("STEP 0: build the test library (index + notebook)")
    lab.explain(
        "a harness for reading needs a test fixture it can index:"
        "\nchapters on disk (the immutable library) plus a notebook"
        "\nrecord (a statement about the story, e.g. 'sunny kills the"
        "\nleader with a kunai', tied to chapter 98 lines 3-4). the"
        "\nindex is built with the SAME code the real library uses."
    )
    lab.code("retrieval/experiment.py:14-30")
    root = Path("/tmp") / "learning-lab-06"
    shutil.rmtree(root, ignore_errors=True)
    root.mkdir(parents=True)
    t0 = lab.stopwatch()
    service = build_library(root)
    t0.elapsed("library built")
    lab.note("three chapters (1, 3, 98), one entity (person-sunny),")
    lab.note("one confirmed_fact statement tied to chapter 98 lines 3-4")
    lab.pause()

    lab.section("STEP 1: the five reading tools, one at a time")
    lab.explain(
        "the toolbox: semantic_search (find by meaning), read_chapters"
        "\n(open specific lines), find_text (find exact words),"
        "\nbrowse_chapters (skim the list of chapters), who_is (look up"
        "\na person or place profile, knows aliases: 'mongrel' finds"
        "\nsunny). all five are READ tools (they only look), the"
        "\nregistry enforces read-only, and none of them call a model:"
        "\npure deterministic code, so the same query always gives the"
        "\nsame answer."
    )
    lab.code("retrieval/tools.py:57-96")

    tools = [
        ("semantic_search", {"query": "who killed the hunting party leader", "limit": 3}),
        ("read_chapters", {"handle": make_passage_handle(98, 3, 4)}),
        ("find_text", {"query": "fake knight", "mode": "phrase", "limit": 5}),
        ("browse_chapters", {"start": 1, "end": 5, "titles_only": True}),
        ("who_is", {"name": "sunny"}),
    ]
    results = {}
    for name, arguments in tools:
        lab.note(f"--- {name} {arguments}")
        handler = getattr(service, name)
        results[name] = await handler(arguments, ctx())
        lab.show(name, results[name])
        lab.pause()

    lab.section("STEP 2: the failure cases (validation, not crashes)")
    lab.explain(
        "tools get bad input all the time, and the design rule is:"
        "\nnever crash, report. a handle pointing past the end of the"
        "\nchapter, and an unknown search mode, both come back as"
        "\nok: false with an error_category (validation), so the turn"
        "\nloop can feed the failure back to the model instead of"
        "\nkilling the turn."
    )
    lab.code("retrieval/tools.py:203-218")
    results["read_chapters_bad_handle"] = await service.read_chapters(
        {"handle": "novel:0098:99-100"}, ctx()
    )
    results["find_text_bad_mode"] = await service.find_text(
        {"query": "fake knight", "mode": "nonsense"}, ctx()
    )
    lab.show("read_chapters bad handle", results["read_chapters_bad_handle"])
    lab.show("find_text bad mode", results["find_text_bad_mode"])
    lab.note("failure carries ok: false + error_category, the turn loop")
    lab.note("feeds it back to the model instead of crashing the turn")
    write("01-tool-results.json", json.dumps(results, indent=2))
    lab.pause()

    lab.section("STEP 3: one full scripted turn through the real SessionWeave")
    lab.explain(
        "now the whole loop with a scripted model (canned replies:"
        "\nsearch, then open the passage, then answer): the model calls"
        "\nsemantic_search, gets hits, calls read_chapters on the best"
        "\npassage handle (the address, like novel:0098:3-4 = chapter"
        "\n98, lines 3-4), reads the lines, and answers from them."
        "\nmodel_steps 3 = the loop called the model three times;"
        "\ntool_starts 2 = two tools actually ran."
    )
    lab.code("conversation/session.py:113-165")
    registry = ToolRegistry()
    register_reading_tools(registry, service)
    model_layer = ModelLayer()
    provider = scripted_provider()
    model_layer.register_provider(provider)
    sw = SessionWeave(
        root / "state",
        model_layer=model_layer,
        model=model_layer.get_model(
            DEEPSEEK_FLASH.provider_id, DEEPSEEK_FLASH.model_id
        ),
        system_prompt="You are Weaver. Use the tools to read, then answer.",
        tool_registry=registry,
        active_tools=("semantic_search", "read_chapters", "find_text", "browse_chapters", "who_is"),
        execution_policy=ToolExecutionPolicy.read_only(),
    )
    await sw.open()
    conv = await sw.start_conversation("Who killed the hunting party leader?")
    t0 = lab.stopwatch()
    result = await sw.send(conv, "Who killed the hunting party leader?")
    t0.elapsed("full turn")
    items = await sw._repo.load_items(conv)
    await sw.close()

    turn = {
        "turn_id": result.turn_id,
        "exit_reason": result.exit_reason.value,
        "final_text": result.final_text,
        "model_steps": result.model_steps,
        "tool_starts": result.tool_starts,
        "token_count": result.token_count,
        "token_budget": result.token_budget,
    }
    lab.show("turn result", turn)
    lab.note("model_steps 3 = scripted calls; tool_starts 2 = tools that ran")
    write("02-turn-result.json", json.dumps(turn, indent=2))
    lab.pause()

    lab.section("STEP 4: what actually persisted (evidence, never prose)")
    lab.explain(
        "the big privacy rule: passage prose (the actual novel text)"
        "\nlives in memory for the turn and never enters the store. the"
        "\nstored tool_result rows carry only the durable evidence (the"
        "\npointer: chapter, lines, hash, handle). every run asserts it."
    )
    persisted = []
    for item in items:
        body = json.loads(item.body)
        persisted.append(
            {
                "sequence": item.sequence,
                "kind": item.kind,
                "body": body,
            }
        )
    write("03-persisted-items.json", json.dumps(persisted, indent=2))
    for entry in persisted:
        body = entry["body"]
        if entry["kind"] == "tool_result":
            handles = re.findall(r'"passage_handle": "([^"]+)"', json.dumps(body))
            lab.note(
                f"seq {entry['sequence']} tool_result ({body['name']}): "
                f"handles {handles}"
            )
    lab.note("checks: has passage_handle, no prose ('sneers', 'fake kunai'),")
    lab.note("no 'text' key in any stored tool_result")
    evidence_rows = [
        item
        for item in items
        if item.kind == "tool_result"
        and "passage_handle" in json.loads(item.body).get("result", {})
    ]
    assert evidence_rows, "expected durable evidence rows"
    for item in evidence_rows:
        body = json.loads(item.body)
        assert "sneers" not in json.dumps(body)
        assert "fake kunai" not in json.dumps(body)
        assert "text" not in body.get("result", {}), "prose must never persist"
    lab.note("PASS: only durable evidence survived in the conversation store")
    lab.pause()

    lab.section("STEP 5: your own question (semantic search, live)")
    lab.note("try: 'who killed the leader', 'fake dragon', 'sunny'")
    if lab.AUTOPILOT:
        lab.note("(autopilot: skipping the interactive query, run without")
        lab.note(" --autopilot to search with your own words)")
    while not lab.AUTOPILOT:
        query = lab.ask("query?", "who killed the leader")
        if query == "q":
            break
        t0 = lab.stopwatch()
        out = await service.semantic_search(
            {"query": query, "limit": 3}, ctx()
        )
        t0.elapsed("semantic_search")
        for hit in out.get("hits", []):
            lab.note(
                f"score {hit['score']:.3f}  {hit['chapter']}  "
                f"{hit['snippet'][:60]}"
            )
    lab.banner("END OF TOUR 06: read modules/06-retrieval.md")


if __name__ == "__main__":
    asyncio.run(main())