"""Validated JSON-safe inputs and metadata-only outputs for corpus tools."""

from __future__ import annotations

from enum import Enum
from typing import Any

from pydantic import BaseModel, ConfigDict, Field, field_validator, model_validator


class StrictModel(BaseModel):
    model_config = ConfigDict(extra="forbid", frozen=True)


class NovelId(str, Enum):
    SHADOW_SLAVE = "shadow-slave"


class ExportFormat(str, Enum):
    TXT = "txt"
    MARKDOWN = "md"
    EPUB = "epub"


class ErrorCategory(str, Enum):
    CONFIGURATION = "configuration"
    AUTHENTICATION = "authentication"
    TIMEOUT = "timeout"
    PROVIDER = "provider"
    NOT_FOUND = "not_found"
    EXTRACTION = "extraction"
    VALIDATION = "validation"
    CONFLICT = "conflict"
    FILESYSTEM = "filesystem"
    SECURITY = "security"


class ChapterState(str, Enum):
    VALID = "valid"
    MISSING = "missing"
    BROKEN = "broken"
    DUPLICATED = "duplicated"
    WRONGLY_PLACED = "wrongly_placed"
    CONFLICT = "conflict"


class ActionStatus(str, Enum):
    PREVIEWED = "previewed"
    SAVED = "saved"
    REPLACED = "replaced"
    SKIPPED = "skipped"
    NOT_FOUND = "not_found"
    CONFLICT = "conflict"
    FAILED = "failed"


class InspectNovelCorpusInput(StrictModel):
    novel_id: NovelId


class FetchNovelChaptersInput(StrictModel):
    novel_id: NovelId
    start_chapter: int = Field(ge=1)
    end_chapter: int | None = Field(default=None, ge=1)
    preview: bool = True

    @model_validator(mode="after")
    def validate_range(self) -> "FetchNovelChaptersInput":
        if self.end_chapter is not None and self.end_chapter < self.start_chapter:
            raise ValueError("end_chapter must be greater than or equal to start_chapter")
        return self

    @property
    def chapters(self) -> range:
        return range(self.start_chapter, (self.end_chapter or self.start_chapter) + 1)


class UpdateNovelCorpusInput(StrictModel):
    novel_id: NovelId
    through_chapter: int | None = Field(default=None, ge=1)
    preview: bool = True


class BuildNovelPacketInput(StrictModel):
    novel_id: NovelId
    chapters: list[int] = Field(min_length=1)

    @field_validator("chapters")
    @classmethod
    def validate_chapters(cls, value: list[int]) -> list[int]:
        if any(chapter < 1 for chapter in value):
            raise ValueError("chapter numbers must be positive")
        if len(value) != len(set(value)):
            raise ValueError("chapter numbers must not contain duplicates")
        return sorted(value)


class ExportNovelInput(StrictModel):
    novel_id: NovelId
    format: ExportFormat
    through_chapter: int | None = Field(default=None, ge=1)


class ChapterRange(StrictModel):
    start: int
    end: int


class FileIssue(StrictModel):
    category: ChapterState | ErrorCategory
    chapter: int | None = None
    paths: list[str] = Field(default_factory=list)
    sha256: str | None = None
    detail: str


class UrlListReport(StrictModel):
    path: str
    valid_url_count: int
    first_chapter: int | None
    last_chapter: int | None
    gaps: list[ChapterRange] = Field(default_factory=list)
    duplicates: list[int] = Field(default_factory=list)
    out_of_order_lines: list[ChapterRange] = Field(default_factory=list)
    malformed_lines: list[ChapterRange] = Field(default_factory=list)
    observed_templates: list[str] = Field(default_factory=list)
    malformed_samples: list[str] = Field(default_factory=list)


class InspectNovelCorpusOutput(StrictModel):
    operation: str = "inspect_novel_corpus"
    novel_id: NovelId
    counts: dict[str, int]
    ranges: dict[str, list[ChapterRange]]
    issues: list[FileIssue]
    url_list: UrlListReport
    corpus_sha256: str
    manifest_path: str
    issue_report_path: str
    issues_truncated: bool
    receipt_path: str = ""
    metadata_only: bool = True


class ChapterAction(StrictModel):
    chapter: int
    status: ActionStatus
    action: str
    url: str
    path: str | None = None
    title: str | None = None
    sha256: str | None = None
    byte_count: int | None = None
    old_sha256: str | None = None
    old_byte_count: int | None = None
    error_category: ErrorCategory | None = None
    error_code: str | None = None
    http_status: int | None = None
    observed_url: str | None = None
    observed_chapter: int | None = None


class FetchNovelChaptersOutput(StrictModel):
    operation: str = "fetch_novel_chapters"
    novel_id: NovelId
    preview: bool
    requested: ChapterRange
    actions: list[ChapterAction]
    total_action_count: int
    action_counts: dict[str, int]
    actions_truncated: bool
    receipt_path: str
    metadata_only: bool = True


class UpdateNovelCorpusOutput(StrictModel):
    operation: str = "update_novel_corpus"
    novel_id: NovelId
    preview: bool
    through_chapter: int | None
    actions: list[ChapterAction]
    total_action_count: int
    action_counts: dict[str, int]
    actions_truncated: bool
    stopped_at_chapter: int | None = None
    stop_reason: str | None = None
    receipt_path: str
    metadata_only: bool = True


class SourceHash(StrictModel):
    chapter: int
    sha256: str


class BuildNovelPacketOutput(StrictModel):
    operation: str = "build_novel_packet"
    novel_id: NovelId
    chapters: list[int]
    chapter_count: int
    packet_path: str
    manifest_path: str
    packet_sha256: str
    source_hashes: list[SourceHash]
    receipt_path: str
    metadata_only: bool = True


class ExportNovelOutput(StrictModel):
    operation: str = "export_novel"
    novel_id: NovelId
    format: ExportFormat
    through_chapter: int
    chapter_count: int
    export_path: str
    export_sha256: str
    byte_count: int
    source_corpus_sha256: str
    receipt_path: str
    metadata_only: bool = True


class ManifestEntry(StrictModel):
    chapter: int
    title: str | None
    url: str
    relative_path: str | None
    sha256: str | None
    byte_count: int | None
    status: ChapterState


class CorpusManifest(StrictModel):
    schema_version: int = 1
    novel_id: NovelId
    corpus_sha256: str
    entries: list[ManifestEntry]


class FetchedPage(StrictModel):
    url: str
    final_url: str
    status_code: int
    raw_html: str = Field(repr=False)

    def metadata(self) -> dict[str, Any]:
        return {
            "url": self.url,
            "final_url": self.final_url,
            "status_code": self.status_code,
            "raw_html_present": bool(self.raw_html),
        }
