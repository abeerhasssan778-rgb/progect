# Tech Stack

## Core
- **Language**: TypeScript ~6.0 (strict-ish config, ES2023 target)
- **Bundler**: Vite ^8
- **Runtime**: Browser (no Node runtime code in `src/`)
- **Module system**: ESM (`"type": "module"`)

## TypeScript Config Highlights
- `moduleResolution: bundler` — import `.ts` extensions directly
- `verbatimModuleSyntax: true` — use `import type` for type-only imports
- `noEmit: true` — Vite handles emit, `tsc` is type-check only
- Strict unused locals/parameters enforced (`noUnusedLocals`, `noUnusedParameters`)
- `erasableSyntaxOnly: true` — avoid non-erasable TS syntax (enums, namespaces)

## Common Commands

```bash
npm run dev       # Start dev server with HMR
npm run build     # Type-check (tsc) then bundle (vite build)
npm run preview   # Preview production build locally
```
