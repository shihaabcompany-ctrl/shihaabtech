import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Layers3,
  ListChecks,
  Target,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { ProjectVisual } from "@/components/project-visual";
import { SiteHeader } from "@/components/site-header";
import { caseStudies } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Shihaab Tech projects and case studies, including the Rozaliya business platform and Zyrelo multi-channel automation product.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <main className="inner-page">
      <SiteHeader />

      <section className="page-hero">
        <p className="case-kicker">Projects</p>
        <h1>Selected builds presented as real product case studies.</h1>
        <span>
          These projects show the kind of work Shihaab Tech can deliver:
          polished customer-facing experiences, admin-backed business platforms,
          SaaS-style dashboards, automation-ready product systems, and clear
          business value behind the interface.
        </span>
        <div className="case-actions">
          <Link className="primary-button" href="/contact">
            Start a similar build
            <ArrowRight aria-hidden="true" size={18} />
          </Link>
          <Link className="secondary-button" href="/services">
            View services
            <ArrowRight aria-hidden="true" size={18} />
          </Link>
        </div>
      </section>

      <section className="section projects-section projects-page-section">
        <div className="case-study-list">
          {caseStudies.map((project, index) => (
            <article className="project-card project-case-card" key={project.name}>
              <div className="project-case-content">
                <div className="project-case-header">
                  <div>
                    <div className="project-case-topline">
                      <span>0{index + 1}</span>
                      <small>{project.type}</small>
                    </div>
                    <h2>{project.name}</h2>
                    <p>{project.headline}</p>
                  </div>

                  <div className="project-case-actions">
                    <Link className="project-live-link" href={`/work/${project.slug}`}>
                      Read full case study
                      <ArrowRight aria-hidden="true" size={16} />
                    </Link>
                    <Link
                      className="project-live-link secondary-live-link"
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.linkLabel}
                      <ExternalLink aria-hidden="true" size={16} />
                    </Link>
                  </div>
                </div>

                <div className="project-case-showcase">
                  <ProjectVisual
                    type={project.visual}
                    logo={project.logo}
                    logoAlt={project.logoAlt}
                  />

                  <div className="project-case-map">
                    <ProjectStory icon={Target} label="Problem" text={project.challenge} />
                    <ProjectStory icon={Zap} label="Solution" text={project.build} />
                    <ProjectStory icon={Layers3} label="Business value" text={project.outcome} />
                  </div>
                </div>

                <div className="project-case-details">
                  <article className="project-detail-panel">
                    <h3>
                      <ListChecks aria-hidden="true" size={18} />
                      Key features
                    </h3>
                    <ul>
                      {project.features.slice(0, 6).map((feature) => (
                        <li key={feature}>
                          <CheckCircle2 aria-hidden="true" size={15} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </article>

                  <article className="project-detail-panel">
                    <h3>
                      <Wrench aria-hidden="true" size={18} />
                      Stack and value
                    </h3>
                    <div className="project-tags stack-tags">
                      {project.stack.map((tag) => (
                        <small key={tag}>{tag}</small>
                      ))}
                    </div>
                    <div className="project-value-list">
                      {project.businessValue.slice(0, 2).map((item) => (
                        <div key={item.title}>
                          <strong>{item.title}</strong>
                          <p>{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </article>
                </div>

                <div className="project-proof">
                  {project.proof.map((item) => (
                    <div key={item}>
                      <CheckCircle2 aria-hidden="true" size={16} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section project-proof-section">
        <div className="section-heading">
          <p>What these projects show</p>
          <h2>The goal is not only a beautiful screen. It is a useful system.</h2>
        </div>

        <div className="trust-grid proof-grid">
          <article className="trust-item proof-card">
            <span>Business websites</span>
            <h3>Clear brand presence with operating workflows.</h3>
            <p>
              Rozaliya shows how a company website can support product
              discovery, enquiries, content updates, and hiring workflows.
            </p>
            <strong>Business platform</strong>
          </article>
          <article className="trust-item proof-card">
            <span>SaaS products</span>
            <h3>Dashboard structure for repeated operational work.</h3>
            <p>
              Zyrelo shows how contacts, groups, campaigns, channel settings,
              logs, and automations can live in one product workflow.
            </p>
            <strong>Automation MVP</strong>
          </article>
          <article className="trust-item proof-card">
            <span>Delivery thinking</span>
            <h3>Every project is shaped around a practical next action.</h3>
            <p>
              The build should make it easier for a customer, admin, founder,
              or team member to do something important.
            </p>
            <strong>Product mindset</strong>
          </article>
        </div>
      </section>

      <section className="case-final">
        <Image
          src="/brand/shihaab-tech-premium-v2-mark.svg"
          alt=""
          width={112}
          height={112}
        />
        <h2>Want your project to become the next case study?</h2>
        <p>
          Share the idea, business problem, or current system. Shihaab Tech can
          shape it into a premium website, app, or automation product.
        </p>
        <Link className="primary-button" href="/contact">
          Start a project
          <ArrowRight aria-hidden="true" size={18} />
        </Link>
      </section>
    </main>
  );
}

function ProjectStory({
  icon: Icon,
  label,
  text,
}: {
  icon: LucideIcon;
  label: string;
  text: string;
}) {
  return (
    <div className="project-story">
      <strong>
        <Icon aria-hidden="true" size={16} />
        {label}
      </strong>
      <p>{text}</p>
    </div>
  );
}
