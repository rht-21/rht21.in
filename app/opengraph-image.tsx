import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";
import { profile } from "@/lib/data";

export const runtime = "edge";

export const alt = `${SITE.name} (${profile.handle}) — ${SITE.jobTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Theme colors (mirrors the dark palette in globals.css).
const BG = "#16181c";
const FG = "#ebebeb";
const MUTED = "#a6a8ac";
const ACCENT = "#7c9cff";

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
          background: BG,
          padding: "80px",
          // Subtle indigo glow in the corner.
          backgroundImage: `radial-gradient(circle at 85% 15%, rgba(124,156,255,0.18), transparent 45%)`,
          fontFamily: "sans-serif",
        }}
      >
        {/* Top: brand mark */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "64px",
              height: "64px",
              borderRadius: "16px",
              background: ACCENT,
              color: BG,
              fontSize: "34px",
              fontWeight: 700,
            }}
          >
            R
          </div>
          <div style={{ display: "flex", color: MUTED, fontSize: "30px" }}>
            rht21.site
          </div>
        </div>

        {/* Middle: name + role */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "24px",
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", color: FG, fontSize: "92px", fontWeight: 700 }}>
              {profile.name}
            </div>
            <div style={{ display: "flex", color: ACCENT, fontSize: "44px", fontWeight: 500 }}>
              @{profile.handle}
            </div>
          </div>
          <div style={{ display: "flex", color: MUTED, fontSize: "40px" }}>
            {SITE.jobTitle} · {profile.location}
          </div>
        </div>

        {/* Bottom: tagline */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              width: "40px",
              height: "6px",
              borderRadius: "999px",
              background: ACCENT,
            }}
          />
          <div style={{ display: "flex", color: FG, fontSize: "34px" }}>
            {profile.tagline}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
