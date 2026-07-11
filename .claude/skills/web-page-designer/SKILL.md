---
name: web-page-designer
description: Design and build beautiful, responsive web pages as Next.js/React components with Tailwind CSS and daisyUI, with first-class Arabic (RTL) and English (LTR) support. Use this skill whenever the user asks to design, create, build, or improve any web page or website UI — landing pages, portfolios, product pages, storefronts, about/contact pages, hero sections, pricing tables — including casual or Arabic requests like "صمم صفحة", "سوي لي موقع", "ابي صفحة هبوط", "حسّن التصميم", even if they never use the word "design".
---

# Web Page Designer

Build complete, polished web pages for this Next.js + Tailwind CSS + daisyUI stack. The goal is a page that looks professionally designed on the first try: clear hierarchy, generous spacing, a deliberate color system, and flawless Arabic/English text handling.

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
- Load fonts with `next/font/google`. For Arabic or bilingual pages use **Cairo**, **Tajawal**, or **IBM Plex Sans Arabic** (they all include Latin glyphs, so one font covers both languages). For English-only pages, **Inter** is a safe default.
- Scale: hero headline `text-4xl sm:text-5xl font-bold`, section titles `text-3xl font-bold`, body `text-base sm:text-lg` with `leading-relaxed` (Arabic needs generous line-height — never below `leading-relaxed`).

### Arabic / RTL
- Arabic page: set `dir="rtl" lang="ar"` on the `<html>` element (in `app/layout.jsx`).
- Use Tailwind **logical properties** so the same classes work in both directions: `ms-*`/`me-*` instead of `ml-*`/`mr-*`, `ps-*`/`pe-*` instead of `pl-*`/`pr-*`, `text-start`/`text-end` instead of `text-left`/`text-right`.
- Icons that imply direction (arrows in buttons like "ابدأ الآن ←") must point the correct way in RTL — flip them with `rtl:rotate-180` or choose direction-neutral icons.
- Bilingual pages: a language toggle should switch both content and `dir`. Keep translations in a simple object/dictionary, not duplicated markup.

### Color
- Build on daisyUI theme tokens (`bg-base-100`, `text-base-content`, `bg-primary`, `text-primary-content`) so themes stay consistent, and customize the theme in `tailwind.config.js` when the user has brand colors.
- One primary accent color, used sparingly: primary CTA buttons, key highlights, links. Everything else stays neutral. A page with five competing colors looks amateur.
- Check contrast: body text on background should be comfortably readable (aim for WCAG AA).

### Components
- Use daisyUI components (`btn`, `card`, `navbar`, `footer`, `hero`, `stats`) as the base and refine with Tailwind utilities — don't hand-roll a button from scratch when `btn btn-primary` exists.
- Every image needs meaningful `alt` text (in the page's language). Use `next/image` for real images.
- Buttons and links need visible hover/focus states (daisyUI provides them — don't remove them).

## Step 4: Implementation conventions for this repo

- Pages live in `app/` (App Router): a new page is `app/<route>/page.jsx`.
- Reusable pieces go in `components/` as their own files (e.g. `components/hero.jsx`), imported into the page. Split into components when a section is reused or the page file gets long — don't create ten one-line components for a simple page.
- Server components by default; add `'use client'` only when the component needs state or event handlers (language toggle, mobile menu, carousel).
- Match the existing code style: `.jsx` files, functional components, Tailwind classes inline.

## Step 5: Verify

- Run `npm run build` (or at minimum `npx next lint`) to catch errors before declaring the page done.
- Re-read the rendered structure with mobile in mind: does the hero fit a phone screen? Do grids collapse? Is the navbar usable?
- For Arabic pages, double-check: `dir="rtl"` set, no `ml-`/`mr-`/`text-left` leftovers, punctuation and numbers render correctly.
- Tell the user how to see the page: `npm run dev` then the URL path.

## Common mistakes to avoid

- Cramped sections (`py-4` between major sections) — pages need room to breathe.
- Mixing physical and logical direction classes in an RTL page — pick logical (`ms-`/`me-`) and stick to it.
- English placeholder text ("Your headline here") inside an Arabic page.
- A wall of identical cards with no visual anchor — vary rhythm with an alternating layout, a stats band, or a full-width CTA between card sections.
- Hardcoding hex colors everywhere instead of theme tokens — it breaks the moment the user wants a dark mode or brand change.
