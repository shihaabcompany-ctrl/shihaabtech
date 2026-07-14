"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const mobileNavItems = [{ label: "Home", href: "/" }, ...navItems];

type SiteHeaderProps = {
  brandHref?: string;
};

export function SiteHeader({ brandHref = "/" }: SiteHeaderProps) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const closeMobileNav = () => setIsMobileNavOpen(false);

  return (
    <header className="site-header" aria-label="Main navigation">
      <Link
        href={brandHref}
        className="brand-link"
        aria-label="Shihaab Tech home"
        onClick={closeMobileNav}
      >
        <Image
          src="/brand/shihaab-tech-premium-v2-dark.svg"
          alt="Shihaab Tech"
          width={260}
          height={65}
          priority
        />
      </Link>

      <nav className="desktop-nav" aria-label="Pages">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>

      <Link className="nav-cta" href="/contact">
        Start a project
        <ArrowRight aria-hidden="true" size={16} />
      </Link>

      <button
        className="mobile-nav-toggle"
        type="button"
        aria-controls="mobile-nav-panel"
        aria-expanded={isMobileNavOpen}
        aria-label={isMobileNavOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setIsMobileNavOpen((current) => !current)}
      >
        {isMobileNavOpen ? <X aria-hidden="true" size={19} /> : <Menu aria-hidden="true" size={19} />}
      </button>

      <nav
        id="mobile-nav-panel"
        className={`mobile-nav-panel${isMobileNavOpen ? " is-open" : ""}`}
        aria-label="Mobile pages"
      >
        {mobileNavItems.map((item) => (
          <Link key={item.href} href={item.href} onClick={closeMobileNav}>
            {item.label}
            <ArrowRight aria-hidden="true" size={15} />
          </Link>
        ))}
        <Link className="mobile-nav-cta" href="/contact" onClick={closeMobileNav}>
          Start a project
          <ArrowRight aria-hidden="true" size={16} />
        </Link>
      </nav>
    </header>
  );
}
