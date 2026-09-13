# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

One-page site for Diogo Almeida's private maths tutoring (explicações de Matemática, 7º–12º ano, presencial na Maia). Astro 5 static site with Tailwind CSS v4, hosted on Firebase Hosting. No backend, no tests.

All user-facing copy is **Portuguese (pt-PT)** and deliberately minimal — the owner wants very little text, no self-promotion (no "about me", grades, or exam-prep marketing), and no mention of online lessons. Keep it that way when editing.

## Commands

- `npm run dev` — dev server at http://localhost:4321
- `npm run build` — static build to `dist/`
- `npm run preview` — serve the built `dist/`
- `npm run deploy` — build + `firebase deploy --only hosting` (needs `firebase login` and `firebase use --add` once to create `.firebaserc`)

## Architecture

- **`src/data/site.ts`** is the single source of content: name, e-mail, city, levels/prices, steps and nav links. Change copy or prices here, not in components. Prices live here too (`preco`, in €/hour).
- **`src/pages/index.astro`** stacks the sections in order (Hero → Servicos → ComoFunciona → Precos → Contacto); each lives in `src/components/*.astro` and reads from `site.ts`.
- **`src/layouts/Base.astro`** owns `<head>` (SEO/OG meta, Google Fonts) and wraps content with `Header`/`Footer`.
- **`src/styles/global.css`** defines design tokens in a Tailwind `@theme` block (`brand`, `aqua`, `accent`, `ink`, `paper`, `tint`; `font-display`/`font-sans`) and shared `@utility` classes (`container-site`, `section-title`, `section-kicker`, `btn-primary`, `btn-secondary`, `gradient-text`, `bg-grid`). Reuse these instead of re-declaring colors or button styles.
- Navigation is anchor-based (`#servicos`, `#precos`, `#contacto`); sections use `scroll-mt-20` to clear the sticky header. Contact is a `mailto:` link only.
- Only two client scripts exist, inline in `Header.astro` (mobile menu) and `Contacto.astro` (copy e-mail button).

## Firebase

`firebase.json` serves `dist/` with `cleanUrls` and long-cache headers for `/_astro/**`. `.firebaserc` (created by `firebase use --add`) holds the project id.
