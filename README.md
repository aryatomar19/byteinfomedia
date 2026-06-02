# BYTEINFOMEDIA Premium Website

A production-ready, light-theme enterprise consulting website for BYTEINFOMEDIA — AWS cloud, DevOps, cybersecurity, managed services, and generative AI.

## Pages

- Home
- About Us
- Cloud Services
- Managed Services
- Cyber Security
- Generative AI

## Tech stack

- Next.js (App Router, static export)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React
- ShadCN-style UI primitives (`components/ui`)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run typecheck
npm run build
```

Static output is written to `out/` for S3 + CloudFront deployment.

## Project structure

```
app/                  # Routes (static pages)
components/
  layout/             # Header, footer, page shell
  sections/           # Homepage & service page sections
  pages/              # Page compositions
  forms/              # Assessment lead form
  ui/                 # Button, card primitives
data/                 # Content for all pages
public/               # Logo and SVG illustrations
```

## Assessment form

Submissions are stored in `localStorage` when no CRM env vars are configured. Extend `AssessmentForm` to connect HubSpot, Zoho, or Salesforce as needed.
