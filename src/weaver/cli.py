import argparse
import asyncio
import json
import os
from pathlib import Path
from typing import Sequence

from dotenv import load_dotenv
from pydantic import ValidationError

from .config import DEFAULT_TIMEOUT_SECONDS
from .corpus.errors import CorpusError, safe_error_message
from .corpus.tools import (
    build_novel_packet,
    export_novel,
    fetch_novel_chapters,
    inspect_novel_corpus,
    update_novel_corpus,
)
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

    corpus = subcommands.add_parser(
        "corpus",
        help="Call the deterministic private-corpus tools.",
    )
    corpus_commands = corpus.add_subparsers(dest="corpus_command", required=True)

    inspect = corpus_commands.add_parser("inspect")
    inspect.add_argument("novel_id", choices=["shadow-slave"])

    fetch = corpus_commands.add_parser("fetch")
    fetch.add_argument("novel_id", choices=["shadow-slave"])
    fetch.add_argument("start_chapter", type=int)
    fetch.add_argument("--end-chapter", type=int)
    fetch.add_argument(
        "--apply",
        action="store_true",
        help="Perform the fetch; the default is preview.",
    )

    update = corpus_commands.add_parser("update")
    update.add_argument("novel_id", choices=["shadow-slave"])
    update.add_argument("--through-chapter", type=int)
    update.add_argument(
        "--apply",
        action="store_true",
        help="Perform the update; the default is preview.",
    )

    packet = corpus_commands.add_parser("packet")
    packet.add_argument("novel_id", choices=["shadow-slave"])
    packet.add_argument("chapters", nargs="+", type=int)

    export = corpus_commands.add_parser("export")
    export.add_argument("novel_id", choices=["shadow-slave"])
    export.add_argument("format", choices=["txt", "md", "epub"])
    export.add_argument("--through-chapter", type=int)
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

    if args.command == "corpus":
        try:
            if args.corpus_command == "inspect":
                result = asyncio.run(inspect_novel_corpus(args.novel_id))
            elif args.corpus_command == "fetch":
                result = asyncio.run(
                    fetch_novel_chapters(
                        args.novel_id,
                        args.start_chapter,
                        end_chapter=args.end_chapter,
                        preview=not args.apply,
                    )
                )
            elif args.corpus_command == "update":
                result = asyncio.run(
                    update_novel_corpus(
                        args.novel_id,
                        through_chapter=args.through_chapter,
                        preview=not args.apply,
                    )
                )
            elif args.corpus_command == "packet":
                result = asyncio.run(
                    build_novel_packet(args.novel_id, args.chapters)
                )
            else:
                result = asyncio.run(
                    export_novel(
                        args.novel_id,
                        args.format,
                        through_chapter=args.through_chapter,
                    )
                )
        except ValidationError:
            print("ERROR corpus tool arguments failed validation.")
            return 2
        except CorpusError as exc:
            print(f"ERROR {exc.category.value}: {safe_error_message(exc.category)}")
            return 1
        print(json.dumps(result, indent=2, sort_keys=True))
        failed = {
            "failed",
            "conflict",
        }
        action_counts = result.get("action_counts", {})
        statuses = {
            action.get("status")
            for action in result.get("actions", [])
        }
        return (
            1
            if statuses & failed
            or any(action_counts.get(status, 0) for status in failed)
            else 0
        )

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
