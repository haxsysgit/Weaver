"""Plan 032: run the retrieval-verdict questions through one or more arms.

Each answer gets a fresh device and conversation, spoilers allowed and no
reader boundary, through the real web app in-process. Live spend is
metered from token usage and checked against a hard cap before every
answer. Questions and answers are private: pass the question file and an
output folder under `.weaver/`.

    uv run python scripts/retrieval_verdict.py \\
        --questions .weaver/evaluation/plan032/questions.json \\
        --out .weaver/evaluation/plan032/runs --arm A --arm B [--live] [--only n01]

Fake mode (the default) exercises the whole path with no network and no
spend. Live mode needs DEEPSEEK_KEY and the server stopped (one process
may hold the search index).
"""

from __future__ import annotations

import argparse
import asyncio
import json
import logging
import os
import random
import sys
import time
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any

# deepseek-flash list prices in USD per million tokens, read 2026-10-31
# (peak window, the higher of the two). Re-check before a new live batch.
PRICE_CACHE_HIT = 0.006
PRICE_CACHE_MISS = 0.30
PRICE_OUTPUT = 1.20
# The most one answer is allowed to cost; a new answer starts only if the
# cap still has this much room, so the cap holds even on the last answer.
ANSWER_RESERVE_USD = 0.06


@dataclass
class SpendMeter:
    """Live spend from token usage, with a hard cap checked before work."""

    cap_usd: float
    spent_usd: float = 0.0
    calls: int = 0
    tokens: dict[str, int] = field(default_factory=lambda: {"hit": 0, "miss": 0, "out": 0})

    def charge(self, hit: int, miss: int, out: int) -> float:
        cost = (hit * PRICE_CACHE_HIT + miss * PRICE_CACHE_MISS + out * PRICE_OUTPUT) / 1e6
        self.tokens["hit"] += hit
        self.tokens["miss"] += miss
        self.tokens["out"] += out
        self.calls += 1
        self.spent_usd += cost
        return cost

    def can_start(self, reserve_usd: float = ANSWER_RESERVE_USD) -> bool:
        return self.spent_usd + reserve_usd <= self.cap_usd


def blind_shuffle(records: list[dict[str, Any]], seed: int) -> tuple[list[dict[str, Any]], dict[str, dict[str, Any]]]:
    """Strip arm labels and tool traces, shuffle, and keep the key apart.

    Returns the blind list (blind id, question id, answer text) and the key
    from blind id back to the arm and run.
    """
    order = list(range(len(records)))
    random.Random(seed).shuffle(order)
    blind: list[dict[str, Any]] = []
    key: dict[str, dict[str, Any]] = {}
    for position, index in enumerate(order):
        record = records[index]
        blind_id = f"b{position + 1:03d}"
        blind.append({"blind_id": blind_id, "question_id": record["question_id"], "text": record["text"]})
        key[blind_id] = {"arm": record["arm"], "run": record["run"], "question_id": record["question_id"]}
    return blind, key


def join_arms(judgements: list[dict[str, Any]], key: dict[str, dict[str, Any]]) -> list[dict[str, Any]]:
    """Put the arm back on each blind judgement. Every judgement must have
    a key and every key a judgement, so nothing is dropped or doubled."""
    judged = {judgement["blind_id"] for judgement in judgements}
    if judged != set(key) or len(judged) != len(judgements):
        raise ValueError("judgements and key do not match one to one")
    joined = []
    for judgement in judgements:
        entry = key[judgement["blind_id"]]
        if entry["question_id"] != judgement["question_id"]:
            raise ValueError(f"{judgement['blind_id']}: question does not match the key")
        joined.append({**judgement, "arm": entry["arm"], "run": entry["run"]})
    return joined


class ToolFailureCounter(logging.Handler):
    """Counts reading-tool failures from their warning log lines.

    The answer stream reports each tool as start and done, never whether
    it worked, so a tool failing on every call looks like a working one
    (Plan 032: arm C's searches all failed on a held index lock).
    """

    def __init__(self) -> None:
        super().__init__(level=logging.WARNING)
        self.failed: list[str] = []

    def emit(self, record: logging.LogRecord) -> None:
        message = record.getMessage()
        if " failed" in message:
            self.failed.append(message.split(" failed", 1)[0])

    def take(self) -> list[str]:
        failed, self.failed = self.failed, []
        return failed


def release_library(runtime: Any) -> None:
    """Close the runtime's embedded search index so the next arm can open it.

    `ChatRuntime.close()` leaves the library's Qdrant client open, and the
    embedded index allows one client per process.
    """
    library = getattr(runtime, "library", None)
    client = getattr(library, "client", None)
    if client is not None:
        client.close()
        library.client = None


def read_run_body(db_path: Path, conversation_id: str) -> dict[str, Any]:
    """The last run_completed or run_failed event body for a conversation.

    Plan 033: the answer stream does not say which check failed a turn, or
    whether the gap answer rescued it; the runtime's state database does.
    Read-only; returns {} when there is no database or no such event.
    """
    import sqlite3

    if not db_path.exists():
        return {}
    db = sqlite3.connect(f"file:{db_path.as_posix()}?mode=ro", uri=True)
    try:
        row = db.execute(
            "SELECT kind, body FROM run_event WHERE conversation_id = ? "
            "AND kind IN ('run_completed', 'run_failed') "
            "ORDER BY sequence DESC LIMIT 1",
            (conversation_id,),
        ).fetchone()
    finally:
        db.close()
    if row is None:
        return {}
    body = json.loads(row[1] or "{}")
    body["kind"] = row[0]
    return body


def failure_site(run_body: dict[str, Any]) -> str:
    """The check that failed the turn, or that the gap answer rescued."""
    reading = run_body.get("reading") or {}
    return run_body.get("error_category") or reading.get("rescued_from") or ""


def parse_stream(text: str) -> tuple[list[tuple[str, dict[str, Any]]], str, str]:
    """Server-sent events into (events, exit name, final text)."""
    events: list[tuple[str, dict[str, Any]]] = []
    name = ""
    for line in text.splitlines():
        if line.startswith("event:"):
            name = line.split(":", 1)[1].strip()
        elif line.startswith("data:") and name:
            try:
                events.append((name, json.loads(line.split(":", 1)[1])))
            except json.JSONDecodeError:
                pass
    final = next(((n, d) for n, d in reversed(events) if n in ("completed", "failed", "interrupted")), ("none", {}))
    return events, final[0], str(final[1].get("text", ""))


async def run_arm(
    arm_name: str,
    questions: list[dict[str, Any]],
    *,
    live: bool,
    out_dir: Path,
    run_index: int,
    meter: SpendMeter,
) -> list[dict[str, Any]]:
    from httpx import ASGITransport, AsyncClient

    from weaver.chat_runtime import open_chat_runtime
    from weaver.reading_arms import ARMS
    from weaver.web.app import create_app

    arm = ARMS[arm_name]
    stamp = int(time.time())
    state = out_dir / "state" / f"{arm_name}-run{run_index}-{stamp}"
    runtime = await open_chat_runtime(state, live=live, surface="web", arm=arm)
    records: list[dict[str, Any]] = []
    failures = ToolFailureCounter()
    logging.getLogger("weaver.retrieval.tools").addHandler(failures)
    try:
        if live and "semantic_search" in arm.tools and runtime.library is not None:
            # Prove search works before spending on an arm that relies on it.
            probe = runtime.library._run_search("Sunny", surface="novel", chapter_from=None, chapter_to=None)
            if not probe["canonical_hits"]:
                raise RuntimeError(f"arm {arm_name}: the search probe found nothing; is the index open elsewhere?")
            print(f"{arm_name} search probe ok ({len(probe['canonical_hits'])} hits)", flush=True)
        async with AsyncClient(
            transport=ASGITransport(app=create_app(runtime)), base_url="http://127.0.0.1", timeout=None
        ) as client:
            for number, question in enumerate(questions, start=1):
                if live and not meter.can_start():
                    print(f"STOP cap: spent ${meter.spent_usd:.4f} of ${meter.cap_usd:.2f}", flush=True)
                    break
                headers = {
                    "X-Device-Id": f"plan032-{arm_name}-{question['id']}-r{run_index}-{stamp}",
                    "Origin": "http://127.0.0.1",
                }
                if live:
                    headers["X-Weaver-Key"] = os.environ["DEEPSEEK_KEY"]
                spent_before = meter.spent_usd
                await client.put(
                    "/api/preferences", headers=headers, json={"reader_chapter": None, "spoiler_mode": "none"}
                )
                created = await client.post("/api/conversations", headers=headers, json={})
                conversation = created.json()["conversation_id"]
                started = time.monotonic()
                posted = await client.post(
                    f"/api/conversations/{conversation}/turns", headers=headers, json={"message": question["text"]}
                )
                stream = await client.get(f"/api/conversations/{conversation}/stream", headers=headers)
                seconds = round(time.monotonic() - started, 1)
                events, exit_name, text = parse_stream(stream.text)
                tools = [(d.get("name"), d.get("status")) for n, d in events if n == "tool"]
                started_tools = [tool for tool, status in tools if status == "start"]
                outside = sorted({tool for tool in started_tools if tool not in ("load_skill", *arm.tools)})
                tool_errors = failures.take()
                run_body = read_run_body(state / "weaver.sqlite3", conversation)
                site = failure_site(run_body)
                record = {
                    "question_id": question["id"],
                    "arm": arm_name,
                    "run": run_index,
                    "live": live,
                    "posted": posted.status_code,
                    "exit": exit_name,
                    "tools": tools,
                    "tool_calls": len(started_tools),
                    "outside_arm": outside,
                    "tool_errors": tool_errors,
                    "run_body": run_body,
                    "site": site,
                    "seconds": seconds,
                    "cost_usd": round(meter.spent_usd - spent_before, 6),
                    "text": text,
                }
                records.append(record)
                path = out_dir / arm_name / f"{question['id']}-r{run_index}.json"
                path.parent.mkdir(parents=True, exist_ok=True)
                path.write_text(json.dumps(record, indent=2), encoding="utf-8")
                print(
                    f"{arm_name} {number}/{len(questions)} {question['id']}: {exit_name}, "
                    f"{len(started_tools)} tools, {seconds}s, ${record['cost_usd']:.4f} "
                    f"(total ${meter.spent_usd:.4f}){' OUTSIDE ' + str(outside) if outside else ''}"
                    f"{' TOOL ERRORS ' + str(tool_errors) if tool_errors else ''}"
                    f"{' SITE ' + site if site else ''}",
                    flush=True,
                )
                if tool_errors and live:
                    print(f"STOP tool errors in {question['id']}: {tool_errors}", flush=True)
                    break
    finally:
        logging.getLogger("weaver.retrieval.tools").removeHandler(failures)
        release_library(runtime)
        await runtime.close()
    return records


def _install_meter(meter: SpendMeter) -> None:
    """Count every live model call's usage on the meter."""
    from weaver.model_layer.deepseek import DeepSeekProvider

    normalize = DeepSeekProvider._normalize_usage

    def metered(raw):
        usage = normalize(raw)
        meter.charge(usage.cache_hit_tokens or 0, usage.cache_miss_tokens or 0, usage.output_tokens or 0)
        return usage

    DeepSeekProvider._normalize_usage = staticmethod(metered)


async def main(argv: list[str]) -> int:
    parser = argparse.ArgumentParser(description=__doc__.split("\n\n")[0])
    parser.add_argument("--questions", type=Path, required=True)
    parser.add_argument("--out", type=Path, required=True)
    parser.add_argument("--arm", action="append", choices=["A", "B", "C", "D"], required=True)
    parser.add_argument("--only", action="append", default=[])
    parser.add_argument("--run", type=int, default=1)
    parser.add_argument("--live", action="store_true")
    parser.add_argument("--cap", type=float, default=5.0)
    parser.add_argument("--spent", type=float, default=0.0, help="live spend already used by earlier batches")
    args = parser.parse_args(argv)

    from weaver.config import load_startup_config

    load_startup_config()
    if args.live and not os.environ.get("DEEPSEEK_KEY"):
        print("ERROR live runs need DEEPSEEK_KEY")
        return 2
    questions = json.loads(args.questions.read_text(encoding="utf-8"))["questions"]
    if args.only:
        questions = [q for q in questions if q["id"] in set(args.only)]
    meter = SpendMeter(cap_usd=args.cap, spent_usd=args.spent)
    if args.live:
        _install_meter(meter)
    for arm_name in args.arm:
        await run_arm(arm_name, questions, live=args.live, out_dir=args.out, run_index=args.run, meter=meter)
    summary = {"spent_usd": round(meter.spent_usd, 6), "calls": meter.calls, "tokens": meter.tokens}
    print(json.dumps(summary), flush=True)
    return 0


if __name__ == "__main__":
    sys.exit(asyncio.run(main(sys.argv[1:])))
