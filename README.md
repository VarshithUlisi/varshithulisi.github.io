# Varshith Sai Ulisi — personal website

A complete static Astro site with an impact-first editorial homepage, autobiography, initiative case studies, leadership, searchable Journal and Recognition, timeline, Contact, source notes, RSS, sitemap, JSON-LD, and GitHub Pages deployment.

## Run locally

Use Node 22.19 or newer (Node 22 LTS is used in CI).

```sh
npm ci
npm run dev
```

Open the local address printed by Astro. For a production preview:

```sh
npm run check
npm run build
npm test
npm run preview
```

The `dist/` directory contains the compiled static website. Use a web server, rather than double-clicking HTML files, because site paths are root-relative.

## Deploy to GitHub Pages

The site is configured for the account homepage at `https://varshithulisi.github.io/`, using the repository `VarshithUlisi/varshithulisi.github.io`. Push changes to `main` to run the checks and deploy through GitHub Actions. In repository Settings → Pages, the build source must be GitHub Actions.

The workflow defaults to this address and `/` as the base path. To reuse the site elsewhere, set repository Actions variables `SITE_URL` (HTTPS origin, without a repository path) and `BASE_PATH` (`/REPOSITORY` for a project site, `/` for an account site). Update the default in `astro.config.mjs` and the verifier when moving permanently.

For a custom domain, configure it in GitHub Pages, set `SITE_URL` to the HTTPS domain, set `BASE_PATH=/`, and rebuild. Add the domain to `public/CNAME` if needed by your GitHub Pages setup. No paid hosting or server is required.

Deployment reference: [Astro’s GitHub Pages guide](https://docs.astro.build/en/guides/deploy/github/).

## Publish from the writing studio

Open [the writing studio](https://varshithulisi.github.io/studio/), also linked as **Write a post** in the footer. Write a title, introduction, and article. Choose a category, publication date, and optional event date or related project. The editor saves drafts in this browser and shows a basic reading preview.

Select **Prepare to publish** to copy the complete post. Select **Open GitHub to publish**, paste into the file editor, then choose **Commit changes** to `main`. GitHub sign-in and repository access are required for that final step. The public dashboard itself does not grant publishing access or hold credentials. Existing posts have **Edit on GitHub** links.

Photo uploads use the linked GitHub images folder; enter `images/filename.jpg` and meaningful alt text after uploading. **Download draft** exports Markdown with `draft: true` to avoid accidental publication. Browser drafts do not sync between devices; download important drafts as a backup. Preparing a post does not publish it. Future-dated posts require a build on or after the publication date; no scheduling service is implied.

## Publish a journal entry manually

Create `src/content/journal/my-new-story.md` in GitHub’s editor or locally:

```yaml
---
title: "An accurate title"
description: "A short account of what the reader will learn."
published: "2026-11-12"
eventDate: "2026-11-10" # Optional: only an actual, confirmed event date
eventLabel: "November 10, 2026"
category: "Events"
sourceNote: "Based on the event program and my participation; public source linked below."
related: "uplift-academy-ohio"
draft: true
featured: false
---

## What happened

Write the account. Add links to public evidence and describe your own role.
```

Change `draft` to `false` when the article is ready. Draft defaults to true. Future publication dates remain excluded until a build runs on or after that date. There is no scheduled build by default: publishing is triggered by a push or manual workflow run. The homepage, Journal, RSS, sitemap, related project links, and timeline update at build time. Confirmed `eventDate` entries join the dated timeline; undated entries stay in a separate section. Publication date is never substituted for event date.

Categories: Events, Speaking, Presentations, Community Service, Leadership, Ventures, Research, Personal Reflections. Category and text searches work together; all stories remain available without JavaScript.

For photos, place permission-cleared images in `public/images/`, and add `image: "images/filename.jpg"` plus meaningful `imageAlt`. Images are optional. Avoid identifying children without permission. For inline links/assets in Markdown, use relative paths that work under the repository base; a hero image uses the base-aware helper automatically. Attach permission-cleared slides under `public/files/` and link relatively from the article. Do not upload the brag sheet.

## Edit content

- `src/data/projects.json`: six case studies and evidence notes.
- `src/data/chapters.json`: six autobiography chapters.
- `src/content/journal/`: five source-adapted opening entries.
- `src/pages/recognition.astro`: award records and status labels.
- `src/lib/site.ts`: public contact email, name, path helpers.
- `public/biography.txt`: downloadable short and professional bios.
- `src/styles/global.css`: editorial layout, responsive styles, reduced motion, print styles.
- `src/pages/evidence.astro`: public evidence and privacy policy for the content.

The supplied reference screenshot informs whitespace, rules, and editorial hierarchy. The design is an original Astro implementation using plain CSS, not a bundled AstroPaper fork or Tailwind dependency. No external fonts, tracking scripts, cookies, stock photos, invented event images, fake testimonials, or nonfunctional forms are included.

## Content review

See `CONTENT-REVIEW.md` for unresolved source questions. The site distinguishes self-reported facts from independent verification, planned work from completed work, and participation from measured outcomes. Do not remove evidence labels until the relevant records have been checked. Exact speaking dates, some award dates, and event photos were not supplied. Full childhood/family history was not supplied and is not invented.

The source PDF and reference screenshot are intentionally excluded from this repository and from the downloadable archive. Contact uses the email explicitly provided for publication. The LinkedIn URL was explicitly supplied by Varshith.

## Accessibility and verification

Semantic landmarks, one h1 per page, visible keyboard focus, a skip link, native mobile navigation, meaningful link text, reduced-motion support, responsive layouts, and no essential JavaScript dependence. Search uses live result counts and empty states. `npm test` checks generated routes, internal links and anchors, JSON-LD validity, RSS, base-path handling, and selected privacy exclusions. See `VALIDATION.md` for actual test results and limits.

## Personal visual edition

The supplied portrait appears on Home, About, and Contact. Original abstract SVG illustrations accompany the featured initiatives; an accessible four-step diagram explains the approach to the work. Scroll reveals, hover transitions, and a reading-progress indicator respect reduced-motion preferences. Content remains visible without JavaScript. The LinkedIn profile also appears in Person structured data.

## Editorial strategy update

The studio includes 12 article prompts from the supplied strategy. They are not published posts; replace prompts with authentic writing and confirmed event details. `/resources/` contains biographies, the supplied portrait, project summaries and a printable public profile. `/resources/profile/` supports Print / Save as PDF. The profile is a concise public summary, not an independently verified résumé.

## Blog and events

Blog lives at `/journal/` to preserve existing article addresses. `/events/` automatically includes published posts with an event date or an Events, Speaking, or Presentations category. Use `/studio/?type=event` to start an event entry. Event date, venue, and publication date are separate fields. Upload real photos through the studio’s GitHub images-folder link, then use a cover path or Markdown image in the article. Featured cover photos also appear on the homepage. The supplied logo is preserved unchanged in the header and PNG favicon.
