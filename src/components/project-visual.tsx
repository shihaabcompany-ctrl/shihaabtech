import Image from "next/image";

type ProjectVisualProps = {
  type: "commerce" | "automation";
  logo: string;
  logoAlt: string;
};

export function ProjectVisual({ type, logo, logoAlt }: ProjectVisualProps) {
  return (
    <div className={`project-visual ${type}`}>
      <div className="project-visual-grid" />
      <div className="project-visual-status">
        <span />
        {type === "commerce" ? "Brand system map" : "Automation command map"}
      </div>
      <div className="project-visual-logo">
        <Image
          src="/brand/shihaab-tech-premium-v2-mark.svg"
          alt=""
          width={90}
          height={90}
        />
      </div>
      <div className={`client-logo-stage ${type}`}>
        <Image
          src={logo}
          alt={logoAlt}
          width={220}
          height={220}
          className="client-logo-image"
        />
        <span>{type === "commerce" ? "Live brand platform" : "Automation product"}</span>
      </div>

      {type === "commerce" ? (
        <div className="visual-system commerce-system">
          <div className="visual-window wide-window">
            <span />
            <strong>Catalog architecture</strong>
            <i />
            <i />
            <i />
          </div>
          <div className="visual-window small-window">
            <span />
            <strong>Admin flow</strong>
            <i />
            <i />
          </div>
          <div className="flow-line flow-line-a" />
          <div className="flow-line flow-line-b" />
          <div className="commerce-pipeline" aria-hidden="true">
            <span>CMS</span>
            <i />
            <span>Catalog</span>
            <i />
            <span>Enquiry</span>
          </div>
          <div className="commerce-stack" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
        </div>
      ) : (
        <div className="visual-system automation-system">
          <div className="channel-node main-node">Hub</div>
          <div className="automation-connector connector-one" />
          <div className="automation-connector connector-two" />
          <div className="automation-connector connector-three" />
          <div className="automation-connector connector-four" />
          <div className="channel-node node-one">WA</div>
          <div className="channel-node node-two">IG</div>
          <div className="channel-node node-three">SMS</div>
          <div className="channel-node node-four">Email</div>
          <div className="automation-pulse" />
          <div className="automation-status-panel" aria-hidden="true">
            <span />
            <i />
            <i />
          </div>
        </div>
      )}
    </div>
  );
}
