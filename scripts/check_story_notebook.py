#!/usr/bin/env python3
"""Shim: the checker moved into src/weaver/notebook/. This script keeps
the reading-run workflow (`python scripts/check_story_notebook.py --root
... --through N`) and older tooling working unchanged.

The tests and reading runs call this with plain `python3` (not `uv
run`), so the shim puts src/ on sys.path itself.
"""

from __future__ import annotations

import sys
from pathlib import Path

_REPO_ROOT = Path(__file__).resolve().parents[1]
_SRC = _REPO_ROOT / "src"
if str(_SRC) not in sys.path:
    sys.path.insert(0, str(_SRC))

from weaver.notebook.cli import main  # noqa: E402

if __name__ == "__main__":
    sys.exit(main())
