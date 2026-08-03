"""Plan 012: notebook checker tests (synthetic story data only).

The checker validates the private story notebook under
.weaver/knowledge/shadow-slave/. These tests use fake novel chapters and
fake notebook records. No real story content appears here, and the checker
itself must never print private story text.
"""

from __future__ import annotations

import hashlib
import json
import os
import subprocess
import sys
from pathlib import Path

import pytest

CHECKER = Path(__file__).resolve().parents[1] / "scripts" / "check_story_notebook.py"

ALLOWED_KINDS = {
    "confirmed_fact",
    "character_belief",
    "interpretation",
    "theory",
    "conflict",
}


# ---------------------------------------------------------------------------
# Synthetic story builders
# ---------------------------------------------------------------------------

def chapter_line(chapter: int, line: int) -> str:
    return f"Synthetic story chapter {chapter} line {line} sentence."


def make_novel(repo_root: Path, chapters: int = 3) -> None:
    """Build fake novel chapters 1..chapters in the repo layout."""
    for c in range(1, chapters + 1):
        shard = repo_root / "novels" / "shadow-slave" / "0001-0100"
        shard.mkdir(parents=True, exist_ok=True)
        text = "\n".join(chapter_line(c, line) for line in range(1, 7))
        (shard / f"chapter-{c:04d}.txt").write_text(text, encoding="utf-8")


def chapter_file(repo_root: Path, chapter: int) -> Path:
    return repo_root / "novels" / "shadow-slave" / "0001-0100" / f"chapter-{chapter:04d}.txt"


def sha256_of(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def source_meta(repo_root: Path, chapter: int) -> dict:
    path = chapter_file(repo_root, chapter)
    return {
        "path": f"novels/shadow-slave/0001-0100/{path.name}",
        "sha256": sha256_of(path),
        "line_count": 6,
    }


def make_statement(
    statement_id: str,
    *,
    kind: str = "confirmed_fact",
    text: str = "A synthetic character exists in this chapter.",
    evidence: list[dict] | None = None,
    links: list[str] | None = None,
    first_known: int = 1,
    corrections: list[dict] | None = None,
) -> dict:
    return {
        "id": statement_id,
        "kind": kind,
        "statement": text,
        "evidence": (
            [{"chapter": 1, "location": {"line_start": 1, "line_end": 2}}]
            if evidence is None
            else evidence
        ),
        "links": links or [],
        "first_known_chapter": first_known,
        "later_corrections": corrections,
    }


def make_record(
    repo_root: Path,
    chapter: int,
    statements: list[dict],
    *,
    readers_ok: bool = True,
    reconciliation_ok: bool = True,
    review_ok: bool = True,
    source: dict | None = None,
) -> dict:
    return {
        "schema_version": 1,
        "chapter": chapter,
        "source": source if source is not None else source_meta(repo_root, chapter),
        "readers": (
            [
                {"role": "lead", "status": "complete", "independent": True},
                {"role": "plot_cause_checker", "status": "complete", "independent": True},
                {"role": "character_world_checker", "status": "complete", "independent": True},
            ]
            if readers_ok
            else [{"role": "lead", "status": "incomplete", "independent": False}]
        ),
        "reconciliation": (
            {"status": "complete", "lead_reopened_source": True}
            if reconciliation_ok
            else {"status": "pending", "lead_reopened_source": False}
        ),
        "review": ({"status": "checked"} if review_ok else {"status": "pending"}),
        "statements": statements,
    }


def write_record(root: Path, repo_root: Path, chapter: int, statements: list[dict], **kwargs) -> None:
    reading = root / "reading"
    reading.mkdir(parents=True, exist_ok=True)
    (reading / f"{chapter:04d}.json").write_text(
        json.dumps(make_record(repo_root, chapter, statements, **kwargs), indent=2),
        encoding="utf-8",
    )


def write_progress(root: Path, through: int, last: int, complete: bool = False) -> None:
    (root / "reading-progress.json").write_text(
        json.dumps(
            {
                "through": through,
                "last_fully_checked_chapter": last,
                "complete": complete,
            },
            indent=2,
        ),
        encoding="utf-8",
    )


def write_note(root: Path, chapter: int, statement_ids: list[str]) -> None:
    notes = root / "chapters"
    notes.mkdir(parents=True, exist_ok=True)
    body = [f"# Chapter {chapter:04d}", "", "Readable notes.", ""]
    body.append(f"<!-- notebook-record: chapter-{chapter:04d} -->")
    for sid in statement_ids:
        body.append(f"<!-- statement-id: {sid} -->")
    (notes / f"{chapter:04d}.md").write_text("\n".join(body) + "\n", encoding="utf-8")


def write_pages(root: Path, entity_ids: list[str]) -> None:
    for dirname in ("people", "places", "powers", "groups", "items"):
        page_dir = root / dirname
        page_dir.mkdir(parents=True, exist_ok=True)
    for entity_id in entity_ids:
        (root / "people" / f"{entity_id}.md").write_text(
            f"# {entity_id}\n\n<!-- entity-id: {entity_id} -->\n",
            encoding="utf-8",
        )


def write_connections(root: Path, connections: list[dict]) -> None:
    with (root / "connections.jsonl").open("a", encoding="utf-8") as fh:
        for conn in connections:
            fh.write(json.dumps(conn) + "\n")


def harden(root: Path) -> None:
    """Set the exact perms the checker requires: no group/world bits."""
    for dirpath, dirnames, filenames in os.walk(root):
        os.chmod(dirpath, 0o700)
        for name in dirnames:
            os.chmod(Path(dirpath) / name, 0o700)
        for name in filenames:
            os.chmod(Path(dirpath) / name, 0o600)


def run_checker(*args: str) -> subprocess.CompletedProcess:
    return subprocess.run(
        [sys.executable, str(CHECKER), *args],
        capture_output=True,
        text=True,
        check=False,
    )


# ---------------------------------------------------------------------------
# Fixtures
# ---------------------------------------------------------------------------

@pytest.fixture()
def repo(tmp_path: Path) -> Path:
    """A repo root containing the fake novel library."""
    root = tmp_path / "repo"
    make_novel(root, chapters=3)
    return root


@pytest.fixture()
def notebook(repo: Path) -> Path:
    """A clean 1-chapter notebook with valid perms, one entity, one connection."""
    root = repo / ".weaver" / "knowledge" / "shadow-slave"
    root.mkdir(parents=True)

    hero = make_statement(
        "statement:chapter-0001:hero",
        text="The hero character exists in this story.",
        links=["hero"],
    )
    write_record(root, repo, 1, [hero])
    write_note(root, 1, ["statement:chapter-0001:hero"])
    write_pages(root, ["hero"])
    write_connections(
        root,
        [
            {
                "id": "connection:hero-appears",
                "source": "hero",
                "target": "hero",
                "relation": "appears in",
                "first_known_chapter": 1,
                "evidence": [{"chapter": 1, "location": {"line_start": 1, "line_end": 2}}],
                "later_corrections": None,
            }
        ],
    )
    write_progress(root, 1, 1)
    harden(root)
    return root


def check(notebook: Path, through: int = 1) -> subprocess.CompletedProcess:
    return run_checker("--root", str(notebook), "--through", str(through))


# ---------------------------------------------------------------------------
# The nine rejection classes
# ---------------------------------------------------------------------------

def test_clean_notebook_passes(notebook: Path) -> None:
    result = check(notebook)
    assert result.returncode == 0, result.stdout + result.stderr
    assert "PASS" in result.stdout


def test_statement_with_no_supporting_evidence(notebook: Path) -> None:
    bad = make_statement("statement:chapter-0001:bad", evidence=[])
    write_record(notebook, repo_of(notebook), 1, [bad])
    result = check(notebook)
    assert result.returncode == 1
    assert "no supporting evidence" in result.stdout


def repo_of(notebook: Path) -> Path:
    # .weaver/knowledge/shadow-slave -> repo root
    return notebook.parents[2]


def test_evidence_location_that_does_not_exist(notebook: Path) -> None:
    bad = make_statement(
        "statement:chapter-0001:bad",
        evidence=[{"chapter": 1, "location": {"line_start": 500, "line_end": 600}}],
    )
    write_record(notebook, repo_of(notebook), 1, [bad])
    result = check(notebook)
    assert result.returncode == 1
    assert "location does not exist" in result.stdout


def test_duplicate_ids(notebook: Path) -> None:
    dup = make_statement("statement:chapter-0001:hero", text="A duplicate record.")
    write_record(notebook, repo_of(notebook), 1, [dup, dup.copy()])
    result = check(notebook)
    assert result.returncode == 1
    assert "duplicate id" in result.stdout


def test_broken_links(notebook: Path) -> None:
    bad = make_statement(
        "statement:chapter-0001:bad",
        text="Links to a missing entity.",
        links=["ghost-id"],
    )
    write_record(notebook, repo_of(notebook), 1, [bad])
    result = check(notebook)
    assert result.returncode == 1
    assert "unknown linked id" in result.stdout


def test_broken_connection_references(notebook: Path) -> None:
    write_connections(
        notebook,
        [
            {
                "id": "connection:bad",
                "source": "ghost",
                "target": "hero",
                "relation": "appears in",
                "first_known_chapter": 1,
                "evidence": [{"chapter": 1, "location": {"line_start": 1, "line_end": 2}}],
                "later_corrections": None,
            }
        ],
    )
    result = check(notebook)
    assert result.returncode == 1
    assert "unknown connection source" in result.stdout


def test_missing_chapter_gap(repo: Path) -> None:
    root = repo / ".weaver" / "knowledge" / "shadow-slave"
    root.mkdir(parents=True)
    write_record(root, repo, 2, [make_statement("statement:chapter-0002:side")])
    write_record(root, repo, 3, [make_statement("statement:chapter-0003:mentor")])
    write_note(root, 2, ["statement:chapter-0002:side"])
    write_note(root, 3, ["statement:chapter-0003:mentor"])
    write_pages(root, ["side", "mentor"])
    write_progress(root, 3, 3)
    harden(root)
    result = check(root, through=3)
    assert result.returncode == 1
    assert "missing chapter 1" in result.stdout


def test_chapter_saved_out_of_order(notebook: Path) -> None:
    write_record(notebook, repo_of(notebook), 3, [make_statement("statement:chapter-0003:far")])
    result = check(notebook, through=1)
    assert result.returncode == 1
    assert "outside requested range" in result.stdout


def test_changed_original_chapter_file(notebook: Path) -> None:
    chapter1 = chapter_file(repo_of(notebook), 1)
    chapter1.write_text("TAMPERED\n", encoding="utf-8")
    result = check(notebook)
    assert result.returncode == 1
    assert "source hash changed" in result.stdout


def test_copied_novel_prose_in_json(notebook: Path) -> None:
    copied = chapter_line(1, 2)
    stolen = make_statement(
        "statement:chapter-0001:thief",
        text=f"The record pastes the text: {copied}",
    )
    write_record(notebook, repo_of(notebook), 1, [stolen])
    result = check(notebook)
    assert result.returncode == 1
    assert "copied source prose" in result.stdout


def test_copied_novel_prose_in_connections(notebook: Path) -> None:
    copied = chapter_line(1, 1)
    write_connections(
        notebook,
        [
            {
                "id": "connection:paste",
                "source": "hero",
                "target": "hero",
                "relation": copied,
                "first_known_chapter": 1,
                "evidence": [{"chapter": 1, "location": {"line_start": 1, "line_end": 2}}],
                "later_corrections": None,
            }
        ],
    )
    result = check(notebook)
    assert result.returncode == 1
    assert "copied source prose" in result.stdout


def test_short_novel_lines_allowed_in_chapter_notes(notebook: Path) -> None:
    # The plan allows short exact lines inside private readable chapter notes.
    copied = chapter_line(1, 3)
    (notebook / "chapters" / "0001.md").write_text(
        f"# Chapter 0001\n\nThe novel says: {copied}\n<!-- notebook-record: chapter-0001 -->\n<!-- statement-id: statement:chapter-0001:hero -->\n",
        encoding="utf-8",
    )
    result = check(notebook)
    assert result.returncode == 0


def test_unsafe_permissions(notebook: Path) -> None:
    (notebook / "reading" / "0001.json").chmod(0o644)
    result = check(notebook)
    assert result.returncode == 1
    assert "unsafe permissions" in result.stdout


def test_private_knowledge_tracked_in_git(repo: Path) -> None:
    root = repo / ".weaver" / "knowledge" / "shadow-slave"
    root.mkdir(parents=True)
    write_progress(root, 1, 1)
    subprocess.run(["git", "init", "-q", str(repo)], check=True)
    subprocess.run(["git", "-C", str(repo), "add", "."], check=True)
    result = check(root)
    assert result.returncode == 1
    assert "tracked by Git" in result.stdout


def test_missing_progress_with_records(notebook: Path) -> None:
    (notebook / "reading-progress.json").unlink()
    result = check(notebook)
    assert result.returncode == 1
    assert "progress file is missing" in result.stdout


def test_empty_notebook_reports_problems(tmp_path: Path) -> None:
    root = tmp_path / "empty"
    root.mkdir()
    result = check(root)
    assert result.returncode == 1
    assert "FAIL" in result.stdout


def test_reading_file_chapter_mismatch(notebook: Path) -> None:
    data = json.loads((notebook / "reading" / "0001.json").read_text(encoding="utf-8"))
    data["chapter"] = 2
    (notebook / "reading" / "0001.json").write_text(json.dumps(data), encoding="utf-8")
    result = check(notebook)
    assert result.returncode == 1
    assert "does not match file" in result.stdout


def test_missing_note_for_reading_record(notebook: Path) -> None:
    (notebook / "chapters" / "0001.md").unlink()
    result = check(notebook)
    assert result.returncode == 1
    assert "missing chapter 1" in result.stdout


def test_missing_entity_marker_in_page(notebook: Path) -> None:
    (notebook / "people" / "hero.md").write_text("# hero\n\nNo marker.\n", encoding="utf-8")
    result = check(notebook)
    assert result.returncode == 1
    assert "entity id marker is missing" in result.stdout


def test_reader_roles_incomplete(notebook: Path) -> None:
    write_record(
        notebook,
        repo_of(notebook),
        1,
        [make_statement("statement:chapter-0001:hero")],
        readers_ok=False,
    )
    result = check(notebook)
    assert result.returncode == 1
    assert "reader roles are incomplete" in result.stdout


def test_lead_reconciliation_incomplete(notebook: Path) -> None:
    write_record(
        notebook,
        repo_of(notebook),
        1,
        [make_statement("statement:chapter-0001:hero")],
        reconciliation_ok=False,
    )
    result = check(notebook)
    assert result.returncode == 1
    assert "lead reconciliation is incomplete" in result.stdout


def test_review_incomplete(notebook: Path) -> None:
    write_record(
        notebook,
        repo_of(notebook),
        1,
        [make_statement("statement:chapter-0001:hero")],
        review_ok=False,
    )
    result = check(notebook)
    assert result.returncode == 1
    assert "independent review is incomplete" in result.stdout


def test_evidence_leaks_later_chapter_knowledge(notebook: Path) -> None:
    bad = make_statement(
        "statement:chapter-0001:bad",
        evidence=[{"chapter": 2, "location": {"line_start": 1, "line_end": 2}}],
    )
    write_record(notebook, repo_of(notebook), 1, [bad])
    result = check(notebook)
    assert result.returncode == 1
    assert "leaks knowledge from a later chapter" in result.stdout


def test_statement_kind_must_be_allowed(notebook: Path) -> None:
    bad = make_statement(
        "statement:chapter-0001:bad",
        kind="made_up_kind",
    )
    write_record(notebook, repo_of(notebook), 1, [bad])
    result = check(notebook)
    assert result.returncode == 1
    assert "statement kind is invalid" in result.stdout


def test_note_and_record_statement_ids_match(notebook: Path) -> None:
    write_note(notebook, 1, ["statement:chapter-0001:something-else"])
    result = check(notebook)
    assert result.returncode == 1
    assert "statement ids do not match" in result.stdout


def test_source_path_must_name_assigned_chapter(notebook: Path) -> None:
    data = json.loads((notebook / "reading" / "0001.json").read_text(encoding="utf-8"))
    data["source"]["path"] = "novels/shadow-slave/0001-0100/chapter-0002.txt"
    (notebook / "reading" / "0001.json").write_text(json.dumps(data), encoding="utf-8")
    result = check(notebook)
    assert result.returncode == 1
    assert "does not name the assigned chapter" in result.stdout


def test_progress_must_match_requested_range(notebook: Path) -> None:
    write_progress(notebook, 2, 2)
    result = check(notebook, through=1)
    assert result.returncode == 1
    assert "does not match requested range" in result.stdout


def test_checker_never_prints_story_text(notebook: Path) -> None:
    copied = chapter_line(1, 4)
    stolen = make_statement(
        "statement:chapter-0001:thief",
        text=f"The record pastes the text: {copied}",
    )
    write_record(notebook, repo_of(notebook), 1, [stolen])
    result = check(notebook)
    assert result.returncode == 1
    for word in copied.split():
        assert word not in result.stdout


def test_reports_counts(notebook: Path) -> None:
    result = check(notebook)
    assert result.returncode == 0
    assert "chapters=" in result.stdout
    assert "statements=" in result.stdout
    assert "connections=" in result.stdout
