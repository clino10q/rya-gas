# RYA Energy — Website

A 6-page React (Vite) marketing site for RYA, built with React Router and Tailwind (via CDN).

## Pages
- **Home** — hero, live-style fuel price ticker, services grid, infrastructure spotlight, CTA
- **About** — company story, values, video, recognition, leadership team, community/CSR
- **Services** — retail fuel, LPG/CNG, lube oils, bulk storage, shipping & haulage, RYA Mart
- **Locations** — filterable station finder by city
- **Careers** — perks + open roles list
- **Contact** — working client-side contact form + office details

## Run it locally
```bash
npm install
npm run dev
```
Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production
```bash
npm run build
```
Output goes to `dist/` — deploy that folder to any static host (Netlify, Vercel, GitHub Pages, S3, etc.).

## Notes
- All content (team bios, station addresses, phone numbers, prices) is placeholder copy written for this
  project — swap in real details before going live.
- One of the originally uploaded headshots (a close-up that closely resembled a real, identifiable public
  figure) was intentionally left out of the team section and isn't included in `public/images`.
- Fuel prices in the ticker are static placeholders — wire them to a real data source if you want live pricing.
