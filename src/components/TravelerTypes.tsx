"use client";

import { useState } from "react";
import { Anchor, Plane, Sun, ArrowRight } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const TRAVELER_TYPES = [
  {
    icon: Anchor,
    tag: "Cruise Travelers",
    title: "Arriving by Cruise Ship?",
    description:
      "Skip the hassle of hauling luggage around port. Pre-book LugRite and we'll handle your bags so you can spend the day enjoying every corner of St. Kitts and Nevis.",
    cta: "Cruise Services",
    gradientFrom: "#7c2d12",
    gradientTo: "#f97316",
    accentColor: "text-amber-200",
    tagBg: "bg-amber-200/20 text-amber-100",
    ctaColor: "bg-amber-300/20 hover:bg-amber-300/35 text-amber-100 border-amber-200/35",
    details: [
      "Dedicated cruise-port intake and secure baggage tagging",
      "Flexible same-day storage windows with retrieval reminders",
      "Optional return-to-port delivery timed to ship boarding",
    ],
    serviceMeta: "Best for shore excursions and island day tours",
  },
  {
    icon: Plane,
    tag: "Airport Travelers",
    title: "Flying Into Bradshaw Airport?",
    description:
      "When you land, the last thing you want is to drag bags across the island. Let LugRite greet you at the airport and secure your luggage while you settle in stress-free.",
    cta: "Airport Services",
    gradientFrom: "#9a3412",
    gradientTo: "#fb923c",
    accentColor: "text-amber-100",
    tagBg: "bg-orange-200/20 text-orange-100",
    ctaColor: "bg-orange-300/20 hover:bg-orange-300/35 text-orange-100 border-orange-200/35",
    details: [
      "Airport meet-and-greet with streamlined bag handoff",
      "Secure holding while you handle check-in or meetings",
      "Delivery to hotel, villa, or airport at your chosen time",
    ],
    serviceMeta: "Best for early arrivals and late departures",
  },
  {
    icon: Sun,
    tag: "Vacation Travelers",
    title: "Here for the Full Caribbean Experience?",
    description:
      "Whether you're resort hopping or island-exploring, keep your itinerary light with LugRite. Store bags between stays and add local transfers or car rentals to your booking.",
    cta: "Vacation Packages",
    gradientFrom: "#b45309",
    gradientTo: "#f59e0b",
    accentColor: "text-yellow-100",
    tagBg: "bg-yellow-200/20 text-yellow-100",
    ctaColor: "bg-yellow-300/20 hover:bg-yellow-300/35 text-yellow-100 border-yellow-200/35",
    details: [
      "Inter-hotel and resort-to-resort luggage coordination",
      "Storage between activities with optional add-on services",
      "One booking flow for transport, luggage, and stays",
    ],
    serviceMeta: "Best for multi-stop Caribbean itineraries",
  },
];

export default function TravelerTypes() {
  const { ref, isRevealed } = useScrollReveal();
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const toggleFlip = (tag: string) => {
    setFlippedCards((prev) => ({
      ...prev,
      [tag]: !Boolean(prev[tag]),
    }));
  };

  return (
    <section 
      ref={ref}
      id="travelers" 
      className={`relative z-[45] py-24 lg:py-32 bg-slate-50 section-reveal ${isRevealed ? "revealed" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold tracking-wider uppercase mb-4">
            Who We Serve
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            Every Traveler, Taken Care Of
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            LugRite is built for how real travelers move through St. Kitts and Nevis.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {TRAVELER_TYPES.map(
            ({
              icon: Icon,
              tag,
              title,
              description,
              cta,
              gradientFrom,
              gradientTo,
              accentColor,
              tagBg,
              ctaColor,
              details,
              serviceMeta,
            }, idx) => (
              <div
                key={tag}
                className="section-reveal-item relative min-h-[430px] [perspective:1200px]"
                style={{
                  animation: isRevealed ? `revealFadeInUp 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards` : "none",
                  animationDelay: isRevealed ? `${idx * 0.1}s` : "0s",
                }}
              >
                <div
                  className={`relative min-h-[430px] rounded-3xl transition-transform duration-700 [transform-style:preserve-3d] ${
                    flippedCards[tag] ? "[transform:rotateY(180deg)]" : ""
                  }`}
                  onClick={() => toggleFlip(tag)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      toggleFlip(tag);
                    }
                  }}
                  aria-pressed={Boolean(flippedCards[tag])}
                  aria-label={`${tag} details card`}
                >
                  {/* Front Face */}
                  <div
                    className="absolute inset-0 flex flex-col rounded-3xl p-8 text-white shadow-[0_24px_60px_rgba(2,6,23,0.32)] [backface-visibility:hidden]"
                    style={{
                      background: `linear-gradient(145deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
                    }}
                  >
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_12%,rgba(255,255,255,0.24),transparent_40%)]" />

                    <div className="relative z-10 inline-block">
                      <span className="pointer-events-none absolute -top-6 left-5 h-6 w-px bg-white/65" />
                      <span className="pointer-events-none absolute -top-6 left-[14px] h-2 w-8 rounded-full border border-white/45" />

                      <div className="relative inline-flex -rotate-3 items-center rounded-[0.9rem] border border-white/35 bg-white/14 px-3 py-2 shadow-[0_10px_24px_rgba(15,23,42,0.25)] backdrop-blur-sm transition-transform duration-300 hover:-rotate-1">
                        <span className="absolute left-2 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full border border-white/45 bg-white/25" />
                        <span className="ml-4 inline-flex h-5 w-5 items-center justify-center rounded-md border border-white/35 bg-white/18">
                          <span className="h-1.5 w-1.5 rounded-full bg-white/90" />
                        </span>
                        <span className={`ml-2 rounded-md px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] ${tagBg}`}>
                          {tag}
                        </span>
                      </div>
                    </div>

                    <div className="relative z-10 mt-5 flex items-center gap-3">
                      <Icon size={34} className={accentColor} strokeWidth={1.6} />
                    </div>

                    <h3 className="relative z-10 mt-4 text-2xl font-bold leading-tight">{title}</h3>
                    <p className="relative z-10 mt-3 text-sm leading-relaxed text-white/82">{description}</p>

                    <div className="relative z-10 mt-auto flex items-center justify-between gap-3 border-t border-white/20 pt-6">
                      <a
                        href="#booking"
                        onClick={(event) => event.stopPropagation()}
                        className={`inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-semibold transition-all ${ctaColor}`}
                      >
                        {cta}
                        <ArrowRight size={15} strokeWidth={2.5} />
                      </a>
                      <button
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation();
                          toggleFlip(tag);
                        }}
                        className="text-[11px] uppercase tracking-[0.16em] text-white/80 transition-colors hover:text-white"
                      >
                        Flip For Details
                      </button>
                    </div>
                  </div>

                  {/* Back Face */}
                  <div
                    className="absolute inset-0 flex flex-col rounded-3xl p-8 text-white shadow-[0_24px_60px_rgba(2,6,23,0.32)] [transform:rotateY(180deg)] [backface-visibility:hidden]"
                    style={{
                      background: `linear-gradient(160deg, ${gradientTo} 0%, ${gradientFrom} 55%, #ea580c 100%)`,
                    }}
                  >
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(255,255,255,0.18),transparent_45%)]" />

                    <div className="relative z-10 flex items-center justify-end gap-3">
                      <span className="text-[11px] uppercase tracking-[0.16em] text-white/75">
                        Service Breakdown
                      </span>
                    </div>

                    <h3 className="relative z-10 mt-2 text-xl font-bold text-white">Detailed Service</h3>
                    <p className="relative z-10 mt-2 text-xs uppercase tracking-[0.14em] text-white/70">
                      {serviceMeta}
                    </p>

                    <ul className="relative z-10 mt-4 space-y-3">
                      {details.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-white/85">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-200" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="relative z-10 mt-auto flex items-center justify-between gap-3 border-t border-white/20 pt-6">
                      <a
                        href="#booking"
                        onClick={(event) => event.stopPropagation()}
                        className="inline-flex items-center gap-2 rounded-xl border border-white/35 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-white/20"
                      >
                        Go To Booking Engine
                        <ArrowRight size={15} strokeWidth={2.5} />
                      </a>
                      <button
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation();
                          toggleFlip(tag);
                        }}
                        className="text-[11px] uppercase tracking-[0.16em] text-white/80 transition-colors hover:text-white"
                      >
                        Flip Back
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
