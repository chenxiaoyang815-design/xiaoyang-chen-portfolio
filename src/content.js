export const content = {
  en: {
    meta: {
      title: "Xiaoyang Chen — Data · Software · Delivery",
      description:
        "Bilingual portfolio of Xiaoyang Chen, a Sydney-based data engineer and software delivery professional.",
    },
    language: {
      label: "Language",
      switchTo: "切换至中文",
      short: "中文",
    },
    nav: {
      work: "Selected work",
      experience: "Experience",
      capabilities: "Capabilities",
      profile: "Profile",
      contact: "Contact",
      menu: "Open navigation",
      close: "Close navigation",
    },
    hero: {
      eyebrow: "DATA TO IMPACT",
      titleA: "I build systems that make",
      titleB: "complex data useful.",
      name: "Xiaoyang Chen",
      role: "Data Engineering · Analytics · Software Delivery",
      summary:
        "I turn ambiguous requirements and complex datasets into reliable data systems, decision-ready analytics and software that people can trust.",
      primary: "View project evidence",
      secondary: "Download English CV",
      availability: "Open to data engineering, analytics and software opportunities",
      location: "Sydney, Australia",
      scroll: "Explore",
      portraitAlt: "Portrait of Xiaoyang Chen",
    },
    metrics: [
      {
        value: "30%",
        label: "faster internal pipelines",
        detail: "through reporting and MySQL automation",
      },
      {
        value: "59,000+",
        label: "fuel-price records analysed",
        detail: "across NSW regional datasets",
      },
      {
        value: "97.36%",
        label: "exact geo match rate",
        detail: "before a transparent postcode fallback",
      },
      {
        value: "99/100",
        label: "database project score",
        detail: "for an optimised reporting system",
      },
    ],
    spotlight: {
      label: "REAL CLIENT PROJECT · IP-GOVERNED · IN PROGRESS",
      title: "Atlassian Home Dashboard — Jira Road Map",
      intro:
        "Core capability: connect through Forge to authorised, real Jira product datasets; surface backend user, project and release information; and turn raw records into calculated operational indicators. The university project is governed by a signed intellectual-property agreement granting Atlassian usage rights.",
      tags: [
        "COMP9900",
        "Atlassian Forge",
        "Jira Data APIs",
        "Node.js",
        "TypeScript",
        "IP Agreement",
      ],
      governance: {
        eyebrow: "IP & DATA GOVERNANCE",
        title: "Built for authorised enterprise data",
        text:
          "The team signed a university intellectual-property agreement covering the work, with usage rights granted to Atlassian. The portfolio shows only a synthetic reconstruction—no live Jira user records or confidential client data are exposed.",
      },
      processTitle: "From governed data access to decision-ready evidence",
      process: [
        {
          title: "Understand",
          text: "Mapped Jira Home, Road Map behaviour and the user, project, release and work-item records needed by the dashboard.",
        },
        {
          title: "Govern",
          text: "Defined authorised data boundaries, confidentiality expectations and Atlassian usage rights under the signed IP agreement.",
        },
        {
          title: "Connect",
          text: "Designed Forge API queries to read and normalise real Jira user, project, release and issue data for the Home dashboard.",
        },
        {
          title: "Calculate",
          text: "Derived completion, workload and release-visibility indicators, then surfaced the results with native Jira destinations.",
        },
        {
          title: "Validate",
          text: "Planned permission, unit, end-to-end and scale tests using synthetic enterprise data before authorised-environment verification.",
        },
      ],
      evidenceTitle: "What the engagement demonstrates",
      evidence: [
        "Real Jira dataset integration through Atlassian Forge",
        "Backend user information translated into safe dashboard views",
        "Calculated release and workload results, not raw data alone",
        "Requirements discovery with a real industry client",
        "IP, access control and testing treated as engineering requirements",
      ],
      demo: {
        eyebrow: "CONNECTED DATA MODEL · SYNTHETIC PORTFOLIO VIEW",
        title: "Jira data & delivery intelligence",
        caption:
          "This interaction demonstrates how authorised Jira user, project, release and work-item records can become calculated dashboard evidence. Every name and figure below is synthetic; no live Jira account data is displayed.",
        signals: [
          {
            label: "Connected source",
            value: "Jira Cloud",
            detail: "authorised Forge access",
          },
          {
            label: "User records",
            value: "428",
            detail: "synthetic backend profiles",
          },
          {
            label: "Calculated completion",
            value: "61.4%",
            detail: "weighted across visible work",
          },
        ],
        windowLabel: "Release window",
        windowOptions: {
          30: "Next 30 days",
          60: "Next 60 days",
          90: "Next 90 days",
        },
        columns: {
          release: "Release",
          due: "Due",
          progress: "Completed",
          items: "Work items",
          owner: "Owner / team",
          analysis: "Calculated signal",
          action: "Destination",
        },
        action: "View release",
        empty: "No demonstration releases in this window.",
        rows: [
          {
            name: "Release Alpha",
            due: "12 Aug 2026",
            progress: 72,
            items: "124 / 172",
            owner: "Demo User 01 · Platform",
            analysis: "On track",
            tone: "positive",
            days: 18,
          },
          {
            name: "Release Beta",
            due: "28 Aug 2026",
            progress: 58,
            items: "88 / 152",
            owner: "Demo User 02 · Data",
            analysis: "Watch",
            tone: "watch",
            days: 28,
          },
          {
            name: "Release Gamma",
            due: "15 Sep 2026",
            progress: 34,
            items: "63 / 185",
            owner: "Demo User 03 · Apps",
            analysis: "At risk",
            tone: "risk",
            days: 48,
          },
          {
            name: "Release Delta",
            due: "29 Sep 2026",
            progress: 21,
            items: "34 / 162",
            owner: "Demo User 04 · Core",
            analysis: "At risk",
            tone: "risk",
            days: 78,
          },
        ],
      },
    },
    work: {
      eyebrow: "SELECTED PROJECTS",
      title: "Engineering depth, measured in evidence.",
      intro:
        "Projects spanning machine-learning forecasting, distributed data processing, data quality and database engineering.",
      projectLabel: "Project",
      projects: [
        {
          id: "solar-evidence-lab",
          type: "MACHINE LEARNING · TIME SERIES",
          title: "24-Year Solar Forecasting Lab",
          date: "Mar 2026",
          summary:
            "An evidence-led PyTorch workflow that integrates 24 annual files, forecasts seven future horizons and tests whether additional model complexity delivers measurable value.",
          points: [
            "Integrated 8,766 daily records from 1996–2019 and removed 1,163 quality-flagged observations.",
            "Trained 22 model artefacts across custom losses, transfer learning, multi-task learning, MC Dropout and attention.",
            "Pseudo-Huber achieved the lowest later-period MAE at 44.07 W/m²; multi-task and the simpler multi-output MLP were effectively tied on RMSE.",
            "Ablation and regime analysis showed seasonal and rolling features mattered most, while high-radiation and longer-horizon forecasts remained hardest.",
          ],
          tech: ["PyTorch", "Time-series ML", "Data quality", "Model evaluation"],
          labCta: "Explore forecast lab",
        },
        {
          id: "mapreduce-psr",
          type: "DISTRIBUTED DATA · MAPREDUCE",
          title: "Regional Profit Opportunity Ranking",
          date: "Sep 2025",
          summary:
            "Turned sales transaction logs into a decision-ready shortlist: for every region and year, identify the product categories earning more profit per sales dollar than the local benchmark.",
          points: [
            "Grouped transactions by region, year and category across Hadoop workers, with reliable date, CSV and numeric parsing.",
            "Used local pre-aggregation before network transfer, reducing repeated data passed through the distributed job.",
            "Returned only a configurable Top-K shortlist above each region-year baseline, with reproducible tie handling.",
            "Made the scaling trade-off explicit: one final reducer guarantees the required global order; production output would be partitioned to avoid a single-node bottleneck.",
          ],
          tech: ["Hadoop", "MRJob", "MapReduce", "Python"],
          evidence: {
            ariaLabel:
              "How the MapReduce project turns sales transactions into a business decision",
            steps: [
              {
                label: "INPUT",
                value: "Sales transaction logs",
                meta: "date · region · category · sales · profit",
              },
              {
                label: "COMPARE",
                value: "Profit per $1 sales",
                meta: "category vs region-year benchmark",
              },
              {
                label: "DECISION",
                value: "Above-benchmark Top-K",
                meta: "ranked shortlist for each market and year",
              },
            ],
            sampleLabel: "SAMPLE RESULT · SUPPLIED TEACHING DATA",
            sampleContext: "South · 2014 · Storage",
            sampleMetric: "$0.87 profit / $1 sales",
            sampleNote:
              "PSR 0.8667 — surfaced because the category outperformed its region-year benchmark.",
            distributedNote:
              "Why MapReduce mattered: aggregation can run across multiple workers; only the final ordering step is centralised to satisfy the required output contract.",
          },
        },
        {
          id: "fuel-evidence-lab",
          type: "DATA ENGINEERING · ANALYTICS",
          title: "NSW Fuel Intelligence",
          date: "Mar 2025",
          summary:
            "A reproducible analysis of 59,256 January 2025 FuelCheck records, built to show how reliable engineering choices become decision-ready price evidence.",
          points: [
            "Repaired 28,151 structurally inconsistent rows through schema-aware ingestion without a hard-coded breakpoint.",
            "Achieved 97.36% exact postcode–suburb matching and 100% coverage with a clearly labelled deterministic fallback.",
            "Used station-day → postcode-day → postcode-month aggregation to avoid overweighting frequent price updates.",
            "Compared 1,284 matched postcode–fuel–day strata and communicated the result as descriptive—not causal—evidence.",
          ],
          tech: ["Pandas", "Data pipelines", "Data quality", "Statistical comparison"],
          labCta: "Explore Data Lab",
        },
        {
          id: "postgresql-evidence",
          type: "DATABASE ENGINEERING",
          title: "University Data Query & Prerequisite Engine",
          date: "Sep 2024",
          summary:
            "Built a reusable PostgreSQL access layer over the 50 MB MyMyUNSW database, turning a dense relational schema into reliable answers about performance, teaching coverage and course dependencies—awarded 99/100.",
          points: [
            "Translated a multi-table university data model into eight reusable SQL views and two parameterised PL/pgSQL functions.",
            "Handled NULL marks, repeated course attempts, credit-weighted WAM and staff with multiple organisational roles without hard-coded records.",
            "Used a recursive CTE to answer whether one subject is a direct or multi-step prerequisite of another.",
            "Packaged the solution for a clean one-pass database load and checked it against the supplied 20-case autotest suite.",
          ],
          tech: ["PostgreSQL", "SQL", "PL/pgSQL", "Recursive CTE"],
          evidence: {
            ariaLabel:
              "Verified scope and decision outputs of the PostgreSQL database project",
            stats: [
              { value: "99/100", label: "assessment result" },
              { value: "50 MB", label: "provided database dump" },
              { value: "8 + 2", label: "views + PL/pgSQL functions" },
              { value: "20", label: "supplied autotests" },
            ],
            answerLabel: "WHAT THE SYSTEM CAN ANSWER",
            answers: [
              {
                label: "PERFORMANCE",
                value:
                  "Which students consistently exceed a threshold, including credit-weighted WAM?",
              },
              {
                label: "TEACHING COVERAGE",
                value:
                  "Which courses were offered, who taught them and whether every lecturer belonged to CSE?",
              },
              {
                label: "COURSE DEPENDENCIES",
                value:
                  "Is one subject a direct—or multi-step—prerequisite of another?",
              },
            ],
            note:
              "Engineering constraint: every operation was designed to run on a fresh database instance without hard-coded records and within the course's 120-second execution requirement.",
          },
        },
      ],
    },
    experience: {
      eyebrow: "EXPERIENCE & EDUCATION",
      title: "Built across industry and rigorous coursework.",
      industryTitle: "Industry experience",
      educationTitle: "Education",
      industry: {
        role: "IT Department Intern",
        company: "Zhongfutong Group · Fuzhou, China",
        date: "Jul–Aug 2023",
        points: [
          "Automated daily reporting scripts and MySQL queries, reducing internal pipeline runtime by 30%; used idempotent tasks and alerts to reduce failures.",
          "Integrated and privately deployed OpenIM, including delivery monitoring for sends, receipts and latency.",
          "Managed a Node.js front end on Windows/npm and an Ubuntu back end with systemd/Docker; standardised builds, environment configuration, releases and rollback.",
          "Delivered WebRTC video calling with STUN/TURN and weak-network adaptation.",
          "Supported internal and external requirements end to end and documented lightweight SOPs for release, monitoring and incident response.",
        ],
      },
      education: [
        {
          degree: "Master of Information Technology",
          focus: "Data Science & Engineering",
          school: "University of New South Wales · Sydney",
          date: "Sep 2024 – Sep 2026 (expected)",
          detail:
            "WAM 70/100. Core study: AI, machine learning, deep learning, big data management, graph data analytics, Python, databases and data structures.",
        },
        {
          degree: "Bachelor of Engineering",
          focus: "Intelligent Manufacturing Engineering",
          school: "Xiamen University of Technology",
          date: "Sep 2020 – Jun 2024",
          detail: "Third Prize Scholarship (2023) · Outstanding Graduate (2024).",
        },
        {
          degree: "Bachelor of Engineering",
          focus: "Computer Science & Technology · second degree",
          school: "Xiamen University of Technology",
          date: "Mar 2021 – Jun 2024",
          detail: "Completed alongside the intelligent manufacturing degree.",
        },
      ],
    },
    capabilities: {
      eyebrow: "TECHNICAL CAPABILITIES",
      title: "A data-driven, full-stack toolkit.",
      groups: [
        {
          title: "Programming",
          items: ["Python", "R", "SQL", "Java", "C", "C++", "JavaScript", "HTML"],
        },
        {
          title: "Data engineering",
          items: [
            "MySQL",
            "PostgreSQL",
            "ETL pipelines",
            "SQL joins, views & grouping",
            "Git",
            "Linux",
            "Snowflake",
            "BigQuery",
          ],
        },
        {
          title: "Machine learning & big data",
          items: [
            "PyTorch",
            "Decision trees",
            "K-means",
            "DBSCAN",
            "Naïve Bayes",
            "Cross-validation",
            "Hadoop MapReduce",
            "Spark",
          ],
        },
        {
          title: "Analysis & visualisation",
          items: [
            "Pandas",
            "NumPy",
            "Excel",
            "Google Sheets",
            "MATLAB",
            "Matplotlib",
            "Visualisation dashboards",
          ],
        },
        {
          title: "Graph algorithms",
          items: ["Graph theory", "A*", "Dijkstra", "Tree Cover", "Path search"],
        },
        {
          title: "Software delivery",
          items: [
            "Node.js",
            "OpenIM",
            "WebRTC",
            "Docker",
            "systemd",
            "Release & rollback",
            "Monitoring",
          ],
        },
      ],
    },
    profile: {
      eyebrow: "LEADERSHIP, RECOGNITION & RESEARCH",
      title: "Technical discipline with a wider point of view.",
      employmentAward: {
        eyebrow: "CAREER READINESS · EY-COLLABORATIVE PROCESS",
        title: "UNSW Employment Award",
        date: "May–Jul 2026",
        badge: "COMPETITIVELY SELECTED",
        text:
          "Selected through a competitive CV review and completed an end-to-end, real-world recruitment process developed with EY. For the group technical challenge, the team examined an AI problem from multiple stakeholder perspectives and produced a structured project proposal rather than a single-feature answer.",
        proposalTitle: "Proposal dimensions",
        proposal: [
          "Problem framing & stakeholder value",
          "Solution architecture & technical feasibility",
          "Data governance, privacy & responsible AI",
          "Delivery roadmap, risks & team ownership",
          "Success metrics & executive communication",
        ],
      },
      leadershipTitle: "Leadership & community",
      leadership: [
        {
          title: "ICPC Preliminary · UNSW volunteer",
          date: "Sep 2025",
          text: "Managed an examination room, prepared the competition environment, handled real-time technical issues, ensured rule compliance, and secured post-event submissions.",
        },
        {
          title: "Leadership Foundations Program · UNSW Employability",
          date: "Apr 2025",
          text: "AHEGS-recognised training in leadership, communication, teamwork, self-awareness, resilience and inclusive collaboration.",
        },
        {
          title: "China International Fair for Investment & Trade volunteer",
          date: "Mar 2021",
          text: "Supported cost monitoring and financial tracking at the 21st CIFIT and received a volunteer certificate.",
        },
      ],
      awardsTitle: "Awards",
      awards: [
        "UNSW Employment Award · selected through competitive CV review (May–Jul 2026)",
        "Second Prize · 6th National Mathematics Competition for College Students, non-mathematics group (Jul 2023)",
        "First Prize · 2023 Algorithm Competition for College Students, national level (Apr 2023)",
        "Third Prize · 4th National Mathematical Ability Challenge, national level (Mar 2023)",
        "Third Prize Scholarship · Xiamen University of Technology (2023)",
        "Outstanding Graduate · Xiamen University of Technology (2024)",
      ],
      publicationsTitle: "Publications",
      publications: [
        "Research on Internet Technologies in Big Data Information Security · 智慧引航, issues 7–8 (2023)",
        "Research on Geographic Information System Technologies in a Computer Network Context · 科学与生活, issue 7 (2023)",
      ],
      certificationsTitle: "Certifications",
      certifications: [
        "Software Copyright Registration · Analytic Hierarchy Process Data Evaluation Software V1.0 · 2025SR0042252 (Jan 2025)",
        "CS50x: Introduction to Computer Science · Harvard University (Nov 2024)",
        "Business Data Analyst Occupational Ability Certificate · Level 4 (Aug 2024)",
        "National Computer Rank Examination · Level 3 Network Technology · 35673501862609",
        "MIIT Talent Evaluation Certificate · Mathematical Modelling · GXRCCP018202209695",
      ],
      languagesTitle: "Languages & working style",
      languages: [
        "Mandarin Chinese · native",
        "English · working proficiency; CET-6; IELTS 6.5 (Listening 7.0)",
        "Research-led problem solving and clear communication that moves decisions toward delivery",
      ],
    },
    contact: {
      eyebrow: "LET’S BUILD SOMETHING USEFUL",
      title: "Data and software — grounded in evidence.",
      text:
        "Based in Sydney and open to opportunities where rigorous engineering, practical analysis and clear client communication matter.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      linkedinLabel: "LinkedIn",
      locationLabel: "Location",
      location: "Sydney, NSW, Australia",
      download: "Download English CV",
      backToTop: "Back to top",
      rights: "Designed and built as a bilingual engineering portfolio.",
    },
  },
  zh: {
    meta: {
      title: "陈萧仰 — 数据 · 软件 · 项目交付",
      description: "陈萧仰的中英双语个人作品集，展示数据工程、分析与软件交付能力。",
    },
    language: {
      label: "语言",
      switchTo: "Switch to English",
      short: "EN",
    },
    nav: {
      work: "精选项目",
      experience: "经历",
      capabilities: "能力",
      profile: "个人履历",
      contact: "联系",
      menu: "打开导航",
      close: "关闭导航",
    },
    hero: {
      eyebrow: "从数据到实际影响",
      titleA: "我让复杂数据",
      titleB: "真正产生价值。",
      name: "陈萧仰",
      role: "数据工程 · 数据分析 · 软件交付",
      summary:
        "我将模糊需求与复杂数据转化为可靠的数据系统、可用于决策的分析结果，以及值得用户信赖的软件产品。",
      primary: "查看项目证据",
      secondary: "下载中文简历",
      availability: "开放数据工程、分析与软件方向工作机会",
      location: "澳大利亚 · 悉尼",
      scroll: "继续浏览",
      portraitAlt: "陈萧仰的个人证件照",
    },
    metrics: [
      {
        value: "30%",
        label: "内部数据流水线提速",
        detail: "通过日报脚本与 MySQL 自动化实现",
      },
      {
        value: "59,000+",
        label: "燃油价格数据分析",
        detail: "覆盖新州区域数据集",
      },
      {
        value: "97.36%",
        label: "地理精确匹配率",
        detail: "随后使用透明的邮编回退规则",
      },
      {
        value: "99/100",
        label: "数据库项目评分",
        detail: "来自高效报表系统项目",
      },
    ],
    spotlight: {
      label: "真实客户项目 · 知识产权约束 · 进行中",
      title: "Atlassian Home Dashboard — Jira Road Map",
      intro:
        "项目核心能力是通过 Forge 连接经过授权的真实 Jira 产品数据集，呈现后台用户、项目与版本信息，并将原始记录计算为可用于决策的运营指标。该校内项目已签署知识产权协议，相关使用权归 Atlassian 所有。",
      tags: [
        "COMP9900",
        "Atlassian Forge",
        "Jira 数据 API",
        "Node.js",
        "TypeScript",
        "知识产权协议",
      ],
      governance: {
        eyebrow: "知识产权与数据治理",
        title: "面向授权企业数据进行设计",
        text:
          "团队已签署校内知识产权协议，约定相关成果的使用权归 Atlassian 所有。作品集仅展示合成交互还原，不呈现任何真实 Jira 用户记录或客户机密数据。",
      },
      processTitle: "从受控数据接入到决策证据",
      process: [
        {
          title: "理解",
          text: "梳理 Jira Home、Road Map 行为，以及仪表盘所需的用户、项目、版本和工作项记录。",
        },
        {
          title: "治理",
          text: "依据知识产权协议明确授权数据边界、保密要求与 Atlassian 对项目成果的使用权。",
        },
        {
          title: "连接",
          text: "设计 Forge API 查询，读取并标准化真实 Jira 用户、项目、版本与 Issue 数据。",
        },
        {
          title: "计算",
          text: "计算完成度、工作负载和版本可见性指标，并通过 Jira 原生跳转呈现分析结果。",
        },
        {
          title: "验证",
          text: "先以企业规模合成数据验证权限、单元测试、端到端流程与性能，再进入授权环境核验。",
        },
      ],
      evidenceTitle: "这段客户实践体现了什么",
      evidence: [
        "通过 Atlassian Forge 接入真实 Jira 数据集",
        "将后台用户信息转化为安全可读的仪表盘视图",
        "展示经过计算的版本与工作负载结果，而不只是原始数据",
        "面向真实行业客户完成需求发现与沟通",
        "将知识产权、访问控制和测试作为工程要求",
      ],
      demo: {
        eyebrow: "连接数据模型 · 作品集合成视图",
        title: "Jira 数据与交付洞察",
        caption:
          "该交互展示如何把经过授权的 Jira 用户、项目、版本和工作项记录转化为可计算的仪表盘证据。下方名称与数值全部为合成数据，不包含真实 Jira 账户信息。",
        signals: [
          {
            label: "连接数据源",
            value: "Jira Cloud",
            detail: "经过授权的 Forge 访问",
          },
          {
            label: "后台用户记录",
            value: "428",
            detail: "合成用户档案",
          },
          {
            label: "计算完成度",
            value: "61.4%",
            detail: "按可见工作项加权",
          },
        ],
        windowLabel: "发布窗口",
        windowOptions: {
          30: "未来 30 天",
          60: "未来 60 天",
          90: "未来 90 天",
        },
        columns: {
          release: "版本",
          due: "发布日期",
          progress: "完成进度",
          items: "工作项",
          owner: "负责人 / 团队",
          analysis: "计算信号",
          action: "目标页面",
        },
        action: "查看版本",
        empty: "该时间范围内没有演示版本。",
        rows: [
          {
            name: "演示版本 Alpha",
            due: "2026年8月12日",
            progress: 72,
            items: "124 / 172",
            owner: "演示用户 01 · 平台",
            analysis: "按计划推进",
            tone: "positive",
            days: 18,
          },
          {
            name: "演示版本 Beta",
            due: "2026年8月28日",
            progress: 58,
            items: "88 / 152",
            owner: "演示用户 02 · 数据",
            analysis: "需要关注",
            tone: "watch",
            days: 28,
          },
          {
            name: "演示版本 Gamma",
            due: "2026年9月15日",
            progress: 34,
            items: "63 / 185",
            owner: "演示用户 03 · 应用",
            analysis: "存在风险",
            tone: "risk",
            days: 48,
          },
          {
            name: "演示版本 Delta",
            due: "2026年9月29日",
            progress: 21,
            items: "34 / 162",
            owner: "演示用户 04 · 核心",
            analysis: "存在风险",
            tone: "risk",
            days: 78,
          },
        ],
      },
    },
    work: {
      eyebrow: "精选项目",
      title: "用可验证的成果体现工程深度。",
      intro: "项目覆盖机器学习预测、分布式处理、数据质量与数据库工程。",
      projectLabel: "项目",
      projects: [
        {
          id: "solar-evidence-lab",
          type: "机器学习 · 时间序列",
          title: "24 年太阳辐射预测实验室",
          date: "2026年3月",
          summary:
            "构建以证据为核心的 PyTorch 预测流程：整合 24 个年度文件、预测未来 7 个时间跨度，并验证增加模型复杂度是否真正带来价值。",
          points: [
            "整合 1996–2019 年 8,766 条逐日记录，剔除 1,163 条质量异常观测。",
            "训练 22 个模型权重，覆盖自定义损失、迁移学习、多任务学习、MC Dropout 与 Attention。",
            "Pseudo-Huber 在后期评估集取得最低 MAE 44.07 W/m²；多任务模型与更简单的多输出 MLP 在 RMSE 上几乎持平。",
            "消融与运行场景分析表明周期、Rolling 特征最有价值，高辐射和长期预测仍是主要困难。",
          ],
          tech: ["PyTorch", "时间序列机器学习", "数据质量", "模型评估"],
          labCta: "查看预测实验室",
        },
        {
          id: "mapreduce-psr",
          type: "分布式数据 · MAPREDUCE",
          title: "区域利润机会排序",
          date: "2025年9月",
          summary:
            "把销售交易流水转为可直接用于判断的清单：针对每个区域和年份，找出“每 1 元销售创造的利润”高于当地整体基准的品类。",
          points: [
            "在 Hadoop 工作节点上按区域、年份和品类拆分交易数据，并可靠处理日期、CSV 与金额字段。",
            "数据跨节点传输前先在本地预汇总，减少分布式任务需要搬运的重复信息。",
            "只返回高于“区域–年度”整体基准的可配置 Top-K 清单，并稳定处理结果并列。",
            "明确工程取舍：单个最终 Reducer 用于满足全局有序输出；真实生产环境会改为分区结果，避免单点瓶颈。",
          ],
          tech: ["Hadoop", "MRJob", "MapReduce", "Python"],
          evidence: {
            ariaLabel: "MapReduce 项目如何把销售流水转化为业务判断",
            steps: [
              {
                label: "输入",
                value: "销售交易流水",
                meta: "日期 · 区域 · 品类 · 销售额 · 利润",
              },
              {
                label: "对照",
                value: "每 1 元销售的利润",
                meta: "品类表现 vs 区域年度整体基准",
              },
              {
                label: "决策",
                value: "高于基准的 Top-K",
                meta: "为每个区域和年份生成优先清单",
              },
            ],
            sampleLabel: "示例结果 · 课程提供的教学数据",
            sampleContext: "South · 2014 · Storage",
            sampleMetric: "每 $1 销售额产生 $0.87 利润",
            sampleNote:
              "PSR 0.8667——因为该品类高于所属区域与年份的整体基准而被筛选出来。",
            distributedNote:
              "MapReduce 的价值：聚合可以分散到多个工作节点并行完成；只有最终排序为满足规定输出而集中处理。",
          },
        },
        {
          id: "fuel-evidence-lab",
          type: "数据工程 · 分析",
          title: "新州燃油数据洞察",
          date: "2025年3月",
          summary:
            "对 2025 年 1 月 59,256 条 FuelCheck 记录进行可复现分析，展示可靠的数据工程选择如何转化为可用于决策的价格证据。",
          points: [
            "通过字段结构识别自动修复 28,151 行不一致数据，不依赖硬编码的分界行。",
            "“邮编–城区”精确匹配率达到 97.36%，通过明确标注的确定性回退实现 100% 覆盖。",
            "采用“站点日均 → 邮编日均 → 邮编月均”聚合，避免频繁调价记录获得额外权重。",
            "对照 1,284 个同邮编、同燃油、同日期组合，并将结果明确解释为描述性而非因果证据。",
          ],
          tech: ["Pandas", "数据流水线", "数据质量", "统计对照"],
          labCta: "查看数据实验室",
        },
        {
          id: "postgresql-evidence",
          type: "数据库工程",
          title: "高校数据查询与课程依赖引擎",
          date: "2024年9月",
          summary:
            "在 50 MB 的 MyMyUNSW 数据库上构建可复用 PostgreSQL 访问层，把复杂关系模型转化为有关学生表现、教学覆盖和课程依赖的可靠答案，项目获得 99/100。",
          points: [
            "将多表高校数据模型封装为 8 个可复用 SQL 视图和 2 个参数化 PL/pgSQL 函数。",
            "正确处理空成绩、重复修读、学分加权 WAM，以及教师同时隶属多个组织等真实数据条件。",
            "通过递归 CTE 判断一门课程是否是另一门课程的直接或多层间接先修课程。",
            "将方案封装为可在全新数据库中一次加载的 SQL 文件，并使用课程提供的 20 项自动测试核验。",
          ],
          tech: ["PostgreSQL", "SQL", "PL/pgSQL", "递归 CTE"],
          evidence: {
            ariaLabel: "PostgreSQL 数据库项目的可验证范围与决策输出",
            stats: [
              { value: "99/100", label: "项目成绩" },
              { value: "50 MB", label: "课程数据库文件" },
              { value: "8 + 2", label: "视图 + PL/pgSQL 函数" },
              { value: "20", label: "课程自动测试" },
            ],
            answerLabel: "系统能够回答什么",
            answers: [
              {
                label: "学生表现",
                value: "哪些学生持续高于成绩门槛，并满足学分加权 WAM 条件？",
              },
              {
                label: "教学覆盖",
                value: "哪些课程实际开设、由谁授课，以及所有讲师是否均属于 CSE？",
              },
              {
                label: "课程依赖",
                value: "一门课程是否是另一门课程的直接或多层间接先修课程？",
              },
            ],
            note:
              "工程约束：所有操作都面向全新数据库实例设计，不硬编码具体记录，并以课程规定的 120 秒执行上限为性能边界。",
          },
        },
      ],
    },
    experience: {
      eyebrow: "工作与教育经历",
      title: "在产业实践与严谨课程中持续构建。",
      industryTitle: "产业经历",
      educationTitle: "教育经历",
      industry: {
        role: "IT 部门实习生",
        company: "中富通集团股份有限公司 · 福州",
        date: "2023年7–8月",
        points: [
          "自动化日报脚本与 MySQL 查询，内部数据流水线运行时长降低 30%；通过幂等任务与告警降低失败率。",
          "集成并私有化部署 OpenIM，构建发送、回执和时延监控。",
          "管理 Windows/npm 上的 Node.js 前端与 systemd/Docker 驱动的 Ubuntu 后端；统一构建、环境、发布和回滚。",
          "上线基于 STUN/TURN 和弱网自适应的 WebRTC 视频通话。",
          "面向内外部需求提供端到端交付，并沉淀发布、监控和应急响应轻量 SOP。",
        ],
      },
      education: [
        {
          degree: "信息技术硕士",
          focus: "数据科学与工程",
          school: "新南威尔士大学 · 悉尼",
          date: "2024年9月 – 2026年9月（预计）",
          detail:
            "加权平均分 70/100。核心课程：人工智能、机器学习、深度学习、大数据管理、图数据分析、Python、数据库系统与数据结构。",
        },
        {
          degree: "工学学士",
          focus: "智能制造工程",
          school: "厦门理工学院",
          date: "2020年9月 – 2024年6月",
          detail: "三等奖学金（2023）· 优秀毕业生（2024）。",
        },
        {
          degree: "工学学士",
          focus: "计算机科学与技术 · 自考第二学历",
          school: "厦门理工学院",
          date: "2021年3月 – 2024年6月",
          detail: "与智能制造工程学位同期完成。",
        },
      ],
    },
    capabilities: {
      eyebrow: "专业能力",
      title: "以数据为核心的全栈技术工具箱。",
      groups: [
        {
          title: "编程与脚本",
          items: ["Python", "R", "SQL", "Java", "C", "C++", "JavaScript", "HTML"],
        },
        {
          title: "数据工程与数据库",
          items: [
            "MySQL",
            "PostgreSQL",
            "ETL 流水线",
            "SQL JOIN / View / Group By",
            "Git",
            "Linux",
            "Snowflake",
            "BigQuery",
          ],
        },
        {
          title: "机器学习与大数据",
          items: [
            "PyTorch",
            "决策树",
            "K-means",
            "DBSCAN",
            "朴素贝叶斯",
            "交叉验证",
            "Hadoop MapReduce",
            "Spark",
          ],
        },
        {
          title: "分析与可视化",
          items: [
            "Pandas",
            "NumPy",
            "Excel",
            "Google Sheets",
            "MATLAB",
            "Matplotlib",
            "可视化仪表盘",
          ],
        },
        {
          title: "图算法",
          items: ["图论", "A*", "Dijkstra", "Tree Cover", "路径搜索"],
        },
        {
          title: "软件交付",
          items: [
            "Node.js",
            "OpenIM",
            "WebRTC",
            "Docker",
            "systemd",
            "发布与回滚",
            "监控",
          ],
        },
      ],
    },
    profile: {
      eyebrow: "领导力、荣誉与研究",
      title: "以更宽的视角支撑技术严谨性。",
      employmentAward: {
        eyebrow: "职业准备 · EY 合作招聘流程",
        title: "UNSW Employment Award",
        date: "2026年5–7月",
        badge: "简历竞争入选",
        text:
          "通过具有竞争性的简历筛选入选，全程参与由 UNSW 与 EY 合作设计的真实招聘流程。面对给定的 AI 技术问题，团队从多类利益相关者视角展开充分讨论，并形成结构化、多维度的项目提案，而非只提出单一功能方案。",
        proposalTitle: "提案覆盖维度",
        proposal: [
          "问题定义与利益相关者价值",
          "解决方案架构与技术可行性",
          "数据治理、隐私与负责任 AI",
          "交付路线、项目风险与团队分工",
          "成功指标与管理层沟通",
        ],
      },
      leadershipTitle: "领导力与社会实践",
      leadership: [
        {
          title: "ICPC 预赛 · UNSW 志愿者",
          date: "2025年9月",
          text: "统筹一间考场，完成竞赛环境准备与维护，处理实时技术问题，确保规则合规，并完成赛后系统维护与安全数据汇总。",
        },
        {
          title: "Leadership Foundations Program · UNSW Employability",
          date: "2025年4月",
          text: "AHEGS 认可项目，系统训练领导力、沟通、协作、自我觉察、抗压韧性与包容性团队意识。",
        },
        {
          title: "中国国际投资贸易洽谈会志愿者",
          date: "2021年3月",
          text: "在第二十一届投洽会协助成本监控与财务跟踪，并获得志愿者证书。",
        },
      ],
      awardsTitle: "荣誉与奖项",
      awards: [
        "UNSW Employment Award · 通过简历竞争入选（2026年5–7月）",
        "第六届全国大学生数学竞赛（非数学组）二等奖（2023年7月）",
        "2023 年大学生算法竞赛全国一等奖（2023年4月）",
        "第四届全国数学能力挑战赛全国三等奖（2023年3月）",
        "厦门理工学院三等奖学金（2023）",
        "厦门理工学院优秀毕业生（2024）",
      ],
      publicationsTitle: "出版信息",
      publications: [
        "《大数据信息安全领域的互联网技术研究》，《智慧引航》2023年第7–8期",
        "《计算机网络背景下的地理信息系统技术研究》，《科学与生活》2023年第7期",
      ],
      certificationsTitle: "证书",
      certifications: [
        "层次分析法数据评价软件 V1.0 · 软件著作权登记号 2025SR0042252（2025年1月）",
        "CS50x: Introduction to Computer Science · Harvard University（2024年11月）",
        "商业数据分析师职业能力证书 · 四级（2024年8月）",
        "全国计算机等级考试 · 三级网络技术 · 35673501862609",
        "工业和信息化人才评价证书 · 数学建模 · GXRCCP018202209695",
      ],
      languagesTitle: "语言与工作方式",
      languages: [
        "中文 · 母语",
        "英语 · 可作为工作语言；英语六级；IELTS 6.5（听力 7.0）",
        "以研究驱动解决难题，以清晰表达促进决策与落地",
      ],
    },
    contact: {
      eyebrow: "共同构建有价值的产品",
      title: "数据与软件——每一项能力都有证据。",
      text: "现居悉尼，期待加入重视严谨工程、实际分析能力与清晰客户沟通的团队。",
      emailLabel: "邮箱",
      phoneLabel: "电话",
      linkedinLabel: "LinkedIn",
      locationLabel: "所在地",
      location: "澳大利亚 · 悉尼 NSW",
      download: "下载中文简历",
      backToTop: "返回顶部",
      rights: "中英双语工程作品集。",
    },
  },
};

export const contactDetails = {
  email: "18960752168@163.com",
  phoneDisplay: "+61 490 366 340",
  phoneHref: "+61490366340",
  linkedin: "https://www.linkedin.com/in/xiaoyang-chen-1a273b334",
};
