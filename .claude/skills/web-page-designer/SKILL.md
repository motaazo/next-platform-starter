---
name: web-page-designer
description: Design and build beautiful, responsive web pages as Next.js/React components with Tailwind CSS, with first-class Arabic (RTL) and English (LTR) support. Use this skill whenever the user asks to design, create, build, or improve any web page or website UI — landing pages, portfolios, product pages, storefronts, about/contact pages, hero sections, pricing tables — including casual or Arabic requests like "صمم صفحة", "سوي لي موقع", "ابي صفحة هبوط", "حسّن التصميم", even if they never use the word "design".
---

# Web Page Designer

Build complete, polished web pages for this Next.js + Tailwind CSS project. The goal is a page that looks professionally designed on the first try: clear hierarchy, generous spacing, a deliberate color system, and flawless Arabic/English text handling.

## Step 1: Understand before you build

Extract these from the user's request (ask only if genuinely ambiguous — prefer sensible defaults over interrogating the user):

- **Page type**: landing page, portfolio, product/store page, about, contact, etc.
- **Content language**: Arabic, English, or both. If the user writes in Arabic and doesn't specify, default to Arabic content with RTL layout.
- **Purpose & audience**: what should a visitor do on this page? (buy, contact, read, sign up)
- **Brand hints**: colors, tone (playful/corporate/minimal), existing logo or name.

If the user gives you real content (business name, services, prices), use it verbatim. If not, write realistic placeholder content in the page's language — never lorem ipsum, and never English filler inside an Arabic page.

## Step 2: Plan the sections

Pick a section structure that fits the page type before writing code:

- **Landing page**: navbar → hero (headline, subheadline, CTA button) → features/benefits (3–6 cards) → social proof or stats → secondary CTA → footer.
- **Portfolio**: navbar → intro/hero with name & role → selected work grid → skills → contact CTA → footer.
- **Product page**: navbar → product gallery + title/price/CTA → description → specs → reviews → related items → footer.
- **Other pages**: adapt — every page still needs a clear top (what is this?), middle (details), and bottom (what next? + footer).

## Step 3: Design rules

These defaults make pages look designed rather than assembled:

### Layout & spacing
- Max content width: `max-w-6xl mx-auto px-4 sm:px-6` for sections; hero text can be narrower (`max-w-2xl`).
- Vertical rhythm: sections get `py-16 sm:py-24`. Don't crowd — whitespace is the cheapest way to look premium.
- Mobile-first: design for a phone screen, then enhance with `sm:` / `md:` / `lg:` variants. Grids collapse to one column on mobile (`grid-cols-1 md:grid-cols-3`).

### Typography
- Fonts are already loaded in `styles/globals.css` via Google Fonts `@import` and exposed as Tailwind families — do **not** add `next/font/google`, it would create a second competing font pipeline.
- Use `font-arabic` (IBM Plex Sans Arabic) for body text and `font-arabic-display` (Almarai) for headings and the logo. `font-sans` (Inter) is only for English-only pages.
- Scale: hero headline `text-4xl sm:text-5xl font-extrabold`, section titles `text-3xl font-extrabold`, body `text-base sm:text-lg` with `leading-relaxed` (Arabic needs generous line-height — never below `leading-relaxed`).

### Arabic / RTL
- RTL is already set globally in `app/layout.jsx` (`<html lang="ar" dir="rtl">`) — never re-set `dir` or `lang` per page.
- Use Tailwind **logical properties** so the same classes work in both directions: `ms-*`/`me-*` instead of `ml-*`/`mr-*`, `ps-*`/`pe-*` instead of `pl-*`/`pr-*`, `text-start`/`text-end` instead of `text-left`/`text-right`.
- Icons that imply direction (arrows in buttons like "ابدأ الآن ←") must point the correct way in RTL — flip them with `rtl:rotate-180` or choose direction-neutral icons.
- Bilingual pages: a language toggle should switch both content and `dir`. Keep translations in a simple object/dictionary, not duplicated markup.

### Color
- Use the project palette defined in `tailwind.config.js` under `theme.extend.colors.rawaq`: `rawaq-ivory` for page background, `rawaq-charcoal` for body text, `rawaq-navy` / `rawaq-navy-dark` for dark sections, the navbar and the footer, `rawaq-gold` for primary CTAs, `rawaq-gold-light` for hover, `rawaq-olive` as a secondary accent.
- Do **not** use daisyUI theme tokens (`bg-primary`, `bg-base-100`, `text-primary-content`). The active `lofi` theme ships a teal primary that clashes with the navy/gold brand.
- Gold is the only accent — CTA buttons, key highlights, the logo. Everything else stays navy, ivory or charcoal. A page with five competing colors looks amateur.
- Need a new brand color? Add it to the `rawaq` palette in `tailwind.config.js` — never as an inline hex inside a component.
- Check contrast: body text on background should be comfortably readable (aim for WCAG AA).

### Components
- Build sections by hand with Tailwind utilities and follow the patterns already in `app/page.jsx`: `rounded-full` gold CTA buttons with `hover:scale-105`, `rounded-2xl` cards, sections wrapped in `max-w-6xl mx-auto px-6`, a fixed translucent navbar (`bg-rawaq-navy/90 backdrop-blur`).
- Do **not** reach for daisyUI components (`btn`, `card`, `hero`, `navbar`) — they are not used anywhere in this project and will look foreign next to existing pages.
- Every image needs meaningful `alt` text (in the page's language). Use `next/image` for real images.
- Buttons and links need visible hover/focus states. Note that `styles/globals.css` underlines every `<a>` by default, so add `no-underline` on button-style links.

## Step 4: Implementation conventions for this repo

- Pages live in `app/` (App Router): a new page is `app/<route>/page.jsx`.
- Reusable pieces go in `components/` as their own files (e.g. `components/hero.jsx`), imported into the page. Small page-specific helpers (like `CtaButton` or `Stars` in `app/page.jsx`) can stay in the page file. Don't create ten one-line components for a simple page.
- Server components by default; add `'use client'` only when the component needs state or event handlers (language toggle, mobile menu, carousel).
- Match the existing code style: `.jsx` files, functional components, Tailwind classes inline.

## Step 5: Verify

- Run `npm run build` (or at minimum `npx next lint`) to catch errors before declaring the page done.
- Re-read the rendered structure with mobile in mind: does the hero fit a phone screen? Do grids collapse? Is the navbar usable?
- For Arabic pages, double-check: no `ml-`/`mr-`/`text-left` leftovers, no English filler, punctuation and numbers render correctly.
- Tell the user how to see the page: `npm run dev` then the URL path.

## Common mistakes to avoid

- Cramped sections (`py-4` between major sections) — pages need room to breathe.
- Mixing physical and logical direction classes in an RTL page — pick logical (`ms-`/`me-`) and stick to it.
- English placeholder text ("Your headline here") inside an Arabic page.
- A wall of identical cards with no visual anchor — vary rhythm with an alternating layout, a stats band, or a full-width CTA between card sections.
- Hardcoding hex colors in components instead of the `rawaq` palette tokens — it breaks the moment the brand changes.
