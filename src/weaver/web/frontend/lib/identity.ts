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
const DEVICE_COOKIE = "weaver_device_id";
const API_KEY_STORAGE = "weaver_api_key";
const API_KEY_DISABLED_STORAGE = "weaver_api_key_disabled";
const MODEL_STORAGE = "weaver_model_id";

export const DEFAULT_MODEL_ID = "deepseek-flash";
const LEGACY_FLASH_MODEL_ID = "deepseek-v4-flash";

/** Models the server accepts (DeepSeek API model ids). */
export const AVAILABLE_MODELS = [
  { id: "deepseek-flash", label: "DeepSeek V4.1 Flash" },
  { id: "deepseek-v4-pro", label: "DeepSeek V4 Pro" },
] as const;

function syncDeviceCookie(deviceId: string): void {
  document.cookie = `${DEVICE_COOKIE}=${encodeURIComponent(deviceId)}; Path=/; Max-Age=31536000; SameSite=Strict`;
}

export function getDeviceId(): string {
  let deviceId = localStorage.getItem(DEVICE_KEY);
  if (!deviceId) {
    deviceId = crypto.randomUUID();
    localStorage.setItem(DEVICE_KEY, deviceId);
  }
  syncDeviceCookie(deviceId);
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
  const stored = localStorage.getItem(MODEL_STORAGE);
  if (stored === LEGACY_FLASH_MODEL_ID) {
    localStorage.removeItem(MODEL_STORAGE);
    return DEFAULT_MODEL_ID;
  }
  return stored ?? DEFAULT_MODEL_ID;
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
  document.cookie = `${DEVICE_COOKIE}=; Path=/; Max-Age=0; SameSite=Strict`;
}

/**
 * Headers every fetch call carries: device id always, key when set and
 * not disabled, and an explicitly selected model. The device id is also
 * mirrored to a same-origin cookie so EventSource can preserve ownership
 * without putting the id in the URL.
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
