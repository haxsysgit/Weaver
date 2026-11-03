"""Plan 032: the retrieval-verdict harness keeps its spend cap and its
blind judging exact."""

from __future__ import annotations

import importlib.util
import sys
from pathlib import Path

import pytest

_SPEC = importlib.util.spec_from_file_location(
    "retrieval_verdict", Path(__file__).resolve().parents[1] / "scripts" / "retrieval_verdict.py"
)
harness = importlib.util.module_from_spec(_SPEC)
sys.modules["retrieval_verdict"] = harness  # dataclasses look the module up
_SPEC.loader.exec_module(harness)


def test_the_meter_prices_tokens_and_refuses_past_the_cap() -> None:
    meter = harness.SpendMeter(cap_usd=0.10)
    cost = meter.charge(hit=1_000_000, miss=100_000, out=10_000)
    assert cost == pytest.approx(0.006 + 0.03 + 0.012)
    assert meter.can_start(reserve_usd=0.05) is True
    meter.charge(hit=0, miss=0, out=10_000)  # +0.012 -> 0.060
    assert meter.can_start(reserve_usd=0.05) is False  # 0.060 + 0.05 > 0.10


def test_earlier_spend_counts_against_the_cap() -> None:
    meter = harness.SpendMeter(cap_usd=5.0, spent_usd=4.97)
    assert meter.can_start() is False


def _records():
    return [
        {"question_id": q, "arm": arm, "run": 1, "text": f"{arm}:{q}", "tools": [("find_text", "start")]}
        for q in ("n01", "n02", "r04")
        for arm in "ABCD"
    ]


def test_the_blind_list_hides_the_arm_and_the_tools() -> None:
    blind, key = harness.blind_shuffle(_records(), seed=32)
    assert len(blind) == len(key) == 12
    for item in blind:
        assert set(item) == {"blind_id", "question_id", "text"}
    # Shuffled: the order is not the arm-by-arm order it came in.
    assert [item["text"] for item in blind] != [r["text"] for r in _records()]


def test_the_join_puts_every_arm_back_exactly() -> None:
    records = _records()
    blind, key = harness.blind_shuffle(records, seed=32)
    judgements = [{"blind_id": b["blind_id"], "question_id": b["question_id"], "echo": b["text"]} for b in blind]
    joined = harness.join_arms(judgements, key)
    assert sorted((j["arm"], j["question_id"]) for j in joined) == sorted(
        (r["arm"], r["question_id"]) for r in records
    )
    assert all(j["echo"] == f"{j['arm']}:{j['question_id']}" for j in joined)


def test_the_join_refuses_a_missing_or_mismatched_judgement() -> None:
    blind, key = harness.blind_shuffle(_records(), seed=32)
    judgements = [{"blind_id": b["blind_id"], "question_id": b["question_id"]} for b in blind]
    with pytest.raises(ValueError):
        harness.join_arms(judgements[:-1], key)
    judgements[0] = {**judgements[0], "question_id": "zzz"}
    with pytest.raises(ValueError):
        harness.join_arms(judgements, key)


def test_the_stream_parser_reads_the_final_answer() -> None:
    text = (
        'event: tool\ndata: {"name": "find_text", "status": "start"}\n\n'
        'event: completed\ndata: {"text": "Chapter 3171."}\n\n'
    )
    events, exit_name, answer = harness.parse_stream(text)
    assert exit_name == "completed" and answer == "Chapter 3171."
    assert events[0] == ("tool", {"name": "find_text", "status": "start"})


def test_tool_failures_are_counted_from_the_reading_tools_log() -> None:
    import logging

    counter = harness.ToolFailureCounter()
    log = logging.getLogger("weaver.retrieval.tools")
    log.addHandler(counter)
    try:
        log.warning("semantic_search failed: %s", "Storage folder is already accessed")
        log.warning("find_text failed for %r", "x")
        log.info("read_chapters ok")
        assert counter.take() == ["semantic_search", "find_text"]
        assert counter.take() == []  # taking resets the count
    finally:
        log.removeHandler(counter)


class _Client:
    closed = False

    def close(self) -> None:
        self.closed = True


class _Library:
    def __init__(self) -> None:
        self.client = _Client()


class _Runtime:
    def __init__(self, library) -> None:
        self.library = library


def test_releasing_the_library_closes_the_search_index() -> None:
    library = _Library()
    client = library.client
    harness.release_library(_Runtime(library))
    assert client.closed is True and library.client is None
    harness.release_library(_Runtime(None))  # no library: nothing to do
    harness.release_library(_Runtime(library))  # already released: no error
