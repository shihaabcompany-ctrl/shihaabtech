import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Layers3,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import { ProjectVisual } from "@/components/project-visual";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return {};
  }

  return {
    title: `${study.shortName} Case Study`,
    description: study.summary,
    alternates: {
      canonical: `/work/${study.slug}`,
    },
    openGraph: {
      title: `${study.shortName} Case Study | Shihaab Tech`,
      description: study.summary,
      url: `/work/${study.slug}`,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  return (
    <main className="case-page">
      <header className="case-nav">
        <Link href="/" className="case-brand" aria-label="Back to Shihaab Tech home">
          <Image
            src="/brand/shihaab-tech-premium-v2-dark.svg"
            alt="Shihaab Tech"
            width={230}
            height={58}
            priority
          />
        </Link>
        <Link href="/#projects" className="case-back-link">
          <ArrowLeft aria-hidden="true" size={16} />
          Back to work
        </Link>
      </header>

      <section className="case-hero">
        <div className="case-hero-copy">
          <p className="case-kicker">{study.type}</p>
          <h1>{study.headline}</h1>
          <span>{study.summary}</span>
          <div className="case-actions">
            <Link
              className="primary-button"
              href={study.href}
              target="_blank"
              rel="noreferrer"
            >
              {study.linkLabel}
              <ExternalLink aria-hidden="true" size={18} />
            </Link>
            <Link className="secondary-button" href="/#contact">
              Start a similar build
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
        </div>

        <ProjectVisual
          type={study.visual}
          logo={study.logo}
          logoAlt={study.logoAlt}
        />
      </section>

      <section className="case-meta-grid">
        <article>
          <span>Role</span>
          <strong>{study.role}</strong>
        </article>
        <article>
          <span>Scope</span>
          <strong>{study.timeline}</strong>
        </article>
        <article>
          <span>Live project</span>
          <strong>{study.shortName}</strong>
        </article>
      </section>

      <section className="case-section case-proof-strip">
        <div className="case-proof-header">
          <p className="case-kicker">Project proof</p>
          <h2>Live work with real operational depth.</h2>
        </div>
        <div className="case-process-list case-proof-items">
          {study.proof.map((item, index) => (
            <article key={item}>
              <div className="case-process-icon">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div>
                <h3>{item}</h3>
              </div>
            </article>
          ))}
        </div>
        <div className="stack-list case-tags" aria-label={`${study.shortName} project tags`}>
          {study.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </section>

      <section className="case-section case-problem-grid">
        <div className="case-copy-block">
          <p className="case-kicker">Problem</p>
          <h2>What needed to change</h2>
          <span>{study.challenge}</span>
        </div>
        <div className="case-copy-block">
          <p className="case-kicker">Solution</p>
          <h2>What was built</h2>
          <span>{study.build}</span>
        </div>
        <div className="case-copy-block">
          <p className="case-kicker">Result</p>
          <h2>What it enabled</h2>
          <span>{study.outcome}</span>
        </div>
      </section>

      <section className="case-section case-value-section">
        <div className="case-value-intro">
          <p className="case-kicker">Business value</p>
          <h2>What the build now makes easier.</h2>
        </div>
        <div className="story-steps case-value-grid">
          {study.businessValue.map((item, index) => (
            <article className="story-step case-value-card" key={item.title}>
              <div className="process-marker case-value-marker">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="case-section case-split">
        <div>
          <p className="case-kicker">Product system</p>
          <h2>Features that made the build useful.</h2>
        </div>
        <div className="feature-list">
          {study.features.map((feature) => (
            <div key={feature}>
              <CheckCircle2 aria-hidden="true" size={18} />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="case-section case-metrics">
        {study.metrics.map((metric) => (
          <article key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </article>
        ))}
      </section>

      <section className="case-section case-split case-delivery-section">
        <div>
          <p className="case-kicker">Delivery focus</p>
          <h2>The build priorities behind the finished product.</h2>
        </div>
        <div className="feature-list case-focus-list">
          {study.deliveryFocus.map((item) => (
            <div key={item}>
              <CheckCircle2 aria-hidden="true" size={18} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="case-section case-split">
        <div>
          <p className="case-kicker">Build process</p>
          <h2>How the work was shaped.</h2>
        </div>
        <div className="case-process-list">
          {study.process.map((step, index) => (
            <article key={step.title}>
              <div className="case-process-icon">
                {index === 0 ? (
                  <ShieldCheck aria-hidden="true" size={20} />
                ) : index === 1 ? (
                  <Layers3 aria-hidden="true" size={20} />
                ) : (
                  <Rocket aria-hidden="true" size={20} />
                )}
              </div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="case-section case-stack">
        <p className="case-kicker">Stack</p>
        <div>
          {study.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="case-final">
        <Image
          src="/brand/shihaab-tech-premium-v2-mark.svg"
          alt=""
          width={112}
          height={112}
        />
        <h2>Want a build like this for your business?</h2>
        <p>
          Shihaab Tech can shape your website, app, dashboard, or automation
          tool into a focused product with a premium digital presence.
        </p>
        <Link className="primary-button" href="/#contact">
          Start a project
          <ArrowRight aria-hidden="true" size={18} />
        </Link>
      </section>
    </main>
  );
}
