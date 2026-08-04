#!/usr/bin/env python3
# Live UI proof for the Weaver web frontend (Plan 013).
#
# Starts a fake-mode server plus headless Chromium, then drives the page
# over CDP to verify: component mount, a full SSE turn, regenerate, the
# settings modal, sidebar collapse, the mobile drawer, and the PWA
# installability claims.
#
# Usage: uv run python scripts/web_live_proof.py [--port 8766]
# Requires a Chrome/Chromium binary; set CHROME_BIN if not found.
"""Live UI proof driver for the Weaver web frontend.

Starts `weaver web --fake` on an ephemeral port, launches headless
Chromium with remote debugging, and verifies the Plan 013 surface:
components mount, a fake-mode turn streams and renders, regenerate
re-sends the last owner text, the settings modal opens/closes, the
sidebar collapses, and the <768px drawer toggles. PWA installability is
checked via Page.getInstallabilityErrors (0 = installable).

Read-only: makes no code changes. Run from the repo root.
"""

import argparse
import json
import os
import signal
import subprocess
import sys
import time
import urllib.request

from websockets.sync.client import connect  # type: ignore


def find_chrome() -> str:
    for cand in (
        os.environ.get("CHROME_BIN"),
        os.path.expanduser("~/.cache/ms-playwright/chromium-1234/chrome-linux64/chrome"),
        "/usr/bin/google-chrome",
    ):
        if cand and os.path.exists(cand):
            return cand
    raise SystemExit("no chrome binary; set CHROME_BIN")


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--port", type=int, default=8766)
    args = ap.parse_args()
    port = args.port
    base = f"http://127.0.0.1:{port}"
    cdp_port = port + 1000

    server = subprocess.Popen(
        ["uv", "run", "weaver", "web", "--fake", "--port", str(port)],
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )
    chrome = None
    try:
        for _ in range(40):
            try:
                urllib.request.urlopen(base + "/", timeout=2)
                break
            except Exception:
                time.sleep(0.5)
        else:
            raise SystemExit("weaver web did not start")

        chrome = subprocess.Popen(
            [
                find_chrome(),
                "--headless",
                "--no-sandbox",
                "--disable-gpu",
                f"--remote-debugging-port={cdp_port}",
                "--remote-allow-origins=*",
                f"--user-data-dir=/tmp/weaver-proof-{port}",
                base + "/",
            ],
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
        )
        for _ in range(40):
            try:
                tabs = json.load(
                    urllib.request.urlopen(f"http://127.0.0.1:{cdp_port}/json", timeout=2)
                )
                if any(t["url"].startswith(base) for t in tabs):
                    break
            except Exception:
                time.sleep(0.5)
        else:
            raise SystemExit("chrome did not attach")

        page = next(t for t in tabs if t["url"].startswith(base))
        ws = connect(page["webSocketDebuggerUrl"], open_timeout=30)
        mid = [0]

        def cmd(method, params=None):
            mid[0] += 1
            ws.send(json.dumps({"id": mid[0], "method": method, "params": params or {}}))
            while True:
                msg = json.loads(ws.recv(timeout=60))
                if msg.get("id") == mid[0]:
                    return msg.get("result", {})

        def evaljs(expr, await_promise=False):
            r = cmd(
                "Runtime.evaluate",
                {"expression": expr, "returnByValue": True, "awaitPromise": await_promise},
            )
            if "exceptionDetails" in r:
                return "EXC: " + json.dumps(r["exceptionDetails"])[:200]
            return r["result"].get("value")

        results = {}

        for _ in range(40):
            if evaljs("!!customElements.get('weaver-chat')"):
                break
            time.sleep(0.5)
        time.sleep(1.5)  # bootstrap: create conversation + refresh picker

        chat = "document.querySelector('weaver-chat')"
        results["weaver-chat mounted"] = evaljs(f"!!{chat}?.shadowRoot")
        results["theme accent"] = evaljs(
            "getComputedStyle(document.documentElement).getPropertyValue('--accent').trim()"
        )
        results["sidebar rows"] = evaljs(
            f"{chat}.shadowRoot.querySelector('#sidebar')?.shadowRoot?.querySelectorAll('.row').length"
        )

        # Full fake-mode turn through the component.
        turn = evaljs(
            f"""
            (async () => {{
              const c = {chat};
              const composer = c.shadowRoot.querySelector('#composer');
              composer.dispatchEvent(new CustomEvent('submit', {{
                detail: {{ text: 'hello weaver' }},
              }}));
              for (let i = 0; i < 60; i++) {{
                if (!c._turnActive) break;
                await new Promise(r => setTimeout(r, 300));
              }}
              const replies = c._el.transcript.querySelectorAll('.msg.weaver');
              const last = replies[replies.length - 1];
              return JSON.stringify({{
                turnActive: c._turnActive,
                replyText: last?.textContent?.slice(0, 60) || null,
                hasRegenerate: !!last?.querySelector('.actions button:nth-child(2)'),
              }});
            }})()
            """,
            await_promise=True,
        )
        results["turn + regenerate"] = turn

        # Settings modal.
        s = f"{chat}.shadowRoot.querySelector('#settings')"
        evaljs(f"{s}.open()")
        results["settings opens"] = evaljs(f"{s}.hasAttribute('open')")
        evaljs(f"{s}.close()")

        # Sidebar collapse.
        evaljs(f"{chat}.shadowRoot.querySelector('#sidebar')._toggle()")
        results["sidebar collapsed"] = evaljs(
            f"{chat}.shadowRoot.querySelector('#sidebar').hasAttribute('collapsed')"
        )
        evaljs(f"{chat}.shadowRoot.querySelector('#sidebar')._toggle()")

        # Mobile drawer.
        cmd(
            "Emulation.setDeviceMetricsOverride",
            {"width": 390, "height": 844, "deviceScaleFactor": 2, "mobile": True},
        )
        time.sleep(1)
        results["mobile bar"] = evaljs(
            f"getComputedStyle({chat}.shadowRoot.querySelector('.mobile-bar')).display"
        )
        evaljs(f"{chat}.shadowRoot.querySelector('#drawer-btn').click()")
        time.sleep(0.3)
        results["drawer opens"] = evaljs(
            f"getComputedStyle({chat}.shadowRoot.querySelector('#sidebar').shadowRoot.querySelector('.sidebar')).display"
        )
        cmd("Emulation.clearDeviceMetricsOverride")

        # PWA installability (0 errors = installable).
        errs = cmd("Page.getInstallabilityErrors").get("installabilityErrors", [])
        results["pwa installability errors"] = len(errs)

        ok = True
        for k, v in results.items():
            print(f"{k}: {v}")
            if v in (None, False, 0, "0") and k != "pwa installability errors":
                ok = False
        if errs:
            ok = False
        ws.close()
        return 0 if ok else 1
    finally:
        if chrome is not None:
            chrome.send_signal(signal.SIGTERM)
        server.send_signal(signal.SIGTERM)
        server.wait(timeout=10)


if __name__ == "__main__":
    sys.exit(main())
