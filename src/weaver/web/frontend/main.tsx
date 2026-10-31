import { lazy, Suspense } from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { createRoot } from "react-dom/client";

import { SpellSurfaceChatApp } from "./components/SpellSurfaceChatApp";
import { createHttpChatApi } from "./lib/chatApi";
import "./styles/tokens.css";
import "./styles/app.css";

const ThemeLab = lazy(() =>
  import("./components/ThemeLab").then((m) => ({ default: m.ThemeLab })),
);

config.autoAddCss = false;

function metaContent(name: string): string {
  return document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)?.content ?? "";
}

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Weaver root element is missing.");
}

const isThemeLab = window.location.hash === "#theme-lab";

createRoot(rootElement).render(
  isThemeLab ? (
    <Suspense fallback={<div className="theme-lab-loading">weaving the web…</div>}>
      <ThemeLab />
    </Suspense>
  ) : (
    <SpellSurfaceChatApp
      api={createHttpChatApi()}
      privacyLabel={metaContent("weaver-privacy")}
    />
  ),
);

// A page opened before a rebuild asks for script chunks the server no
// longer has. Reload once to pick up the new build instead of half-working;
// the guard stops a loop if the chunk is truly missing.
window.addEventListener("vite:preloadError", (event) => {
  const key = "weaver.reloaded-for-build";
  try {
    const last = Number(sessionStorage.getItem(key) ?? "0");
    if (Date.now() - last < 60_000) {
      return;
    }
    sessionStorage.setItem(key, String(Date.now()));
  } catch {
    return;
  }
  event.preventDefault();
  window.location.reload();
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    void navigator.serviceWorker.register("/sw.js");
  });
}
