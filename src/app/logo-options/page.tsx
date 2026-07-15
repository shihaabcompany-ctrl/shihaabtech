import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Logo Options",
  description:
    "Compare premium Shihaab Tech logo alternatives in the website theme.",
  alternates: {
    canonical: "/logo-options",
  },
};

const logoOptions = [
  {
    name: "01 Noir Axis",
    file: "/brand/shihaab-logo-premium-01-noir-axis.svg",
    direction: "The most premium and mature direction.",
    fit: "A restrained luxury-tech identity with an abstract S mark, strong spacing, and a serious software studio feel.",
    notes: ["Best overall choice", "Premium dark-mode identity", "Strong header and favicon potential"],
  },
  {
    name: "02 Lattice Mark",
    file: "/brand/shihaab-logo-premium-02-lattice-mark.svg",
    direction: "The most futuristic software identity.",
    fit: "A geometric S system mark for a company that wants to look technical, product-focused, and automation-ready.",
    notes: ["Strong tech signal", "Good SaaS feel", "Distinct icon shape"],
  },
  {
    name: "03 Editorial Wordmark",
    file: "/brand/shihaab-logo-premium-03-wordmark.svg",
    direction: "The cleanest wordmark-led option.",
    fit: "A quieter premium direction where the company name feels more like a serious studio than a decorative tech icon.",
    notes: ["Most minimal", "Best for brand trust", "Cleanest typography direction"],
  },
];

export default function LogoOptionsPage() {
  return (
    <main className="inner-page">
      <SiteHeader />

      <section className="page-hero">
        <p className="case-kicker">Logo options</p>
        <h1>A more premium logo set for Shihaab Tech.</h1>
        <span>
          This set is calmer, sharper, and more mature than the first version:
          less neon, less template-looking, and more like a premium software
          company identity.
        </span>
        <div className="case-actions">
          <Link className="primary-button" href="/contact">
            Use this brand direction
            <ArrowRight aria-hidden="true" size={18} />
          </Link>
          <Link className="secondary-button" href="/">
            Back to homepage
            <ArrowRight aria-hidden="true" size={18} />
          </Link>
        </div>
      </section>

      <section className="section logo-options-section">
        <div className="logo-options-grid">
          {logoOptions.map((option) => (
            <article className="logo-option-card" key={option.name}>
              <div className="logo-option-preview">
                <Image
                  src={option.file}
                  alt={`${option.name} logo`}
                  width={1280}
                  height={360}
                />
              </div>
              <div className="logo-option-content">
                <span>{option.name}</span>
                <h2>{option.direction}</h2>
                <p>{option.fit}</p>
                <div className="logo-option-notes">
                  {option.notes.map((note) => (
                    <div key={note}>
                      <CheckCircle2 aria-hidden="true" size={16} />
                      <small>{note}</small>
                    </div>
                  ))}
                </div>
                <a href={option.file} target="_blank" rel="noreferrer">
                  Open SVG
                  <ArrowRight aria-hidden="true" size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
