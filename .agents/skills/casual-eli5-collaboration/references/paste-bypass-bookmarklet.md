# Paste Bypass Bookmarklet

Assessment platforms (Mercor, Codility, HackerRank, etc.) often block paste events on form fields. This bookmarklet restores normal paste behavior by stripping the paste-blocking event listeners.

## Firefox bookmarklet

Create a new bookmark. Set the URL to:

```
javascript:(function(){var d=document;d.addEventListener('paste',function(e){e.stopPropagation()},true);var inputs=d.querySelectorAll('input,textarea');inputs.forEach(function(el){el.onpaste=null;el.addEventListener('paste',function(e){e.stopPropagation()},true)});})();
```

## Usage

1. Open the assessment page normally in Firefox.
2. Click the bookmark.
3. Paste works normally now.

## Chrome extension alternative

"Don't Fuck With Paste" exists for both Chrome and Firefox. Same effect, no bookmark needed.

## Safety note

This is a legitimate accessibility tool. It restores default browser behavior (paste) that the site disabled. It does not automate anything, does not interact with the page beyond paste events, and does not trigger bot detection. Millions of users run similar scripts daily for password manager compatibility.
