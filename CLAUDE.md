# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

One-page marketing site for Diogo Almeida's private maths tutoring business (explicações de Matemática, 7º–12º ano, Porto + online). Astro 5 static site with Tailwind CSS v4. No backend, no tests.

All user-facing copy is **Portuguese (pt-PT)** — keep new content in pt-PT, not pt-BR or English.

## Commands

- `npm run dev` — dev server at http://localhost:4321
- `npm run build` — static build to `dist/`
- `npm run preview` — serve the built `dist/`

## Architecture

- **`src/data/site.ts`** is the single source of content: name, e-mail, levels/prices, modalities, steps, FAQ and nav links. Change copy or prices here, not in components. Prices are currently `'XX'` placeholders marked with `// TODO`.
- **`src/pages/index.astro`** just stacks the section components in order; each section lives in `src/components/*.astro` and reads from `site.ts`.
- **`src/layouts/Base.astro`** owns `<head>` (SEO/OG meta, Google Fonts) and wraps content with `Header`/`Footer`.
- **`src/styles/global.css`** defines the design tokens in a Tailwind `@theme` block (`brand`, `aqua`, `accent`, `ink`, `paper`, `tint` colors; `font-display`/`font-sans`) and shared `@utility` classes (`container-site`, `section-title`, `section-kicker`, `btn-primary`, `btn-secondary`, `gradient-text`, `bg-grid`). Reuse these instead of re-declaring colors or button styles.
- Navigation is anchor-based (`#sobre`, `#servicos`, `#precos`, `#faq`, `#contacto`); sections use `scroll-mt-20` to clear the sticky header. Contact is a `mailto:` link only (no form).
- Only two client scripts exist, inline in `Header.astro` (mobile menu) and `Contacto.astro` (copy e-mail button).
