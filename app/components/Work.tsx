"use client";

import { useEffect, useRef, useState } from "react";
import { projects } from "../data";
import ProjectVisual from "./ProjectVisual";

const n = projects.length;

export default function Work() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const titlesRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const scroller = scrollerRef.current;
      const titles = titlesRef.current;
      if (!scroller || !titles) return;
      const rect = scroller.getBoundingClientRect();
      const distance = rect.height - window.innerHeight;
      const p = distance > 0 ? Math.min(1, Math.max(0, -rect.top / distance)) : 0;
      const item = titles.firstElementChild as HTMLElement | null;
      const itemH = item?.offsetHeight ?? 0;
      // Center the active title vertically while scrolling through the list.
      const start = window.innerHeight / 2 - itemH / 2;
      const y = start - p * itemH * (n - 1);
      titles.style.transform = `translate3d(0, ${y}px, 0)`;
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
      setActive(Math.min(n - 1, Math.round(p * (n - 1))));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const current = projects[active];

  return (
    <section id="work" className="work">
      <div className="container section-head">
        <h2 className="section-title">
          Selected
          <br />
          Work
        </h2>
        <p className="eyebrow" style={{ maxWidth: 320, margin: 0 }}>
          Marketplaces, fintech, HR, logistics &amp; education — built as sole or lead engineer
        </p>
      </div>

      {/* Desktop: sticky 3D scroll, modelled on the reference site */}
      <div className="work-scroller" ref={scrollerRef} style={{ height: `${100 + (n - 1) * 45}vh` }}>
        <div className="work-sticky">
          <div className="work-stage">
            <div className="work-titles-holder">
              <div className="work-titles" ref={titlesRef}>
                {projects.map((p, i) => (
                  <div key={p.slug} className={`work-title-item${i === active ? " active" : ""}`}>
                    <a
                      className="work-title-link"
                      href={p.href ?? "#contact"}
                      {...(p.href ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      <span className="work-title">{p.title}</span>
                      <span className="eyebrow work-title-meta">
                        {p.year} · {p.category}
                      </span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="work-fade" />

          <div className="work-media">
            {projects.map((p, i) => (
              <div key={p.slug} className={`work-media-item${i === active ? " active" : ""}`}>
                <ProjectVisual project={p} />
              </div>
            ))}
          </div>

          <div className="work-detail" aria-live="polite">
            <p>{current.summary}</p>
            <div className="chips">
              <span className="chip" style={{ color: "var(--accent)" }}>
                {current.role}
              </span>
              {current.stack.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="work-counter eyebrow">
            <span>{String(active + 1).padStart(2, "0")}</span>
            <div className="work-progress">
              <div ref={barRef} />
            </div>
            <span>{String(n).padStart(2, "0")}</span>
          </div>
        </div>
      </div>

      {/* Mobile: stacked cards */}
      <div className="work-list">
        {projects.map((p) => (
          <article key={p.slug} className="work-card">
            <div className="work-card-media">
              <ProjectVisual project={p} />
            </div>
            <div className="eyebrow" style={{ color: "var(--on-dark-soft)" }}>
              {p.year} · {p.category}
            </div>
            <h3 className="work-card-title">{p.title}</h3>
            <p>{p.summary}</p>
            <div className="chips" style={{ color: "var(--on-dark-soft)" }}>
              {p.stack.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
            {p.href && (
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
                style={{ display: "inline-block", marginTop: 16, color: "var(--accent)" }}
              >
                Visit {p.linkLabel} ↗
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
