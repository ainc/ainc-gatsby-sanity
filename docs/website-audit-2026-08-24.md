# awesomeinc.org website audit

**Date:** 2026-08-24  
**Scope:** Live production site ([https://awesomeinc.org](https://awesomeinc.org)) plus the `web/` Gatsby codebase.  
**Purpose:** Intern-ready bug list. **Do not treat this document as a fix.** Each item is a ticket.

Verified by hitting the live site and matching the failing behavior to source. Cosmetic preferences are omitted unless something is actually broken.

Existing GitHub issue to coordinate with:

- [#573 Blog hover link broken](https://github.com/ainc/ainc-gatsby-sanity/issues/573) — already assigned. Do not duplicate.

---

## How to use this list

Pick one ticket. Reproduce it on production first, then in local `web/` (`yarn dev`). Open a GitHub issue from the ticket (repo workflow requires issues before PRs). Keep fixes small and focused.

Suggested first tickets for newer interns: **S** items. Save **L** items for someone comfortable with SEO / forms / Gatsby.

---

## Critical

### AUDIT-01 — Salesforce application form never submits

| | |
|---|---|
| **Size** | S |
| **URL** | https://awesomeinc.org/salesforce/apply/ |
| **File** | `web/src/pages/salesforce/apply/index.js` |

**Repro**

1. Open `/salesforce/apply/`.
2. Fill First Name / Last Name / Email and click Submit.
3. View page source and find the `<form>` tag.

**Expected:** Form POSTs to the Zoho Salesforce application endpoint (same pattern as `/bootcamp/apply/`).  
**Actual:** The form is `<form src="https://forms.zohopublic.com/...">`. HTML forms use `action`, not `src`. There is no `method="POST"`. Submit does not send the application to Zoho.

Also: `zc_gad` is hardcoded to `"undefined"`, and `zf_redirect_url` is empty (no confirmation page after a successful submit).

---

### AUDIT-02 — `/bootcamp/` is hidden from search engines and titled "Countdown Timer"

| | |
|---|---|
| **Size** | M |
| **URL** | https://awesomeinc.org/bootcamp/ |
| **Files** | `web/src/pages/bootcamp/Components/CountdownTimer/CountdownTimer.js`, `web/src/components/seo.js`, plus other bootcamp child components that render `<SEO>` |

**Repro**

1. Open https://awesomeinc.org/bootcamp/.
2. View page source.
3. Check `<title>` and `<meta name="robots">`.

**Expected:** Title about the Web Developer Bootcamp. Page is indexable.  
**Actual (live):**

- `<title>Awesome Inc \| Countdown Timer</title>`
- `<meta name="robots" content="noindex, nofollow">`

`CountdownTimer` (and `ProfileCard`, `AlumniAvatarCard`) each render their own `<SEO title="..." meta={[{ name: "robots", content: "noindex, nofollow" }]} />`. React Helmet last-write-wins, so a child widget overwrites the real page title **and** tells Google not to index the flagship bootcamp page.

---

### AUDIT-03 — `/weekofcode/` is hidden from search engines and titled "Project Card"

| | |
|---|---|
| **Size** | M |
| **URL** | https://awesomeinc.org/weekofcode/ |
| **Files** | `web/src/pages/weekofcode/Components/ProjectCard.js`, `web/src/pages/weekofcode/Components/InformationCard.js` |

**Repro:** Same as AUDIT-02 on `/weekofcode/`.

**Expected:** Title about Week of Code / kids camps. Page is indexable.  
**Actual (live):** `<title>Awesome Inc | Project Card</title>` and `noindex, nofollow`.

Same anti-pattern as AUDIT-02. Fix both as one intern project if possible (shared rule: only `Layout` / page-level SEO should set title/robots).

Other child components with the same landmine (may or may not win Helmet on a given page):

- `web/src/pages/events/5across/HorizontalButtons.js` (`title="5Across Horizontal Buttons"`, noindex)
- `web/src/pages/workspace/Components/SeeTheSpace/SeeTheSpace.js`
- `web/src/pages/program/ProgramLinkTree.js`

---

### AUDIT-04 — `robots.txt` 404s

| | |
|---|---|
| **Size** | S |
| **URL** | https://awesomeinc.org/robots.txt |
| **Files** | `web/robots.txt` (exists, not deployed), Gatsby `static/` convention |

**Repro**

```
curl -sI https://awesomeinc.org/robots.txt
```

**Expected:** `200` and a text `robots.txt` (the file already exists in the repo).  
**Actual:** `404` with `content-type: text/html`. Google gets the site 404 page instead of crawl rules. The sitemap line in `web/robots.txt` never reaches crawlers.

The file lives at `web/robots.txt`. Gatsby only copies files from `web/static/` into the built site.

---

### AUDIT-05 — Newsletter signup confirmation page does not exist, and redirect is overwritten

| | |
|---|---|
| **Size** | M |
| **URLs** | Footer "Newsletter Sign Up" on any page; also `Layout/Newsletter` if used |
| **Files** | `web/src/components/Footer/Footer.js`, `web/src/components/Layout/Newsletter/Newsletter.js` |

**Repro**

1. Open https://awesomeinc.org/confirmation/newsletter → **404**.
2. In `Footer.js`, find both hidden inputs named `zf_redirect_url`.

**Expected:** After signup, user lands on a confirmation page.  
**Actual:**

- First hidden field points to `https://www.awesomeinc.org/confirmation/newsletter` (page does not exist).
- Second hidden field is `zf_redirect_url` with an **empty** value, which overrides the first. Zoho will not redirect even if the page is created.
- Email field is `type="text"` (not email). No `required` attributes. Phone field `<label for="Company">`.

Same duplicate-redirect bug is copied in `Newsletter.js`.

---

## High

### AUDIT-06 — Open Graph image is literally `[object Object]` on every page

| | |
|---|---|
| **Size** | S |
| **URL** | Any page (view source) |
| **File** | `web/src/components/seo.js` |

**Repro:** View source on https://awesomeinc.org/ and find `og:image`.

**Expected:** A public image URL for social shares.  
**Actual:** `content` is set to `{ favicon }` (a JS object), so the meta value becomes `[object Object]`. Facebook/LinkedIn/Slack previews have no image.

---

### AUDIT-07 — 404 and Thanks pages send "Accelerate your startup" and "Software Development" to `/learn`

| | |
|---|---|
| **Size** | S |
| **URLs** | https://awesomeinc.org/this-page-does-not-exist-audit-404 , https://awesomeinc.org/thanks/ |
| **Files** | `web/src/pages/404.js`, `web/src/pages/thanks/index.js` |

**Repro:** Open a nonsense URL. Click "Accelerate your startup" and "Software Development".

**Expected:** Startup card → `/fellowship` (or idea/5 Across). Software card → https://apaxsoftware.com/.  
**Actual:** Both go to `/learn`.

**Thanks page extra:** Three cards use missing images:

- https://awesomeinc.org/images/student-learning-to-code-panel.jpg → 404
- https://awesomeinc.org/images/awesome-inc-space-panel.jpg → 404

Startup and Software cards also reuse the "learn to code" icon instead of their own.

---

### AUDIT-08 — Bootcamp FAQ "Intro to Web Development" link 404s

| | |
|---|---|
| **Size** | S |
| **URL** | https://awesomeinc.org/bootcamp/ (FAQ accordion) |
| **File** | `web/src/pages/bootcamp/index.js` |

**Repro:** Open the FAQ item about prework / Intro to Web Development. Click the in-paragraph link.

**Expected:** `/intro-to-web-development/`.  
**Actual:** `href="intro-to-web-development"` (no leading slash) resolves to `/bootcamp/intro-to-web-development` → **404**.

---

### AUDIT-09 — Interview confirmation links to a blog slug that 404s

| | |
|---|---|
| **Size** | S |
| **URL** | https://awesomeinc.org/confirmation/interview/ |
| **File** | `web/src/pages/confirmation/interview/index.js` |

**Repro:** Click "Want to know what we'll talk about on our call? Check out our blog here!"

**Expected:** https://awesomeinc.org/blog/what-we-look-for-in-a-bootcamp-student/ (this URL **200**s; it is used correctly on `/bootcamp/`).  
**Actual:** https://www.awesomeinc.org/blog/what-we-look-for-bootcamp-student → **404** (missing `in-a`).

Same page: `useEffect` has no dependency array; `name` / times default to `false`. Visiting the page without Calendly query params shows "Thank you," with empty name and a bogus date from `new Date(false)`.

---

### AUDIT-10 — Coding Club preview "Register" jumps to a removed `#join` section

| | |
|---|---|
| **Size** | S |
| **URLs** | https://awesomeinc.org/coding-club-preview/ → `/learn/youth#join` |
| **Files** | `web/src/pages/coding-club-preview/index.js`, `web/src/pages/learn/youth/index.js` |

**Repro:** Click "Register to continue" on a project row.

**Expected:** A working registration / waitlist target.  
**Actual:** `#join` on `/learn/youth` is commented out (`{/* <section id='join'>`). User lands at the top of Youth with no join form.

---

### AUDIT-11 — Workspace nav hashes are dead after the workspace restructure

| | |
|---|---|
| **Size** | S |
| **URLs** | Header Workspace → "Office Space"; homepage / Sanity links to `#tour` |
| **Files** | `web/src/components/Header/Header.js`, `web/src/pages/workspace/index.js` |

**Repro**

1. Desktop: hover Workspace → click "Office Space" (`/workspace#become-a-member`).
2. Confirm there is no `id="become-a-member"` and no `id="tour"` on the new workspace page.

**Expected:** Jump to membership / tour content, or go to `/coworking`, `/private-office`, etc.  
**Actual:** Page loads at the top. Anchors were left over from the old workspace page.

Desktop Workspace dropdown also still omits the new pages (`/coworking`, `/private-office`, `/conference-rooms`, `/book-events`, `/virtual-office`, `/parking`) and still uses Calendly for tours while the workspace pages use Zoho Bookings.

---

### AUDIT-12 — Fellowship portfolio bottom CTAs do nothing

| | |
|---|---|
| **Size** | S |
| **URL** | https://awesomeinc.org/fellowship/portfolio/ |
| **File** | `web/src/pages/fellowship/portfolio/index.js` |

**Repro:** Scroll past the company cards. Click the second "Apply Now" and "Perks" `BrandButton`s.

**Expected:** Apply opens the Zoho modal (like the buttons above). Perks goes to `/fellowship/perks`.  
**Actual:** Buttons have no `href` / `onClick`. HOME breadcrumb is `href="#"`.

---

### AUDIT-13 — Book Event Space CTA is a dead hash

| | |
|---|---|
| **Size** | S |
| **URL** | https://awesomeinc.org/book-events/ and workspace hub memberships |
| **File** | `web/src/workspace/constants/ctaPlaceholders.js` |

**Repro:** Click "Book Event Space" / related CTA.

**Expected:** Opens a booking form or contact path.  
**Actual:** `bookEventSpace.embedUrl` is `""` and `href` is `#zoho-book-events` (no such id). Button goes nowhere. `contactUs.embedUrl` is also empty (used as a fallback on event offerings).

---

### AUDIT-14 — Desktop vs mobile "Learn To Code" menus advertise different programs

| | |
|---|---|
| **Size** | S |
| **URL** | Any page, header |
| **File** | `web/src/components/Header/Header.js` |

**Repro:** Compare desktop hover menu vs mobile accordion for "Learn To Code".

**Expected:** Same destinations on both viewports.  
**Actual:**

| Desktop | Mobile |
|---|---|
| Adult Intro Course (`/intro-to-web-development`) | Youth Courses |
| Kids Camps (`/weekofcode`) | Adult Courses |
| | Kids Camps |
| | Salesforce Career Accelerator |

Desktop is missing Youth, Adult Courses, and Salesforce. Mobile is missing the Adult Intro Course page.

---

### AUDIT-15 — Unsubscribe always "succeeds" and cannot report Zoho errors

| | |
|---|---|
| **Size** | M |
| **URL** | https://awesomeinc.org/unsubscribe/ |
| **File** | `web/src/pages/unsubscribe/index.js` |

**Repro:** Submit any syntactically valid email.

**Expected:** Request reaches Zoho unsubscribe; user sees a real success/failure.  
**Actual:** `fetch(..., { mode: "no-cors" })` returns an opaque response (`status` 0). The code treats `status != 500` as success, then `window.location.href = "/"`. User is bounced home even if Zoho never received the request. Success flash is never readable.

---

## Medium

### AUDIT-16 — Contact and Idea Zoho iframes pass `gclid=undefined`

| | |
|---|---|
| **Size** | S |
| **URLs** | https://awesomeinc.org/contact/ , https://awesomeinc.org/idea/ |
| **Files** | `web/src/pages/contact/index.js`, `web/src/pages/idea/index.js` |

Iframe `src` ends with `?gclid=undefined`. That string is stored in CRM as if it were a real Google Click ID. Youth waitlist (commented) has the same pattern.

---

### AUDIT-17 — Bootcamp apply form has no post-submit redirect and hardcodes GCLID as `"undefined"`

| | |
|---|---|
| **Size** | S |
| **URL** | https://awesomeinc.org/bootcamp/apply/ |
| **File** | `web/src/pages/bootcamp/apply/index.js` |

`zf_redirect_url` is empty (comment in code even says to fill it). `zc_gad` default is `"undefined"`. After apply, user stays on a filled form with no confirmation. `/confirmation/bootcamp/` already exists and is unused here.

---

### AUDIT-18 — Page titles are hard-truncated with "..."

| | |
|---|---|
| **Size** | S |
| **URLs** | https://awesomeinc.org/about/ , https://awesomeinc.org/workspace/ , https://awesomeinc.org/events/5across/ |
| **File** | `web/src/hooks/usePageTitle.js` |

**Actual (live):** `Awesome Inc | Be Awesome | About Us | Core Values | What We Do | Awesom...`

Any Sanity / explicit title over 60 characters is sliced and given an ellipsis. That is the tab title and `og:title`. Interns should confirm desired titles with staff, then stop truncating mid-word (or store shorter titles in Sanity `pageTitles`).

---

### AUDIT-19 — India pages show leftover placeholder title and stale 2023 copy

| | |
|---|---|
| **Size** | S |
| **URLs** | https://awesomeinc.org/india/ , `/india/about/`, `/india/faq/` |
| **Files** | `web/src/components/IndiaLayout/IndiaLayout.js`, `web/src/pages/india/index.js` |

**Actual:** Extra `<title> | This will be dynamic later</title>`. Homepage copy still says **"Starting Early 2023"** (today is 2026). Confirm with staff whether the India program is still active before rewriting.

---

### AUDIT-20 — Mobile nav accordion state is corrupted by a localStorage `useEffect`

| | |
|---|---|
| **Size** | M |
| **URL** | Any page, viewport &lt; `sm` |
| **File** | `web/src/components/Header/Header.js` |

`useState` correctly reads `localStorage.navbar_selected`. A following `useEffect` does:

```js
const navbar_selected = window.localStorage.getItem("navbar_selected") !== null; // boolean
setActive(JSON.parse(navbar_selected !== null ? navbar_selected : ""));
```

That parses the boolean `true` → sets `active` to `true` instead of `"Learn To Code"` / `"Startups"` / etc. Accordion restore never matches. `open` is also persisted across visits, so a submenu can reopen on the next page load.

---

### AUDIT-21 — 5 Across banner date filter compares a string to an array

| | |
|---|---|
| **Size** | M |
| **URL** | Every page except `/bootcamp/` (sitewide banner) |
| **File** | `web/src/components/Banner/Banner.js` |

`useStaticQuery` declares `$currentDate` but static queries cannot receive page-context variables, so the GraphQL `gte` filter is not doing what authors think.

Then: `currentDate > upcoming` compares a date **string** to an **array**. If that expression is wrong and `upcoming` is empty, `upcoming[0].linkToEvent` will throw and take down the banner (and possibly the layout) on every page.

---

### AUDIT-22 — Event cards crash if Sanity picture is missing; Eventbrite modal title is undefined

| | |
|---|---|
| **Size** | M |
| **URLs** | https://awesomeinc.org/events/ , homepage featured event |
| **Files** | `web/src/pages/events/index.js`, `web/src/components/Event/Event.js`, `web/src/components/EventBriteModal/EventBriteModal.js` |

`events/index.js` does `edge.node.picture.asset.gatsbyImageData` with no optional chaining. One event without an image 500s the page.

`EventBriteModal` reads `props.children.props.name` / `.date`, but `Event` wraps children in a `<div>`, so the modal title/aria-label become `undefined - undefined`.

Keyboard handler on the inner div `preventDefault`s Enter/Space and never opens the modal (the outer `<button>` does; the inner handler is dead / conflicting).

---

### AUDIT-23 — 5 Across page assumes there is always a previous winner

| | |
|---|---|
| **Size** | S |
| **URL** | https://awesomeinc.org/events/5across/ |
| **File** | `web/src/pages/events/5across/index.js` |

```js
const fiveAcrossWinners = data.allSanityFiveAcrossWinners.edges || {};
const previousWinner = fiveAcrossWinners[fiveAcrossWinners.length - 1].node;
```

If the query returns no winners, this throws (`undefined.node`). `|| {}` is also the wrong fallback for a list (should be `[]`). Page is 200 today only because CMS has data.

---

### AUDIT-24 — Interview confirmation and several pages log PII / debug objects in production

| | |
|---|---|
| **Size** | S |
| **Files** | `web/src/pages/confirmation/interview/index.js`, `web/src/pages/fellowship/index.js`, `web/src/pages/unsubscribe/index.js`, `web/src/components/Accordion/AccordionCustom.js`, `web/src/components/SocialMediaIcons/SocialMediaIcons.js`, `web/src/pages/learn/adultCourses.js` |

Interview page `console.log`s invitee email. Fellowship `console.log`s KPI payload. These run for every visitor.

---

### AUDIT-25 — `/vote` and `/5across/vote` redirect to a Mentimeter URL that returns 403

| | |
|---|---|
| **Size** | S |
| **URLs** | https://awesomeinc.org/vote , https://awesomeinc.org/5across/vote |
| **File** | `web/gatsby-node.js` |

Redirect target `https://www.menti.com/al1qz8js1e1j` currently returns **403**. Confirm with events staff whether voting is still live; update or retire the redirects.

---

### AUDIT-26 — Week of Code FAQ uses `http://` and a very old Google Form shortlink

| | |
|---|---|
| **Size** | S |
| **URL** | https://awesomeinc.org/weekofcode/ (FAQ) |
| **File** | `web/src/pages/weekofcode/index.js` |

- Parking map: `http://www.awesomeinc.org/parking/` (works via redirects; should be `https://awesomeinc.org/parking/`).
- Scholarship: `https://goo.gl/forms/sZpc22S1jdeoZ7Fk2` (legacy goo.gl). Confirm the form is still the Verizon scholarship form and not an abandoned one.
- Laptop rental Square link still resolves, but confirm $25/day copy is current.

---

### AUDIT-27 — Conference room pages do not deep-link a specific room

| | |
|---|---|
| **Size** | S |
| **URL** | https://awesomeinc.org/conference-rooms/ |
| **File** | `web/src/pages/conference-rooms/index.js` |

Each room has `bookingId: ""` and a `TODO`. Every "Schedule" button opens the generic conference-room booking, not Lee Todd / 350 / 344. Fallback works; room-specific booking does not.

---

### AUDIT-28 — Public workspace-info page prints the guest Wi‑Fi password

| | |
|---|---|
| **Size** | S (content / security review) |
| **URL** | https://awesomeinc.org/workspace-info/ |
| **File** | `web/src/pages/workspace-info/index.js` |

Network `AWESOMENET` / password `awesomestuff` is on a publicly indexed page. If this is only meant for in-building QR codes, it should be noindexed or moved. Confirm with the space team before changing.

Same page: `FAQCard` concatenates objects into `linkParagraph` (`linkParagraph += { element }`) — dead / broken helper, even though some answers still render via the JSX branch.

---

## Low

### AUDIT-29 — Hall of Fame href has a leading space

| | |
|---|---|
| **Size** | S |
| **File** | `web/src/components/Header/Header.js` |

`href=" https://entrepreneurhof.com/"` (desktop and mobile). Browsers usually trim it; still invalid HTML. One occurrence also has `rel="_noopener"` (underscore) instead of `noopener`.

---

### AUDIT-30 — Fellowship page leftover TODO (SVG colors) and `console.log`

| | |
|---|---|
| **Size** | S |
| **URL** | https://awesomeinc.org/fellowship/ |
| **File** | `web/src/pages/fellowship/index.js` |

File header TODO: SVG icon colors render incorrectly. `console.log(fellowshipKPIs)` on every load.

---

### AUDIT-31 — Footer / newsletter forms use invalid React DOM attributes

| | |
|---|---|
| **Size** | S |
| **Files** | `web/src/components/Footer/Footer.js`, `web/src/components/Layout/Newsletter/Newsletter.js`, blog subscribe modals |

`class` instead of `className`, `for` instead of `htmlFor`, `maxlength` / `enctype` / `accept-charset`. React warns; some attributes never reach the DOM. Labels do not point at inputs (`for="First Name"` vs `name="Name_First"`). Duplicate `id="form"` if more than one newsletter form mounts.

---

### AUDIT-32 — Duplicate HTTP redirects (www → apex)

| | |
|---|---|
| **Size** | S |
| **URLs** | `http://www.awesomeinc.org/` → `https://www.awesomeinc.org/` → `https://awesomeinc.org/` |

Two hops. Prefer a single hop: HTTP and `www` both go directly to `https://awesomeinc.org/`. Many internal links still hardcode `www.awesomeinc.org`, so users bounce through the extra redirect.

---

### AUDIT-33 — `gatsby-node` podcast error handler references undefined `reporter`

| | |
|---|---|
| **Size** | S |
| **File** | `web/gatsby-node.js` (`createPodcastPages`) |

`reporter.panicOnBuild(...)` is called but `reporter` is not in the function arguments. If the Anchor RSS query fails, the build throws `ReferenceError` instead of a clear GraphQL error.

---

### AUDIT-34 — Production `console.log` in Gatsby config

| | |
|---|---|
| **Size** | S |
| **File** | `web/gatsby-config.js` |

`console.log(process.env.NODE_ENV)` runs on every build. Harmless, noisy.

---

## Already tracked

| Issue | Notes |
|---|---|
| [#573 Blog hover link broken](https://github.com/ainc/ainc-gatsby-sanity/issues/573) | Blog card image/hover area is not a link; only title, book icon, and "Read More" navigate. Assigned. Do not file a second issue. |

---

## Suggested intern batches

1. **Forms (high impact):** AUDIT-01, AUDIT-05, AUDIT-15, AUDIT-16, AUDIT-17  
2. **SEO (do together):** AUDIT-02, AUDIT-03, AUDIT-04, AUDIT-06, AUDIT-18  
3. **Broken links:** AUDIT-07, AUDIT-08, AUDIT-09, AUDIT-10, AUDIT-11, AUDIT-25, AUDIT-26  
4. **Workspace / Fellowship CTAs:** AUDIT-12, AUDIT-13, AUDIT-14, AUDIT-27  
5. **Hardening:** AUDIT-20, AUDIT-21, AUDIT-22, AUDIT-23, AUDIT-24  

---

## Out of scope / not filed as bugs

- Pages that 301 to a trailing slash (normal Netlify/Gatsby).
- `/confirmation/newsletter` 404 is filed (AUDIT-05), not a separate mystery route.
- Dummy private-office data in `web/src/workspace/data/dummyPrivateOffices.js` is **not** rendered on the live `/private-office/` page.
- Unsplash notes in workspace image README are asset-replacement work, not functional bugs.
- Wi‑Fi password (AUDIT-28) needs a staff decision before anyone "fixes" it.
