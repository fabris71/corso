# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server (port 8080)
npm run build        # Production build
npm run build:dev    # Development build
npm run lint         # ESLint
npm run test         # Run unit tests once
npm run test:watch   # Run tests in watch mode
npm run preview      # Preview production build
```

## Architecture

**Portfolio/agency website** for Fabrizio Parodi (StudioAnd) built with React + TypeScript + Vite.

**Key stack**: React 18, React Router 6, Tailwind CSS, shadcn/ui (Radix UI), Framer Motion, TanStack Query.

**Base path**: `/studioand-lovable/` — configured in both `vite.config.ts` and `App.tsx` router.

**Routing** (`src/App.tsx`):
- `/` → Home (Hero + Services + Works grid)
- `/lavori` → Projects list with category filters
- `/lavori/:id` → Project detail
- `/chi-sono` → About
- `/contatti` → Contact
- `/cookie-policy` → Cookie policy

**Data**: Static project data lives in `src/data/projects.ts`. No backend — client-side only.

**Design system**: CSS variables for theming in `src/index.css`. Fonts: Space Grotesk (display) + DM Sans (body). Accent color: warm orange (HSL 12, 80%, 62%). Path alias `@` maps to `src/`.

**UI components**: `src/components/ui/` contains shadcn/ui components — prefer extending these over adding new UI libraries. New shadcn components are added via `npx shadcn@latest add <component>`.

**Testing**: Vitest + React Testing Library (unit), Playwright (E2E). Tests go in `src/**/*.{test,spec}.{ts,tsx}`.
