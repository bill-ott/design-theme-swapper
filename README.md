# Design Theme Swapper

A static site that swaps between distinct design aesthetics via a single data-theme attribute.

**[Live demo →](#)** https://design-theme-swapper.netlify.app/

## What it is
 
A single-page site built to demonstrate range across six web design eras, switched live in the browser with no page reload. Each theme is a fully separate visual language — color, shape, depth, type, motion — all scoped through one HTML attribute.
 
## Themes
 
- **Default** — saturated primaries, pill shapes, staggered type, soft layered shadows
- **Frutiger Aero** — glossy, glass, chrome-and-sky-blue mid-2000s optimism
- **Skeuomorphism** — real-world texture and depth cues
- **Brutalism** — raw, unstyled, high-contrast
- **Early Web** — Geocities-era vibe
- **8-bit** — pixel-grid, limited palette, retro game UI
## Tech stack
 
Plain HTML, CSS, and JavaScript (no framework, no build step).
 
## How it works
 
All theme stylesheets load simultaneously, scoped under `[data-theme="x"]` selectors on `<html>`. A shared `base.css` defines theme-agnostic structural tokens (spacing, scale, layout); each theme file supplies its own values for a common CSS variable contract. JavaScript swaps the `data-theme` attribute on click and re-renders per-theme content (copy, features, resources) via a `themeContent` data object.
 
## Local setup
 
```bash
git clone <repo-url>
cd design-theme-swapper
npx serve
```
 
Or open with Live Server in VS Code.
