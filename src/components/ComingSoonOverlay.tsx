"use client";

import type { CSSProperties } from "react";

const PARTICLES = [
  { left: "7vw",  top: "20vh", delay: 0   },
  { left: "83vw", top: "11vh", delay: 1.8 },
  { left: "91vw", top: "66vh", delay: 3.2 },
  { left: "4vw",  top: "74vh", delay: 0.7 },
  { left: "47vw", top: "89vh", delay: 4.5 },
  { left: "68vw", top: "81vh", delay: 1.2 },
  { left: "24vw", top: "7vh",  delay: 2.8 },
  { left: "75vw", top: "47vh", delay: 0.4 },
];

export default function ComingSoonOverlay() {
  return (
    <div className="cs-overlay" aria-hidden="true" role="presentation">
      {/* Warm edge vignette */}
      <div className="cs-vignette" />

      {/* Sweeping scanline */}
      <div className="cs-scanline" />

      {/* Corner ornaments (four corners) */}
      <div className="cs-corner cs-tl"><div className="cs-ch" /><div className="cs-cv" /><div className="cs-cd" /></div>
      <div className="cs-corner cs-tr"><div className="cs-ch" /><div className="cs-cv" /><div className="cs-cd" /></div>
      <div className="cs-corner cs-bl"><div className="cs-ch" /><div className="cs-cv" /><div className="cs-cd" /></div>
      <div className="cs-corner cs-br"><div className="cs-ch" /><div className="cs-cv" /><div className="cs-cd" /></div>

      {/* ── Center text panel ── */}
      <div className="cs-center">
        {/* Eyebrow */}
        <p className="cs-eyebrow">
          <span>✦</span>&nbsp;&nbsp;PREVIEW&nbsp;&nbsp;<span>✦</span>
        </p>

        {/* COMING row with wing lines */}
        <div className="cs-coming-row">
          <div className="cs-wing-l" />
          <div className="cs-coming">COMING</div>
          <div className="cs-wing-r" />
        </div>

        {/* Diamond separator */}
        <div className="cs-divider">
          <div className="cs-div-line" />
          <span className="cs-div-gem">◈</span>
          <div className="cs-div-line" />
        </div>

        {/* SOON with shimmer */}
        <div className="cs-soon">SOON</div>

        {/* Tagline */}
        <p className="cs-tagline">An extraordinary travel experience awaits you</p>
      </div>

      {/* Floating sparkle particles */}
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="cs-particle"
          style={{ left: p.left, top: p.top, ["--cs-delay" as string]: `${p.delay}s` } as CSSProperties}
        >
          ✦
        </span>
      ))}
    </div>
  );
}
