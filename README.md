# patchworklabs.org

The website for [Patchwork Labs](https://patchworklabs.org), a 501(c)(3) nonprofit community of makers.

Built with Next.js (App Router), Tailwind CSS 4, and TypeScript.

## Development

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `src/app/page.tsx` — home page
- `src/app/ganymede/page.tsx` — Project Ganymede
- `src/app/team/page.tsx` — team bios (photos live in `public/team/`)
- `src/lib/site.ts` — shared links and contact addresses
- `src/app/globals.css` — palette (derived from the logo) and stitch/patch styles

## Deploy

```bash
bun run build
```

Static output; deploys anywhere Next.js runs (e.g. Vercel).
