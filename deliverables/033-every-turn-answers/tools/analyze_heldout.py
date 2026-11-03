"""Plan 033: the held-out verdict (counts only, no question or answer text).

    uv run python deliverables/033-every-turn-answers/tools/analyze_heldout.py

Reads, under .weaver/evaluation/plan033/: questions.json, h_key.json,
h_judgements.json, h_quote_checks.json, and heldout/{A,D}/*.json.
Writes h_joined.json. Prints the tables and the fixed decision rule
(Plan 033 owner direction 6): extend vector search when arm A's mean
correct per run beats arm D's by at least 2.0 of 15, A's pass^3 is at
least D's, and A has no more quote misses than D; otherwise retire it.
Exit codes: 0 done, 1 incomplete judging.
"""

from __future__ import annotations

import importlib.util
import json
import statistics
import sys
from collections import defaultdict
from pathlib import Path

ROOT = Path(".weaver/evaluation/plan033")
RUNS = 3
ARMS = "AD"


def _harness():
    spec = importlib.util.spec_from_file_location("retrieval_verdict", "scripts/retrieval_verdict.py")
    module = importlib.util.module_from_spec(spec)
    sys.modules["retrieval_verdict"] = module
    spec.loader.exec_module(module)
    return module


def load(name: str):
    return json.loads((ROOT / name).read_text(encoding="utf-8"))


def main() -> int:
    questions = {q["id"]: q for q in load("questions.json")["questions"]}
    key = load("h_key.json")
    rows = _harness().join_arms(list(load("h_judgements.json").values()), key)
    (ROOT / "h_joined.json").write_text(json.dumps(rows, indent=1), encoding="utf-8")
    verdicts: dict[str, dict[str, dict[int, str]]] = defaultdict(lambda: defaultdict(dict))
    for row in rows:
        verdicts[row["question_id"]][row["arm"]][row["run"]] = row["verdict"]
    for qid in questions:
        for arm in ARMS:
            if len(verdicts[qid][arm]) != RUNS:
                print(f"ERROR {qid} arm {arm} has {len(verdicts[qid][arm])} judged runs, expected {RUNS}")
                return 1

    def mean(qids, arm):
        return sum(sum(v == "correct" for v in verdicts[q][arm].values()) / RUNS for q in qids)

    def pass3(qids, arm):
        return sum(all(v == "correct" for v in verdicts[q][arm].values()) for q in qids)

    every = sorted(questions)
    early = [q for q in every if max(questions[q]["expected_chapters"]) <= 1000]
    later = [q for q in every if q not in early]
    print(f"{'set':12} {'n':>3} {'mean A':>7} {'mean D':>7} {'p^3 A':>6} {'p^3 D':>6}")
    for name, qids in (("all", every), ("1-1000", early), ("1001-3127", later)):
        print(
            f"{name:12} {len(qids):3} {mean(qids, 'A'):7.2f} {mean(qids, 'D'):7.2f} "
            f"{pass3(qids, 'A'):6} {pass3(qids, 'D'):6}"
        )

    print(f"\nverdict counts ({len(every) * RUNS} answers per arm):")
    for arm in ARMS:
        counts: dict[str, int] = defaultdict(int)
        for qid in every:
            for verdict in verdicts[qid][arm].values():
                counts[verdict] += 1
        print(arm, dict(sorted(counts.items())))

    print("\nper-answer cost and speed:")
    for arm in ARMS:
        paths = sorted((ROOT / "heldout" / arm).glob("*.json"))
        records = [json.loads(p.read_text(encoding="utf-8")) for p in paths]
        records = [r for r in records if r.get("live")]
        if not records:
            print(arm, "no live records")
            continue
        rescued = sum(1 for r in records if r["exit"] == "completed" and r.get("site"))
        none = sum(1 for r in records if r["exit"] != "completed" or not r["text"].strip())
        print(
            f"{arm} n={len(records)} mean ${statistics.mean(r['cost_usd'] for r in records):.4f} "
            f"mean {statistics.mean(r['seconds'] for r in records):.1f}s "
            f"tools {statistics.mean(r['tool_calls'] for r in records):.2f} "
            f"no answer {none} rescued {rescued} spend ${sum(r['cost_usd'] for r in records):.4f}"
        )

    quotes = {arm: 0 for arm in ARMS}
    misses = {arm: 0 for arm in ARMS}
    for check in load("h_quote_checks.json"):
        arm = key[check["blind_id"]]["arm"]
        quotes[arm] += 1
        misses[arm] += not check["in_cited"]
    print(
        f"\nquotes: A {quotes['A']} ({misses['A']} not in a cited chapter), "
        f"D {quotes['D']} ({misses['D']} not in a cited chapter)"
    )

    print("\nper question (runs 1-3: c p w d n), arm A then arm D:")
    for qid in every:
        band = "early" if qid in early else "later"
        line = "  ".join("".join(verdicts[qid][arm][r][0] for r in (1, 2, 3)) for arm in ARMS)
        print(f"{qid} {band:5} {line}")

    gap = mean(every, "A") - mean(every, "D")
    extend = gap >= 2.0 and pass3(every, "A") >= pass3(every, "D") and misses["A"] <= misses["D"]
    print(f"\nA minus D, mean correct per run: {gap:+.2f} of {len(every)} (bar +2.00)")
    print("RULE:", "extend vector search" if extend else "retire vector search")
    return 0


if __name__ == "__main__":
    sys.exit(main())
