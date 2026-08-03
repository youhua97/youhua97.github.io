import { publications, underReview, type Paper } from "./data";

type Locale = "zh" | "en";

const profile = {
  email: "youhuali2-c@my.cityu.edu.hk",
  scholar: "https://scholar.google.com/citations?user=VL0tW7YAAAAJ&hl=en",
  orcid: "https://orcid.org/0009-0006-1290-3604",
};

const copy = {
  zh: {
    pageLabel: "李佑华的学术主页",
    lang: "English",
    langHref: "/en/",
    nav: [
      ["教育", "#education"],
      ["动态", "#news"],
      ["研究", "#research"],
      ["论文", "#publications"],
      ["经历", "#experience"],
    ],
    nameCn: "李佑华",
    role: "香港城市大学 决策分析与运筹学博士生",
    affiliation: "AIFTHK Researcher · City University of Hong Kong",
    bio: "我的研究聚焦于人工智能驱动的决策与运筹优化，并延伸至金融科技、量化金融、Web3、推荐系统、多模态学习、大语言模型与智能体。当前工作重点是把 LLM 的推理能力与可验证的优化结构结合，用于复杂运营与金融决策。",
    location: "中国香港",
    advisorLabel: "导师",
    advisors: "Prof. Houmin Yan（香港城市大学商学院前院长、讲座教授）与 Prof. Zuojun (Max) Shen（香港大学副校长、中国工程院院士）",
    emailLabel: "邮箱",
    linksLabel: "链接",
    scholar: "Google Scholar",
    navAria: "页面导航",
    avatarAria: "YL 字母抽象头像（非真人照片）",
    newsTitle: "最新动态",
    newsNote: "最新公开的录用成果",
    researchTitle: "研究方向",
    researchIntro: "我希望让 AI 不只是生成答案，也能参与建模、评估策略并支持可解释的真实决策。",
    researchAreas: [
      ["AI for Operations", "LLM 辅助优化建模、调度策略设计、在线决策、排队网络与强化学习。"],
      ["FinTech & Quantitative Finance", "供应链金融、金融强化学习、量化交易与智能金融决策接口。"],
      ["Web3", "新闻驱动的资产推荐、效用建模与交易回测。"],
      ["Recommender Systems", "多模态与序列推荐、迁移学习、知识追踪、蒸馏与模型压缩。"],
      ["LLMs & Agents", "推理时扩展、奖励引导、能力评测、提示词优化、代码生成与智能体推荐。"],
    ],
    publicationsTitle: "论文",
    publicationsIntro: "以下论文信息全部使用英文，并完整列出题目、作者、状态、年份、研究主题及可用链接。",
    underReview: "Under Review",
    published: "Published / Accepted",
    papers: "papers",
    linkLabel: "Paper",
    contribution: "* Equal contribution. † Corresponding author.",
    experienceTitle: "研究经历",
    educationTitle: "教育背景",
    advisorPrefix: "导师：",
    education: [
      {
        date: "2024.09 — 至今",
        title: "博士 · 决策分析与运筹学",
        place: "香港城市大学",
        detail: "导师：Prof. Houmin Yan（香港城市大学商学院前院长、讲座教授）与 Prof. Zuojun (Max) Shen（香港大学副校长、中国工程院院士）。研究方向：AI 驱动的决策、运筹优化、金融科技与大语言模型。",
      },
      {
        date: "2021.09 — 2024.07",
        title: "硕士 · 计算机科学与技术",
        place: "上海科技大学 / 中国科学院计算技术研究所（联合培养）",
        detail: "研究方向：推荐系统、迁移学习、多模态学习与数据挖掘。",
      },
      {
        date: "2016.09 — 2020.07",
        title: "本科 · 自动化工程",
        place: "电子科技大学",
        detail: "入选“立人班”（全校选拔 40 人）；本科研究方向为计算机视觉与三维重建。",
      },
    ],
    experience: [
      {
        date: "2024.09 — 至今",
        title: "Researcher & Ph.D. Student",
        place: "AIFTHK / 香港城市大学",
        advisors: "Prof. Houmin Yan（香港城市大学商学院前院长、讲座教授）；Prof. Zuojun (Max) Shen（香港大学副校长、中国工程院院士）",
        detail: "供应链金融建模、LLM 增强的决策系统、电商 GEO 框架与金融量化研究。",
      },
      {
        date: "2023.05 — 2024.06",
        title: "Research Assistant",
        place: "中国科学技术大学管理学院",
        advisors: "Prof. Chunxiao Li；Prof. Eric Zheng；Prof. Bin Gu",
        detail: "大语言模型、行为金融与金融信息系统研究。",
      },
      {
        date: "2023.07 — 2023.12",
        title: "Research Assistant",
        place: "香港中文大学商学院",
        advisors: "Prof. Jing Wu",
        detail: "LLMs 与智能体在运营管理和供应链中的应用。",
      },
      {
        date: "2022.07 — 2023.03",
        title: "Visiting Student",
        place: "西湖大学 Representation Learning Lab",
        advisors: "Prof. Fajie Yuan",
        detail: "数据挖掘、迁移学习与多模态推荐。",
      },
      {
        date: "2021.05 — 2022.03",
        title: "Research Intern",
        place: "上海脑科学与类脑研究中心",
        advisors: "Prof. Yi Zhou",
        detail: "NLP 常识推理，以及用于投资管理的知识图谱。",
      },
      {
        date: "2018.09 — 2020.06",
        title: "Undergraduate Researcher",
        place: "电子科技大学 Pattern Recognition and Machine Intelligence Lab",
        advisors: "Prof. Lu Yang",
        detail: "三维重建、SLAM 与计算机视觉。",
      },
    ],
    serviceTitle: "学术服务",
    serviceIntro: "期刊审稿与会议程序委员会 / 审稿服务",
    honorsTitle: "荣誉与奖励",
    services: [
      ["Journals", "ACM TOIS · ACM TKDD · Information Processing & Management · Computers & Education: Artificial Intelligence · FLLM"],
      ["Conferences", "ACM MM 2024 / 2025 / 2026 · ICLR 2024 / 2025 · KDD 2024 / 2025 / 2026"],
      ["Program Committee", "AAAI 2025 / 2026 · CIKM 2025 / 2026"],
      ["Workshops", "DCAI Workshop at WWW 2024"],
    ],
    honors: [
      ["2020", "电子科技大学优秀毕业论文（Top 1%）"],
      ["2019", "第十五届“挑战杯”四川省大学生课外学术科技作品竞赛二等奖两项（团队负责人）"],
      ["2018", "第十三届 Freescale 智能车竞赛四川赛区二等奖（团队负责人）"],
      ["2017", "国家励志奖学金（Top 3%）"],
      ["2017", "本科生一等奖学金（Top 10%）"],
    ],
    contact: "欢迎就相关研究与合作通过邮件联系。",
    updated: "Last updated: August 2026",
  },
  en: {
    pageLabel: "Academic homepage of Youhua Li",
    lang: "中文",
    langHref: "/",
    nav: [
      ["Education", "#education"],
      ["News", "#news"],
      ["Research", "#research"],
      ["Publications", "#publications"],
      ["Experience", "#experience"],
    ],
    nameCn: "李佑华",
    role: "Ph.D. Student in Decision Analytics & Operations",
    affiliation: "Researcher at AIFTHK · City University of Hong Kong",
    bio: "My research focuses on AI-driven decision-making and operations optimization, with broader interests in FinTech, quantitative finance, Web3, recommender systems, multimodal learning, large language models, and agents. I am particularly interested in combining LLM reasoning with verifiable optimization structure for complex operational and financial decisions.",
    location: "Hong Kong, China",
    advisorLabel: "Advisors",
    advisors: "Prof. Houmin Yan (Former Dean, College of Business, CityU; Chair Professor) and Prof. Zuojun (Max) Shen (Vice-President, HKU; Member of the Chinese Academy of Engineering)",
    emailLabel: "Email",
    linksLabel: "Links",
    scholar: "Google Scholar",
    navAria: "Page navigation",
    avatarAria: "Abstract YL monogram avatar, not a real photograph",
    newsTitle: "News",
    newsNote: "Latest public acceptance",
    researchTitle: "Research",
    researchIntro: "I work toward AI systems that do more than generate answers: they formulate models, evaluate policies, and support interpretable real-world decisions.",
    researchAreas: [
      ["AI for Operations", "LLM-assisted optimization modeling, scheduling policy design, online decisions, queueing networks, and reinforcement learning."],
      ["FinTech & Quantitative Finance", "Supply-chain finance, financial reinforcement learning, quantitative trading, and intelligent financial decision interfaces."],
      ["Web3", "News-driven asset recommendation, utility modeling, and trading backtesting."],
      ["Recommender Systems", "Multimodal and sequential recommendation, transfer learning, knowledge tracing, distillation, and model compression."],
      ["LLMs & Agents", "Inference-time scaling, reward steering, skill evaluation, prompt optimization, code generation, and agent recommendation."],
    ],
    publicationsTitle: "Publications",
    publicationsIntro: "A complete list of manuscripts under review and published or accepted work, including authors, status, year, topic, and available links.",
    underReview: "Under Review",
    published: "Published / Accepted",
    papers: "papers",
    linkLabel: "Paper",
    contribution: "* Equal contribution. † Corresponding author.",
    experienceTitle: "Research Experience",
    educationTitle: "Education",
    advisorPrefix: "Advisor(s): ",
    education: [
      {
        date: "Sep 2024 — Present",
        title: "Ph.D. in Decision Analytics & Operations",
        place: "City University of Hong Kong",
        detail: "Advisors: Prof. Houmin Yan (Former Dean, College of Business, CityU; Chair Professor) and Prof. Zuojun (Max) Shen (Vice-President, HKU; Member of the Chinese Academy of Engineering). Research in AI-driven decision-making, operations optimization, FinTech, and large language models.",
      },
      {
        date: "Sep 2021 — Jul 2024",
        title: "M.S. in Computer Science & Technology",
        place: "ShanghaiTech University / Institute of Computing Technology, CAS (Joint Program)",
        detail: "Research in recommender systems, transfer learning, multimodal learning, and data mining.",
      },
      {
        date: "Sep 2016 — Jul 2020",
        title: "B.Eng. in Automation Engineering",
        place: "University of Electronic Science and Technology of China",
        detail: "Selected for the Liren Honors Class (40 students university-wide); undergraduate research in computer vision and 3D reconstruction.",
      },
    ],
    experience: [
      {
        date: "Sep 2024 — Present",
        title: "Researcher & Ph.D. Student",
        place: "AIFTHK / City University of Hong Kong",
        advisors: "Prof. Houmin Yan (Former Dean, College of Business, CityU; Chair Professor); Prof. Zuojun (Max) Shen (Vice-President, HKU; Member of the Chinese Academy of Engineering)",
        detail: "Supply-chain finance modeling, LLM-enhanced decision systems, e-commerce GEO frameworks, and quantitative finance.",
      },
      {
        date: "May 2023 — Jun 2024",
        title: "Research Assistant",
        place: "School of Management, University of Science and Technology of China",
        advisors: "Prof. Chunxiao Li; Prof. Eric Zheng; Prof. Bin Gu",
        detail: "Large language models, behavioral finance, and financial information systems.",
      },
      {
        date: "Jul 2023 — Dec 2023",
        title: "Research Assistant",
        place: "CUHK Business School",
        advisors: "Prof. Jing Wu",
        detail: "LLMs and agents for operations management and supply chains.",
      },
      {
        date: "Jul 2022 — Mar 2023",
        title: "Visiting Student",
        place: "Representation Learning Lab, Westlake University",
        advisors: "Prof. Fajie Yuan",
        detail: "Data mining, transfer learning, and multimodal recommendation.",
      },
      {
        date: "May 2021 — Mar 2022",
        title: "Research Intern",
        place: "Shanghai Research Center for Brain Science and Brain-Inspired Intelligence",
        advisors: "Prof. Yi Zhou",
        detail: "NLP commonsense reasoning and knowledge graphs for investment management.",
      },
      {
        date: "Sep 2018 — Jun 2020",
        title: "Undergraduate Researcher",
        place: "Pattern Recognition and Machine Intelligence Lab, UESTC",
        advisors: "Prof. Lu Yang",
        detail: "3D reconstruction, SLAM, and computer vision.",
      },
    ],
    serviceTitle: "Professional Service",
    serviceIntro: "Journal reviewing and conference program committee / reviewing service",
    honorsTitle: "Honors & Awards",
    services: [
      ["Journals", "ACM TOIS · ACM TKDD · Information Processing & Management · Computers & Education: Artificial Intelligence · FLLM"],
      ["Conferences", "ACM MM 2024 / 2025 / 2026 · ICLR 2024 / 2025 · KDD 2024 / 2025 / 2026"],
      ["Program Committee", "AAAI 2025 / 2026 · CIKM 2025 / 2026"],
      ["Workshops", "DCAI Workshop at WWW 2024"],
    ],
    honors: [
      ["2020", "Outstanding Thesis Award, UESTC (Top 1%)"],
      ["2019", "Two Second Prizes, 15th Challenge Cup, Sichuan Province (Team Leader)"],
      ["2018", "Second Prize, 13th Freescale Smart Car Competition, Sichuan Province (Team Leader)"],
      ["2017", "National Encouragement Scholarship (Top 3%)"],
      ["2017", "First-Class Undergraduate Student Scholarship (Top 10%)"],
    ],
    contact: "I welcome conversations about related research and collaboration.",
    updated: "Last updated: August 2026",
  },
};

const news = [
  {
    lead: "Wonderful news!",
    title: "Aligning Human Sense: Calibrated Distributional Reward Learning for Video Generation",
    status: "has been accepted to",
    venue: "ECCV",
    year: "2026",
    firstAuthor: "Nai-Xin Zhai",
  },
];

function ExternalLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return <a href={href} className={className} target="_blank" rel="noreferrer">{children}</a>;
}

function AuthorLine({ authors }: { authors: string }) {
  const parts = authors.split(/(Youhua Li(?:[†*])?)/g);
  return <>{parts.map((part, index) => part.startsWith("Youhua Li") ? <strong key={`${part}-${index}`}>{part}</strong> : part)}</>;
}

function SectionHeading({ icon, title, note }: { icon: string; title: string; note?: string }) {
  return (
    <div className="section-heading">
      <h2><span aria-hidden="true">{icon}</span>{title}</h2>
      {note ? <p>{note}</p> : null}
    </div>
  );
}

function PaperItem({ paper, index, linkLabel }: { paper: Paper; index: number; linkLabel: string }) {
  const title = paper.href
    ? <ExternalLink href={paper.href}>{paper.title}</ExternalLink>
    : paper.title;

  return (
    <li className="paper-item">
      <span className="paper-number">{String(index).padStart(2, "0")}</span>
      <div className="paper-content">
        <h4>{title}</h4>
        <p className="paper-authors"><AuthorLine authors={paper.authors} /></p>
        <p className="paper-venue"><em>{paper.venue}</em> · {paper.year}{paper.tag ? <span className="paper-topic">{paper.tag}</span> : null}</p>
        {paper.href ? <ExternalLink href={paper.href} className="paper-link">[{linkLabel}]</ExternalLink> : null}
      </div>
    </li>
  );
}

function PaperGroup({ title, papers, linkLabel, start = 1 }: { title: string; papers: Paper[]; linkLabel: string; start?: number }) {
  return (
    <section className="paper-group" aria-label={title}>
      <div className="paper-group-heading">
        <h3>{title}</h3>
        <span>{papers.length} papers</span>
      </div>
      <ol className="paper-list">
        {papers.map((paper, index) => <PaperItem key={paper.title} paper={paper} index={start + index} linkLabel={linkLabel} />)}
      </ol>
    </section>
  );
}

export function AcademicHome({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const isZh = locale === "zh";
  const publicationYears = [...new Set(publications.map((paper) => paper.year))].sort((a, b) => Number(b) - Number(a));
  const publicationGroups = publicationYears.map((year) => ({
    year,
    papers: publications.filter((paper) => paper.year === year),
  }));

  return (
    <div className="site" lang={isZh ? "zh-CN" : "en"}>
      <a className="skip-link" href="#content">{isZh ? "跳转至主要内容" : "Skip to main content"}</a>

      <header className="topbar">
        <div className="page-width topbar-inner">
          <a className="site-name" href="#top" aria-label={t.pageLabel}>Youhua Li</a>
          <nav aria-label={t.navAria}>
            {t.nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          </nav>
          <a className="language-switch" href={t.langHref}>{t.lang}</a>
        </div>
      </header>

      <main className="page-width" id="content">
        <section className="profile" id="top">
          <div className="avatar" role="img" aria-label={t.avatarAria}>
            <span className="avatar-ring ring-one" aria-hidden="true" />
            <span className="avatar-ring ring-two" aria-hidden="true" />
            <span className="avatar-dot dot-one" aria-hidden="true" />
            <span className="avatar-dot dot-two" aria-hidden="true" />
            <span className="avatar-letters" aria-hidden="true">YL</span>
          </div>
          <div className="profile-main">
            <p className="profile-kicker">Decision Analytics · Operations · Artificial Intelligence</p>
            <h1>Youhua Li <span>{t.nameCn}</span></h1>
            <p className="profile-role">{t.role}</p>
            <p className="profile-affiliation">{t.affiliation}</p>
            <p className="profile-bio">{t.bio}</p>

            <dl className="profile-details">
              <div><dt>{isZh ? "所在地" : "Location"}</dt><dd>{t.location}</dd></div>
              <div><dt>{t.advisorLabel}</dt><dd>{t.advisors}</dd></div>
              <div><dt>{t.emailLabel}</dt><dd><a href={`mailto:${profile.email}`}>{profile.email}</a></dd></div>
              <div><dt>{t.linksLabel}</dt><dd><ExternalLink href={profile.scholar}>{t.scholar}</ExternalLink><span> / </span><ExternalLink href={profile.orcid}>ORCID</ExternalLink></dd></div>
            </dl>
          </div>
        </section>

        <section className="content-section" id="education">
          <SectionHeading icon="🎓" title={t.educationTitle} />
          <div className="timeline education-timeline">
            {t.education.map((item) => (
              <article key={`${item.date}-${item.title}`}>
                <time>{item.date}</time>
                <div><h4>{item.title}</h4><p className="timeline-place">{item.place}</p><p>{item.detail}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="news">
          <SectionHeading icon="🔥" title={t.newsTitle} note={t.newsNote} />
          <ol className="news-list">
            {news.map((item) => (
              <li className="news-item" key={item.title}>
                <div className="news-copy">
                  <p className="news-flourish">{item.lead}</p>
                  <p className="news-sentence">
                    <span className="news-title">{item.href ? <ExternalLink href={item.href}>{item.title}</ExternalLink> : item.title}</span>
                    {" "}{item.status} <strong>{item.venue} {item.year}</strong>.
                  </p>
                  <p className="news-congrats">Congratulations, <strong>{item.firstAuthor}</strong>!</p>
                </div>
                <div className="news-venue"><span>{item.venue}</span><time>{item.year}</time></div>
              </li>
            ))}
          </ol>
        </section>

        <section className="content-section" id="research">
          <SectionHeading icon="🔬" title={t.researchTitle} />
          <p className="section-intro">{t.researchIntro}</p>
          <div className="research-list">
            {t.researchAreas.map(([title, text], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section publications" id="publications">
          <SectionHeading icon="📝" title={t.publicationsTitle} />
          <p className="section-intro">{t.publicationsIntro}</p>

          <PaperGroup title={t.underReview} papers={underReview} linkLabel={t.linkLabel} />

          <section className="paper-group published-group" aria-label={t.published}>
            <div className="paper-group-heading">
              <h3>{t.published}</h3>
              <span>{publications.length} {t.papers}</span>
            </div>
            {publicationGroups.map(({ year, papers: yearPapers }, groupIndex) => {
              const start = publicationGroups
                .slice(0, groupIndex)
                .reduce((count, group) => count + group.papers.length, 1);
              return (
                <div className="publication-year" key={year}>
                  <h4>{year}</h4>
                  <ol className="paper-list">
                    {yearPapers.map((paper, index) => <PaperItem key={paper.title} paper={paper} index={start + index} linkLabel={t.linkLabel} />)}
                  </ol>
                </div>
              );
            })}
          </section>
          <p className="contribution-note">{t.contribution}</p>
        </section>

        <section className="content-section" id="experience">
          <SectionHeading icon="📖" title={t.experienceTitle} />
          <div className="resume-block experience-only">
            <div className="timeline">
              {t.experience.map((item) => (
                <article key={`${item.date}-${item.title}-${item.place}`}>
                  <time>{item.date}</time>
                  <div>
                    <h4>{item.title}</h4>
                    <p className="timeline-place">{item.place}</p>
                    <p className="timeline-advisors"><strong>{t.advisorPrefix}</strong>{item.advisors}</p>
                    <p>{item.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section service-section" id="service">
          <SectionHeading icon="💬" title={t.serviceTitle} note={t.serviceIntro} />
          <dl className="service-list">
            {t.services.map(([label, detail]) => <div key={label}><dt>{label}</dt><dd>{detail}</dd></div>)}
          </dl>

          <div className="honors-block">
            <SectionHeading icon="🎖" title={t.honorsTitle} />
            <ul className="honors-list">
              {t.honors.map(([year, honor]) => <li key={`${year}-${honor}`}><time>{year}</time><span>{honor}</span></li>)}
            </ul>
          </div>
        </section>
      </main>

      <footer>
        <div className="page-width footer-inner">
          <div><strong>Youhua Li</strong><span>{t.contact}</span></div>
          <div className="footer-contact"><a href={`mailto:${profile.email}`}>{profile.email}</a><span>{t.updated}</span></div>
        </div>
      </footer>
    </div>
  );
}
