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

The check validates all four HTML pages, internal links and anchors, local assets, image metadata, and the absence of external embeds. The build copies public files into `_site/`, first clearing that generated directory so removed pages cannot remain in a later build. Neither command publishes anything.

The site is plain HTML, CSS, and JavaScript, with no runtime dependencies, remote fonts, analytics, cookies, storage, contact backend, or external embeds. Portfolio filters and the mobile menu are progressive enhancements: all content and navigation remain available without JavaScript.

## Editing

- `index.html`: homepage, portfolio entries, expertise, biography, social links.
- `legal-info/index.html`: business information, preserving `/legal-info` through a directory redirect.
- `privacy-policy/index.html`: privacy policy, preserving `/privacy-policy` in the same way.
- `404.html`: custom error page.
- `assets/site.css`: responsive layout, typography, color, reduced-motion and focus styles.
- `assets/site.js`: language filters, mobile navigation, current-section indicator, and collaborator disclosure.
- `assets/network.svg`: original decorative block-network illustration.
- `assets/fonts/`: self-hosted Manrope and its SIL Open Font License.
- `img/`: existing brand, portrait, and social assets.

Header and footer markup is intentionally static and repeated across four pages. Update all four when changing shared navigation. Edit portfolio rows directly; use `data-language="rust"`, `"solidity"`, or `"cairo"` for the current filters. Add a corresponding filter button when introducing another language, and keep the initial engagement count consistent. The portfolio does not fetch from GitHub or DefiLlama at runtime. Sources, DefiLlama research and review notes are in [CONTENT-NOTES.md](CONTENT-NOTES.md).

## GitHub Pages compatibility

The existing `.github/workflows/` files are unchanged. The current Jekyll workflow can publish these ordinary static files without a theme; `_config.yml` excludes development files. The Gemfile and lockfile are retained for workflow compatibility. Local preview and the static build do not require Ruby. `_site/` can also be served by any static host.

The existing DNS, custom-domain and repository Pages settings are reused. Both root-hosted domains are supported; GitHub Pages currently serves the custom domain at `https://www.decentra.vision/`. Canonical URLs retain the existing `https://decentra.vision` setting. No CNAME file has been added or changed.

**Publishing:** the existing workflow deploys a push to `main`. Keep further drafts local until publication is explicitly intended.

## Validation of this draft

Tested in headless Microsoft Edge at widths from 320 to 1920 pixels, including filters, menu opening/closing, Escape and focus return, internal navigation, legacy legal URLs, custom 404 responses, reduced motion, and JavaScript disabled. Automated axe checks found no WCAG 2 A/AA or WCAG 2.1 AA violations on the four pages and mobile homepage. These checks supplement visual review; they are not a complete accessibility certification.

The browser made no third-party asset requests and reported no JavaScript errors. Temporary test dependencies, screenshots, and results are in the ignored `.preview/` folder. The Ruby/Jekyll publishing workflow has not been run locally; Ruby is not installed in this environment.

The fourteen selections link to eleven public report destinations and three portfolio entries; all returned HTTP 200 in read-only checks. Project names/logos link separately to their official websites. Selection dates are newest first, and each project uses its longest recorded engagement. The dark palette passes the same automated accessibility checks. Footer email actions and copy-email success/failure paths were also checked without launching a mail app, sending messages, or changing the user's clipboard.

A follow-up review reproduced and fixed a stale current-section indicator when scrolling back above the portfolio. Regression checks cover desktop, phone and landscape layouts, returning to the top, direct section links, browser history, portfolio filtering and reaching the page bottom. Keyboard checks also cover short screens, and a scan of every width from 320 to 1100 pixels found no horizontal page overflow. The four-page accessibility scan, contact checks, local link checks and static build passed after the fix.

The company strip uses locally hosted logos and an accessible “& others” disclosure with eight additional teams and platforms. All seven social buttons use SVG. The project selection includes three Cairo engagements (StarkWare, Vesu and Lombard), while Substrate and NEAR are mentioned in the work introduction. The biography focuses on motivation and approach; the separate timeline retains the engineering background and judging experience on Code4rena and Cantina. See CONTENT-NOTES.md for logo provenance, DefiLlama snapshots, link-check caveats, and exact brand naming.
