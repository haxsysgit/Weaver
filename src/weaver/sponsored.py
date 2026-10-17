"""Server-side accounting for Weaver's shared daily DeepSeek allowance."""

from __future__ import annotations

import asyncio
import base64
import hashlib
import hmac
import json
import os
import secrets
import time
import urllib.request
from dataclasses import dataclass
from datetime import UTC, datetime, timedelta
from decimal import Decimal, InvalidOperation, ROUND_DOWN
from pathlib import Path
from typing import Callable

import aiosqlite

from weaver.model_layer import ModelUsage


MICRODOLLARS_PER_DOLLAR = 1_000_000
TOKENS_PER_MILLION = 1_000_000
ACTIVE_STATES = ("reserved", "started")
COUNTED_STATES = ("reserved", "started", "settled", "uncertain")


@dataclass(frozen=True, slots=True)
class PriceSchedule:
    version: str
    cache_hit_microdollars_per_million: int
    cache_miss_microdollars_per_million: int
    output_microdollars_per_million: int


DEFAULT_PRICE = PriceSchedule(
    version="deepseek-flash-2026-09-10-peak",
    cache_hit_microdollars_per_million=6_000,
    cache_miss_microdollars_per_million=300_000,
    output_microdollars_per_million=1_200_000,
)
DEFAULT_PRICE_VALID_UNTIL = datetime(2026, 10, 10, tzinfo=UTC)


@dataclass(frozen=True, slots=True)
class SponsoredConfig:
    enabled: bool
    price: PriceSchedule
    price_valid_until: datetime
    daily_question_limit: int = 3
    daily_budget_microdollars: int = MICRODOLLARS_PER_DOLLAR
    reservation_microdollars: int = 370_000
    network_hourly_limit: int = 6
    stale_after_seconds: int = 15 * 60


@dataclass(frozen=True, slots=True)
class SponsoredReservation:
    reservation_id: str
    provider_user_id: str
    reserved_microdollars: int


@dataclass(frozen=True, slots=True)
class SponsoredStatus:
    remaining_questions: int
    reset_at: str
    consented: bool
    enabled: bool


@dataclass(frozen=True, slots=True)
class SponsoredSummary:
    active_reservations: int
    reserved_microdollars: int
    settled_microdollars: int
    completed_questions: int
    failed_questions: int
    uncertain_questions: int
    remaining_microdollars: int
    price_version: str
    reset_at: str


class SponsoredUnavailable(ValueError):
    """A safe, machine-readable refusal for a sponsored turn."""

    def __init__(self, code: str) -> None:
        self.code = code
        super().__init__(code)


class DeepSeekBalance:
    """Short-lived USD balance cache for the sponsored account."""

    def __init__(
        self,
        api_key: str,
        *,
        ttl_seconds: int = 30,
        fetcher: Callable[[], dict] | None = None,
    ) -> None:
        self._api_key = api_key
        self._ttl_seconds = ttl_seconds
        self._fetcher = fetcher or self._fetch
        self._cached_microdollars: int | None = None
        self._cache_expires_at = 0.0

    async def available_microdollars(self) -> int | None:
        current = time.monotonic()
        if current < self._cache_expires_at:
            return self._cached_microdollars
        try:
            response = await asyncio.to_thread(self._fetcher)
            available = self._parse_usd_balance(response)
        except Exception:
            available = None
        self._cached_microdollars = available
        self._cache_expires_at = current + self._ttl_seconds
        return available

    def _fetch(self) -> dict:
        request = urllib.request.Request(
            "https://api.deepseek.com/user/balance",
            headers={"Authorization": f"Bearer {self._api_key}"},
        )
        with urllib.request.urlopen(request, timeout=10) as response:
            return json.loads(response.read())

    @staticmethod
    def _parse_usd_balance(response: dict) -> int | None:
        if response.get("is_available") is not True:
            return None
        for balance in response.get("balance_infos", []):
            if balance.get("currency") != "USD":
                continue
            try:
                dollars = Decimal(str(balance["total_balance"]))
            except (InvalidOperation, KeyError):
                return None
            if dollars < 0:
                return None
            microdollars = dollars * MICRODOLLARS_PER_DOLLAR
            return int(microdollars.to_integral_value(rounding=ROUND_DOWN))
        return None


class FixedBalance:
    """Deterministic balance used only by Weaver's fake web mode."""

    def __init__(self, microdollars: int = 10_000_000) -> None:
        self._microdollars = microdollars

    async def available_microdollars(self) -> int:
        return self._microdollars


def config_from_environment() -> SponsoredConfig:
    raw_expiry = os.environ.get(
        "WEAVER_SPONSORED_PRICE_VALID_UNTIL",
        DEFAULT_PRICE_VALID_UNTIL.isoformat(),
    )
    try:
        price_valid_until = datetime.fromisoformat(raw_expiry)
    except ValueError:
        price_valid_until = datetime.min.replace(tzinfo=UTC)
    if price_valid_until.tzinfo is None:
        price_valid_until = datetime.min.replace(tzinfo=UTC)
    return SponsoredConfig(
        enabled=os.environ.get("WEAVER_SPONSORED_ENABLED") == "1",
        price=DEFAULT_PRICE,
        price_valid_until=price_valid_until.astimezone(UTC),
    )


class SponsoredTurn:
    """One reserved turn's provider-call limits and usage accounting."""

    MAX_CALLS = 8
    # The accepted two-phase answer uses a draft and a final reading
    # pass; one bounded publication repair may follow.
    MAX_ANSWER_CALLS = 3
    MAX_PAYLOAD_BYTES = 120 * 1024
    SEARCH_OUTPUT_TOKENS = 4_096
    ANSWER_OUTPUT_TOKENS = 12_288

    def __init__(
        self,
        access: SponsoredAccess,
        reservation: SponsoredReservation,
    ) -> None:
        self._access = access
        self.reservation = reservation
        self._started = False
        self._open_call = False
        self._call_count = 0
        self._answer_calls = 0

    async def before_call(
        self,
        payload: dict,
        *,
        has_tools: bool,
    ) -> None:
        if self._open_call:
            raise SponsoredUnavailable("call_already_open")
        if self._call_count >= self.MAX_CALLS:
            raise SponsoredUnavailable("call_limit")
        if not has_tools and self._answer_calls >= self.MAX_ANSWER_CALLS:
            raise SponsoredUnavailable("answer_call_limit")

        payload["model"] = "deepseek-flash"
        output_limit = (
            self.SEARCH_OUTPUT_TOKENS
            if has_tools
            else self.ANSWER_OUTPUT_TOKENS
        )
        payload["max_tokens"] = min(int(payload["max_tokens"]), output_limit)
        payload.setdefault("extra_body", {})["user_id"] = (
            self.reservation.provider_user_id
        )
        payload_bytes = json.dumps(
            payload,
            separators=(",", ":"),
            sort_keys=True,
        ).encode()
        if len(payload_bytes) > self.MAX_PAYLOAD_BYTES:
            raise SponsoredUnavailable("payload_too_large")

        if not has_tools:
            self._answer_calls += 1
        if not self._started:
            await self._access.mark_started(self.reservation.reservation_id)
            self._started = True
        self._call_count += 1
        self._open_call = True

    async def record_usage(self, usage: ModelUsage | None) -> None:
        if not self._open_call:
            raise SponsoredUnavailable("call_not_open")
        await self._access.record_usage(
            self.reservation.reservation_id,
            usage or ModelUsage(),
        )
        self._open_call = False

    async def finish(self, *, failure_category: str | None = None) -> None:
        if self._open_call:
            await self.record_usage(None)
        if self._started:
            await self._access.settle(
                self.reservation.reservation_id,
                failure_category=failure_category,
            )
            return
        await self._access.release(self.reservation.reservation_id)


class SponsoredAccess:
    """Signed anonymous passes and an atomic SQLite spend ledger."""

    def __init__(
        self,
        database_path: Path,
        *,
        secret: str,
        config: SponsoredConfig,
    ) -> None:
        if len(secret.encode()) < 32:
            raise ValueError("sponsored signing secret must be at least 32 bytes")
        self._database_path = database_path
        self._secret = secret.encode()
        self.config = config
        self._db: aiosqlite.Connection | None = None
        self._write_lock = asyncio.Lock()

    async def open(self) -> None:
        self._database_path.parent.mkdir(mode=0o700, parents=True, exist_ok=True)
        self._db = await aiosqlite.connect(str(self._database_path))
        self._db.row_factory = aiosqlite.Row
        await self._db.execute("PRAGMA busy_timeout = 5000")
        await self._db.executescript(
            """
            CREATE TABLE IF NOT EXISTS sponsored_readers (
                reader_digest TEXT PRIMARY KEY,
                consented_at INTEGER NOT NULL
            );

            CREATE TABLE IF NOT EXISTS sponsored_reservations (
                reservation_id TEXT PRIMARY KEY,
                reader_digest TEXT NOT NULL,
                network_digest TEXT NOT NULL,
                utc_day TEXT NOT NULL,
                state TEXT NOT NULL CHECK (
                    state IN ('reserved', 'started', 'settled', 'released', 'uncertain')
                ),
                reserved_microdollars INTEGER NOT NULL,
                actual_microdollars INTEGER NOT NULL DEFAULT 0,
                call_count INTEGER NOT NULL DEFAULT 0,
                cache_hit_tokens INTEGER NOT NULL DEFAULT 0,
                cache_miss_tokens INTEGER NOT NULL DEFAULT 0,
                output_tokens INTEGER NOT NULL DEFAULT 0,
                reasoning_tokens INTEGER NOT NULL DEFAULT 0,
                usage_complete INTEGER NOT NULL DEFAULT 1,
                created_at INTEGER NOT NULL,
                started_at INTEGER,
                settled_at INTEGER,
                failure_category TEXT
            );

            CREATE UNIQUE INDEX IF NOT EXISTS one_active_sponsored_turn
            ON sponsored_reservations(reader_digest)
            WHERE state IN ('reserved', 'started');

            CREATE INDEX IF NOT EXISTS sponsored_day_state
            ON sponsored_reservations(utc_day, state);
            """
        )
        await self._db.commit()
        os.chmod(self._database_path, 0o600)

    async def close(self) -> None:
        if self._db is not None:
            await self._db.close()
            self._db = None

    def issue_pass(
        self,
        *,
        at: datetime | None = None,
        reader_id: str | None = None,
    ) -> str:
        issued_at = self._at(at)
        payload = {
            "iat": int(issued_at.timestamp()),
            "rid": reader_id or secrets.token_urlsafe(24),
            "v": 1,
        }
        raw_payload = json.dumps(
            payload,
            separators=(",", ":"),
            sort_keys=True,
        ).encode()
        encoded_payload = self._encode(raw_payload)
        signature = hmac.new(
            self._secret,
            encoded_payload.encode(),
            hashlib.sha256,
        ).digest()
        return f"{encoded_payload}.{self._encode(signature)}"

    async def record_consent(
        self,
        pass_token: str,
        *,
        at: datetime | None = None,
    ) -> None:
        reader_id = self._reader_id(pass_token)
        reader_digest = self._reader_digest(reader_id)
        async with self._write_lock:
            database = self._database()
            await database.execute(
                """
                INSERT INTO sponsored_readers(reader_digest, consented_at)
                VALUES (?, ?)
                ON CONFLICT(reader_digest) DO NOTHING
                """,
                (reader_digest, int(self._at(at).timestamp())),
            )
            await database.commit()

    async def status(
        self,
        pass_token: str,
        *,
        at: datetime | None = None,
    ) -> SponsoredStatus:
        current = self._at(at)
        reader_digest = self._reader_digest(self._reader_id(pass_token))
        database = self._database()
        consented = await self._is_consented(reader_digest)
        placeholders = ",".join("?" for _ in COUNTED_STATES)
        cursor = await database.execute(
            f"""
            SELECT COUNT(*)
            FROM sponsored_reservations
            WHERE reader_digest = ? AND utc_day = ?
              AND state IN ({placeholders})
            """,
            (reader_digest, self._utc_day(current), *COUNTED_STATES),
        )
        used = int((await cursor.fetchone())[0])
        remaining = max(0, self.config.daily_question_limit - used)
        return SponsoredStatus(
            remaining_questions=remaining,
            reset_at=self._reset_at(current).isoformat(),
            consented=consented,
            enabled=self._available(current),
        )

    async def reserve(
        self,
        pass_token: str,
        *,
        network_address: str,
        available_balance_microdollars: int,
        at: datetime | None = None,
    ) -> SponsoredReservation:
        current = self._at(at)
        self._require_available(current)
        reader_id = self._reader_id(pass_token)
        reader_digest = self._reader_digest(reader_id)
        if not await self._is_consented(reader_digest):
            raise SponsoredUnavailable("consent_required")

        day = self._utc_day(current)
        network_digest = self._network_digest(network_address, day)
        async with self._write_lock:
            database = self._database()
            await database.execute("BEGIN IMMEDIATE")
            try:
                await self._recover_stale_in_transaction(
                    current,
                    include_started=False,
                )
                await self._check_reader(reader_digest, day)
                await self._check_network(network_digest, current)
                committed = await self._committed_cost(day)
                next_commitment = committed + self.config.reservation_microdollars
                if next_commitment > self.config.daily_budget_microdollars:
                    raise SponsoredUnavailable("global_exhausted")
                if next_commitment > available_balance_microdollars:
                    raise SponsoredUnavailable("insufficient_balance")

                reservation_id = secrets.token_urlsafe(24)
                await database.execute(
                    """
                    INSERT INTO sponsored_reservations(
                        reservation_id, reader_digest, network_digest, utc_day,
                        state, reserved_microdollars, created_at
                    ) VALUES (?, ?, ?, ?, 'reserved', ?, ?)
                    """,
                    (
                        reservation_id,
                        reader_digest,
                        network_digest,
                        day,
                        self.config.reservation_microdollars,
                        int(current.timestamp()),
                    ),
                )
                await database.commit()
            except Exception:
                await database.rollback()
                raise

        return SponsoredReservation(
            reservation_id=reservation_id,
            provider_user_id=self._provider_user_id(reader_id),
            reserved_microdollars=self.config.reservation_microdollars,
        )

    async def mark_started(
        self,
        reservation_id: str,
        *,
        at: datetime | None = None,
    ) -> None:
        async with self._write_lock:
            database = self._database()
            cursor = await database.execute(
                """
                UPDATE sponsored_reservations
                SET state = 'started', started_at = ?
                WHERE reservation_id = ? AND state = 'reserved'
                """,
                (int(self._at(at).timestamp()), reservation_id),
            )
            await database.commit()
        if cursor.rowcount != 1:
            raise SponsoredUnavailable("invalid_reservation")

    async def record_usage(
        self,
        reservation_id: str,
        usage: ModelUsage,
    ) -> None:
        complete = (
            usage.cache_hit_tokens is not None
            and usage.cache_miss_tokens is not None
            and usage.output_tokens is not None
        )
        async with self._write_lock:
            database = self._database()
            cursor = await database.execute(
                """
                UPDATE sponsored_reservations
                SET call_count = call_count + 1,
                    cache_hit_tokens = cache_hit_tokens + ?,
                    cache_miss_tokens = cache_miss_tokens + ?,
                    output_tokens = output_tokens + ?,
                    reasoning_tokens = reasoning_tokens + ?,
                    usage_complete = usage_complete AND ?
                WHERE reservation_id = ? AND state = 'started'
                """,
                (
                    usage.cache_hit_tokens or 0,
                    usage.cache_miss_tokens or 0,
                    usage.output_tokens or 0,
                    usage.reasoning_tokens or 0,
                    int(complete),
                    reservation_id,
                ),
            )
            await database.commit()
        if cursor.rowcount != 1:
            raise SponsoredUnavailable("invalid_reservation")

    async def settle(
        self,
        reservation_id: str,
        *,
        at: datetime | None = None,
        failure_category: str | None = None,
    ) -> None:
        async with self._write_lock:
            database = self._database()
            await database.execute("BEGIN IMMEDIATE")
            try:
                row = await self._reservation(reservation_id)
                if row["state"] == "reserved":
                    await self._release_in_transaction(reservation_id, self._at(at))
                    await database.commit()
                    return
                if row["state"] != "started":
                    raise SponsoredUnavailable("invalid_reservation")

                usage_complete = (
                    bool(row["usage_complete"]) and row["call_count"] > 0
                )
                state = "settled" if usage_complete else "uncertain"
                actual_cost = (
                    self._usage_cost(row)
                    if state == "settled"
                    else int(row["reserved_microdollars"])
                )
                await database.execute(
                    """
                    UPDATE sponsored_reservations
                    SET state = ?, actual_microdollars = ?, settled_at = ?,
                        failure_category = ?
                    WHERE reservation_id = ?
                    """,
                    (
                        state,
                        actual_cost,
                        int(self._at(at).timestamp()),
                        failure_category,
                        reservation_id,
                    ),
                )
                await database.commit()
            except Exception:
                await database.rollback()
                raise

    async def release(
        self,
        reservation_id: str,
        *,
        at: datetime | None = None,
    ) -> None:
        async with self._write_lock:
            database = self._database()
            await database.execute("BEGIN IMMEDIATE")
            try:
                changed = await self._release_in_transaction(
                    reservation_id,
                    self._at(at),
                )
                if not changed:
                    raise SponsoredUnavailable("invalid_reservation")
                await database.commit()
            except Exception:
                await database.rollback()
                raise

    async def recover_stale(self, *, at: datetime | None = None) -> None:
        async with self._write_lock:
            database = self._database()
            await database.execute("BEGIN IMMEDIATE")
            try:
                await self._recover_stale_in_transaction(
                    self._at(at),
                    include_started=True,
                )
                await database.commit()
            except Exception:
                await database.rollback()
                raise

    async def summary(
        self,
        *,
        at: datetime | None = None,
    ) -> SponsoredSummary:
        current = self._at(at)
        day = self._utc_day(current)
        cursor = await self._database().execute(
            """
            SELECT
                COALESCE(SUM(CASE
                    WHEN state IN ('reserved', 'started')
                    THEN reserved_microdollars ELSE 0 END), 0) AS reserved,
                COALESCE(SUM(CASE
                    WHEN state IN ('settled', 'uncertain')
                    THEN actual_microdollars ELSE 0 END), 0) AS settled,
                COALESCE(SUM(CASE WHEN state = 'settled' THEN 1 ELSE 0 END), 0) AS completed,
                COALESCE(SUM(CASE WHEN state = 'uncertain' THEN 1 ELSE 0 END), 0) AS uncertain,
                COALESCE(SUM(CASE WHEN state IN ('reserved', 'started') THEN 1 ELSE 0 END), 0) AS active,
                COALESCE(SUM(CASE WHEN failure_category IS NOT NULL THEN 1 ELSE 0 END), 0) AS failed
            FROM sponsored_reservations
            WHERE utc_day = ?
            """,
            (day,),
        )
        row = await cursor.fetchone()
        committed = int(row["reserved"]) + int(row["settled"])
        return SponsoredSummary(
            active_reservations=int(row["active"]),
            reserved_microdollars=int(row["reserved"]),
            settled_microdollars=int(row["settled"]),
            completed_questions=int(row["completed"]),
            failed_questions=int(row["failed"]),
            uncertain_questions=int(row["uncertain"]),
            remaining_microdollars=max(
                0,
                self.config.daily_budget_microdollars - committed,
            ),
            price_version=self.config.price.version,
            reset_at=self._reset_at(current).isoformat(),
        )

    async def _check_reader(self, reader_digest: str, day: str) -> None:
        placeholders = ",".join("?" for _ in COUNTED_STATES)
        cursor = await self._database().execute(
            f"""
            SELECT
                SUM(CASE WHEN state IN ('reserved', 'started') THEN 1 ELSE 0 END),
                COUNT(*)
            FROM sponsored_reservations
            WHERE reader_digest = ? AND utc_day = ?
              AND state IN ({placeholders})
            """,
            (reader_digest, day, *COUNTED_STATES),
        )
        active, used = await cursor.fetchone()
        if int(active or 0) > 0:
            raise SponsoredUnavailable("active_turn")
        if int(used) >= self.config.daily_question_limit:
            raise SponsoredUnavailable("reader_exhausted")

    async def _check_network(
        self,
        network_digest: str,
        current: datetime,
    ) -> None:
        cursor = await self._database().execute(
            """
            SELECT COUNT(*)
            FROM sponsored_reservations
            WHERE network_digest = ? AND created_at >= ?
              AND state != 'released'
            """,
            (
                network_digest,
                int((current - timedelta(hours=1)).timestamp()),
            ),
        )
        count = int((await cursor.fetchone())[0])
        if count >= self.config.network_hourly_limit:
            raise SponsoredUnavailable("network_busy")

    async def _committed_cost(self, day: str) -> int:
        cursor = await self._database().execute(
            """
            SELECT COALESCE(SUM(CASE
                WHEN state IN ('reserved', 'started') THEN reserved_microdollars
                WHEN state IN ('settled', 'uncertain') THEN actual_microdollars
                ELSE 0 END), 0)
            FROM sponsored_reservations
            WHERE utc_day = ?
            """,
            (day,),
        )
        return int((await cursor.fetchone())[0])

    async def _is_consented(self, reader_digest: str) -> bool:
        cursor = await self._database().execute(
            """
            SELECT 1 FROM sponsored_readers WHERE reader_digest = ?
            """,
            (reader_digest,),
        )
        return await cursor.fetchone() is not None

    async def _reservation(self, reservation_id: str) -> aiosqlite.Row:
        cursor = await self._database().execute(
            """
            SELECT * FROM sponsored_reservations WHERE reservation_id = ?
            """,
            (reservation_id,),
        )
        row = await cursor.fetchone()
        if row is None:
            raise SponsoredUnavailable("invalid_reservation")
        return row

    async def _release_in_transaction(
        self,
        reservation_id: str,
        current: datetime,
    ) -> bool:
        cursor = await self._database().execute(
            """
            UPDATE sponsored_reservations
            SET state = 'released', actual_microdollars = 0, settled_at = ?
            WHERE reservation_id = ? AND state = 'reserved'
            """,
            (int(current.timestamp()), reservation_id),
        )
        return cursor.rowcount == 1

    async def _recover_stale_in_transaction(
        self,
        current: datetime,
        *,
        include_started: bool,
    ) -> None:
        cutoff = int(current.timestamp()) - self.config.stale_after_seconds
        database = self._database()
        await database.execute(
            """
            UPDATE sponsored_reservations
            SET state = 'released', actual_microdollars = 0, settled_at = ?
            WHERE state = 'reserved' AND created_at < ?
            """,
            (int(current.timestamp()), cutoff),
        )
        if include_started:
            await database.execute(
                """
                UPDATE sponsored_reservations
                SET state = 'uncertain',
                    actual_microdollars = reserved_microdollars,
                    settled_at = ?, failure_category = 'process_lost'
                WHERE state = 'started'
                """,
                (int(current.timestamp()),),
            )

    def _usage_cost(self, row: aiosqlite.Row) -> int:
        price = self.config.price
        numerator = (
            int(row["cache_hit_tokens"])
            * price.cache_hit_microdollars_per_million
            + int(row["cache_miss_tokens"])
            * price.cache_miss_microdollars_per_million
            + int(row["output_tokens"])
            * price.output_microdollars_per_million
        )
        return (numerator + TOKENS_PER_MILLION - 1) // TOKENS_PER_MILLION

    def _reader_id(self, pass_token: str) -> str:
        try:
            encoded_payload, encoded_signature = pass_token.split(".", 1)
            expected = hmac.new(
                self._secret,
                encoded_payload.encode(),
                hashlib.sha256,
            ).digest()
            supplied = self._decode(encoded_signature)
            if not hmac.compare_digest(expected, supplied):
                raise ValueError
            payload = json.loads(self._decode(encoded_payload))
            if (
                payload.get("v") != 1
                or not isinstance(payload.get("rid"), str)
                or not isinstance(payload.get("iat"), int)
            ):
                raise ValueError
            return payload["rid"]
        except (ValueError, TypeError, KeyError, json.JSONDecodeError):
            raise SponsoredUnavailable("invalid_pass") from None

    def _reader_digest(self, reader_id: str) -> str:
        return self._digest("ledger", reader_id)

    def _provider_user_id(self, reader_id: str) -> str:
        return f"wv_{self._digest('provider', reader_id)[:40]}"

    def _network_digest(self, address: str, day: str) -> str:
        return self._digest("network", f"{day}:{address}")

    def _digest(self, purpose: str, value: str) -> str:
        message = f"{purpose}\0{value}".encode()
        return hmac.new(self._secret, message, hashlib.sha256).hexdigest()

    def _require_available(self, current: datetime) -> None:
        if not self.config.enabled:
            raise SponsoredUnavailable("disabled")
        if current >= self.config.price_valid_until:
            raise SponsoredUnavailable("stale_price")

    def _available(self, current: datetime) -> bool:
        return self.config.enabled and current < self.config.price_valid_until

    def _database(self) -> aiosqlite.Connection:
        if self._db is None:
            raise RuntimeError("call open() first")
        return self._db

    @staticmethod
    def _at(value: datetime | None) -> datetime:
        current = value or datetime.now(UTC)
        if current.tzinfo is None:
            raise ValueError("time must include a timezone")
        return current.astimezone(UTC)

    @staticmethod
    def _utc_day(current: datetime) -> str:
        return current.astimezone(UTC).date().isoformat()

    @staticmethod
    def _reset_at(current: datetime) -> datetime:
        tomorrow = current.astimezone(UTC).date() + timedelta(days=1)
        return datetime.combine(tomorrow, datetime.min.time(), tzinfo=UTC)

    @staticmethod
    def _encode(value: bytes) -> str:
        return base64.urlsafe_b64encode(value).rstrip(b"=").decode()

    @staticmethod
    def _decode(value: str) -> bytes:
        padding = "=" * (-len(value) % 4)
        return base64.urlsafe_b64decode(value + padding)
