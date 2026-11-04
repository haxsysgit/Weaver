"""Plan 033: the held-out verdict (counts only, no question or answer text).

    uv run python deliverables/033-every-turn-answers/tools/analyze_heldout.py

Reads, under .weaver/evaluation/plan033/: questions.json, {PREFIX}key.json,
{PREFIX}judgements.json, {PREFIX}quote_checks.json, and {DIR}/{arm}/*.json.
Writes {PREFIX}joined.json. Settings (environment): PREFIX (default h_),
DIR (default heldout), ARMS (default AD). Round 2: PREFIX=h2_ DIR=heldout2
ARMS=ADW.

The fixed decision rule (Plan 033 owner direction 6) compares two arms:
the first keeps what it adds when its mean correct per run beats the
second's by at least 2.0 of 15, its pass^3 is at least the second's, and
it has no more quote misses. Round 1 compares A with D (vector search).
Round 2 (direction 9) compares A with D (the hybrid search tool) and A
with W (does the meaning half earn its keep over the word half alone).
Exit codes: 0 done, 1 incomplete judging.
"""

from __future__ import annotations

import importlib.util
import json
import os
import statistics
import sys
from collections import defaultdict
from pathlib import Path

ROOT = Path(".weaver/evaluation/plan033")
RUNS = 3
PREFIX = os.environ.get("PREFIX", "h_")
DIR = os.environ.get("DIR", "heldout")
ARMS = os.environ.get("ARMS", "AD")


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
    key = load(f"{PREFIX}key.json")
    rows = _harness().join_arms(list(load(f"{PREFIX}judgements.json").values()), key)
    (ROOT / f"{PREFIX}joined.json").write_text(json.dumps(rows, indent=1), encoding="utf-8")
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
    header = "".join(f" {'mean ' + a:>7}" for a in ARMS) + "".join(f" {'p^3 ' + a:>6}" for a in ARMS)
    print(f"{'set':12} {'n':>3}{header}")
    for name, qids in (("all", every), ("1-1000", early), ("1001-3127", later)):
        cells = "".join(f" {mean(qids, a):7.2f}" for a in ARMS) + "".join(f" {pass3(qids, a):6}" for a in ARMS)
        print(f"{name:12} {len(qids):3}{cells}")

    print(f"\nverdict counts ({len(every) * RUNS} answers per arm):")
    for arm in ARMS:
        counts: dict[str, int] = defaultdict(int)
        for qid in every:
            for verdict in verdicts[qid][arm].values():
                counts[verdict] += 1
        print(arm, dict(sorted(counts.items())))

    print("\nper-answer cost and speed:")
    for arm in ARMS:
        paths = sorted((ROOT / DIR / arm).glob("*.json"))
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
    for check in load(f"{PREFIX}quote_checks.json"):
        arm = key[check["blind_id"]]["arm"]
        quotes[arm] += 1
        misses[arm] += not check["in_cited"]
    print("\nquotes: " + ", ".join(f"{a} {quotes[a]} ({misses[a]} not in a cited chapter)" for a in ARMS))

    print(f"\nper question (runs 1-3: c p w d n), arms {' then '.join(ARMS)}:")
    for qid in every:
        band = "early" if qid in early else "later"
        line = "  ".join("".join(verdicts[qid][arm][r][0] for r in (1, 2, 3)) for arm in ARMS)
        print(f"{qid} {band:5} {line}")

    def rule(first: str, second: str) -> bool:
        gap = mean(every, first) - mean(every, second)
        keep = gap >= 2.0 and pass3(every, first) >= pass3(every, second) and misses[first] <= misses[second]
        print(f"\n{first} minus {second}, mean correct per run: {gap:+.2f} of {len(every)} (bar +2.00)")
        return keep

    if "D" in ARMS:
        keep = rule("A", "D")
        if "W" in ARMS:
            print("RULE A vs D:", "keep the hybrid search tool" if keep else "the search tool does not earn its keep")
        else:
            print("RULE:", "extend vector search" if keep else "retire vector search")
    if "W" in ARMS:
        keep = rule("A", "W")
        print("RULE A vs W:", "keep the meaning half (vectors)" if keep else "retire the meaning half, keep word search")
    return 0


if __name__ == "__main__":
    sys.exit(main())
