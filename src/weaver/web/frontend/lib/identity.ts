// Plan v1 slice 3 (BYOK + device scoping): browser-local identity and
// the user's own DeepSeek key. The device id is minted once and never
// leaves the browser except as a header; the key is stored only in this
// browser's localStorage and sent per request, never persisted
// server-side.
//
// Plan v1 (2026-08-17): per-request model selection. The chosen model id
// is stored here like the key and sent as X-Weaver-Model; the server
// falls back to its default when the header is absent. A "disable key"
// flag suppresses the key header while keeping the stored value.

const DEVICE_KEY = "weaver_device_id";
const API_KEY_STORAGE = "weaver_api_key";
const API_KEY_DISABLED_STORAGE = "weaver_api_key_disabled";
const MODEL_STORAGE = "weaver_model_id";

export const DEFAULT_MODEL_ID = "deepseek-v4-flash";

/** Models the server accepts (DeepSeek API model ids). */
export const AVAILABLE_MODELS = [
  { id: "deepseek-v4-flash", label: "DeepSeek V4 Flash" },
  { id: "deepseek-v4-pro", label: "DeepSeek V4 Pro" },
] as const;

export function getDeviceId(): string {
  let deviceId = localStorage.getItem(DEVICE_KEY);
  if (!deviceId) {
    deviceId = crypto.randomUUID();
    localStorage.setItem(DEVICE_KEY, deviceId);
  }
  return deviceId;
}

export function getApiKey(): string {
  return localStorage.getItem(API_KEY_STORAGE) ?? "";
}

export function setApiKey(key: string): void {
  if (key.trim() === "") {
    localStorage.removeItem(API_KEY_STORAGE);
  } else {
    localStorage.setItem(API_KEY_STORAGE, key.trim());
  }
}

/** Whether the stored key is suppressed (falls back to the server key). */
export function isApiKeyDisabled(): boolean {
  return localStorage.getItem(API_KEY_DISABLED_STORAGE) === "1";
}

export function setApiKeyDisabled(disabled: boolean): void {
  if (disabled) {
    localStorage.setItem(API_KEY_DISABLED_STORAGE, "1");
  } else {
    localStorage.removeItem(API_KEY_DISABLED_STORAGE);
  }
}

export function getModelId(): string {
  return localStorage.getItem(MODEL_STORAGE) ?? DEFAULT_MODEL_ID;
}

export function setModelId(modelId: string): void {
  if (modelId === DEFAULT_MODEL_ID) {
    localStorage.removeItem(MODEL_STORAGE);
  } else {
    localStorage.setItem(MODEL_STORAGE, modelId);
  }
}

export function clearDeviceId(): void {
  localStorage.removeItem(DEVICE_KEY);
}

/**
 * Headers every API call carries: device id always, key when set and
 * not disabled, model when set (default flash is the server default, so
 * it is only sent when the user explicitly picked something else).
 */
export function weaverHeaders(extra?: Record<string, string>): Record<string, string> {
  const headers: Record<string, string> = {
    "X-Device-Id": getDeviceId(),
  };
  const key = getApiKey();
  if (key !== "" && !isApiKeyDisabled()) {
    headers["X-Weaver-Key"] = key;
  }
  const model = getModelId();
  if (model !== DEFAULT_MODEL_ID) {
    headers["X-Weaver-Model"] = model;
  }
  return { ...headers, ...extra };
}
