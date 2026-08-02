> **READ FIRST — the task premise is stale on two facts:**
> 1. The installed wheel is **playwright 1.62.0, not 1.56.0**. Evidence: `.venv/lib/python3.11/site-packages/playwright-1.62.0.dist-info/METADATA` → `Name: playwright, Version: 1.62.0`; driver `playwright/driver/package/package.json` → `playwright-core 1.62.0`; no `playwright-1.56.0.dist-info` exists. Playwright is **not** in `pyproject.toml` dependencies (ad-hoc install that was upgraded at some point).
> 2. The driver wants **chromium revision 1234** (Chrome for Testing 151.0.7922.34, per `playwright/driver/package/browsers.json`) but only **chromium-1228 is downloaded** (`~/.cache/ms-playwright/chromium-1228/INSTALLATION_COMPLETE` exists; `chromium-1234`, `chromium-headless-shell-1234`, `chromium-headless-shell-1228` are all ENOENT). Any live launch with the default executable will fail until `uv run python -m playwright install chromium` runs. The previously "verified headless launch" is inconsistent with this state (likely pre-upgrade, other venv, or `executable_path`-based) — re-verify after installing 1234.
>
> All signatures below are therefore verified against the **actually installed 1.62.0**, which is a superset of 1.56: `screenshot` gained `type="webp"` (1.62), `get_by_role` gained `description=` (1.60), actions gained `scroll=` (1.62), and **`page.accessibility` was REMOVED in 1.57** (see Q3).

Environment facts (from `/proc/self/environ` of the tool process, same user/session): `DISPLAY=:1`, `XDG_SESSION_TYPE=x11`, GNOME/Ubuntu desktop, `XAUTHORITY=/run/user/1000/gdm/Xauthority`; **no `WAYLAND_DISPLAY`**. Python 3.11.13, uv 0.8.4. `.weaver/` and `.pi-subagents/` are gitignored (verified `.gitignore`). CLI entry: `weaver = "weaver.cli:main"` (pyproject). Note: the shell env contains live API tokens — the command and any diagnostics must never dump or log environment contents.

---

## 1. Exact API signatures — verified from installed 1.62 source

Source: `.venv/lib/python3.11/site-packages/playwright/async_api/_generated.py` (23,876 lines; `sync_api/_generated.py` is the identical mirror — spot-verified at the same offsets). Impl: `playwright/_impl/_page.py`. Entry point: `async_playwright()`/`sync_playwright()` return a `Playwright` instance (class generated in `_generated.py`, imported by `async_api/__init__.py`; `p.chromium` is a `BrowserType`).

### `chromium.launch_persistent_context(...)` — async_api/_generated.py:16780 (class BrowserType)
```python
async def launch_persistent_context(
    self,
    user_data_dir: Union[str, pathlib.Path],      # REQUIRED (positional)
    *,
    channel: Optional[str] = None,                # "chromium" opts into new headless mode
    executable_path: Optional[Union[pathlib.Path, str]] = None,
    args: Optional[Sequence[str]] = None,
    ignore_default_args: Optional[Union[bool, Sequence[str]]] = None,
    handle_sigint: Optional[bool] = None,         # default True — clean close on Ctrl-C
    handle_sigterm: Optional[bool] = None,        # default True
    handle_sighup: Optional[bool] = None,         # default True
    timeout: Optional[Union[float, datetime.timedelta]] = None,  # launch timeout, default 30s
    env: Optional[Dict[str, Union[str, float, bool]]] = None,    # defaults to process.env
    headless: Optional[bool] = None,              # default True → set False for headful
    proxy: Optional[ProxySettings] = None,
    downloads_path: Optional[Union[pathlib.Path, str]] = None,
    slow_mo: Optional[float] = None,
    viewport: Optional[ViewportSize] = None,      # {width: int, height: int}; default 1280x720; None = no fixed viewport
    screen: Optional[ViewportSize] = None,
    no_viewport: Optional[bool] = None,
    ignore_https_errors: Optional[bool] = None,
    java_script_enabled: Optional[bool] = None,
    bypass_csp: Optional[bool] = None,
    user_agent: Optional[str] = None,
    locale: Optional[str] = None,
    timezone_id: Optional[str] = None,
    geolocation: Optional[Geolocation] = None,
    permissions: Optional[Sequence[str]] = None,
    extra_http_headers: Optional[Dict[str, str]] = None,
    offline: Optional[bool] = None,
    http_credentials: Optional[HttpCredentials] = None,
    device_scale_factor: Optional[float] = None,
    is_mobile: Optional[bool] = None,             # context-level only (see Q2)
    has_touch: Optional[bool] = None,             # context-level only
    color_scheme: Optional[Literal["dark","light","no-preference","null"]] = None,
    reduced_motion: Optional[Literal["no-preference","null","reduce"]] = None,
    forced_colors: Optional[Literal["active","none","null"]] = None,
    contrast: Optional[Literal["more","no-preference","null"]] = None,
    accept_downloads: Optional[bool] = None,
    traces_dir: Optional[Union[pathlib.Path, str]] = None,     # don't set (cookie hygiene, Q6)
    artifacts_dir: Optional[Union[pathlib.Path, str]] = None,
    chromium_sandbox: Optional[bool] = None,      # default False
    firefox_user_prefs: Optional[Dict[str, Union[str, float, bool]]] = None,
    record_har_path: Optional[Union[pathlib.Path, str]] = None,   # don't set (cookie hygiene)
    record_har_omit_content: Optional[bool] = None,
    record_video_dir: Optional[Union[pathlib.Path, str]] = None,
    record_video_size: Optional[ViewportSize] = None,
    base_url: Optional[str] = None,
    strict_selectors: Optional[bool] = None,
    service_workers: Optional[Literal["allow","block"]] = None,
    record_har_url_filter: Optional[Union[Pattern, str]] = None,
    record_har_mode: Optional[Literal["full","minimal"]] = None,
    record_har_content: Optional[Literal["attach","embed","omit"]] = None,
    client_certificates: Optional[List[ClientCertificate]] = None,
) -> BrowserContext
```
Docstring key points (verbatim): "Launches browser that uses persistent storage located at `userDataDir` and returns the only context. Closing this context will automatically close the browser." `user_data_dir` "stores browser session data like cookies and local storage. Pass an empty string to create a temporary directory." "browsers do not allow launching multiple instances with the same User Data Directory." Chrome policy warning: do not point `userDataDir` at a real Chrome profile — use a dedicated empty folder.

### `page.screenshot(...)` — async_api/_generated.py:10790 (class Page)
```python
async def screenshot(
    self,
    *,
    timeout: Optional[Union[float, datetime.timedelta]] = None,
    type: Optional[Literal["jpeg", "png", "webp"]] = None,   # default "png"; "webp" new in 1.62
    path: Optional[Union[pathlib.Path, str]] = None,         # type inferred from extension
    quality: Optional[int] = None,                           # jpeg default 80; webp 100=lossless
    omit_background: Optional[bool] = None,
    full_page: Optional[bool] = None,
    clip: Optional[FloatRect] = None,                        # {x, y, width, height}
    animations: Optional[Literal["allow", "disabled"]] = None,  # use "disabled" for stable captures
    caret: Optional[Literal["hide", "initial"]] = None,
    scale: Optional[Literal["css", "device"]] = None,        # default "device"
    mask: Optional[Sequence[Locator]] = None,
    mask_color: Optional[str] = None,
    style: Optional[str] = None,
) -> bytes
```

### `page.set_viewport_size(...)` — async_api/_generated.py:10410
```python
async def set_viewport_size(self, viewport_size: ViewportSize) -> None   # {"width": int, "height": int}
# plus read-only property: page.viewport_size -> Optional[ViewportSize]
```
Docstring: "Each page can have its own viewport size… `page.set_viewport_size()` will resize the page… also reset `screen` size… set the viewport size before navigating to the page."

### `page.get_by_role(...)` — async_api/_generated.py:11440
```python
def get_by_role(
    self,
    role: Literal["alert","alertdialog","application","article","banner","blockquote","button","caption","cell","checkbox","code","columnheader","combobox","complementary","contentinfo","definition","deletion","dialog","directory","document","emphasis","feed","figure","form","generic","grid","gridcell","group","heading","img","insertion","link","list","listbox","listitem","log","main","marquee","math","menu","menubar","menuitem","menuitemcheckbox","menuitemradio","meter","navigation","none","note","option","paragraph","presentation","progressbar","radio","radiogroup","region","row","rowgroup","rowheader","scrollbar","search","searchbox","separator","slider","spinbutton","status","strong","subscript","superscript","switch","tab","table","tablist","tabpanel","term","textbox","time","timer","toolbar","tooltip","tree","treegrid","treeitem"],
    *,
    checked: Optional[bool] = None,
    disabled: Optional[bool] = None,
    expanded: Optional[bool] = None,
    include_hidden: Optional[bool] = None,
    level: Optional[int] = None,
    name: Optional[Union[Pattern[str], str]] = None,        # substring + case-insensitive unless exact=True
    pressed: Optional[bool] = None,
    selected: Optional[bool] = None,
    exact: Optional[bool] = None,
    description: Optional[Union[Pattern[str], str]] = None, # added in v1.60
) -> Locator
```

### Other verified Page/BrowserContext members
- `async def pause(self) -> None` — "requires Playwright to be started in a headed mode, with a falsy `headless` option" (line ~12500).
- `async def wait_for_timeout(self, timeout: Union[float, datetime.timedelta]) -> None` — docs: "should only be used for debugging" (line ~12170).
- `async def wait_for_load_state(self, state: Optional[Literal["domcontentloaded","load","networkidle"]] = None, *, timeout: Optional[...] = None) -> None` (line ~9910).
- `async def wait_for_url(self, url: Union[str, Pattern, Callable], *, wait_until: Optional[Literal["commit","domcontentloaded","load","networkidle"]] = None, timeout = None) -> None` (line ~9980).
- `async def goto(self, url: str, *, timeout=None, wait_until: Optional[Literal["commit","domcontentloaded","load","networkidle"]] = None, referer=None) -> Optional[Response]` (line ~9820).
- `async def wait_for_function(self, expression: str, *, arg=None, timeout=None, polling: Optional[Union[float, Literal["raf"]]] = None) -> JSHandle` (line ~12200).
- `async def cookies(self, urls: Optional[Union[str, Sequence[str]]] = None) -> List[Cookie]` — BrowserContext, line ~14540 (**must NOT call**, Q6).
- `async def new_page(self) -> Page`; `def set_default_timeout(self, timeout: Union[float, datetime.timedelta]) -> None` (BrowserContext, line ~14500).
- `async def add_cookies(self, cookies: Sequence[SetCookieParam])`; `clear_cookies(...)`; `storage_state()` (exists on BrowserContext/APIRequestContext — **must NOT call**, Q6).
- `page.aria_snapshot(*, boxes=None, depth=None, mode: Literal["ai","default"]=None, timeout=None) -> str` — verified via the official 1.62 class-page docs (v1.59+; `boxes` v1.60, `mode="ai"` adds `[ref=…]` element references for AI consumption). `expect(page).to_match_aria_snapshot(expected, timeout) -> None` verified in source (PageAssertions, line ~21800).
- Entry point: `Playwright` is a generated class (`async_api/__init__.py` imports it from `_generated`); `async_playwright()` returns `PlaywrightContextManager` (async_api/_context_manager.py); `p.chromium` is a `BrowserType` with `launch_persistent_context`.

---

## 2. Official-doc citations (fetched from playwright.dev, current docs = 1.62, matching installed wheel)

| URL | Confirms |
|---|---|
| https://playwright.dev/python/docs/api/class-browsertype | `launch_persistent_context` full option list (fetched, 38,659 chars) |
| https://playwright.dev/python/docs/api/class-browsercontext | `cookies()`, `storage_state()`, `new_page()` semantics (fetched, 64,376 chars) |
| https://playwright.dev/python/docs/api/class-page | `screenshot` (incl. `type="webp"`), `set_viewport_size`, `get_by_role` (+`description` v1.60), `pause`, `aria_snapshot` (v1.59, `boxes` v1.60, `mode="ai"`), `close`, `wait_for_*` (fetched, 237,819 chars; slices pulled) |
| https://playwright.dev/python/docs/api/class-locator | locator role/text queries, `aria_snapshot` on Locator (fetched, 134,043 chars) |
| https://playwright.dev/python/docs/release-notes | **v1.57: "After 3 years of being deprecated, we removed `page.accessibility` from our API."** v1.59: `page.aria_snapshot()` added. v1.60: `description` option on `get_by_role`. v1.62: WebP screenshots. v1.57: switch to Chrome for Testing (headed uses `chrome`, headless uses `chrome-headless-shell`) |
| https://playwright.dev/python/docs/api/class-accessibility | returns "page not available" — page removed from docs (evidence of removal) |
| https://playwright.dev/python/docs/accessibility | "This page is not available for Python" — guide removed/redirected |
| https://playwright.dev/python/docs/screenshots | stub/redirect page (1,248 chars); real content lives under class-page#page-screenshot |
| https://playwright.dev/python/docs/aria-snapshots | aria-snapshot syntax (cross-referenced from class-page docs) |

---

## 3. Answers to the 7 research questions

**Q1 — Persistent context.** Signature in §1. Call: `p.chromium.launch_persistent_context(user_data_dir="<dir>", headless=False, viewport={"width":1440,"height":900}, args=[...])`. Cookies/profile data live **inside `user_data_dir`** (Chromium profile: `Default/Cookies` SQLite, `Default/Local Storage`, IndexedDB, `Preferences`, `SingletonLock`, etc.) — that is the point of a persistent context. **Reuse across runs: yes** — the profile persists; sign in once, subsequent runs are already authenticated. Gotchas: (a) **profile lock** — "browsers do not allow launching multiple instances with the same User Data Directory" (verbatim docstring); never run two instances on one profile dir; (b) don't point at a real Chrome profile (Chrome policy, verbatim docstring); (c) **headful on this machine**: `DISPLAY=:1` (X11 GNOME), `XAUTHORITY` set, no `WAYLAND_DISPLAY` → a real window opens; **no xvfb needed** when run from this GUI session. If `DISPLAY` is absent (ssh/systemd runs), fail with a clear message and suggest `xvfb-run -a`. 1.62 headful uses the Chrome-for-Testing "chrome" build at `~/.cache/ms-playwright/chromium-1234/chrome-linux/chrome` — **currently missing; run `uv run python -m playwright install chromium` first**.

**Q2 — Viewport control.** Set at context creation: `viewport={"width":1440,"height":900}` (context-wide default, per-page overridable). Change per page: `page.set_viewport_size({"width":390,"height":844})`; read current: `page.viewport_size`. **Same profile at two viewports: launch with the desktop viewport, capture, then `set_viewport_size` to the mobile viewport and capture again — confirmed pattern** (persistent context keeps one page; viewport is per-page, not per-launch). Gotchas: (a) `set_viewport_size` also resets `screen` size (docstring); (b) `is_mobile`/`has_touch`/`device_scale_factor` are **context-level** — the mobile pass is CSS-width emulation, not true device emulation (fine for "fixed UI states at two viewports" if assertions are layout-only); (c) docs advise setting viewport before navigation; (d) if true mobile UA/touch is ever needed, relaunch the same profile with `is_mobile=True` — login persists across relaunches, so the profile still works.

**Q3 — Accessibility.** `page.accessibility.snapshot()` **does not exist in 1.62** — removed in **1.57** after 3 years of deprecation ("After 3 years of being deprecated, we removed `page.accessibility` from our API", official release notes). Verified three ways: release notes; no `Accessibility` class in the 23,876-line installed `_generated.py` (full-region scan; `accessibility` also absent from Page's property block); both `class-accessibility` and the `accessibility` guide 404 on playwright.dev. **In 1.56 it still existed but was deprecated** — so the premise "1.56 + accessibility.snapshot" was already fragile. Recommended API: **`page.get_by_role(role, name=...)`** (+ `exact`, `level`, `checked`, `disabled`, `expanded`, `pressed`, `selected`, `include_hidden`, `description`), plus `get_by_label`/`get_by_text`/`get_by_title`/`get_by_test_id`. **To dump the full accessibility tree of the page: `page.aria_snapshot()` → str** (aria-snapshot YAML; `mode="ai"` adds `[ref=e2]` element refs; `boxes=True` adds bounding boxes). Caveat from docs: role selectors "do not replace accessibility audits" — they are early feedback on ARIA structure, which is exactly the appraisal use case.

**Q4 — Screenshots & permissions.** Signature in §1: `page.screenshot(full_page=True, animations="disabled", path=..., type="png") -> bytes`; `clip={"x":..,"y":..,"width":..,"height":..}` for regions; `full_page=True` captures the full scrollable page; `type` defaults to `png`, jpeg/webp need `quality`. **File permissions**: Playwright Python writes `path` files itself via plain `open(path, "wb")`-style helpers (`make_dirs_for_file`/`async_writefile` in `playwright/_impl`; verified for `pdf`, same channel-bytes pattern for `screenshot`) → mode = `0666 & ~umask` (typically **0644**), dirs `0755`. **Reliable owner-only handling**: (a) capture to bytes and write yourself, e.g. `os.fdopen(os.open(p, os.O_WRONLY|os.O_CREAT|os.O_TRUNC, 0o600), "wb")`, or (b) `os.chmod(p, 0o600)` after capture; for dirs `os.makedirs(d, mode=0o700, exist_ok=True)` then `os.chmod(d, 0o700)` (umask can strip the mode at creation; chmod after is the guarantee). `.weaver/` is already gitignored, but the contract says owner-only → chmod everything.

**Q5 — Headful human-drives flow.** Real window: yes on this machine (`DISPLAY=:1`, X11; verified in the tool process env — same user/session the command will run from; re-check at runtime and error out with an xvfb hint if unset). Keep-open patterns: `page.pause()` works only headful and shows the Playwright inspector overlay with a Resume button (good for debugging, clunky for sign-in). **Recommended: sync API + `input("…press Enter after signing in…")`** — the browser and the node driver are separate processes, so blocking Python on `input()` leaves the browser fully interactive and Playwright's internal loop untouched (sync API runs its asyncio loop on a background thread anyway). Safe. With the async API, wrap in `await asyncio.to_thread(input, ...)` so the event loop isn't blocked if you also run a watchdog. After Enter: prefer signals over sleeps — `page.wait_for_url(...)` / `page.wait_for_load_state("load")` / `page.get_by_role(...).wait_for()`; `page.wait_for_timeout(ms)` exists but is flagged debug-only by the docs (one short settle wait after `set_viewport_size` is still pragmatic — CSS reflow is async). `handle_sigint` defaults True → Ctrl-C closes the browser cleanly.

**Q6 — Cookie/credential safety.** **Must NOT call**: `browser_context.cookies()` (returns full `List[Cookie]` incl. values); `browser_context.storage_state()` / APIRequestContext storage state (serializes cookies+localStorage to a dict/file); `context.request` usage that echoes headers. **Must NOT enable**: `record_har_path` (HAR captures request headers incl. cookies — if ever needed use `record_har_omit_content=True` + `record_har_mode="minimal"`); tracing on this profile (`traces_dir`); verbose driver logging that prints headers. **Storage layout**: the persistent profile lives entirely under `user_data_dir` (cookies at `<profile>/Default/Cookies`, etc.). Proposed split: **profile dir `.weaver/chatgpt-appraisal/profile/`** (holds cookies — never read, never copied, never committed) vs **output `.weaver/research/chatgpt-ui/<ISO-timestamp>/`** (screenshots + aria snapshots + manifest.json, all chmod 600/700). Both under gitignored `.weaver/`. Screenshots/aria dumps may contain conversation content → keep owner-only and out of deliverables/public files.

**Q7 — Official-doc + installed-source verification.** Done — §2 (docs) and §1 (source). Both agree because docs now track 1.62, matching the installed wheel. Recommend pinning playwright in `pyproject.toml` (it is currently an unpinned ad-hoc install — a reproducibility risk).

---

## 4. Recommended command design sketch

- **CLI**: add a `chatgpt-appraisal` subcommand to the existing `weaver` entry (`weaver.cli:main`, pyproject `[project.scripts]`). Flags: `--profile-dir` (default `.weaver/chatgpt-appraisal/profile`), `--out-dir` (default `.weaver/research/chatgpt-ui/<ts>`), `--viewport` overrides, `--no-screenshot`. Minimal viable alternative while CLI wiring lands: `uv run python -m weaver.chatgpt_appraisal`.
- **Module**: one file, `src/weaver/chatgpt_appraisal.py`, **sync API** (simplest for the `input()` human gate). Split internally:
  - *Pure logic (unit-testable, no browser)*: `VIEWPORTS = {"desktop": {"width":1440, "height":900}, "mobile": {"width":390, "height":844}}` (per the plan's two viewports), `STATE_CHECKLIST` spec list, `build_paths(profile_root, ts)`, `secure_write_bytes(path, data)` (os.open 0o600), `secure_makedirs(path)` (0o700 + chmod), `build_manifest(...)`/manifest schema + validation, `check_display()` (warn/fail if neither DISPLAY nor WAYLAND_DISPLAY), `probe_page(page, spec) -> record` against a *local fixture* (`data:text/html` with known roles) for CI.
  - *Live flow (thin, manual gate)*: `launch_persistent_context(user_data_dir=profile, headless=False, viewport=desktop)` → reuse `ctx.pages[0]` or `ctx.new_page()` → `goto("https://chatgpt.com/")` → **`input()` sign-in gate** (human signs in; Enter to continue) → for each viewport: `page.set_viewport_size(vp)` → settle (`wait_for_timeout(300–500)`) → probe `STATE_CHECKLIST` via `get_by_role(role, name=re, exact=…)` (visible/count/disabled per probe) → `page.screenshot(full_page=True, animations="disabled")` + `page.aria_snapshot()` → `secure_write` all artifacts → `ctx.close()` (profile persists; next run is already signed in).
- **Layout**:
  ```
  .weaver/
    chatgpt-appraisal/profile/            # user_data_dir — cookies live here; 700; never read/copied
    research/chatgpt-ui/<ISO8601-ts>/
      manifest.json                       # 600: viewport, per-probe results, url, timestamps, file list
      desktop.png   mobile.png            # 600 (or desktop-full.png if full_page)
      desktop.aria.txt  mobile.aria.txt   # 600: aria_snapshot dumps
  ```
- **STATE_CHECKLIST structure** (pure data):
  ```python
  ProbeSpec = dict  # {"id": str, "role": str, "name": str|re.Pattern, "exact": bool, "min_count": int}
  STATE_CHECKLIST: list[ProbeSpec] = [   # seed list; refine after the first live inspection
      {"id": "composer",  "role": "textbox", "name": re.compile(r"message|chatgpt", re.I)},
      {"id": "new_chat",  "role": "button",  "name": "New chat"},
      {"id": "sidebar",   "role": "button",  "name": re.compile(r"sidebar", re.I)},
      ...
  ]
  ```
  Record per probe: `{"visible": bool, "count": int, "disabled": bool, "matched_name": str|None}`. **Pure vs live split**: paths/permissions/manifest/checklist-validation/probe-record serialization are unit-testable (`tests/test_chatgpt_appraisal_plan.py`, pytest already configured, `asyncio_mode=auto`); the browser session itself is a manual Gate-2 smoke test (sign in once, capture both viewports, inspect the manifest).
- **Invariants enforced in code**: no `cookies()`/`storage_state()` call anywhere (add a test that greps the module for these names); no `record_har_*`/`traces_dir`; every artifact goes through `secure_write`; outputs only under `.weaver/`.

---

## 5. Gaps / things not fully pinned down

- `page.aria_snapshot`'s exact line in `async_api/_generated.py` was not located (the Page class region was fully scanned; it may live in a section whose offset mapping I didn't pin) — its existence/signature is verified from the official 1.62 docs and release notes, and `to_match_aria_snapshot` is verified in source. Non-blocking.
- `page.close()`/`page.title()`/`page.console_messages()` exist per 1.62 docs but were not needed for the design and were not line-pinned in source.
- Exact `DISPLAY` value (`:1`) was read from the subagent tool process env; the runtime shell could differ (unlikely — same user/session). The command should re-check at runtime.
- Whether the previously "verified headless launch" used `executable_path` against chromium-1228 is unknown; the mismatch (driver wants 1234) is the top operational risk regardless.

---

## 6. Top findings for the parent (decision-relevant)

1. **Installed Playwright is 1.62.0, not 1.56.0** — all contracts verified against 1.62; the plan should stop referencing 1.56.
2. **`page.accessibility.snapshot()` is REMOVED (since 1.57)** — use `get_by_role(role, name=…)` for probes and `page.aria_snapshot()` for tree dumps.
3. **Browser binary mismatch blocks any live run**: driver wants chromium-1234; only 1228 is downloaded → run `uv run python -m playwright install chromium` and re-verify headless+headful before building.
4. **Headful is viable here**: `DISPLAY=:1` X11 GNOME session present; no xvfb needed; human sign-in via sync `input()` is safe (browser is a separate process).
5. **Cookie hygiene plan**: profile in `.weaver/chatgpt-appraisal/profile/` (never `cookies()`/`storage_state()`/HAR/trace), screenshots+aria dumps in `.weaver/research/chatgpt-ui/<ts>/`, all chmod 600/700 (Playwright writes 0644 under default umask — chmod after capture is required).
