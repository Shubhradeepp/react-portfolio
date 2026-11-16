# Shubhradeep Maity: Portfolio

React + Vite portfolio in a retro editorial style: cream paper, print inks, thick borders and a bold typewriter monospace. Light (default) and dark themes, fully responsive, accessible, and SEO-ready.

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the production build locally
```

## Update your content (no component edits needed)

| What                          | File                       |
| ----------------------------- | -------------------------- |
| Name, email, links, stats     | `src/data/profile.json`    |
| Skills (set `core: true` to highlight) | `src/data/skills.json` |
| Jobs and bullet points        | `src/data/history.json`    |
| Projects and filters          | `src/data/projects.json`   |
| About-page photo gallery (dummy for now) | `src/data/gallery.json` + `public/assets/gallery/` |
| Resume PDF                    | `public/Shubhradeep_Maity_Resume.pdf` (replace, keep the name) |

Project categories used by the filter: `Backend`, `AI`, `Full stack`, `Mobile`.
If a project has no `demo` or `source` link, the button is simply not shown.

## SEO checklist

- `index.html` holds the title, description, canonical URL, Open Graph, Twitter card and JSON-LD (Person + WebSite). Static tags are better for crawlers than `react-helmet`, which was removed.
- `public/robots.txt`, `public/sitemap.xml`, `public/site.webmanifest` and `public/og-image.png` (1200x630 link preview) are included.
- If your domain changes, search for `shubhradeep-maity-dev-portfolio.vercel.app` and replace it in `index.html`, `public/robots.txt`, `public/sitemap.xml` and `src/utils.js`.
- After deploying, submit the sitemap in Google Search Console.

## Structure

```
src/
  components/   Navbar, Hero (+PaymentFlow), About, Skills, Experience, Projects, Contact, ui/
  hooks/        useTheme, useScrollSpy, usePrefersReducedMotion
  data/         all content as JSON
  index.css     design tokens (colours, fonts) for both themes + shared styles
public/         images (webp), icons, résumé, robots, sitemap, manifest
```

Colours and fonts are CSS variables at the top of `src/index.css`.

## Retro design notes

- **Font:** Courier Prime (bold) and Space Mono (bold) via `@fontsource`. Unicode "Mathematical Monospace" characters were not used on purpose: screen readers spell them out, search engines can't index them, and they can't wrap or be selected like normal text. Change fonts in `src/index.css` (`--font-display`, `--font-body`, `--font-accent`).
- **Colours:** all in `:root` in `src/index.css` (`--paper`, `--ink`, `--orange`, `--red`, `--mustard`, `--olive`, `--teal`).
- **Dummy images to replace:** `public/assets/projects/placeholder-*.svg` (4 work projects) and `public/assets/gallery/photo-*.svg`. Keep the same file name, or change the path in the JSON files. Use 16:10 for project covers and 4:5 for gallery photos.
- Run `npm install` after pulling this version (fonts changed).
