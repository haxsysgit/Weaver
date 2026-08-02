"""Plan 011 Gate 1: ChatGPT UI appraisal command (research tooling).

Runs a visible persistent-context Chromium profile so a human can sign in
to chatgpt.com personally, then probes fixed UI states at the desktop and
mobile viewports, capturing screenshots and aria snapshots.

All artifacts land owner-only under the state root:

    <state_root>/weaver-chatgpt-appraisal/profile/  cookies live here; 0700
    <state_root>/research/chatgpt-ui/<ts>/      captures; files 0600

Cookie/credential hygiene is structural: this module never calls the
cookie-reading or capture APIs listed in FORBIDDEN_APIS (cookie
inspection, session-state export, HAR capture, tracing). The profile
directory is never read or copied.

This is research tooling for the Plan 011 appraisal gate. It is not part
of the Weaver web runtime.
"""

from __future__ import annotations

import json
import os
import re
import sys
from datetime import datetime, timezone
from typing import Any

# Roles accepted by Playwright's get_by_role(role=...). Verified against
# the installed playwright 1.62 generated API.
ROLE_VALUES: frozenset[str] = frozenset(
    {
        "alert",
        "alertdialog",
        "application",
        "article",
        "banner",
        "blockquote",
        "button",
        "caption",
        "cell",
        "checkbox",
        "code",
        "columnheader",
        "combobox",
        "complementary",
        "contentinfo",
        "definition",
        "deletion",
        "dialog",
        "directory",
        "document",
        "emphasis",
        "feed",
        "figure",
        "form",
        "generic",
        "grid",
        "gridcell",
        "group",
        "heading",
        "img",
        "insertion",
        "link",
        "list",
        "listbox",
        "listitem",
        "log",
        "main",
        "marquee",
        "math",
        "menu",
        "menubar",
        "menuitem",
        "menuitemcheckbox",
        "menuitemradio",
        "meter",
        "navigation",
        "none",
        "note",
        "option",
        "paragraph",
        "presentation",
        "progressbar",
        "radio",
        "radiogroup",
        "region",
        "row",
        "rowgroup",
        "rowheader",
        "scrollbar",
        "search",
        "searchbox",
        "separator",
        "slider",
        "spinbutton",
        "status",
        "strong",
        "subscript",
        "superscript",
        "switch",
        "tab",
        "table",
        "tablist",
        "tabpanel",
        "term",
        "textbox",
        "time",
        "timer",
        "toolbar",
        "tooltip",
        "tree",
        "treegrid",
        "treeitem",
    }
)

VIEWPORTS: dict[str, dict[str, int]] = {
    "desktop": {"width": 1440, "height": 900},
    "mobile": {"width": 390, "height": 844},
}

# APIs this module must never call: they read or export cookies,
# credentials, or full request captures.
FORBIDDEN_APIS: tuple[str, ...] = (
    "cookies(",
    "storage_state(",
    "record_har",
    "traces_dir",
)

# Seed probe list; refined after the first live inspection. Each spec:
# id, role (get_by_role role), name (str or re.Pattern), exact, min_count.
STATE_CHECKLIST: list[dict[str, Any]] = [
    {
        "id": "composer",
        "role": "textbox",
        "name": re.compile(r"message chatgpt", re.I),
        "exact": False,
        "min_count": 1,
    },
    {
        "id": "new_chat",
        "role": "button",
        "name": "New chat",
        "exact": True,
        "min_count": 1,
    },
    {
        "id": "sidebar_toggle",
        "role": "button",
        "name": re.compile(r"sidebar", re.I),
        "exact": False,
        "min_count": 1,
    },
    {
        "id": "send",
        "role": "button",
        "name": re.compile(r"send", re.I),
        "exact": False,
        "min_count": 0,
    },
    {
        "id": "model_selector",
        "role": "button",
        "name": re.compile(r"gpt|model", re.I),
        "exact": False,
        "min_count": 0,
    },
]

_REQUIRED_KEYS: tuple[str, ...] = ("id", "role", "name", "exact", "min_count")


def validate_state_checklist(checklist: list[dict[str, Any]]) -> None:
    """Raise ValueError on the first invalid probe spec."""
    for index, spec in enumerate(checklist):
        for key in _REQUIRED_KEYS:
            if key not in spec:
                raise ValueError(f"probe {index}: missing required key {key!r}")
        if not isinstance(spec["id"], str) or not spec["id"]:
            raise ValueError(f"probe {index}: id must be a non-empty string")
        if spec["role"] not in ROLE_VALUES:
            raise ValueError(
                f"probe {index}: role {spec['role']!r} is not a get_by_role role"
            )
        if not isinstance(spec["name"], (str, re.Pattern)):
            raise ValueError(f"probe {index}: name must be str or re.Pattern")
        if not isinstance(spec["exact"], bool):
            raise ValueError(f"probe {index}: exact must be bool")
        if not isinstance(spec["min_count"], int) or spec["min_count"] < 0:
            raise ValueError(f"probe {index}: min_count must be a non-negative int")


def build_paths(profile_root: str, timestamp: str) -> dict[str, str]:
    """Return profile and output directories under the state root."""
    return {
        "profile_dir": os.path.join(
            profile_root, "weaver-chatgpt-appraisal", "profile"
        ),
        "out_dir": os.path.join(profile_root, "research", "chatgpt-ui", timestamp),
    }


def secure_makedirs(path: str) -> None:
    """Create a directory with mode 0700 regardless of umask."""
    os.makedirs(path, mode=0o700, exist_ok=True)
    os.chmod(path, 0o700)


def secure_write_bytes(path: str, data: bytes) -> None:
    """Write a file with mode 0600 regardless of umask."""
    fd = os.open(path, os.O_WRONLY | os.O_CREAT | os.O_TRUNC, 0o600)
    try:
        with os.fdopen(fd, "wb") as handle:
            handle.write(data)
    except BaseException:
        raise
    os.chmod(path, 0o600)


def check_display() -> bool:
    """True when a display server is available for a headful browser."""
    return bool(os.environ.get("DISPLAY") or os.environ.get("WAYLAND_DISPLAY"))


def _accessible_name(locator: Any) -> str | None:
    """Best-effort accessible name of a locator's first match."""
    label = locator.first.get_attribute("aria-label")
    if label:
        return label
    text = locator.first.text_content()
    if text:
        stripped = text.strip()
        if stripped:
            return stripped
    return None


def probe_page(page: Any, spec: dict[str, Any]) -> dict[str, Any]:
    """Probe one UI state on a page via get_by_role.

    Fails loudly on locator errors; never swallows them. Count and
    visibility are recorded, never asserted here (min_count is judged by
    the caller).
    """
    locator = page.get_by_role(
        role=spec["role"],
        name=spec["name"],
        exact=spec["exact"],
        # include hidden elements so the record distinguishes
        # present-but-hidden states from absent ones.
        include_hidden=True,
    )
    count = locator.count()
    if count == 0:
        return {
            "id": spec["id"],
            "visible": False,
            "count": 0,
            "disabled": False,
            "matched_name": None,
        }
    return {
        "id": spec["id"],
        "visible": locator.first.is_visible(),
        "count": count,
        "disabled": locator.first.is_disabled(),
        "matched_name": _accessible_name(locator),
    }


def unproven_probe_ids(
    records: list[dict[str, Any]], checklist: list[dict[str, Any]]
) -> list[str]:
    """Probe ids whose required min_count is not met (fail-visible check)."""
    unproven: list[str] = []
    for spec in checklist:
        if spec["min_count"] < 1:
            continue
        record = next((r for r in records if r["id"] == spec["id"]), None)
        if record is None or record["count"] < spec["min_count"]:
            unproven.append(spec["id"])
    return unproven


def build_manifest(
    *,
    timestamp: str,
    viewport_id: str,
    url: str,
    probe_records: list[dict[str, Any]],
    files: list[str],
) -> dict[str, Any]:
    """Build a self-contained capture manifest for one viewport pass."""
    return {
        "schema_version": 1,
        "timestamp": timestamp,
        "viewport_id": viewport_id,
        "viewport": dict(VIEWPORTS[viewport_id]),
        "url": url,
        "probes": list(probe_records),
        "files": sorted(files),
    }


def _now_timestamp() -> str:
    return datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%SZ")


def main() -> int:
    """Live appraisal flow. Thin shell over the pure helpers above."""
    if not check_display():
        print(
            "ERROR: no display server found (DISPLAY and WAYLAND_DISPLAY are "
            "both unset). Run from a desktop session, or headless via:\n"
            "  xvfb-run -a uv run python -m weaver.chatgpt_appraisal",
            file=sys.stderr,
        )
        return 2

    profile_root = os.environ.get("WEAVER_STATE_DIR", ".weaver")
    timestamp = _now_timestamp()
    paths = build_paths(profile_root, timestamp)
    secure_makedirs(paths["profile_dir"])
    secure_makedirs(paths["out_dir"])
    all_unproven: list[str] = []

    from playwright.sync_api import sync_playwright

    playwright = sync_playwright().start()
    try:
        context = playwright.chromium.launch_persistent_context(
            paths["profile_dir"],
            headless=False,
            viewport=dict(VIEWPORTS["desktop"]),
        )
        page = context.pages[0] if context.pages else context.new_page()
        page.goto("https://chatgpt.com/", wait_until="domcontentloaded")
        input(
            "Sign in personally in the browser window, then press Enter here "
            "to continue the appraisal..."
        )
        for viewport_id, size in VIEWPORTS.items():
            page.set_viewport_size(dict(size))
            page.wait_for_timeout(500)
            records = [probe_page(page, spec) for spec in STATE_CHECKLIST]
            prefix = viewport_id
            files = [f"{prefix}.png", f"{prefix}.aria.txt", f"{prefix}.manifest.json"]
            secure_write_bytes(
                os.path.join(paths["out_dir"], f"{prefix}.png"),
                page.screenshot(full_page=True, animations="disabled"),
            )
            secure_write_bytes(
                os.path.join(paths["out_dir"], f"{prefix}.aria.txt"),
                page.aria_snapshot().encode("utf-8"),
            )
            manifest = build_manifest(
                timestamp=timestamp,
                viewport_id=viewport_id,
                url=page.url,
                probe_records=records,
                files=files,
            )
            secure_write_bytes(
                os.path.join(paths["out_dir"], f"{prefix}.manifest.json"),
                json.dumps(manifest, indent=2, ensure_ascii=False).encode("utf-8"),
            )
            print(f"[{viewport_id}] wrote {len(files)} captures")
            unproven = unproven_probe_ids(records, STATE_CHECKLIST)
            if unproven:
                print(
                    f"[{viewport_id}] unproven states: {', '.join(unproven)}",
                    file=sys.stderr,
                )
                all_unproven.extend(
                    f"{viewport_id}:{probe_id}" for probe_id in unproven
                )
        context.close()
    finally:
        playwright.stop()

    print(f"Appraisal captures written to {paths['out_dir']}")
    if all_unproven:
        print(
            "ERROR: these fixed states were not proven: " + ", ".join(all_unproven),
            file=sys.stderr,
        )
        print(
            "Stage the missing state in the browser and re-run, or accept the "
            "gap and record it in the observation matrix.",
            file=sys.stderr,
        )
        return 3
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
