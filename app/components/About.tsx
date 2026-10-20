"use client";

import { useEffect, useRef, useState } from "react";

const text =
  "I'm a full-stack engineer in Lagos who owns products end to end — from database design and REST APIs to React and Next.js interfaces and Android releases on Google Play. For 4+ years I've shipped escrow flows, payment integrations and role-based systems for fintech, agritech, HR, logistics and education teams in Nigeria and the UK.";

const words = text.split(" ");

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px) and (prefers-reduced-motion: no-preference)");
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = ref.current;
      if (!el || !mq.matches) return setProgress(1);
      const rect = el.getBoundingClientRect();
      const distance = rect.height - window.innerHeight;
      // Finish revealing a little before the sticky section releases.
      setProgress(Math.min(1, Math.max(0, (-rect.top + window.innerHeight * 0.35) / (distance * 0.85))));
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

  const lit = progress * words.length;

  return (
    <section id="about" className="about">
      <div className="about-scroller" ref={ref}>
        <div className="about-sticky container">
          <span className="eyebrow">About me</span>
          <p className="about-text">
            {words.map((w, i) => (
              <span key={i} style={{ opacity: i < lit ? 1 : 0.14 }}>
                {w}{" "}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
