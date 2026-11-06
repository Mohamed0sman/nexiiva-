# ROLE

You are a principal front-end engineer and art director building the official corporate website for **Nexiiva**, an industrial Operator Training Simulator (OTS) company serving refineries, gas plants and petrochemical sites. The site must feel like it belongs next to EPC contractors, process-licensor and control-system vendors: serious, precise, engineered, trustworthy. NOT a startup landing page, NOT generic SaaS.

Build it end-to-end, production-ready, in ONE pass. Do not stop to ask questions; where something is missing, follow the "Content rules" section. Work in the phases listed under "EXECUTION ORDER" and run the verification checklist at the end before declaring done.

---

# 1. REFERENCE & POSITIONING

- Structural reference: https://www.onspec.net/ (Egyptian EPC / energy-facilities contractor). Borrow its *information architecture and corporate gravitas*: hero with strong headline + partner/promo band, company overview, a grid of service cards with "Read more" arrows, a "Committed to Excellence" leadership quote, a CSR/responsibility block, a "Latest Projects" card row, a "Latest News" row, and a heavy, information-rich footer (address, email, phones, LinkedIn/Facebook/Instagram).
- Do NOT copy its text, images, layout pixel-for-pixel or branding. Our visual language is darker, more technical and more "control-room" than OnSpec: dark industrial UI, purple→blue gradient accents from our logo, P&ID / DCS motifs.
- Audience: plant managers, training managers, HSE heads, operations managers, procurement at NOCs/IOCs, EPC and engineering houses, universities/technical institutes. Secondary audience: investors and partners (separate /investors page).
- Primary conversion: **"Request a Pilot"** and **"Book a Demo"**. Secondary: "Download Capability Brief".
- Tone of voice: confident, plain, engineering-first. Short sentences. No hype words ("revolutionary", "game-changing", "cutting-edge"). Use concrete numbers from the Content section.

---

# 2. BRAND SYSTEM (derive from the attached assets in /assets)

Company: **Nexiiva** (always written "Nexiiva", never "NEXIIVA" in body copy; logo is the wordmark with a purple/blue "X").
Tagline: **REAL OPERATIONS. VIRTUAL EXPERIENCE.**
Closing line: "Let's Make OTS Accessible to Every Industrial Unit."

Assets provided (copy into `/public/assets` preserving names):
- `assets/brand/logo-light.png`, `logo-wide-light.png` (light wordmark for DARK backgrounds), `logo-dark.png` (dark wordmark for light backgrounds). Also recreate the logo as an **inline SVG component** `<NexiivaLogo variant="light|dark" />` for crispness (letters N E [X] I I V A; the X is two chevrons with purple→violet→blue gradient). If your SVG trace is not faithful, fall back to the PNG with `next/image`.
- `assets/photos/hero-control-room.jpg` (hero), `operator-control-room.jpg` (problem section).
- `assets/screens/cdu-atm-column-pfd.png`, `preheat-train-pfd.png`, `instructor-console.png` — REAL product screenshots. Show them inside a browser/monitor frame component with subtle glow, and make them click-to-zoom (lightbox). Never stretch or crop the labels illegibly.
- `assets/team/mostafa-adel.jpg`, `mohamed-osman.jpg`. The other two team members have no photo → render elegant initials avatars (GA, RE) with the brand gradient ring.

Design tokens (define as CSS variables in Tailwind v4 `@theme`, with both dark (default) and light themes):
- `--bg-0: #05060A` (page), `--bg-1: #0A0B12`, `--bg-2: #11131D` (cards), `--line: rgba(255,255,255,.08)`
- `--text: #E9EAF4`, `--text-dim: #9A9CB3`, `--lavender: #E6E6F2`
- Brand: `--purple-700: #4C1DB8`, `--purple-500: #6D3BF0`, `--violet-400: #8B4CFF`, `--blue-500: #3B6BFF`, `--cyan-glow: #38BDF8` (use sparingly, only for "live data" accents)
- Status colors (for the DCS motif only): `--ok: #22C55E`, `--warn: #F59E0B`, `--alarm: #EF4444`
- Brand gradient: `linear-gradient(135deg, #6D3BF0 0%, #8B4CFF 45%, #3B6BFF 100%)`
- Light theme (for /about, /insights body sections if you choose to alternate): bg `#F6F6FB`, text `#0B0C14`. Default to dark; provide a theme toggle.

Typography (via `next/font`, self-hosted):
- Display/headings: **Sora** or **Space Grotesk** (wide, geometric — echoes the logo). Weights 500–700, tight tracking, uppercase eyebrows with 0.18em letter-spacing.
- Body: **Inter**.
- Data/labels/tags (tag numbers like `TIC102`, `17T01`, values): **JetBrains Mono**.
- Arabic: **IBM Plex Sans Arabic** (body) and **Cairo** (headings). Switch automatically in RTL.

Visual motifs to use consistently:
1. A faint **P&ID blueprint grid** background (SVG pattern, 1px lines, 3% opacity) with occasional instrument-bubble symbols (circle with tag like `FIC-102`, `TI-143`, `LIC-009`) and valve/pump glyphs.
2. **Live data chips**: small mono pills with a pulsing dot and a ticking value (e.g. `TIC102 · 361.8 °C`), purely decorative, values drift ±0.3 with a smooth ease.
3. Thin angular cut corners (clip-path 8px chamfer) on cards and buttons — engineered, not rounded-bubbly. Max radius 10px elsewhere.
4. Section eyebrows in the form `01 — PROBLEM` with a hairline rule.
5. Gradient hairline borders on hover (`background-clip` trick), never heavy drop shadows.

---

# 3. TECH STACK (use exactly this; versions = latest stable, pin in package.json)

**Core**
- **Next.js 15 (App Router) + React 19 + TypeScript (strict)**
- **Tailwind CSS v4** (+ `tailwind-merge`, `clsx`, `class-variance-authority`)
- **shadcn/ui** (Radix primitives) for Dialog, Sheet (mobile nav), Accordion, Tabs, Tooltip, Select, Form, Sonner toasts
- **lucide-react** icons (consistent 1.5px stroke) — no emoji anywhere

**Motion & interaction**
- **motion** (Framer Motion successor, `import { motion } from "motion/react"`) for component/page transitions and reveals
- **GSAP + ScrollTrigger** for the pinned scroll-story sections (How it works, Problem → Solution)
- **Lenis** smooth scroll (disable when `prefers-reduced-motion`)
- **Zustand** for the interactive simulator-demo state

**Data viz / 3D (progressive enhancement, must degrade gracefully)**
- **Recharts** (or **visx**) for mini trend charts in the demo and market charts on /investors
- **@react-three/fiber + drei + three** — OPTIONAL hero background: slow-rotating wireframe distillation column with a purple→blue emissive edge glow. Lazy-load with `next/dynamic` (`ssr:false`), only on desktop with `(min-width:1024px)` and no `prefers-reduced-motion`; otherwise show the static hero photo. If R3F adds risk to the first build, implement the SVG hero first and gate R3F behind a flag `NEXT_PUBLIC_ENABLE_3D=false`.

**i18n / RTL (REQUIRED — Egypt/GCC market)**
- **next-intl** with locales `en` (default) and `ar`. Routes `/en/...`, `/ar/...`. `dir="rtl"` + `lang="ar"` on `<html>` for Arabic.
- Use Tailwind **logical utilities** everywhere (`ms-*`, `me-*`, `ps-*`, `pe-*`, `text-start`, `start-0`, `border-s`) — no `left/right` hard-coding. Mirror directional icons (arrows) in RTL. Numbers stay Western digits in tech data.
- Language switcher in header. Provide full Arabic translations of ALL copy (professional MSA, industry-correct terminology: محاكي تدريب المشغّلين، وحدة تكرير، برج التقطير الجوي، غرفة التحكم، نظام التحكم الموزع DCS).

**Forms, content, SEO, quality**
- **react-hook-form + zod** (+ server actions) for Contact / Pilot request forms; honeypot field + simple rate-limit; send via **Resend** (env `RESEND_API_KEY`, `CONTACT_TO_EMAIL`); if keys absent, log to console and show success (dev mode).
- **MDX** (`@next/mdx` or `contentlayer2`/`velite`) for Insights/News articles — seed 3 sample posts clearly marked as placeholders.
- **next/image**, **next/font**, **next/og** (dynamic OG images), `sitemap.ts`, `robots.ts`, JSON-LD (`Organization`, `WebSite`, `SoftwareApplication`, `BreadcrumbList`), per-page `generateMetadata`, `hreflang` alternates for en/ar.
- **@vercel/analytics** (optional, behind env flag), **Plausible** snippet placeholder.
- Quality: **ESLint + Prettier + `prettier-plugin-tailwindcss`**, **Playwright** (smoke tests: each route returns 200, language switch works, form validates, no console errors), **axe-core** via `@axe-core/playwright` for a11y. Target Lighthouse ≥ 95 (Perf / A11y / Best Practices / SEO) on desktop.
- Package manager: pnpm. Node 20+. Provide `.env.example`, `README.md` (run, build, deploy to Vercel), and a `content/` folder holding ALL copy in typed `en.json` / `ar.json` messages so non-developers can edit text.

Performance rules: images via next/image with explicit sizes + AVIF/WebP; no layout shift; fonts `display: swap` with `adjustFontFallback`; lazy-load below-fold sections and heavy libs; `prefers-reduced-motion` honoured; total JS on home < 200 KB gz excluding the optional 3D chunk.

---

# 4. SITE MAP

`/` Home · `/platform` (the product) · `/solutions` (OTS Builder, AI Unit Builder, Instructor Console, Scoring & Certification) · `/industries` (Refining, Gas Processing, Petrochemicals, Training institutes) · `/pilot` (Paid Pilot program + request form) · `/about` (story, team, roadmap) · `/insights` (news/articles, MDX) · `/contact` · `/investors` (deck-derived, see §6) · `/legal/privacy`, `/legal/terms` (placeholder text clearly marked).

Header: logo · Platform · Solutions · Industries · Pilot · About · Insights · Contact · EN/AR switch · theme toggle · primary button **Request a Pilot**. Sticky, transparent over hero → blurred dark glass after 40px scroll. Mega-menu on "Solutions" with 4 items + small icon + one-line description. Mobile: full-height Sheet.
Footer (OnSpec-style, dense): logo + tagline, 4 link columns, contact block (placeholders), social icons (LinkedIn, Facebook, Instagram, YouTube — hrefs `#` placeholders), language switch, "© {year} Nexiiva. All rights reserved." A thin gradient line on top.

---

# 5. HOME PAGE — SECTION BY SECTION (in this order)

**0. Top promo band** (OnSpec-style slim announcement bar): "Pilot programme open — train on your own unit in ~1 week of build time" → link /pilot. Dismissible.

**1. HERO** — full viewport, dark. Background: `hero-control-room.jpg` darkened with purple-tinted gradient overlay + P&ID grid + (optional) R3F column. Eyebrow: `OPERATOR TRAINING SIMULATOR`. H1: **"Real operations. Virtual experience."** Sub: "Nexiiva turns your own process unit into a safe, realistic DCS-style training simulator — so operators face the worst day before it happens." CTAs: [Request a Pilot] (gradient) · [Watch the platform] (ghost, opens video/lightbox placeholder). Right/bottom: floating monitor frame showing `cdu-atm-column-pfd.png` with 3–4 live-data chips orbiting. Bottom: scroll cue + trust strip (see 2).

**2. Trust/capability strip** (like OnSpec partner band) — NO fake client logos. Show factual capability tiles in a marquee: `CDU / VDU` · `Preheat Train` · `387 equipment types` · `12 live trends` · `Instructor-injected faults` · `Auto scoring + certificate` · `Offline mode` · `Arabic & English`.

**3. 01 — THE PROBLEM** (pinned scroll story with GSAP, 4 beats, `operator-control-room.jpg` on the side with a big gradient number counting up to **$150K**):
 1. "Day one in the control room: screens, alarms, and 'sit next to the senior'."
 2. "After a year, an operator has seen about 8 problems — 3 of them repeated."
 3. "The senior is absent. A problem never seen before hits: leak, fire, emergency shutdown."
 4. Cost build-up bar animating: **7 days down $70K + repairs $50K + penalties $30K = $150K** — "lost from one small problem."

**4. 02 — THE SOLUTION** — centered logo with 4 connected nodes (animated SVG curves with travelling dots, as in the deck): "A simulation platform for industrial units" · "Let operators practice real-world scenarios safely" · "Tailor it to your unit with its full logic" · "A cost-effective solution".

**5. 03 — HOW IT WORKS** (Tabs or horizontal scroll-snap, 3 steps, each paired with a real screenshot): **Practice** (DCS-style screens with live diagrams, alarms and 12 live trends → `cdu-atm-column-pfd.png` / `preheat-train-pfd.png`) · **Instruct** (the instructor injects faults and watches the trainee live; scoring is automatic → `instructor-console.png`) · **Certify** (certificate with the full score breakdown after each scenario).

**6. LIVE DEMO — "Try the console"** ⭐ signature feature. A compact interactive mini-DCS built in React/SVG (Zustand state machine), styled like the screenshots (dark navy, mono labels, amber/green/cyan values): simplified atmospheric column with feed furnace H01, reflux drum, 3 side-draw products (Naphtha, Kerosene, L.Diesel), 6 live values that gently fluctuate. Right panel = "Instructor" with scenario buttons mirroring the real console: `REFLUX LOSS`, `VACUUM LOSS`, `FEED LOSS V10`, `H01 TRIP`, `FEED LOSS P01`, `STEAM LOSS`. Clicking one: affected values drift to abnormal, an alarm banner appears (blinking, ISA-style: red = high priority), pump icon turns red, and a "Trainee score" gauge reacts. Button `RESET TO NORMAL` restores. Include an unobtrusive caption: "Illustrative demo — values are simulated." Must be keyboard-accessible, work on mobile (stacked), and pause when off-screen.

**7. 04 — WHY NEXIIVA (Value proposition)** — 4 large feature cards with icons: 
 - "An AI agent **builds the unit** from an Arabic or English description."
 - "A library of **387 equipment types** generates a full training project."
 - "Target build time: **about one week** per unit — to be measured on unit two." (keep this honest wording)
 - "**Offline mode** needs no AI and no internet." (important for secure plants)

**8. 05 — HOW WE COMPARE** — clean 3-row comparison table (animated rows): Large vendors → *Very high cost* → "Longer delivery, vendor support" · Specialist simulator firms → *High cost* → "Tailored to each customer" · **Nexiiva** (highlighted row with gradient border) → *Low cost* → "Fast customization; cloud, on-premise". Cost cells as colored pills (red / violet / cyan). No invented prices.

**9. 06 — SOLUTIONS** (OnSpec "Our Services" card grid, 4 cards + "Read more →"): Operator Training Simulator · AI Unit Builder (OTS Builder) · Instructor Console · Scoring & Certification. Each card: icon, title, 2-line text, hover reveals a P&ID line draw animation.

**10. 07 — INDUSTRIES** — 4 image-less tiles with large line-art glyphs: Refining (CDU/VDU, preheat train) · Gas processing · Petrochemicals · Technical institutes & universities. Note: delivered today = CDU/VDU; show others as "Roadmap" badge. "From one industrial unit to every process industry."

**11. 08 — OUR JOURNEY** (replaces OnSpec "Latest Projects"; vertical timeline, 4 cards): [done] A working CDU/VDU training unit, built and tested · [in progress] OTS Builder under development — second unit to measure real build time · [done] Commercial benchmarking completed — international OTS providers approached, preliminary quotations received · [next] Pre-revenue stage — preparing initial pilot deployments and market entry. (Render the bracketed status as lucide icons: CheckCircle2 / Wrench / Rocket. No emoji.) State plainly that we are pre-revenue; honesty builds trust.

**12. 09 — PILOT PROGRAMME** — big gradient panel: "Start with one unit. Expand across the facility." 3 steps: Direct engagement with your site → **Paid pilot for one industrial process unit** → Land & Expand across the facility; plus "Strategic partnerships for distribution and training". CTA [Request a Pilot]. (Do NOT publish a price on the public site; keep price only on /investors.)

**13. Leadership quote** ("Committed to Excellence" pattern from OnSpec): large quote block with Mostafa Adel, Founder & CEO. Quote text: placeholder `[CEO quote — replace]`, marked visually with a subtle "placeholder" tag in dev only (`process.env.NODE_ENV !== 'production'`). 

**14. Responsibility / Safety block** (CSR pattern): "Safer plants start in the simulator." Copy about practising emergencies without risk to people, equipment or environment. No fake certifications.

**15. Latest insights** — 3 cards from MDX. Seed placeholder titles: "Why operators need to see the worst day before it happens", "What an OTS actually trains (and what it doesn't)", "Offline-first simulators for secure plants".

**16. Final CTA** — dark, logo, line "Let's make OTS accessible to every industrial unit." sub "Join us in changing the future of industrial training." Buttons: [Request a Pilot] [Contact us].

---

# 6. OTHER PAGES (concise specs)

- **/platform**: sticky side-nav sections — Overview, DCS-style screens (tabs: PFD · Process · Control valves · Pumps · Furnace · Trends · Totaliser · Alarms · Score — mirror the real nav seen in the screenshots), Preheat train, Instructor console, Scoring. Each with a real screenshot and 2–3 bullets. A spec table (Offline mode, Cloud/On-premise, EN/AR UI, 12 live trends, 387 equipment library, auto-scoring, certificate).
- **/solutions** + 4 detail pages (or anchored sections): what it is, how it works, outcomes, "Request a Pilot".
- **/industries**: per-industry story with the typical scenarios (reflux loss, vacuum loss, feed loss, heater trip, steam loss, heater emergency).
- **/pilot**: explain pilot flow, what is needed from the client (P&IDs, operating envelope, scenarios), timeline "~1 week build target (to be validated)", FAQ accordion (8 Q&As: data confidentiality, offline use, language, customization, hardware, IT security, licensing, support), long form (company, role, unit type, message).
- **/about**: story (Adam's first day narrative, short), mission, team (4 people), roadmap.
  Team: **Mostafa Adel — Founder & CEO**; **Mohamed Osman — Co-Founder & CTO**; **Gehad Ashraf — Co-Founder, Business Advisor & Mentor**; **Rodayna Emam — Co-Founder, Business Development**. LinkedIn icons with `#` placeholders.
- **/contact**: form + placeholder address/email/phone block (clearly `[placeholder]`), embedded static map placeholder.
- **/investors** (not in main nav; link from footer "Investors"): dark, data-dense, derived from the pitch deck:
  - Market: TAM — Egypt, GCC and Africa (excl. Egypt): **$0.54–1.86M/yr · 50 companies · 97 sites · 194–388 units**. SAM — Egypt (first market): **$0.14–0.48M/yr · 23 companies · 25 sites · 50–100 units**. SOM — Year 3 base case: **$44.7K revenue · 6 customers · 6 units · 6–12% of Egypt's units**. Render as three concentric/overlapping glass circles like the deck, with count-up.
  - Business model: **$800 paid pilot for one process unit**, land & expand.
  - Financials (Recharts): base case revenue Y1 $7.4K / Y2 $25.4K / Y3 $44.7K; gross profit Y1 $5.1K / Y2 $20.2K / Y3 $30.1K; net income Y1 −$4.8K / Y2 $12.4K / Y3 $14.6K; gross margin 70% · 79% · 67%; cumulative net income (3 yrs) base $22.2K, optimistic $83.6K, pessimistic $3.9K; "Base case breaks even in Year 2; pessimistic case breaks even in Year 3". Verify every number against the deck slide 12 image if provided; if unsure, omit rather than guess.
  - The Ask: **$10,000 seed** — $7,000 company registration, lawyer, accountant, office set-up & fit-out; $3,000 domain, business email, API subscriptions, server. Goal: first paid pilot within ~3 months.
  - Contact for investors form.

---

# 7. MOTION SPEC

- Page load: logo draw-in → headline word-by-word reveal (stagger 40 ms) → CTAs → monitor frame slides up with blur-to-sharp.
- Scroll reveals: fade + 24px rise, `ease: [0.22, 1, 0.36, 1]`, once, triggered at 15% in view.
- Numbers count up once when visible (use `motion` `animate` or small custom hook).
- Background: slow parallax on grid (≤ 20px), subtle gradient aurora blobs (purple/blue) at 8–12% opacity, GPU-only transforms.
- Cursor: no custom cursor. Buttons: gradient sweep on hover, 120 ms.
- Hard rule: no animation > 900 ms except the pinned storytelling; everything off or simplified under `prefers-reduced-motion`.

---

# 8. CONTENT RULES (very important — no fabrication)

- Use ONLY the facts in this prompt. Do NOT invent clients, partners, logos, awards, ISO/API certifications, testimonials, case studies, statistics, addresses, phone numbers or prices.
- Anything unknown → visible-in-dev placeholder in square brackets, e.g. `[Phone — to be provided]`, tracked in a single `content/TODO-content.md` file you generate listing every placeholder.
- Product claims must stay as written in the deck (e.g. "target build time about one week per unit, to be measured on unit two"). Never state benefits as already proven if the deck says "target".
- Pre-revenue status stated honestly. Market figures labelled as "internal estimates" on /investors.
- Arabic copy must be real translations, not transliteration; keep technical tags (TIC102, 17T01) in Latin.

---

# 9. ACCESSIBILITY, SEO, SECURITY

- WCAG 2.2 AA: contrast ≥ 4.5:1 for body (check purple-on-black text — use `--violet-400` or lighter, never `--purple-700` for text on dark), visible focus rings, skip-link, semantic landmarks, `aria-live` for demo alarms, all images alt text, forms with labels/errors.
- SEO: unique title/description per page and locale, canonical + hreflang, OG/Twitter cards, JSON-LD, clean URLs, sitemap including both locales.
- Security headers via `next.config` (CSP report-only baseline, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`), form honeypot + server-side zod validation, no secrets in client bundle.

---

# 10. EXECUTION ORDER (follow strictly)

1. `pnpm create next-app` with TS, Tailwind, App Router, ESLint; install the stack in §3; init shadcn/ui; copy `/assets`.
2. Set up tokens, fonts, theme (dark default), layout shell, header/footer, next-intl (en/ar + RTL), Lenis.
3. Build shared components: `NexiivaLogo`, `Section` (eyebrow + title), `GlassCard` (chamfered), `LiveChip`, `MonitorFrame`, `GradientButton`, `PidGrid` background, `CountUp`, `Reveal`.
4. Build Home sections 0 → 16 in order. Build the **Live demo** (section 6) carefully; it is the wow-factor.
5. Build the other pages, MDX insights, forms + server actions, investors page with charts.
6. Write all `en.json` + `ar.json`. Generate `content/TODO-content.md`.
7. SEO files, OG images, JSON-LD, security headers.
8. Tests: Playwright smoke + axe; run `pnpm lint && pnpm build && pnpm test`. Fix everything.
9. Open the site in the browser tool at 1440, 1024, 768 and 390 px widths in BOTH English and Arabic (RTL); capture screenshots; fix overflow, clipped text, mirrored-icon mistakes, low contrast.
10. Final report: routes list, how to run, env vars, list of placeholders still to fill.

# DEFINITION OF DONE (verify, don't assume)

- [ ] `pnpm build` passes with zero TS/ESLint errors; no console errors/warnings in browser.
- [ ] All routes exist in `/en` and `/ar`; Arabic is true RTL with correct mirroring; no horizontal scroll on 390 px.
- [ ] Live demo works with mouse, touch and keyboard; scenarios change values and alarms; reset works.
- [ ] Real screenshots appear crisp with zoom lightbox; logo correct on dark and light.
- [ ] Contact + Pilot forms validate, show success/error states, honeypot works.
- [ ] Lighthouse ≥ 95 on all four categories (desktop) for `/en`.
- [ ] No invented facts; every placeholder listed in `content/TODO-content.md`.
- [ ] The result looks like an established industrial technology company's website, not a template: consistent grid, restrained color, precise typography, generous spacing.
