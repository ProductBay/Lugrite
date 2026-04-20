"use client";

import { useEffect, useRef, useState } from "react";
import { Luggage } from "lucide-react";

type TrailPoint = {
  id: number;
  x: number;
  y: number;
};

type ClickPulse = {
  id: number;
  x: number;
  y: number;
};

const MAX_TRAIL_POINTS = 14;
const MIN_DISTANCE = 5;

export default function TravelMouseTrail() {
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const [pulses, setPulses] = useState<ClickPulse[]>([]);
  const [isMoving, setIsMoving] = useState(false);

  const frameRef = useRef<number | null>(null);
  const movingTimeoutRef = useRef<number | null>(null);
  const pointerRef = useRef({ x: 0, y: 0, active: false });
  const idRef = useRef(0);

  const latest = trail[trail.length - 1];
  const previous = trail[trail.length - 2];
  const angle = previous && latest
    ? Math.atan2(latest.y - previous.y, latest.x - previous.x) * (180 / Math.PI)
    : 0;

  useEffect(() => {
    const onPointerMove = (event: PointerEvent) => {
      pointerRef.current = {
        x: event.clientX,
        y: event.clientY,
        active: true,
      };

      setIsMoving(true);
      if (movingTimeoutRef.current !== null) {
        window.clearTimeout(movingTimeoutRef.current);
      }
      movingTimeoutRef.current = window.setTimeout(() => {
        setIsMoving(false);
      }, 140);

      if (frameRef.current !== null) return;

      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = null;

        const { x, y } = pointerRef.current;
        setTrail((prev) => {
          const last = prev[prev.length - 1];
          if (last) {
            const dx = x - last.x;
            const dy = y - last.y;
            if (Math.hypot(dx, dy) < MIN_DISTANCE) {
              return prev;
            }
          }

          const next = [...prev, { id: idRef.current++, x, y }];
          if (next.length > MAX_TRAIL_POINTS) {
            return next.slice(next.length - MAX_TRAIL_POINTS);
          }
          return next;
        });
      });
    };

    const onPointerLeave = () => {
      pointerRef.current.active = false;
      setIsMoving(false);
      setTrail([]);
    };

    const onPointerDown = (event: PointerEvent) => {
      const pulse = { id: idRef.current++, x: event.clientX, y: event.clientY };
      setPulses((prev) => [...prev, pulse]);

      window.setTimeout(() => {
        setPulses((prev) => prev.filter((item) => item.id !== pulse.id));
      }, 700);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerleave", onPointerLeave);
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
      if (movingTimeoutRef.current !== null) {
        window.clearTimeout(movingTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="travel-trail-layer" aria-hidden="true">
      {trail.map((point, index) => {
        const progress = (index + 1) / trail.length;
        return (
          <span
            key={point.id}
            className="travel-trail-dot"
            style={{
              left: point.x,
              top: point.y,
              opacity: 0.14 + progress * 0.62,
              transform: `translate(-50%, -50%) scale(${0.45 + progress * 0.95})`,
            }}
          />
        );
      })}

      {latest && (
        <span
          className={`travel-trail-suitcase ${isMoving ? "moving" : ""}`}
          style={{
            left: latest.x,
            top: latest.y,
            transform: `translate(-50%, -50%) rotate(${angle}deg)`,
          }}
        >
          <span className="travel-trail-suitcase-ring travel-trail-suitcase-ring-inner" />
          <span className="travel-trail-suitcase-ring travel-trail-suitcase-ring-outer" />
          <Luggage size={36} strokeWidth={2.35} />
        </span>
      )}

      {pulses.map((pulse) => (
        <span
          key={pulse.id}
          className="travel-click-pulse"
          style={{ left: pulse.x, top: pulse.y }}
        />
      ))}
    </div>
  );
}
