import type { ReactNode } from "react";

import type { LibraryStatus as Library, RefreshStatus } from "../lib/chatApi";

// Plan 031: how far the shelf reaches and how the weekly refresh went.
// Metadata only; the server never sends chapter text here.

function when(value: string | null): string {
  if (!value) {
    return "";
  }
  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? ""
    : date.toLocaleDateString(undefined, { day: "numeric", month: "short", weekday: "short" });
}

function lastRun(refresh: RefreshStatus): string | null {
  const checked = when(refresh.last_check_at);
  if (!checked) {
    return null;
  }
  if (refresh.outcome === "added") {
    const chapters = refresh.added === 1 ? "1 new chapter" : `${refresh.added} new chapters`;
    return `Last check ${checked}: ${chapters}.`;
  }
  if (refresh.outcome === "up_to_date") {
    return `Last check ${checked}: no new chapters.`;
  }
  return `Last check ${checked}.`;
}

function warning(refresh: RefreshStatus): { title: string; text: ReactNode } | null {
  if (!refresh.last_check_at) {
    return {
      text: "Weaver looks for new chapters once the weekly check runs on this machine.",
      title: "[No weekly check has run yet.]",
    };
  }
  if (refresh.outcome === "failed") {
    const failure = refresh.last_failure;
    const moved = failure?.code === "final_url_mismatch";
    return {
      text: moved
        ? <>The source moved to another address, so nothing was saved. Run <code>weaver refresh</code> on this machine to see where.</>
        : <>Nothing unsafe was saved. Run <code>weaver refresh</code> on this machine to see why.</>,
      title: "[The last refresh failed.]",
    };
  }
  if (refresh.outcome === "needs_owner") {
    return {
      text: <>It found work it will not do alone. Run <code>weaver refresh</code> on this machine, then <code>weaver refresh --apply</code>.</>,
      title: "[The library needs you.]",
    };
  }
  if (refresh.stale) {
    return {
      text: <>No check since {when(refresh.last_check_at)}. Leave this PC on on Saturdays, or run <code>weaver schedule status</code>.</>,
      title: "[The weekly check has stopped.]",
    };
  }
  return null;
}

export function LibraryStatus({ library }: { library: Library | null }) {
  if (!library?.last_chapter) {
    return null;
  }
  const refresh = library.refresh ?? null;
  const note = refresh ? warning(refresh) : null;
  const run = refresh ? lastRun(refresh) : null;
  return (
    <section aria-label="Library" className="lab-library-status">
      <h4>Library</h4>
      <p>Chapters 1 to {library.last_chapter}. Weaver looks for new ones every Saturday.</p>
      {run && <p>{run}</p>}
      {note && (
        <p className="lab-boundary-unset" role="note">
          <strong>{note.title}</strong> {note.text}
        </p>
      )}
    </section>
  );
}
