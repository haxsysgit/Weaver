"""Plan 033: the regression check set's gate (counts only, no text).

    uv run python deliverables/033-every-turn-answers/tools/check_summary.py

Reads .weaver/evaluation/plan033/q032/{PREFIX}judgements.json and
{PREFIX}key.json; PREFIX defaults to x_ (round 1), round 2 uses x2_.
Gate: at most 1 of the 9 scene answers (r15, r35, n18) presents another
scene as the answer (its note contains "substitutes-scene"), and at least
6 of the 9 trial answers (t1, t2, t3) are correct.
Exit codes: 0 pass, 1 not finished, 2 fail.
"""

from __future__ import annotations

import json
import os
import sys
from collections import Counter
from pathlib import Path

ROOT = Path(".weaver/evaluation/plan033/q032")
PREFIX = os.environ.get("PREFIX", "x_")
SCENES = ("r15", "r35", "n18")
TRIALS = ("t1", "t2", "t3")


def main() -> int:
    judged = json.loads((ROOT / f"{PREFIX}judgements.json").read_text(encoding="utf-8"))
    key = json.loads((ROOT / f"{PREFIX}key.json").read_text(encoding="utf-8"))
    if set(judged) != set(key):
        print(f"ERROR judged {len(judged)} of {len(key)}; finish judging first")
        return 1
    verdicts: Counter = Counter()
    substitutes = 0
    trials_correct = 0
    for item in judged.values():
        qid = item["question_id"]
        verdicts[qid, item["verdict"]] += 1
        if qid in SCENES and "substitutes-scene" in item["note"]:
            substitutes += 1
        if qid in TRIALS and item["verdict"] == "correct":
            trials_correct += 1
    for qid in (*SCENES, *TRIALS):
        row = {v: verdicts[qid, v] for v in ("correct", "partial", "wrong", "declined", "none") if verdicts[qid, v]}
        print(qid, row)
    print(f"answers that present another scene: {substitutes} of 9 (gate: at most 1)")
    print(f"trial answers correct: {trials_correct} of 9 (gate: at least 6)")
    passed = substitutes <= 1 and trials_correct >= 6
    print("GATE", "pass" if passed else "fail")
    return 0 if passed else 2


if __name__ == "__main__":
    sys.exit(main())
