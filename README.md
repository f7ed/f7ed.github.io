# Fengrun Liu — personal website

Minimal academic homepage built with Astro.

## Local development

```bash
npm install
npm run dev
```

## Publications

Edit `src/data/publications.ts`. Publication entries can include PDF, ePrint,
code, BibTeX, project links, and an expandable abstract.

## Blog

The technical blog lives separately at:

https://f7ed.github.io/blog/

## Design

The visual direction is inspired by Giacomo Fenzi's personal website
(https://gfenzi.io/). The implementation in this repository is independent.

## Publishing

GitHub Actions builds and publishes the site when changes reach `master`.
In the repository Settings > Pages, set Source to GitHub Actions.
The live site is https://f7ed.github.io/.

The previous root site is saved on `legacy-site-2026-09`.
The separate blog repository is not changed by this deployment.
