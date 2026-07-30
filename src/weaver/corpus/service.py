"""The deterministic implementation behind all five corpus tools."""

from __future__ import annotations

import hashlib
import html
import json
import os
import re
import tempfile
import zipfile
from dataclasses import dataclass
from pathlib import Path
from typing import Any

from ebooklib import epub

from .errors import CorpusError
from .models import (
    ActionStatus,
    BuildNovelPacketInput,
    BuildNovelPacketOutput,
    ChapterAction,
    ChapterRange,
    ChapterState,
    CorpusManifest,
    ErrorCategory,
    ExportFormat,
    ExportNovelInput,
    ExportNovelOutput,
    FetchNovelChaptersInput,
    FetchNovelChaptersOutput,
    FileIssue,
    InspectNovelCorpusInput,
    InspectNovelCorpusOutput,
    ManifestEntry,
    SourceHash,
    UpdateNovelCorpusInput,
    UpdateNovelCorpusOutput,
)
from .source import ChapterSource
from .spec import ShadowSlaveSpec, get_spec
from .storage import (
    CorpusLayout,
    CorpusStore,
    UrlListData,
    collapse_ranges,
    mode_is_public,
    relative_path,
)
from .text import LocalValidation, clean_fetched_page, sha256_bytes, validate_local_bytes


@dataclass(frozen=True, slots=True)
class LocalChapter:
    chapter: int
    path: Path
    validation: LocalValidation
    canonical: bool


@dataclass(frozen=True, slots=True)
class Inventory:
    urls: UrlListData
    files: dict[int, tuple[LocalChapter, ...]]
    inspect_output: InspectNovelCorpusOutput


def _json(model: Any) -> dict[str, Any]:
    return model.model_dump(mode="json")


def _corpus_hash(chapters: list[LocalChapter]) -> str:
    digest = hashlib.sha256()
    for item in sorted(chapters, key=lambda candidate: candidate.chapter):
        digest.update(
            f"{item.chapter}:{item.validation.sha256}\n".encode("utf-8")
        )
    return digest.hexdigest()


def _public_actions(
    actions: list[ChapterAction],
    *,
    limit: int = 10,
) -> tuple[list[ChapterAction], dict[str, int], bool]:
    counts: dict[str, int] = {}
    for action in actions:
        counts[action.status.value] = counts.get(action.status.value, 0) + 1
    if len(actions) <= limit:
        return actions, counts, False
    half = limit // 2
    return [*actions[:half], *actions[-half:]], counts, True


def _safe_action(
    *,
    chapter: int,
    status: ActionStatus,
    action: str,
    url: str,
    path: Path | None,
    project_root: Path,
    validation: LocalValidation | None = None,
    error_category: ErrorCategory | None = None,
    error_code: str | None = None,
    http_status: int | None = None,
    observed_url: str | None = None,
    observed_chapter: int | None = None,
) -> ChapterAction:
    return ChapterAction(
        chapter=chapter,
        status=status,
        action=action,
        url=url,
        path=relative_path(path, project_root) if path is not None else None,
        title=validation.title if validation is not None else None,
        sha256=validation.sha256 if validation is not None else None,
        byte_count=validation.byte_count if validation is not None else None,
        error_category=error_category,
        error_code=error_code,
        http_status=http_status,
        observed_url=observed_url,
        observed_chapter=observed_chapter,
    )


class CorpusService:
    """Framework-neutral corpus behavior.

    The custom Weaver agent, tests, and thin CLI all call this same object.
    """

    def __init__(
        self,
        *,
        project_root: Path,
        state_root: Path | None = None,
        source: ChapterSource | None = None,
        spec: ShadowSlaveSpec | None = None,
    ) -> None:
        self.spec = spec or get_spec(InspectNovelCorpusInput(
            novel_id="shadow-slave"
        ).novel_id)
        self.layout = CorpusLayout.create(
            project_root=project_root,
            state_root=state_root,
        )
        self.store = CorpusStore(self.layout, self.spec)
        self.source = source

    async def inspect_novel_corpus(
        self,
        request: InspectNovelCorpusInput,
    ) -> InspectNovelCorpusOutput:
        self._require_novel(request.novel_id)
        result = self._inventory(write_manifest=True).inspect_output
        receipt_path = self._receipt(
            "inspect_novel_corpus",
            request,
            {
                "counts": result.counts,
                "ranges": {
                    name: [_json(item) for item in ranges]
                    for name, ranges in result.ranges.items()
                },
                "url_list": _json(result.url_list),
                "corpus_sha256": result.corpus_sha256,
                "manifest_path": result.manifest_path,
                "issue_report_path": result.issue_report_path,
                "issues_truncated": result.issues_truncated,
            },
        )
        return result.model_copy(update={"receipt_path": receipt_path})

    async def fetch_novel_chapters(
        self,
        request: FetchNovelChaptersInput,
    ) -> FetchNovelChaptersOutput:
        self._require_novel(request.novel_id)
        inventory = self._inventory(write_manifest=False)
        actions: list[ChapterAction] = []
        for chapter in request.chapters:
            if request.preview:
                actions.append(self._preview_action(chapter, inventory))
                continue
            try:
                actions.append(await self._fetch_one(chapter, inventory))
            except CorpusError as exc:
                actions.append(
                    _safe_action(
                        chapter=chapter,
                        status=(
                            ActionStatus.NOT_FOUND
                            if exc.category is ErrorCategory.NOT_FOUND
                            else (
                                ActionStatus.CONFLICT
                                if exc.category is ErrorCategory.CONFLICT
                                else ActionStatus.FAILED
                            )
                        ),
                        action="fetch",
                        url=self.spec.url_for(chapter),
                        path=self.store.canonical_chapter_path(chapter),
                        project_root=self.layout.project_root,
                        error_category=exc.category,
                        error_code=exc.detail_code,
                        http_status=exc.status_code,
                        observed_url=exc.observed_url,
                        observed_chapter=exc.observed_chapter,
                    )
                )
                if exc.category in {
                    ErrorCategory.AUTHENTICATION,
                    ErrorCategory.CONFIGURATION,
                    ErrorCategory.FILESYSTEM,
                    ErrorCategory.SECURITY,
                    ErrorCategory.TIMEOUT,
                    ErrorCategory.PROVIDER,
                }:
                    break

        if not request.preview:
            self.store.harden_corpus_permissions()
            self._inventory(write_manifest=True)
        receipt_path = self._receipt(
            "fetch_novel_chapters",
            request,
            {"actions": [_json(action) for action in actions]},
        )
        public_actions, action_counts, truncated = _public_actions(actions)
        return FetchNovelChaptersOutput(
            novel_id=request.novel_id,
            preview=request.preview,
            requested=ChapterRange(
                start=request.start_chapter,
                end=request.end_chapter or request.start_chapter,
            ),
            actions=public_actions,
            total_action_count=len(actions),
            action_counts=action_counts,
            actions_truncated=truncated,
            receipt_path=receipt_path,
        )

    async def update_novel_corpus(
        self,
        request: UpdateNovelCorpusInput,
    ) -> UpdateNovelCorpusOutput:
        self._require_novel(request.novel_id)
        inventory = self._inventory(write_manifest=False)
        known_last = inventory.urls.report.last_chapter or 0
        limit = request.through_chapter
        known_target = min(known_last, limit) if limit is not None else known_last
        actions: list[ChapterAction] = []

        for chapter in range(1, known_target + 1):
            if self._is_valid(chapter, inventory):
                continue
            if request.preview:
                actions.append(self._preview_action(chapter, inventory))
            else:
                try:
                    actions.append(await self._fetch_one(chapter, inventory))
                except CorpusError as exc:
                    actions.append(self._failed_action(chapter, exc))
                    receipt_path = self._finish_update(
                        request=request,
                        actions=actions,
                        stopped_at=chapter,
                        reason=exc.category.value,
                    )
                    public_actions, action_counts, truncated = _public_actions(
                        actions
                    )
                    return UpdateNovelCorpusOutput(
                        novel_id=request.novel_id,
                        preview=False,
                        through_chapter=limit,
                        actions=public_actions,
                        total_action_count=len(actions),
                        action_counts=action_counts,
                        actions_truncated=truncated,
                        stopped_at_chapter=chapter,
                        stop_reason=exc.category.value,
                        receipt_path=receipt_path,
                    )

        if request.preview:
            if limit is None:
                actions.append(
                    ChapterAction(
                        chapter=known_last + 1,
                        status=ActionStatus.PREVIEWED,
                        action="probe_consecutive_urls_until_first_404",
                        url=self.spec.url_for(known_last + 1),
                        path=relative_path(
                            self.store.canonical_chapter_path(known_last + 1),
                            self.layout.project_root,
                        ),
                    )
                )
            elif limit > known_last:
                for chapter in range(known_last + 1, limit + 1):
                    actions.append(self._preview_action(chapter, inventory))
            receipt_path = self._receipt(
                "update_novel_corpus",
                request,
                {"actions": [_json(action) for action in actions]},
            )
            public_actions, action_counts, truncated = _public_actions(actions)
            return UpdateNovelCorpusOutput(
                novel_id=request.novel_id,
                preview=True,
                through_chapter=limit,
                actions=public_actions,
                total_action_count=len(actions),
                action_counts=action_counts,
                actions_truncated=truncated,
                receipt_path=receipt_path,
            )

        next_chapter = known_last + 1
        while limit is None or next_chapter <= limit:
            try:
                action = await self._fetch_one(next_chapter, inventory)
            except CorpusError as exc:
                if exc.category is ErrorCategory.NOT_FOUND:
                    actions.append(self._failed_action(next_chapter, exc))
                    receipt_path = self._finish_update(
                        request=request,
                        actions=actions,
                        stopped_at=next_chapter,
                        reason="first_404",
                    )
                    public_actions, action_counts, truncated = _public_actions(
                        actions
                    )
                    return UpdateNovelCorpusOutput(
                        novel_id=request.novel_id,
                        preview=False,
                        through_chapter=limit,
                        actions=public_actions,
                        total_action_count=len(actions),
                        action_counts=action_counts,
                        actions_truncated=truncated,
                        stopped_at_chapter=next_chapter,
                        stop_reason="first_404",
                        receipt_path=receipt_path,
                    )
                actions.append(self._failed_action(next_chapter, exc))
                receipt_path = self._finish_update(
                    request=request,
                    actions=actions,
                    stopped_at=next_chapter,
                    reason=exc.category.value,
                )
                public_actions, action_counts, truncated = _public_actions(
                    actions
                )
                return UpdateNovelCorpusOutput(
                    novel_id=request.novel_id,
                    preview=False,
                    through_chapter=limit,
                    actions=public_actions,
                    total_action_count=len(actions),
                    action_counts=action_counts,
                    actions_truncated=truncated,
                    stopped_at_chapter=next_chapter,
                    stop_reason=exc.category.value,
                    receipt_path=receipt_path,
                )
            actions.append(action)
            next_chapter += 1

        receipt_path = self._finish_update(
            request=request,
            actions=actions,
            stopped_at=None,
            reason="through_chapter_reached",
        )
        public_actions, action_counts, truncated = _public_actions(actions)
        return UpdateNovelCorpusOutput(
            novel_id=request.novel_id,
            preview=False,
            through_chapter=limit,
            actions=public_actions,
            total_action_count=len(actions),
            action_counts=action_counts,
            actions_truncated=truncated,
            stop_reason="through_chapter_reached",
            receipt_path=receipt_path,
        )

    async def build_novel_packet(
        self,
        request: BuildNovelPacketInput,
    ) -> BuildNovelPacketOutput:
        self._require_novel(request.novel_id)
        inventory = self._inventory(write_manifest=True)
        chapters = self._require_valid_chapters(request.chapters, inventory)
        source_hashes = [
            SourceHash(chapter=item.chapter, sha256=item.validation.sha256)
            for item in chapters
        ]
        identity = hashlib.sha256(
            json.dumps(
                [_json(source_hash) for source_hash in source_hashes],
                sort_keys=True,
            ).encode()
        ).hexdigest()[:16]
        packet_dir = self.layout.packets_root / f"packet-{identity}"
        self.store.secure_directory(packet_dir, base=self.layout.state_root)
        packet_path = packet_dir / "packet.md"
        manifest_path = packet_dir / "manifest.json"

        sections = ["# Shadow Slave reading packet\n"]
        for item in chapters:
            value = self.store.read_bytes(item.path).decode("utf-8")
            title, _, body = value.partition("\n")
            sections.append(f"## {title.strip()}\n\n{body.strip()}\n")
        packet_bytes = ("\n".join(sections).rstrip() + "\n").encode("utf-8")
        self.store.atomic_write(
            packet_path,
            packet_bytes,
            mode=0o600,
            base=self.layout.state_root,
        )
        manifest = {
            "schema_version": 1,
            "novel_id": request.novel_id.value,
            "chapters": request.chapters,
            "source_hashes": [_json(item) for item in source_hashes],
            "packet_sha256": sha256_bytes(packet_bytes),
            "metadata_only": True,
        }
        self.store.write_private_json(manifest_path, manifest)
        result_metadata = {
            "chapters": request.chapters,
            "chapter_count": len(chapters),
            "packet_path": relative_path(packet_path, self.layout.project_root),
            "manifest_path": relative_path(
                manifest_path,
                self.layout.project_root,
            ),
            "packet_sha256": sha256_bytes(packet_bytes),
            "source_hashes": [_json(item) for item in source_hashes],
        }
        receipt_path = self._receipt("build_novel_packet", request, result_metadata)
        return BuildNovelPacketOutput(
            novel_id=request.novel_id,
            chapters=request.chapters,
            chapter_count=len(chapters),
            packet_path=result_metadata["packet_path"],
            manifest_path=result_metadata["manifest_path"],
            packet_sha256=result_metadata["packet_sha256"],
            source_hashes=source_hashes,
            receipt_path=receipt_path,
        )

    async def export_novel(
        self,
        request: ExportNovelInput,
    ) -> ExportNovelOutput:
        self._require_novel(request.novel_id)
        inventory = self._inventory(write_manifest=True)
        through = request.through_chapter or inventory.urls.report.last_chapter
        if through is None:
            raise CorpusError(
                "The URL list has no known chapters.",
                ErrorCategory.VALIDATION,
            )
        chapters = self._require_valid_chapters(
            list(range(1, through + 1)),
            inventory,
        )
        source_hash = _corpus_hash(chapters)
        self.store.secure_directory(
            self.layout.exports_root,
            base=self.layout.state_root,
        )
        suffix = request.format.value
        export_path = (
            self.layout.exports_root
            / f"shadow-slave-through-{through}.{suffix}"
        )
        if request.format is ExportFormat.TXT:
            data = self._txt_export(chapters)
        elif request.format is ExportFormat.MARKDOWN:
            data = self._markdown_export(chapters)
        else:
            data = self._epub_export(chapters, through, source_hash)
        self.store.atomic_write(
            export_path,
            data,
            mode=0o600,
            base=self.layout.state_root,
        )
        result_metadata = {
            "format": request.format.value,
            "through_chapter": through,
            "chapter_count": len(chapters),
            "export_path": relative_path(export_path, self.layout.project_root),
            "export_sha256": sha256_bytes(data),
            "byte_count": len(data),
            "source_corpus_sha256": source_hash,
        }
        receipt_path = self._receipt("export_novel", request, result_metadata)
        return ExportNovelOutput(
            novel_id=request.novel_id,
            format=request.format,
            through_chapter=through,
            chapter_count=len(chapters),
            export_path=result_metadata["export_path"],
            export_sha256=result_metadata["export_sha256"],
            byte_count=result_metadata["byte_count"],
            source_corpus_sha256=source_hash,
            receipt_path=receipt_path,
        )

    def _inventory(self, *, write_manifest: bool) -> Inventory:
        urls = self.store.parse_url_list()
        raw_paths, symlinks = self.store.scan_chapter_paths()
        files: dict[int, tuple[LocalChapter, ...]] = {}
        issues: list[FileIssue] = []
        previous_hashes = self._previous_manifest_hashes()
        overly_public: list[Path] = []

        for symlink in symlinks:
            issues.append(
                FileIssue(
                    category=ErrorCategory.SECURITY,
                    paths=[relative_path(symlink, self.layout.project_root)],
                    detail="symlink_refused",
                )
            )

        for current_root, directory_names, file_names in os.walk(
            self.layout.novel_root,
            followlinks=False,
        ):
            current = Path(current_root)
            if not current.is_symlink() and mode_is_public(current):
                overly_public.append(current)
            for name in file_names:
                path = current / name
                if not path.is_symlink() and mode_is_public(path):
                    overly_public.append(path)

        valid_numbers: list[int] = []
        broken_numbers: list[int] = []
        duplicate_numbers: list[int] = []
        wrong_numbers: list[int] = []
        conflict_numbers: list[int] = []
        manifest_entries: list[ManifestEntry] = []
        valid_chapters_for_hash: list[LocalChapter] = []

        for chapter, paths in sorted(raw_paths.items()):
            candidates: list[LocalChapter] = []
            for path in sorted(paths):
                validation = validate_local_bytes(
                    self.store.read_bytes(path),
                    chapter=chapter,
                    spec=self.spec,
                )
                item = LocalChapter(
                    chapter=chapter,
                    path=path,
                    validation=validation,
                    canonical=path == self.store.canonical_chapter_path(chapter),
                )
                candidates.append(item)
            files[chapter] = tuple(candidates)

            if len(candidates) > 1:
                duplicate_numbers.append(chapter)
                issues.append(
                    FileIssue(
                        category=ChapterState.DUPLICATED,
                        chapter=chapter,
                        paths=[
                            relative_path(item.path, self.layout.project_root)
                            for item in candidates
                        ],
                        detail="multiple_files_for_chapter",
                    )
                )
                for item in candidates:
                    manifest_entries.append(
                        self._manifest_entry(item, ChapterState.DUPLICATED)
                    )
                continue

            item = candidates[0]
            if not item.validation.valid:
                broken_numbers.append(chapter)
                issues.append(
                    FileIssue(
                        category=ChapterState.BROKEN,
                        chapter=chapter,
                        paths=[relative_path(item.path, self.layout.project_root)],
                        sha256=item.validation.sha256,
                        detail=item.validation.reason or "invalid",
                    )
                )
                manifest_entries.append(
                    self._manifest_entry(item, ChapterState.BROKEN)
                )
                continue

            valid_numbers.append(chapter)
            valid_chapters_for_hash.append(item)
            state = ChapterState.VALID
            if not item.canonical:
                wrong_numbers.append(chapter)
                state = ChapterState.WRONGLY_PLACED
                issues.append(
                    FileIssue(
                        category=ChapterState.WRONGLY_PLACED,
                        chapter=chapter,
                        paths=[relative_path(item.path, self.layout.project_root)],
                        sha256=item.validation.sha256,
                        detail="noncanonical_folder",
                    )
                )
            old_hash = previous_hashes.get(chapter)
            if old_hash is not None and old_hash != item.validation.sha256:
                conflict_numbers.append(chapter)
                state = ChapterState.CONFLICT
                issues.append(
                    FileIssue(
                        category=ChapterState.CONFLICT,
                        chapter=chapter,
                        paths=[relative_path(item.path, self.layout.project_root)],
                        sha256=item.validation.sha256,
                        detail="hash_changed_since_manifest",
                    )
                )
            manifest_entries.append(self._manifest_entry(item, state))

        expected = set(urls.numbers)
        missing_numbers = sorted(expected - set(raw_paths))
        for chapter in missing_numbers:
            manifest_entries.append(
                ManifestEntry(
                    chapter=chapter,
                    title=None,
                    url=self.spec.url_for(chapter),
                    relative_path=None,
                    sha256=None,
                    byte_count=None,
                    status=ChapterState.MISSING,
                )
            )
        for path in overly_public:
            issues.append(
                FileIssue(
                    category=ErrorCategory.SECURITY,
                    paths=[relative_path(path, self.layout.project_root)],
                    detail="owner_only_permission_required",
                )
            )

        corpus_hash = _corpus_hash(valid_chapters_for_hash)
        issue_report_path = self.layout.state_root / "inspection.json"
        issue_sample_limit = 20
        output = InspectNovelCorpusOutput(
            novel_id=self.spec.novel_id,
            counts={
                "known_urls": len(urls.numbers),
                "chapter_files": sum(len(items) for items in files.values()),
                "valid": len(valid_numbers),
                "missing": len(missing_numbers),
                "broken": len(broken_numbers),
                "duplicated": len(duplicate_numbers),
                "wrongly_placed": len(wrong_numbers),
                "conflicts": len(conflict_numbers),
                "overly_public": len(overly_public),
                "symlinks": len(symlinks),
                "issue_records": len(issues),
            },
            ranges={
                "valid": collapse_ranges(valid_numbers),
                "missing": collapse_ranges(missing_numbers),
                "broken": collapse_ranges(broken_numbers),
                "duplicated": collapse_ranges(duplicate_numbers),
                "wrongly_placed": collapse_ranges(wrong_numbers),
                "conflicts": collapse_ranges(conflict_numbers),
            },
            issues=issues[:issue_sample_limit],
            url_list=urls.report,
            corpus_sha256=corpus_hash,
            manifest_path=relative_path(
                self.layout.manifest_path,
                self.layout.project_root,
            ),
            issue_report_path=relative_path(
                issue_report_path,
                self.layout.project_root,
            ),
            issues_truncated=len(issues) > issue_sample_limit,
        )
        if write_manifest:
            manifest = CorpusManifest(
                novel_id=self.spec.novel_id,
                corpus_sha256=corpus_hash,
                entries=sorted(manifest_entries, key=lambda item: item.chapter),
            )
            self.store.write_private_json(
                self.layout.manifest_path,
                _json(manifest),
            )
            self.store.write_private_json(
                issue_report_path,
                {
                    "schema_version": 1,
                    "novel_id": self.spec.novel_id.value,
                    "counts": output.counts,
                    "ranges": {
                        name: [_json(item) for item in ranges]
                        for name, ranges in output.ranges.items()
                    },
                    "url_list": _json(output.url_list),
                    "corpus_sha256": corpus_hash,
                    "issues": [_json(issue) for issue in issues],
                    "metadata_only": True,
                },
            )
        return Inventory(urls=urls, files=files, inspect_output=output)

    def _previous_manifest_hashes(self) -> dict[int, str]:
        path = self.layout.manifest_path
        if not path.exists():
            return {}
        self.store.assert_safe_path(path, base=self.layout.state_root)
        if path.is_symlink():
            raise CorpusError(
                "Refusing a symbolic-link manifest.",
                ErrorCategory.SECURITY,
            )
        try:
            raw = json.loads(path.read_text(encoding="utf-8"))
            return {
                int(entry["chapter"]): str(entry["sha256"])
                for entry in raw.get("entries", [])
                if entry.get("status") in {"valid", "wrongly_placed"}
                and entry.get("sha256")
            }
        except (OSError, UnicodeError, ValueError, TypeError, KeyError) as exc:
            raise CorpusError(
                "The private manifest is malformed.",
                ErrorCategory.FILESYSTEM,
            ) from exc

    def _manifest_entry(
        self,
        item: LocalChapter,
        state: ChapterState,
    ) -> ManifestEntry:
        return ManifestEntry(
            chapter=item.chapter,
            title=(
                item.validation.title
                if state
                in {
                    ChapterState.VALID,
                    ChapterState.WRONGLY_PLACED,
                    ChapterState.CONFLICT,
                }
                else None
            ),
            url=self.spec.url_for(item.chapter),
            relative_path=relative_path(item.path, self.layout.project_root),
            sha256=item.validation.sha256,
            byte_count=item.validation.byte_count,
            status=state,
        )

    def _preview_action(
        self,
        chapter: int,
        inventory: Inventory,
    ) -> ChapterAction:
        items = inventory.files.get(chapter, ())
        if len(items) > 1:
            return _safe_action(
                chapter=chapter,
                status=ActionStatus.CONFLICT,
                action="preserve_duplicate_conflict",
                url=self.spec.url_for(chapter),
                path=None,
                project_root=self.layout.project_root,
                error_category=ErrorCategory.CONFLICT,
            )
        if not items:
            return _safe_action(
                chapter=chapter,
                status=ActionStatus.PREVIEWED,
                action="save_missing",
                url=self.spec.url_for(chapter),
                path=self.store.canonical_chapter_path(chapter),
                project_root=self.layout.project_root,
            )
        item = items[0]
        if item.validation.valid:
            return _safe_action(
                chapter=chapter,
                status=ActionStatus.SKIPPED,
                action="preserve_valid",
                url=self.spec.url_for(chapter),
                path=item.path,
                project_root=self.layout.project_root,
                validation=item.validation,
            )
        return ChapterAction(
            chapter=chapter,
            status=ActionStatus.PREVIEWED,
            action="replace_broken_atomically",
            url=self.spec.url_for(chapter),
            path=relative_path(item.path, self.layout.project_root),
            old_sha256=item.validation.sha256,
            old_byte_count=item.validation.byte_count,
        )

    async def _fetch_one(
        self,
        chapter: int,
        inventory: Inventory,
    ) -> ChapterAction:
        items = inventory.files.get(chapter, ())
        if len(items) > 1:
            raise CorpusError(
                "The chapter has duplicate local files.",
                ErrorCategory.CONFLICT,
            )
        if items and items[0].validation.valid:
            self.store.ensure_url_recorded(chapter)
            return _safe_action(
                chapter=chapter,
                status=ActionStatus.SKIPPED,
                action="preserve_valid",
                url=self.spec.url_for(chapter),
                path=items[0].path,
                project_root=self.layout.project_root,
                validation=items[0].validation,
            )
        if self.source is None:
            raise CorpusError(
                "No explicit live chapter source was configured.",
                ErrorCategory.CONFIGURATION,
            )

        url = self.spec.url_for(chapter)
        page = await self.source.fetch(chapter, url)
        cleaned = clean_fetched_page(page, chapter=chapter, spec=self.spec)
        value = cleaned.text.encode("utf-8")
        existing = items[0] if items else None
        commit = self.store.commit_chapter(
            chapter=chapter,
            value=value,
            old_path=existing.path if existing else None,
            expected_old_sha256=(
                existing.validation.sha256 if existing is not None else None
            ),
        )
        self.store.ensure_url_recorded(chapter)
        validation = validate_local_bytes(
            self.store.read_bytes(commit.path),
            chapter=chapter,
            spec=self.spec,
        )
        if not validation.valid or validation.sha256 != cleaned.sha256:
            raise CorpusError(
                "The committed chapter did not match its validated temporary data.",
                ErrorCategory.FILESYSTEM,
            )
        action = ChapterAction(
            chapter=chapter,
            status=(
                ActionStatus.REPLACED
                if existing is not None
                else ActionStatus.SAVED
            ),
            action=(
                "replace_broken_atomically"
                if existing is not None
                else "save_missing"
            ),
            url=url,
            path=relative_path(commit.path, self.layout.project_root),
            title=cleaned.stored_title,
            sha256=cleaned.sha256,
            byte_count=cleaned.byte_count,
            old_sha256=(
                existing.validation.sha256 if existing is not None else None
            ),
            old_byte_count=(
                existing.validation.byte_count if existing is not None else None
            ),
        )
        inventory.files[chapter] = (
            LocalChapter(
                chapter=chapter,
                path=commit.path,
                validation=validation,
                canonical=True,
            ),
        )
        return action

    def _failed_action(
        self,
        chapter: int,
        error: CorpusError,
    ) -> ChapterAction:
        return _safe_action(
            chapter=chapter,
            status=(
                ActionStatus.NOT_FOUND
                if error.category is ErrorCategory.NOT_FOUND
                else (
                    ActionStatus.CONFLICT
                    if error.category is ErrorCategory.CONFLICT
                    else ActionStatus.FAILED
                )
            ),
            action="stop_without_write",
            url=self.spec.url_for(chapter),
            path=self.store.canonical_chapter_path(chapter),
            project_root=self.layout.project_root,
            error_category=error.category,
            error_code=error.detail_code,
            http_status=error.status_code,
            observed_url=error.observed_url,
            observed_chapter=error.observed_chapter,
        )

    def _finish_update(
        self,
        *,
        request: UpdateNovelCorpusInput,
        actions: list[ChapterAction],
        stopped_at: int | None,
        reason: str,
    ) -> str:
        self.store.harden_corpus_permissions()
        self._inventory(write_manifest=True)
        return self._receipt(
            "update_novel_corpus",
            request,
            {
                "actions": [_json(action) for action in actions],
                "stopped_at_chapter": stopped_at,
                "stop_reason": reason,
            },
        )

    def _receipt(
        self,
        operation: str,
        request: Any,
        result: dict[str, Any],
    ) -> str:
        path = self.store.write_receipt(
            operation=operation,
            request=request.model_dump(mode="json"),
            result=result,
        )
        return relative_path(path, self.layout.project_root)

    def _is_valid(self, chapter: int, inventory: Inventory) -> bool:
        items = inventory.files.get(chapter, ())
        return len(items) == 1 and items[0].validation.valid

    def _require_valid_chapters(
        self,
        requested: list[int],
        inventory: Inventory,
    ) -> list[LocalChapter]:
        chapters: list[LocalChapter] = []
        for chapter in requested:
            items = inventory.files.get(chapter, ())
            if len(items) != 1 or not items[0].validation.valid:
                raise CorpusError(
                    "A packet or export source chapter is not uniquely valid.",
                    ErrorCategory.VALIDATION,
                    detail_code="source_chapter_not_uniquely_valid",
                )
            chapters.append(items[0])
        return chapters

    def _require_novel(self, novel_id: Any) -> None:
        if novel_id != self.spec.novel_id:
            raise CorpusError(
                "Only the fixed Shadow Slave specification is admitted.",
                ErrorCategory.SECURITY,
            )

    def _txt_export(self, chapters: list[LocalChapter]) -> bytes:
        parts = [
            self.store.read_bytes(chapter.path).decode("utf-8").strip()
            for chapter in chapters
        ]
        return ("\n\n".join(parts) + "\n").encode("utf-8")

    def _markdown_export(self, chapters: list[LocalChapter]) -> bytes:
        sections = ["# Shadow Slave\n"]
        for chapter in chapters:
            value = self.store.read_bytes(chapter.path).decode("utf-8")
            title, _, body = value.partition("\n")
            sections.append(f"## {title.strip()}\n\n{body.strip()}\n")
        return ("\n".join(sections).rstrip() + "\n").encode("utf-8")

    def _epub_export(
        self,
        chapters: list[LocalChapter],
        through: int,
        source_hash: str,
    ) -> bytes:
        book = epub.EpubBook()
        book.set_identifier(
            f"urn:weaver:shadow-slave:{through}:{source_hash}"
        )
        book.set_title(f"Shadow Slave through chapter {through}")
        book.set_language(self.spec.language)
        documents: list[epub.EpubHtml] = []
        for chapter in chapters:
            value = self.store.read_bytes(chapter.path).decode("utf-8")
            title, _, body = value.partition("\n")
            paragraphs = [
                paragraph.strip()
                for paragraph in body.split("\n\n")
                if paragraph.strip()
            ]
            document = epub.EpubHtml(
                title=title.strip(),
                file_name=f"chapter-{chapter.chapter}.xhtml",
                lang=self.spec.language,
            )
            document.content = (
                f"<h1>{html.escape(title.strip())}</h1>"
                + "".join(
                    f"<p>{html.escape(paragraph)}</p>"
                    for paragraph in paragraphs
                )
            )
            book.add_item(document)
            documents.append(document)
        book.toc = tuple(documents)
        book.add_item(epub.EpubNcx())
        book.add_item(epub.EpubNav())
        book.spine = ["nav", *documents]

        descriptor, temporary_name = tempfile.mkstemp(suffix=".epub")
        os.close(descriptor)
        temporary = Path(temporary_name)
        try:
            epub.write_epub(str(temporary), book, {})
            return self._normalize_epub_zip(temporary)
        finally:
            if temporary.exists():
                temporary.unlink()

    @staticmethod
    def _normalize_epub_zip(path: Path) -> bytes:
        with zipfile.ZipFile(path, "r") as source:
            members = {
                info.filename: source.read(info.filename)
                for info in source.infolist()
            }
        for name, value in tuple(members.items()):
            if name.endswith(".opf"):
                members[name] = re.sub(
                    rb'(<meta property="dcterms:modified">)[^<]+(</meta>)',
                    rb"\g<1>1980-01-01T00:00:00Z\g<2>",
                    value,
                )

        descriptor, normalized_name = tempfile.mkstemp(suffix=".epub")
        os.close(descriptor)
        normalized = Path(normalized_name)
        try:
            with zipfile.ZipFile(normalized, "w") as target:
                names = ["mimetype"] + sorted(
                    name for name in members if name != "mimetype"
                )
                for name in names:
                    info = zipfile.ZipInfo(name, date_time=(1980, 1, 1, 0, 0, 0))
                    info.create_system = 3
                    info.external_attr = 0o600 << 16
                    compression = (
                        zipfile.ZIP_STORED
                        if name == "mimetype"
                        else zipfile.ZIP_DEFLATED
                    )
                    target.writestr(info, members[name], compress_type=compression)
            return normalized.read_bytes()
        finally:
            if normalized.exists():
                normalized.unlink()
