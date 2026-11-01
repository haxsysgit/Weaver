import { describe, expect, it } from "vitest";

import {
  AVAILABLE_MODELS,
  DEFAULT_MODEL_ID,
  getApiKey,
  getModelId,
  isApiKeyDisabled,
  setApiKey,
  setApiKeyDisabled,
  setModelId,
  weaverHeaders,
} from "./identity";

describe("browser-local device identity", () => {
  it("mirrors the device id into the same-origin stream cookie", () => {
    let cookie = "";
    Object.defineProperty(document, "cookie", {
      configurable: true,
      get: () => cookie,
      set: (value: string) => {
        cookie = value;
      },
    });

    const deviceId = weaverHeaders()["X-Device-Id"];

    expect(deviceId).toBeTruthy();
    expect(cookie).toContain(`weaver_device_id=${deviceId}`);
    expect(cookie).toContain("SameSite=Strict");
    Reflect.deleteProperty(document, "cookie");
  });
});

describe("browser-local DeepSeek key", () => {
  it("trims, returns, and clears the key", () => {
    setApiKey("  owner-test-key  ");
    expect(getApiKey()).toBe("owner-test-key");

    setApiKey("   ");
    expect(getApiKey()).toBe("");
  });

  it("suppresses the key header when disabled, keeping the stored value", () => {
    setApiKey("owner-test-key");
    setApiKeyDisabled(false);
    expect(weaverHeaders()["X-Weaver-Key"]).toBe("owner-test-key");

    setApiKeyDisabled(true);
    expect(isApiKeyDisabled()).toBe(true);
    expect(getApiKey()).toBe("owner-test-key");
    expect(weaverHeaders()["X-Weaver-Key"]).toBeUndefined();
  });
});

describe("browser-local model selection", () => {
  it("defaults to flash and sends no model header for the default", () => {
    expect(getModelId()).toBe(DEFAULT_MODEL_ID);
    expect(weaverHeaders()["X-Weaver-Model"]).toBeUndefined();
  });

  it("sends the model header when a non-default model is picked", () => {
    setModelId("deepseek-v4-pro");
    expect(getModelId()).toBe("deepseek-v4-pro");
    expect(weaverHeaders()["X-Weaver-Model"]).toBe("deepseek-v4-pro");

    setModelId(DEFAULT_MODEL_ID);
    expect(weaverHeaders()["X-Weaver-Model"]).toBeUndefined();
  });

  it("offers the flash and pro models", () => {
    expect(AVAILABLE_MODELS.map((model) => model.id)).toEqual([
      "deepseek-flash",
      "deepseek-v4-pro",
    ]);
  });

  it("migrates the retired flash alias", () => {
    localStorage.setItem("weaver_model_id", "deepseek-v4-flash");

    expect(getModelId()).toBe("deepseek-flash");
    expect(localStorage.getItem("weaver_model_id")).toBeNull();
  });
});
