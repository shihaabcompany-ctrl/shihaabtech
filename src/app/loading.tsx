import Image from "next/image";

export default function Loading() {
  return (
    <main className="loading-screen" role="status" aria-live="polite" aria-label="Loading Shihaab Tech">
      <div className="loading-grid" aria-hidden="true" />
      <div className="loading-sweep" aria-hidden="true" />

      <section className="loading-card">
        <div className="loader-orbit" aria-hidden="true">
          <span className="loader-ring loader-ring-one" />
          <span className="loader-ring loader-ring-two" />
          <span className="loader-ring loader-ring-three" />
          <span className="loader-beam loader-beam-one" />
          <span className="loader-beam loader-beam-two" />
          <span className="loader-node loader-node-one" />
          <span className="loader-node loader-node-two" />
          <span className="loader-node loader-node-three" />
          <span className="loader-node loader-node-four" />
          <div className="loader-mark-shell">
            <Image
              src="/brand/shihaab-tech-premium-v2-mark.svg"
              alt=""
              width={132}
              height={132}
              priority
            />
          </div>
        </div>

        <div className="loading-copy">
          <span>Shihaab Tech</span>
          <h1>Preparing your digital workspace.</h1>
          <p>Loading interface layers, project systems, and premium motion.</p>
          <div className="loader-progress" aria-hidden="true">
            <i />
          </div>
          <div className="loader-status" aria-hidden="true">
            <small>Strategy</small>
            <small>Interface</small>
            <small>Launch</small>
          </div>
        </div>
      </section>
    </main>
  );
}
