# AGENTS.md

## Overview

Frontend-only Next.js marketing website for **BYTEINFOMEDIA**. Light theme only. Static export to `out/`.

## Commands

- `npm run dev` — port 3000
- `npm run typecheck` — `tsc --noEmit`
- `npm run build` — static export

## Notes

- No ESLint config; use `npm run typecheck`.
- `output: "export"` in `next.config.ts` — `npm run start` does not serve the export; use `npm run dev` locally.
- Logo: `/public/byteinfomedia-logo.png`
- Do not add Industries, FAQ, Case Studies, Blog, or Careers pages unless requested.
