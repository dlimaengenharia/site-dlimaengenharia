import { ImageResponse } from "next/og";

// Imagem exibida quando o link do site é compartilhado (WhatsApp, LinkedIn, Facebook...).
export const alt = "D'Lima Engenharia: AVCB, licença de funcionamento e licença CETESB em São Paulo";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const services = ["AVCB e CLCB", "Licença de funcionamento", "CETESB", "Vigilância Sanitária", "Certificado digital", "Regularização"];

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#1f2839",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="72" height="72" viewBox="0 0 64 64">
            <g fill="none" stroke="#fc9a52" strokeWidth="2.6" strokeLinejoin="round">
              <path d="M8 54 H56" />
              <path d="M17 54 V30 H25 V54" />
              <path d="M25 54 V10 H37 V54" />
              <path d="M34 54 V22 H45 V54" />
              <path d="M25 54 C 36 54, 44 48, 46 36" />
            </g>
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 40, fontWeight: 700, letterSpacing: 2 }}>D&apos;LIMA</span>
            <span style={{ fontSize: 22, letterSpacing: 6, color: "#c5cee0" }}>ENGENHARIA</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <span style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.05, maxWidth: 950 }}>
            Engenharia e regularização em São Paulo
          </span>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {services.map((s) => (
              <span
                key={s}
                style={{
                  fontSize: 24,
                  padding: "8px 18px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.25)",
                  color: "#ffffff",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#c5cee0" }}>
          <span>(11) 98483-7520</span>
          <span style={{ color: "#fc9a52" }}>Solicite seu orçamento</span>
        </div>
      </div>
    ),
    size
  );
}
