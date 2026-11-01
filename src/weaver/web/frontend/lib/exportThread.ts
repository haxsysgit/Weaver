import type { DisplayMessage } from "./chatModel";

export interface ThreadExport {
  domain: "canon" | "fanfic";
  exportedAt: Date;
  messages: DisplayMessage[];
  title: string;
}

/** A thread as a Markdown file a reader can keep, read, or share. */
export function threadMarkdown({ domain, exportedAt, messages, title }: ThreadExport): string {
  const kind = domain === "fanfic" ? "Fanfic" : "Chat";
  const date = exportedAt.toISOString().slice(0, 10);
  const lines = [`# ${title.trim() || "Weaver thread"}`, "", `*${kind} with Weaver, saved ${date}.*`];
  for (const message of messages) {
    if (message.streaming || !message.content.trim()) {
      continue;
    }
    lines.push("", `**${message.role === "owner" ? "You" : "Weaver"}**`, "", message.content.trim());
  }
  return `${lines.join("\n")}\n`;
}

/** A safe, readable file name: "Who Would Win, Sunny Nephis?" -> who-would-win-sunny-nephis.md */
export function exportFileName(title: string): string {
  const slug = title
    .normalize("NFKD")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60)
    .replace(/-+$/g, "");
  return `${slug || "weaver-thread"}.md`;
}

/** Hand the reader the file. Browser only. */
export function downloadThread(thread: ThreadExport): void {
  const blob = new Blob([threadMarkdown(thread)], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = exportFileName(thread.title);
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 0);
}
