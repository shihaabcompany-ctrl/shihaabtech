import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

type SiteHeaderProps = {
  brandHref?: string;
};

export function SiteHeader({ brandHref = "/" }: SiteHeaderProps) {
  return (
    <header className="site-header" aria-label="Main navigation">
      <Link href={brandHref} className="brand-link" aria-label="Shihaab Tech home">
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
    </header>
  );
}
