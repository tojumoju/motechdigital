# Motech Digital asset and brand refresh

- Images optimized: large images converted to WebP (max 1600px, ceo 1200px) in `img/optimized/`; unused originals removed (they remain in your source zips).
- Where a supplied asset matched a filename already used in `img/originals/`, the supplied version now takes precedence.
- Updated the shared CSS theme to use a coordinated orange, red, and purple gradient rather than orange-only/red-only accents.
- Updated browser theme-color metadata to the purple brand accent.
- Existing page structure and asset references were preserved to avoid breaking working pages.

The supplied assets are available at `img/assets/`. Use the exact filenames, including spaces, when referencing them.

## Project image fix
- Replaced every generated placeholder project image with a real one.
- Websites, Black Friday and admin portal screenshots now use the optimised `.webp` files in `img/projects/` (from the Black Friday package).
- Other website, UI/UX and social images use the original URLs from the old site (`toritsejumoju.github.io/webmockups`, `/img/uidesign`, `mojutoju.github.io/img/socialmedia`).
- Chop Big now uses the original `img/assets/1.jpg`, and the wrong stand-in images for Betawaka and Yolk Count were replaced.
- Removed the unused placeholder SVGs from `img/generated/`.
- Index landing banner copied from the old site: `bg.jpg` background with 40% overlay, original headline, gradient quote button and "Loved by our Clients" icon (`img/optimized/hero-bg.webp`, `bannericon.webp`).
