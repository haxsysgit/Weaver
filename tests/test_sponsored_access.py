"""Financial and privacy contracts for the shared daily allowance."""

import asyncio
from datetime import UTC, datetime, timedelta

import pytest

from weaver.model_layer import ModelUsage
from weaver.sponsored import (
    DEFAULT_PRICE,
    DeepSeekBalance,
    PriceSchedule,
    SponsoredAccess,
    SponsoredConfig,
    SponsoredTurn,
    SponsoredUnavailable,
)


NOW = datetime(2026, 9, 30, 12, tzinfo=UTC)
SECRET = "test-only-signing-secret-with-32-bytes"


def config(**changes) -> SponsoredConfig:
    values = {
        "enabled": True,
        "price": DEFAULT_PRICE,
        "price_valid_until": datetime(2026, 10, 10, tzinfo=UTC),
    }
    values.update(changes)
    return SponsoredConfig(**values)


async def open_access(path, **changes) -> SponsoredAccess:
    access = SponsoredAccess(path, secret=SECRET, config=config(**changes))
    await access.open()
    return access


async def reserve(
    access: SponsoredAccess,
    pass_token: str,
    *,
    at: datetime = NOW,
    address: str = "203.0.113.10",
):
    await access.record_consent(pass_token, at=at)
    return await access.reserve(
        pass_token,
        network_address=address,
        available_balance_microdollars=10_000_000,
        at=at,
    )


async def settle_small_turn(
    access: SponsoredAccess,
    reservation_id: str,
    *,
    at: datetime = NOW,
) -> None:
    await access.mark_started(reservation_id, at=at)
    await access.record_usage(
        reservation_id,
        ModelUsage(
            input_tokens=1_000,
            output_tokens=500,
            total_tokens=1_500,
            reasoning_tokens=100,
            cache_hit_tokens=600,
            cache_miss_tokens=400,
        ),
    )
    await access.settle(reservation_id, at=at)


@pytest.mark.asyncio
async def test_signed_pass_rejects_tampering_and_persists_no_raw_identity(
    tmp_path,
) -> None:
    database = tmp_path / "sponsored.sqlite3"
    access = await open_access(database)
    try:
        pass_token = access.issue_pass(at=NOW, reader_id="private-reader-id")
        tampered = pass_token[:-1] + ("a" if pass_token[-1] != "a" else "b")

        with pytest.raises(SponsoredUnavailable, match="invalid_pass"):
            await access.status(tampered, at=NOW)

        await reserve(
            access,
            pass_token,
            address="198.51.100.77",
        )
    finally:
        await access.close()

    database_bytes = database.read_bytes()
    assert b"private-reader-id" not in database_bytes
    assert b"198.51.100.77" not in database_bytes
    assert SECRET.encode() not in database_bytes


@pytest.mark.asyncio
async def test_atomic_reservations_hold_reader_and_global_limits(tmp_path) -> None:
    database = tmp_path / "sponsored.sqlite3"
    first = await open_access(database)
    second = await open_access(database)
    passes = [
        first.issue_pass(at=NOW, reader_id=f"reader-{index}")
        for index in range(3)
    ]
    try:
        for pass_token in passes:
            await first.record_consent(pass_token, at=NOW)

        results = await asyncio.gather(
            first.reserve(
                passes[0],
                network_address="203.0.113.1",
                available_balance_microdollars=10_000_000,
                at=NOW,
            ),
            second.reserve(
                passes[1],
                network_address="203.0.113.2",
                available_balance_microdollars=10_000_000,
                at=NOW,
            ),
            first.reserve(
                passes[2],
                network_address="203.0.113.3",
                available_balance_microdollars=10_000_000,
                at=NOW,
            ),
            return_exceptions=True,
        )

        accepted = [result for result in results if not isinstance(result, Exception)]
        rejected = [result for result in results if isinstance(result, Exception)]
        assert len(accepted) == 2
        assert len(rejected) == 1
        assert isinstance(rejected[0], SponsoredUnavailable)
        assert rejected[0].code == "global_exhausted"

        with pytest.raises(SponsoredUnavailable, match="active_turn"):
            await second.reserve(
                passes[0],
                network_address="203.0.113.1",
                available_balance_microdollars=10_000_000,
                at=NOW,
            )
    finally:
        await second.close()
        await first.close()


@pytest.mark.asyncio
async def test_reader_gets_three_questions_and_utc_rollover(tmp_path) -> None:
    access = await open_access(tmp_path / "sponsored.sqlite3")
    pass_token = access.issue_pass(at=NOW, reader_id="three-a-day")
    try:
        for index in range(3):
            reservation = await reserve(
                access,
                pass_token,
                at=NOW + timedelta(minutes=index),
            )
            await settle_small_turn(
                access,
                reservation.reservation_id,
                at=NOW + timedelta(minutes=index),
            )

        status = await access.status(pass_token, at=NOW)
        assert status.remaining_questions == 0
        with pytest.raises(SponsoredUnavailable, match="reader_exhausted"):
            await reserve(access, pass_token, at=NOW)

        tomorrow = datetime(2026, 10, 1, 0, 1, tzinfo=UTC)
        status = await access.status(pass_token, at=tomorrow)
        assert status.remaining_questions == 3
    finally:
        await access.close()


@pytest.mark.asyncio
async def test_release_before_start_and_full_charge_after_start(tmp_path) -> None:
    access = await open_access(tmp_path / "sponsored.sqlite3")
    pass_token = access.issue_pass(at=NOW, reader_id="recovery-reader")
    try:
        released = await reserve(access, pass_token)
        await access.release(released.reservation_id, at=NOW)
        assert (await access.status(pass_token, at=NOW)).remaining_questions == 3

        uncertain = await reserve(access, pass_token)
        await access.mark_started(uncertain.reservation_id, at=NOW)
        await access.settle(uncertain.reservation_id, at=NOW)

        summary = await access.summary(at=NOW)
        assert summary.uncertain_questions == 1
        assert summary.settled_microdollars == config().reservation_microdollars
        assert (await access.status(pass_token, at=NOW)).remaining_questions == 2
    finally:
        await access.close()


@pytest.mark.asyncio
async def test_restart_releases_stale_reservations_and_charges_stale_started(
    tmp_path,
) -> None:
    database = tmp_path / "sponsored.sqlite3"
    access = await open_access(database, stale_after_seconds=60)
    reserved_pass = access.issue_pass(at=NOW, reader_id="reserved-reader")
    started_pass = access.issue_pass(at=NOW, reader_id="started-reader")
    await reserve(access, reserved_pass, at=NOW)
    stale_started = await reserve(access, started_pass, at=NOW)
    await access.mark_started(stale_started.reservation_id, at=NOW)
    await access.close()

    reopened = await open_access(database, stale_after_seconds=60)
    try:
        await reopened.recover_stale(at=NOW + timedelta(seconds=10))
        quick_restart = await reopened.summary(at=NOW + timedelta(seconds=10))
        assert quick_restart.uncertain_questions == 1
        assert quick_restart.active_reservations == 1

        await reopened.recover_stale(at=NOW + timedelta(minutes=2))
        summary = await reopened.summary(at=NOW + timedelta(minutes=2))
        assert summary.uncertain_questions == 1
        assert summary.settled_microdollars == config().reservation_microdollars
        assert summary.active_reservations == 0
    finally:
        await reopened.close()


@pytest.mark.asyncio
async def test_running_turn_is_not_reaped_by_another_reservation(tmp_path) -> None:
    access = await open_access(
        tmp_path / "sponsored.sqlite3",
        stale_after_seconds=60,
    )
    pass_token = access.issue_pass(at=NOW, reader_id="slow-reader")
    try:
        running = await reserve(access, pass_token, at=NOW)
        await access.mark_started(running.reservation_id, at=NOW)

        with pytest.raises(SponsoredUnavailable, match="active_turn"):
            await reserve(
                access,
                pass_token,
                at=NOW + timedelta(minutes=30),
            )
    finally:
        await access.close()


@pytest.mark.asyncio
async def test_usage_cost_uses_cache_miss_hit_and_output_rates(tmp_path) -> None:
    access = await open_access(tmp_path / "sponsored.sqlite3")
    pass_token = access.issue_pass(at=NOW, reader_id="priced-reader")
    try:
        reservation = await reserve(access, pass_token)
        await access.mark_started(reservation.reservation_id, at=NOW)
        await access.record_usage(
            reservation.reservation_id,
            ModelUsage(
                input_tokens=200_000,
                output_tokens=100_000,
                total_tokens=300_000,
                reasoning_tokens=40_000,
                cache_hit_tokens=100_000,
                cache_miss_tokens=100_000,
            ),
        )
        await access.settle(reservation.reservation_id, at=NOW)

        summary = await access.summary(at=NOW)
        assert summary.settled_microdollars == 150_600
    finally:
        await access.close()


@pytest.mark.asyncio
async def test_usage_cost_sums_calls_with_the_configured_price(tmp_path) -> None:
    price = PriceSchedule(
        version="synthetic-price",
        cache_hit_microdollars_per_million=100_000,
        cache_miss_microdollars_per_million=200_000,
        output_microdollars_per_million=300_000,
    )
    access = await open_access(tmp_path / "sponsored.sqlite3", price=price)
    pass_token = access.issue_pass(at=NOW, reader_id="multi-call-reader")
    usage = ModelUsage(
        input_tokens=200_000,
        output_tokens=100_000,
        total_tokens=300_000,
        reasoning_tokens=25_000,
        cache_hit_tokens=100_000,
        cache_miss_tokens=100_000,
    )
    try:
        reservation = await reserve(access, pass_token)
        await access.mark_started(reservation.reservation_id, at=NOW)
        await access.record_usage(reservation.reservation_id, usage)
        await access.record_usage(reservation.reservation_id, usage)
        await access.settle(reservation.reservation_id, at=NOW)

        summary = await access.summary(at=NOW)
        assert summary.settled_microdollars == 120_000
        assert summary.price_version == "synthetic-price"
    finally:
        await access.close()


@pytest.mark.asyncio
async def test_sponsored_turn_enforces_provider_envelope(tmp_path) -> None:
    access = await open_access(tmp_path / "sponsored.sqlite3")
    pass_token = access.issue_pass(at=NOW, reader_id="bounded-turn")
    try:
        reservation = await reserve(access, pass_token)
        turn = SponsoredTurn(access, reservation)
        payload = {
            "model": "reader-selected-model",
            "messages": [{"role": "user", "content": "question"}],
            "max_tokens": 99_999,
            "extra_body": {},
        }

        await turn.before_call(payload, has_tools=True)

        assert payload["model"] == "deepseek-flash"
        assert payload["max_tokens"] == 4_096
        assert payload["extra_body"]["user_id"].startswith("wv_")
        assert "bounded-turn" not in payload["extra_body"]["user_id"]
        await turn.record_usage(
            ModelUsage(
                input_tokens=100,
                output_tokens=20,
                total_tokens=120,
                reasoning_tokens=5,
                cache_hit_tokens=0,
                cache_miss_tokens=100,
            )
        )
        await turn.finish()
        assert (await access.summary(at=NOW)).completed_questions == 1
    finally:
        await access.close()


@pytest.mark.asyncio
async def test_sponsored_turn_stops_before_a_ninth_provider_call(tmp_path) -> None:
    access = await open_access(tmp_path / "sponsored.sqlite3")
    pass_token = access.issue_pass(at=NOW, reader_id="eight-call-turn")
    usage = ModelUsage(
        input_tokens=100,
        output_tokens=20,
        total_tokens=120,
        reasoning_tokens=5,
        cache_hit_tokens=0,
        cache_miss_tokens=100,
    )
    try:
        turn = SponsoredTurn(access, await reserve(access, pass_token))
        for call_number in range(8):
            await turn.before_call(
                {
                    "model": "deepseek-flash",
                    "messages": [],
                    "max_tokens": 512,
                    "extra_body": {},
                },
                has_tools=call_number < 7,
            )
            await turn.record_usage(usage)

        with pytest.raises(SponsoredUnavailable, match="call_limit"):
            await turn.before_call(
                {
                    "model": "deepseek-flash",
                    "messages": [],
                    "max_tokens": 512,
                    "extra_body": {},
                },
                has_tools=False,
            )
        await turn.finish()
    finally:
        await access.close()


@pytest.mark.asyncio
async def test_sponsored_turn_allows_two_phase_answer_and_repair(tmp_path) -> None:
    access = await open_access(tmp_path / "sponsored.sqlite3")
    pass_token = access.issue_pass(at=NOW, reader_id="repair-answer-call")
    usage = ModelUsage(
        input_tokens=100,
        output_tokens=20,
        total_tokens=120,
        reasoning_tokens=5,
        cache_hit_tokens=0,
        cache_miss_tokens=100,
    )
    payload = {
        "model": "deepseek-flash",
        "messages": [],
        "max_tokens": 99_999,
        "extra_body": {},
    }
    try:
        turn = SponsoredTurn(access, await reserve(access, pass_token))
        for _ in range(3):
            answer = payload.copy()
            answer["max_tokens"] = 99_999
            await turn.before_call(answer, has_tools=False)
            assert answer["max_tokens"] == 12_288
            await turn.record_usage(usage)

        with pytest.raises(SponsoredUnavailable, match="answer_call_limit"):
            await turn.before_call(payload.copy(), has_tools=False)
        await turn.finish()
    finally:
        await access.close()


@pytest.mark.asyncio
async def test_sponsored_turn_caps_three_answers_and_eight_calls(tmp_path) -> None:
    access = await open_access(tmp_path / "sponsored.sqlite3")
    pass_token = access.issue_pass(at=NOW, reader_id="three-answer-eight-call")
    usage = ModelUsage(
        input_tokens=100,
        output_tokens=20,
        total_tokens=120,
        reasoning_tokens=5,
        cache_hit_tokens=0,
        cache_miss_tokens=100,
    )
    payload = {
        "model": "deepseek-flash",
        "messages": [],
        "max_tokens": 512,
        "extra_body": {},
    }
    try:
        turn = SponsoredTurn(access, await reserve(access, pass_token))
        for _ in range(5):
            await turn.before_call(payload.copy(), has_tools=True)
            await turn.record_usage(usage)
        for _ in range(3):
            await turn.before_call(payload.copy(), has_tools=False)
            await turn.record_usage(usage)

        with pytest.raises(SponsoredUnavailable, match="call_limit"):
            await turn.before_call(payload.copy(), has_tools=True)
        await turn.finish()
    finally:
        await access.close()


@pytest.mark.asyncio
async def test_network_burst_limit_uses_only_a_keyed_digest(tmp_path) -> None:
    database = tmp_path / "sponsored.sqlite3"
    access = await open_access(
        database,
        reservation_microdollars=1_000,
        daily_budget_microdollars=1_000_000,
        network_hourly_limit=2,
    )
    passes = [
        access.issue_pass(at=NOW, reader_id=f"network-reader-{index}")
        for index in range(3)
    ]
    try:
        for pass_token in passes:
            await access.record_consent(pass_token, at=NOW)
        for pass_token in passes[:2]:
            reservation = await access.reserve(
                pass_token,
                network_address="198.51.100.41",
                available_balance_microdollars=10_000_000,
                at=NOW,
            )
            await settle_small_turn(access, reservation.reservation_id, at=NOW)

        with pytest.raises(SponsoredUnavailable, match="network_busy"):
            await access.reserve(
                passes[2],
                network_address="198.51.100.41",
                available_balance_microdollars=10_000_000,
                at=NOW,
            )
    finally:
        await access.close()

    assert b"198.51.100.41" not in database.read_bytes()


@pytest.mark.asyncio
async def test_oversized_payload_fails_before_spend_and_releases_question(
    tmp_path,
) -> None:
    access = await open_access(tmp_path / "sponsored.sqlite3")
    pass_token = access.issue_pass(at=NOW, reader_id="oversized-turn")
    try:
        reservation = await reserve(access, pass_token)
        turn = SponsoredTurn(access, reservation)
        payload = {
            "model": "deepseek-flash",
            "messages": [{"role": "user", "content": "x" * (121 * 1024)}],
            "max_tokens": 4_096,
            "extra_body": {},
        }

        with pytest.raises(SponsoredUnavailable, match="payload_too_large"):
            await turn.before_call(payload, has_tools=True)
        await turn.finish(failure_category="payload_too_large")

        assert (await access.status(pass_token, at=NOW)).remaining_questions == 3
    finally:
        await access.close()


@pytest.mark.asyncio
@pytest.mark.parametrize(
    ("changes", "balance", "code"),
    [
        ({"enabled": False}, 10_000_000, "disabled"),
        (
            {"price_valid_until": datetime(2026, 9, 29, tzinfo=UTC)},
            10_000_000,
            "stale_price",
        ),
        ({}, 369_999, "insufficient_balance"),
    ],
)
async def test_unsafe_configuration_refuses_new_reservations(
    tmp_path,
    changes,
    balance,
    code,
) -> None:
    access = await open_access(tmp_path / code / "sponsored.sqlite3", **changes)
    pass_token = access.issue_pass(at=NOW, reader_id=code)
    try:
        await access.record_consent(pass_token, at=NOW)
        with pytest.raises(SponsoredUnavailable, match=code):
            await access.reserve(
                pass_token,
                network_address="203.0.113.8",
                available_balance_microdollars=balance,
                at=NOW,
            )
    finally:
        await access.close()


@pytest.mark.asyncio
async def test_balance_uses_usd_total_and_short_cache() -> None:
    calls = 0

    def fetch_balance() -> dict:
        nonlocal calls
        calls += 1
        return {
            "is_available": True,
            "balance_infos": [
                {"currency": "CNY", "total_balance": "500.00"},
                {"currency": "USD", "total_balance": "9.876543"},
            ],
        }

    balance = DeepSeekBalance(
        "test-only-key",
        ttl_seconds=30,
        fetcher=fetch_balance,
    )

    assert await balance.available_microdollars() == 9_876_543
    assert await balance.available_microdollars() == 9_876_543
    assert calls == 1


@pytest.mark.asyncio
@pytest.mark.parametrize(
    "response",
    [
        {"is_available": False, "balance_infos": []},
        {"is_available": True, "balance_infos": []},
        {
            "is_available": True,
            "balance_infos": [{"currency": "USD", "total_balance": "bad"}],
        },
    ],
)
async def test_missing_or_unavailable_usd_balance_fails_closed(response) -> None:
    balance = DeepSeekBalance(
        "test-only-key",
        fetcher=lambda: response,
    )

    assert await balance.available_microdollars() is None
