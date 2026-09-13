# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

One-page site for Diogo Almeida's private maths tutoring (explicações de Matemática, 7º–12º ano, na Maia). Astro 5 static site with Tailwind CSS v4. Live at https://diogoexplicacoes.web.app (Firebase Hosting, project `diogoexplicacoes`); source at https://github.com/diogofca/SiteExplicacoes. No backend, no tests.

All user-facing copy is **Portuguese (pt-PT)** and deliberately minimal — the owner wants very little text, no self-promotion beyond one discreet line of grades, no exam-prep marketing, and no mention of lesson modality (say only "na Maia", never "presencial" or "online"). Keep it that way when editing.

## Commands

- `npm run dev` — dev server at http://localhost:4321
- `npm run build` — static build to `dist/`
- `npm run preview` — serve the built `dist/`
- `npm run deploy` — build + `firebase deploy --only hosting` (CLI is logged in; `.firebaserc` pins the project)

Typical change flow: edit → `npm run deploy` → `git commit` + `git push`.

## Architecture

- **`src/data/site.ts`** is the single source of content: name, e-mail (`diogoalmeidaexplicacoes@outlook.com`), city, grades, levels/prices (13 €/h 3º ciclo, 15 €/h secundário), steps and nav links. Change copy or prices here, not in components.
- **`src/pages/index.astro`** stacks the sections in order (Hero → Servicos → ComoFunciona → Precos → Contacto); each lives in `src/components/*.astro` and reads from `site.ts`.
- **`src/layouts/Base.astro`** owns `<head>` (SEO/OG meta, Google Fonts) and wraps content with `Header`/`Footer`.
- **`src/styles/global.css`** defines design tokens in a Tailwind `@theme` block (`brand` #5b4cff, `aqua` #16c6d9, `accent` #ffb020, `ink`, `paper`, `tint`; `font-display` Space Grotesk / `font-sans` Inter) and shared `@utility` classes (`container-site`, `section-title`, `section-kicker`, `btn-primary`, `btn-secondary`, `gradient-text`, `bg-grid`). Reuse these instead of re-declaring colors or button styles.
- Navigation is anchor-based (`#servicos`, `#precos`, `#contacto`); sections use `scroll-mt-20` to clear the sticky header. Contact is a `mailto:` link only.
- Only two client scripts exist, inline in `Header.astro` (mobile menu) and `Contacto.astro` (copy e-mail button).

## Firebase

`firebase.json` serves `dist/` with `cleanUrls` and long-cache headers for `/_astro/**`. `.firebaserc` holds the project id.

## Print materials

`materiais/flyer/` holds the source of the A6 mailbox flyer (Claude Design artboard + QR code). It shares the site's identity (∑ logo, brand colors, fonts) and the same content rules: no prices, no modality, no exam marketing. When the e-mail or site URL changes, update `Main.dc.html` there too (the QR encodes the site URL).
