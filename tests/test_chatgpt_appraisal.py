"""Plan 011 Gate 1 appraisal command tests.

TDD contract for src/weaver/chatgpt_appraisal.py: pure logic is
unit-tested here; the live browser session is a manual owner gate and is
not covered by CI. The one browser-touching test probes a local
data:text/html fixture page with known roles through a real headless
chromium launch.
"""

import json
import re
import stat
from pathlib import Path

import pytest

from weaver.chatgpt_appraisal import (
    FORBIDDEN_APIS,
    STATE_CHECKLIST,
    VIEWPORTS,
    build_manifest,
    build_paths,
    check_display,
    probe_page,
    secure_makedirs,
    secure_write_bytes,
    validate_state_checklist,
)

# ── VIEWPORTS ────────────────────────────────────────────────────────────


def test_viewports_desktop_and_mobile() -> None:
    assert VIEWPORTS == {
        "desktop": {"width": 1440, "height": 900},
        "mobile": {"width": 390, "height": 844},
    }


# ── STATE_CHECKLIST ──────────────────────────────────────────────────────


def test_state_checklist_is_valid() -> None:
    validate_state_checklist(STATE_CHECKLIST)  # must not raise


def test_state_checklist_rejects_missing_key() -> None:
    with pytest.raises(ValueError, match="role"):
        validate_state_checklist(
            [{"id": "composer", "name": "x", "exact": True, "min_count": 1}]
        )


def test_state_checklist_rejects_bad_role() -> None:
    with pytest.raises(ValueError, match="role"):
        validate_state_checklist(
            [
                {
                    "id": "composer",
                    "role": "not-a-role",
                    "name": "x",
                    "exact": True,
                    "min_count": 1,
                }
            ]
        )


def test_state_checklist_rejects_bad_name_type() -> None:
    with pytest.raises(ValueError, match="name"):
        validate_state_checklist(
            [
                {
                    "id": "composer",
                    "role": "textbox",
                    "name": 123,
                    "exact": True,
                    "min_count": 1,
                }
            ]
        )


# ── build_paths / permissions ────────────────────────────────────────────


def test_build_paths_layout(tmp_path: Path) -> None:
    paths = build_paths(str(tmp_path), "20260802T120000Z")
    assert paths["profile_dir"] == str(
        tmp_path / "weaver-chatgpt-appraisal" / "profile"
    )
    assert paths["out_dir"] == str(
        tmp_path / "research" / "chatgpt-ui" / "20260802T120000Z"
    )
    assert paths["out_dir"].endswith("20260802T120000Z")


def test_secure_makedirs_creates_0700(tmp_path: Path) -> None:
    target = tmp_path / "deep" / "nested" / "dir"
    secure_makedirs(str(target))
    assert target.is_dir()
    assert stat.S_IMODE(target.stat().st_mode) == 0o700


def test_secure_write_bytes_writes_0600_with_bytes(tmp_path: Path) -> None:
    target = tmp_path / "artifact.png"
    payload = b"\x89PNG fake bytes \x00\x01"
    secure_write_bytes(str(target), payload)
    assert target.read_bytes() == payload
    assert stat.S_IMODE(target.stat().st_mode) == 0o600


# ── check_display ────────────────────────────────────────────────────────


def test_check_display_true_with_display(monkeypatch) -> None:
    monkeypatch.setenv("DISPLAY", ":1")
    monkeypatch.delenv("WAYLAND_DISPLAY", raising=False)
    assert check_display() is True


def test_check_display_true_with_wayland(monkeypatch) -> None:
    monkeypatch.delenv("DISPLAY", raising=False)
    monkeypatch.setenv("WAYLAND_DISPLAY", "wayland-0")
    assert check_display() is True


def test_check_display_false_when_both_unset(monkeypatch) -> None:
    monkeypatch.delenv("DISPLAY", raising=False)
    monkeypatch.delenv("WAYLAND_DISPLAY", raising=False)
    assert check_display() is False


def test_check_display_false_when_empty_string(monkeypatch) -> None:
    monkeypatch.setenv("DISPLAY", "")
    monkeypatch.delenv("WAYLAND_DISPLAY", raising=False)
    assert check_display() is False


# ── probe_page against a real headless chromium fixture ──────────────────

FIXTURE_HTML = """
<html><body>
  <input aria-label="Message ChatGPT" role="textbox" type="text">
  <button>New chat</button>
  <button disabled>Send</button>
  <button style="display:none">Hidden chat</button>
  <textarea aria-label="Composer" role="textbox"></textarea>
</body></html>
"""


@pytest.fixture(scope="module")
def browser():
    from playwright.sync_api import sync_playwright

    p = sync_playwright().start()
    browser = p.chromium.launch(headless=True)
    yield browser
    browser.close()
    p.stop()


def _fixture_page(browser):
    page = browser.new_page()
    page.set_default_timeout(2000)
    page.goto("data:text/html," + FIXTURE_HTML)
    return page


def test_probe_page_counts_and_states(browser) -> None:
    page = _fixture_page(browser)
    try:
        record = probe_page(
            page,
            {
                "id": "composer",
                "role": "textbox",
                "name": "Message ChatGPT",
                "exact": True,
                "min_count": 1,
            },
        )
        assert record == {
            "id": "composer",
            "visible": True,
            "count": 1,
            "disabled": False,
            "matched_name": "Message ChatGPT",
        }

        record = probe_page(
            page,
            {
                "id": "new_chat",
                "role": "button",
                "name": "New chat",
                "exact": True,
                "min_count": 1,
            },
        )
        assert record["count"] == 1
        assert record["visible"] is True
        assert record["matched_name"] == "New chat"

        record = probe_page(
            page,
            {
                "id": "send",
                "role": "button",
                "name": "Send",
                "exact": True,
                "min_count": 1,
            },
        )
        assert record["count"] == 1
        assert record["disabled"] is True

        record = probe_page(
            page,
            {
                "id": "hidden",
                "role": "button",
                "name": re.compile("hidden", re.I),
                "exact": False,
                "min_count": 1,
            },
        )
        assert record["count"] == 1
        assert record["visible"] is False

        # two textboxes match the loose regex
        record = probe_page(
            page,
            {
                "id": "any_textbox",
                "role": "textbox",
                "name": re.compile("."),
                "exact": False,
                "min_count": 1,
            },
        )
        assert record["count"] == 2
    finally:
        page.close()


def test_probe_page_absent_probe(browser) -> None:
    page = _fixture_page(browser)
    try:
        record = probe_page(
            page,
            {
                "id": "absent",
                "role": "button",
                "name": "Does not exist",
                "exact": True,
                "min_count": 0,
            },
        )
        assert record == {
            "id": "absent",
            "visible": False,
            "count": 0,
            "disabled": False,
            "matched_name": None,
        }
    finally:
        page.close()


# ── build_manifest ───────────────────────────────────────────────────────


def test_build_manifest_roundtrip() -> None:
    manifest = build_manifest(
        timestamp="20260802T120000Z",
        viewport_id="desktop",
        url="https://chatgpt.com/",
        probe_records=[
            {
                "id": "composer",
                "visible": True,
                "count": 1,
                "disabled": False,
                "matched_name": "Message ChatGPT",
            }
        ],
        files=["desktop.png", "desktop.aria.txt"],
    )
    assert manifest["viewport_id"] == "desktop"
    assert manifest["viewport"] == {"width": 1440, "height": 900}
    assert manifest["url"] == "https://chatgpt.com/"
    assert manifest["files"] == ["desktop.aria.txt", "desktop.png"]
    assert json.loads(json.dumps(manifest)) == manifest


# ── cookie / credential hygiene ──────────────────────────────────────────


def test_no_forbidden_apis_in_module_source() -> None:
    """The module must never call cookie-reading or capture APIs.

    The FORBIDDEN_APIS constant definition necessarily contains the
    tokens; the whole definition block is removed before scanning so
    only real call sites would trip the check.
    """
    src = Path("src/weaver/chatgpt_appraisal.py").read_text()
    clean: list[str] = []
    in_definition = False
    for line in src.splitlines():
        if line.strip().startswith("FORBIDDEN_APIS"):
            in_definition = True
        if in_definition:
            if line.strip() == ")":
                in_definition = False
            continue
        clean.append(line)
    for token in FORBIDDEN_APIS:
        for line_number, line in enumerate(clean, 1):
            if token in line:
                pytest.fail(
                    f"forbidden API token {token!r} found at line {line_number}"
                )


# ── fail-visible helper ──────────────────────────────────────────────────


def test_unproven_probe_ids_returns_required_misses() -> None:
    from weaver.chatgpt_appraisal import unproven_probe_ids

    checklist = [
        {
            "id": "composer",
            "role": "textbox",
            "name": "x",
            "exact": True,
            "min_count": 1,
        },
        {"id": "send", "role": "button", "name": "y", "exact": True, "min_count": 0},
        {
            "id": "new_chat",
            "role": "button",
            "name": "z",
            "exact": True,
            "min_count": 2,
        },
    ]
    records = [
        {
            "id": "composer",
            "visible": False,
            "count": 0,
            "disabled": False,
            "matched_name": None,
        },
        {
            "id": "send",
            "visible": True,
            "count": 1,
            "disabled": False,
            "matched_name": "y",
        },
        {
            "id": "new_chat",
            "visible": True,
            "count": 1,
            "disabled": False,
            "matched_name": "z",
        },
    ]
    # composer missing (min 1) and new_chat short (min 2, got 1); send optional.
    assert unproven_probe_ids(records, checklist) == ["composer", "new_chat"]


def test_unproven_probe_ids_empty_when_all_required_met() -> None:
    from weaver.chatgpt_appraisal import unproven_probe_ids

    checklist = [
        {
            "id": "composer",
            "role": "textbox",
            "name": "x",
            "exact": True,
            "min_count": 1,
        },
    ]
    records = [
        {
            "id": "composer",
            "visible": True,
            "count": 1,
            "disabled": False,
            "matched_name": "x",
        },
    ]
    assert unproven_probe_ids(records, checklist) == []
