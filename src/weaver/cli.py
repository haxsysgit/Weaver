import argparse
import asyncio
import json
import os
from pathlib import Path
from typing import Sequence

from pydantic import ValidationError

from .chat_runtime import (
    _developer_tool_registry,
    open_chat_runtime,
)
from .config import DEFAULT_TIMEOUT_SECONDS, load_startup_config
from .corpus.errors import CorpusError, safe_error_message
from .corpus.tools import (
    build_novel_packet,
    export_novel,
    fetch_novel_chapters,
    inspect_novel_corpus,
    update_novel_corpus,
)
from .doctor import run_doctor
from .experiment import (
    provider_tool_contract_fake_responses,
    run_model_smoke,
    run_provider_tool_contract,
)
from .model_layer import (
    DEEPSEEK_FLASH,
    DEEPSEEK_MODELS,
    DEEPSEEK_PRO,
    DeepSeekProvider,
    FakeModelProvider,
    ModelLayer,
)
from .agent.tools import ToolRegistry
from .conversation.session import SessionWeave
from .tui import WeaverChat

# NOTE: the developer surface's system prompt and fake responses live in
# chat_runtime as DEVELOPER_SYSTEM_PROMPT and FAKE_RESPONSES. cli re-exports
# nothing.


def _state_root() -> Path:
    return Path(os.environ.get("WEAVER_STATE_DIR", ".weaver/runs"))


def _chat_state_dir() -> Path:
    """Conversation state dir: WEAVER_STATE_DIR or .weaver/state (Plan 010 §7)."""
    return Path(os.environ.get("WEAVER_STATE_DIR", ".weaver/state"))


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
    experiment.add_argument(
        "name",
        choices=["model-smoke", "provider-tool-contract"],
    )
    mode = experiment.add_mutually_exclusive_group(required=True)
    mode.add_argument("--fake", action="store_true", help="Use deterministic fake.")
    mode.add_argument("--live", action="store_true", help="Use explicit DeepSeek live.")

    library = subcommands.add_parser(
        "library",
        help="Browse and manage Weaver's novel library.",
    )

    chat = subcommands.add_parser(
        "chat",
        help="Open the Weaver chat window (live DeepSeek by default).",
    )
    chat.add_argument(
        "--fake",
        action="store_true",
        help="Use deterministic fake mode; default is live DeepSeek.",
    )
    library_commands = library.add_subparsers(dest="library_command", required=True)

    inspect = library_commands.add_parser("inspect")
    inspect.add_argument("novel_id", choices=["shadow-slave"])

    fetch = library_commands.add_parser("fetch")
    fetch.add_argument("novel_id", choices=["shadow-slave"])
    fetch.add_argument("start_chapter", type=int)
    fetch.add_argument("--end-chapter", type=int)
    fetch.add_argument(
        "--apply",
        action="store_true",
        help="Perform the fetch; the default is preview.",
    )

    update = library_commands.add_parser("update")
    update.add_argument("novel_id", choices=["shadow-slave"])
    update.add_argument("--through-chapter", type=int)
    update.add_argument(
        "--apply",
        action="store_true",
        help="Perform the update; the default is preview.",
    )

    packet = library_commands.add_parser("packet")
    packet.add_argument("novel_id", choices=["shadow-slave"])
    packet.add_argument("chapters", nargs="+", type=int)

    export = library_commands.add_parser("export")
    export.add_argument("novel_id", choices=["shadow-slave"])
    export.add_argument("format", choices=["txt", "md", "epub"])
    export.add_argument("--through-chapter", type=int)
    return parser


def _chat_tool_registry() -> ToolRegistry:
    """Echo + library inspection tools only (Plan 010 Contract §2).

    Thin adapter over the shared developer registry so existing tests
    keep importing the cli seam.
    """
    return _developer_tool_registry()


async def _build_chat_session(
    state_dir: Path,
    *,
    live: bool,
) -> tuple[SessionWeave, str, str]:
    """Build the exact chat session the TUI runs (test seam).

    Returns (sw, conversation_id, mode_label) with the session open and a
    fresh conversation started. _run_chat runs the app on top; tests use
    this builder to exercise the same code path without a terminal.
    """
    runtime = await open_chat_runtime(
        state_dir,
        live=live,
        surface="developer",
    )
    try:
        conv_id = await runtime.session.start_conversation("")
        return runtime.session, conv_id, runtime.mode_label
    except Exception:
        await runtime.close()
        raise


async def _run_chat(state_dir: Path, *, live: bool) -> int:
    """Open the session and run the TUI on the same event loop."""
    if live and not os.environ.get("DEEPSEEK_KEY"):
        print(
            "ERROR live chat requires DEEPSEEK_KEY; set it, add it to "
            ".weaver/config.toml ([api] key), or pass --fake for a scripted "
            "session. No call was made."
        )
        return 2
    sw, conv_id, mode_label = await _build_chat_session(
        state_dir,
        live=live,
    )
    app = WeaverChat(sw, conv_id, mode_label=mode_label)
    try:
        await app.run_async()
    finally:
        await sw.close()
    # pi prints its resume line at exit; resume lands in Phase C, so the
    # line names the notebook path the conversation lives in today.
    print(f"session saved: {conv_id} -> {state_dir / 'weaver.sqlite3'}")
    return 0


def run(argv: Sequence[str] | None = None) -> int:
    parser = _parser()
    args = parser.parse_args(argv)
    # .env and .weaver/config.toml feed os.environ (owner-directed 2026-07-31).
    load_startup_config()
    state_root = _state_root()

    if args.command == "chat":
        return asyncio.run(_run_chat(_chat_state_dir(), live=not args.fake))

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

    if args.command == "library":
        try:
            if args.library_command == "inspect":
                result = asyncio.run(inspect_novel_corpus(args.novel_id))
            elif args.library_command == "fetch":
                result = asyncio.run(
                    fetch_novel_chapters(
                        args.novel_id,
                        args.start_chapter,
                        end_chapter=args.end_chapter,
                        preview=not args.apply,
                    )
                )
            elif args.library_command == "update":
                result = asyncio.run(
                    update_novel_corpus(
                        args.novel_id,
                        through_chapter=args.through_chapter,
                        preview=not args.apply,
                    )
                )
            elif args.library_command == "packet":
                result = asyncio.run(build_novel_packet(args.novel_id, args.chapters))
            else:
                result = asyncio.run(
                    export_novel(
                        args.novel_id,
                        args.format,
                        through_chapter=args.through_chapter,
                    )
                )
        except ValidationError:
            print("ERROR library tool arguments failed validation.")
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
        statuses = {action.get("status") for action in result.get("actions", [])}
        return (
            1
            if statuses & failed
            or any(action_counts.get(status, 0) for status in failed)
            else 0
        )

    if args.fake:
        responses = ()
        if args.name == "provider-tool-contract":
            responses = provider_tool_contract_fake_responses(DEEPSEEK_MODELS)
        provider = FakeModelProvider(
            "deepseek",
            models=DEEPSEEK_MODELS,
            responses=responses,
        )
        mode = "fake"
        secrets: tuple[str, ...] = ()
        timeout = None
    else:
        api_key = os.environ.get("DEEPSEEK_KEY")
        if not api_key:
            print("ERROR live execution requires DEEPSEEK_KEY; no call was made.")
            return 2
        provider = DeepSeekProvider(
            api_key,
            timeout_seconds=DEFAULT_TIMEOUT_SECONDS,
        )
        mode = "live"
        secrets = (api_key,)
        timeout = DEFAULT_TIMEOUT_SECONDS

    model_layer = ModelLayer()
    model_layer.register_provider(provider)
    flash_model = model_layer.get_model(
        DEEPSEEK_FLASH.provider_id,
        DEEPSEEK_FLASH.model_id,
    )
    pro_model = model_layer.get_model(
        DEEPSEEK_PRO.provider_id,
        DEEPSEEK_PRO.model_id,
    )
    if args.name == "provider-tool-contract":
        result = asyncio.run(
            run_provider_tool_contract(
                model_layer,
                (flash_model, pro_model),
                mode=mode,
                receipt_root=state_root,
                secrets=secrets,
                timeout_seconds=timeout,
            )
        )
    else:
        result = asyncio.run(
            run_model_smoke(
                model_layer,
                flash_model=flash_model,
                pro_model=pro_model,
                mode=mode,
                receipt_root=state_root,
                secrets=secrets,
                timeout_seconds=timeout,
            )
        )
    print(f"{result.outcome.upper()} {args.name} receipt={result.run_dir}")
    if result.error_category:
        print(f"safe_error_category={result.error_category}")
    return 0 if result.outcome == "passed" else 1


def main() -> None:
    raise SystemExit(run())
