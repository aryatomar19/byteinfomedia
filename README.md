# ByteInfomedia Premium Frontend

A frontend-only, enterprise-grade Next.js website for ByteInfomedia focused on AWS cloud consulting, DevOps automation, cybersecurity, managed cloud services, and lead generation.

## Tech stack

- Next.js App Router with static export
- React + TypeScript
- Tailwind CSS
- Framer Motion
- Frontend-only CRM-ready forms for HubSpot, Zoho, or Salesforce

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The app uses `output: "export"`, so the static site is generated in `out/` and can be uploaded directly to AWS S3 behind CloudFront.

## CRM configuration

Copy `.env.example` to `.env` and configure one provider:

- HubSpot: `NEXT_PUBLIC_HUBSPOT_PORTAL_ID`, `NEXT_PUBLIC_HUBSPOT_FORM_ID`
- Zoho: `NEXT_PUBLIC_ZOHO_WEBFORM_URL`
- Salesforce: `NEXT_PUBLIC_SALESFORCE_WEB_TO_LEAD_URL`, `NEXT_PUBLIC_SALESFORCE_ORG_ID`

No custom backend is required.
