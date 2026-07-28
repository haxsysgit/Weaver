import argparse
import asyncio
import os
from pathlib import Path
from typing import Sequence

from dotenv import load_dotenv

from .config import DEFAULT_TIMEOUT_SECONDS
from .deepseek import DeepSeekClient
from .doctor import run_doctor
from .experiment import run_model_smoke
from .fake import FakeModelClient


def _state_root() -> Path:
    return Path(os.environ.get("WEAVER_STATE_DIR", ".weaver/runs"))


def _parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        prog="weaver",
        description="Run trustworthy, receipt-backed Weaver experiments.",
    )
    subcommands = parser.add_subparsers(dest="command", required=True)
    subcommands.add_parser(
        "doctor",
        help="Check local configuration without a network call.",
    )
    experiment = subcommands.add_parser(
        "experiment",
        help="Run an admitted experiment.",
    )
    experiment.add_argument("name", choices=["model-smoke"])
    mode = experiment.add_mutually_exclusive_group(required=True)
    mode.add_argument("--fake", action="store_true", help="Use deterministic fake.")
    mode.add_argument("--live", action="store_true", help="Use explicit DeepSeek live.")
    return parser


def run(argv: Sequence[str] | None = None) -> int:
    load_dotenv(dotenv_path=".env", override=False)
    parser = _parser()
    args = parser.parse_args(argv)
    state_root = _state_root()

    if args.command == "doctor":
        checks = run_doctor(
            state_root,
            credential_present=bool(os.environ.get("DEEPSEEK_KEY")),
        )
        for check in checks:
            marker = "PASS" if check["ok"] else "FAIL"
            if check.get("warning"):
                marker = "WARN"
            print(f"{marker} {check['name']}: {check['detail']}")
        return 0 if all(bool(check["ok"]) for check in checks) else 1

    if args.fake:
        client = FakeModelClient()
        mode = "fake"
        secrets: tuple[str, ...] = ()
        timeout = None
    else:
        api_key = os.environ.get("DEEPSEEK_KEY")
        if not api_key:
            print("ERROR live execution requires DEEPSEEK_KEY; no call was made.")
            return 2
        client = DeepSeekClient(
            api_key,
            timeout_seconds=DEFAULT_TIMEOUT_SECONDS,
        )
        mode = "live"
        secrets = (api_key,)
        timeout = DEFAULT_TIMEOUT_SECONDS

    result = asyncio.run(
        run_model_smoke(
            client,
            mode=mode,
            receipt_root=state_root,
            secrets=secrets,
            timeout_seconds=timeout,
        )
    )
    print(f"{result.outcome.upper()} model-smoke receipt={result.run_dir}")
    if result.error_category:
        print(f"safe_error_category={result.error_category}")
    return 0 if result.outcome == "passed" else 1


def main() -> None:
    raise SystemExit(run())
