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
      about: "About",
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
      primary: "View selected projects",
      secondary: "Download English CV",
      availability: "Open to data engineering, analytics and software opportunities",
      location: "Sydney, Australia",
      scroll: "Experience & education",
      portraitAlt: "Portrait of Xiaoyang Chen",
    },
    metricsSummary: {
      ariaLabel: "Cross-project evidence summary",
      eyebrow: "CROSS-PROJECT EVIDENCE",
      title: "Key outcomes across industry and data projects.",
      intro:
        "A combined snapshot of internship automation, fuel-data quality and database engineering—not results from a single Jira project.",
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
      label: "REAL CLIENT PROJECT · IP-GOVERNED · PRODUCTION DELIVERED",
      title: "Atlassian Home Dashboard — Road Map Widget",
      intro:
        "I helped take a Jira Road Map widget from requirement discovery and access setup through real-data validation and production delivery. The Forge app reads authorised Jira release and work-item data, calculates progress, and returns users to the relevant native Jira destinations.",
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
      summary: {
        capabilityTitle: "My contribution at a glance",
        proofTitle: "Verified delivery evidence",
        demoTitle: "30-day release preview",
        demoIntro:
          "Select Alpha or Beta to see how a release enters the fixed MVP window and becomes an actionable progress signal.",
        caseCta: "Explore the case study",
        demoCta: "Play 30-day demo",
        privacyShort: "IP-governed · synthetic portfolio reconstruction",
      },
      caseStudy: {
        back: "Back to portfolio",
        eyebrow: "FULL PROJECT CASE STUDY",
        title: "From client requirement to production delivery",
        intro:
          "A deeper view of my contribution, the data flow, client-facing problem solving, verification evidence and the privacy boundaries behind the Road Map Widget.",
      },
      processTitle: "My contribution across the full delivery cycle",
      process: [
        {
          title: "Clarify",
          text: "Translated the client brief and the existing Jira gadget into a precise 30-day product scope and data requirements.",
        },
        {
          title: "Align",
          text: "Coordinated EAP, Premium-site, permission and data-access questions with the Atlassian industry mentors.",
        },
        {
          title: "Integrate",
          text: "Supported the Forge-to-Jira data contract, real release test data and cross-team integration of the widget flow.",
        },
        {
          title: "Resolve",
          text: "Reproduced installation and access blockers, shared focused evidence and proposed practical resolution paths to the client.",
        },
        {
          title: "Deliver",
          text: "Brought together real-data verification, demo readiness, documentation and production handover for the final delivery.",
        },
      ],
      clientCase: {
        eyebrow: "CLIENT-FACING PROBLEM SOLVING · DETAILS REDACTED",
        title: "Turning an environment blocker into a delivery path",
        stages: [
          {
            label: "Problem",
            title: "Deployment passed; installation did not",
            text: "The Forge build was healthy, but the Jira site lacked the admin and programme access needed to install and verify the app.",
          },
          {
            label: "My action",
            title: "Reproduce, evidence, propose",
            text: "I compared environments, captured the exact failure, sent concise logs and screenshots, and offered two concrete ways forward.",
          },
          {
            label: "Outcome",
            title: "Access clarified, delivery unblocked",
            text: "The client helped align the environment and accepted the working Jira path, enabling real-data validation and production delivery.",
          },
        ],
        note:
          "This portfolio summarises the exchange without publishing client names, site URLs, account details or private messages.",
      },
      outcomes: {
        eyebrow: "TEAM DELIVERY EVIDENCE",
        title: "A production result backed by visible checks",
        items: [
          { value: "32/32", label: "functional & system checks passed" },
          { value: "26", label: "unit assertions passed" },
          { value: "200", label: "generated releases in scale testing" },
          { value: "Forge", label: "production deployment" },
        ],
      },
      evidenceTitle: "What I personally brought to the engagement",
      evidence: [
        "Kept client conversations specific: exact blocker, evidence, impact and requested decision",
        "Built and maintained realistic Jira version and issue data for integration and demonstration",
        "Connected product requirements, access constraints and the shared response contract across the team",
        "Discussed project progress face to face with the Atlassian client as well as through regular online communication",
        "Protected customer information while making delivery evidence clear and reviewable",
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
        windowOption: "Next 30 days · fixed MVP scope",
        columns: {
          release: "Release",
          due: "Due",
          progress: "Completed",
          items: "Work items",
          owner: "Owner / team",
          analysis: "Calculated signal",
          action: "Destination",
        },
        action: "Play visual demo",
        empty: "No demonstration releases in this window.",
        visual: {
          chooserLabel: "Choose a release demonstration",
          dayPrefix: "Day",
          daySuffix: "of 30",
          dueLabel: "Target date",
          progressLabel: "Calculated completion",
          itemsLabel: "Completed work items",
          replay: "Replay data flow",
          pipelineLabel: "What the widget does",
          pipeline: [
            "Read Jira releases",
            "Apply 30-day rule",
            "Calculate progress",
            "Return native links",
          ],
          linkProof: "Project and release destinations verified in Jira",
          privacy: "Synthetic portfolio reconstruction · no customer records displayed",
        },
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
            done: 124,
            total: 172,
            story:
              "Alpha shows how a near-term platform release is filtered into view and translated into an immediately readable progress signal.",
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
            done: 88,
            total: 152,
            story:
              "Beta sits near the edge of the MVP window, making the date rule and watch-state signal visible without exposing live Jira data.",
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
      title: "Industry delivery and data training at Australia's #1 university.",
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
          ranking: {
            value: "#1 in Australia · #19 globally",
            label: "QS World University Rankings 2027",
            href: "https://www.unsw.edu.au/about-us/excellence/rankings-reputation",
          },
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
    about: {
      eyebrow: "HOW I THINK & LIVE",
      title: "Curiosity, discipline and a life beyond the screen.",
      intro:
        "The same habits shape my engineering and my life: stay open to the unknown, break complexity into workable parts and keep the whole system in view.",
      academic: {
        eyebrow: "ACADEMIC & ENGINEERING MINDSET",
        title: "Evidence before complexity.",
        text:
          "I do not treat complexity itself as a sign of rigour. I start by defining the question and data boundaries, establish an interpretable baseline, and then use experiments, comparisons and error analysis to decide whether a more complex method earns its place. A result matters; knowing where it holds matters just as much.",
        principles: [
          {
            title: "Question before tool",
            text:
              "Understand the decision, stakeholders and data constraints before selecting a model or architecture.",
          },
          {
            title: "Evidence drives change",
            text:
              "Use baselines, ablations, automated tests and reproducible workflows to prove that an improvement is real.",
          },
          {
            title: "State the boundary",
            text:
              "Record assumptions, risks and trade-offs, and distinguish descriptive evidence from causal claims.",
          },
        ],
      },
      life: {
        eyebrow: "LIFE & EXPLORATION",
        title: "I feel most alive when the route is unfamiliar.",
        text:
          "I love life, adventure and the freedom of travelling alone. An unfamiliar journey gives me space to observe new places without rushing to a conclusion, while Australia's blue skies, coastlines and open landscapes remind me to slow down and stay curious. Exploration helps me return to engineering with a wider view and a calmer mind.",
        tagLabel: "Personal interests",
        tags: ["Independent travel", "Nature", "Adventure", "Curiosity"],
      },
      cube: {
        eyebrow: "FOCUS PRACTICE",
        title: "A 13×13 cube is systems thinking in your hands.",
        visualLabel: "HIGH-ORDER CUBE",
        quote:
          "Break complexity into solvable parts, focus on the next move and protect the stability of the whole.",
        text:
          "For me, a high-order cube is not simply a race for speed. Its centres, edges and local stages must be solved one at a time, yet every move can affect structures already built. That is close to engineering: make steady local progress without losing control of the global system.",
        steps: ["Observe", "Decompose", "Solve locally", "Stabilise globally"],
      },
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
      phoneDisplay: "+61 490 366 340",
      phoneHref: "+61490366340",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
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
      about: "关于我",
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
      primary: "查看精选项目",
      secondary: "下载中文简历",
      availability: "开放数据工程、分析与软件方向工作机会",
      location: "澳大利亚 · 悉尼",
      scroll: "工作与教育经历",
      portraitAlt: "陈萧仰的个人证件照",
    },
    metricsSummary: {
      ariaLabel: "跨经历与项目成果摘要",
      eyebrow: "跨经历成果摘要",
      title: "一眼看清产业实践与数据项目的关键结果。",
      intro:
        "指标分别来自实习自动化、燃油数据质量与数据库工程，并非单一 Jira 项目的结果。",
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
      label: "真实客户项目 · 知识产权约束 · 已完成生产交付",
      title: "Atlassian Home Dashboard — Road Map Widget",
      intro:
        "我参与推动 Jira Road Map Widget 从需求澄清、环境接入、真实数据验证走向生产交付。Forge 应用读取经过授权的 Jira 版本与工作项数据，计算进度，并将用户带回对应的 Jira 原生页面。",
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
      summary: {
        capabilityTitle: "我的核心贡献",
        proofTitle: "可验证的交付证据",
        demoTitle: "30天版本预览",
        demoIntro:
          "选择 Alpha 或 Beta，直观看到版本如何进入固定 MVP 窗口并转化为可行动的进度信号。",
        caseCta: "查看完整案例",
        demoCta: "播放30天演示",
        privacyShort: "知识产权约束 · 作品集合成交互还原",
      },
      caseStudy: {
        back: "返回个人简历",
        eyebrow: "完整项目案例",
        title: "从客户需求到生产交付",
        intro:
          "深入展示我在 Road Map Widget 中的个人贡献、数据流程、客户问题解决、验证证据与隐私边界。",
      },
      processTitle: "我贯穿完整交付周期的个人贡献",
      process: [
        {
          title: "需求澄清",
          text: "把客户说明与既有 Jira Gadget 行为转化为明确的 30 天产品范围和数据要求。",
        },
        {
          title: "集成对齐",
          text: "围绕 EAP、Premium 站点、权限与数据访问，持续与 Atlassian 行业导师对齐。",
        },
        {
          title: "真实验证",
          text: "支持 Forge–Jira 数据契约、真实版本测试数据与跨成员的 Widget 集成流程。",
        },
        {
          title: "客户协作",
          text: "复现安装与访问阻塞，提供聚焦的证据，并向客户提出可执行的解决路径。",
        },
        {
          title: "生产交付",
          text: "整合真实数据核验、演示准备、文档与交接，推动最终版本完成生产交付。",
        },
      ],
      clientCase: {
        eyebrow: "客户问题解决 · 细节已脱敏",
        title: "把环境阻塞转化为可执行的交付路径",
        stages: [
          {
            label: "问题",
            title: "部署成功，但安装失败",
            text: "Forge 构建本身正常，但 Jira 站点缺少安装与验证所需的管理员权限及项目访问。",
          },
          {
            label: "我的行动",
            title: "复现、举证、提出方案",
            text: "我对照不同环境，复现失败位置，整理日志和截图，并提供两条清晰的解决路径。",
          },
          {
            label: "结果",
            title: "访问条件明确，交付继续推进",
            text: "客户协助对齐环境并认可可行的 Jira 路径，使真实数据验证与生产交付得以完成。",
          },
        ],
        note:
          "作品集只概括解决过程，不公开客户姓名、站点地址、账户信息或内部消息。",
      },
      outcomes: {
        eyebrow: "团队交付证据",
        title: "生产结果由可复核的验证支撑",
        items: [
          { value: "32/32", label: "功能与系统检查通过" },
          { value: "26", label: "单元断言通过" },
          { value: "200", label: "生成版本规模验证" },
          { value: "Forge", label: "生产环境部署" },
        ],
      },
      evidenceTitle: "我在这段客户实践中的个人能力",
      evidence: [
        "把客户沟通具体化为：阻塞位置、证据、影响和需要确认的决策",
        "建立并维护可用于联调与演示的 Jira 版本和工作项数据",
        "在团队中连接产品需求、访问约束与共享数据契约",
        "除持续线上交流外，也曾在 Atlassian 现场与客户面对面同步项目进展",
        "在清晰展示交付证据的同时保护客户信息与知识产权",
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
        windowOption: "未来 30 天 · 固定 MVP 范围",
        columns: {
          release: "版本",
          due: "发布日期",
          progress: "完成进度",
          items: "工作项",
          owner: "负责人 / 团队",
          analysis: "计算信号",
          action: "目标页面",
        },
        action: "播放可视化",
        empty: "该时间范围内没有演示版本。",
        visual: {
          chooserLabel: "选择版本演示",
          dayPrefix: "第",
          daySuffix: "天 / 共 30 天",
          dueLabel: "目标日期",
          progressLabel: "计算完成度",
          itemsLabel: "已完成工作项",
          replay: "重新播放数据流",
          pipelineLabel: "Widget 如何处理数据",
          pipeline: [
            "读取 Jira 版本",
            "应用 30 天规则",
            "计算完成进度",
            "返回原生链接",
          ],
          linkProof: "项目与版本目标页面已在 Jira 中完成验证",
          privacy: "作品集合成交互还原 · 不展示任何客户记录",
        },
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
            done: 124,
            total: 172,
            story:
              "Alpha 展示临近平台版本如何进入 30 天窗口，并被转化为一眼可读的进度信号。",
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
            done: 88,
            total: 152,
            story:
              "Beta 接近 MVP 时间边界，用合成数据直观说明日期筛选规则与关注状态。",
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
      title: "产业实践与澳洲第一高校的数据训练。",
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
          ranking: {
            value: "澳洲第 1 · 全球第 19",
            label: "2027 QS 世界大学排名",
            href: "https://www.unsw.edu.au/about-us/excellence/rankings-reputation",
          },
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
    about: {
      eyebrow: "思考方式与生活",
      title: "保持好奇，也保持把复杂问题做完的耐心。",
      intro:
        "无论工程还是生活，我都愿意走进未知：先观察，再把复杂问题拆成可推进的部分，同时始终保留对整体系统的判断。",
      academic: {
        eyebrow: "学术与工程方法",
        title: "让证据先于复杂度。",
        text:
          "我不会把复杂度本身当成专业。在学术与工程中，我习惯先定义问题和数据边界，建立可解释的基线，再用实验、对照与误差分析判断更复杂的方法是否真正值得。结果重要，知道结果在什么条件下成立同样重要。",
        principles: [
          {
            title: "问题先于工具",
            text: "先理解决策目标、利益相关者与数据限制，再选择模型或系统架构。",
          },
          {
            title: "证据推动改进",
            text: "用基线、消融、自动测试与可复现流程判断改进是否真实。",
          },
          {
            title: "主动说明边界",
            text: "记录假设、风险和工程取舍，并清楚区分描述性证据与因果结论。",
          },
        ],
      },
      life: {
        eyebrow: "生活与探索",
        title: "我喜欢没有预设答案的旅程。",
        text:
          "我热爱生活，也愿意走进未知。我享受独自旅行，在陌生的城市与路线中观察新的风景，也喜欢自由漫步于澳洲的蓝天、海岸和自然之间。旅行让我学会不急于对陌生环境下结论，而是先感受、理解，再找到自己的节奏；回到工程问题时，也因此拥有更开阔、更平静的视角。",
        tagLabel: "个人兴趣",
        tags: ["独自旅行", "自然探索", "冒险精神", "保持好奇"],
      },
      cube: {
        eyebrow: "专注力训练",
        title: "13阶魔方，是握在手中的系统工程。",
        visualLabel: "超高阶魔方",
        quote: "把复杂问题拆成可解的局部，专注当前一步，同时守住整个系统的稳定。",
        text:
          "对我而言，高阶魔方不只是追求速度。它需要把庞大的状态拆成中心、棱块和不同阶段，每一次只解决眼前可控的问题，却又不能破坏已经建立的整体结构。这与工程很像：让局部持续推进，同时始终保持对全局状态的掌握。",
        steps: ["观察状态", "拆分结构", "解决局部", "稳定整体"],
      },
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
      phoneDisplay: "+86 18960752168",
      phoneHref: "+8618960752168",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
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
  linkedin: "https://www.linkedin.com/in/xiaoyang-chen-1a273b334",
  github: "https://github.com/chenxiaoyang815-design/xiaoyang-chen-portfolio",
};
