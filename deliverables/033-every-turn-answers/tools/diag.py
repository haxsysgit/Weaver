"""Plan 033: summarise diagnosis or regression runs (counts only, no text).

    uv run python deliverables/033-every-turn-answers/tools/diag.py RUN_DIR RUN [RUN ...]

Example: diag.py .weaver/evaluation/plan033/runs 4 5
An answer has "no answer" when it did not complete or its text is empty.
It was "rescued" when it completed with a recorded site (the gap answer).
"""

from __future__ import annotations

import json
import sys
from collections import Counter
from pathlib import Path


def main(argv: list[str]) -> int:
    root, runs = Path(argv[0]), {int(r) for r in argv[1:]}
    counts: Counter = Counter()
    failed_sites: Counter = Counter()
    rescued_sites: Counter = Counter()
    cost = 0.0
    no_body = 0
    for path in sorted(root.glob("[ABCD]/*.json")):
        record = json.loads(path.read_text(encoding="utf-8"))
        if record["run"] not in runs:
            continue
        arm = record["arm"]
        counts[arm, "answers"] += 1
        cost += record["cost_usd"]
        site = record.get("site", "")
        none = record["exit"] != "completed" or not record["text"].strip()
        rescued = not none and bool(site)
        counts[arm, "none"] += none
        counts[arm, "rescued"] += rescued
        if none:
            failed_sites[site or "(no site recorded)"] += 1
            no_body += not record.get("run_body")
        if rescued:
            rescued_sites[site] += 1
    for arm in "ABCD":
        if counts[arm, "answers"]:
            print(
                f"{arm}: {counts[arm, 'answers']} answers, {counts[arm, 'none']} with no answer, "
                f"{counts[arm, 'rescued']} rescued by the gap answer"
            )
    total = sum(counts[a, "answers"] for a in "ABCD")
    print(
        f"total: {total} answers, {sum(counts[a, 'none'] for a in 'ABCD')} with no answer, "
        f"{sum(counts[a, 'rescued'] for a in 'ABCD')} rescued"
    )
    print("no-answer sites:", dict(failed_sites.most_common()))
    print("rescued sites:", dict(rescued_sites.most_common()))
    protocol = sum(n for s, n in failed_sites.items() if s.startswith("protocol_"))
    print(f"no-answer turns at a protocol check: {protocol}")
    print(f"no-answer turns with no run body: {no_body}")
    print(f"cost ${cost:.4f}")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
