import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import type { LibraryStatus as Library, RefreshStatus } from "../lib/chatApi";
import { LibraryStatus } from "./LibraryStatus";

const OK: RefreshStatus = {
  added: 5,
  last_check_at: "2026-11-07T10:00:00+00:00",
  last_failure: null,
  last_new_chapter_at: "2026-11-07T10:00:00+00:00",
  last_success_at: "2026-11-07T10:00:00+00:00",
  outcome: "added",
  stale: false,
};

function library(refresh: RefreshStatus | null): Library {
  return { last_chapter: 3237, refresh, search_through: 3127 };
}

describe("LibraryStatus", () => {
  it("names the shelf edge, the weekly check, and the last result", () => {
    render(<LibraryStatus library={library(OK)} />);
    expect(screen.getByText(/Chapters 1 to 3237/)).toBeInTheDocument();
    expect(screen.getByText(/every Saturday/)).toBeInTheDocument();
    expect(screen.getByText(/5 new chapters/)).toBeInTheDocument();
    expect(screen.queryByRole("note")).toBeNull();
  });

  it("raises a note when the last refresh failed", () => {
    render(
      <LibraryStatus
        library={library({
          ...OK,
          added: 0,
          last_failure: { category: "validation", chapter: 3238, code: "final_url_mismatch", observed_url: "https://elsewhere.example/x" },
          outcome: "failed",
        })}
      />,
    );
    expect(screen.getByRole("note")).toHaveTextContent("[The last refresh failed.]");
    expect(screen.getByRole("note")).toHaveTextContent("source moved");
  });

  it("raises a note when the weekly check stopped running", () => {
    render(<LibraryStatus library={library({ ...OK, stale: true })} />);
    expect(screen.getByRole("note")).toHaveTextContent("[The weekly check has stopped.]");
  });

  it("says plainly when no weekly check has run yet", () => {
    render(<LibraryStatus library={library({ ...OK, last_check_at: null, outcome: null, stale: true })} />);
    expect(screen.getByRole("note")).toHaveTextContent("[No weekly check has run yet.]");
  });

  it("renders nothing until the library answers", () => {
    const { container } = render(<LibraryStatus library={null} />);
    expect(container).toBeEmptyDOMElement();
  });
});
