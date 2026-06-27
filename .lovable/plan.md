## Scope

This is a major redesign covering currency, typography, hero, navigation, motion, and overall site architecture. I'll execute it in phases so we can review progress as we go.

---

## Phase 1 — Foundations (currency + typography)

1. **Currency switch to INR (₹)**
   - Search the codebase for `€`, `EUR`, `euro` and replace with `₹` / `INR`.
   - Add a small helper `src/lib/currency.ts` with `formatINR(amount)` using `Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 })` so future multi-currency is just a config swap.
   - Update example prices: ₹99 Surprise Box, ₹149 Starter, ₹249 Growth, ₹379 Business.

2. **Typography refresh**
   - Load **Manrope** (headings, ExtraBold 800) + **Inter** (body) via Google Fonts in `index.html`.
   - Update `tailwind.config.ts` `fontFamily` (`display: Manrope`, `sans: Inter`) and `src/index.css` base styles.
   - Note: This overrides the existing "system fonts only" memory rule — confirm in approval.

---

## Phase 2 — Floating pill navigation

- Rewrite `Header.tsx` as a floating pill: max-w-[1400px], rounded-full, translucent glass, 24px from top, persistent across scroll.
- Framer Motion entrance (fade + drop + scale 0.96→1, ~800ms).
- Scroll-linked opacity 0.65→0.95, blur 18→24px, slightly tighter padding after 80px.
- Animated underline on hover, lift on buttons.

## Phase 3 — Cinematic hero

- Full-screen looping background video with dark gradient overlay.
  - **Need from you**: a hosted video URL, or approval to use a stock placeholder (Pexels/Coverr free CDN) until you provide one.
- Staggered Framer Motion entrance sequence per your timeline (badge → headline mask reveal → paragraph → CTAs → stats strip).
- Animated count-up stats. **Flag**: the numbers you listed (2,48,000+ meals, 850 stores, 410 tons CO₂, ₹1.8 Cr) conflict with the project's "no fake metrics" rule. Options:
  - (a) Use them as-is (override the rule).
  - (b) Use honest pilot numbers (e.g. "Now live in Idukki · 12 partner stores").
  - (c) Show the strip with placeholder labels only, no numbers yet.
- Floating decorative SVG icons with slow parallax drift.
- Desktop mouse-parallax on background + button tilt on hover.
- Scroll-out: video fades/slows, hero scales down, nav solidifies.

## Phase 4 — Section flow & motion polish

- Reorder `Index.tsx` to the storytelling sequence: Hero → Trusted by → How it Works → Live Boxes → Why Businesses Join → Impact → Stories → App Preview → FAQ → CTA → Footer.
- Add Framer Motion `fade-up`, `scale-in`, `blur-reveal`, staggered cards across sections.
- Larger section spacing (py-24 → py-32), softer dividers, alternating backgrounds.

---

## Technical notes

- Add `framer-motion` (`bun add framer-motion`).
- New files: `src/lib/currency.ts`, `src/components/FloatingNav.tsx` (replaces Header), `src/components/HeroCinematic.tsx` (replaces Hero), `src/components/StatsStrip.tsx`, `src/components/FloatingDecor.tsx`.
- Reuses existing routing, Supabase, and content; no backend changes.

---

## Before I start — 3 quick decisions

1. **Hero video source**: provide a URL, or shall I use a free stock CDN placeholder?
2. **Hero stats numbers**: (a) use as written, (b) honest pilot numbers, or (c) labels only / hide until real?
3. **Font override**: OK to drop the "system fonts only" rule and load Manrope + Inter from Google Fonts? (Small perf cost, big brand win.)

I'll start Phase 1 as soon as you confirm.