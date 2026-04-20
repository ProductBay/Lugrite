"use client";

import { useState } from "react";

export default function ADashBadge() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="https://adash.technology"
      target="_blank"
      rel="noopener noreferrer"
      className="adash-badge inline-flex items-center gap-2 select-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="A'Dash Technologies Group — website designer"
    >
      {/* Spark icon */}
      <span className={`adash-spark ${hovered ? "hovered" : ""}`}>✦</span>

      {/* 3D Lettered text */}
      <span className={`adash-letters ${hovered ? "hovered" : ""}`}>
        {"A'Dash Technologies Group".split("").map((char, i) => (
          <span
            key={i}
            className="adash-char"
            style={{ "--i": i } as React.CSSProperties}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    </a>
  );
}
