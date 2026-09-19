# Portfolio — Build Plan

Goal: a minimalistic black/white/gray portfolio for Siddham Mishra, positioned for senior
GTM engineering roles. Athra-caliber design language, receipts on every claim.

## Stack
- Next.js 16 (App Router) + React 19, plain JavaScript
- Global CSS design system, Geist via next/font, no extra runtime deps
- Proof overlays: native `<dialog>` takeover with image or YouTube proof

## Sections
- [x] Nav — mark, Work / Projects / Now, Book a call
- [x] Hero — status pill, headline, sub, CTAs, trust line
- [x] Metrics strip — 200+ Clay hours, 10k/day, 300k/mo, 15 SDRs, 10k+ LI, 2 SaaS
- [x] Work — Capvance, Gushwork, Conek, Holisticon + proof triggers
- [x] Projects — Papiauto, Instagram automation, systems/teardowns writing
- [x] Now — signal systems, personal brain, full-cycle practice + stack chips
- [x] Closer — "People move. I build the systems that catch them."
- [x] Footer — socials, education, giant masked word, open-to-work status
- [x] 404, icon, metadata

## Proof assets
- `public/proofs/outbound-sequence.png` — five-channel outbound architecture (Capvance)
- YouTube — Clay workflows `hyuAS3ZWnpk`, Papiauto `F6V6PVLQlWk`, Instagram `TknWLJJ581A`

## Verification
- [x] `npm run lint` clean
- [x] `npm run build` clean — 3 static routes (/, /_not-found, /icon.svg)
- [x] Browser E2E (headless Chromium, 1440px + 390px): proof dialog opens (image + YouTube),
      ESC closes, close button closes, zero console errors
- [x] Visual pass on hero, work, closer, footer, mobile
- [x] Outbound links 200: Papiauto live, Instagram live, jigsaw1, cal.com, GitHub

## Review
- Built 2026-09-18. Next.js 16.3.5, plain JS, zero UI dependencies.
- Content intentionally leads with Clay depth (200+ hours) and de-emphasizes n8n.
- Proof model: content-driven; each proof is `image` or `youtube` in `src/content/portfolio.js`.
- Dev server was verified on port 4310 (3000 was busy on this machine).

## v2 — portfolio repositioning (2026-09-18)
- Hero is identity-first: name, role line, contact row, email CTA (no SaaS vibe)
- About section: story, pull quote, grayscale portrait, Looking-for box (role + remote, no comp)
- Projects corrected: SmartRep AI (chatbot-jigsid + jigsid/chatbot + Email/Chatbot video),
  Boostly (papiauto + jigsid/papiauto + Instagram video), ABM workflow and coding
  projects as separate cards
- Closer rebuilt in red-orange gradient with a much larger background word;
  accent (#ff4d00) also on status dots, pull-quote bar, overlay eyebrow
- No resume download (per user); no portrait elsewhere
- Verified: lint + build clean, browser E2E green, screenshots for hero/about/closer.
  Dev now runs on :3000 (stale ~/portfolio server stopped).

## v3 — presence, not application (2026-09-18)
- Hero is a single identity block: name, role, story ("A technical person who fell for
  marketing" + pull), positioning line, portrait. About merged in; no pills, no contact
  row, no trust line, no nav, no footer.
- Everything sits in a 50% center column (760px). Work starts right after the hero.
- Proofs replaced with real receipts from Notion/Drive: Capvance campaign dashboards
  (2 images, gallery), Gushwork 100+ demos post. Overlay supports multi-image with
  thumbnail strip.
- Projects section is a dark "different world" zone with editorial rows; ABM workflow
  is first and lives at /abm-workflow (rendered from the Notion content, white page so
  the diagram blends, source credited to the 2026 ABM playbook).
- Now section is diagram-based: 4-step vertical flow with tools per step. Dropped the
  "Prove it" step and the chip cloud.
- Closer: mesh background, full-width 90% panel, no CTAs except copy-email.
- Experience dates removed.

## v4 — two pages only (2026-09-18)
- Page 1 (`/`): compact hero (name, role, one paragraph, pull quote, 4 trait bullets)
  → Experience (4 roles: one-line summary + "Read more" + "Show me proof")
  → Projects (dark zone, ABM first)
  → Closer (mesh, statement, copy-email, contact row: LinkedIn / GitHub / X / phone / location)
- Page 2 (detail pages): `/work/[slug]` per role (problem → what I built → how it worked
  → what came out → stack, with proof images inline) and `/abm-workflow`.
- Hero no longer lists experience; traits only (sourced from the Obsidian vault).
- Role bullets moved off the main page into their detail pages to keep page 1 short.
- Now section and its flow diagram removed during the compression (content kept in
  `src/content/portfolio.js` under `now` if it should come back).
- Verified: lint + build clean, `/` + 4 role pages + ABM prerendered, E2E green,
  at page bottom only the closer is in view (step 04 no longer visible).

## v5 — two laptop screens (2026-09-18)
- Reference for density: dipankar.info (one dense prose intro carrying the facts,
  then one line per item). Copied the pattern, not the style.
- Page 1 is now 2.01 screens at 1440x900 (2040px → 1809px). How the space was won:
  - Hero: "Hey, I'm Siddham" + role + ONE dense paragraph (Clay hours, 300k/mo,
    15 SDRs, two products, all in prose) + one philosophy line. Bullet list gone.
  - Experience: 4 two-column rows, one-line summary + Read more / Show me proof.
  - Projects: only ABM workflow + Coding projects; the two SaaS live behind
    "Read more" at /coding-projects.
  - Closer: statement + copy email + LinkedIn/GitHub/X. No sub-line, no phone,
    no location.
  - All vertical padding tightened (sections, dark zone, job rows, closer).
- Content column widened from 50% to 65% (max 980px), hatch rails moved out.

## v6 — left-aligned top, subtle links, light projects (2026-09-18)
- Hero is left-aligned like dipankar.info: "Hey, I'm Siddham" → role → two short
  paragraphs → philosophy line. All lines start at the same x (was centred).
- No "Read more" buttons anywhere on page 1: company and project headings are the
  links — orange (#ff4d00), underline on hover.
- Projects section is now light, using the same two-column row pattern as
  Experience (dark zone removed). Only ABM workflow + Coding projects.
- Proof triggers removed from page 1 (Capvance, Gushwork); the screenshots live on
  each role's /work/[slug] page.
- Page 1 measures 1.72 screens at 1440x900 (1548px).
- Verified: lint + build clean, E2E green — heading links navigate to
  /work/capvance and /abm-workflow, proof overlays on /coding-projects open and
  close with ESC and the close button, closer panel renders dark with white text.

## v7 — image performance for Vercel (2026-09-18)
- All raster assets converted to WebP and downscaled: mesh 370KB -> 39KB (1400w),
  ABM diagram 631KB -> 93KB (1000w, was 5882px tall), proof images 1.3MB -> 132KB.
- Total image payload per page: home 39KB, /abm-workflow 50KB, /work/[slug] 26KB
  (measured over the wire with the Next optimizer).
- `next.config.mjs`: images.formats = avif + webp, minimumCacheTTL 31 days.
- ABM diagram no longer `priority` (lazy) so it stops blocking first paint.
- Old .jpg/.png originals deleted; references updated in globals.css, portfolio.js,
  and the ABM page. Requires a redeploy to take effect on Vercel.
- Images on /abm-workflow, /work/capvance and /work/gushwork are `priority`
  (emits <link rel="preload" as="image">, fetchPriority high) and the rest `eager`,
  so they fetch with the document instead of after layout. Measured: images complete
  in 85-263ms with 1-2 preload hints per page.

## v8 — screening answers into content (2026-09-19)
- Interview-style answers folded into the site, all in `src/content/portfolio.js`:
  - Clay: 200+ hours, rebuildable in-house; build split explained — CRM-writing
    workflows stay inside Clay (data integrity), custom agents/tools in Claude Code
    + Railway.
  - Volume: 800 → 10,000 emails a day depending on TAM and business state
    (~300k/mo at peak); LinkedIn across 8 sending accounts, ~10k connection
    requests to date.
  - Cold call: full system, 15 SDRs + 2 AEs, JustCall/SalesDialer + Clay + HubSpot;
    Slack reply alerts plus request channels that turn asks into tooling.
  - Analytics: new `/work/gushwork` block "Running the numbers" (dials → connects →
    conversations → meetings → shows → held, per-rep/per-list cuts, show-up rate
    and demos booked owned and moved) + new `/more` sections "How I run the numbers"
    and "What lives in Clay, what lives in code".
- Proofs pending: user will supply screenshots (Clay hours, Smartlead/Instantly,
  HeyReach requests, SDR analytics, Slack automations) — wire into `public/proofs/`
  and proof galleries/captions when received.
- Verified: lint + build clean (11 static pages incl. 4 role pages); `next start`
  render check greps confirmed all new copy on `/more` and `/work/gushwork`.

## Later (v2)
- Public OG image, custom domain metadataBase
- Optional portrait, per-proof routes for long-form case studies
- Analytics (Vercel) once deployed
