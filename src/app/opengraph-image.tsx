import { ImageResponse } from "next/og";
import { personal } from "@/data/portfolio";

/* Auto-generated Open Graph / social share image (1200×630). */
export const alt = `${personal.name} | ${personal.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #FDFBFF 0%, #F7F2FC 55%, #FCE7F0 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 96,
            height: 96,
            borderRadius: 24,
            background: "linear-gradient(135deg, #7C5CBF, #E8A0BF)",
            color: "#FFFFFF",
            fontSize: 44,
            fontWeight: 700,
          }}
        >
          {personal.initials}
        </div>
        <div style={{ display: "flex", marginTop: 40, fontSize: 76, fontWeight: 700, color: "#2D2440" }}>
          {personal.name}
        </div>
        <div style={{ display: "flex", marginTop: 12, fontSize: 38, color: "#7C5CBF" }}>{personal.role}</div>
        <div style={{ display: "flex", marginTop: 28, fontSize: 30, color: "#5B5470" }}>{personal.tagline}</div>
      </div>
    ),
    size,
  );
}
