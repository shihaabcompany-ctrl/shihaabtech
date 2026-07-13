import { ImageResponse } from "next/og";

export const alt = "Shihaab Tech - premium websites, apps, and automation";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#060908",
          color: "#f7faf5",
          display: "flex",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            backgroundImage:
              "linear-gradient(rgba(99,230,190,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(99,230,190,0.08) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            inset: 0,
            opacity: 0.58,
            position: "absolute",
          }}
        />
        <div
          style={{
            border: "1px solid rgba(99,230,190,0.24)",
            bottom: 42,
            left: 72,
            position: "absolute",
            right: 72,
            top: 42,
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: 28, maxWidth: 720 }}>
          <div style={{ color: "#63e6be", fontSize: 28, fontWeight: 800, letterSpacing: 2 }}>
            SHIHAAB TECH
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 0.95 }}>
              Premium websites, apps, and automations.
            </div>
            <div style={{ color: "#b8c6bf", fontSize: 28, lineHeight: 1.35 }}>
              Modern digital products built for business clarity, trust, and launch-ready growth.
            </div>
          </div>
          <div style={{ display: "flex", gap: 14 }}>
            {["Websites", "SaaS MVPs", "Automation"].map((item) => (
              <div
                key={item}
                style={{
                  border: "1px solid rgba(247,250,245,0.16)",
                  color: "#dce8e2",
                  fontSize: 22,
                  fontWeight: 700,
                  padding: "12px 16px",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            alignItems: "center",
            border: "1px solid rgba(99,230,190,0.3)",
            display: "flex",
            height: 260,
            justifyContent: "center",
            marginRight: 24,
            position: "relative",
            width: 260,
          }}
        >
          <div
            style={{
              border: "1px solid rgba(247,250,245,0.12)",
              inset: 24,
              position: "absolute",
            }}
          />
          <div style={{ color: "#63e6be", fontSize: 170, fontWeight: 900, lineHeight: 1 }}>S</div>
        </div>
      </div>
    ),
    size,
  );
}
