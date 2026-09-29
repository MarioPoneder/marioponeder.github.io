# Content sources and draft notes

Content reviewed on 27 September 2026. This file is excluded from the published site.

## Portfolio

The source of truth is [Mario's public audit portfolio](https://github.com/MarioPoneder/audits), including the recorded start month, duration, provider, language and report URL. The selection was independently revised using [DefiLlama's protocol data](https://api.llama.fi/protocols), then ordered by the selected engagement's start month, newest first. The selection includes all nine projects explicitly requested by the user (GMX, Jupiter, Meteora, Balancer, Ondo, Solomon, 0x, Pendle and Interfold), alongside the other five researched selections.

For each selected project, the entry with the **longest recorded duration** is used. The displayed date and scope match that entry. Jupiter, StarkWare and Lombard have no report attached to their longest entry, so their action is explicitly labeled “Portfolio”; the other eleven actions link to the relevant report or report page. This avoids linking a shorter follow-up while showing the date or scope of a longer review.

| Project      | Selected engagement                           | Start   | Weeks | Language | Evidence                                                                                                                                              |
| ------------ | --------------------------------------------- | ------- | ----: | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Solomon Labs | Solomon Labs - Reserve-Backed Stablecoin      | 2026-08 |   2.4 | rust     | [Report](https://github.com/zenith-security/reports/blob/main/reports/Zenith%20Audit%20Report%20-%20Solomon.pdf)                                      |
| Interfold    | Interfold - Encrypted Execution Protocol      | 2026-07 |   2.6 | solidity | [Report](https://github.com/zenith-security/reports/blob/main/reports/Interfold%20Encrypted%20Execution%20Protocol%20-%20Zenith%20Audit%20Report.pdf) |
| Jupiter      | Jupiter - Prediction Market                   | 2026-04 |   1.4 | rust     | [Portfolio](https://github.com/MarioPoneder/audits#team-engagements)                                                                                  |
| 0x           | 0x - CrossChainReceiver (Update)              | 2026-01 |   0.8 | solidity | [Report](<https://github.com/bailsec/BailSec/blob/main/Bailsec%20-%200x%20-%20CrossChainReceiver%20(Update)%20-%20Final%20Report.pdf>)                |
| Ondo Finance | Ondo Finance - GM Solana                      | 2025-11 |     2 | rust     | [Report](https://cantina.xyz/portfolio/c87e6cc2-6fa2-430b-bd7e-44f8505e50c7)                                                                          |
| StarkWare    | StarkWare Industries - Cairo Standard Library | 2025-10 |   3.6 | cairo    | [Portfolio](https://github.com/MarioPoneder/audits#team-engagements)                                                                                  |
| Vesu         | Vesu v1 - Upgrade                             | 2025-08 |     3 | cairo    | [Report](https://github.com/zenith-security/reports/blob/main/reports/Vesu%20V1%20-%20Zenith%20Audit%20Report.pdf)                                    |
| Meteora      | Meteora - DLMM                                | 2025-07 |   4.7 | rust     | [Report](https://github.com/zenith-security/reports/blob/main/reports/Meteora%20DLMM%20-%20Zenith%20Audit%20Report.pdf)                               |
| Lombard      | Lombard Finance - Starknet LBTC               | 2025-05 |   1.4 | cairo    | [Portfolio](https://github.com/MarioPoneder/audits#team-engagements)                                                                                  |
| Treehouse    | Treehouse - Boring Vault                      | 2025-03 |     1 | rust     | [Report](https://github.com/zenith-security/reports/blob/main/reports/Treehouse%20Finance%20-%20Zenith%20Audit%20Report.pdf)                          |
| GMX          | GMX Solana                                    | 2025-01 |     6 | rust     | [Report](https://github.com/zenith-security/reports/blob/main/reports/GMX%20Solana%20Protocol%20-%20Zenith%20Audit%20Report.pdf)                      |
| Balancer     | Balancer V3                                   | 2024-09 |     4 | solidity | [Report](https://cantina.xyz/portfolio/d8495962-f61d-4585-bbd4-e7c29332491f)                                                                          |
| Infrared     | Infrared Finance                              | 2024-07 |     3 | solidity | [Report](https://cantina.xyz/portfolio/89e5aa01-14ad-48f8-af3d-d1182d4ffefb)                                                                          |
| Pendle       | Pendle Finance                                | 2024-05 |     3 | solidity | [Report](https://cantina.xyz/portfolio/168747e9-d65a-4e05-a144-53e9fbc1d4f5)                                                                          |

### Selection rationale and DefiLlama research

Protocol scale informed the selection, with room for substantial Cairo and infrastructure work. TVL is not a useful common ranking for aggregators, RWA issuers and compiler libraries. Engagement date provides a clear, stable public order.

The hero includes “Contributed security research to protocols with over $40B in combined TVL.” Its expandable calculation note identifies the historical basis: $43,331,110,024 on 18 September 2025, calculated from DefiLlama data on 29 September 2026 and the full portfolio at commit `1b6e50db0394b4936fd9f7afbb83e191f05a8e1b`. This combines commissioned audits and competitive findings across 28 matched products / 27 protocol families, excluding judging-only work. Repeated engagements count once, product scope is matched where possible, and values are summed on the same date after the relevant work. This is gross protocol-level TVL, not current TVL, unique underlying capital, or a claim to have reviewed every deployed version. It does not sum the selected-work snapshots below. The full research and reproducible calculations are retained locally in `.preview/tvl-coverage-analysis.md`, `.preview/tvl-calculate.mjs`, and `.preview/tvl-data/`.

The following **product-level** TVL snapshots were read from DefiLlama on 27 September 2026. They are contextual selection research, not values audited or secured by Mario; in particular Jupiter's lending and perpetuals metrics do not describe his prediction-market engagement, and Lombard's aggregate LBTC TVL does not describe just its Starknet implementation. Values can change, and these products must not be added together as a portfolio total.

| DefiLlama product                                                                       | TVL snapshot | Category       |
| --------------------------------------------------------------------------------------- | -----------: | -------------- |
| [Jupiter Lend](https://defillama.com/protocol/jupiter-lend)                             |       $1.19B | Lending        |
| [Jupiter Perpetual Exchange](https://defillama.com/protocol/jupiter-perpetual-exchange) |     $827.74M | Derivatives    |
| [Pendle V2](https://defillama.com/protocol/pendle-v2)                                   |       $1.26B | Yield          |
| [Lombard LBTC](https://defillama.com/protocol/lombard-lbtc)                             |     $714.43M | Restaked BTC   |
| [GMX V2 Perps](https://defillama.com/protocol/gmx-v2-perps)                             |     $211.61M | Derivatives    |
| [GMX Solana](https://defillama.com/protocol/gmx-solana)                                 |      $30.04M | Derivatives    |
| [Meteora DLMM](https://defillama.com/protocol/meteora-dlmm)                             |     $195.16M | Dexs           |
| [Treehouse Protocol](https://defillama.com/protocol/treehouse-protocol)                 |      $75.82M | DOR            |
| [Balancer V2](https://defillama.com/protocol/balancer-v2)                               |      $30.32M | Dexs           |
| [Balancer V3](https://defillama.com/protocol/balancer-v3)                               |      $22.40M | Dexs           |
| [Infrared Finance](https://defillama.com/protocol/infrared-finance)                     |      $24.44M | Liquid Staking |
| [Vesu](https://defillama.com/protocol/vesu)                                             |      $12.89M | Lending        |
| [Resolv USR](https://defillama.com/protocol/resolv-usr)                                 |       $6.26M | Basis Trading  |
| [Solomon USDv](https://defillama.com/protocol/solomon-usdv)                             |       $6.05M | Basis Trading  |
| [DefiTuna Lending](https://defillama.com/protocol/defituna-lending)                     |       $1.09M | Lending        |
| [Level](https://defillama.com/protocol/level)                                           |     $459.31K | CDP            |
| [Opus](https://defillama.com/protocol/opus)                                             |     $349.07K | CDP            |
| [The Interfold](https://defillama.com/protocol/the-interfold)                           |     $296.53K | Privacy        |

[Ondo](https://defillama.com/protocol/ondo-finance) is an RWA issuer and [0x](https://defillama.com/protocol/0x) is a DEX aggregator; their standard TVL fields are null in the protocol API. They remain relevant large-protocol engagements without assigning artificial zero-TVL rankings. StarkWare is included for foundational Cairo work, not a TVL claim. Vesu and Lombard bring Cairo lending and Bitcoin token infrastructure into the visible selection. Treehouse and Infrared add further DeFi coverage. Solomon and Interfold are also included, as explicitly requested, with their longest engagements rather than shorter follow-ups. The full portfolio remains linked for all other work.

### Collaborators

The visible order is **Zenith, Spearbit, Oak Security, BailSec, & others**. The additional list covers all other distinct external providers recorded in team/solo engagements: Pashov Audit Group, AuditOne, Torii Security, Trust Security, Shieldify, and Cantina, plus Code4rena (including historical Code4rena Zenith work and judging). Sherlock is included under “Platforms & judging” for the competitive audits recorded in the portfolio. Decentra Vision is Mario's own company, so it is not listed as an outside collaborator.

Mario directly confirmed that he has also judged on Cantina. No Cantina judging start date was supplied; the 2023 date refers only to Code4rena.

The disclosure works on hover, click, keyboard and touch. Native details/summary also works with JavaScript disabled. Links go to official company sites; Torii goes to its [official GitHub organization](https://github.com/Torii-Security) because no standalone website was verified. This is the Solana security team from Mario's report, not the unrelated French company with the same name. Spearbit's official website currently announces its transition to Cantina; its historical name and logo are kept as requested.

### Logos and social icons

Brand artwork is sourced from official websites/repositories or DefiLlama's protocol icon URLs. Files are served locally. No logo API, tracking image or third-party request is made by visitors. The four company logos use explicit `*-on-dark.svg` variants with light fills, preserving the sourced vector geometry. They render at full opacity without CSS inversion. Project logos retain their original colors in larger framed tiles; dark marks use a light tile. StarkWare uses the symbol path from its official vector wordmark rather than an enlarged favicon. Logos remain the property of their respective owners and identify the recorded work, not an endorsement.

| Local asset                   | Source                                                                                                            |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `assets/logos/zenith.svg`     | [Source](https://cdn.prod.website-files.com/678a0c632f0d4c0da9dc074d/678a0c632f0d4c0da9dc07cb_Logo.svg)           |
| `assets/logos/spearbit.svg`   | [Source](https://raw.githubusercontent.com/spearbit/portfolio/master/spearbit-wordmark.svg)                       |
| `assets/logos/oak.svg`        | [Source](https://www.oaksecurity.io/assets/oak-logo.svg)                                                          |
| `assets/logos/bailsec.svg`    | [Source](https://cdn.prod.website-files.com/69e56012d5e4c0d49cbc2595/69ea485689d3c6a73cdd186d_Logo%20bailsec.svg) |
| `assets/logos/gmx.webp`       | [Source](https://icons.llamao.fi/icons/protocols/gmx-v2-perps)                                                    |
| `assets/logos/jupiter.webp`   | [Source](https://icons.llamao.fi/icons/protocols/jupiter-aggregator)                                              |
| `assets/logos/zerox.webp`     | [Source](https://icons.llamao.fi/icons/protocols/0x)                                                              |
| `assets/logos/ondo.webp`      | [Source](https://icons.llamao.fi/icons/protocols/ondo-yield-assets)                                               |
| `assets/logos/meteora.webp`   | [Source](https://icons.llamao.fi/icons/protocols/meteora)                                                         |
| `assets/logos/vesu.webp`      | [Source](https://icons.llamao.fi/icons/protocols/vesu)                                                            |
| `assets/logos/lombard.webp`   | [Source](https://icons.llamao.fi/icons/protocols/lombard-lbtc)                                                    |
| `assets/logos/treehouse.webp` | [Source](https://icons.llamao.fi/icons/protocols/treehouse-protocol)                                              |
| `assets/logos/balancer.webp`  | [Source](https://icons.llamao.fi/icons/protocols/balancer-v3)                                                     |
| `assets/logos/infrared.webp`  | [Source](https://icons.llamao.fi/icons/protocols/infrared-finance)                                                |
| `assets/logos/pendle.webp`    | [Source](https://icons.llamao.fi/icons/protocols/pendle-v2)                                                       |
| `assets/logos/solomon.svg`    | [Official brandmark](https://solomonlabs.org/assets/logos/brandmark.svg)                                          |
| `assets/logos/interfold.webp` | [Source](https://icons.llamao.fi/icons/protocols/the-interfold)                                                   |
| `assets/logos/starkware.svg`  | [Official vector wordmark; symbol extracted](https://starkware.co/wp-content/uploads/2021/04/logotype.svg)        |

All seven social buttons use inline SVG. The [Code4rena SVG](https://code4rena.com/logos/c4/c4-logo.svg) supplies the three cube paths (wordmark omitted), and the [Cantina SVG mark](https://www.cantina.security/_astro/cantina-logo-mark.ux2LAKV0_ZYdbTN.svg) supplies its logo path. These use currentColor so hover and focus colors follow the other social buttons; the Code4rena facets use opacity to preserve their shape. Existing GitHub, X, LinkedIn, Telegram and email icons remain SVG.

### Verification

All eleven report destinations, the portfolio fallback, and all 12 collaborator destinations returned HTTP 200 in read-only checks. Thirteen project homepages returned 200; Balancer's homepage returned HTTP 429 to the automated HEAD check, while the browser research tool could open its official page. Keep the verified official URL rather than substituting an unrelated domain. Local browser checks cover all 18 logo files, seven SVG socials, all language filters, date order, collaborator hover/keyboard/touch/no-JS behavior, responsive bounds and automated accessibility.

### Contact behavior

The original footer Contact anchor produced no movement at the end of the desktop page because its target was already visible. It now explicitly opens an email action. The homepage also provides a copy-email control, with visible confirmation and a selectable-address fallback when clipboard access is unavailable. Browser tests cover all four footer links and both clipboard outcomes without sending email or changing the user's actual clipboard.

## Background and identity

The founding year, alias, engineering physics degree, industrial automation, GPU computing, dark matter simulations, and lead embedded software role come from the existing site and its checked-out homepage. The original Decentra Vision logo, portrait and favicon are reused. Company and project logos are sourced as listed above. The block-network artwork is a new SVG inspired by the original identity.

Social destinations come from the user's supplied links and the previous site's footer. X and LinkedIn did not expose their profile content to the research tools, so no new biographical claims were inferred from those profiles.

The career timeline follows the original homepage: electronics/computer engineering school, industrial automation, OpenCL GPU computing, engineering physics and CRESST dark matter simulations, lead embedded software work on intralogistics drives, and founding Decentra Vision in early 2022. No invented employers or education dates were added. The biography focuses on Mario's current identity, motivation and collaboration with other researchers; education and career milestones appear in the timeline rather than being repeated in the biography.

The user confirmed the brand names: official legal name **Decentra Vision e.U.**; short name **Decentra Vision**; long name **Decentra Vision - On-chain security**. The exact slogan is **Securing the decentralized future, block by block**. The long name is used in homepage metadata and site configuration, the short name in navigation and prose, and the legal name in legal information and footers. The slogan appears in the hero and all page footers.

## Legal and privacy copy

The legal page carries over the existing published company name, owner, registered address, register number, register court, business purpose and VAT number. These have not been independently checked against the commercial register. Confirm that they remain current before publication, and confirm whether additional professional or trade disclosures apply to the business.

The privacy text describes the implemented site: local assets, no cookies or browser storage, no analytics, no external embeds, outbound social links, and email contact. It also covers hosting, processing purposes and bases, retention criteria, and data-subject rights. It is a draft for owner review, not a legal determination. The email provider and actual business retention practices were not supplied; confirm the correspondence wording against those practices before launch.

Sources checked for the privacy text:

- [GitHub Pages data collection](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection)
- [GitHub General Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement)
- [GDPR, especially Articles 6, 13 and 15–21](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679)
- [Austrian Data Protection Authority](https://www.dsb.gv.at/)

## Removed content

The security review process, associated severity matrix and quote form are removed from the draft. Email and social profiles are the contact routes. The old process URLs return the custom 404 page rather than retaining outdated service content.
