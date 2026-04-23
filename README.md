# Dav — Portfolio

A modern, animated portfolio website built with care. Not a template — every animation, transition, and color decision was intentional.

## What's Inside

- **Main Portfolio** — Hero with animated text reveal, about section, interactive skills, 3D project cards, and contact
- **NovaSpark** (`/demo/startup`) — SaaS landing page with pricing, features, and testimonials
- **Luxe Market** (`/demo/shop`) — E-commerce frontend with product grid and category filters
- **TradePulse** (`/demo/trading`) — Fintech trading dashboard with charts, watchlist, and portfolio analytics

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

No backend. All data is mock.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Features

- Dark / light mode with smooth transitions
- Scroll-triggered section reveals
- 3D tilt project cards with mouse-tracking glow
- Glassmorphism navbar that hides on scroll down
- Floating ambient background orbs
- Subtle dot grid pattern
- Responsive across all screen sizes
- Clean, maintainable component architecture

## Deployment

### Cloudflare Pages

1. Push your code to a GitHub repository
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
3. Connect your GitHub repo
4. Set build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `.next`
   - **Framework preset**: Next.js
5. Deploy

### Vercel (Recommended)

```bash
npx vercel
```

### Static Export (GitHub Pages)

Add to `next.config.ts`:

```ts
const nextConfig = {
  output: 'export',
};
```

Then:

```bash
npm run build
```

The `out/` directory contains the static site. Deploy it to GitHub Pages or any static host.

Note: Static export doesn't support some Next.js features (middleware, ISR). For this portfolio, it works fine.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Main portfolio
│   ├── globals.css          # Design system
│   └── demo/
│       ├── startup/page.tsx # SaaS demo
│       ├── shop/page.tsx    # E-commerce demo
│       └── trading/page.tsx # Dashboard demo
├── components/
│   ├── layout/              # Navbar, Footer
│   ├── ui/                  # Button, AnimatedSection, ThemeToggle
│   ├── effects/             # FloatingOrbs, GridBackground, ParallaxLayer
│   └── sections/            # Hero, About, Skills, Projects, CTA, Contact
├── hooks/                   # useScrollProgress
├── lib/                     # constants, mockData
└── providers/               # ThemeProvider
```

## License

MIT
