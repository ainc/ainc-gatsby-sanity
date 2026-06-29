# Awesome Inc — design tokens

Quick reference for humans and Cursor agents. **Source of truth:** `Awesome Inc Brand Book 2023.pdf` in this folder. **Code mirror:** `web/src/styles/variables.scss`.

Update this file when the brand book changes. Mark uncertain values with `TODO`.

---

## 1. Brand voice (writing)

| Rule | Guidance |
|------|----------|
| Company name | **Awesome Inc** — not "Awesome, Inc.", not "Awesome Incorporated", not "Awesome Inc." with a period |
| Tone | Direct, community-focused, builder/entrepreneur audience; avoid corporate jargon |
| Mission (short) | Create and grow high-tech startups via events, sponsorships, education, and shared workspace |

**Core values (wordmark font: Exo — do not use Exo for general UI body copy)**

- Be good · Be excellent · Be a friend · Be you

---

## 2. Color

### 2.1 Primary & secondary (brand book)

| Token | Hex | RGB | Usage |
|-------|-----|-----|--------|
| `red` | `#C12029` | 193, 32, 41 | Primary brand, CTAs, accents |
| `bright-red` | `#ED3742` | 237, 55, 66 | Emphasis, alerts, alternate CTA (verify RGB in PDF; hex is canonical) |
| `charcoal` | `#323232` | 50, 50, 50 | Text, dark sections, secondary buttons |
| `white` | `#FFFFFF` | 255, 255, 255 | Backgrounds, text on dark |

### 2.2 Greys (brand book)

| Token | Hex | SCSS variable (`variables.scss`) |
|-------|-----|----------------------------------|
| Grey 50 | `#939597` | `$brand-grey-dark` |
| Grey 20 | `#D1D2D4` | `$brand-grey` |
| Grey 10 | `#E6E7E8` | `$brand-grey-light` |
| Grey 5 | `#F1F1F2` | `$brand-grey-lightest` |

### 2.3 Implementation-only (in codebase, not in brand PDF)

| Token | Hex | SCSS | Notes |
|-------|-----|------|--------|
| Body text black | `#323333` | `$black-color` | Slight offset from charcoal; prefer `#323232` for new work |
| Button hover (primary) | `#651316` | `$button-hover-bg-color` | Legacy site; confirm with brand before changing |
| Button hover (bright) | `#BF2329` | — | Used on some pages (e.g. week-of-code) |
| Secondary button hover | `#5C5D5F` | — | `BrandButton.secondary` |
| Accent blue | `#55CBF3` | `$color-light-blue` | Limited use; not a core brand color |

### 2.4 APAX (sub-brand — only on APAX pages)

| Token | Hex | Name |
|-------|-----|------|
| Chartreuse | `#C9DB2B` | APAX primary |

### 2.5 Semantic UI mapping (for agents)

```text
--color-primary:        #C12029
--color-primary-hover:  #651316   /* codebase default; TODO confirm with brand */
--color-text:           #323232
--color-text-muted:     #939597
--color-background:     #FFFFFF
--color-background-muted: #F1F1F2
--color-border:         #D1D2D4
--color-on-dark:        #FFFFFF
```

---

## 3. Typography

### 3.1 Font families

| Role | Family | Notes |
|------|--------|--------|
| UI, marketing body, most headers | **Open Sans** | Loaded via `@fontsource/open-sans` in Gatsby |
| Wordmark, tagline, core values only | **Exo** | `@fontsource/exo` — **not** for paragraph text or workspace UI |

### 3.2 Brand book hierarchy

| Level | Family | Weight | Case | Letter-spacing |
|-------|--------|--------|------|----------------|
| Main headlines (H1) | Open Sans | Extrabold (800) | **UPPERCASE** | Wide tracking preferred (brand cites 0–100; site often uses ~0.04–0.08em) |
| Sub-headlines (H2) | Open Sans | Bold (700) | Title case | Wide tracking preferred |
| H2 alternate | Open Sans | Extrabold (800) | — | Tracking ~25pt ideal per brand book |
| Body | Open Sans | Regular (400) | Sentence case | ~25pt ideal per brand book |

### 3.3 Suggested scale for web (agents — tune per page)

| Element | Size (desktop) | Weight | Transform | Line-height |
|---------|----------------|--------|-----------|-------------|
| Hero title | `clamp(2.25rem, 5vw, 3.5rem)` | 700–800 | uppercase *or* sentence case for editorial layouts | 1.05–1.15 |
| Section title | `clamp(1.75rem, 3vw, 2.5rem)` | 700–800 | uppercase (default site) | 1.15 |
| Eyebrow / label | `0.75–0.85rem` | 600 | uppercase | 1.2 |
| Lead paragraph | `1.05–1.2rem` | 400 | none | 1.55–1.7 |
| Body | `1rem` | 400 | none | 1.6–1.75 |
| Small / caption | `0.75–0.85rem` | 400–600 | none | 1.4 |

**Workspace pages:** Use **uppercase extrabold** main headlines and section titles; sub-headings (membership band titles, pillar titles) use **bold title case**. CTAs use `BrandButton`.

---

## 4. Logo

| Rule | Detail |
|------|--------|
| Clear space | ≥ height of the “A” in Awesome around the mark |
| Minimum size | Avoid use below ~1 inch print equivalent on web without design review |
| Don’ts | No stretching, rotation, effects, partial resizing, or type changes |
| Variants | Primary (light/dark bg), flat secondary, one-color tertiary, ACE logo — see PDF |

`TODO`: Add export paths if you store SVG/PNG in `.cursor/brand/logos/` (gitignored).

---

## 5. Buttons & links

### 5.1 Primary (`BrandButton` default)

| Property | Value |
|----------|--------|
| Background | `#C12029` (`$brand-color`) |
| Text | `#FFFFFF` |
| Hover background | `#651316` (codebase) |
| Font | Open Sans, uppercase common on site |
| Transition | `0.3s` (`$button-transition-duration`) |

### 5.2 Variants (see `BrandButton.scss`)

| Class | Background | Text | Hover bg |
|-------|------------|------|----------|
| default | Red | White | `#651316` |
| `secondary` | Charcoal `#323232` | White | `#5C5D5F` |
| `white--dark-text` | White | Charcoal | Grey 20 |
| `white--red-text` | White | Bright red | Grey 20 |

### 5.3 Editorial / workspace CTA pattern (new pages)

| Variant | Background | Border | Text |
|---------|------------|--------|------|
| Primary filled | `#C12029` | `#C12029` | White |
| Ghost on dark | transparent | `rgba(255,255,255,0.65)` | White |
| Ghost on light | transparent | `#323232` | Charcoal |

`TODO`: Confirm ghost/outline buttons with brand if used heavily.

---

## 6. Layout & spacing

Not specified in brand book — **project conventions**:

| Token | Value | Notes |
|-------|-------|--------|
| Max content width | `1140px` | Matches Bootstrap `$container-lg` |
| Section padding (vertical) | `clamp(4rem, 8vw, 6.5rem)` | Workspace editorial sections |
| Grid gutter | `30px` | `$grid-gutter-width` |
| Breakpoints | 480 / 768 / 992 / 1200 px | `$screen-xs` … `$screen-lg` |

---

## 7. Imagery & photography

`TODO` — add when photo album is local:

| Topic | Guidance |
|-------|----------|
| Workspace hero | Prefer real space photography; current asset: `web/src/images/ainc-workspace-header-3.png` |
| People | Authentic, diverse, community/event context |
| Avoid | Stock that conflicts with downtown Lexington / brick building identity |

Place reference JPGs in `.cursor/brand/photos/` (gitignored).

---

## 8. Components (site-specific)

| Component | Path | Notes |
|-----------|------|--------|
| Primary button | `web/src/components/UI/BrandButton/` | Use for main CTAs |
| Title | `web/src/components/UI/Title/` | Often uppercase + red |
| Amenities row | `web/src/components/Amenities/` | Icon + label, animated on scroll |
| Workspace editorial system | `web/src/pages/workspace/shared/` | Spark-style sections; map colors to §2 |

---

## 9. Integrations (placeholders)

| Action | Status | Target |
|--------|--------|--------|
| Book a tour | Placeholder | `#zoho-book-tour` → `web/src/pages/workspace/constants/ctaPlaceholders.js` |
| Day pass | Placeholder | `#zoho-day-pass` |
| Conference room | Placeholder | `#zoho-schedule-conference-room` |
| Office waitlist | Placeholder | `#zoho-private-office-waitlist` |
| Book events | Placeholder | `#zoho-book-events` |
| Contact | Placeholder | `#workspace-contact` / Zoho embed |

---

## 10. Checklist for agents

When building or restyling a page:

- [ ] Use **Open Sans** only (not Exo) for UI copy
- [ ] Primary red `#C12029`, charcoal `#323232`, greys from §2
- [ ] Write **Awesome Inc** correctly (§1)
- [ ] Prefer existing `variables.scss` / `BrandButton` before inventing new colors
- [ ] Pull photography from `.cursor/brand/photos/` or Sanity when available
- [ ] Zoho CTAs: update `ctaPlaceholders.js`, not hardcoded production URLs
- [ ] Note any intentional deviation from this doc in the PR or commit message

---

## 11. Changelog

| Date | Change |
|------|--------|
| 2026-05-19 | Initial tokens doc from Brand Book 2023 + `variables.scss` |
| 2026-05-19 | Workspace pages aligned to brand book (typography, colors, BrandButton) |
