"""Owner-only filesystem storage with symlink refusal and atomic writes."""

from __future__ import annotations

import json
import os
import re
import stat
import tempfile
import uuid
from dataclasses import dataclass
from datetime import UTC, datetime
from pathlib import Path
from typing import Any, Iterable
from urllib.parse import urlsplit, urlunsplit

from .errors import CorpusError
from .models import (
    ChapterRange,
    ErrorCategory,
    UrlListReport,
)
from .spec import ShadowSlaveSpec
from .text import sha256_bytes

_CHAPTER_FILE = re.compile(r"^chapter-(\d+)\.txt$")
_FORBIDDEN_METADATA_KEYS = {
    "api_key",
    "authorization",
    "body",
    "chapter_text",
    "content",
    "credential",
    "html",
    "paragraphs",
    "prose",
    "raw_html",
    "reasoning_content",
    "text",
}


@dataclass(frozen=True, slots=True)
class CorpusLayout:
    project_root: Path
    novel_root: Path
    urls_path: Path
    state_root: Path
    manifest_path: Path
    receipts_root: Path
    packets_root: Path
    exports_root: Path

    @classmethod
    def create(
        cls,
        *,
        project_root: Path,
        state_root: Path | None = None,
    ) -> "CorpusLayout":
        root = project_root.absolute()
        private_root = (
            state_root.absolute()
            if state_root is not None
            else root / ".weaver" / "corpus" / "shadow-slave"
        )
        novel_root = root / "novels" / "shadow-slave"
        return cls(
            project_root=root,
            novel_root=novel_root,
            urls_path=novel_root / "urls.md",
            state_root=private_root,
            manifest_path=private_root / "manifest.json",
            receipts_root=private_root / "receipts",
            packets_root=private_root / "packets",
            exports_root=private_root / "exports",
        )


@dataclass(frozen=True, slots=True)
class UrlListData:
    numbers: tuple[int, ...]
    report: UrlListReport
    raw_text: str


@dataclass(frozen=True, slots=True)
class ChapterCommit:
    path: Path
    folder_moved: bool
    replaced: bool


def collapse_ranges(numbers: Iterable[int]) -> list[ChapterRange]:
    ordered = sorted(set(numbers))
    if not ordered:
        return []
    ranges: list[ChapterRange] = []
    start = previous = ordered[0]
    for number in ordered[1:]:
        if number == previous + 1:
            previous = number
            continue
        ranges.append(ChapterRange(start=start, end=previous))
        start = previous = number
    ranges.append(ChapterRange(start=start, end=previous))
    return ranges


def mode_is_public(path: Path) -> bool:
    return bool(stat.S_IMODE(path.stat().st_mode) & 0o077)


def _relative_path(path: Path, root: Path) -> str:
    try:
        return path.relative_to(root).as_posix()
    except ValueError:
        return str(path)


class CorpusStore:
    def __init__(self, layout: CorpusLayout, spec: ShadowSlaveSpec) -> None:
        self.layout = layout
        self.spec = spec

    def assert_safe_path(self, path: Path, *, base: Path) -> None:
        base_abs = base.absolute()
        path_abs = path.absolute()
        try:
            relative = path_abs.relative_to(base_abs)
        except ValueError as exc:
            raise CorpusError(
                "A derived path escaped its allowed root.",
                ErrorCategory.SECURITY,
            ) from exc

        current = base_abs
        if current.is_symlink():
            raise CorpusError(
                "A private root is a symbolic link.",
                ErrorCategory.SECURITY,
            )
        for part in relative.parts:
            current = current / part
            if current.is_symlink():
                raise CorpusError(
                    "A corpus path contains a symbolic link.",
                    ErrorCategory.SECURITY,
                )

    def canonical_chapter_path(self, chapter: int) -> Path:
        path = (
            self.layout.novel_root
            / self.spec.canonical_folder(chapter)
            / f"chapter-{chapter:04d}.txt"
        )
        self.assert_safe_path(path, base=self.layout.project_root)
        return path

    def legacy_chapter_path(self, chapter: int) -> Path | None:
        if not (3001 <= chapter <= 3047):
            return None
        path = (
            self.layout.novel_root
            / self.spec.legacy_last_folder
            / f"chapter-{chapter:04d}.txt"
        )
        self.assert_safe_path(path, base=self.layout.project_root)
        return path

    def existing_chapter_paths(self, chapter: int) -> list[Path]:
        matches: list[Path] = []
        canonical = self.canonical_chapter_path(chapter)
        if canonical.exists() or canonical.is_symlink():
            matches.append(canonical)
        legacy = self.legacy_chapter_path(chapter)
        if legacy is not None and (legacy.exists() or legacy.is_symlink()):
            matches.append(legacy)
        return matches

    def read_bytes(self, path: Path) -> bytes:
        self.assert_safe_path(path, base=self.layout.project_root)
        if path.is_symlink():
            raise CorpusError(
                "Refusing to read a symbolic-link chapter.",
                ErrorCategory.SECURITY,
            )
        try:
            return path.read_bytes()
        except OSError as exc:
            raise CorpusError(
                "A chapter file could not be read.",
                ErrorCategory.FILESYSTEM,
            ) from exc

    def scan_chapter_paths(self) -> tuple[dict[int, list[Path]], list[Path]]:
        root = self.layout.novel_root
        self.assert_safe_path(root, base=self.layout.project_root)
        if not root.exists():
            raise CorpusError(
                "The fixed Shadow Slave corpus directory does not exist.",
                ErrorCategory.CONFIGURATION,
            )
        chapters: dict[int, list[Path]] = {}
        symlinks: list[Path] = []
        for current_root, directory_names, file_names in os.walk(
            root,
            followlinks=False,
        ):
            current = Path(current_root)
            kept_directories: list[str] = []
            for name in directory_names:
                child = current / name
                if child.is_symlink():
                    symlinks.append(child)
                else:
                    kept_directories.append(name)
            directory_names[:] = kept_directories
            for name in file_names:
                path = current / name
                if path.is_symlink():
                    symlinks.append(path)
                    continue
                match = _CHAPTER_FILE.fullmatch(name)
                if match:
                    chapters.setdefault(int(match.group(1)), []).append(path)
        return chapters, symlinks

    def parse_url_list(self) -> UrlListData:
        path = self.layout.urls_path
        self.assert_safe_path(path, base=self.layout.project_root)
        if path.is_symlink():
            raise CorpusError(
                "Refusing a symbolic-link URL list.",
                ErrorCategory.SECURITY,
            )
        try:
            raw_text = path.read_text(encoding="utf-8")
            lines = raw_text.splitlines()
        except (OSError, UnicodeError) as exc:
            raise CorpusError(
                "The private URL list could not be read as UTF-8.",
                ErrorCategory.FILESYSTEM,
            ) from exc

        pattern = re.compile(
            rf"^https://{re.escape(self.spec.domain)}/book/"
            rf"{re.escape(self.spec.slug)}/chapter-(\d+)/?$"
        )
        numbers: list[int] = []
        malformed: list[int] = []
        malformed_samples: list[str] = []
        observed_templates: set[str] = set()
        out_of_order: list[int] = []
        previous: int | None = None
        for line_number, line in enumerate(lines, start=1):
            stripped = line.strip()
            if not stripped:
                continue
            extracted = self._extract_url(stripped)
            match = pattern.fullmatch(extracted) if extracted else None
            if match is None:
                malformed.append(line_number)
                if len(malformed_samples) < 3:
                    malformed_samples.append(stripped[:500])
                observed = self._observed_url_template(extracted or stripped)
                if observed is not None:
                    observed_templates.add(observed)
                continue
            number = int(match.group(1))
            numbers.append(number)
            if previous is not None and number < previous:
                out_of_order.append(line_number)
            previous = number

        seen: set[int] = set()
        duplicates: list[int] = []
        for number in numbers:
            if number in seen and number not in duplicates:
                duplicates.append(number)
            seen.add(number)
        unique = sorted(seen)
        gaps: list[int] = []
        if unique:
            gaps = sorted(set(range(unique[0], unique[-1] + 1)) - set(unique))
        report = UrlListReport(
            path=_relative_path(path, self.layout.project_root),
            valid_url_count=len(numbers),
            first_chapter=unique[0] if unique else None,
            last_chapter=unique[-1] if unique else None,
            gaps=collapse_ranges(gaps),
            duplicates=sorted(duplicates),
            out_of_order_lines=collapse_ranges(out_of_order),
            malformed_lines=collapse_ranges(malformed),
            observed_templates=sorted(observed_templates)[:10],
            malformed_samples=malformed_samples,
        )
        return UrlListData(
            numbers=tuple(numbers),
            report=report,
            raw_text=raw_text,
        )

    @staticmethod
    def _extract_url(value: str) -> str | None:
        match = re.search(r"""https?://[^\s)>"']+""", value)
        if match is None:
            return None
        return match.group(0).rstrip(".,;")

    def _observed_url_template(self, value: str) -> str | None:
        templated = re.sub(
            r"(?i)(chapter(?:[-_/ ]+))\d+",
            r"\1{chapter}",
            value,
        )
        templated = re.sub(r"\d+(?=/?$)", "{chapter}", templated)
        if templated != value and len(templated) <= 500:
            return templated
        try:
            parsed = urlsplit(value)
        except ValueError:
            return None
        if parsed.scheme not in {"http", "https"} or not parsed.netloc:
            return None
        path = re.sub(r"(?<=chapter-)\d+(?=/?$)", "{chapter}", parsed.path)
        if path == parsed.path:
            return None
        return urlunsplit(
            (parsed.scheme, parsed.netloc, path, "", "")
        )

    def ensure_url_recorded(self, chapter: int) -> None:
        data = self.parse_url_list()
        if (
            data.report.malformed_lines
            or data.report.duplicates
            or data.report.out_of_order_lines
        ):
            raise CorpusError(
                "The URL list has structural errors and cannot be updated safely.",
                ErrorCategory.CONFLICT,
            )
        if chapter in data.numbers:
            self.harden_file(self.layout.urls_path)
            return
        last = data.report.last_chapter
        if last is not None and chapter <= last:
            raise CorpusError(
                "A missing historical URL cannot be appended out of order.",
                ErrorCategory.CONFLICT,
            )
        rendered = data.raw_text
        if rendered and not rendered.endswith("\n"):
            rendered += "\n"
        rendered += f"{self.spec.url_for(chapter)}\n"
        self.atomic_write(
            self.layout.urls_path,
            rendered.encode("utf-8"),
            mode=0o600,
            base=self.layout.project_root,
        )

    def commit_chapter(
        self,
        *,
        chapter: int,
        value: bytes,
        old_path: Path | None,
        expected_old_sha256: str | None,
    ) -> ChapterCommit:
        canonical = self.canonical_chapter_path(chapter)
        legacy_dir = self.layout.novel_root / self.spec.legacy_last_folder
        canonical_dir = self.layout.novel_root / self.spec.canonical_last_folder
        use_legacy_stage = (
            3001 <= chapter <= 3100
            and legacy_dir.exists()
            and not canonical_dir.exists()
        )
        stage_dir = legacy_dir if use_legacy_stage else canonical.parent
        self.secure_directory(stage_dir, base=self.layout.project_root)

        descriptor, temporary_name = tempfile.mkstemp(
            prefix=f".chapter-{chapter}.",
            suffix=".tmp",
            dir=stage_dir,
        )
        temporary = Path(temporary_name)
        folder_moved = False
        try:
            with os.fdopen(descriptor, "wb") as handle:
                handle.write(value)
                handle.flush()
                os.fsync(handle.fileno())
            os.chmod(temporary, 0o600)

            if old_path is not None:
                current_old = old_path
                self.assert_safe_path(current_old, base=self.layout.project_root)
                if current_old.is_symlink() or not current_old.exists():
                    raise CorpusError(
                        "The chapter changed while its replacement was prepared.",
                        ErrorCategory.CONFLICT,
                    )
                current_hash = sha256_bytes(self.read_bytes(current_old))
                if current_hash != expected_old_sha256:
                    raise CorpusError(
                        "The chapter changed while its replacement was prepared.",
                        ErrorCategory.CONFLICT,
                    )
            elif canonical.exists() or canonical.is_symlink():
                raise CorpusError(
                    "A chapter appeared while its write was prepared.",
                    ErrorCategory.CONFLICT,
                )

            if use_legacy_stage:
                self.assert_safe_path(legacy_dir, base=self.layout.project_root)
                if canonical_dir.exists() or canonical_dir.is_symlink():
                    raise CorpusError(
                        "Both legacy and canonical chapter folders exist.",
                        ErrorCategory.CONFLICT,
                    )
                os.replace(legacy_dir, canonical_dir)
                folder_moved = True
                temporary = canonical_dir / temporary.name
                if old_path is not None:
                    old_path = canonical_dir / old_path.name

            destination = canonical
            if old_path is not None and old_path != destination:
                if destination.exists() or destination.is_symlink():
                    raise CorpusError(
                        "The canonical chapter path already exists.",
                        ErrorCategory.CONFLICT,
                    )
                self.secure_directory(
                    destination.parent,
                    base=self.layout.project_root,
                )
                os.replace(temporary, old_path)
                os.chmod(old_path, 0o600)
                os.replace(old_path, destination)
            else:
                os.replace(temporary, destination)
            os.chmod(destination, 0o600)
            self._fsync_directory(destination.parent)
            return ChapterCommit(
                path=destination,
                folder_moved=folder_moved,
                replaced=expected_old_sha256 is not None,
            )
        except CorpusError:
            if temporary.exists() and not temporary.is_symlink():
                temporary.unlink()
            raise
        except OSError as exc:
            if temporary.exists() and not temporary.is_symlink():
                temporary.unlink()
            raise CorpusError(
                "The chapter could not be committed atomically.",
                ErrorCategory.FILESYSTEM,
            ) from exc

    def atomic_write(
        self,
        path: Path,
        value: bytes,
        *,
        mode: int,
        base: Path,
    ) -> None:
        self.assert_safe_path(path, base=base)
        self.secure_directory(path.parent, base=base)
        if path.is_symlink():
            raise CorpusError(
                "Refusing to replace a symbolic-link file.",
                ErrorCategory.SECURITY,
            )
        descriptor, temporary_name = tempfile.mkstemp(
            prefix=f".{path.name}.",
            suffix=".tmp",
            dir=path.parent,
        )
        temporary = Path(temporary_name)
        try:
            with os.fdopen(descriptor, "wb") as handle:
                handle.write(value)
                handle.flush()
                os.fsync(handle.fileno())
            os.chmod(temporary, mode)
            os.replace(temporary, path)
            os.chmod(path, mode)
            self._fsync_directory(path.parent)
        except OSError as exc:
            if temporary.exists() and not temporary.is_symlink():
                temporary.unlink()
            raise CorpusError(
                "A private metadata file could not be written atomically.",
                ErrorCategory.FILESYSTEM,
            ) from exc

    def write_private_json(self, path: Path, value: Any) -> None:
        self._assert_metadata_only(value)
        rendered = json.dumps(value, indent=2, sort_keys=True) + "\n"
        self.atomic_write(
            path,
            rendered.encode("utf-8"),
            mode=0o600,
            base=self.layout.state_root,
        )

    def write_receipt(
        self,
        *,
        operation: str,
        request: dict[str, Any],
        result: dict[str, Any],
    ) -> Path:
        self.secure_directory(
            self.layout.receipts_root,
            base=self.layout.state_root,
        )
        stamp = datetime.now(UTC).strftime("%Y%m%dT%H%M%S")
        path = (
            self.layout.receipts_root
            / f"{operation}-{stamp}-{uuid.uuid4().hex[:12]}.json"
        )
        payload = {
            "schema_version": 1,
            "operation": operation,
            "recorded_at": datetime.now(UTC).isoformat(),
            "request": request,
            "result": result,
            "metadata_only": True,
        }
        self.write_private_json(path, payload)
        return path

    def secure_directory(self, path: Path, *, base: Path) -> None:
        self.assert_safe_path(path, base=base)
        try:
            path.mkdir(parents=True, exist_ok=True, mode=0o700)
            if path.is_relative_to(self.layout.state_root):
                boundary = self.layout.state_root
            elif path.is_relative_to(self.layout.novel_root):
                boundary = self.layout.novel_root
            else:
                boundary = path
            current = path
            while True:
                if current.is_symlink():
                    raise CorpusError(
                        "Refusing a symbolic-link private directory.",
                        ErrorCategory.SECURITY,
                    )
                os.chmod(current, 0o700)
                if current == boundary or current.parent == current:
                    break
                current = current.parent
        except CorpusError:
            raise
        except OSError as exc:
            raise CorpusError(
                "An owner-only directory could not be prepared.",
                ErrorCategory.FILESYSTEM,
            ) from exc

    def harden_file(self, path: Path) -> None:
        self.assert_safe_path(path, base=self.layout.project_root)
        if path.is_symlink():
            raise CorpusError(
                "Refusing to chmod a symbolic-link file.",
                ErrorCategory.SECURITY,
            )
        try:
            os.chmod(path, 0o600)
        except OSError as exc:
            raise CorpusError(
                "A private file permission could not be hardened.",
                ErrorCategory.FILESYSTEM,
            ) from exc

    def harden_corpus_permissions(self) -> None:
        root = self.layout.novel_root
        self.assert_safe_path(root, base=self.layout.project_root)
        for current_root, directory_names, file_names in os.walk(
            root,
            followlinks=False,
        ):
            current = Path(current_root)
            if current.is_symlink():
                raise CorpusError(
                    "Refusing a symbolic-link corpus directory.",
                    ErrorCategory.SECURITY,
                )
            os.chmod(current, 0o700)
            for name in directory_names:
                path = current / name
                if path.is_symlink():
                    raise CorpusError(
                        "Refusing a symbolic-link corpus directory.",
                        ErrorCategory.SECURITY,
                    )
            for name in file_names:
                path = current / name
                if path.is_symlink():
                    raise CorpusError(
                        "Refusing a symbolic-link corpus file.",
                        ErrorCategory.SECURITY,
                    )
                os.chmod(path, 0o600)

    @staticmethod
    def _assert_metadata_only(value: Any) -> None:
        if isinstance(value, dict):
            for key, item in value.items():
                normalized = str(key).casefold()
                if normalized in _FORBIDDEN_METADATA_KEYS:
                    raise CorpusError(
                        "A receipt attempted to include non-metadata content.",
                        ErrorCategory.SECURITY,
                    )
                CorpusStore._assert_metadata_only(item)
        elif isinstance(value, (list, tuple)):
            for item in value:
                CorpusStore._assert_metadata_only(item)
        elif isinstance(value, str) and len(value) > 1000:
            raise CorpusError(
                "A receipt string exceeded the metadata size limit.",
                ErrorCategory.SECURITY,
            )

    @staticmethod
    def _fsync_directory(path: Path) -> None:
        descriptor = os.open(path, os.O_RDONLY)
        try:
            os.fsync(descriptor)
        finally:
            os.close(descriptor)


def chapter_number_from_path(path: Path) -> int | None:
    match = _CHAPTER_FILE.fullmatch(path.name)
    return int(match.group(1)) if match else None


def relative_path(path: Path, root: Path) -> str:
    return _relative_path(path, root)
