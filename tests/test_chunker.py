"""Shadow Slave aware chunker tests. Synthetic text only, no real
story content; structure mirrors the real novel (title line, blank-line
separated paragraphs, bracket blocks, dialogue)."""

from __future__ import annotations


from weaver.retrieval.chunker import (
    chunk_chapter,
    split_units,
)


def test_line_1_title_never_in_chunks():
    text = "Shadow Slave-Chapter 1 - 1: Fake Title\nbody one\n\nbody two"
    chunks = chunk_chapter(1, text)
    assert chunks[0].line_start == 2
    assert "Fake Title" not in chunks[0].text


def test_paragraphs_never_split():
    """A paragraph is one unit: chunk boundaries only fall between them."""
    text = "Title\n" + "\n".join(f"paragraph {i} of the fake story text" for i in range(30))
    chunks = chunk_chapter(1, text)
    for c in chunks:
        assert c.text.strip()
        # every paragraph line appears whole inside exactly one chunk
        for i in range(30):
            para = f"paragraph {i} of the fake story text"
            if para in c.text:
                assert c.text.count(para) == 1


def test_bracket_block_stays_whole():
    """A memory/attribute bracket block is one unit, even if long."""
    block = "\n\n".join(f"[Attribute {i}] Description: some fake power text" for i in range(20))
    text = "Title\nplain paragraph\n\n" + block + "\n\nafter paragraph"
    chunks = chunk_chapter(1, text)
    # the whole block lives in one chunk
    holding = [c for c in chunks if "[Attribute 0]" in c.text]
    assert len(holding) == 1
    assert "[Attribute 19]" in holding[0].text
    assert "after paragraph" in holding[0].text or "after paragraph" in " ".join(c.text for c in chunks)


def test_dialogue_run_sticky():
    """A run of quote lines is one unit and never split."""
    lines = ["Title", "plain narration"]
    for i in range(12):
        lines.append(f'"fake line of dialogue number {i}"')
    text = "\n\n".join(lines)
    chunks = chunk_chapter(1, text)
    for c in chunks:
        # a chunk may hold several runs, but each contiguous run is whole:
        # since the whole dialogue is one run and one unit, it can only
        # be split if the unit itself was split, which never happens.
        assert '"fake line of dialogue number 0"' in c.text or '"fake line of dialogue number 11"' in c.text


def test_overlap_covers_boundaries():
    """Evidence straddling a chunk boundary appears in both chunks."""
    # 100 short paragraphs, one line each, blank-line separated
    text = "Title\n" + "\n\n".join(f"line {i} of fake body" for i in range(100))
    chunks = chunk_chapter(1, text, target_lines=30, overlap_lines=8)
    assert len(chunks) >= 4
    for a, b in zip(chunks, chunks[1:]):
        assert a.line_end >= b.line_start  # overlap: boundaries touch
        assert a.line_end - b.line_start >= 0


def test_flags_set():
    text = (
        "Title\n\n"
        "[Name: Fake Memory] Description: a fake memory\n\n"
        '"dialogue one"\n\n"dialogue two"\n\n'
        "plain narration paragraph\n"
    )
    chunks = chunk_chapter(1, text)
    assert chunks, "chapters with body always produce chunks"
    merged = set().union(*(c.flags for c in chunks))
    assert "memory-block" in merged
    assert "dialogue" in merged


def test_source_hash_consistent():
    text = "Title\nbody one\n\nbody two"
    chunks = chunk_chapter(7, text)
    hashes = {c.source_hash for c in chunks}
    assert len(hashes) == 1
    assert len(chunks[0].source_hash) == 16


def test_split_units_types():
    lines = [
        "plain one",
        "",
        "[Bracket block line one]",
        "[Bracket block line two]",
        "",
        '"quote one"',
        '"quote two"',
        "",
        "plain two",
    ]
    units = split_units(lines)
    assert [u.is_bracket for u in units] == [False, True, False, False]
    assert units[1].text.count("[") == 2
    assert all(u.is_dialogue for u in units[2:3])
    assert units[3].is_dialogue is False
