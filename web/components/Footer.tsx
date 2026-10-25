"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { LinkedInIcon, InstagramIcon, YouTubeIcon, XIcon } from "./icons";

const NAV = [
  { id: "home", label: "Home" },
  { id: "work", label: "Work" },
  { id: "capabilities", label: "Capabilities" },
  { id: "about", label: "About" },
  { id: "insights", label: "Insights" },
  { id: "contact", label: "Contact" },
];

const SOCIAL = [
  { label: "LinkedIn", href: "#", Icon: LinkedInIcon },
  { label: "Instagram", href: "#", Icon: InstagramIcon },
  { label: "YouTube", href: "#", Icon: YouTubeIcon },
  { label: "X", href: "#", Icon: XIcon },
];

export default function Footer() {
  const [year, setYear] = useState(2026);
  useEffect(() => setYear(new Date().getFullYear()), []);
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <a href="#home" className="brand footer-brand" aria-label="Thoth Sparkz home">
          <Image src="/logo-mark.png" alt="" width={44} height={44} className="brand-mark" />
          <span className="brand-text">
            <span className="brand-name">
              <span className="ivory">THOTH</span> <span className="gold">SPARKZ</span>
              <sup>™</sup>
            </span>
            <span className="brand-tag">INTELLIGENCE THAT SPARKS TRANSFORMATION</span>
          </span>
        </a>

        <nav className="footer-nav" aria-label="Footer">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`}>
              {n.label}
            </a>
          ))}
        </nav>

        <div className="footer-social" aria-label="Social links">
          {SOCIAL.map(({ label, href, Icon }) => (
            <a key={label} href={href} aria-label={label}>
              <Icon />
            </a>
          ))}
        </div>

        <p className="footer-slogan">
          A BRIGHTER
          <br />
          TOMORROW.
          <br />
          TOGETHER.
        </p>
      </div>

      <div className="container footer-base">
        <p>© {year} Thoth Sparkz. All rights reserved.</p>
        <p>Intelligence that sparks transformation.</p>
      </div>
    </footer>
  );
}
