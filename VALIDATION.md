# Validation — November 11, 2026

- Astro type/content check: 28 files, zero errors, warnings, or hints.
- Final static build: 22 HTML pages, six project accounts, five journal entries.
- Generated-site checks: 679 internal links/anchors, required routes, valid JSON-LD, RSS, and selected privacy exclusions passed.
- GitHub Pages repository-path build tested with `/varshith`; links, feed, and generated routes passed. The production build uses `/` and `https://varshithulisi.github.io`.
- Desktop and phone browser review: homepage and About layouts inspected; narrow homepage confirmed at a measured 320 CSS-pixel viewport with no horizontal overflow.
- Native mobile menu opened and navigated successfully.
- Journal category filter returned one Speaking entry; combined search returned the expected empty state.
- Recognition search for Business Ethics returned two entries.
- Contact destination confirmed in generated HTML as the explicitly supplied email.
- Downloadable biographies verified at 75 and 250 words.
- Private source PDF and screenshot excluded from site and archive. No event photographs were invented.

Builds were checked with Node 22.14 and Node 24.22.1; use Node 22.19+ to satisfy all installed dependency engine requirements. The GitHub workflow uses the current Node 22 release.

Deployment target: `VarshithUlisi/varshithulisi.github.io`, configured for GitHub Actions. Live deployment is verified separately after the workflow completes. Browser checks are representative, not a formal WCAG certification or full screen-reader audit. External project links and self-reported achievements have not been independently verified. See CONTENT-REVIEW.md for content questions.

## Writing studio update — November 12, 2026

The browser editor supports multiple saved drafts, basic reading preview, optional event dates, related initiatives, cover-photo metadata, download, and GitHub publication preparation. Browser checks verified draft restoration after reload and generation of the correct GitHub new-file URL. No test post was committed. Serializer tests cover quoted/multiline frontmatter, safe slugs, draft exports, and optional fields. The dashboard is excluded from the sitemap and marked noindex. Final publication is through GitHub, not directly from the public page.

## November 12 content strategy update

Astro check: zero errors or warnings. Production build: 25 pages. Internal checks: 808 links, structured data, privacy exclusions and five RSS entries passed. Studio serialization tests passed. Browser checks confirmed prompt loading, unfinished-prompt publication guard, article preview, clipboard/GitHub handoff and deletion of the temporary browser test draft. Resources page visually reviewed. No test article was published.

## Portfolio and brand refresh

Broadened portfolio copy using the existing résumé source. Added Blog and Events navigation, dated event archive, optional venue, and photo cards. Supplied logo used unchanged as header image and favicon. Desktop and mobile homepage visually inspected; no horizontal overflow at the tested mobile width. Event editor exposes separate date and venue fields.
