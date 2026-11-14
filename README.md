# Luke Ponga — Portfolio

I build reliable, deterministic systems — from fleet backends in .NET to AI-assisted applications powered by Gemini. Based in Hamilton, New Zealand.

- **GitHub Pages:** https://lukeponga-dev.github.io (serves the root `index.html`; deployed by `.github/workflows/pages.yml` on every push to `main`)
- **Vercel:** https://lukeponga-dev-github-io.vercel.app (serves `public/`)

## Structure

```
index.html              # Portfolio page (GitHub Pages)
public/
  index.html            # Same page with public-relative paths (Vercel)
  portfolio/
    styles.css          # Shared styles
    app.js              # Featured projects, activity and repo browser
    repos.json          # Committed GitHub snapshot, used when the live API is unavailable
  CV.pdf, favicon/      # Copies served by Vercel
cv/cv.html              # Source for CV.pdf
CV.pdf                  # Downloadable CV
assests/                # Favicons, certificates and images
```

The two `index.html` files differ only in asset prefixes (`public/portfolio/` and `assests/favicon/` at the root, `portfolio/` and `favicon/` in `public/`). Keep them in sync.

`app.js` loads public, non-fork repositories from the GitHub API in the visitor's browser and falls back to `repos.json`.

## Local development

```bash
python3 -m http.server 8000
# http://localhost:8000/ and http://localhost:8000/public/
```

## Regenerating the CV

```bash
google-chrome --headless=new --no-pdf-header-footer --virtual-time-budget=10000 --print-to-pdf=CV.pdf cv/cv.html
cp CV.pdf public/CV.pdf
```

## Contact

- Email: lukeponga9@gmail.com
- GitHub: [@lukeponga-dev](https://github.com/lukeponga-dev)
- LinkedIn: [lukeponga](https://www.linkedin.com/in/lukeponga/)

Licensed under the MIT License.
