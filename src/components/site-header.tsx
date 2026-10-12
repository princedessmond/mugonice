"use client";

import { useEffect, useState } from "react";
import { LogoMark } from "@/components/logo-mark";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "What we build" },
  { href: "#about", label: "About" },
  { href: "#process", label: "Process" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#home" aria-label="MugoNice home">
          <LogoMark className="brand-mark" />
          <span className="brand-name">
            Mugo<span>Nice</span>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href="#contact">
          Let&apos;s talk <span>↗</span>
        </a>

        <button
          className={`menu-toggle ${menuOpen ? "menu-toggle--open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
        </button>
      </div>

      <nav
        className={`mobile-nav ${menuOpen ? "mobile-nav--open" : ""}`}
        id="mobile-navigation"
        aria-label="Mobile navigation"
      >
        {links.map((link) => (
          <a href={link.href} key={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </a>
        ))}
        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Start a project
        </a>
      </nav>
    </header>
  );
}
