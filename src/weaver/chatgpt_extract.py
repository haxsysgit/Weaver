"""Plan 011 Gate 1: dev-accurate UI extraction from a signed-in ChatGPT profile.

Supersedes the probe-based appraisal for detail work. Launches the same
persistent profile (owner signs in once), then drives the real page and
dumps dev-accurate data: computed styles, bounding rects, CSS custom
properties, font stacks, per fixed state (landing/composer, the / menu,
settings modal). Outputs JSON + screenshots owner-only under
.weaver/research/chatgpt-ui/<ts>/.

This is research tooling. It is not part of the Weaver web runtime.
"""

from __future__ import annotations

import json
import os
import sys
from typing import Any

from weaver.chatgpt_appraisal import (
    VIEWPORTS,
    build_paths,
    secure_makedirs,
    secure_write_bytes,
)

# Dev-style properties worth capturing per element.
_STYLE_PROPS: tuple[str, ...] = (
    "color",
    "background-color",
    "border-top-width",
    "border-top-color",
    "border-radius",
    "padding-top",
    "padding-right",
    "padding-bottom",
    "padding-left",
    "margin-top",
    "margin-bottom",
    "font-family",
    "font-size",
    "font-weight",
    "line-height",
    "box-shadow",
    "outline-style",
    "outline-width",
    "outline-color",
    "width",
    "height",
)

_JS_ELEMENT: str = """
(el) => {
  const s = getComputedStyle(el);
  const out = {};
  for (const p of __PROPS__) out[p] = s[p];
  const r = el.getBoundingClientRect();
  out.rect = {x: r.x, y: r.y, width: r.width, height: r.height};
  out.text = (el.innerText || "").replace(/\\s+/g, " ").trim().slice(0, 140);
  out.ancestors = [];
  let cur = el.parentElement;
  for (let i = 0; cur && i < 4; i++, cur = cur.parentElement) {
    const cs = getComputedStyle(cur);
    const rr = cur.getBoundingClientRect();
    out.ancestors.push({
      tag: cur.tagName.toLowerCase(),
      cls: (cur.className || "").toString().slice(0, 90),
      bg: cs.backgroundColor,
      radius: cs.borderRadius,
      border: cs.borderTopWidth + " " + cs.borderTopColor,
      padding: cs.paddingTop + " " + cs.paddingRight,
      shadow: cs.boxShadow,
      font: cs.fontFamily,
      size: cs.fontSize,
      rect: {x: rr.x, y: rr.y, width: rr.width, height: rr.height},
    });
  }
  return out;
}
""".replace("__PROPS__", json.dumps(list(_STYLE_PROPS)))

_JS_ROOT_VARS: str = """
() => {
  const cs = getComputedStyle(document.documentElement);
  const vars = {};
  for (let i = 0; i < cs.length; i++) {
    const p = cs[i];
    if (p.startsWith("--")) vars[p] = cs.getPropertyValue(p).trim();
  }
  return vars;
}
"""

_JS_FONTS: str = """
() => {
  const loaded = [...document.fonts].map(
    (f) => f.family + " " + f.weight + " " + f.status
  );
  const body = getComputedStyle(document.body);
  return {
    body_font_family: body.fontFamily,
    body_font_size: body.fontSize,
    loaded: loaded.slice(0, 40),
  };
}
"""

_JS_THEME: str = """
() => {
  const html = document.documentElement;
  return {
    html_class: html.className,
    html_style: (html.getAttribute("style") || "").slice(0, 200),
    color_scheme: getComputedStyle(html).colorScheme,
    prefers_dark: window.matchMedia("(prefers-color-scheme: dark)").matches,
    theme_var: getComputedStyle(html).getPropertyValue("--main-surface-primary").trim(),
  };
}
"""

_JS_BODY_TEXT: str = """
() => {
  const t = document.body.innerText || "";
  return t.replace(/\\n{3,}/g, "\\n\\n").slice(0, 4000);
}
"""


def element_report(page: Any, role: str, name: str, exact: bool = True) -> dict:
    """Computed-style + rect report for a role/name target (first 3 matches)."""
    locator = page.get_by_role(role, name=name, exact=exact, include_hidden=True)
    count = locator.count()
    if count == 0:
        return {"role": role, "name": name, "count": 0}
    report = {"role": role, "name": name, "count": count, "matches": []}
    for index in range(min(count, 3)):
        try:
            report["matches"].append(locator.nth(index).evaluate(_JS_ELEMENT))
        except Exception as exc:  # a race mid-layout should not kill the pass
            report["matches"].append({"error": str(exc)[:120]})
    return report


def generic_report(page: Any, role: str, limit: int = 25) -> dict:
    """Report for roles with unknown names (menu items, dialogs, etc.)."""
    locator = page.get_by_role(role, include_hidden=True)
    count = locator.count()
    report = {"role": role, "count": count, "matches": []}
    for index in range(min(count, limit)):
        try:
            report["matches"].append(locator.nth(index).evaluate(_JS_ELEMENT))
        except Exception as exc:
            report["matches"].append({"error": str(exc)[:120]})
    return report


def snapshot_state(page: Any) -> dict:
    """Full dev dump for the current page state."""
    state: dict[str, Any] = {
        "url": page.url,
        "theme": page.evaluate(_JS_THEME),
        "root_vars": page.evaluate(_JS_ROOT_VARS),
        "fonts": page.evaluate(_JS_FONTS),
        "elements": [],
    }
    targets = [
        ("textbox", "Chat with ChatGPT"),
        ("button", "High"),
        ("button", "Start dictation"),
        ("button", "Start Voice"),
        ("button", "Add files and more"),
        ("heading", "What's on the agenda today?"),
        ("link", "New chat"),
        ("button", "Open sidebar"),
        ("button", "Search"),
        ("link", "Library"),
        ("link", "Projects"),
    ]
    for role, name in targets:
        state["elements"].append(element_report(page, role, name))
    return state


def main() -> int:
    """Drive the signed-in profile through the fixed states and dump data."""
    profile_root = os.environ.get("WEAVER_STATE_DIR", ".weaver")
    from datetime import datetime, timezone

    timestamp = datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%SZ")
    paths = build_paths(profile_root, timestamp)
    secure_makedirs(paths["profile_dir"])
    secure_makedirs(paths["out_dir"])

    from playwright.sync_api import sync_playwright

    playwright = sync_playwright().start()
    try:
        context = playwright.chromium.launch_persistent_context(
            paths["profile_dir"],
            headless=False,
            viewport=dict(VIEWPORTS["desktop"]),
            ignore_default_args=["--enable-automation"],
            args=["--disable-blink-features=AutomationControlled"],
        )
        page = context.pages[0] if context.pages else context.new_page()
        # Match the owner's dark-theme captures: the app follows the
        # profile's color scheme (Appearance setting is System), so force
        # prefers-color-scheme dark before the first load.
        page.emulate_media(color_scheme="dark")
        page.goto("https://chatgpt.com/", wait_until="domcontentloaded")
        if "auth.openai.com" in page.url or "login" in page.url.lower():
            input("Sign in personally in the browser window, then press Enter...")
            page.wait_for_load_state("domcontentloaded")

        dump: dict[str, Any] = {"timestamp": timestamp, "states": {}}
        # State 1: landing/composer at desktop width, sidebar expanded to
        # match the owner's captures (the fresh profile defaults to the
        # collapsed rail).
        try:
            open_btn = page.get_by_role("button", name="Open sidebar")
            if open_btn.count() and open_btn.first.is_visible():
                open_btn.first.click()
                page.wait_for_timeout(800)
        except Exception as exc:
            print(f"sidebar expand failed, continuing: {exc}", file=sys.stderr)
        page.wait_for_timeout(1500)
        dump["states"]["desktop_landing"] = snapshot_state(page)
        secure_write_bytes(
            os.path.join(paths["out_dir"], "desktop_landing.png"),
            page.screenshot(full_page=True, animations="disabled"),
        )

        # State 2: composer with text typed (auto-grow + send affordance).
        composer = page.get_by_role("textbox", name="Chat with ChatGPT")
        if composer.count() and composer.first.is_visible():
            composer.first.click()
            composer.first.fill("hello weaver")
            page.wait_for_timeout(600)
            dump["states"]["composer_typed"] = snapshot_state(page)
            secure_write_bytes(
                os.path.join(paths["out_dir"], "composer_typed.png"),
                page.screenshot(full_page=True, animations="disabled"),
            )
            composer.first.fill("")

        # State 3: the / command menu.
        if composer.count() and composer.first.is_visible():
            composer.first.fill("/")
            page.wait_for_timeout(800)
            dump["states"]["slash_menu"] = {
                "body_text": page.evaluate(_JS_BODY_TEXT),
                "menuitems": generic_report(page, "menuitem", limit=40),
                "listbox": generic_report(page, "listbox", limit=3),
                "option": generic_report(page, "option", limit=30),
                "dialog": generic_report(page, "dialog", limit=3),
            }
            secure_write_bytes(
                os.path.join(paths["out_dir"], "slash_menu.png"),
                page.screenshot(full_page=True, animations="disabled"),
            )
            composer.first.fill("")

        # State 4: settings modal via the profile menu.
        try:
            profile_button = page.get_by_role(
                "button",
                name=os.environ.get("EXTRACT_PROFILE_LABEL", "open profile menu"),
            )
            if profile_button.count():
                profile_button.first.click(force=True)
                page.wait_for_timeout(600)
                settings_item = page.get_by_role("menuitem", name="Settings")
                if settings_item.count():
                    settings_item.first.click(force=True)
                    page.wait_for_timeout(1500)
                    dump["states"]["settings"] = {
                        "url": page.url,
                        "heading": generic_report(page, "heading", limit=8),
                        "button": generic_report(page, "button", limit=40),
                        "dialog": generic_report(page, "dialog", limit=5),
                        "switch": generic_report(page, "switch", limit=10),
                    }
                    secure_write_bytes(
                        os.path.join(paths["out_dir"], "settings.png"),
                        page.screenshot(full_page=True, animations="disabled"),
                    )
        except Exception as exc:
            print(f"settings pass failed, continuing: {exc}", file=sys.stderr)

        # State 5: mobile-width landing (CSS-width emulation).
        page.set_viewport_size(dict(VIEWPORTS["mobile"]))
        page.wait_for_timeout(800)
        page.goto("https://chatgpt.com/", wait_until="domcontentloaded")
        page.wait_for_timeout(1200)
        dump["states"]["mobile_landing"] = snapshot_state(page)
        secure_write_bytes(
            os.path.join(paths["out_dir"], "mobile_landing.png"),
            page.screenshot(full_page=True, animations="disabled"),
        )
        context.close()
    finally:
        playwright.stop()

    secure_write_bytes(
        os.path.join(paths["out_dir"], "ui-extract.json"),
        json.dumps(dump, indent=2, ensure_ascii=False).encode("utf-8"),
    )
    print(f"Extraction written to {paths['out_dir']}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
