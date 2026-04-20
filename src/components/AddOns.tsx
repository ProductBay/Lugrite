"use client";

import Image from "next/image";
import { Car, Zap, Building2, ChevronRight } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const ADD_ONS = [
  {
    id: "grabcab",
    icon: Car,
    partner: "GrabCab",
    headline: "Transfers",
    tagline: "Ride in comfort, not chaos",
    description:
      "Premium private taxi transfers between the port, airport, your hotel, and any attraction in St. Kitts and Nevis. Book alongside your luggage in a single checkout.",
    features: ["Airport & Port Pickups", "Hotel Drop-offs", "Island Tours Available"],
    accentColor: "#E4A843",
    accentBg: "bg-amber-50",
    accentBorder: "border-amber-100",
    accentText: "text-amber-600",
    accentBadge: "bg-amber-100 text-amber-700",
    iconBg: "bg-amber-500",
  },
  {
    id: "carivo",
    icon: Zap,
    partner: "Carivo",
    headline: "Car Rentals",
    tagline: "Explore on your own terms",
    description:
      "Rent a premium vehicle through Carivo directly alongside your LugRite booking. From compact SUVs to luxury sedans — delivered to your location.",
    features: ["Flexible Pickup Points", "Full Insurance Included", "Daily & Weekly Rates"],
    accentColor: "#3B82F6",
    accentBg: "bg-blue-50",
    accentBorder: "border-blue-100",
    accentText: "text-blue-600",
    accentBadge: "bg-blue-100 text-blue-700",
    iconBg: "bg-blue-600",
  },
  {
    id: "venetta",
    icon: Building2,
    partner: "VenettaStay",
    headline: "Accommodation",
    tagline: "Wake up to paradise",
    description:
      "Curated hotel and villa stays across St. Kitts and Nevis. Add a VenettaStay booking to your LugRite reservation and enjoy coordinated luggage delivery to your room.",
    features: ["Curated Island Properties", "Luggage Delivery Sync", "Booking Coordination"],
    accentColor: "#0EA5A0",
    accentBg: "bg-teal-50",
    accentBorder: "border-teal-100",
    accentText: "text-teal-600",
    accentBadge: "bg-teal-100 text-teal-700",
    iconBg: "bg-teal-600",
  },
];

export default function AddOns() {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <section 
      ref={ref}
      id="add-ons" 
      className={`py-24 lg:py-32 bg-white section-reveal ${isRevealed ? "revealed" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-100 text-amber-700 text-xs font-semibold tracking-wider uppercase mb-4">
              Premium Add-Ons
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Complete Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">
                Travel Experience
              </span>
            </h2>
            <p className="mt-4 text-lg text-slate-500">
              Layer in world-class transfers, car rentals, and accommodation — all from one
              booking window.
            </p>
          </div>
          <div className="w-full max-w-sm self-start lg:self-auto lg:max-w-md">
            <div className="relative overflow-hidden rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 to-amber-50 p-2 shadow-[0_20px_45px_rgba(249,115,22,0.18)]">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                <Image
                  src="/happy-phone-traveler-photo.jpg"
                  alt="Happy traveler checking service updates on a phone"
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.18),rgba(255,255,255,0.03)_45%,rgba(249,115,22,0.08))]" />
              </div>
            </div>

            <a
              href="#booking"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
            >
              Add to My Booking
              <ChevronRight size={16} />
            </a>
          </div>
        </div>

        {/* Add-on cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {ADD_ONS.map(
            ({
              id,
              icon: Icon,
              partner,
              headline,
              tagline,
              description,
              features,
              accentBg,
              accentBorder,
              accentText,
              accentBadge,
              iconBg,
            }, idx) => (
              <div
                key={id}
                className={`group flex flex-col rounded-3xl border-2 ${accentBorder} ${accentBg} p-7 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 section-reveal-item`}
                style={{
                  animation: isRevealed ? `revealFadeInUp 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards` : "none",
                  animationDelay: isRevealed ? `${idx * 0.1}s` : "0s",
                }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`w-13 h-13 rounded-2xl ${iconBg} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}
                    style={{ width: 52, height: 52 }}
                  >
                    <Icon size={24} className="text-white" strokeWidth={1.75} />
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${accentBadge}`}>
                    {partner}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-900 mb-1">{headline}</h3>
                <p className={`text-sm font-semibold ${accentText} mb-3`}>{tagline}</p>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">{description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-7 flex-1">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                      <span className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${accentBadge}`}>
                        <span className="text-[9px] font-bold">✓</span>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#booking"
                  className={`flex items-center justify-center gap-2 py-3 rounded-2xl border-2 ${accentBorder} ${accentText} text-sm font-bold hover:bg-white transition-all`}
                >
                  Explore {headline}
                  <ChevronRight size={15} />
                </a>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
