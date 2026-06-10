import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
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
          backgroundColor: "#0f172a",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#f59e0b",
            fontSize: 28,
            letterSpacing: 6,
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          Infrastructure · Mining · Consultancy · Trading
        </div>
        <div style={{ display: "flex", fontSize: 84, fontWeight: 700, lineHeight: 1.1 }}>
          Agastya Katyayani
        </div>
        <div style={{ display: "flex", fontSize: 36, color: "#94a3b8", marginTop: 20 }}>
          Building infrastructure. Powering industry.
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#f59e0b", marginTop: 48 }}>
          agastyakatyayani.com
        </div>
      </div>
    ),
    size
  );
}
