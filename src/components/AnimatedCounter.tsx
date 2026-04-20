"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  isVisible: boolean;
}

export default function AnimatedCounter({
  end,
  duration = 2.5,
  suffix = "",
  prefix = "",
  isVisible,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;

    hasAnimated.current = true;
    const startTime = Date.now();
    const endTime = startTime + duration * 1000;

    const timer = setInterval(() => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / (endTime - startTime), 1);

      // Easing function
      const easedProgress =
        progress < 0.5
          ? 2 * progress * progress
          : -1 + (4 - 2 * progress) * progress;

      setCount(Math.floor(end * easedProgress));

      if (progress === 1) {
        clearInterval(timer);
        setCount(end);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return (
    <span className="tabular-nums">
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
