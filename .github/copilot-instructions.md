# Copilot Instructions for `lukeponga-dev.github.io`

## Canonical implementation and sync rules
- Treat `/home/runner/work/lukeponga-dev.github.io/lukeponga-dev.github.io/index.html` as the primary static site entrypoint for portfolio content and behavior unless the task explicitly says otherwise.
- Keep `/home/runner/work/lukeponga-dev.github.io/lukeponga-dev.github.io/public/index.html` aligned when changing shared content, links, or inline interaction behavior.
- This repo also contains a Next.js-style structure in `app/` and `components/`. If a task targets that path, keep section copy and key links consistent with the static pages unless divergence is requested.

## Local run and verification
- Quick local run for the static site:
  - `python3 -m http.server 8000`
  - Open `http://localhost:8000`
- Alternative quick check:
  - Open `/home/runner/work/lukeponga-dev.github.io/lukeponga-dev.github.io/index.html` directly in a browser.
- There is currently no repository-defined automated lint/test command in this repo. Validate changes with focused manual checks.

## Manual smoke checks (run the smallest relevant check)
- Navigation anchors scroll to the intended section (`About`, `Skills`, `Projects`, `Connect/Contact`).
- Mobile menu button opens/closes and collapses after selecting a link.
- Back-to-top button appears after scrolling and returns to top smoothly.
- External profile/contact links still resolve correctly.

## Architecture overview
- **Static portfolio implementation** (main): root `index.html` with inline interaction scripts and Tailwind CDN classes.
- **Mirrored static variant**: `public/index.html` plus `public/styles.css` and `public/script.js`.
- **Additional JS/CSS assets**: `js/script.js` and `css/styles.css` exist and may contain overlapping behavior/styles with inline page logic.
- **Next.js-style implementation**: `app/layout.tsx`, `app/page.tsx`, and section components in `components/` (Navbar, Hero, About, Skills, Projects, Connect, Footer).

## Project-specific editing conventions
- Before editing, identify whether the task targets static HTML, mirrored public files, or Next.js component files; do not assume they auto-sync.
- For copy/content updates, preserve section IDs and anchor targets to avoid breaking navbar and smooth-scroll behavior.
- For UI behavior updates, check for duplicate implementations (inline script in HTML and standalone JS files) and update all relevant locations intentionally.
- If a request is ambiguous (for example “fix” without context), ask for repro steps, expected behavior, and target page/path before making edits.
