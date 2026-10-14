# Aditya Naulakha — Portfolio

A typography-led, editorial personal site. Light by default with a dark toggle, a narrow single column, and no WebGL. Built with React 19, Vite 7, Tailwind CSS 4, and `motion`.

Live at [adityanaulakha.tech](https://www.adityanaulakha.tech).

## Pages

| Route | Contents |
| --- | --- |
| `/` | Identity, bio, "Currently" status, condensed Experience / Projects / Achievements, grouped Stack, links, quote |
| `/work` | Every role with tech chips, bullet points, and certificate / project links |
| `/projects` | Each project with thumbnail, description, stack, source and live links |
| `/achievements` | Full ledger of competitions, leadership, and teaching |

## Design

- **Type**: Fraunces (display), Geist (body), Geist Mono (meta: dates, locations, section indices)
- **Theme**: CSS variables on `<html data-theme>`, persisted in `localStorage`, applied before first paint by an inline script in `index.html`
- **Motion**: fade-up stagger on page mount and sliding underlines only; respects `prefers-reduced-motion`

## Editing content

All copy lives in `src/data/`:

| File | What it holds |
| --- | --- |
| `profile.js` | Name, role, bio, email, resume URL, socials, "Currently" items, quote |
| `experience.js` | Roles with `tech`, `bullets`, and `links` |
| `projects.js` | Projects with `metric`, `description`, `tech`, `github`, `live` |
| `achievements.js` | Achievements with `year`, `category`, `link` |
| `stack.js` | Grouped tool list |

## Development

```bash
npm install
npm run dev       # start dev server
npm run build     # production build to dist/
npm run preview   # preview the build
npm run lint      # eslint
```

## Structure

```
src/
├── components/   SiteNav, Footer, ThemeToggle, Section, rows, chips, PageTransition
├── data/         all content
├── hooks/        useTheme, useDocumentTitle
├── pages/        Home, Work, Projects, Achievements, NotFound
├── assets/       downscaled images
├── App.jsx       layout + routes
└── index.css     theme tokens, dark variant, base styles
```

## Deployment

Deployed on Vercel. `vercel.json` rewrites every path to `index.html` so deep links such as `/work` resolve on refresh.
