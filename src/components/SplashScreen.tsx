"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SPLASH_DURATION = 2600; // ms until exit starts
const EXIT_DURATION  = 650;   // ms for fade-out

// Floating travel emoji particles
const PARTICLES = [
  { emoji: "✈️",  top: "12%",  left: "8%",   delay: 0.2,  size: "text-2xl" },
  { emoji: "🧳",  top: "18%",  left: "82%",  delay: 0.5,  size: "text-3xl" },
  { emoji: "🗺️",  top: "72%",  left: "6%",   delay: 0.8,  size: "text-2xl" },
  { emoji: "🏝️",  top: "76%",  left: "88%",  delay: 0.35, size: "text-2xl" },
  { emoji: "⚓",  top: "35%",  left: "91%",  delay: 0.65, size: "text-xl"  },
  { emoji: "🌊",  top: "55%",  left: "4%",   delay: 0.9,  size: "text-xl"  },
  { emoji: "☀️",  top: "8%",   left: "55%",  delay: 0.45, size: "text-2xl" },
  { emoji: "🎒",  top: "88%",  left: "45%",  delay: 0.7,  size: "text-xl"  },
];

export default function SplashScreen() {
  const [phase, setPhase] = useState<"in" | "hold" | "out" | "done">("in");

  useEffect(() => {
    // After SPLASH_DURATION ms begin exit
    const exitTimer = window.setTimeout(() => setPhase("out"), SPLASH_DURATION);
    // After exit animation finishes, unmount
    const doneTimer = window.setTimeout(
      () => setPhase("done"),
      SPLASH_DURATION + EXIT_DURATION,
    );
    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(doneTimer);
    };
  }, []);

  if (phase === "done") return null;

  const isExiting = phase === "out";

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden"
      style={{
        transition: `opacity ${EXIT_DURATION}ms cubic-bezier(0.4,0,0.2,1), transform ${EXIT_DURATION}ms cubic-bezier(0.4,0,0.2,1)`,
        opacity: isExiting ? 0 : 1,
        transform: isExiting ? "scale(1.06)" : "scale(1)",
        pointerEvents: isExiting ? "none" : "all",
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-slate-950" />

      {/* Radial glow center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_50%_50%,rgba(249,90,23,0.22),transparent_75%)]" />

      {/* Corner accent blobs */}
      <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-orange-500/15 blur-[80px]" />
      <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-amber-400/12 blur-[80px]" />

      {/* Animated grid lines */}
      <div
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(249,90,23,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(249,90,23,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          animation: "splashGridDrift 8s linear infinite",
        }}
      />

      {/* Floating emoji particles */}
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className={`absolute select-none ${p.size}`}
          style={{
            top: p.top,
            left: p.left,
            animation: `splashFloat 3.2s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          {p.emoji}
        </div>
      ))}

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">

        {/* Logo with pop-in animation */}
        <div
          style={{
            animation: "splashLogoPop 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.15s both",
          }}
        >
          <div className="relative h-24 w-24 sm:h-28 sm:w-28 overflow-hidden rounded-[1.75rem] border-2 border-orange-400/40 shadow-[0_0_48px_rgba(249,90,23,0.45)] ring-4 ring-orange-500/15">
            <Image
              src="/lugrite-logo.jpeg"
              alt="LugRite logo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Brand name */}
        <div
          style={{ animation: "splashFadeUp 0.55s cubic-bezier(0.34,1.56,0.64,1) 0.55s both" }}
          className="mt-5 text-4xl sm:text-5xl font-black tracking-tight text-white"
        >
          Lug<span className="text-orange-400">Rite</span>
        </div>

        {/* Tagline */}
        <div
          style={{ animation: "splashFadeUp 0.55s cubic-bezier(0.34,1.56,0.64,1) 0.78s both" }}
          className="mt-3 text-base sm:text-lg text-orange-100/75 font-medium"
        >
          Welcome to the island.
        </div>

        {/* Sub-tagline */}
        <div
          style={{ animation: "splashFadeUp 0.5s ease 1.05s both" }}
          className="mt-2 text-sm text-orange-50/45 tracking-wide"
        >
          Your luggage is in good hands ✦
        </div>

        {/* Progress bar */}
        <div
          style={{ animation: "splashFadeUp 0.4s ease 1.2s both" }}
          className="mt-8 w-40 sm:w-52"
        >
          <div className="h-0.5 w-full rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-400"
              style={{
                animation: `splashProgress ${SPLASH_DURATION}ms linear 0s both`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Keyframe definitions */}
      <style>{`
        @keyframes splashLogoPop {
          from { opacity: 0; transform: scale(0.55) rotate(-8deg); }
          to   { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        @keyframes splashFadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes splashFloat {
          0%   { opacity: 0;    transform: translateY(0px) rotate(0deg); }
          15%  { opacity: 0.65; }
          50%  { opacity: 0.65; transform: translateY(-14px) rotate(6deg); }
          85%  { opacity: 0.65; }
          100% { opacity: 0;    transform: translateY(0px) rotate(0deg); }
        }
        @keyframes splashGridDrift {
          0%   { background-position: 0 0; }
          100% { background-position: 60px 60px; }
        }
        @keyframes splashProgress {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  );
}
