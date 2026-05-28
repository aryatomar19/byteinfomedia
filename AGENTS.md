# AGENTS.md

## Cursor Cloud specific instructions

### Overview

This is a **frontend-only Next.js marketing website** (ByteInfomedia). No backend, database, or Docker is required. All content is static and CRM integration is optional (falls back to `localStorage`).

### Development commands

See `package.json` scripts and `README.md` for standard commands:

- **Dev server:** `npm run dev` (runs on port 3000)
- **Type check / lint:** `npm run typecheck`
- **Production build:** `npm run build` (static export to `out/`)

### Notes

- There is no ESLint config in this repo; `npm run typecheck` (`tsc --noEmit`) is the only static analysis check.
- The project uses `output: "export"` in `next.config.ts`, so `npm run start` will **not** work after `npm run build` — it only works with `npm run dev` for local development.
- CRM env vars (`.env.example`) are optional. Without them, the lead form writes to `localStorage` instead.
- Node.js v22+ and npm are the expected runtime; `package-lock.json` is the lockfile.
