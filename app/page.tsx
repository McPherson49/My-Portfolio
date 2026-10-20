import Image from "next/image";
import portrait from "../public/peter.jpg";
import About from "./components/About";
import Nav from "./components/Nav";
import Reveal from "./components/Reveal";
import Work from "./components/Work";
import { experience, marqueeTech, profile, skills, stats } from "./data";

function Loader() {
  const letters = "Peter".split("");
  return (
    <div className="loader" aria-hidden="true">
      <div className="loader-word">
        {letters.map((l, i) => (
          <span key={i} style={{ animationDelay: `${0.1 + i * 0.07}s` }}>
            {l}
          </span>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-inner">
        <div className="hero-wrapper">
          <div className="hero-content">
            <span className="eyebrow status">Available for new projects</span>
            <h1 className="hero-title">Hi there, I&apos;m Peter</h1>
            <p className="hero-text">
              Full-stack software engineer building web and mobile products for fintech,
              agritech, HR and logistics. Based in {profile.location}.
            </p>
            <div className="hero-actions">
              <a href="#work" className="btn btn-solid">
                See my work
              </a>
              <a href={profile.cv} className="btn btn-ghost" download>
                Download CV ↓
              </a>
            </div>
          </div>
          <div className="hero-image-holder">
            <Image
              src={portrait}
              alt="Portrait of Peter Afolabi"
              className="hero-image"
              priority
              placeholder="blur"
              sizes="(max-width: 767px) 86vw, 520px"
            />
          </div>
        </div>
      </div>
      <div className="infinite" aria-hidden="true">
        <div className="infinite-track">
          {[0, 1].map((k) => (
            <div key={k} style={{ display: "flex" }}>
              <span className="infinite-word">Peter</span>
              <span className="infinite-word outline">Afolabi</span>
            </div>
          ))}
        </div>
      </div>
      <div className="container">
        <div className="stats">
          {stats.map((s, i) => (
            <Reveal key={s.label} className="stat" delay={i * 0.08}>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechBand() {
  return (
    <div className="band" aria-label="Technologies I work with">
      <div className="band-track">
        {[...marqueeTech, ...marqueeTech].map((t, i) => (
          <span key={i} className="band-item" aria-hidden={i >= marqueeTech.length}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function Experience() {
  return (
    <section id="experience" className="block">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Experience</h2>
          <p className="eyebrow" style={{ margin: 0 }}>
            2022 — Present
          </p>
        </div>
        <div>
          {experience.map((x) => (
            <Reveal key={x.company} className="xp-row">
              <div className="xp-dates eyebrow">{x.dates}</div>
              <div>
                <h3 className="xp-role">{x.role}</h3>
                <div className="xp-company">
                  {x.company} · {x.place}
                </div>
              </div>
              <ul className="xp-points">
                {x.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="block skills">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">
            Skills &amp;
            <br />
            Tools
          </h2>
        </div>
        <div className="skills-grid">
          {skills.map((s, i) => (
            <Reveal key={s.group} className="skill-card" delay={(i % 3) * 0.08}>
              <span className="eyebrow" style={{ opacity: 0.6 }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3>{s.group}</h3>
              <div className="chips">
                {s.items.map((it) => (
                  <span key={it} className="chip">
                    {it}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <span className="eyebrow">Have a project in mind?</span>
        <div>
          <a href={`mailto:${profile.email}`} className="footer-cta">
            Let&apos;s talk <span className="arrow">→</span>
          </a>
        </div>

        <div className="footer-grid">
          <div>
            <div className="footer-brand">Peter Afolabi</div>
            <p className="footer-tag">
              Full-stack software engineer. Web &amp; mobile, React · Next.js · Node.js · Laravel.
            </p>
          </div>
          <div className="footer-links-holder">
            <div className="footer-links">
              <span className="eyebrow">Contact</span>
              <a className="footer-link" href={`mailto:${profile.email}`} style={{ textTransform: "none" }}>
                {profile.email}
              </a>
              <a className="footer-link" href={profile.phoneHref}>
                {profile.phone}
              </a>
              <span className="footer-link" style={{ color: "var(--on-dark-soft)" }}>
                {profile.location}
              </span>
            </div>
            <div className="footer-links">
              <span className="eyebrow">Elsewhere</span>
              <a className="footer-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn ↗
              </a>
              <a className="footer-link" href={profile.github} target="_blank" rel="noopener noreferrer">
                GitHub ↗
              </a>
              <a className="footer-link" href={profile.cv} download>
                Download CV ↓
              </a>
            </div>
            <div className="footer-links">
              <span className="eyebrow">Pages</span>
              <a className="footer-link" href="#work">
                Work
              </a>
              <a className="footer-link" href="#about">
                About
              </a>
              <a className="footer-link" href="#experience">
                Experience
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {year} {profile.fullName}
          </span>
          <a href="#top" className="footer-link" style={{ fontSize: 13 }}>
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Loader />
      <div className="noise" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <Work />
        <TechBand />
        <About />
        <Experience />
        <Skills />
      </main>
      <Footer />
    </>
  );
}
