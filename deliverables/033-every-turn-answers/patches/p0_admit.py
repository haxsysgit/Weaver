"""Plan 033 patch 0: record the owner's admission.

Run from the repository root, with today's date (YYYY-MM-DD):

    uv run python deliverables/033-every-turn-answers/patches/p0_admit.py 2026-11-04

All or nothing: every old text must match exactly once.
"""

from __future__ import annotations

import re
import sys

if len(sys.argv) != 2 or not re.fullmatch(r"\d{4}-\d{2}-\d{2}", sys.argv[1]):
    print("ERROR give the date as YYYY-MM-DD")
    sys.exit(2)
DATE = sys.argv[1]

EDITS: list[tuple[str, str, str]] = [
    (
        "plans/033-every-turn-answers.md",
        "- **State:** drafted (awaiting owner admission).",
        f'- **State:** admitted {DATE} (owner: "I admit Plan 033 as drafted").',
    ),
    (
        "deliverables/033-every-turn-answers/learning.md",
        "**Unadmitted.**",
        (
            f"**Admitted {DATE}.** The owner admitted the plan as drafted, which "
            "confirms owner directions 1 to 7, including the gap answer's wording "
            "and the decision rule."
        ),
    ),
    (
        "deliverables/033-every-turn-answers/README.md",
        "| `learning.md` | Owner-confirmed decisions | Unadmitted |",
        f"| `learning.md` | Owner-confirmed decisions | Admitted {DATE} |",
    ),
    (
        "plans/README.md",
        "| [033 - Every turn answers, then the vector test](033-every-turn-answers.md) | Drafted 2026-11-03 |",
        f"| [033 - Every turn answers, then the vector test](033-every-turn-answers.md) | Admitted {DATE} |",
    ),
]

if __name__ == "__main__":
    from _apply import run

    run(EDITS, {})
