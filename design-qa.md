# Design QA

## Comparison target

- Source visual truth: `references/selected-concept.png`
- Source dimensions: 864 × 1821 px
- Update brief: preserve the selected Systems Observatory structure while expanding its technology palette, clarifying the authorised Jira-data/IP story, removing AI as a current study/career direction, and adding the UNSW Employment Award.
- Implementation: local Vite preview at `http://localhost:4173/`
- Desktop viewport: 1440 × 1000 CSS px at device scale factor 1
- Mobile viewport: 390 × 844 CSS px at device scale factor 1
- Primary state: Simplified Chinese, dark theme, 30-day synthetic Jira data window

## Browser-rendered evidence

- `qa/update-baseline-spotlight.png`
- `qa/update-desktop-hero-v2.png`
- `qa/update-desktop-spotlight-v2.png`
- `qa/update-desktop-jira-data-v2.png`
- `qa/update-desktop-work-colors-v2.png`
- `qa/update-desktop-employment-award-v2.png`
- `qa/update-mobile-hero-v2.png`
- `qa/update-mobile-menu-v2.png`
- `qa/update-mobile-spotlight-v2.png`
- `qa/update-mobile-jira-data-table-v2.png`
- `qa/update-mobile-employment-award-v2.png`

## Normalization and comparison evidence

- Focused hero: the source's first 864 × 600 px and the 1440 × 1000 implementation viewport were both normalized to 864 × 600 px.
- Focused spotlight: the source's 864 × 600 px project region and the matching implementation viewport were both normalized to 864 × 600 px.
- Overall direction: the complete source was placed beside four normalized implementation views covering the hero, governed Jira story, calculated data view and Employment Award.
- Same theme, content language and principal interaction state were used within each comparison.
- Full-view comparison: `qa/comparison-update-overview-side-by-side.png`
- Focused hero comparison: `qa/comparison-update-hero-side-by-side.png`
- Focused project comparison: `qa/comparison-update-spotlight-side-by-side.png`
- Focused regions were required because typography, data-governance copy, multicolour process states and calculated-signal details are not legible in the full overview.

## Required fidelity surfaces

### Fonts and typography

- Space Grotesk and IBM Plex Mono still reproduce the selected concept's geometric display type and technical labels.
- English and Chinese headings retain the selected hierarchy, optical weight and compact line height without clipping.
- The longer Jira/IP explanation wraps cleanly at desktop and mobile widths.
- The Employment Award proposal remains readable as a two-column desktop feature and a single-column mobile story.

### Spacing and layout rhythm

- The left/right portrait hero, ruled sections, five-stage project process, evidence/data pairing and dense profile grid are preserved.
- The IP/data-governance callout sits between project context and implementation process, so it strengthens rather than interrupts the narrative.
- The seven-field Jira demonstration table fits the desktop panel and changes to labelled stacked rows on mobile.
- No horizontal viewport overflow was detected at 1440 px or 390 px.

### Colors and visual tokens

- The original midnight navy/cyan/lime direction remains recognisable.
- Electric violet, magenta, mint and amber now identify governance, connection, calculation, risk and award states.
- Section surfaces use restrained solid navy, violet, teal and plum tints; project rails and process icons cycle through controlled semantic accents.
- The expanded palette improves scanability without turning the interface into a gaming/cyberpunk treatment.
- No CSS gradients are used.

### Image quality and asset fidelity

- The supplied portrait remains unaltered at its native resolution; no identity-changing generated portrait is shipped.
- The new 1672 × 941 multicolour data-observatory background is saved at `public/profile/data-observatory-background-v2.png`.
- The generated background keeps the left copy area quiet and concentrates Jira-like data flows, user-record signals and calculated analytics on the right.
- Phosphor Icons remain the only interface icon system; there are no handcrafted SVGs, emoji, CSS drawings or placeholder assets.

### Copy and content

- The project now states that Forge connects to authorised real Jira product datasets and surfaces backend user, project and release information plus calculated indicators.
- The signed university intellectual-property agreement and Atlassian usage rights are visible in both languages.
- The portfolio explicitly states that its user names and figures are synthetic and that no live Jira account or confidential client data is shown.
- AI was removed from the current hero role, opportunity direction, metadata, degree focus and contact positioning; historical coursework, machine-learning evidence and the EY technical challenge remain factual.
- The UNSW Employment Award records competitive CV selection, participation in an EY-collaborative real recruitment process, group discussion of an AI technical problem, and a proposal spanning value, architecture, governance, delivery risk and success metrics.

## Interaction and browser checks

- Language switch: passed; document language, metadata, hero role, project copy, Employment Award and CV targets changed correctly.
- Jira data window: passed; switching from 30 to 60 days changed the visible synthetic release rows from two to three and updated the pressed state.
- Mobile navigation: passed; menu open/close state and profile destination worked.
- Primary CTA: passed; it lands on the governed Jira project spotlight.
- Responsive table: passed; user/team and calculated-signal fields become labelled mobile rows.
- Resume links: English and Chinese local PDF targets remain correct.
- Responsive overflow: passed; scroll width equalled viewport width at 390 px.
- Console: no errors or warnings during desktop, bilingual and mobile verification.

## Comparison history

### Iteration 1 — original build

- [P2] Chinese hero headline produced an orphan line.
  - Fix: shortened the headline while preserving meaning.
- [P2] The metric strip delayed the client spotlight.
  - Fix: moved the metrics after the complete spotlight and redirected the primary CTA.

### Iteration 2 — original handoff

- No actionable P0, P1 or P2 differences remained.

### Iteration 3 — current update

- [P2] The single-colour system did not distinguish data governance, connection, calculation, risk and achievement content.
  - Fix: introduced violet, magenta, mint and amber semantic accents plus distinct section surfaces and a new multicolour observatory asset.
  - Post-fix evidence: `qa/update-desktop-hero-v2.png`, `qa/update-desktop-jira-data-v2.png` and `qa/update-desktop-work-colors-v2.png`.
- [P2] The former spotlight emphasised roadmap visibility but did not make real Jira data connection, backend user records, computed indicators or IP rights sufficiently explicit.
  - Fix: rebuilt the story around Understand → Govern → Connect → Calculate → Validate, added a governance banner, connected-data signals and user/calculation table fields.
  - Post-fix evidence: `qa/update-desktop-spotlight-v2.png` and `qa/update-mobile-jira-data-table-v2.png`.
- [P2] The Employment Award was absent and AI remained positioned as a current direction.
  - Fix: added a dedicated Award feature and removed AI from current positioning while retaining factual historical technical evidence.
  - Post-fix evidence: `qa/update-desktop-employment-award-v2.png` and `qa/update-mobile-employment-award-v2.png`.
- Post-fix comparison found no remaining actionable P0, P1 or P2 issue.

## Follow-up polish

- [P3] The authentic portrait's blue studio background remains brighter than the selected concept's dark cutout. This is intentionally retained to preserve identity authenticity.
- [P3] The expanded Jira data table is denser than the original concept, but it is needed to demonstrate the newly requested backend user and calculated-result capability.

## Final result

final result: passed
