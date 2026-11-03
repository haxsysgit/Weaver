"""Shared by the Plan 033 patch scripts: apply exact edits, all or nothing.

Each edit's old text must occur exactly once in its file, and each new
file must not exist yet. If any check fails, nothing is written and the
failing edit is printed. Line endings of edited files are kept.
"""

from __future__ import annotations

import sys
from pathlib import Path


def apply(edits: list[tuple[str, str, str]], new_files: dict[str, str]) -> int:
    root = Path.cwd()
    if not (root / "src" / "weaver").is_dir():
        print("ERROR run this from the repository root")
        return 2
    texts: dict[str, str] = {}
    crlf: set[str] = set()
    for number, (path, old, new) in enumerate(edits, start=1):
        if path not in texts:
            raw = (root / path).read_bytes().decode("utf-8")
            if "\r\n" in raw:
                crlf.add(path)
            texts[path] = raw.replace("\r\n", "\n")
        count = texts[path].count(old)
        if count != 1:
            print(f"ERROR edit {number} in {path}: expected the old text once, found {count}.")
            print("The old text starts with:")
            print(old[:300])
            print("Nothing was written.")
            return 1
        texts[path] = texts[path].replace(old, new)
    for path in new_files:
        if (root / path).exists():
            print(f"ERROR {path} already exists. Nothing was written.")
            return 1
    for path, text in texts.items():
        if path in crlf:
            text = text.replace("\n", "\r\n")
        (root / path).write_bytes(text.encode("utf-8"))
        print("edited ", path)
    for path, text in new_files.items():
        (root / path).write_bytes(text.encode("utf-8"))
        print("created", path)
    print(f"OK {len(edits)} edits, {len(new_files)} new files")
    return 0


def run(edits: list[tuple[str, str, str]], new_files: dict[str, str]) -> None:
    sys.exit(apply(edits, new_files))
