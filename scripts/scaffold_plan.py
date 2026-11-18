#!/usr/bin/env python3
"""Scaffold a numbered plan, or an idea in discussion.

Usage:
    uv run python scripts/scaffold_plan.py NNN slug
    uv run python scripts/scaffold_plan.py NNN.M slug
    uv run python scripts/scaffold_plan.py NNN slug --discussion

A drafted plan is plans/NNN-slug.md from plans/_TEMPLATE.md plus the six
deliverable files (plan.md, README.md, learning.md, results.md,
review-ledger.md, decision.md).

--discussion writes plans/discussion/NNN-slug.md instead: a pre-draft idea
with no deliverables, nothing runs from it. It creates the folder when
missing and never touches plans/README.md (the index is edited by hand at
gate moments). Both modes refuse to overwrite existing paths.
"""

from __future__ import annotations

import re
import sys
import tempfile
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

# Decimal plans (033.5, 033.7) insert work between fixed numbers, so a
# number may carry one dot and digits after the three-digit parent.
NUMBER_RE = re.compile(r"^\d{3}(?:\.\d+)?$")
SLUG_RE = re.compile(r"^[a-z0-9]+(-[a-z0-9]+)*$")

PLAN_POINTER = """# Plan {name} Pointer

The canonical plan is:

[`plans/{name}.md`](../../plans/{name}.md)
"""

DELIVERABLES_README = """# Plan {name} deliverables

| File | Purpose | Current state |
| --- | --- | --- |
| `plan.md` | Pointer to the canonical implementation plan | Current |
| `learning.md` | Owner-confirmed decisions | Unadmitted |
| `results.md` | Deterministic observations and commands | Not started |
| `review-ledger.md` | Independent findings, repairs, and rechecks | Not started |
| `decision.md` | Owner's final accept or reject record | Pending |

No novel prose, chats, credentials, private receipts, generated knowledge,
or raw model reasoning belongs here.
"""


def _stub(title: str, state: str) -> str:
    return f"# {title}\n\n{state}\n"


DISCUSSION_STUB = """# Plan {number}: {{Title}}

Status: idea. Provisional number; nothing runs from this doc.
Opened: {opened}
Depends on (guess): none

## What it is

## The owner's direction so far

## Open questions

## Candidate directions

## What would have to be true to close it
"""


def discuss(number: str, slug: str, root: Path = ROOT) -> list[Path]:
    """Create plans/discussion/NNN-slug.md. Raises on bad input or a clash."""
    if not NUMBER_RE.match(number):
        raise ValueError(f"plan number must be 3 digits, got {number!r}")
    if not SLUG_RE.match(slug):
        raise ValueError(f"slug must be lowercase-hyphenated, got {slug!r}")
    folder = root / "plans" / "discussion"
    folder.mkdir(parents=True, exist_ok=True)
    path = folder / f"{number}-{slug}.md"
    if path.exists():
        raise FileExistsError(f"{path.name} already exists")
    path.write_text(
        DISCUSSION_STUB.format(number=number, opened=date.today().isoformat())
    )
    return [path]


def scaffold(number: str, slug: str, root: Path = ROOT) -> list[Path]:
    """Create the plan doc and deliverable files. Raises on bad input."""
    if not NUMBER_RE.match(number):
        raise ValueError(f"plan number must be 3 digits, got {number!r}")
    if not SLUG_RE.match(slug):
        raise ValueError(f"slug must be lowercase-hyphenated, got {slug!r}")
    name = f"{number}-{slug}"
    plan_path = root / "plans" / f"{name}.md"
    deliv_dir = root / "deliverables" / name
    if plan_path.exists() or deliv_dir.exists():
        raise FileExistsError(f"{name} already exists")
    template = root / "plans" / "_TEMPLATE.md"
    if not template.exists():
        raise FileNotFoundError(f"missing template: {template}")

    plan_path.write_text(template.read_text().replace("{{NNN}}", number))
    deliv_dir.mkdir(parents=True)
    (deliv_dir / "plan.md").write_text(PLAN_POINTER.format(name=name))
    (deliv_dir / "README.md").write_text(DELIVERABLES_README.format(name=name))
    (deliv_dir / "learning.md").write_text(_stub("Learning Note", "## Gate status\n\n**Unadmitted.**"))
    (deliv_dir / "results.md").write_text(_stub("Results", "## Status\n\nNot started."))
    (deliv_dir / "review-ledger.md").write_text(_stub("Review Ledger", "## Status\n\nNot started."))
    (deliv_dir / "decision.md").write_text(_stub("Owner Decision", "## Status\n\n**Pending owner decision.**"))
    return [plan_path, deliv_dir]


def main(argv: list[str]) -> int:
    discussion = "--discussion" in argv
    args = [arg for arg in argv if not arg.startswith("--")]
    if len(args) != 2:
        print(__doc__)
        return 2
    try:
        created = (
            discuss(args[0], args[1]) if discussion else scaffold(args[0], args[1])
        )
    except (ValueError, FileExistsError, FileNotFoundError) as error:
        print(f"error: {error}")
        return 1
    for path in created:
        print(f"created {path.relative_to(ROOT)}")
    return 0


def demo() -> None:
    """Self-check: scaffolding lands all six files; bad input is refused."""
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        (root / "plans").mkdir()
        (root / "plans" / "_TEMPLATE.md").write_text("# Plan {{NNN}}: X\n\nbody\n")

        created = scaffold("020", "demo-plan", root=root)
        assert (root / "plans" / "020-demo-plan.md").read_text() == "# Plan 020: X\n\nbody\n"
        decimal = scaffold("020.5", "demo-half", root=root)
        assert decimal[0].name == "020.5-demo-half.md"
        assert (root / "deliverables" / "020.5-demo-half" / "results.md").exists()
        deliv = root / "deliverables" / "020-demo-plan"
        for expected in ("plan.md", "README.md", "learning.md", "results.md", "review-ledger.md", "decision.md"):
            assert (deliv / expected).exists(), f"missing {expected}"
        assert len(created) == 2

        try:
            scaffold("020", "demo-plan", root=root)
            raise AssertionError("scaffold must refuse existing names")
        except FileExistsError:
            pass
        for bad in (("19", "demo"), ("019", "Bad_Slug"), ("01a", "demo")):
            try:
                scaffold(*bad, root=root)
                raise AssertionError(f"scaffold must refuse {bad}")
            except ValueError:
                pass

        idea = discuss("040", "demo-idea", root=root)
        assert idea[0] == root / "plans" / "discussion" / "040-demo-idea.md"
        assert "Status: idea" in idea[0].read_text()
        assert not (root / "deliverables" / "040-demo-idea").exists()
        try:
            discuss("040", "demo-idea", root=root)
            raise AssertionError("discuss must refuse existing names")
        except FileExistsError:
            pass
        for bad in (("40", "demo"), ("040", "Bad_Slug")):
            try:
                discuss(*bad, root=root)
                raise AssertionError(f"discuss must refuse {bad}")
            except ValueError:
                pass
    print("demo ok")


if __name__ == "__main__":
    if "--demo" in sys.argv:
        demo()
    else:
        sys.exit(main(sys.argv[1:]))
