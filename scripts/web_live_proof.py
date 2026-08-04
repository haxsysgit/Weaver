#!/usr/bin/env python3
"""Drive the built React UI against a temporary fake-mode Weaver server.

The proof uses a temporary state directory, so it never opens or changes the
owner's conversations. It checks the real built assets, HTTP API, SSE turn,
conversation picker, regenerate scope, mobile drawer, fixed viewport, and PWA.
"""

import argparse
import json
import os
import signal
import subprocess
import sys
import tempfile
import time
import urllib.request

from websockets.sync.client import connect  # type: ignore


def find_chrome() -> str:
    candidates = (
        os.environ.get("CHROME_BIN"),
        os.path.expanduser(
            "~/.cache/ms-playwright/chromium-1234/chrome-linux64/chrome"
        ),
        "/usr/bin/google-chrome",
    )
    for candidate in candidates:
        if candidate and os.path.exists(candidate):
            return candidate
    raise SystemExit("no Chrome binary found; set CHROME_BIN")


class BrowserPage:
    def __init__(self, web_socket_url: str) -> None:
        self.socket = connect(web_socket_url, open_timeout=30)
        self.message_id = 0

    def close(self) -> None:
        self.socket.close()

    def command(self, method: str, params: dict | None = None) -> dict:
        self.message_id += 1
        expected_id = self.message_id
        self.socket.send(
            json.dumps(
                {
                    "id": expected_id,
                    "method": method,
                    "params": params or {},
                }
            )
        )
        while True:
            message = json.loads(self.socket.recv(timeout=60))
            if message.get("id") == expected_id:
                return message.get("result", {})

    def evaluate(self, expression: str, *, await_promise: bool = False):
        result = self.command(
            "Runtime.evaluate",
            {
                "expression": expression,
                "returnByValue": True,
                "awaitPromise": await_promise,
            },
        )
        if "exceptionDetails" in result:
            details = json.dumps(result["exceptionDetails"])
            raise RuntimeError(f"browser expression failed: {details[:300]}")
        return result["result"].get("value")


def wait_for_server(base_url: str) -> None:
    for _ in range(40):
        try:
            urllib.request.urlopen(base_url + "/", timeout=2)
            return
        except Exception:
            time.sleep(0.5)
    raise SystemExit("weaver web did not start")


def wait_for_browser(cdp_port: int, base_url: str) -> dict:
    for _ in range(40):
        try:
            tabs = json.load(
                urllib.request.urlopen(
                    f"http://127.0.0.1:{cdp_port}/json",
                    timeout=2,
                )
            )
            for tab in tabs:
                if tab["url"].startswith(base_url):
                    return tab
        except Exception:
            time.sleep(0.5)
    raise SystemExit("Chrome did not attach")


def wait_for_app(page: BrowserPage) -> None:
    for _ in range(40):
        if page.evaluate("!!document.querySelector('.chat-app')"):
            return
        time.sleep(0.25)
    raise SystemExit("React app did not mount")


def start_server(
    port: int,
    state_directory: str,
    *,
    live: bool,
) -> subprocess.Popen:
    environment = os.environ.copy()
    environment["WEAVER_STATE_DIR"] = state_directory
    command = ["uv", "run", "weaver", "web"]
    if not live:
        command.append("--fake")
    command.extend(["--port", str(port)])
    return subprocess.Popen(
        command,
        env=environment,
        start_new_session=True,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )


def stop_process(process: subprocess.Popen | None) -> None:
    if process is None or process.poll() is not None:
        return
    try:
        os.killpg(process.pid, signal.SIGTERM)
    except ProcessLookupError:
        pass
    process.wait(timeout=10)


def wait_for_service_worker(page: BrowserPage) -> bool:
    return bool(
        page.evaluate(
            "navigator.serviceWorker.ready.then(() => "
            "new Promise((resolve) => {"
            "if (navigator.serviceWorker.controller) { resolve(true); return; }"
            "navigator.serviceWorker.addEventListener('controllerchange', "
            "() => resolve(true), { once: true });"
            "setTimeout(() => resolve(false), 5000);"
            "}))",
            await_promise=True,
        )
    )


def run_mode_switch_check(
    page: BrowserPage,
    base_url: str,
    port: int,
    state_directory: str,
    fake_server: subprocess.Popen,
) -> tuple[dict[str, object], subprocess.Popen]:
    wait_for_app(page)
    controlled = wait_for_service_worker(page)
    fake_copy = page.evaluate("document.querySelector('.privacy-line').textContent.trim()")

    stop_process(fake_server)
    live_server = start_server(port, state_directory, live=True)
    wait_for_server(base_url)
    page.evaluate("location.reload(); true")
    wait_for_app(page)
    live_copy = page.evaluate("document.querySelector('.privacy-line').textContent.trim()")
    return (
        {
            "service worker controlled page": controlled,
            "fake copy was local": "No model request is sent" in fake_copy,
            "live copy came from network": "Messages are sent to DeepSeek" in live_copy,
            "stale fake copy absent": "No model request is sent" not in live_copy,
        },
        live_server,
    )


def run_offline_shell_check(
    page: BrowserPage,
    server: subprocess.Popen,
) -> dict[str, object]:
    wait_for_app(page)
    controlled = wait_for_service_worker(page)
    page.evaluate("window.__weaverBeforeOfflineReload = true; true")
    stop_process(server)
    page.command("Page.reload", {"ignoreCache": True})

    for _ in range(40):
        replaced = page.evaluate("window.__weaverBeforeOfflineReload !== true")
        mounted = page.evaluate("!!document.querySelector('.chat-app')")
        if replaced and mounted:
            break
        time.sleep(0.25)

    script_loaded = page.evaluate(
        "Array.from(performance.getEntriesByType('resource'))"
        ".some((entry) => /weaver-.*\\.js$/.test(entry.name))"
    )
    style_loaded = page.evaluate(
        "Array.from(document.styleSheets).some((sheet) => "
        "/weaver-.*\\.css$/.test(sheet.href || ''))"
    )
    return {
        "service worker controlled page": controlled,
        "offline React shell mounted": bool(mounted),
        "offline versioned script loaded": bool(script_loaded),
        "offline versioned style loaded": bool(style_loaded),
    }


def run_browser_checks(page: BrowserPage) -> dict[str, object]:
    results: dict[str, object] = {}
    wait_for_app(page)
    time.sleep(0.5)

    results["react app mounted"] = page.evaluate(
        "!!document.querySelector('.chat-app')"
    )
    results["shadow theme"] = page.evaluate(
        "getComputedStyle(document.documentElement)"
        ".getPropertyValue('--accent-crimson').trim()"
    )

    turn_result = page.evaluate(
        """
        (async () => {
          const input = document.querySelector('textarea[aria-label="Message Weaver"]');
          const setter = Object.getOwnPropertyDescriptor(
            HTMLTextAreaElement.prototype,
            'value',
          ).set;
          setter.call(input, 'Could Asterion beat Azarax?');
          input.dispatchEvent(new Event('input', { bubbles: true }));
          await new Promise((resolve) => setTimeout(resolve, 0));
          let sawStop = false;
          let sawSendHidden = false;
          const captureTurnControls = () => {
            const send = document.querySelector('button[aria-label="Send message"]');
            const stop = document.querySelector('button[aria-label="Stop Weaver"]');
            sawStop ||= !!stop;
            sawSendHidden ||= !send;
          };
          const controlsObserver = new MutationObserver(captureTurnControls);
          controlsObserver.observe(document.body, { childList: true, subtree: true });
          document.querySelector('button[aria-label="Send message"]').click();
          await new Promise((resolve) => setTimeout(resolve, 0));
          captureTurnControls();
          for (let attempt = 0; attempt < 80; attempt += 1) {
            if (document.querySelector('button[aria-label="Regenerate reply"]')) break;
            await new Promise((resolve) => setTimeout(resolve, 100));
          }
          controlsObserver.disconnect();
          const replies = document.querySelectorAll('.message-weaver');
          const latestReply = replies[replies.length - 1];
          const replyText = latestReply?.querySelector('.markdown-body')?.textContent || '';
          return {
            during: { send: !sawSendHidden, stop: sawStop },
            replyReceived: replyText.length > 0,
            replyCharacters: replyText.length,
            regenerate: !!document.querySelector('button[aria-label="Regenerate reply"]'),
            sendAfter: !!document.querySelector('button[aria-label="Send message"]'),
            stopAfter: !!document.querySelector('button[aria-label="Stop Weaver"]'),
          };
        })()
        """,
        await_promise=True,
    )
    results["turn state"] = turn_result

    new_weave_result = page.evaluate(
        """
        (async () => {
          document.querySelector('.new-weave-button').click();
          for (let attempt = 0; attempt < 50; attempt += 1) {
            if (document.querySelector('.empty-weave')) break;
            await new Promise((resolve) => setTimeout(resolve, 100));
          }
          return {
            empty: !!document.querySelector('.empty-weave'),
            regenerate: !!document.querySelector('button[aria-label="Regenerate reply"]'),
            conversationCount: document.querySelectorAll('.conversation-item').length,
            storageKeys: Object.keys(localStorage),
          };
        })()
        """,
        await_promise=True,
    )
    results["new weave scope"] = new_weave_result

    page.evaluate("location.reload(); true")
    wait_for_app(page)
    time.sleep(0.5)
    results["reload kept active conversation"] = page.evaluate(
        "document.querySelector('.conversation-item-active') !== null"
    )

    results["desktop rail toggle"] = page.evaluate(
        """
        (async () => {
          const rail = document.querySelector('.conversation-rail');
          const closeControl = rail.querySelector('.rail-close');
          closeControl.click();
          await new Promise((resolve) => setTimeout(resolve, 350));
          const openControl = document.querySelector('.rail-toggle-main');
          const collapsed = rail.classList.contains('conversation-rail-collapsed');
          const customSigil = !!openControl.querySelector('.fate-thread-gate-icon');
          const openControlVisible = getComputedStyle(openControl).display !== 'none';
          openControl.click();
          await new Promise((resolve) => setTimeout(resolve, 350));
          return {
            collapsed,
            customSigil,
            openControlVisible,
            restored: !rail.classList.contains('conversation-rail-collapsed'),
          };
        })()
        """,
        await_promise=True,
    )

    results["fixed viewport"] = page.evaluate(
        """
        (() => {
          const column = document.querySelector('.transcript-column');
          const sample = document.querySelector('.empty-weave');
          for (let index = 0; index < 30; index += 1) {
            const row = document.createElement('div');
            row.className = 'message message-owner';
            const bubble = document.createElement('div');
            bubble.className = 'owner-bubble';
            bubble.textContent = 'long conversation proof row';
            row.appendChild(bubble);
            column.insertBefore(row, sample);
          }
          const transcript = document.querySelector('.transcript');
          return {
            pageHeight: document.scrollingElement.scrollHeight,
            viewportHeight: window.innerHeight,
            transcriptScrolls: transcript.scrollHeight > transcript.clientHeight,
          };
        })()
        """
    )

    page.command(
        "Emulation.setDeviceMetricsOverride",
        {
            "width": 390,
            "height": 844,
            "deviceScaleFactor": 2,
            "mobile": True,
        },
    )
    time.sleep(0.3)
    mobile_result = page.evaluate(
        """
        (async () => {
          const menu = document.querySelector('.rail-toggle-main');
          menu.click();
          await new Promise((resolve) => setTimeout(resolve, 50));
          const rail = document.querySelector('.conversation-rail');
          return {
            menuVisible: getComputedStyle(menu).display !== 'none',
            drawerOpen: rail.classList.contains('conversation-rail-open'),
          };
        })()
        """,
        await_promise=True,
    )
    results["mobile drawer"] = mobile_result
    page.command("Emulation.clearDeviceMetricsOverride")

    installability_errors = page.command("Page.getInstallabilityErrors").get(
        "installabilityErrors",
        [],
    )
    results["pwa installability errors"] = len(installability_errors)
    return results


def results_pass(results: dict[str, object]) -> bool:
    turn = results["turn state"]
    new_weave = results["new weave scope"]
    viewport = results["fixed viewport"]
    desktop_toggle = results["desktop rail toggle"]
    mobile = results["mobile drawer"]

    return bool(
        results["react app mounted"]
        and results["shadow theme"] == "#ba3c35"
        and isinstance(turn, dict)
        and turn["during"] == {"send": False, "stop": True}
        and turn["replyReceived"]
        and turn["replyCharacters"] > 0
        and turn["regenerate"]
        and turn["sendAfter"]
        and not turn["stopAfter"]
        and isinstance(new_weave, dict)
        and new_weave["empty"]
        and not new_weave["regenerate"]
        and new_weave["conversationCount"] >= 2
        and new_weave["storageKeys"] == ["weaver.active-conversation"]
        and results["reload kept active conversation"]
        and isinstance(desktop_toggle, dict)
        and desktop_toggle["collapsed"]
        and desktop_toggle["customSigil"]
        and desktop_toggle["openControlVisible"]
        and desktop_toggle["restored"]
        and isinstance(viewport, dict)
        and viewport["pageHeight"] == viewport["viewportHeight"]
        and viewport["transcriptScrolls"]
        and isinstance(mobile, dict)
        and mobile["menuVisible"]
        and mobile["drawerOpen"]
        and results["pwa installability errors"] == 0
    )


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--port", type=int, default=8766)
    parser.add_argument(
        "--live",
        action="store_true",
        help="Use the configured live model instead of deterministic fake mode.",
    )
    parser.add_argument(
        "--mode-switch",
        action="store_true",
        help="Prove an installed worker cannot pin fake privacy copy after a live restart.",
    )
    parser.add_argument(
        "--offline-shell",
        action="store_true",
        help="Prove a first-visit install reloads after the server stops.",
    )
    args = parser.parse_args()
    base_url = f"http://127.0.0.1:{args.port}"
    cdp_port = args.port + 1000

    with tempfile.TemporaryDirectory(prefix="weaver-web-proof-") as state_directory:
        server = start_server(
            args.port,
            state_directory,
            live=args.live and not args.mode_switch and not args.offline_shell,
        )
        chrome = None
        page = None
        try:
            wait_for_server(base_url)
            chrome = subprocess.Popen(
                [
                    find_chrome(),
                    "--headless=new",
                    "--no-sandbox",
                    "--disable-gpu",
                    "--window-size=1440,900",
                    f"--remote-debugging-port={cdp_port}",
                    "--remote-allow-origins=*",
                    f"--user-data-dir={state_directory}/chrome",
                    base_url + "/",
                ],
                start_new_session=True,
                stdout=subprocess.DEVNULL,
                stderr=subprocess.DEVNULL,
            )
            tab = wait_for_browser(cdp_port, base_url)
            page = BrowserPage(tab["webSocketDebuggerUrl"])
            if args.offline_shell:
                results = run_offline_shell_check(page, server)
                server = None
                for name, value in results.items():
                    print(f"{name}: {json.dumps(value, sort_keys=True)}")
                return 0 if all(results.values()) else 1
            if args.mode_switch:
                results, server = run_mode_switch_check(
                    page,
                    base_url,
                    args.port,
                    state_directory,
                    server,
                )
                for name, value in results.items():
                    print(f"{name}: {json.dumps(value, sort_keys=True)}")
                return 0 if all(results.values()) else 1
            results = run_browser_checks(page)
            for name, value in results.items():
                print(f"{name}: {json.dumps(value, sort_keys=True)}")
            return 0 if results_pass(results) else 1
        finally:
            try:
                if page is not None:
                    page.close()
            finally:
                try:
                    stop_process(chrome)
                finally:
                    stop_process(server)


if __name__ == "__main__":
    sys.exit(main())
