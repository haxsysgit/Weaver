import { createRoot } from "react-dom/client";

import { ChatApp } from "./components/ChatApp";
import { createHttpChatApi } from "./lib/chatApi";
import "./styles/tokens.css";
import "./styles/app.css";

function metaContent(name: string): string {
  return document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)?.content ?? "";
}

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Weaver root element is missing.");
}

createRoot(rootElement).render(
  <ChatApp
    api={createHttpChatApi()}
    modeLabel={metaContent("weaver-mode")}
    privacyLabel={metaContent("weaver-privacy")}
  />,
);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    void navigator.serviceWorker.register("/sw.js");
  });
}
