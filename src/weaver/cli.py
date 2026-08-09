import argparse
import asyncio
import json
import os
from pathlib import Path
from typing import Sequence

from pydantic import ValidationError

from .chat_runtime import open_chat_runtime
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
    DeepSeekProvider,
    FakeModelProvider,
    ModelLayer,
)
from .web import serve_web

# NOTE: the developer surface's system prompt and fake responses live in
# chat_runtime as DEVELOPER_SYSTEM_PROMPT and FAKE_RESPONSES. cli re-exports
# nothing.


def _port_arg(value: str) -> int:
    """Argparse type: a TCP port in 1..65535, else a parse error (exit 2)."""
    port = int(value)
    if not 1 <= port <= 65535:
        raise argparse.ArgumentTypeError("port must be between 1 and 65535")
    return port


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

    refresh = subcommands.add_parser(
        "refresh",
        help="Keep the library fresh: fetch missing chapters and probe "
        "for new ones until the source stops serving them (preview by "
        "default, --apply performs the refresh).",
    )
    refresh.add_argument(
        "--through",
        dest="through_chapter",
        type=int,
        help="Cap the refresh at this chapter number.",
    )
    refresh.add_argument(
        "--apply",
        action="store_true",
        help="Perform the refresh; the default is a preview.",
    )

    web = subcommands.add_parser(
        "web",
        help="Serve the local browser chat (live DeepSeek by default).",
    )
    web.add_argument(
        "--fake",
        action="store_true",
        help="Use deterministic fake mode; default is live DeepSeek.",
    )
    web.add_argument(
        "--port",
        type=_port_arg,
        default=8000,
        help="Port to bind on 127.0.0.1 (default 8000).",
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


async def _run_web(state_dir: Path, *, live: bool, port: int) -> int:
    """Serve the local browser chat on 127.0.0.1.

    Missing live credentials exit 2 before state is opened or a socket
    binds (Plan 011 Gate 2 contract).
    """
    if live and not os.environ.get("DEEPSEEK_KEY"):
        print(
            "ERROR live web chat requires DEEPSEEK_KEY; set it, add it to "
            ".weaver/config.toml ([api] key), or pass --fake for a scripted "
            "session. No call was made."
        )
        return 2
    runtime = await open_chat_runtime(
        state_dir,
        live=live,
        surface="web",
    )
    try:
        return await serve_web(runtime, host="127.0.0.1", port=port)
    finally:
        await runtime.close()


def _firecrawl_api_key() -> str | None:
    """FIRECRAWL_API_KEY from the environment (already fed from the
    repo .env by load_startup_config), falling back to the firecrawl
    CLI's own credentials file so `weaver refresh` works on a machine
    that has run `firecrawl login`."""
    key = os.environ.get("FIRECRAWL_API_KEY")
    if key:
        return key
    credentials = Path.home() / ".config" / "firecrawl-cli" / "credentials.json"
    try:
        return json.loads(credentials.read_text()).get("apiKey")
    except (OSError, ValueError):
        return None


def _run_refresh(*, apply: bool, through_chapter: int | None) -> int:
    """The standing shelf-refresh automation: fill local gaps, then
    probe consecutive chapter URLs until the source 404s (Plan 002
    machinery behind `weaver library update`)."""
    if apply:
        key = _firecrawl_api_key()
        if not key:
            print(
                "ERROR live refresh needs FIRECRAWL_API_KEY: put it in the "
                "repo .env, or run `firecrawl login` so the CLI credentials "
                "file can be used."
            )
            return 2
        os.environ.setdefault("FIRECRAWL_API_KEY", key)
    try:
        result = asyncio.run(
            update_novel_corpus(
                "shadow-slave",
                through_chapter=through_chapter,
                preview=not apply,
            )
        )
    except CorpusError as exc:
        print(f"ERROR {exc.category.value}: {safe_error_message(exc.category)}")
        return 1
    counts = result.get("action_counts", {})
    if result.get("preview"):
        print(
            "refresh preview: "
            f"{counts.get('previewed', 0)} chapter action(s) up to the "
            "known last chapter"
        )
    else:
        print(
            f"refresh done: saved {counts.get('saved', 0)}, "
            f"replaced {counts.get('replaced', 0)}, "
            f"skipped {counts.get('skipped', 0)}"
        )
        stopped = result.get("stopped_at_chapter")
        if stopped:
            print(f"stopped at chapter {stopped} ({result.get('stop_reason')})")
    receipt = result.get("receipt_path")
    if receipt:
        print(f"receipt: {receipt}")
    failed = {"failed", "conflict"}
    statuses = {action.get("status") for action in result.get("actions", [])}
    return (
        1
        if statuses & failed or any(counts.get(status, 0) for status in failed)
        else 0
    )


def run(argv: Sequence[str] | None = None) -> int:
    parser = _parser()
    args = parser.parse_args(argv)
    # .env and .weaver/config.toml feed os.environ (owner-directed 2026-07-31).
    load_startup_config()
    state_root = _state_root()

    if args.command == "web":
        return asyncio.run(_run_web(_chat_state_dir(), live=not args.fake, port=args.port))

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

    if args.command == "refresh":
        return _run_refresh(
            apply=args.apply,
            through_chapter=args.through_chapter,
        )

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
    if args.name == "provider-tool-contract":
        result = asyncio.run(
            run_provider_tool_contract(
                model_layer,
                (flash_model,),
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
                model=flash_model,
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
