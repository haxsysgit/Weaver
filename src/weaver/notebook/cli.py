"""CLI for `weaver notebook check`."""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

from .orchestrator import check_notebook


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        prog="weaver notebook check",
        description="Validate Weaver's private story notebook.",
    )
    parser.add_argument("--root", type=Path, required=True, help="private notebook root")
    parser.add_argument(
        "--through",
        type=int,
        default=100,
        help=f"maximum chapter to check deeply (1-3200); global structural passes always run",
    )
    parser.add_argument(
        "--novel-dir",
        type=Path,
        help="private novel directory, useful for synthetic tests",
    )
    return parser


def main(argv: list[str] | None = None) -> int:
    args = build_parser().parse_args(argv)
    result = check_notebook(args.root, through=args.through, novel_dir=args.novel_dir)
    prose_issue = result.has_message("copied source prose")
    warnings = result.warnings
    if result.ok:
        print("Notebook check: PASS")
        for warning in result.warnings:
            print(f"- WARNING: {warning}")
    else:
        print(f"Notebook check: FAIL ({len(result.issues)} problems)")
        for issue in result.issues:
            if prose_issue and "copied source prose" not in issue.message:
                continue
            if prose_issue:
                print("- copied source prose detected")
                break
            print(f"- {issue}")
    if not prose_issue:
        print(f"chapters: {result.counts.get('chapters', 0)}")
        print(f"entries: {result.counts.get('entries', 0)}")
        print(f"connections: {result.counts.get('connections', 0)}")
        print(
            "counts: "
            f"chapters={result.counts.get('chapters', 0)} "
            f"statements={result.counts.get('entries', 0)} "
            f"connections={result.counts.get('connections', 0)}"
        )
    print(f"problems: {len(result.issues)}")
    return 0 if result.ok else 1


if __name__ == "__main__":
    sys.exit(main())
