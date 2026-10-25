"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "work", label: "Work" },
  { id: "capabilities", label: "Capabilities" },
  { id: "about", label: "About" },
  { id: "insights", label: "Insights" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];
    if (!("IntersectionObserver" in window) || !sections.length) return;
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((s) => spy.observe(s));
    return () => spy.disconnect();
  }, []);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""} ${open ? "open" : ""}`}>
      <div className="container nav-wrap">
        <a href="#home" className="brand" aria-label="Thoth Sparkz home" onClick={() => setOpen(false)}>
          <Image src="/logo-mark.png" alt="" width={40} height={40} className="brand-mark" priority />
          <span className="brand-text">
            <span className="brand-name">
              <span className="ivory">THOTH</span> <span className="gold">SPARKZ</span>
              <sup>™</sup>
            </span>
            <span className="brand-tag">INTELLIGENCE THAT SPARKS TRANSFORMATION</span>
          </span>
        </a>

        <nav className="main-nav" aria-label="Primary">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={active === l.id ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-ghost btn-sm nav-cta" onClick={() => setOpen(false)}>
            Let&apos;s Talk <span className="arr">&rarr;</span>
          </a>
        </nav>

        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
