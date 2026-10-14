# Aditya Naulakha — Portfolio

Personal site for Aditya Naulakha. Narrow column, neutral palette, and Hanken Grotesk. Built with React 19, Vite 7, and Tailwind CSS 4.

## Pages

| Route | Contents |
| --- | --- |
| `/` | Identity, bio, currently, education, experience, projects, achievements, stack, resume, contact |
| `/work` | Every role with technologies, what I did, and certificate / project links |
| `/projects` | Each project with image, description, stack, and live link |
| `/achievements` | Competitions, leadership, and certifications |

## Design

- **Type**: Hanken Grotesk (UI). Weights 400 body, 500 nav, 600 labels, 700 headings. Body 16px / 24px, letter-spacing normal. Geist Mono for the command shortcut.
- **Color**: light `#f9f9f9` / `#100f0f`, secondary text `#909092`, muted `#737373`, border `#e5e5e5`. Dark `#100f0f` / `#fafafa`.
- **Layout**: `max-w-2xl` column, sticky 56px nav, inset cards, outline buttons.
- **Motion**: 20px fade-up on scroll, sibling blur on project hover, theme toggle. Honors `prefers-reduced-motion`.

## Development

```bash
npm install
npm run dev       # start dev server
npm run build     # production build to dist/
npm run preview   # preview the build
npm run lint      # eslint
```

## Vercel

Standalone Vite project.

| | |
| --- | --- |
| Framework | Vite |
| Build command | `npm run build` |
| Output directory | `dist` |

`vercel.json` rewrites every path to `index.html` so routes such as `/work` resolve on refresh.
