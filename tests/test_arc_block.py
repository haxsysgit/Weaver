"""Plan 034 slice 5: the arc map never reaches past the reader's boundary."""

from types import SimpleNamespace

from weaver.web.app import _arc_block


def _runtime(tmp_path):
    knowledge = tmp_path / ".weaver" / "knowledge" / "shadow-slave"
    knowledge.mkdir(parents=True, exist_ok=True)
    (knowledge / "arcs.md").write_text(
        "## ARC 1 — First (ch 1-10) — VOLUME 1: One\n",
        encoding="utf-8",
    )
    return SimpleNamespace(project_root=tmp_path)


def _prefs(chapter, mode="protect"):
    return SimpleNamespace(reader_chapter=chapter, spoiler_mode=mode)


def test_a_clipped_arc_hides_its_name(tmp_path) -> None:
    block = _arc_block(_runtime(tmp_path), _prefs(5), "canon")
    assert block is not None
    assert "1-5 (continues past this chapter)" in block
    assert "First" not in block


def test_no_saved_boundary_gets_no_map(tmp_path) -> None:
    assert _arc_block(_runtime(tmp_path), None, "canon") is None
    assert _arc_block(_runtime(tmp_path), _prefs(None), "canon") is None


def test_spoilers_allowed_gets_the_whole_mapped_range(tmp_path) -> None:
    block = _arc_block(_runtime(tmp_path), _prefs(None, "none"), "canon")
    assert block is not None
    assert "1-10 First" in block


def test_a_fanfic_thread_gets_no_canon_map(tmp_path) -> None:
    assert _arc_block(_runtime(tmp_path), _prefs(5), "fanfic") is None
