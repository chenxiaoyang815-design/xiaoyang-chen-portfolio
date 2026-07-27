import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowSquareOut,
  ChartLineUp,
  CheckCircle,
  Database,
  Funnel,
  GitBranch,
  MapPin,
  ShieldCheck,
  SlidersHorizontal,
  X,
} from "@phosphor-icons/react";
import evidence from "./data/fuel-evidence.json";

const OWNERSHIP_FUELS = ["ALL", "DL", "E10", "P95", "P98", "PDL", "U91"];
const REGION_FUELS = ["DL", "E10", "P95", "P98", "PDL", "U91"];

const labCopy = {
  en: {
    languageAction: "中文",
    close: "Close Data Lab",
    eyebrow: "PUBLIC DATA · REPRODUCIBLE ANALYSIS · PRIVACY-SAFE",
    title: "NSW Fuel Data Evidence Lab",
    titleLines: ["NSW Fuel Data", "Evidence Lab"],
    intro:
      "A compact case study showing how I turn imperfect public records into decision-ready evidence—without hiding the engineering choices that shape the result.",
    verified: "VERIFIED PIPELINE",
    dateLabel: "Analysis window",
    sourceLabel: "Official source",
    sourceAction: "View Data.NSW resource",
    kpis: [
      ["cleanedRows", "clean observations", "after validation and NSW filtering"],
      ["stationCount", "service-station locations", "used only inside the local pipeline"],
      ["postcodeCount", "NSW postcodes", "compared through aggregate evidence"],
      ["fuelTypeCount", "fuel grades", "analysed with grade-specific context"],
    ],
    pipelineEyebrow: "01 · REPRODUCIBLE DATA PIPELINE",
    pipelineTitle: "Reliability comes before visualisation",
    pipelineIntro:
      "Each stage has a defined input, transformation and validation rule. The page ships only the final aggregates.",
    pipeline: [
      {
        title: "Ingest",
        text: "Detect both CSV row shapes from the schema—no fixed row breakpoint.",
      },
      {
        title: "Validate",
        text: "Coerce types, reject invalid records and retain NSW observations.",
      },
      {
        title: "Enrich",
        text: "Normalise suburb names, then match postcode + suburb with a deterministic fallback.",
      },
      {
        title: "Aggregate",
        text: "Calculate station-day → postcode-day → postcode-month averages.",
      },
      {
        title: "Compare",
        text: "Use like-for-like postcode × fuel × day strata and minimum coverage rules.",
      },
    ],
    qualityEyebrow: "02 · DATA QUALITY",
    qualityTitle: "Make messy inputs measurable",
    qualityIntro:
      "The raw file changes shape part-way through. Instead of relying on where that happens, the pipeline recognises the row schema and records every repair.",
    repairedLabel: "rows repaired by schema",
    rejectedLabel: "unexpected rows rejected",
    duplicateLabel: "duplicate clean rows",
    exactLabel: "Exact postcode + suburb",
    fallbackLabel: "Deterministic postcode fallback",
    coverageLabel: "geographic coverage",
    exactLegend: "Exact",
    fallbackLegend: "Fallback",
    qualityConclusion:
      "This is the important distinction: 100% coverage does not mean 100% exact matching. The method exposes that uncertainty rather than disguising it.",
    ownershipEyebrow: "03 · KEY FINDING",
    ownershipTitle: "Independent stations were usually cheaper in like-for-like comparisons",
    ownershipIntro:
      "Plain English: I put both station types on the same track—same postcode, same fuel grade and same day—then compared their prices.",
    allFuel: "ALL",
    allGradesLabel: "All fuel grades",
    exploreFuel: "Explore the finding by fuel grade",
    matchedLabel: "same-condition comparisons",
    medianLabel: "median difference",
    averageLowerLabel: "lower per litre on average",
    tankSavingLabel: "estimated saving on a 50 L fill",
    frequencyLead: "Independent stations were cheaper in",
    frequencyTail: "out of every 100 matched comparisons",
    remainderLabel: "Franchised equal or lower",
    sameConditionTitle: "What makes the comparison fairer?",
    sameConditions: ["Same postcode", "Same fuel grade", "Same calendar day"],
    selectedEvidence: "Evidence currently shown",
    ownershipCaveat:
      "Descriptive, not causal: brand classification, local competition, site format and timing can still influence the result.",
    regionEyebrow: "04 · REGIONAL EVIDENCE",
    regionTitle: "Postcode price context",
    regionIntro:
      "Monthly postcode averages use a three-stage hierarchy so stations with more price updates do not receive extra weight.",
    lowerLabel: "Lower monthly averages",
    higherLabel: "Higher monthly averages",
    monthlyMedian: "eligible-postcode median",
    regionalRange: "observed range",
    eligible: "eligible postcodes",
    coverageRule: (days, stations) =>
      `Coverage rule: at least ${days} observed days and ${stations} stations per postcode.`,
    suburbNote:
      "The suburb name is the dominant observed locality for the postcode; bars share one price scale.",
    dayUnit: "d",
    siteUnit: "sites",
    outputsEyebrow: "05 · SELECTED COURSEWORK OUTPUTS",
    outputsTitle: "Original charts, shown with analytical context",
    outputsIntro:
      "These figures were generated in the submitted notebook. They show the direction and spread of the raw station-type comparison; the interactive finding above adds like-for-like matching.",
    originalBadge: "ORIGINAL NOTEBOOK OUTPUT",
    originalFigures: [
      {
        file: "q8_barplot.png",
        title: "Average-price comparison",
        alt: "Original coursework bar chart comparing average fuel prices for franchised and independent stations",
        text: "A fast directional view: the independent-station average is lower in the raw grouped data.",
      },
      {
        file: "q8_boxplot.png",
        title: "Distribution and outliers",
        alt: "Original coursework box plot comparing fuel-price distributions for franchised and independent stations",
        text: "Adds the median, price spread and extreme observations that one average cannot show.",
      },
    ],
    outputsNote:
      "I selected these two because they remain readable. The postcode plots were overcrowded, so the regional explorer above replaces them with filtered, decision-ready evidence.",
    capabilityEyebrow: "06 · WHAT THIS PROVES",
    capabilityTitle: "From code to industry judgment",
    capabilities: [
      {
        title: "Data engineering",
        text: "I can diagnose structural defects, build deterministic cleaning rules and leave a reproducible audit trail.",
      },
      {
        title: "Analytical design",
        text: "I choose comparison units and aggregation levels deliberately, reducing update-frequency and mix bias.",
      },
      {
        title: "Industry understanding",
        text: "Fuel prices are local, grade-specific and time-dependent. I treat a dashboard as decision context—not a causal claim.",
      },
    ],
    methodologyTitle: "Method in one line",
    methodology:
      "Raw updates → station daily mean → postcode daily mean → postcode monthly mean.",
    privacyTitle: "Public aggregates only",
    privacy:
      "No private client data, station address, assignment brief or solution notebook is published. The portfolio contains only derived postcode- and fuel-level aggregates.",
    licencePrefix: "Source and licence:",
  },
  zh: {
    languageAction: "EN",
    close: "关闭数据实验室",
    eyebrow: "公开数据 · 可复现分析 · 隐私安全",
    title: "NSW 燃油数据证据实验室",
    titleLines: ["NSW 燃油数据", "证据实验室"],
    intro:
      "一个紧凑的数据案例：展示我如何把不规则的公开记录转化为可用于决策的证据，同时把影响结果的数据工程选择说清楚。",
    verified: "已验证数据流水线",
    dateLabel: "分析时间窗",
    sourceLabel: "官方数据源",
    sourceAction: "查看 Data.NSW 数据资源",
    kpis: [
      ["cleanedRows", "条清洁数据", "完成字段验证和 NSW 筛选"],
      ["stationCount", "个加油站点", "地址只在本地流水线中使用"],
      ["postcodeCount", "个 NSW 邮编区域", "只展示聚合层级的证据"],
      ["fuelTypeCount", "种燃油类型", "按燃油品类分别解释"],
    ],
    pipelineEyebrow: "01 · 可复现数据流水线",
    pipelineTitle: "先保证数据可信，再做可视化",
    pipelineIntro:
      "每个阶段都有明确的输入、转换和校验规则；网页只包含最终聚合结果。",
    pipeline: [
      {
        title: "读取",
        text: "根据字段结构自动识别两种 CSV 行格式，不依赖固定分界行。",
      },
      {
        title: "校验",
        text: "统一数据类型、拒绝无效记录，并保留 NSW 范围内的数据。",
      },
      {
        title: "地理增强",
        text: "规范城区名称，优先匹配“邮编＋城区”，再进行确定性邮编回退。",
      },
      {
        title: "分层聚合",
        text: "依次计算“站点日均 → 邮编日均 → 邮编月均”。",
      },
      {
        title: "可比分析",
        text: "在相同邮编×燃油×日期内对照，并设置最低数据覆盖条件。",
      },
    ],
    qualityEyebrow: "02 · 数据质量",
    qualityTitle: "让脏数据问题可以被衡量",
    qualityIntro:
      "原始文件在中途改变了行结构。流水线不猜测变化位置，而是识别每一行的字段结构，并记录全部修复。",
    repairedLabel: "行按字段结构自动修复",
    rejectedLabel: "异常行被拒绝",
    duplicateLabel: "清洁数据重复行",
    exactLabel: "邮编＋城区精确匹配",
    fallbackLabel: "确定性邮编回退",
    coverageLabel: "地理信息覆盖率",
    exactLegend: "精确匹配",
    fallbackLegend: "回退匹配",
    qualityConclusion:
      "关键区别是：100% 覆盖不等于 100% 精确匹配。这个方法把不确定性展示出来，而不是隐藏掉。",
    ownershipEyebrow: "03 · 核心结论",
    ownershipTitle: "在相同条件下，独立站通常更便宜",
    ownershipIntro:
      "直白来说：先让两类站点在“相同邮编、相同油种、同一天”这条赛道上，再比较价格。",
    allFuel: "全部",
    allGradesLabel: "全部燃油",
    exploreFuel: "按燃油类型查看结论",
    matchedLabel: "个同条件价格对照",
    medianLabel: "中位差值",
    averageLowerLabel: "平均每升价格更低",
    tankSavingLabel: "加满 50 升预计少花",
    frequencyLead: "每 100 次同条件比较中，独立站约有",
    frequencyTail: "次价格更低",
    remainderLabel: "品牌站相同或更低",
    sameConditionTitle: "怎样让比较更公平？",
    sameConditions: ["同一个邮编", "同一种燃油", "同一个日期"],
    selectedEvidence: "当前展示证据",
    ownershipCaveat:
      "这是描述性结果，不是因果结论；品牌分类、当地竞争、站点形式与调价时间仍可能影响差异。",
    regionEyebrow: "04 · 区域证据",
    regionTitle: "邮编区域价格情境",
    regionIntro:
      "月度邮编均价使用三阶段聚合，避免价格更新次数较多的站点获得更高权重。",
    lowerLabel: "月均价较低区域",
    higherLabel: "月均价较高区域",
    monthlyMedian: "合格邮编中位数",
    regionalRange: "观察范围",
    eligible: "个合格邮编",
    coverageRule: (days, stations) =>
      `覆盖规则：每个邮编至少观测 ${days} 天，且至少包含 ${stations} 个站点。`,
    suburbNote:
      "城区名称采用该邮编内观测站点最多的城区；全部条形使用相同价格刻度。",
    dayUnit: "天",
    siteUnit: "站",
    outputsEyebrow: "05 · 精选作业成品图",
    outputsTitle: "保留原始图表，也说明它们能回答什么",
    outputsIntro:
      "以下图表来自最终提交的 Notebook：它们展示两类站点原始价格的方向与分布；上方交互结论进一步加入了同条件匹配。",
    originalBadge: "原始 NOTEBOOK 输出",
    originalFigures: [
      {
        file: "q8_barplot.png",
        title: "平均价格对比",
        alt: "作业原始柱状图，对比品牌站与独立站的平均燃油价格",
        text: "快速展示总体方向：在未经分层的分组数据中，独立站平均价格更低。",
      },
      {
        file: "q8_boxplot.png",
        title: "价格分布与异常值",
        alt: "作业原始箱线图，对比品牌站与独立站的燃油价格分布",
        text: "补充平均数看不到的中位数、价格离散程度和极端观测。",
      },
    ],
    outputsNote:
      "我只选择了仍然清晰可读的两张。邮编图存在严重标签拥挤，因此由上方经过筛选的区域对比取代。",
    capabilityEyebrow: "06 · 能力证据",
    capabilityTitle: "从代码实现到行业判断",
    capabilities: [
      {
        title: "数据工程",
        text: "能够诊断结构性缺陷，设计确定性的清洗规则，并保留可复查的数据处理路径。",
      },
      {
        title: "分析设计",
        text: "主动选择可比单位与聚合层级，降低更新频率和样本结构对结果的偏置。",
      },
      {
        title: "行业理解",
        text: "燃油价格具有地域性、品类差异与时间依赖；仪表板提供决策情境，而不是包装成因果结论。",
      },
    ],
    methodologyTitle: "一句话方法",
    methodology: "原始调价记录 → 站点日均 → 邮编日均 → 邮编月均。",
    privacyTitle: "仅公开聚合数据",
    privacy:
      "不发布任何私有客户数据、站点地址、作业题目或完整解答 Notebook；网页仅包含邮编和燃油层级的衍生聚合结果。",
    licencePrefix: "来源与许可：",
  },
};

const pipelineIcons = [Database, ShieldCheck, GitBranch, Funnel, ChartLineUp];
const assetPath = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

function number(value, digits = 0) {
  return Number(value).toLocaleString(undefined, {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
}

function priceDifference(value, language) {
  const sign = value > 0 ? "+" : value < 0 ? "−" : "";
  return `${sign}${Math.abs(Number(value)).toFixed(2)} ${
    language === "zh" ? "分/升" : "c/L"
  }`;
}

function SectionHeading({ eyebrow, title, intro }) {
  return (
    <header className="fuel-lab__section-heading">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      <span>{intro}</span>
    </header>
  );
}

function FuelChips({ values, selected, onSelect, allLabel }) {
  return (
    <div className="fuel-lab__chips" role="group" aria-label="Fuel grade">
      {values.map((fuel) => (
        <button
          type="button"
          key={fuel}
          className={selected === fuel ? "is-active" : ""}
          onClick={() => onSelect(fuel)}
          aria-pressed={selected === fuel}
        >
          {fuel === "ALL" ? allLabel : fuel}
        </button>
      ))}
    </div>
  );
}

function RegionList({ title, rows, minimum, maximum, tone, dayUnit, siteUnit }) {
  const spread = Math.max(maximum - minimum, 1);
  return (
    <div className={`fuel-lab__ranking fuel-lab__ranking--${tone}`}>
      <h3>{title}</h3>
      <div className="fuel-lab__ranking-list">
        {rows.map((row) => {
          const width = 18 + ((row.price - minimum) / spread) * 82;
          return (
            <div className="fuel-lab__rank-row" key={row.postcode}>
              <div>
                <strong>{row.label}</strong>
                <span>
                  {row.days}
                  {dayUnit} · {row.stations}
                  {siteUnit}
                </span>
              </div>
              <div className="fuel-lab__rank-track" aria-hidden="true">
                <span style={{ width: `${width}%` }} />
              </div>
              <b>{row.price.toFixed(1)}</b>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function FuelEvidenceLab({ language, onLanguageChange, onClose }) {
  const copy = labCopy[language];
  const closeButton = useRef(null);
  const [ownershipFuel, setOwnershipFuel] = useState("ALL");
  const [regionFuel, setRegionFuel] = useState("U91");
  const ownership =
    ownershipFuel === "ALL"
      ? evidence.ownership.all
      : evidence.ownership.byFuel[ownershipFuel];
  const region = evidence.regions.byFuel[regionFuel];

  const priceScale = useMemo(() => {
    const values = [...region.lowest, ...region.highest].map((row) => row.price);
    return { minimum: Math.min(...values), maximum: Math.max(...values) };
  }, [region]);

  const tankSaving = (Math.abs(ownership.meanDifference) * 50) / 100;
  const cheaperComparisons = Math.round(ownership.independentCheaperShare);
  const remainingComparisons = 100 - cheaperComparisons;
  const selectedFuelLabel =
    ownershipFuel === "ALL" ? copy.allGradesLabel : ownershipFuel;

  useEffect(() => {
    closeButton.current?.focus();
  }, []);

  return (
    <div className="fuel-lab" role="dialog" aria-modal="true" aria-labelledby="fuel-lab-title">
      <div className="fuel-lab__topbar">
        <div>
          <span className="fuel-lab__status-dot" aria-hidden="true" />
          {copy.verified}
        </div>
        <div className="fuel-lab__topbar-actions">
          <button type="button" onClick={onLanguageChange}>
            {copy.languageAction}
          </button>
          <button
            className="fuel-lab__close"
            type="button"
            onClick={onClose}
            ref={closeButton}
          >
            <span>{copy.close}</span>
            <X size={20} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="fuel-lab__scroll">
        <header className="fuel-lab__hero">
          <div className="fuel-lab__hero-copy">
            <p className="fuel-lab__eyebrow">{copy.eyebrow}</p>
            <h1 id="fuel-lab-title">
              {copy.titleLines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h1>
            <p className="fuel-lab__intro">{copy.intro}</p>
            <div className="fuel-lab__meta">
              <span>
                <SlidersHorizontal size={17} aria-hidden="true" />
                {copy.dateLabel}: {evidence.meta.period.start} — {evidence.meta.period.end}
              </span>
              <a href={evidence.meta.sourceUrl} target="_blank" rel="noreferrer">
                <ArrowSquareOut size={17} aria-hidden="true" />
                {copy.sourceAction}
              </a>
            </div>
          </div>
          <div className="fuel-lab__hero-orbit" aria-hidden="true">
            <span>59K</span>
            <i />
            <b>NSW</b>
          </div>
        </header>

        <section className="fuel-lab__kpis" aria-label="Dataset summary">
          {copy.kpis.map(([key, label, detail], index) => (
            <article key={key}>
              <span>0{index + 1}</span>
              <strong>{number(evidence.meta[key])}</strong>
              <h2>{label}</h2>
              <p>{detail}</p>
            </article>
          ))}
        </section>

        <section className="fuel-lab__section">
          <SectionHeading
            eyebrow={copy.pipelineEyebrow}
            title={copy.pipelineTitle}
            intro={copy.pipelineIntro}
          />
          <div className="fuel-lab__pipeline">
            {copy.pipeline.map((stage, index) => {
              const Icon = pipelineIcons[index];
              return (
                <article key={stage.title}>
                  <div>
                    <span>0{index + 1}</span>
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <h3>{stage.title}</h3>
                  <p>{stage.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="fuel-lab__section fuel-lab__quality-section">
          <SectionHeading
            eyebrow={copy.qualityEyebrow}
            title={copy.qualityTitle}
            intro={copy.qualityIntro}
          />
          <div className="fuel-lab__quality-grid">
            <div className="fuel-lab__repair-card">
              <Database size={26} aria-hidden="true" />
              <strong>{number(evidence.quality.rowsRepaired)}</strong>
              <span>{copy.repairedLabel}</span>
              <div>
                <p>
                  <b>{number(evidence.quality.rowsRejected)}</b>
                  {copy.rejectedLabel}
                </p>
                <p>
                  <b>{number(evidence.quality.duplicateRowsObserved)}</b>
                  {copy.duplicateLabel}
                </p>
              </div>
            </div>
            <div className="fuel-lab__match-card">
              <div className="fuel-lab__match-heading">
                <span>{copy.coverageLabel}</span>
                <strong>{number(evidence.quality.geographicCoverage, 1)}%</strong>
              </div>
              <div
                className="fuel-lab__match-bar"
                aria-label={`${copy.exactLabel}: ${evidence.quality.exactMatchRate}%`}
              >
                <span style={{ width: `${evidence.quality.exactMatchRate}%` }} />
                <i style={{ width: `${evidence.quality.fallbackRate}%` }} />
              </div>
              <div className="fuel-lab__match-legend">
                <span>
                  <i className="is-exact" />
                  {copy.exactLegend}
                  <b>{number(evidence.quality.exactMatchRate, 2)}%</b>
                </span>
                <span>
                  <i className="is-fallback" />
                  {copy.fallbackLegend}
                  <b>{number(evidence.quality.fallbackRate, 2)}%</b>
                </span>
              </div>
              <p>{copy.qualityConclusion}</p>
            </div>
          </div>
        </section>

        <section className="fuel-lab__section fuel-lab__comparison-section">
          <SectionHeading
            eyebrow={copy.ownershipEyebrow}
            title={copy.ownershipTitle}
            intro={copy.ownershipIntro}
          />
          <div className="fuel-lab__comparison-filter">
            <p>{copy.exploreFuel}</p>
            <FuelChips
              values={OWNERSHIP_FUELS}
              selected={ownershipFuel}
              onSelect={setOwnershipFuel}
              allLabel={copy.allFuel}
            />
          </div>
          <div className="fuel-lab__plain-comparison">
            <article className="fuel-lab__plain-outcome">
              <div className="fuel-lab__evidence-label">
                <span>{copy.selectedEvidence}</span>
                <b>{selectedFuelLabel}</b>
              </div>
              <strong>
                {Math.abs(ownership.meanDifference).toFixed(2)}
                <small>{language === "zh" ? "分/升" : "c/L"}</small>
              </strong>
              <h3>{copy.averageLowerLabel}</h3>
              <div className="fuel-lab__tank-saving">
                <ChartLineUp size={24} aria-hidden="true" />
                <span>
                  <small>{copy.tankSavingLabel}</small>
                  <b>A${tankSaving.toFixed(2)}</b>
                </span>
              </div>
            </article>

            <article className="fuel-lab__plain-frequency">
              <p>{copy.frequencyLead}</p>
              <div className="fuel-lab__frequency-number">
                <strong>{cheaperComparisons}</strong>
                <span>/ 100</span>
              </div>
              <h3>{copy.frequencyTail}</h3>
              <div className="fuel-lab__frequency-bar" aria-hidden="true">
                <span style={{ width: `${ownership.independentCheaperShare}%` }} />
                <i style={{ width: `${100 - ownership.independentCheaperShare}%` }} />
              </div>
              <div className="fuel-lab__frequency-legend">
                <span>
                  <i />
                  {copy.averageLowerLabel}
                  <b>{cheaperComparisons}</b>
                </span>
                <span>
                  <i />
                  {copy.remainderLabel}
                  <b>{remainingComparisons}</b>
                </span>
              </div>
            </article>
          </div>

          <div className="fuel-lab__comparison-proof">
            <div>
              <p>{copy.sameConditionTitle}</p>
              <div className="fuel-lab__condition-list">
                {copy.sameConditions.map((condition) => (
                  <span key={condition}>
                    <CheckCircle size={18} aria-hidden="true" />
                    {condition}
                  </span>
                ))}
              </div>
            </div>
            <div className="fuel-lab__proof-stats">
              <span>
                <b>{number(ownership.matchedStrata)}</b>
                {copy.matchedLabel}
              </span>
              <span>
                <b>{priceDifference(ownership.medianDifference, language)}</b>
                {copy.medianLabel}
              </span>
            </div>
          </div>
          <p className="fuel-lab__caveat">
            <ShieldCheck size={18} aria-hidden="true" />
            {copy.ownershipCaveat}
          </p>
        </section>

        <section className="fuel-lab__section fuel-lab__region-section">
          <SectionHeading
            eyebrow={copy.regionEyebrow}
            title={copy.regionTitle}
            intro={copy.regionIntro}
          />
          <div className="fuel-lab__region-controls">
            <FuelChips
              values={REGION_FUELS}
              selected={regionFuel}
              onSelect={setRegionFuel}
              allLabel={copy.allFuel}
            />
            <div>
              <span>
                <b>{region.medianPrice.toFixed(1)} c/L</b>
                {copy.monthlyMedian}
              </span>
              <span>
                <b>{region.range.toFixed(1)} c/L</b>
                {copy.regionalRange}
              </span>
              <span>
                <b>{number(region.eligiblePostcodes)}</b>
                {copy.eligible}
              </span>
            </div>
          </div>
          <div className="fuel-lab__rankings">
            <RegionList
              title={copy.lowerLabel}
              rows={region.lowest}
              minimum={priceScale.minimum}
              maximum={priceScale.maximum}
              tone="low"
              dayUnit={copy.dayUnit}
              siteUnit={copy.siteUnit}
            />
            <RegionList
              title={copy.higherLabel}
              rows={region.highest}
              minimum={priceScale.minimum}
              maximum={priceScale.maximum}
              tone="high"
              dayUnit={copy.dayUnit}
              siteUnit={copy.siteUnit}
            />
          </div>
          <div className="fuel-lab__region-note">
            <MapPin size={18} aria-hidden="true" />
            <span>
              {copy.coverageRule(
                evidence.regions.eligibility.minimumDays,
                evidence.regions.eligibility.minimumStations,
              )}{" "}
              {copy.suburbNote}
            </span>
          </div>
        </section>

        <section className="fuel-lab__section fuel-lab__outputs-section">
          <SectionHeading
            eyebrow={copy.outputsEyebrow}
            title={copy.outputsTitle}
            intro={copy.outputsIntro}
          />
          <div className="fuel-lab__output-gallery">
            {copy.originalFigures.map((figure) => (
              <figure key={figure.file}>
                <div className="fuel-lab__output-image">
                  <span>{copy.originalBadge}</span>
                  <img
                    src={assetPath(`fuel-evidence/${figure.file}`)}
                    alt={figure.alt}
                    loading="lazy"
                  />
                </div>
                <figcaption>
                  <h3>{figure.title}</h3>
                  <p>{figure.text}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="fuel-lab__outputs-note">
            <ShieldCheck size={18} aria-hidden="true" />
            {copy.outputsNote}
          </p>
        </section>

        <section className="fuel-lab__section fuel-lab__capability-section">
          <SectionHeading
            eyebrow={copy.capabilityEyebrow}
            title={copy.capabilityTitle}
          />
          <div className="fuel-lab__capabilities">
            {copy.capabilities.map((capability, index) => {
              const Icon = [Database, ChartLineUp, SlidersHorizontal][index];
              return (
                <article key={capability.title}>
                  <Icon size={27} aria-hidden="true" />
                  <span>0{index + 1}</span>
                  <h3>{capability.title}</h3>
                  <p>{capability.text}</p>
                </article>
              );
            })}
          </div>
          <div className="fuel-lab__method-grid">
            <article>
              <CheckCircle size={23} aria-hidden="true" />
              <div>
                <h3>{copy.methodologyTitle}</h3>
                <p>{copy.methodology}</p>
              </div>
            </article>
            <article>
              <ShieldCheck size={23} aria-hidden="true" />
              <div>
                <h3>{copy.privacyTitle}</h3>
                <p>{copy.privacy}</p>
              </div>
            </article>
          </div>
        </section>

        <footer className="fuel-lab__footer">
          <p>
            {copy.licencePrefix} {evidence.meta.sourceName} · {evidence.meta.license}
          </p>
          <a href={evidence.meta.sourceUrl} target="_blank" rel="noreferrer">
            {copy.sourceAction}
            <ArrowSquareOut size={16} aria-hidden="true" />
          </a>
        </footer>
      </div>
    </div>
  );
}
