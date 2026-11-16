"""Plan 034 slice 3: the chapter-derived name index."""

from weaver.name_index import NameIndex, build_name_index, names_in

CHAPTERS = [
    (1, "Sunny met Nephis at the academy. Nephis's blade was bright. Sunny nodded."),
    (2, "Mordret watched from the dark. Nephis left. Sunny stayed."),
    (3, "Kanakht rose from the sea. The Changing Star burned."),
    (4, "Kanakht spoke. The Changing Star answered."),
]


def _index(min_count: int = 1) -> NameIndex:
    return build_name_index(CHAPTERS, min_count=min_count)


def test_an_exact_name_reports_where_it_appears() -> None:
    hit = _index().lookup("sunny")
    assert hit is not None
    assert hit["name"] == "Sunny"
    assert hit["chapters"] == [1, 2]
    assert hit["first_chapter"] == 1
    assert hit["last_chapter"] == 2
    assert hit["match"] == "exact"


def test_lookup_is_case_insensitive() -> None:
    hit = _index().lookup("NEPHIS")
    assert hit is not None
    assert hit["name"] == "Nephis"


def test_a_possessive_is_cleaned_to_the_name() -> None:
    assert "Nephis" in names_in("Nephis's blade was bright.")


def test_a_close_misspelling_resolves() -> None:
    hit = _index().lookup("kanakt")
    assert hit is not None
    assert hit["name"] == "Kanakht"
    assert hit["match"] == "close"
    assert hit["score"] >= 0.72


def test_a_capitalised_two_word_name_is_indexed() -> None:
    hit = _index().lookup("Changing Star")
    assert hit is not None
    assert hit["name"] == "Changing Star"
    assert hit["chapters"] == [3, 4]


def test_a_definite_article_does_not_swallow_the_name() -> None:
    found = names_in("The Changing Star burned.")
    assert "Changing Star" in found
    assert "The Changing" not in found


def test_one_off_names_are_dropped_by_default() -> None:
    index = build_name_index(CHAPTERS)
    assert index.lookup("Mordret") is None


def test_stopwords_are_not_names() -> None:
    index = _index()
    assert index.lookup("The") is None
    assert index.lookup("Chapter") is None


def test_suggestions_cover_a_misspelling() -> None:
    assert "Kanakht" in _index().suggest("kanakt")


def test_through_is_the_last_indexed_chapter() -> None:
    assert _index().through == 4


def test_json_round_trip(tmp_path) -> None:
    index = _index()
    path = tmp_path / "names.json"
    index.save(path)
    loaded = NameIndex.load(path)
    assert len(loaded) == len(index)
    assert loaded.lookup("sunny")["chapters"] == index.lookup("sunny")["chapters"]


# Review of Plan 034 (2026-11-16): titles and multi-word asks resolved to the
# most common word inside them ("Lord of Shadows" -> "Shadow", "the Sword
# Saint" -> "Saint"), and sentence-initial words were indexed as names.
TITLE_CHAPTERS = [
    (1, "They named him Lord of Shadows that night. A Saint knelt. Another Saint rose."),
    (2, "The Lord of Shadows waited. Saint Tyris spoke. Each Saint listened. Everything was quiet."),
    (3, "Saint Tyris left. The Sword Saint drew. A Saint fell. Everything felt wrong."),
    (4, "The Sword Saint returned. One Saint stayed. They saw everything, everything and everything."),
]


def _titles() -> NameIndex:
    return build_name_index(TITLE_CHAPTERS, min_count=1)


def test_a_title_with_of_is_one_name() -> None:
    assert "Lord of Shadows" in names_in("They named him Lord of Shadows that night.")
    hit = _titles().lookup("lord of shadows")
    assert hit is not None
    assert hit["name"] == "Lord of Shadows"
    assert hit["chapters"] == [1, 2]


def test_a_longer_ask_resolves_to_the_most_specific_name() -> None:
    index = _titles()
    assert index.lookup("the Sword Saint")["name"] == "Sword Saint"
    assert index.lookup("Saint Tyris of Rivers")["name"] == "Saint Tyris"


def test_a_part_of_a_word_is_not_a_match() -> None:
    # "saint" is inside "sainted" only as letters, not as a word.
    hit = _titles().lookup("the sainted")
    assert hit is None or hit["match"] != "contains"


def test_a_possessive_ask_finds_the_name() -> None:
    hit = _titles().lookup("Tyris's sword")
    assert hit is not None
    assert hit["name"] == "Tyris"
    assert hit["match"] == "contains"


def test_a_common_word_at_a_sentence_start_is_not_a_name() -> None:
    index = _titles()
    assert index.lookup("Everything") is None or index.lookup("Everything")["name"] != "Everything"
