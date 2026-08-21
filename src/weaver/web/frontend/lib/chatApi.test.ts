import { describe, expect, it, vi } from "vitest";

import { createHttpChatApi } from "./chatApi";
import { setApiKey } from "./identity";

// Plan v1 slice 3 regression pin: the authed wrapper must add the
// device id and key headers to every call and must call the real
// fetcher (a self-call here is a stack overflow that kills the app
// before any conversation can load).
describe("createHttpChatApi authed wrapper", () => {
  it("adds device id and key headers to every request", async () => {
    setApiKey("sk-pinned-test-key");
    const calls: Array<{ url: string; init?: RequestInit }> = [];
    const spy = vi.fn(async (input: string, init?: RequestInit) => {
      calls.push({ url: input, init });
      return new Response("[]", { status: 200 });
    });

    const api = createHttpChatApi(spy as unknown as typeof fetch);
    await api.listConversations();
    await api.createConversation();

    expect(calls).toHaveLength(2);
    for (const call of calls) {
      const headers = (call.init?.headers ?? {}) as Record<string, string>;
      expect(headers["X-Device-Id"]).toBeTruthy();
      expect(headers["X-Weaver-Key"]).toBe("sk-pinned-test-key");
    }
  });

  it("does not leak the key header when no key is set", async () => {
    const spy = vi.fn(
      async (_input: string, init?: RequestInit) =>
        new Response("[]", { status: 200 }),
    );
    const api = createHttpChatApi(spy as unknown as typeof fetch);
    await api.listConversations();

    const headers = spy.mock.calls[0][1]?.headers as Record<string, string>;
    expect(headers["X-Weaver-Key"]).toBeUndefined();
    expect(headers["X-Device-Id"]).toBeTruthy();
  });

  it("terminates: the wrapper calls the fetcher, never itself", async () => {
    const spy = vi.fn(async () => new Response("[]", { status: 200 }));
    const api = createHttpChatApi(spy as unknown as typeof fetch);
    // If the wrapper recursed, this would throw a stack overflow.
    await api.listConversations();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it("persists a partial conversation update through the authenticated PATCH route", async () => {
    const updated = {
      archived: false,
      conversation_id: "thread/one",
      created_at: "2026-08-21T12:00:00Z",
      edition_id: "shadow-slave",
      pinned: true,
      title: "Ariel and the Tomb",
    };
    const spy = vi.fn(async (_input: string, _init?: RequestInit) => {
      return new Response(JSON.stringify(updated), {
        headers: { "Content-Type": "application/json" },
        status: 200,
      });
    });
    const api = createHttpChatApi(spy as unknown as typeof fetch);

    await api.updateConversation("thread/one", { pinned: true });

    expect(spy).toHaveBeenCalledOnce();
    expect(spy.mock.calls[0][0]).toBe("/api/conversations/thread%2Fone");
    expect(spy.mock.calls[0][1]).toMatchObject({
      body: JSON.stringify({ pinned: true }),
      method: "PATCH",
    });
    expect(spy.mock.calls[0][1]?.headers).toMatchObject({
      "Content-Type": "application/json",
      "X-Device-Id": expect.any(String),
    });
  });
});
