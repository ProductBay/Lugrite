"use client";

import { useEffect, useRef, useState } from "react";

export default function useScrollReveal(options = {}) {
  const ref = useRef<HTMLElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  const {
    threshold = 0.15,
    rootMargin = "0px",
  } = options as { threshold?: number; rootMargin?: string };

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Don't re-trigger if already revealed
    if (isRevealed) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(element);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [isRevealed, threshold, rootMargin]);

  return { ref, isRevealed };
}
