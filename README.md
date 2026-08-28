# Virat Ramnivas — Premium Marketing Website

Production-ready Next.js marketing site for **Virat Ramnivas** by Virat Constructions.

## Getting Started

```bash
npm install
cp .env.local.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp Business number for wa.me links (no + or spaces). **Confirm before going live.** | `8886555200` |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL for SEO | `https://www.theviratgroup.com` |

## Scripts

- `npm run dev` — Development server
- `npm run build` — Production build
- `npm run start` — Start production server
- `npm run lint` — ESLint
- `npm run test` / `npm run test:smoke` — Pre-deploy smoke tests (server must be running)
- `npm run test:deploy` — Build + lint + smoke test

See [DEPLOYMENT.md](./DEPLOYMENT.md) for the full deployment checklist.

## Project Structure

```
app/                    # Pages & API routes
components/             # UI components
lib/data.ts             # Single source of truth for business data
lib/leads.ts            # JSON file lead storage (MVP)
lib/whatsapp.ts         # wa.me link builder
public/images/          # Floor plans, elevation, gallery
types/                  # TypeScript types
data/leads.json         # Stored enquiries (gitignored)
```

## Placeholders to Update

- **RERA number** — Update in `lib/data.ts`
- **WhatsApp Business number** — Confirm `NEXT_PUBLIC_WHATSAPP_NUMBER`
- **Landmarks** — Refine in `lib/data.ts` if needed
- **Google Maps embed** — Verify pin location for Ram Nagar Colony, Temple Alwal

## WhatsApp Flow

Enquiry form validates → POST `/api/enquiry` → lead saved to `data/leads.json` → success toast → wa.me opens with prefilled message. User must tap Send (wa.me limitation). TODO: WhatsApp Business API for automated notifications.
