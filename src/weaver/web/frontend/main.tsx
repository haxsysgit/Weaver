import { lazy, Suspense } from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { createRoot } from "react-dom/client";

import { ChatApp } from "./components/ChatApp";
import { createHttpChatApi } from "./lib/chatApi";
import "./styles/tokens.css";
import "./styles/app.css";

// three.js is only needed for the dev theme-lab page, never for the chat
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
    <ChatApp
      api={createHttpChatApi()}
      modeLabel={metaContent("weaver-mode")}
      privacyLabel={metaContent("weaver-privacy")}
    />
  ),
);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    void navigator.serviceWorker.register("/sw.js");
  });
}
