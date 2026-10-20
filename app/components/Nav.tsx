"use client";

import { useEffect, useState } from "react";
import { profile } from "../data";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className="nav">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          Peter Afolabi
        </a>
        <nav className="nav-links" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </nav>
        <button
          className="menu-button"
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </header>

      <div id="mobile-menu" className={`mobile-menu${open ? " open" : ""}`} aria-hidden={!open}>
        {links.map((l) => (
          <a key={l.href} href={l.href} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a
          href={profile.cv}
          tabIndex={open ? 0 : -1}
          className="eyebrow"
          style={{ fontSize: 14, marginTop: 24, color: "var(--accent)" }}
          download
        >
          Download CV ↓
        </a>
      </div>
    </>
  );
}
