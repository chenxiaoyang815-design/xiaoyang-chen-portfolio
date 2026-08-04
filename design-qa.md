# Design QA — Compact COMP9900 Summary + Case Study

## Comparison target

- Source visual truth: `/var/folders/_q/yvz21j3d6bv4jywy5ly71_7r0000gn/T/codex-clipboard-ff851a3f-d051-453f-b6cf-52b0598acd98.png`
- Implementation URL: `http://127.0.0.1:4174/#spotlight`
- Main-page implementation: `/private/tmp/portfolio-compact-summary-v5b.png`
- Compact 30-day demo: `/private/tmp/portfolio-compact-demo-v5.png`
- Full case-study view: `/private/tmp/portfolio-case-study-hero-v5.png`
- Side-by-side comparison: `/private/tmp/portfolio-learn-more-comparison-v5.png`
- Browser viewport: 1280 × 720 CSS pixels, device pixel ratio 1
- Source pixels: 1930 × 1080, normalized to 1280 × 720 for comparison
- Implementation pixels: 1280 × 720
- State: Chinese main-page summary; Beta selected for the compact-demo capture; Chinese full case-study hero

## Findings

- No actionable P0, P1, or P2 visual issues remain.
- P3: The browser retains a lime keyboard-focus outline after automated tab selection. This is intentional accessibility feedback and does not affect the resting state.
- P3: Mobile behavior is covered by responsive CSS rules but was not separately captured because the active in-app browser viewport is fixed at 1280 × 720 in this run.

## Required fidelity surfaces

- Fonts and typography: Space Grotesk and IBM Plex Mono are preserved. Heading weight, line height, technical labels, and bilingual wrapping remain consistent with the original page.
- Spacing and layout rhythm: The original two-column hero and wide technical grid are retained. The main-page project block is reduced to approximately 1.75 desktop viewports, while detailed material moves into the dedicated case-study view.
- Colors and visual tokens: Deep navy, cyan, mint, amber, magenta, violet, and hairline borders continue to use the existing portfolio tokens. No new visual language was introduced.
- Image quality and assets: This section requires no raster imagery. Existing Phosphor icons are used consistently; no placeholder imagery or handcrafted SVG assets were introduced.
- Copy and content: The summary distinguishes personal contribution from team delivery evidence, keeps the 30-day scope visible, and does not expose customer names, site URLs, account details, private messages, or live Jira data.

## Full-view comparison evidence

The normalized side-by-side comparison confirms that the implementation preserves the source hero composition, type hierarchy, tags, IP-governance treatment, and dark technical aesthetic. The intentional change is information density: the source devotes the full section to the detailed case, while the new main view immediately exposes three personal capabilities and verified outcomes before routing to the complete case study.

## Focused region evidence

- `/private/tmp/portfolio-compact-demo-v5.png` verifies that Alpha/Beta selection, the 30-day timeline, completion percentage, work-item total, calculated signal, replay control, and case-study CTA remain readable in the compact main-page version.
- `/private/tmp/portfolio-case-study-hero-v5.png` verifies the dedicated sticky header, return action, language toggle, case-study hierarchy, and preservation of the original IP-governance project hero.

## Primary interactions tested

- Alpha and Beta switch the selected compact release; Beta correctly renders day 28, 58% completion, 88/152 completed work items, and the watch-state signal.
- Replay restarts the compact timeline animation.
- “查看完整案例” opens `#case-jira-road-map` as a deep-linkable full view.
- The full case study contains five delivery steps, three client-problem stages, four delivery outcomes, and two detailed release demonstrations.
- The dedicated Chinese/English toggle works without leaving the case study.
- “返回个人简历” restores `#spotlight` and the compact portfolio view.
- Desktop horizontal overflow check passed: document width equals viewport width at 1280 pixels.
- Production build passed with 4,580 transformed modules.

## Comparison history

- Pass 1: The first normalized comparison found no P0, P1, or P2 mismatch. No visual fix loop was required.

## Follow-up polish

- Capture and inspect the 640-pixel breakpoint in a future responsive QA pass when a resizable browser surface is available.

**final result: passed**
