import { useEffect, useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  BookOpenText,
  Briefcase,
  ChartLineUp,
  Check,
  Code,
  Database,
  DownloadSimple,
  EnvelopeSimple,
  FileText,
  Flask,
  GraduationCap,
  LinkedinLogo,
  List,
  MapPin,
  Medal,
  Network,
  Phone,
  ShieldCheck,
  Sparkle,
  Target,
  TestTube,
  TreeStructure,
  UsersThree,
  X,
} from "@phosphor-icons/react";
import { contactDetails, content } from "./content";

const processIcons = [Database, ShieldCheck, Network, ChartLineUp, TestTube];
const projectIcons = [Flask, Network, ChartLineUp, Database];
const capabilityIcons = [Code, Database, Sparkle, ChartLineUp, TreeStructure, TestTube];
const signalIcons = [Database, UsersThree, ChartLineUp];

function LanguageToggle({ language, onChange, copy, compact = false }) {
  return (
    <button
      className={`language-toggle${compact ? " language-toggle--compact" : ""}`}
      type="button"
      onClick={() => onChange(language === "en" ? "zh" : "en")}
      aria-label={copy.language.switchTo}
      title={copy.language.switchTo}
    >
      <span className={language === "en" ? "is-active" : ""}>EN</span>
      <span className="language-toggle__divider" aria-hidden="true">
        /
      </span>
      <span className={language === "zh" ? "is-active" : ""}>中文</span>
    </button>
  );
}

function SectionHeader({ eyebrow, title, intro, align = "left" }) {
  return (
    <header className={`section-header section-header--${align}`} data-reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {intro ? <p className="section-header__intro">{intro}</p> : null}
    </header>
  );
}

function Header({ copy, language, setLanguage, menuOpen, setMenuOpen }) {
  const links = [
    ["work", copy.nav.work],
    ["experience", copy.nav.experience],
    ["capabilities", copy.nav.capabilities],
    ["profile", copy.nav.profile],
    ["contact", copy.nav.contact],
  ];

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Xiaoyang Chen — home">
        <span className="brand__mark">[XC]</span>
        <span className="brand__name">{copy.hero.name}</span>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map(([href, label]) => (
          <a key={href} href={`#${href}`}>
            {label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <LanguageToggle language={language} onChange={setLanguage} copy={copy} />
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? copy.nav.close : copy.nav.menu}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <List size={22} />}
        </button>
      </div>

      <div className={`mobile-menu${menuOpen ? " is-open" : ""}`} id="mobile-menu">
        <nav aria-label="Mobile navigation">
          {links.map(([href, label]) => (
            <a key={href} href={`#${href}`} onClick={() => setMenuOpen(false)}>
              {label}
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero({ copy, language }) {
  const resumeHref =
    language === "zh"
      ? "/resume/%E9%99%88%E8%90%A7%E4%BB%B0-%E4%B8%AD%E6%96%87%E7%AE%80%E5%8E%86.pdf"
      : "/resume/Xiaoyang-Chen-CV-EN.pdf";

  return (
      <section className="hero" id="top">
        <img
          className="hero__data-background"
          src="/profile/data-observatory-background-v2.png"
          alt=""
          aria-hidden="true"
        />
        <div className="hero__content" data-reveal>
          <p className="eyebrow hero__eyebrow">{copy.hero.eyebrow}</p>
          <h1>
            <span>{copy.hero.titleA}</span>
            <strong>{copy.hero.titleB}</strong>
          </h1>
          <div className="hero__identity">
            <h2>{copy.hero.name}</h2>
            <p>{copy.hero.role}</p>
          </div>
          <p className="hero__summary">{copy.hero.summary}</p>
          <div className="hero__actions">
            <a className="button button--primary" href="#spotlight">
              {copy.hero.primary}
              <ArrowRight size={18} weight="bold" aria-hidden="true" />
            </a>
            <a className="button button--secondary" href={resumeHref} download>
              {copy.hero.secondary}
              <DownloadSimple size={18} aria-hidden="true" />
            </a>
          </div>
          <div className="hero__meta">
            <span>
              <span className="status-dot" aria-hidden="true" />
              {copy.hero.availability}
            </span>
            <span>
              <MapPin size={16} aria-hidden="true" />
              {copy.hero.location}
            </span>
          </div>
        </div>

        <div className="hero__portrait-wrap" data-reveal>
          <div className="hero__portrait-frame">
            <img
              className="hero__portrait"
              src="/profile/xiaoyang-chen.jpg"
              alt={copy.hero.portraitAlt}
              width="480"
              height="640"
            />
            <span className="hero__portrait-label">
              <span>SYD</span>
              <span>2052</span>
            </span>
          </div>
        </div>

        <a className="hero__scroll" href="#spotlight">
          <span>{copy.hero.scroll}</span>
          <ArrowDown size={18} aria-hidden="true" />
        </a>
      </section>
  );
}

function Metrics({ copy }) {
  return (
    <section className="metrics" id="evidence-strip" aria-label="Evidence summary">
      {copy.metrics.map((metric, index) => (
        <article className="metric" key={metric.value} data-reveal>
          <span className="metric__index">0{index + 1}</span>
          <strong>{metric.value}</strong>
          <h3>{metric.label}</h3>
          <p>{metric.detail}</p>
        </article>
      ))}
    </section>
  );
}

function Spotlight({ copy, language }) {
  const [windowDays, setWindowDays] = useState(30);
  const shownRows = useMemo(
    () => copy.spotlight.demo.rows.filter((row) => row.days <= windowDays),
    [copy, windowDays],
  );

  return (
    <section
      className="spotlight section-shell"
      id="spotlight"
      aria-labelledby="spotlight-title"
    >
      <div className="spotlight__intro" data-reveal>
        <p className="eyebrow">{copy.spotlight.label}</p>
        <div>
          <h2 id="spotlight-title">{copy.spotlight.title}</h2>
          <p>{copy.spotlight.intro}</p>
        </div>
        <div className="tag-list" aria-label="Project technologies">
          {copy.spotlight.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="spotlight__governance">
          <ShieldCheck size={30} weight="duotone" aria-hidden="true" />
          <div>
            <span>{copy.spotlight.governance.eyebrow}</span>
            <h3>{copy.spotlight.governance.title}</h3>
            <p>{copy.spotlight.governance.text}</p>
          </div>
        </div>
      </div>

      <div className="process-block" data-reveal>
        <h3>{copy.spotlight.processTitle}</h3>
        <ol className="process-list">
          {copy.spotlight.process.map((step, index) => {
            const Icon = processIcons[index];
            return (
              <li key={step.title}>
                <span className="process-list__icon">
                  <Icon size={25} aria-hidden="true" />
                </span>
                <span className="process-list__number">0{index + 1}</span>
                <h4>{step.title}</h4>
                <p>{step.text}</p>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="spotlight__evidence" data-reveal>
        <div className="evidence-panel">
          <h3>{copy.spotlight.evidenceTitle}</h3>
          <ul>
            {copy.spotlight.evidence.map((item) => (
              <li key={item}>
                <Check size={18} weight="bold" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="release-demo">
          <div className="release-demo__header">
            <div>
              <p className="eyebrow">{copy.spotlight.demo.eyebrow}</p>
              <h3>{copy.spotlight.demo.title}</h3>
            </div>
            <div className="window-selector" aria-label={copy.spotlight.demo.windowLabel}>
              {[30, 60, 90].map((days) => (
                <button
                  type="button"
                  key={days}
                  className={windowDays === days ? "is-active" : ""}
                  onClick={() => setWindowDays(days)}
                  aria-pressed={windowDays === days}
                >
                  {copy.spotlight.demo.windowOptions[days]}
                </button>
              ))}
            </div>
          </div>
          <p className="release-demo__caption">{copy.spotlight.demo.caption}</p>
          <div className="data-signal-grid" aria-label={copy.spotlight.demo.title}>
            {copy.spotlight.demo.signals.map((signal, index) => {
              const Icon = signalIcons[index];
              return (
                <article className={`data-signal data-signal--${index + 1}`} key={signal.label}>
                  <Icon size={20} aria-hidden="true" />
                  <span>{signal.label}</span>
                  <strong>{signal.value}</strong>
                  <small>{signal.detail}</small>
                </article>
              );
            })}
          </div>
          <div className="release-table-wrap">
            <table className="release-table">
              <thead>
                <tr>
                  <th>{copy.spotlight.demo.columns.release}</th>
                  <th>{copy.spotlight.demo.columns.due}</th>
                  <th>{copy.spotlight.demo.columns.progress}</th>
                  <th>{copy.spotlight.demo.columns.items}</th>
                  <th>{copy.spotlight.demo.columns.owner}</th>
                  <th>{copy.spotlight.demo.columns.analysis}</th>
                  <th>{copy.spotlight.demo.columns.action}</th>
                </tr>
              </thead>
              <tbody>
                {shownRows.map((row) => (
                  <tr key={row.name}>
                    <td data-label={copy.spotlight.demo.columns.release}>{row.name}</td>
                    <td data-label={copy.spotlight.demo.columns.due}>{row.due}</td>
                    <td data-label={copy.spotlight.demo.columns.progress}>
                      <div className="progress-cell">
                        <progress value={row.progress} max="100">
                          {row.progress}%
                        </progress>
                        <span>{row.progress}%</span>
                      </div>
                    </td>
                    <td data-label={copy.spotlight.demo.columns.items}>{row.items}</td>
                    <td data-label={copy.spotlight.demo.columns.owner}>{row.owner}</td>
                    <td data-label={copy.spotlight.demo.columns.analysis}>
                      <span className={`analysis-chip analysis-chip--${row.tone}`}>
                        {row.analysis}
                      </span>
                    </td>
                    <td data-label={copy.spotlight.demo.columns.action}>
                      <button
                        className="release-link"
                        type="button"
                        onClick={(event) => {
                          event.currentTarget.textContent =
                            language === "zh" ? "演示链接" : "Demo link";
                        }}
                      >
                        {copy.spotlight.demo.action}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {shownRows.length === 0 ? (
              <p className="release-table__empty">{copy.spotlight.demo.empty}</p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

function Work({ copy }) {
  return (
    <section className="work section-shell" id="work">
      <SectionHeader
        eyebrow={copy.work.eyebrow}
        title={copy.work.title}
        intro={copy.work.intro}
      />
      <div className="project-list">
        {copy.work.projects.map((project, index) => {
          const Icon = projectIcons[index];
          return (
            <article className="project" key={project.title} data-reveal>
              <div className="project__rail">
                <span>0{index + 1}</span>
                <Icon size={28} aria-hidden="true" />
              </div>
              <div className="project__body">
                <header>
                  <div>
                    <p className="project__type">{project.type}</p>
                    <h3>{project.title}</h3>
                  </div>
                  <time>{project.date}</time>
                </header>
                <p className="project__summary">{project.summary}</p>
                <ul>
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="tag-list">
                  {project.tech.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Experience({ copy }) {
  return (
    <section className="experience section-shell" id="experience">
      <SectionHeader eyebrow={copy.experience.eyebrow} title={copy.experience.title} />
      <div className="experience-grid">
        <article className="experience-card experience-card--industry" data-reveal>
          <header className="experience-card__heading">
            <Briefcase size={25} aria-hidden="true" />
            <h3>{copy.experience.industryTitle}</h3>
          </header>
          <div className="experience-card__title">
            <div>
              <h4>{copy.experience.industry.role}</h4>
              <p>{copy.experience.industry.company}</p>
            </div>
            <time>{copy.experience.industry.date}</time>
          </div>
          <ul>
            {copy.experience.industry.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>

        <article className="experience-card" data-reveal>
          <header className="experience-card__heading">
            <GraduationCap size={26} aria-hidden="true" />
            <h3>{copy.experience.educationTitle}</h3>
          </header>
          <div className="education-list">
            {copy.experience.education.map((item) => (
              <div className="education-item" key={`${item.degree}-${item.focus}`}>
                <span className="education-item__node" aria-hidden="true" />
                <time>{item.date}</time>
                <h4>{item.degree}</h4>
                <p className="education-item__focus">{item.focus}</p>
                <p>{item.school}</p>
                <p className="education-item__detail">{item.detail}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

function Capabilities({ copy }) {
  return (
    <section className="capabilities section-shell" id="capabilities">
      <SectionHeader
        eyebrow={copy.capabilities.eyebrow}
        title={copy.capabilities.title}
      />
      <div className="capability-grid">
        {copy.capabilities.groups.map((group, index) => {
          const Icon = capabilityIcons[index];
          return (
            <article key={group.title} data-reveal>
              <Icon size={28} aria-hidden="true" />
              <h3>{group.title}</h3>
              <div className="skill-list">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Profile({ copy }) {
  return (
    <section className="profile section-shell" id="profile">
      <SectionHeader eyebrow={copy.profile.eyebrow} title={copy.profile.title} />
      <div className="profile-grid">
        <article className="profile-panel profile-panel--employment" data-reveal>
          <header>
            <Briefcase size={29} weight="duotone" aria-hidden="true" />
            <div>
              <span>{copy.profile.employmentAward.eyebrow}</span>
              <h3>{copy.profile.employmentAward.title}</h3>
            </div>
            <time>{copy.profile.employmentAward.date}</time>
          </header>
          <div className="employment-award__body">
            <div>
              <strong>{copy.profile.employmentAward.badge}</strong>
              <p>{copy.profile.employmentAward.text}</p>
            </div>
            <div className="employment-award__proposal">
              <h4>{copy.profile.employmentAward.proposalTitle}</h4>
              <ul>
                {copy.profile.employmentAward.proposal.map((item) => (
                  <li key={item}>
                    <Check size={16} weight="bold" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>

        <article className="profile-panel profile-panel--leadership" data-reveal>
          <header>
            <UsersThree size={27} aria-hidden="true" />
            <h3>{copy.profile.leadershipTitle}</h3>
          </header>
          <div className="profile-list">
            {copy.profile.leadership.map((item) => (
              <div key={item.title}>
                <time>{item.date}</time>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="profile-panel" data-reveal>
          <header>
            <Medal size={27} aria-hidden="true" />
            <h3>{copy.profile.awardsTitle}</h3>
          </header>
          <ul className="check-list">
            {copy.profile.awards.map((item) => (
              <li key={item}>
                <Check size={17} weight="bold" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="profile-panel" data-reveal>
          <header>
            <BookOpenText size={27} aria-hidden="true" />
            <h3>{copy.profile.publicationsTitle}</h3>
          </header>
          <ul className="document-list">
            {copy.profile.publications.map((item) => (
              <li key={item}>
                <FileText size={18} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="profile-panel" data-reveal>
          <header>
            <ShieldCheck size={27} aria-hidden="true" />
            <h3>{copy.profile.certificationsTitle}</h3>
          </header>
          <ul className="document-list">
            {copy.profile.certifications.map((item) => (
              <li key={item}>
                <FileText size={18} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="profile-panel profile-panel--languages" data-reveal>
          <header>
            <Target size={27} aria-hidden="true" />
            <h3>{copy.profile.languagesTitle}</h3>
          </header>
          <ul>
            {copy.profile.languages.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

function Contact({ copy, language }) {
  const resumeHref =
    language === "zh"
      ? "/resume/%E9%99%88%E8%90%A7%E4%BB%B0-%E4%B8%AD%E6%96%87%E7%AE%80%E5%8E%86.pdf"
      : "/resume/Xiaoyang-Chen-CV-EN.pdf";

  return (
    <footer className="contact" id="contact">
      <div className="contact__main section-shell" data-reveal>
        <div className="contact__statement">
          <p className="eyebrow">{copy.contact.eyebrow}</p>
          <h2>{copy.contact.title}</h2>
          <p>{copy.contact.text}</p>
          <a className="button button--primary" href={resumeHref} download>
            {copy.contact.download}
            <DownloadSimple size={18} aria-hidden="true" />
          </a>
        </div>
        <address className="contact__details">
          <a href={`mailto:${contactDetails.email}`}>
            <EnvelopeSimple size={22} aria-hidden="true" />
            <span>
              <small>{copy.contact.emailLabel}</small>
              {contactDetails.email}
            </span>
          </a>
          <a href={`tel:${contactDetails.phoneHref}`}>
            <Phone size={22} aria-hidden="true" />
            <span>
              <small>{copy.contact.phoneLabel}</small>
              {contactDetails.phoneDisplay}
            </span>
          </a>
          <a href={contactDetails.linkedin} target="_blank" rel="noreferrer">
            <LinkedinLogo size={22} aria-hidden="true" />
            <span>
              <small>{copy.contact.linkedinLabel}</small>
              linkedin.com/in/xiaoyang-chen
            </span>
          </a>
          <span>
            <MapPin size={22} aria-hidden="true" />
            <span>
              <small>{copy.contact.locationLabel}</small>
              {copy.contact.location}
            </span>
          </span>
        </address>
      </div>
      <div className="contact__footer section-shell">
        <p>© 2026 Xiaoyang Chen · {copy.contact.rights}</p>
        <a href="#top">
          {copy.contact.backToTop}
          <ArrowRight size={16} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}

export function App() {
  const [language, setLanguage] = useState(() => {
    try {
      const saved = window.localStorage.getItem("portfolio-language");
      if (saved === "en" || saved === "zh") return saved;
    } catch {
      // Storage can be unavailable in privacy-restricted browsing contexts.
    }
    return navigator.language?.toLowerCase().startsWith("zh") ? "zh" : "en";
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const copy = content[language];

  useEffect(() => {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    document.title = copy.meta.title;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", copy.meta.description);
    try {
      window.localStorage.setItem("portfolio-language", language);
    } catch {
      // The page remains fully functional when persistence is unavailable.
    }
  }, [copy, language]);

  useEffect(() => {
    const items = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px" },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [language]);

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  return (
    <div className={`portfolio portfolio--${language}`}>
      <Header
        copy={copy}
        language={language}
        setLanguage={setLanguage}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <main>
        <Hero copy={copy} language={language} />
        <Spotlight copy={copy} language={language} />
        <Metrics copy={copy} />
        <Work copy={copy} />
        <Experience copy={copy} />
        <Capabilities copy={copy} />
        <Profile copy={copy} />
      </main>
      <Contact copy={copy} language={language} />
    </div>
  );
}
