"use client";

import { useMemo, useState } from "react";
import type { ComponentType } from "react";
import {
  Car,
  ChevronLeft,
  ChevronRight,
  Compass,
  ExternalLink,
  Hotel,
  MapPin,
  Package,
  Navigation,
  Scissors,
  Sparkles,
  UtensilsCrossed,
} from "lucide-react";

type ConciergeTool = {
  title: string;
  description: string;
  href: string;
  status: "Live" | "Soon";
  icon: ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;
};

const TOOLS: ConciergeTool[] = [
  {
    title: "Track Luggage",
    description: "Live bag location and handoff milestones.",
    href: "#booking",
    status: "Live",
    icon: Package,
  },
  {
    title: "Stay Accommodation",
    description: "Browse partner stays near your route.",
    href: "#add-ons",
    status: "Live",
    icon: Hotel,
  },
  {
    title: "Car Rental",
    description: "Reserve verified rentals in minutes.",
    href: "#add-ons",
    status: "Live",
    icon: Car,
  },
  {
    title: "Hire Taxi",
    description: "On-demand island transfers and pickups.",
    href: "#add-ons",
    status: "Live",
    icon: Navigation,
  },
  {
    title: "Island Tours",
    description: "Curated experiences with local guides.",
    href: "#island-lifestyle",
    status: "Soon",
    icon: Compass,
  },
  {
    title: "Tourist Destinations",
    description: "Top beaches, landmarks, and scenic points.",
    href: "#island-lifestyle",
    status: "Soon",
    icon: MapPin,
  },
  {
    title: "Restaurants",
    description: "Find traveler-loved dining spots nearby.",
    href: "#island-lifestyle",
    status: "Soon",
    icon: UtensilsCrossed,
  },
  {
    title: "Beauty & Barber",
    description: "Book grooming and style appointments.",
    href: "#island-lifestyle",
    status: "Soon",
    icon: Scissors,
  },
  {
    title: "Massage Parlors",
    description: "Wellness sessions to recharge between trips.",
    href: "#island-lifestyle",
    status: "Soon",
    icon: Sparkles,
  },
];

export default function TravelerConciergeToolbar() {
  const [expanded, setExpanded] = useState(false);

  const groupedTools = useMemo(() => {
    return {
      essentials: TOOLS.slice(0, 4),
      lifestyle: TOOLS.slice(4),
    };
  }, []);

  return (
    <div className="fixed z-[80] right-3 md:right-5 bottom-4 md:bottom-auto md:top-1/2 md:-translate-y-1/2">
      <div className={`concierge-shell ${expanded ? "is-expanded w-[350px]" : "w-auto"}`}>
        {!expanded ? (
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="concierge-toggle group"
            aria-label="Open traveler concierge toolbar"
          >
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-700 text-white shadow-lg shadow-orange-500/30">
              <Sparkles size={16} strokeWidth={2.3} />
              <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-emerald-400 concierge-ping" />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-orange-100 whitespace-nowrap">
              Traveler Tools
            </span>
            <ChevronLeft size={16} className="text-orange-100/90 group-hover:-translate-x-0.5 transition-transform" />
          </button>
        ) : (
          <div className="concierge-panel">
            <div className="flex items-start justify-between gap-3 pb-4 border-b border-orange-100/20">
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-orange-100 font-bold">Luxury Concierge</p>
                <h3 className="mt-1 text-lg font-bold text-white leading-tight">Traveler Utility Bar</h3>
                <p className="mt-1 text-xs text-orange-50/95">Quick tools for movement, stays, and local services.</p>
              </div>
              <button
                type="button"
                onClick={() => setExpanded(false)}
                className="h-9 w-9 rounded-full border border-orange-200/30 bg-white/10 text-orange-100 hover:bg-white/15 transition-colors"
                aria-label="Collapse traveler concierge toolbar"
              >
                <ChevronRight size={16} className="mx-auto" />
              </button>
            </div>

            <div className="mt-4 space-y-4 max-h-[58vh] overflow-auto pr-1 concierge-scroll">
              <div>
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-100/90">Essentials</p>
                <div className="space-y-2">
                  {groupedTools.essentials.map(({ title, description, href, status, icon: Icon }) => (
                    <a key={title} href={href} className="concierge-item group">
                      <span className="concierge-item-icon">
                        <Icon size={15} strokeWidth={2.2} className="text-orange-100" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold text-white truncate">{title}</span>
                        <span className="block text-xs text-orange-50/90 truncate">{description}</span>
                      </span>
                      <span className={`concierge-pill ${status === "Live" ? "is-live" : "is-soon"}`}>{status}</span>
                      <ExternalLink size={14} className="text-orange-100/90 group-hover:text-orange-100 transition-colors" />
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-100/90">Island Lifestyle</p>
                <div className="space-y-2">
                  {groupedTools.lifestyle.map(({ title, description, href, status, icon: Icon }) => (
                    <a key={title} href={href} className="concierge-item group">
                      <span className="concierge-item-icon">
                        <Icon size={15} strokeWidth={2.2} className="text-orange-100" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold text-white truncate">{title}</span>
                        <span className="block text-xs text-orange-50/90 truncate">{description}</span>
                      </span>
                      <span className={`concierge-pill ${status === "Live" ? "is-live" : "is-soon"}`}>{status}</span>
                      <ExternalLink size={14} className="text-orange-100/90 group-hover:text-orange-100 transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
