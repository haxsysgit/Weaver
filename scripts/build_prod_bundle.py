"""Build the production state bundle for the v1 server.

The bundle is the ONLY thing that ever leaves the owner's machine. It
mirrors the project root layout so the server can run with
WEAVER_PROJECT_ROOT=bundle. It contains exactly:

  novels/shadow-slave/   the raw chapter files weaver reads from
  .weaver/retrieval/     the embedded qdrant index (dense + sparse)
  .weaver/knowledge/     the story notebook (people, places, statements)

The corpus packets (.weaver/corpus/) are fetch-pipeline artifacts, not
read-path data: the reading machinery (ChapterIndex) opens chapter text
from novels/shadow-slave directly. Everything else (research, receipts,
runs, state, reviews, appraisals, config.toml) is private and must NOT
be in the bundle. This script copies only the three, writes a manifest
with sizes + sha256 hashes, and fails if it finds anything unexpected
in the output.

Usage:
  python scripts/build_prod_bundle.py [--out DIR] [--demo]

--demo runs a self-check with a fake state dir and temp output.
"""

from __future__ import annotations

import argparse
import hashlib
import json
import os
import shutil
import sys
import tempfile
from pathlib import Path

PRIVATE_STATE_DIR = Path(".weaver")

# Allowed bundle paths: bundle-relative name -> (source path, subdirs to
# skip). Mirrors the project root layout so the server runs with
# WEAVER_PROJECT_ROOT=bundle.
BUNDLE_SPEC = {
    "novels": (Path("novels"), set()),
    ".weaver/retrieval": (PRIVATE_STATE_DIR / "retrieval", set()),
    ".weaver/knowledge": (PRIVATE_STATE_DIR / "knowledge", {"receipts"}),
}

# Private paths that must never appear in the bundle, by name.
FORBIDDEN_NAMES = {
    "research",
    "receipts",
    "runs",
    "state",
    "reviews",
    "plan002-models",
    "weaver-chatgpt-appraisal",
    "config.toml",
    ".env",
}


def _sha256(path: Path) -> str:
    h = hashlib.sha256()
    with path.open("rb") as f:
        for chunk in iter(lambda: f.read(1 << 20), b""):
            h.update(chunk)
    return h.hexdigest()


def build_bundle(state_dir: Path, out_dir: Path) -> dict:
    if not state_dir.is_dir():
        raise SystemExit(f"state dir not found: {state_dir}")

    files: list[dict] = []
    total_bytes = 0
    for bundle_name, (source_rel, skip) in BUNDLE_SPEC.items():
        source = state_dir / source_rel
        if not source.is_dir():
            raise SystemExit(f"missing required state dir: {source}")
        dest = out_dir / bundle_name
        shutil.copytree(
            source,
            dest,
            ignore=shutil.ignore_patterns(*skip) if skip else None,
        )
        for path in sorted(dest.rglob("*")):
            if path.is_file():
                rel = path.relative_to(out_dir).as_posix()
                size = path.stat().st_size
                total_bytes += size
                files.append({"path": rel, "bytes": size, "sha256": _sha256(path)})

    # Leak check: nothing with a forbidden name anywhere in the bundle,
    # as a file OR a directory (empty dirs must not slip through).
    paths = [f["path"] for f in files]
    for dirpath, _dirnames, filenames in os.walk(out_dir):
        for name in filenames:
            paths.append((Path(dirpath) / name).relative_to(out_dir).as_posix())
    leaked = [
        p for p in paths if any(part in FORBIDDEN_NAMES for part in p.split("/"))
    ]
    if leaked:
        raise SystemExit(f"PRIVATE CONTENT IN BUNDLE: {leaked}")

    manifest = {
        "bundle": "weaver-prod-state",
        "dirs": sorted(BUNDLE_SPEC),
        "file_count": len(files),
        "total_bytes": total_bytes,
        "total_mib": round(total_bytes / (1024 * 1024), 1),
        "files": files,
    }
    (out_dir / "manifest.json").write_text(json.dumps(manifest, indent=2) + "\n")
    return manifest


def demo() -> None:
    """Self-check: fake project root with allowed + forbidden content."""
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        fake_state = root / "project"
        for bundle_name, (source_rel, _skip) in BUNDLE_SPEC.items():
            (fake_state / source_rel).mkdir(parents=True)
            (fake_state / source_rel / "a.txt").write_text("x" * 10)
        (fake_state / ".weaver" / "research").mkdir(parents=True)
        (fake_state / ".weaver" / "receipts").mkdir(parents=True)
        (fake_state / ".weaver" / "research" / "secret.txt").write_text("private")

        out = root / "bundle"
        out.mkdir()
        manifest = build_bundle(fake_state, out)
        assert manifest["file_count"] == 3, manifest
        assert manifest["total_bytes"] == 30, manifest
        assert (out / "manifest.json").is_file()
        # Leak check must fail when a forbidden dir sneaks into the source.
        shutil.copytree(
            fake_state / ".weaver" / "research",
            fake_state / ".weaver" / "knowledge" / "research",
        )
        try:
            build_bundle(fake_state, root / "bundle2")
        except SystemExit as e:
            assert "PRIVATE CONTENT" in str(e), e
        else:
            raise AssertionError("leak check did not fail")
    print("demo ok")


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument("--out", type=Path, default=Path(".weaver/prod-bundle"))
    parser.add_argument("--demo", action="store_true")
    args = parser.parse_args(argv)

    if args.demo:
        demo()
        return 0

    out_dir = args.out
    if out_dir.exists():
        raise SystemExit(f"output dir already exists (refusing to overwrite): {out_dir}")
    out_dir.mkdir(parents=True)

    manifest = build_bundle(Path.cwd(), out_dir)
    print(
        f"bundle ok: {manifest['file_count']} files, "
        f"{manifest['total_mib']} MiB -> {out_dir}"
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
