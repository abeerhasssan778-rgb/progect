# Design Document: Minimalist Portfolio — Abeer Hassan

## Architecture

Vanilla TypeScript + Vite SPA. No framework. DOM manipulation via `document.querySelector`. Modules per section, mounted from `src/main.ts`.

## File Structure

```
src/
├── main.ts              # Entry — mounts all sections, initialises scroll observer
├── style.css            # Global CSS custom properties, resets, typography
├── components/
│   ├── nav.ts           # Navigation component
│   ├── hero.ts          # Hero section
│   ├── projects.ts      # Projects section
│   ├── skills.ts        # Skills section
│   └── contact.ts       # Contact section + form validation
└── data/
    ├── projects.ts      # Project data array
    └── skills.ts        # Skills data array
```

## Design Tokens (CSS Custom Properties)

```css
/* Dark (default) */
--bg: #0a0a0a
--bg-surface: #111111
--text: #a1a1aa
--text-heading: #fafafa
--border: #27272a
--accent: #e4e4e7
--accent-muted: rgba(228,228,231,0.08)

/* Light (prefers-color-scheme: light) */
--bg: #fafafa
--bg-surface: #f4f4f5
--text: #52525b
--text-heading: #09090b
--border: #e4e4e7
--accent: #18181b
--accent-muted: rgba(24,24,27,0.06)
```

## Components

### Navigation
- Fixed top bar, `backdrop-filter: blur` on scroll
- Logo: "AH" monogram left, nav links right
- Mobile: hamburger toggle, full-screen overlay menu

### Hero
- Full viewport height, vertically centered
- Large name heading + subtitle + CTA button
- Entrance animation: fade + translateY on load

### Projects
- CSS Grid, 1–3 columns responsive
- Card: title, description, tech tags, arrow link
- Hover: subtle border-color transition
- Scroll-triggered stagger animation via IntersectionObserver

### Skills
- Grouped by category (Frontend, UI/UX, Tools)
- Minimal pill badges
- Scroll-triggered fade-in

### Contact
- Email mailto link + GitHub + LinkedIn icons
- Simple form: name, email, message
- Client-side validation, inline error messages
- Success state on valid submit

## Scroll Animations

Use a single `IntersectionObserver` in `main.ts`. Elements with `data-animate` get class `is-visible` when they enter the viewport. CSS handles the transition (opacity + translateY).

## Correctness Properties

1. Navigation links SHALL always resolve to an existing section `id` on the page
2. Contact form SHALL NOT submit when any required field is empty or email is invalid
3. All project card links SHALL have `target="_blank"` and `rel="noopener noreferrer"`
4. Theme tokens SHALL be defined as CSS custom properties — no hardcoded color values in component styles
