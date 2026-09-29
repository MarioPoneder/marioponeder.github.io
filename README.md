# Decentra Vision

Static portfolio for Mario Poneder / 0xTheC0der, an independent on-chain security researcher. The redesign puts selected engagements and recent experience first, followed by technical expertise, background, and direct contact.

## Local preview

Requires Node.js 20 or later. No package installation is needed.

```sh
npm run dev
```

Open **http://127.0.0.1:4173**. The preview binds only to the local computer. It serves public site files, not repository metadata or development scripts. Refresh after editing. Stop with Ctrl+C.

## Check and build

```sh
npm run check
npm run build
```

The check validates all four HTML pages, internal links and anchors, local assets, image metadata, and the absence of external embeds. It also checks canonical URLs, social metadata, JSON-LD entities and references, sitemap coverage, and crawler access. The build copies public files into `_site/`, first clearing that generated directory so removed pages cannot remain in a later build. Neither command publishes anything.

The site is plain HTML, CSS, and JavaScript, with no runtime dependencies, remote fonts, analytics, cookies, storage, contact backend, or external embeds. Portfolio filters and the mobile menu are progressive enhancements: all content and navigation remain available without JavaScript.

## Editing

- `index.html`: homepage, portfolio entries, expertise, biography, social links.
- `legal-info/index.html`: business information, preserving `/legal-info` through a directory redirect.
- `privacy-policy/index.html`: privacy policy, preserving `/privacy-policy` in the same way.
- `404.html`: custom error page.
- `robots.txt`: crawler access and sitemap discovery.
- `sitemap.xml`: the three indexable canonical pages; exclude error pages and section fragments.
- `assets/site.css`: responsive layout, typography, color, reduced-motion and focus styles.
- `assets/site.js`: language filters, mobile navigation, current-section indicator, and collaborator disclosure.
- `assets/network.svg`: original decorative block-network illustration.
- `assets/fonts/`: self-hosted Manrope and its SIL Open Font License.
- `img/`: existing brand, portrait, and social assets.

Header and footer markup is intentionally static and repeated across four pages. Update all four when changing shared navigation. Edit portfolio rows directly; use `data-language="rust"`, `"solidity"`, or `"cairo"` for the current filters. Add a corresponding filter button when introducing another language, and keep the initial engagement count consistent. The portfolio does not fetch from GitHub or DefiLlama at runtime. Sources, DefiLlama research and review notes are in [CONTENT-NOTES.md](CONTENT-NOTES.md).

## GitHub Pages compatibility

The existing `.github/workflows/` files are unchanged. The current Jekyll workflow can publish these ordinary static files without a theme; `_config.yml` excludes development files. The Gemfile and lockfile are retained for workflow compatibility. Local preview and the static build do not require Ruby. `_site/` can also be served by any static host.

The existing DNS, custom-domain and repository Pages settings are reused. Both root-hosted domains are supported; GitHub Pages serves the custom domain at `https://www.decentra.vision/`. Canonical URLs, structured data, social metadata, the sitemap and `_config.yml` all use that final host. The apex domain and GitHub Pages domain redirect there. No CNAME file has been added or changed.

**Publishing:** the existing workflow deploys a push to `main`. Keep further drafts local until publication is explicitly intended.

## Search and AI discovery

Each indexable page has a self-referencing canonical URL and consistent Open Graph / X metadata using the existing banner. The homepage JSON-LD describes the website, Decentra Vision e.U., and Mario Poneder / 0xTheC0der as connected entities. The other pages reference those same entities. Keep all structured claims aligned with visible content and keep person profiles attached to the Person rather than the Organization. No reviews, ratings, hidden FAQs, or unqualified TVL claims are encoded in structured data.

`robots.txt` allows public pages and assets for all crawlers, including search discovery bots such as OAI-SearchBot. This preserves the previous unrestricted access; it does not introduce a separate AI-training opt-out. The 404 page stays `noindex`, and missing URLs must continue to return HTTP 404. No analytics or third-party scripts are needed.

The sitemap omits `lastmod` rather than inventing freshness dates. If adding dates later, use actual significant page changes. Update the sitemap when adding or removing indexable pages. Both the local build and Jekyll deployment include the crawler files.

Google's [AI search guidance](https://developers.google.com/search/docs/appearance/ai-features) uses the same SEO foundations and does not require an `llms.txt` file or special AI markup. This site already exposes its full content as static HTML. [OpenAI's crawler documentation](https://developers.openai.com/api/docs/bots) distinguishes search discovery from model training. No ranking or AI citation is guaranteed by these settings.

For ownership-level monitoring, submit `https://www.decentra.vision/sitemap.xml` in the owner's verified Google Search Console and Bing Webmaster Tools properties. Those account actions are separate from the website deployment; no verification tokens or submissions are fabricated here.

## Validation of this draft

Tested in headless Microsoft Edge at widths from 320 to 1920 pixels, including filters, menu opening/closing, Escape and focus return, internal navigation, legacy legal URLs, custom 404 responses, reduced motion, and JavaScript disabled. Automated axe checks found no WCAG 2 A/AA or WCAG 2.1 AA violations on the four pages and mobile homepage. These checks supplement visual review; they are not a complete accessibility certification.

The browser made no third-party asset requests and reported no JavaScript errors. Temporary test dependencies, screenshots, and results are in the ignored `.preview/` folder. The Ruby/Jekyll publishing workflow has not been run locally; Ruby is not installed in this environment.

The fourteen selections link to eleven public report destinations and three portfolio entries; all returned HTTP 200 in read-only checks. Project names/logos link separately to their official websites. Selection dates are newest first, and each project uses its longest recorded engagement. The dark palette passes the same automated accessibility checks. Footer email actions and copy-email success/failure paths were also checked without launching a mail app, sending messages, or changing the user's clipboard.

A follow-up review reproduced and fixed a stale current-section indicator when scrolling back above the portfolio. Regression checks cover desktop, phone and landscape layouts, returning to the top, direct section links, browser history, portfolio filtering and reaching the page bottom. Keyboard checks also cover short screens, and a scan of every width from 320 to 1100 pixels found no horizontal page overflow. The four-page accessibility scan, contact checks, local link checks and static build passed after the fix.

The company strip uses locally hosted logos and an accessible “& others” disclosure with eight additional teams and platforms. All seven social buttons use SVG. The project selection includes three Cairo engagements (StarkWare, Vesu and Lombard), while Substrate and NEAR are mentioned in the work introduction. The biography focuses on motivation and approach; the separate timeline retains the engineering background and judging experience on Code4rena and Cantina. See CONTENT-NOTES.md for logo provenance, DefiLlama snapshots, link-check caveats, and exact brand naming.
