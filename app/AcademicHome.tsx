import { publications, underReview, workingPapers, type Paper } from "./data";

type Locale = "zh" | "en";

const profile = {
  email: "youhuali2-c@my.cityu.edu.hk",
  scholar: "https://scholar.google.com/citations?user=VL0tW7YAAAAJ&hl=en",
  orcid: "https://orcid.org/0009-0006-1290-3604",
};

const copy = {
  zh: {
    lang: "EN",
    langHref: "/en/",
    nav: [["动态", "#news"], ["研究", "#research"], ["论文", "#publications"], ["经历", "#experience"]],
    eyebrow: "Decision Analytics · Artificial Intelligence",
    role: "香港城市大学 决策分析与运筹学博士生",
    affiliation: "AIFTHK 研究员",
    intro: "我的研究位于运筹优化、金融科技与人工智能的交叉地带，关注如何让大语言模型成为可靠的决策、建模与优化伙伴。",
    now: "目前关注",
    nowText: "LLM for Optimization · FinTech · Recommender Systems · AI Agents",
    email: "邮件联系", scholar: "Google Scholar",
    newsLabel: "LATEST UPDATES", newsTitle: "近期动态",
    newsIntro: "近期录用与研究进展。论文标题及出版信息均保留英文。",
    aboutLabel: "RESEARCH AGENDA",
    aboutTitle: "让 AI 参与决策，而不只是生成答案。",
    aboutBody: "我关注复杂运营环境中的智能决策：从排队网络、作业车间调度与网约车派单，到金融强化学习、Web3 交易与多模态推荐。核心问题是如何把 LLM 的推理能力与可验证的优化结构结合起来。",
    researchTitle: "研究方向",
    researchAreas: [
      { index: "01", title: "AI × Operations", text: "LLM 辅助优化建模、调度策略设计、在线决策与强化学习。" },
      { index: "02", title: "FinTech & Web3", text: "量化交易、金融决策接口、新闻驱动的 Web3 推荐与回测。" },
      { index: "03", title: "Recommender Systems", text: "多模态、迁移学习、序列推荐、知识追踪与模型压缩。" },
      { index: "04", title: "Reasoning & Agents", text: "推理时扩展、奖励引导、技能评测、代码生成与智能体推荐。" },
    ],
    papersLabel: "RESEARCH OUTPUT", papersTitle: "论文与在研工作",
    papersIntro: "在投状态依据最新简历整理；已录用论文均按英文题名、作者与出版场所展示。",
    working: "Working Papers", review: "Under Review", accepted: "Published / Accepted",
    openPaper: "View paper", showReview: "View all under-review papers", showArchive: "View full publication archive",
    equal: "* Equal contribution. † Corresponding author.",
    expLabel: "BACKGROUND", expTitle: "教育与研究经历", education: "教育背景", experience: "研究经历",
    service: "学术服务", awards: "荣誉奖励", contactTitle: "欢迎交流合作",
    contactText: "如果你也在研究 LLM、运筹优化、金融科技或推荐系统，欢迎通过邮件联系我。",
    contactCta: "发送邮件", footer: "Built for research, collaboration, and open exchange.",
  },
  en: {
    lang: "中文", langHref: "/",
    nav: [["News", "#news"], ["Research", "#research"], ["Publications", "#publications"], ["Experience", "#experience"]],
    eyebrow: "Decision Analytics · Artificial Intelligence",
    role: "Ph.D. Student in Decision Analytics & Operations",
    affiliation: "Researcher at AIFTHK · City University of Hong Kong",
    intro: "My research sits at the intersection of operations optimization, FinTech, and artificial intelligence, with a focus on making large language models reliable partners for decision-making, modeling, and optimization.",
    now: "Current focus", nowText: "LLM for Optimization · FinTech · Recommender Systems · AI Agents",
    email: "Email me", scholar: "Google Scholar",
    newsLabel: "LATEST UPDATES", newsTitle: "News", newsIntro: "Recent acceptances and research updates.",
    aboutLabel: "RESEARCH AGENDA", aboutTitle: "AI for decisions—not only answers.",
    aboutBody: "I study intelligent decision-making in complex operational environments—from queueing networks, job-shop scheduling, and ride-hailing dispatch to financial reinforcement learning, Web3 trading, and multimodal recommendation. A central question is how to combine the reasoning ability of LLMs with verifiable optimization structure.",
    researchTitle: "Research directions",
    researchAreas: [
      { index: "01", title: "AI × Operations", text: "LLM-assisted optimization modeling, scheduling policy design, online decisions, and reinforcement learning." },
      { index: "02", title: "FinTech & Web3", text: "Quantitative trading, financial decision interfaces, and news-driven Web3 recommendation and backtesting." },
      { index: "03", title: "Recommender Systems", text: "Multimodal and sequential recommendation, transfer learning, knowledge tracing, and model compression." },
      { index: "04", title: "Reasoning & Agents", text: "Inference-time scaling, reward steering, skill evaluation, code generation, and agent recommendation." },
    ],
    papersLabel: "RESEARCH OUTPUT", papersTitle: "Publications & work in progress",
    papersIntro: "Review status follows the latest CV. Publication titles, author lists, and venue information are presented in English.",
    working: "Working Papers", review: "Under Review", accepted: "Published / Accepted",
    openPaper: "View paper", showReview: "View all under-review papers", showArchive: "View full publication archive",
    equal: "* Equal contribution. † Corresponding author.",
    expLabel: "BACKGROUND", expTitle: "Education & research experience", education: "Education", experience: "Research experience",
    service: "Professional service", awards: "Honors & awards", contactTitle: "Let’s talk research",
    contactText: "I am always happy to connect around LLMs, operations optimization, FinTech, and recommender systems.",
    contactCta: "Send an email", footer: "Built for research, collaboration, and open exchange.",
  },
};

const news = {
  zh: [
    { date: "2026 · CIKM / ECCV", text: "Three papers accepted: two at CIKM 2026 and one at ECCV 2026." },
    { date: "2026 · JOURNALS", text: "New papers published in ACM TKDD and Knowledge-Based Systems." },
    { date: "2025", text: "Recent work appeared at CVPR, WWW, WSDM, CIKM, and Findings of EMNLP." },
  ],
  en: [
    { date: "2026 · CIKM / ECCV", text: "Three papers accepted: two at CIKM 2026 and one at ECCV 2026." },
    { date: "2026 · JOURNALS", text: "New papers published in ACM TKDD and Knowledge-Based Systems." },
    { date: "2025", text: "Recent work appeared at CVPR, WWW, WSDM, CIKM, and Findings of EMNLP." },
  ],
};

const education = {
  zh: [
    ["2024 — 至今", "博士 · 决策分析与运筹学", "香港城市大学"],
    ["2021 — 2024", "硕士 · 计算机科学与技术", "上海科技大学 / 中国科学院计算技术研究所"],
    ["2016 — 2020", "本科 · 自动化工程", "电子科技大学 · 立人班"],
  ],
  en: [
    ["2024 — Present", "Ph.D. · Decision Analytics & Operations", "City University of Hong Kong"],
    ["2021 — 2024", "M.S. · Computer Science & Technology", "ShanghaiTech University / ICT, CAS"],
    ["2016 — 2020", "B.Eng. · Automation Engineering", "University of Electronic Science and Technology of China"],
  ],
};

const experience = {
  zh: [
    ["2024 — 至今", "研究员 & 博士生", "AIFTHK / 香港城市大学", "供应链金融建模、LLM 增强的决策与 GEO 框架"],
    ["2023", "研究助理", "香港中文大学商学院", "LLMs 与智能体在运筹管理和供应链中的应用"],
    ["2022 — 2023", "访问学生", "西湖大学表示学习实验室", "数据挖掘、迁移学习与多模态推荐"],
    ["2021 — 2022", "研究实习生", "上海脑科学与类脑智能研究中心", "NLP 常识推理与投资知识图谱"],
  ],
  en: [
    ["2024 — Present", "Researcher & Ph.D. Student", "AIFTHK / City University of Hong Kong", "Supply-chain finance modeling, LLM-enhanced decision systems, and GEO frameworks"],
    ["2023", "Research Assistant", "CUHK Business School", "LLMs and agents for operations management and supply chains"],
    ["2022 — 2023", "Visiting Student", "Representation Learning Lab, Westlake University", "Data mining, transfer learning, and multimodal recommendation"],
    ["2021 — 2022", "Research Intern", "Shanghai Research Center for Brain Science and Brain-Inspired Intelligence", "NLP commonsense reasoning and knowledge graphs for investment"],
  ],
};

function ExternalLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return <a href={href} className={className} target="_blank" rel="noreferrer">{children}</a>;
}

function AuthorLine({ authors }: { authors: string }) {
  const parts = authors.split(/(Youhua Li(?:[†*])?)/g);
  return <>{parts.map((part, index) => part.startsWith("Youhua Li") ? <strong key={`${part}-${index}`}>{part}</strong> : part)}</>;
}

function PaperItem({ paper, openLabel, featured = false }: { paper: Paper; openLabel: string; featured?: boolean }) {
  return (
    <article className={`paper ${featured ? "paper-featured" : ""}`}>
      <div className="paper-meta"><span>{paper.year}</span><span>{paper.tag}</span></div>
      <h4>{paper.title}</h4>
      <p className="authors"><AuthorLine authors={paper.authors} /></p>
      <div className="paper-foot">
        <span className="venue">{paper.venue}</span>
        {paper.href ? <ExternalLink href={paper.href} className="paper-link">{openLabel} ↗</ExternalLink> : null}
      </div>
    </article>
  );
}

export function AcademicHome({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const isZh = locale === "zh";
  const featuredPublications = publications.slice(0, 11);
  const archivedPublications = publications.slice(11);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Youhua Li home"><span className="brand-mark">YL</span><span>Youhua Li</span></a>
        <nav aria-label="Primary navigation">{t.nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
        <a className="language" href={t.langHref} lang={isZh ? "en" : "zh-CN"}>{t.lang}</a>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>Youhua Li <span>{isZh ? "李佑华" : ""}</span></h1>
          <p className="role">{t.role}</p><p className="affiliation">{t.affiliation}</p>
          <p className="hero-intro">{t.intro}</p>
          <div className="hero-actions">
            <a className="button button-primary" href={`mailto:${profile.email}`}>{t.email} <span>↗</span></a>
            <ExternalLink className="button button-secondary" href={profile.scholar}>{t.scholar} <span>↗</span></ExternalLink>
          </div>
          <div className="focus-line"><span>{t.now}</span><p>{t.nowText}</p></div>
        </div>
        <div className="portrait-wrap" aria-label={isZh ? "非真人抽象头像" : "Abstract non-photographic avatar"}>
          <div className="portrait-grid" aria-hidden="true" /><div className="portrait-orbit portrait-orbit-one" aria-hidden="true" /><div className="portrait-orbit portrait-orbit-two" aria-hidden="true" />
          <div className="portrait-card"><span className="portrait-kicker">RESEARCHER</span><span className="portrait-initials">Y<span>L</span></span><span className="portrait-caption">OR · AI · FINTECH</span></div>
          <span className="portrait-dot dot-one" aria-hidden="true" /><span className="portrait-dot dot-two" aria-hidden="true" />
        </div>
      </section>

      <section className="news-band" id="news"><div className="shell">
        <div className="section-heading compact"><p>{t.newsLabel}</p><h2>{t.newsTitle}</h2><span>{t.newsIntro}</span></div>
        <div className="news-list">{news[locale].map((item) => <article className="news-item" key={item.date}><time>{item.date}</time><p>{item.text}</p><span aria-hidden="true">↗</span></article>)}</div>
      </div></section>

      <section className="research shell" id="research">
        <div className="research-intro"><div className="section-heading"><p>{t.aboutLabel}</p><h2>{t.aboutTitle}</h2></div><p className="research-statement">{t.aboutBody}</p></div>
        <div className="direction-heading"><h3>{t.researchTitle}</h3><span>04</span></div>
        <div className="research-grid">{t.researchAreas.map((area) => <article className="research-card" key={area.index}><span>{area.index}</span><h3>{area.title}</h3><p>{area.text}</p></article>)}</div>
      </section>

      <section className="papers-section" id="publications"><div className="shell">
        <div className="section-heading papers-heading"><p>{t.papersLabel}</p><h2>{t.papersTitle}</h2><span>{t.papersIntro}</span></div>
        <div className="paper-group"><div className="paper-group-title"><h3>{t.working}</h3><span>02</span></div><div className="paper-grid two-col">{workingPapers.map((paper) => <PaperItem key={paper.title} paper={paper} openLabel={t.openPaper} featured />)}</div></div>
        <div className="paper-group"><div className="paper-group-title"><h3>{t.review}</h3><span>{String(underReview.length).padStart(2, "0")}</span></div><div className="paper-list">{underReview.slice(0, 4).map((paper) => <PaperItem key={paper.title} paper={paper} openLabel={t.openPaper} />)}</div><details className="paper-details"><summary>{t.showReview}<span>+</span></summary><div className="paper-list detail-list">{underReview.slice(4).map((paper) => <PaperItem key={paper.title} paper={paper} openLabel={t.openPaper} />)}</div></details></div>
        <div className="paper-group"><div className="paper-group-title"><h3>{t.accepted}</h3><span>{String(publications.length).padStart(2, "0")}</span></div><div className="paper-list">{featuredPublications.map((paper) => <PaperItem key={paper.title} paper={paper} openLabel={t.openPaper} />)}</div><details className="paper-details"><summary>{t.showArchive}<span>+</span></summary><div className="paper-list detail-list">{archivedPublications.map((paper) => <PaperItem key={paper.title} paper={paper} openLabel={t.openPaper} />)}</div></details></div>
        <p className="contribution-note">{t.equal}</p>
      </div></section>

      <section className="background shell" id="experience">
        <div className="section-heading background-heading"><p>{t.expLabel}</p><h2>{t.expTitle}</h2></div>
        <div className="background-columns">
          <div><h3>{t.education}</h3><div className="timeline">{education[locale].map(([date, title, place]) => <article key={`${date}-${title}`}><time>{date}</time><div><h4>{title}</h4><p>{place}</p></div></article>)}</div></div>
          <div><h3>{t.experience}</h3><div className="timeline">{experience[locale].map(([date, title, place, detail]) => <article key={`${date}-${title}`}><time>{date}</time><div><h4>{title}</h4><p>{place}</p><span>{detail}</span></div></article>)}</div></div>
        </div>
        <div className="service-row"><div><h3>{t.service}</h3><p>TOIS · TKDD · IPM · ACM MM · ICLR · KDD · AAAI · CIKM · WWW DCAI</p></div><div><h3>{t.awards}</h3><p>{isZh ? "电子科技大学优秀毕业论文（Top 1%）· 国家励志奖学金 · 挑战杯四川省二等奖" : "Outstanding Thesis Award, UESTC (Top 1%) · National Encouragement Scholarship · Challenge Cup, Sichuan Province"}</p></div></div>
      </section>

      <section className="contact-section"><div className="shell contact-inner"><div><p className="eyebrow">COLLABORATION</p><h2>{t.contactTitle}</h2><span>{t.contactText}</span></div><a className="contact-button" href={`mailto:${profile.email}`}>{t.contactCta}<span>↗</span></a></div></section>
      <footer className="site-footer shell"><div><span className="brand-mark">YL</span><p>© 2026 Youhua Li</p></div><p>{t.footer}</p><div className="footer-links"><a href={`mailto:${profile.email}`}>Email</a><ExternalLink href={profile.scholar}>Scholar</ExternalLink><ExternalLink href={profile.orcid}>ORCID</ExternalLink></div></footer>
    </main>
  );
}

