# Schema del Progetto — StudioAnd Portfolio

## Panoramica

Sito portfolio/agenzia per **Fabrizio Parodi (StudioAnd)**. Frontend React puro, nessun backend — i dati dei progetti sono statici nel codice.

---

## Struttura delle cartelle

```
corso/
├── public/                  # Asset statici (favicon, logo, placeholder)
├── src/
│   ├── main.tsx             # Entry point React
│   ├── App.tsx              # Router + provider globali
│   ├── index.css            # Variabili CSS del tema (colori, font, radius)
│   │
│   ├── pages/               # Una pagina per ogni route
│   │   ├── Index.tsx        # Home
│   │   ├── Lavori.tsx       # Lista progetti
│   │   ├── ProgettoDetail.tsx  # Dettaglio singolo progetto
│   │   ├── ChiSono.tsx      # About
│   │   ├── Contatti.tsx     # Contatti
│   │   ├── CookiePolicy.tsx # Cookie policy
│   │   └── NotFound.tsx     # 404
│   │
│   ├── components/          # Componenti riutilizzabili
│   │   ├── Header.tsx       # Navbar
│   │   ├── Footer.tsx       # Footer
│   │   ├── Hero.tsx         # Sezione hero (home)
│   │   ├── ServicesSection.tsx  # Sezione servizi (home)
│   │   ├── WorksGrid.tsx    # Griglia progetti (home + /lavori)
│   │   ├── NavLink.tsx      # Link di navigazione con stato attivo
│   │   ├── ScrollToTop.tsx  # Reset scroll al cambio route
│   │   ├── CookieBanner.tsx # Banner cookie consent
│   │   └── ui/              # Componenti shadcn/ui (Radix UI + Tailwind)
│   │
│   ├── data/
│   │   └── projects.ts      # Dati statici di tutti i progetti + interfaccia Project
│   │
│   ├── hooks/
│   │   ├── use-mobile.tsx   # Breakpoint mobile (768px)
│   │   └── use-toast.ts     # Hook toast notifications
│   │
│   └── lib/
│       └── utils.ts         # cn() per classi Tailwind condizionali
│
├── vite.config.ts           # Build config (base: /studioand-lovable/, porta 8080)
├── tailwind.config.ts       # Tema (font, colori via CSS vars, animazioni)
├── components.json          # Config shadcn/ui
└── tsconfig.json            # TypeScript config
```

---

## Routing

Configurato in `App.tsx` con base path `/studioand-lovable/`.

| Route | Pagina | Descrizione |
|-------|--------|-------------|
| `/` | `Index.tsx` | Header + Hero + Servizi + 4 progetti in evidenza + Footer |
| `/lavori` | `Lavori.tsx` | Griglia completa con filtri per categoria |
| `/lavori/:id` | `ProgettoDetail.tsx` | Dettaglio progetto (immagine, sezioni, gallery, link) |
| `/chi-sono` | `ChiSono.tsx` | Pagina about |
| `/contatti` | `Contatti.tsx` | Form di contatto |
| `/cookie-policy` | `CookiePolicy.tsx` | Policy cookie |
| `*` | `NotFound.tsx` | Pagina 404 |

---

## Modello dati — `Project`

Definito in `src/data/projects.ts`:

```typescript
interface Project {
  id: string;           // slug usato nell'URL (/lavori/:id)
  title: string;
  category: string;     // "App Design" | "Website" | "Logo Rebranding"
  description: string;  // Breve descrizione per la card
  image: string;        // URL immagine copertina
  client?: string;
  date?: string;
  links?: {
    label: string;      // Es. "Google Play", "Sito web"
    url: string;
  }[];
  sections?: {          // Paragrafi del dettaglio progetto
    title: string;
    text: string;
  }[];
  gallery?: string[];   // URL immagini galleria
}
```

Per aggiungere un progetto basta aggiungere un oggetto all'array `projects` in questo file.

---

## Componente chiave — `WorksGrid`

Usato sia nella home che in `/lavori`, con prop diverse:

| Prop | Tipo | Default | Uso |
|------|------|---------|-----|
| `limit` | number | — | Home: mostra solo 4 progetti |
| `showHeader` | boolean | `true` | Home: mostra titolo sezione |
| `showFilters` | boolean | `false` | `/lavori`: mostra filtri categoria |

Le categorie dei filtri vengono derivate dinamicamente dall'array `projects`.

---

## Design System

- **Font**: Space Grotesk (`font-display`) + DM Sans (body) — Google Fonts
- **Colore accent**: arancione caldo `HSL(12, 80%, 62%)`
- **Tema**: variabili CSS in `src/index.css`, dark mode supportata via classe
- **Componenti UI**: shadcn/ui in `src/components/ui/` — aggiungere nuovi con `npx shadcn@latest add <nome>`
- **Animazioni**: Framer Motion su tutti i componenti principali (fade-up, slide-in)

---

## Stack tecnico

| Categoria | Libreria |
|-----------|----------|
| Framework | React 18 + TypeScript |
| Build | Vite 5 |
| Routing | React Router 6 |
| Stile | Tailwind CSS 3 |
| UI Components | shadcn/ui (Radix UI) |
| Animazioni | Framer Motion |
| Data fetching | TanStack Query (configurato, non ancora usato per API) |
| Form | React Hook Form + Zod |
| Test (unit) | Vitest + React Testing Library |
| Test (e2e) | Playwright |
