import { useMemo, useRef, useState, useEffect } from "react";
import {
  Brain,
  ChartBar,
  ChartLineUp,
  CheckCircle,
  CloudSun,
  Database,
  GitBranch,
  Lightning,
  MathOperations,
  ShieldCheck,
  SlidersHorizontal,
  Sparkle,
  Stack,
  Sun,
  Target,
  TestTube,
  TrendUp,
  X,
} from "@phosphor-icons/react";
import evidence from "./data/solar-evidence.json";

const labCopy = {
  en: {
    languageAction: "中文",
    close: "Close Forecast Lab",
    verified: "AGGREGATE EVIDENCE · LOCAL REVIEW",
    eyebrow: "TIME-SERIES ML · MODEL DECISIONS · PRIVACY-SAFE",
    titleLines: ["Solar Forecast", "Evidence Lab"],
    intro:
      "A complete forecasting case study: 24 annual files become a quality-controlled temporal dataset, seven-day predictions and evidence for choosing the simplest model that earns its complexity.",
    meta: ["1996–2019 daily observations", "COMP9414 individual coursework · Mar 2026"],
    kpis: [
      ["annualFiles", "annual source files", "integrated into one chronological dataset"],
      ["rawRows", "raw daily records", "before quality filtering and feature construction"],
      ["modelArtifacts", "saved model artefacts", "covering loss, transfer and architecture studies"],
      ["evaluationRows", "later-period evaluations", "held across the 2014–2019 time window"],
    ],
    pipelineEyebrow: "01 · END-TO-END WORKFLOW",
    pipelineTitle: "From annual files to an auditable model decision",
    pipelineIntro:
      "The work is valuable because every modelling result can be traced back to a defined data, feature and evaluation decision.",
    pipeline: [
      {
        title: "Integrate",
        text: "Load 24 year-specific CSV files, attach source year and sort 8,766 records into one time axis.",
      },
      {
        title: "Quality control",
        text: "Use the supplied sensor-quality flag to exclude 1,163 unreliable readings and record the true removal rate.",
      },
      {
        title: "Represent time",
        text: "Create leap-year-aware Fourier cycles, seven-observation rolling statistics and seven lag variables.",
      },
      {
        title: "Separate periods",
        text: "Use chronological train, validation, test and later evaluation windows instead of random sampling.",
      },
      {
        title: "Train alternatives",
        text: "Compare loss functions, independent heads, transfer strategies, multi-task learning, dropout and attention.",
      },
      {
        title: "Interrogate",
        text: "Measure horizon error, bias, tail risk, statistical significance, ablations and difficult operating regimes.",
      },
    ],
    qualityEyebrow: "02 · DATA FOUNDATION",
    qualityTitle: "The forecast begins with trustworthy chronology",
    qualityIntro:
      "Quality filtering, split ownership and train-only scaling are kept visible because they determine what the scores actually mean.",
    removedLabel: "quality-flagged readings removed",
    removedDetail:
      "1,163 of 8,766 raw observations. The published rate uses the raw dataset as its denominator.",
    retainedLabel: "usable observations retained",
    retainedDetail: "7,603 daily readings remained before rolling and target windows removed edge rows.",
    splitTitle: "Chronological evidence windows",
    splitLabels: {
      train: "Train",
      validation: "Validation",
      test: "Test",
      evaluation: "Later evaluation",
    },
    splitNotes: [
      "The feature scaler is fitted on training data only.",
      "Targets remain in their physical unit, W/m².",
      "The first seven rows of each later partition are excluded from lag and rolling evaluation.",
    ],
    modelEyebrow: "03 · MODEL DECISION",
    modelTitle: "Complexity was tested—not assumed to be better",
    modelIntro:
      "Use the metric selector to compare macro results on 2,019 later-period samples from 2014–2019. Lower is better.",
    metricLabels: { rmse: "RMSE", mae: "MAE", p95: "P95 tail error" },
    modelLabels: {
      multitask: "Multi-task",
      multiOutput: "Multi-output MLP",
      individual: "7 independent MLPs",
      sequential: "Sequential transfer",
      mcDropout: "MC Dropout",
      pseudoHuber: "Pseudo-Huber MLP",
      attention: "Temporal attention",
      quantile: "Quantile MLP",
    },
    bestRmse: "Best RMSE",
    bestRmseText:
      "Multi-task reached 58.89 W/m², but improved on the simpler multi-output MLP by less than 0.001 W/m².",
    bestMae: "Best MAE",
    bestMaeText:
      "Pseudo-Huber reached 44.07 W/m²—2.4% lower than weighted MSE—while accepting a slightly higher RMSE.",
    decisionTitle: "Decision: prefer the simpler multi-output MLP",
    decisionText:
      "Its RMSE is effectively tied for best, one network produces all seven horizons, and the paired test found no significant advantage for multi-task learning (p = 0.686).",
    biasTitle: "Asymmetric loss behaved as designed",
    biasText:
      "The 0.8-quantile model produced a +48.54 W/m² mean bias. That is useful when under-prediction is costly, but unsuitable as the default point forecast.",
    horizonEyebrow: "04 · FORECAST HORIZON",
    horizonTitle: "Uncertainty grows with distance",
    horizonIntro:
      "Weighted-MSE test error rises steadily from t+1 to t+7. The page makes the operating trade-off visible instead of presenting one average score.",
    rmseLabel: "RMSE",
    maeLabel: "MAE",
    horizonConclusion:
      "RMSE increases from 57.14 to 65.23 W/m² across the seven-day horizon—a 14.2% rise.",
    ablationEyebrow: "05 · FEATURE & COMPLEXITY AUDIT",
    ablationTitle: "The useful signal came from time representation",
    ablationIntro:
      "Ablation tests show which inputs earned their place. Negative change means the smaller model improved.",
    ablationLabels: {
      fourier: "Remove Fourier cycles",
      rolling: "Remove rolling statistics",
      lagged: "Remove lag sequence",
      attention: "Remove attention",
    },
    worse: "worse",
    improved: "improved",
    ablationConclusionTitle: "What the experiment says",
    ablationConclusion:
      "Seasonality and recent distribution summaries carried real signal. The attention-based lag representation added complexity without improving this tabular daily forecast.",
    diagnosticsEyebrow: "06 · WHERE THE MODEL STRUGGLES",
    diagnosticsTitle: "Average accuracy hides operating regimes",
    diagnosticsIntro:
      "Diagnostic slices use the attention experiment on the 2011–2013 test period. They are shown as model-learning evidence, not production guarantees.",
    diagnosticTabs: {
      horizon: "Horizon",
      season: "Season",
      weather: "Radiation state",
      magnitude: "Magnitude",
    },
    diagnosticLabels: {
      shortTerm: "Short term · t+1–t+3",
      longTerm: "Long term · t+4–t+7",
      winter: "Winter",
      spring: "Spring",
      summer: "Summer",
      autumn: "Autumn",
      clear: "High-radiation / clear",
      mixed: "Mixed",
      cloudy: "Low-radiation / cloudy",
      low: "Low",
      medium: "Medium",
      high: "High",
    },
    diagnosticTakeaways: {
      horizon:
        "Long-range RMSE is 12.1% higher, reinforcing the need to communicate accuracy by horizon.",
      season:
        "Spring is the hardest season, suggesting higher variance or regime change that calendar encoding alone cannot explain.",
      weather:
        "High-radiation days are much harder than low-radiation days; a smooth history-only model misses sudden atmospheric effects.",
      magnitude:
        "Error rises with signal magnitude, so a single global score understates risk at high-output periods.",
    },
    industryEyebrow: "07 · PROJECT UNDERSTANDING",
    industryTitle: "From an ML exercise to an energy-data roadmap",
    industryIntro:
      "The experiment learns the seasonal backbone of solar radiation. The remaining error identifies what a real forecasting system must add.",
    industryCards: [
      {
        title: "Operational value",
        text: "Day-ahead radiation forecasts inform solar generation estimates, battery scheduling, reserve planning and grid-balancing decisions.",
      },
      {
        title: "Missing causal signals",
        text: "Cloud cover, temperature, humidity and numerical weather predictions explain rapid changes that historical radiation alone cannot capture.",
      },
      {
        title: "Production extension",
        text: "Join weather data by location and time, add persistence baselines, calibrate prediction intervals, then monitor drift by season and horizon.",
      },
    ],
    capabilityTitle: "What this project proves",
    capabilities: [
      "I can integrate multi-file temporal data and expose quality decisions.",
      "I can design controlled model comparisons and choose metrics for different risks.",
      "I can retain negative results, explain limitations and turn them into the next data requirement.",
    ],
    privacyTitle: "Public evidence boundary",
    privacy:
      "This page contains only recreated aggregate metrics and methodological summaries. It does not publish the assignment brief, solution notebook, source rows, trained weights, student identifier or hidden evaluation records.",
    integrityTitle: "Interpretation boundary",
    integrity:
      "Results describe this dataset and its time windows. They demonstrate experimental reasoning, not a claim of production-ready forecasting or causal performance.",
    footer:
      "Evidence derived from individual COMP9414 coursework · Aggregate portfolio presentation only",
  },
  zh: {
    languageAction: "EN",
    close: "关闭预测实验室",
    verified: "聚合证据 · 本地审核版本",
    eyebrow: "时间序列机器学习 · 模型决策 · 隐私安全",
    titleLines: ["太阳辐射预测", "证据实验室"],
    intro:
      "一份完整的预测案例：将 24 个年度文件转化为经过质量控制的时间序列数据，完成未来 7 天预测，并用证据判断模型复杂度是否真正值得。",
    meta: ["1996–2019 年逐日观测", "COMP9414 个人课程项目 · 2026年3月"],
    kpis: [
      ["annualFiles", "个年度数据文件", "整合为单一、连续的时间序列数据集"],
      ["rawRows", "条原始逐日记录", "质量筛选与特征构造前的数据规模"],
      ["modelArtifacts", "个模型权重文件", "覆盖损失函数、迁移策略与架构实验"],
      ["evaluationRows", "条后期评估样本", "来自 2014–2019 独立时间窗口"],
    ],
    pipelineEyebrow: "01 · 完整项目流程",
    pipelineTitle: "从年度文件到可复查的模型决策",
    pipelineIntro:
      "这个项目的价值在于：每一个模型结果都能追溯到明确的数据处理、特征构造和评估选择。",
    pipeline: [
      {
        title: "数据整合",
        text: "读取 24 个年度 CSV，添加来源年份，并将 8,766 条记录按日期合并为完整时间轴。",
      },
      {
        title: "质量控制",
        text: "根据传感器质量标记剔除 1,163 条不可靠观测，并正确计算异常占比。",
      },
      {
        title: "时间表达",
        text: "构造支持闰年的 Fourier 周期编码、7 个有效观测滚动统计和 7 个滞后变量。",
      },
      {
        title: "时间切分",
        text: "使用训练、验证、测试和后期评估窗口，不通过随机抽样破坏时间顺序。",
      },
      {
        title: "模型训练",
        text: "对比不同损失函数、独立模型、迁移策略、多任务学习、Dropout 与 Attention。",
      },
      {
        title: "结果审计",
        text: "分析预测跨度、偏差、尾部误差、统计显著性、消融结果与困难运行场景。",
      },
    ],
    qualityEyebrow: "02 · 数据基础",
    qualityTitle: "可信预测从可信时间轴开始",
    qualityIntro:
      "质量筛选、数据切分和仅基于训练集的标准化都被明确展示，因为它们决定了指标究竟代表什么。",
    removedLabel: "条质量异常观测被剔除",
    removedDetail: "原始 8,766 条记录中有 1,163 条；公开比例以原始数据总量为分母。",
    retainedLabel: "条有效观测被保留",
    retainedDetail: "完成质量筛选后保留 7,603 条，再由滚动窗口和预测目标处理边缘记录。",
    splitTitle: "按时间划分证据窗口",
    splitLabels: {
      train: "训练集",
      validation: "验证集",
      test: "测试集",
      evaluation: "后期评估集",
    },
    splitNotes: [
      "特征标准化参数只在训练集上拟合。",
      "预测目标保持 W/m² 原始物理单位。",
      "每个后续分区的前 7 行不参与 Lag 与 Rolling 评估。",
    ],
    modelEyebrow: "03 · 模型决策",
    modelTitle: "验证复杂度，而不是默认复杂模型更好",
    modelIntro:
      "选择指标即可查看 2014–2019 年 2,019 条后期样本上的 Macro 结果；数值越低越好。",
    metricLabels: { rmse: "RMSE", mae: "MAE", p95: "P95 尾部误差" },
    modelLabels: {
      multitask: "多任务模型",
      multiOutput: "多输出 MLP",
      individual: "7 个独立 MLP",
      sequential: "顺序迁移学习",
      mcDropout: "MC Dropout",
      pseudoHuber: "Pseudo-Huber MLP",
      attention: "时间注意力模型",
      quantile: "Quantile MLP",
    },
    bestRmse: "最低 RMSE",
    bestRmseText:
      "多任务模型达到 58.89 W/m²，但相比更简单的多输出 MLP，提升不足 0.001 W/m²。",
    bestMae: "最低 MAE",
    bestMaeText:
      "Pseudo-Huber 达到 44.07 W/m²，比 Weighted MSE 低 2.4%，代价是 RMSE 略高。",
    decisionTitle: "决策：优先选择更简单的多输出 MLP",
    decisionText:
      "其 RMSE 几乎并列最佳，一个网络即可输出 7 个预测跨度；配对检验也没有发现多任务模型的显著优势（p = 0.686）。",
    biasTitle: "非对称损失产生了预期偏差",
    biasText:
      "0.8 Quantile 模型产生 +48.54 W/m² 平均偏差。当低估代价较高时这可能有价值，但不适合作为默认点预测。",
    horizonEyebrow: "04 · 预测跨度",
    horizonTitle: "预测距离越远，不确定性越高",
    horizonIntro:
      "Weighted MSE 测试误差从 t+1 到 t+7 持续上升；页面展示真实运行取舍，而不是只给一个平均分。",
    rmseLabel: "RMSE",
    maeLabel: "MAE",
    horizonConclusion:
      "7 天预测中，RMSE 从 57.14 上升到 65.23 W/m²，增长 14.2%。",
    ablationEyebrow: "05 · 特征与复杂度审计",
    ablationTitle: "真正有效的信号来自时间表达",
    ablationIntro:
      "消融实验用于判断哪些输入真正有贡献；负数表示删减组件后模型反而提升。",
    ablationLabels: {
      fourier: "移除 Fourier 周期",
      rolling: "移除 Rolling 统计",
      lagged: "移除 Lag 序列",
      attention: "移除 Attention",
    },
    worse: "恶化",
    improved: "提升",
    ablationConclusionTitle: "实验说明了什么",
    ablationConclusion:
      "季节周期与近期分布统计包含真实信号；基于 Lag 的 Attention 表达增加了复杂度，但没有改善当前逐日表格预测。",
    diagnosticsEyebrow: "06 · 模型在哪里困难",
    diagnosticsTitle: "平均准确率会隐藏运行场景",
    diagnosticsIntro:
      "以下切片来自 Attention 实验在 2011–2013 测试集上的诊断，仅作为模型学习证据，不代表生产承诺。",
    diagnosticTabs: {
      horizon: "预测跨度",
      season: "季节",
      weather: "辐射状态",
      magnitude: "数值强度",
    },
    diagnosticLabels: {
      shortTerm: "短期 · t+1–t+3",
      longTerm: "长期 · t+4–t+7",
      winter: "冬季",
      spring: "春季",
      summer: "夏季",
      autumn: "秋季",
      clear: "高辐射／晴朗",
      mixed: "混合状态",
      cloudy: "低辐射／多云",
      low: "低",
      medium: "中",
      high: "高",
    },
    diagnosticTakeaways: {
      horizon: "长期 RMSE 高 12.1%，因此真实系统必须按预测跨度分别沟通准确率。",
      season: "春季最难预测，说明仅靠日历编码无法解释更高波动或状态变化。",
      weather: "高辐射日明显更难；只使用历史序列的平滑模型无法捕捉突发大气变化。",
      magnitude: "误差随辐射强度上升，单一全局指标会低估高输出时段风险。",
    },
    industryEyebrow: "07 · 项目理解",
    industryTitle: "从机器学习实验到能源数据路线图",
    industryIntro:
      "当前实验学习到太阳辐射的季节骨架；剩余误差则明确指出真实预测系统还必须加入哪些信息。",
    industryCards: [
      {
        title: "实际应用价值",
        text: "日级太阳辐射预测可支持光伏发电估算、电池充放电调度、备用容量规划与电网平衡。",
      },
      {
        title: "缺失的因果信号",
        text: "云量、温度、湿度与数值天气预报可以解释仅靠历史辐射无法捕捉的快速变化。",
      },
      {
        title: "生产化扩展",
        text: "按地点与时间接入天气数据，补充 Persistence 基线，校准预测区间，再按季节和跨度监控漂移。",
      },
    ],
    capabilityTitle: "这个项目证明了什么",
    capabilities: [
      "能够整合多文件时间数据，并清楚展示质量处理决策。",
      "能够设计受控模型对比，并针对不同风险选择评估指标。",
      "能够保留负面结果、解释局限，并将其转化为下一步数据需求。",
    ],
    privacyTitle: "公开证据边界",
    privacy:
      "页面只包含重新制作的聚合指标和方法概述，不公开作业说明、完整 Notebook、原始记录、模型权重、学号或隐藏评估数据。",
    integrityTitle: "结果解释边界",
    integrity:
      "这些结果描述的是当前数据集和时间窗口，用于证明实验判断能力，不代表生产级预测或因果表现。",
    footer: "证据来自 COMP9414 个人课程项目 · 仅展示聚合作品集信息",
  },
};

const pipelineIcons = [
  Database,
  ShieldCheck,
  MathOperations,
  GitBranch,
  Brain,
  TestTube,
];
const metricKeys = ["rmse", "mae", "p95"];
const diagnosticKeys = ["horizon", "season", "weather", "magnitude"];

function formatNumber(value, digits = 0) {
  return Number(value).toLocaleString(undefined, {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
}

function SectionHeading({ eyebrow, title, intro }) {
  return (
    <header className="solar-lab__section-heading">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      <span>{intro}</span>
    </header>
  );
}

export function SolarEvidenceLab({ language, onLanguageChange, onClose }) {
  const copy = labCopy[language];
  const closeButton = useRef(null);
  const [metric, setMetric] = useState("rmse");
  const [diagnostic, setDiagnostic] = useState("horizon");

  const rankedModels = useMemo(
    () =>
      evidence.models
        .filter((model) => model.key !== "quantile")
        .sort((a, b) => a[metric] - b[metric]),
    [metric],
  );

  const metricRange = useMemo(() => {
    const values = rankedModels.map((model) => model[metric]);
    return { minimum: Math.min(...values), maximum: Math.max(...values) };
  }, [metric, rankedModels]);

  const diagnosticRows = evidence.diagnostics[diagnostic];
  const diagnosticMaximum = Math.max(...diagnosticRows.map((row) => row.rmse));

  useEffect(() => {
    closeButton.current?.focus();
  }, []);

  return (
    <div
      className="solar-lab"
      role="dialog"
      aria-modal="true"
      aria-labelledby="solar-lab-title"
    >
      <div className="solar-lab__topbar">
        <div>
          <span className="solar-lab__status-dot" aria-hidden="true" />
          {copy.verified}
        </div>
        <div className="solar-lab__topbar-actions">
          <button type="button" onClick={onLanguageChange}>
            {copy.languageAction}
          </button>
          <button
            className="solar-lab__close"
            type="button"
            onClick={onClose}
            ref={closeButton}
          >
            <span>{copy.close}</span>
            <X size={20} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="solar-lab__scroll">
        <header className="solar-lab__hero">
          <div className="solar-lab__hero-copy">
            <p className="solar-lab__eyebrow">{copy.eyebrow}</p>
            <h1 id="solar-lab-title">
              {copy.titleLines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h1>
            <p className="solar-lab__intro">{copy.intro}</p>
            <div className="solar-lab__meta">
              {copy.meta.map((item, index) => (
                <span key={item}>
                  {index === 0 ? <ChartLineUp size={17} /> : <ShieldCheck size={17} />}
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="solar-lab__hero-model" aria-hidden="true">
            <div className="solar-lab__sun">
              <i />
              <span>24Y</span>
              <small>7H</small>
            </div>
            <div className="solar-lab__signal">
              {[35, 62, 48, 78, 56, 88, 67, 96, 74, 52, 43, 70].map(
                (height, index) => (
                  <i key={`${height}-${index}`} style={{ height: `${height}%` }} />
                ),
              )}
            </div>
          </div>
        </header>

        <section className="solar-lab__kpis" aria-label="Project evidence summary">
          {copy.kpis.map(([key, label, detail], index) => (
            <article key={key}>
              <span>0{index + 1}</span>
              <strong>{formatNumber(evidence.meta[key])}</strong>
              <h2>{label}</h2>
              <p>{detail}</p>
            </article>
          ))}
        </section>

        <section className="solar-lab__section">
          <SectionHeading
            eyebrow={copy.pipelineEyebrow}
            title={copy.pipelineTitle}
            intro={copy.pipelineIntro}
          />
          <div className="solar-lab__pipeline">
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

        <section className="solar-lab__section solar-lab__foundation">
          <SectionHeading
            eyebrow={copy.qualityEyebrow}
            title={copy.qualityTitle}
            intro={copy.qualityIntro}
          />
          <div className="solar-lab__quality-grid">
            <article className="solar-lab__quality-card solar-lab__quality-card--removed">
              <ShieldCheck size={27} aria-hidden="true" />
              <strong>{formatNumber(evidence.meta.qualityRemoved)}</strong>
              <h3>{copy.removedLabel}</h3>
              <div className="solar-lab__quality-rate">
                <span style={{ width: `${evidence.meta.qualityRemovedRate}%` }} />
                <b>{formatNumber(evidence.meta.qualityRemovedRate, 2)}%</b>
              </div>
              <p>{copy.removedDetail}</p>
            </article>
            <article className="solar-lab__quality-card solar-lab__quality-card--retained">
              <Database size={27} aria-hidden="true" />
              <strong>{formatNumber(evidence.meta.cleanRows)}</strong>
              <h3>{copy.retainedLabel}</h3>
              <div className="solar-lab__quality-rate">
                <span style={{ width: `${100 - evidence.meta.qualityRemovedRate}%` }} />
                <b>{formatNumber(100 - evidence.meta.qualityRemovedRate, 2)}%</b>
              </div>
              <p>{copy.retainedDetail}</p>
            </article>
          </div>

          <div className="solar-lab__split-panel">
            <div className="solar-lab__split-heading">
              <div>
                <GitBranch size={23} aria-hidden="true" />
                <h3>{copy.splitTitle}</h3>
              </div>
              <span>{evidence.meta.periodStart.slice(0, 4)} → {evidence.meta.periodEnd.slice(0, 4)}</span>
            </div>
            <div className="solar-lab__split-track">
              {evidence.splits.map((split) => (
                <div
                  className={`solar-lab__split solar-lab__split--${split.key}`}
                  key={split.key}
                  style={{ width: `${split.share}%` }}
                >
                  <span>{copy.splitLabels[split.key]}</span>
                  <b>{split.years}</b>
                  <small>{formatNumber(split.rows)}</small>
                </div>
              ))}
            </div>
            <div className="solar-lab__split-notes">
              {copy.splitNotes.map((note) => (
                <span key={note}>
                  <CheckCircle size={17} aria-hidden="true" />
                  {note}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="solar-lab__section solar-lab__models">
          <SectionHeading
            eyebrow={copy.modelEyebrow}
            title={copy.modelTitle}
            intro={copy.modelIntro}
          />
          <div className="solar-lab__metric-tabs" role="group" aria-label="Model metric">
            {metricKeys.map((key) => (
              <button
                type="button"
                key={key}
                className={metric === key ? "is-active" : ""}
                onClick={() => setMetric(key)}
                aria-pressed={metric === key}
              >
                {copy.metricLabels[key]}
              </button>
            ))}
          </div>

          <div className="solar-lab__model-grid">
            <div className="solar-lab__model-ranking">
              {rankedModels.map((model, index) => {
                const spread = Math.max(metricRange.maximum - metricRange.minimum, 0.001);
                const score = 34 + ((metricRange.maximum - model[metric]) / spread) * 66;
                return (
                  <div className="solar-lab__model-row" key={model.key}>
                    <span>0{index + 1}</span>
                    <div>
                      <strong>{copy.modelLabels[model.key]}</strong>
                      <div className="solar-lab__model-track" aria-hidden="true">
                        <i style={{ width: `${score}%` }} />
                      </div>
                    </div>
                    <b>{formatNumber(model[metric], 2)}</b>
                  </div>
                );
              })}
            </div>
            <div className="solar-lab__model-highlights">
              <article>
                <Target size={25} aria-hidden="true" />
                <span>{copy.bestRmse}</span>
                <strong>58.89</strong>
                <p>{copy.bestRmseText}</p>
              </article>
              <article>
                <ChartBar size={25} aria-hidden="true" />
                <span>{copy.bestMae}</span>
                <strong>44.07</strong>
                <p>{copy.bestMaeText}</p>
              </article>
            </div>
          </div>

          <div className="solar-lab__decision-grid">
            <article>
              <CheckCircle size={24} aria-hidden="true" />
              <div>
                <h3>{copy.decisionTitle}</h3>
                <p>{copy.decisionText}</p>
              </div>
            </article>
            <article>
              <SlidersHorizontal size={24} aria-hidden="true" />
              <div>
                <h3>{copy.biasTitle}</h3>
                <p>{copy.biasText}</p>
              </div>
            </article>
          </div>
        </section>

        <section className="solar-lab__section solar-lab__horizon">
          <SectionHeading
            eyebrow={copy.horizonEyebrow}
            title={copy.horizonTitle}
            intro={copy.horizonIntro}
          />
          <div className="solar-lab__horizon-chart">
            {evidence.horizonErrors.map((row) => (
              <div className="solar-lab__horizon-column" key={row.horizon}>
                <div className="solar-lab__horizon-values">
                  <span
                    style={{ height: `${(row.rmse / 70) * 100}%` }}
                    title={`${copy.rmseLabel}: ${row.rmse.toFixed(2)}`}
                  />
                  <i
                    style={{ height: `${(row.mae / 70) * 100}%` }}
                    title={`${copy.maeLabel}: ${row.mae.toFixed(2)}`}
                  />
                </div>
                <strong>{row.horizon}</strong>
                <small>{row.rmse.toFixed(1)}</small>
              </div>
            ))}
          </div>
          <div className="solar-lab__chart-legend">
            <span><i />{copy.rmseLabel}</span>
            <span><i />{copy.maeLabel}</span>
            <p>{copy.horizonConclusion}</p>
          </div>
        </section>

        <section className="solar-lab__section solar-lab__ablation">
          <SectionHeading
            eyebrow={copy.ablationEyebrow}
            title={copy.ablationTitle}
            intro={copy.ablationIntro}
          />
          <div className="solar-lab__ablation-grid">
            {evidence.ablations.map((item) => {
              const positive = item.rmseChange > 0;
              return (
                <article className={positive ? "is-worse" : "is-better"} key={item.key}>
                  <span>{copy.ablationLabels[item.key]}</span>
                  <strong>
                    {item.rmseChange > 0 ? "+" : ""}
                    {item.rmseChange.toFixed(2)}
                    <small> RMSE</small>
                  </strong>
                  <div className="solar-lab__ablation-axis">
                    <i style={{ width: `${Math.abs(item.rmseChange) * 9}%` }} />
                  </div>
                  <p>{positive ? copy.worse : copy.improved}</p>
                </article>
              );
            })}
          </div>
          <div className="solar-lab__ablation-conclusion">
            <Sparkle size={26} aria-hidden="true" />
            <div>
              <h3>{copy.ablationConclusionTitle}</h3>
              <p>{copy.ablationConclusion}</p>
            </div>
          </div>
        </section>

        <section className="solar-lab__section solar-lab__diagnostics">
          <SectionHeading
            eyebrow={copy.diagnosticsEyebrow}
            title={copy.diagnosticsTitle}
            intro={copy.diagnosticsIntro}
          />
          <div className="solar-lab__diagnostic-tabs" role="group" aria-label="Error slice">
            {diagnosticKeys.map((key) => (
              <button
                type="button"
                key={key}
                className={diagnostic === key ? "is-active" : ""}
                onClick={() => setDiagnostic(key)}
                aria-pressed={diagnostic === key}
              >
                {copy.diagnosticTabs[key]}
              </button>
            ))}
          </div>
          <div className="solar-lab__diagnostic-grid">
            <div className="solar-lab__diagnostic-bars">
              {diagnosticRows.map((row) => (
                <div key={row.key}>
                  <span>{copy.diagnosticLabels[row.key]}</span>
                  <div>
                    <i style={{ width: `${(row.rmse / diagnosticMaximum) * 100}%` }} />
                    <b>{row.rmse.toFixed(1)}</b>
                  </div>
                  <small>{copy.maeLabel} {row.mae.toFixed(1)}</small>
                </div>
              ))}
            </div>
            <article className="solar-lab__diagnostic-takeaway">
              <CloudSun size={31} aria-hidden="true" />
              <span>MODEL READING</span>
              <p>{copy.diagnosticTakeaways[diagnostic]}</p>
            </article>
          </div>
        </section>

        <section className="solar-lab__section solar-lab__industry">
          <SectionHeading
            eyebrow={copy.industryEyebrow}
            title={copy.industryTitle}
            intro={copy.industryIntro}
          />
          <div className="solar-lab__industry-grid">
            {copy.industryCards.map((card, index) => {
              const Icon = [Lightning, CloudSun, TrendUp][index];
              return (
                <article key={card.title}>
                  <Icon size={28} aria-hidden="true" />
                  <span>0{index + 1}</span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              );
            })}
          </div>
          <div className="solar-lab__capability-panel">
            <div>
              <Stack size={27} aria-hidden="true" />
              <h3>{copy.capabilityTitle}</h3>
            </div>
            <ul>
              {copy.capabilities.map((capability) => (
                <li key={capability}>
                  <CheckCircle size={18} aria-hidden="true" />
                  {capability}
                </li>
              ))}
            </ul>
          </div>
          <div className="solar-lab__boundary-grid">
            <article>
              <ShieldCheck size={24} aria-hidden="true" />
              <div>
                <h3>{copy.privacyTitle}</h3>
                <p>{copy.privacy}</p>
              </div>
            </article>
            <article>
              <Sun size={24} aria-hidden="true" />
              <div>
                <h3>{copy.integrityTitle}</h3>
                <p>{copy.integrity}</p>
              </div>
            </article>
          </div>
        </section>

        <footer className="solar-lab__footer">
          <p>{copy.footer}</p>
          <span>
            <ShieldCheck size={16} aria-hidden="true" />
            {language === "zh" ? "未包含私有数据" : "No private data included"}
          </span>
        </footer>
      </div>
    </div>
  );
}
