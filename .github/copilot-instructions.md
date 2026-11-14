# Copilot Instructions for `lukeponga-dev.github.io`

## Canonical implementation and sync rules
- Treat `/home/runner/work/lukeponga-dev.github.io/lukeponga-dev.github.io/index.html` as the primary static site entrypoint for portfolio content and behavior unless the task explicitly says otherwise.
- Keep `/home/runner/work/lukeponga-dev.github.io/lukeponga-dev.github.io/public/index.html` aligned when changing shared content, links, or inline interaction behavior.
- The two pages share `public/portfolio/styles.css`, `public/portfolio/app.js` and `public/portfolio/repos.json`. Only asset prefixes differ between them.

## Local run and verification
- Quick local run for the static site:
  - `python3 -m http.server 8000`
  - Open `http://localhost:8000`
- Alternative quick check:
  - Open `/home/runner/work/lukeponga-dev.github.io/lukeponga-dev.github.io/index.html` directly in a browser.
- There is currently no repository-defined automated lint/test command in this repo. Validate changes with focused manual checks.

## Manual smoke checks (run the smallest relevant check)
- Navigation anchors scroll to the intended section (`#work`, `#activity`, `#repos`, `#about`, `#contact`).
- Both `/` and `/public/` render the featured projects and the repository table (snapshot fallback works offline).
- Layout holds at mobile widths (860px and 560px breakpoints).
- External profile/contact links and `CV.pdf` still resolve correctly.

## Architecture overview
- **Root page** (GitHub Pages): `index.html`, loading `public/portfolio/*`.
- **Public mirror** (Vercel serves `public/` as the web root): `public/index.html`, loading `portfolio/*`.
- **Shared assets**: `public/portfolio/styles.css`, `public/portfolio/app.js` (browser-side GitHub API fetch with `repos.json` fallback).
- **CV**: `cv/cv.html` is the source for `CV.pdf` and `public/CV.pdf`.

## Project-specific editing conventions
- Before the first edit in any task, explicitly state which implementation surface is being changed (`index.html`, `public/index.html`, or `public/portfolio/*`) and whether counterpart files must also be updated for shared content/behavior changes.
- Before editing, identify whether the task targets the root page, the public mirror or the shared assets; the two pages do not auto-sync.
- For copy/content updates, preserve section IDs and anchor targets to avoid breaking navbar and smooth-scroll behavior.
- For UI behavior updates, check for duplicate implementations (both `index.html` files) and update all relevant locations intentionally.
- If a request is ambiguous (for example “fix” without context), ask for repro steps, expected behavior, and target page/path before making edits.
