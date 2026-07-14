import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { LeadForm } from "@/components/lead-form";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Shihaab Tech to discuss a premium website, custom app, SaaS MVP, automation system, or existing project improvement.",
  alternates: {
    canonical: "/contact",
  },
};

const contactSteps = [
  {
    title: "Brief review",
    text: "Your request is reviewed for business goal, scope, timeline, and the type of build that fits best.",
  },
  {
    title: "Clear plan",
    text: "You get a practical next step: recommended pages, features, stack, timeline, and launch direction.",
  },
  {
    title: "Build path",
    text: "Once confirmed, the work moves into design, development, testing, deployment, and improvement.",
  },
];

export default function ContactPage() {
  return (
    <main className="inner-page contact-page">
      <SiteHeader />

      <section className="contact-section contact-page-section">
        <div className="contact-inner">
          <div>
            <p className="contact-kicker">Start with an idea, problem, or rough plan.</p>
            <h1>Tell us what you want to build. We will shape it into a clear plan.</h1>
            <p>
              Bring a website request, app idea, automation need, or existing
              system that needs improvement. Shihaab Tech can help shape it,
              design it, build it, and launch it.
            </p>
            <div className="contact-highlights">
              <div>
                <CheckCircle2 aria-hidden="true" size={18} />
                <span>Premium visual direction and page story</span>
              </div>
              <div>
                <CheckCircle2 aria-hidden="true" size={18} />
                <span>Frontend, backend, database, and deployment</span>
              </div>
              <div>
                <CheckCircle2 aria-hidden="true" size={18} />
                <span>Launch support and future improvement path</span>
              </div>
            </div>
            <div
              className="contact-highlights contact-next-steps"
              aria-label="What happens after sending the form"
            >
              {contactSteps.map((step, index) => (
                <div className="contact-step" key={step.title}>
                  <span>0{index + 1}</span>
                  <strong>{step.title}</strong>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
            <div className="contact-page-links">
              <Link href="/services">
                Explore services
                <ArrowRight aria-hidden="true" size={16} />
              </Link>
              <Link href="/projects">
                View project proof
                <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </div>
          </div>

          <LeadForm />
        </div>
      </section>
    </main>
  );
}
