"""Notebook validation for Weaver's private story notebook.

The notebook is the source-grounded knowledge store under
.weaver/knowledge/shadow-slave/: reading records (statements per
chapter), entity pages, connections graph, chapter notes, progress
file. This package validates it the way the original
scripts/check_story_notebook.py did, split into one module per
concern with an orchestrator that separates global passes (fast,
metadata-only, always run) from scoped passes (bounded by --through).

Diagnostics contain paths and rule names only. They never print
notebook statements or novel prose.
"""

from __future__ import annotations

from .context import NotebookContext
from .orchestrator import check_notebook, run_checks
from .report import CheckIssue, CheckResult

__all__ = [
    "CheckIssue",
    "CheckResult",
    "NotebookContext",
    "check_notebook",
    "run_checks",
]
