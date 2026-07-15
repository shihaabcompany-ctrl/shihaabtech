import Image from "next/image";

type ProjectVisualProps = {
  type: "commerce" | "automation";
  logo: string;
  logoAlt: string;
};

const boardContent = {
  commerce: {
    status: "Business platform map",
    headline: "Live brand platform",
    chips: ["Public site", "Catalog", "Admin", "Enquiry"],
    modules: ["CMS", "Products", "Careers"],
  },
  automation: {
    status: "Automation system map",
    headline: "Automation command center",
    chips: ["Contacts", "Groups", "Campaigns", "Logs"],
    modules: ["WA", "Email", "SMS", "Social"],
  },
};

export function ProjectVisual({ type, logo, logoAlt }: ProjectVisualProps) {
  const content = boardContent[type];

  return (
    <div className={`project-visual ${type}`}>
      <div className="project-visual-grid" />
      <div className="project-visual-status">
        <span />
        {content.status}
      </div>

      <div className="project-architecture-board">
        <div className="architecture-brand">
          <Image
            src="/brand/shihaab-tech-premium-v2-mark.svg"
            alt=""
            width={64}
            height={64}
          />
          <span>Shihaab build</span>
        </div>

        <div className={`architecture-center ${type}`}>
          <Image
            src={logo}
            alt={logoAlt}
            width={220}
            height={220}
            className="client-logo-image"
          />
          <strong>{content.headline}</strong>
        </div>

        <div className="architecture-chips">
          {content.chips.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="architecture-modules" aria-label={`${logoAlt} system modules`}>
          {content.modules.map((item) => (
            <small key={item}>{item}</small>
          ))}
        </div>

        <div className="architecture-line architecture-line-one" aria-hidden="true" />
        <div className="architecture-line architecture-line-two" aria-hidden="true" />
      </div>
    </div>
  );
}
