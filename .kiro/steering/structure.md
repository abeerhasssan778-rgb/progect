# Project Structure

```
/
├── index.html          # App entry point — mounts #app div, loads src/main.ts
├── src/
│   ├── main.ts         # Main entry — renders HTML into #app, wires up components
│   ├── counter.ts      # Example component module (vanilla TS, no framework)
│   └── style.css       # Global styles — CSS custom properties, dark mode via prefers-color-scheme
├── public/
│   ├── favicon.svg
│   └── icons.svg       # SVG sprite sheet for UI icons
└── src/assets/         # Static assets imported directly in TS (images, SVGs)
```

## Conventions
- Source files live in `src/`, imported via `/src/main.ts` in `index.html`
- Assets referenced in TS are placed in `src/assets/`; static public assets go in `public/`
- Component logic is exported as `setup*` functions that accept DOM elements (see `counter.ts`)
- CSS uses custom properties (`--var-name`) for theming; dark mode is handled via `@media (prefers-color-scheme: dark)`
- No framework — DOM manipulation is done directly via `document.querySelector`
