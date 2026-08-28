# Deployment Checklist — Virat Ramnivas

## Pre-deploy verification (run locally)

```powershell
cd D:\vdesigns\v1
npm run build
npm run start          # in one terminal (port 3000)
npm run test:smoke     # in another terminal
```

Or run the full pipeline:

```powershell
npm run test:deploy
```

Note: `test:deploy` runs smoke tests against `http://localhost:3000`. Start the server first, or pass a URL:

```powershell
node scripts/smoke-test.mjs http://localhost:3002
```

## Vercel deployment

1. Push the repo to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Set environment variables:

| Variable | Value |
|----------|-------|
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | `8886555200` (confirm before launch) |
| `NEXT_PUBLIC_SITE_URL` | Your production URL, e.g. `https://virat-ramnivas.vercel.app` |

4. Deploy — no extra build settings needed (Next.js auto-detected)

## Post-deploy checks

- [ ] All 7 pages load with styling (not plain HTML)
- [ ] Contact form submits and opens WhatsApp
- [ ] Floating WhatsApp button works
- [ ] Floor plan images display on `/floor-plans`
- [ ] Google Map shows pin on `/location`
- [ ] Mobile layout looks correct (360px+)

## Before going live — update placeholders

| Item | File | Action |
|------|------|--------|
| RERA number | `lib/data.ts` | Replace `"RERA No. — To be updated"` |
| WhatsApp number | Vercel env + `.env.local` | Confirm business number |
| Map pin | `lib/data.ts` → `LOCATION_COORDS` | Verify exact building GPS |
| Site URL | `NEXT_PUBLIC_SITE_URL` | Set to final domain |

## Lead storage on Vercel

Enquiries are logged to Vercel function logs and temporarily stored in `/tmp` on serverless.
For persistent lead storage, upgrade to Resend email, Supabase, or WhatsApp Business API (see TODO in `lib/leads.ts`).

## Troubleshooting

**Unstyled page / 404 on CSS chunks:**
```powershell
Remove-Item -Recurse -Force .next
npm run build
npm run dev
```

**Port in use:** Stop other Next.js processes or use `npx next start -p 3002`
