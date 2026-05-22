# Mohamed Afkir — Portfolio

A single-page personal portfolio for **Mohamed Afkir**, Web Designer &
Ecommerce Developer. Dark, premium, editorial — built to feel intentional.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** — custom dark palette + warm-gold accent
- **Framer Motion** — load sequence, scroll reveals, magnetic buttons
- **GSAP + ScrollTrigger** — image parallax in the Work grid
- **Lenis** — smooth scroll
- Fonts via `next/font`: Instrument Serif (display), Inter (body),
  JetBrains Mono (labels)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
```

## Deploy to Vercel

Push the repo to GitHub and import it at [vercel.com/new](https://vercel.com/new).
No environment variables or extra config required — it works out of the box.

## Project structure

```
app/
  layout.tsx      Root layout — fonts, SEO/OpenGraph metadata
  page.tsx        Section composition
  globals.css     Tailwind + custom CSS (cursor, grain, scrollbar)
components/
  Navigation.tsx  Fixed nav, scroll blur, availability pill
  Hero.tsx        Full-viewport hero + portrait photo + rotating badge
  Marquee.tsx     Infinite ticker
  Featured.tsx    Aurex agency showcase + live link + metrics
  Services.tsx    2×2 services grid
  About.tsx       Bio + cinematic city strip + stats
  Photo.tsx       next/image wrapper with graceful fallback
  Stack.tsx       Auto-scrolling toolkit wall
  Contact.tsx     Big email CTA + socials
  Footer.tsx      Minimal footer + live Tangier clock
  CustomCursor.tsx  Lerped dot cursor (hidden on touch)
  SmoothScroll.tsx  Lenis wrapper
  Magnetic.tsx    Magnetic-hover wrapper
  Reveal.tsx      Scroll-reveal primitives
  Noise.tsx       SVG film-grain overlay
  Loader.tsx      First-visit loading screen
lib/
  utils.ts        cn() class-merge helper
```

## Photos

Two photos make the site come alive. Drop them into `public/`:

| File                       | Used in | Shot                          |
| -------------------------- | ------- | ----------------------------- |
| `public/hero-portrait.jpg` | Hero    | Portrait of you (e.g. black-tee mirror shot) |
| `public/dubai-night.jpg`   | About   | A night-city / skyline photo  |

If a file is missing the site still works — it falls back to a gradient
placeholder (see `components/Photo.tsx`).

## Customizing

Most content lives in clearly marked arrays near the top of each component:

- **Colors** — `tailwind.config.ts` (`theme.extend.colors`). To change the
  accent, update `accent` there and `--accent` in `globals.css`.
- **Featured project (Aurex)** — copy, metrics, and link in `components/Featured.tsx`
- **Services / pricing** — `SERVICES` in `components/Services.tsx`
- **Bio & stats** — `PARAGRAPHS` / `STATS` in `components/About.tsx`
- **Tools** — `TOOLS` in `components/Stack.tsx`
- **Contact / socials** — constants at the top of `components/Contact.tsx`
- **Loader duration** — `TOTAL_MS` in `components/Loader.tsx`
- **SEO** — `metadata` in `app/layout.tsx`

## Notes

- Respects `prefers-reduced-motion`: smooth scroll, parallax, and grain
  animations are skipped for users who opt out.
- The custom cursor and magnetic hover are disabled on touch devices.
- Project cards currently link to `#contact` — point them at real case
  studies when those exist.
- Replace `public/favicon.svg` and the booking link in `Contact.tsx`.
