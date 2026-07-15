import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, MapPin } from "lucide-react";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const footerServices = [
  "Premium websites",
  "Custom web apps",
  "SaaS MVPs",
  "Automation systems",
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="footer-brand-block">
          <Link href="/" className="footer-logo" aria-label="Shihaab Tech home">
            <Image
              src="/brand/shihaab-tech-premium-v2-dark.svg"
              alt="Shihaab Tech"
              width={260}
              height={65}
            />
          </Link>
          <p>
            Premium websites, product systems, and automation workflows for
            businesses that want a sharper digital presence.
          </p>
          <Link className="footer-cta" href="/contact">
            Start a project
            <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </div>

        <div className="footer-columns">
          <div>
            <span>Pages</span>
            {footerLinks.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
          <div>
            <span>Builds</span>
            {footerServices.map((item) => (
              <small key={item}>{item}</small>
            ))}
          </div>
          <div>
            <span>Contact</span>
            <small>
              <Mail aria-hidden="true" size={15} />
              Project enquiries
            </small>
            <small>
              <MapPin aria-hidden="true" size={15} />
              Working worldwide
            </small>
          </div>
        </div>
      </div>

      <div className="site-footer-bottom">
        <span>© {new Date().getFullYear()} Shihaab Tech</span>
        <span>Founder-led digital product studio</span>
      </div>
    </footer>
  );
}
