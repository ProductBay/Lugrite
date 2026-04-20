"use client";

import { useEffect, useRef } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  driftX: number;
  driftY: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
}

export default function ParticleSystem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const particleIdRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createParticle = () => {
      const id = particleIdRef.current++;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const driftX = (Math.random() - 0.5) * 80;
      const driftY = (Math.random() - 0.5) * 60 - 40;
      const size = Math.random() * 3 + 1;
      const opacity = Math.random() * 0.4 + 0.2;
      const duration = Math.random() * 4 + 6;
      const delay = Math.random() * 1;

      const particle: Particle = {
        id,
        x,
        y,
        driftX,
        driftY,
        size,
        opacity,
        duration,
        delay,
      };

      particlesRef.current.push(particle);

      // Create DOM element
      const el = document.createElement("div");
      el.className = "particle";
      el.style.setProperty("--tx-start", `${x}%`);
      el.style.setProperty("--ty-start", `${y}%`);
      el.style.setProperty("--drift-x", `${driftX}px`);
      el.style.setProperty("--drift-y", `${driftY}px`);
      el.style.setProperty("--opacity-peak", `${opacity}`);
      el.style.animationDuration = `${duration}s`;
      el.style.animationDelay = `${delay}s`;
      el.style.width = `${size}px`;
      el.style.height = `${size}px`;
      el.style.borderRadius = "50%";
      el.style.background = `radial-gradient(circle, rgba(16,185,129,${opacity}), rgba(96,165,250,${opacity * 0.6}))`;
      el.style.boxShadow = `0 0 ${size * 2}px rgba(14,165,160,${opacity * 0.8})`;
      el.style.left = `${x}%`;
      el.style.top = `${y}%`;

      container.appendChild(el);

      // Remove after animation completes
      setTimeout(() => {
        el.remove();
        particlesRef.current = particlesRef.current.filter((p) => p.id !== id);
      }, (duration + delay) * 1000);
    };

    // Spawn particles continuously
    const interval = setInterval(createParticle, 600);

    // Initial burst of particles
    for (let i = 0; i < 8; i++) {
      setTimeout(createParticle, i * 200);
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}
