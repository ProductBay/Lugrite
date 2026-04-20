"use client";

import { useState, useEffect } from "react";

export default function LiveActivityPulse() {
  const [currentCount, setCurrentCount] = useState(0);
  const baseCount = 42; // Mock realistic number

  useEffect(() => {
    // Simulate real-time activity fluctuation
    const interval = setInterval(() => {
      const variation = Math.floor(Math.random() * 8) - 3; // -3 to +4
      setCurrentCount(Math.max(baseCount + variation, baseCount - 5));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center">
      <div className="live-badge backdrop-blur-md">
        <div className="live-badge-dot" />
        <span className="text-xs font-semibold text-green-600">
          {currentCount}+ travelers booking now
        </span>
      </div>
    </div>
  );
}
