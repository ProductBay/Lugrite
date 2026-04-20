"use client";

import Image from "next/image";
import { ShieldCheck, Warehouse, HeadphonesIcon, Star, Zap } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";
import AnimatedCounter from "./AnimatedCounter";

const TRUST_ITEMS = [
  {
    icon: ShieldCheck,
    title: "Fully Secured Storage",
    description:
      "Every bag is tagged, tracked, and stored in our monitored facility. We handle your belongings with the same care as a five-star hotel.",
    gradient: "from-orange-400 to-orange-600",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    icon: Warehouse,
    title: "Organized Operations",
    description:
      "A dedicated warehouse team ensures precise intake, storage, and retrieval. No mix-ups. No lost bags. Only careful, professional handling.",
    gradient: "from-blue-400 to-blue-700",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: HeadphonesIcon,
    title: "Live Local Support",
    description:
      "Our St. Kitts-based team is reachable throughout your day. Need a quick change? A bag delivered earlier? Just call or message — we respond fast.",
    gradient: "from-indigo-400 to-indigo-600",
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
  {
    icon: Zap,
    title: "Seamless Travel Flow",
    description:
      "We connect your luggage service with transfers, car rentals, and hotel stays — eliminating the friction from your entire travel day.",
    gradient: "from-amber-400 to-amber-600",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    icon: Star,
    title: "Premium Experience",
    description:
      "Every touchpoint — from booking to final handoff — is designed to feel like a luxury service, because our travelers deserve nothing less.",
    gradient: "from-rose-400 to-rose-600",
    iconBg: "bg-rose-50",
    iconColor: "text-rose-600",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "LugRite completely transformed our cruise day. We explored Basseterre without dragging bags around. Absolutely flawless service.",
    name: "Marcus T.",
    role: "Cruise Traveler, New York",
    initials: "MT",
    bg: "bg-teal-600",
  },
  {
    quote:
      "Booked the GrabCab add-on too — driver was waiting right at the port. Premium experience from start to finish.",
    name: "Claire J.",
    role: "Vacation Traveler, London",
    initials: "CJ",
    bg: "bg-blue-600",
  },
  {
    quote:
      "I fly into Bradshaw every month for work. LugRite is the one thing that makes the trip less stressful every single time.",
    name: "Andre K.",
    role: "Frequent Flyer, Toronto",
    initials: "AK",
    bg: "bg-indigo-600",
  },
];

export default function WhyLugRite() {
  const { ref: headerRef, isRevealed: headerRevealed } = useScrollReveal();
  const { ref: cardRef, isRevealed: cardRevealed } = useScrollReveal();
  const { ref: statsRef, isRevealed: statsRevealed } = useScrollReveal();

  return (
    <section id="why-lugrite" className="py-24 lg:py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div 
          ref={headerRef as any}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            headerRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-xs font-semibold tracking-wider uppercase mb-4">
            Why LugRite
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            Built for Travelers Who{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">
              Expect More
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            We&apos;re not just storing bags. We&apos;re elevating your entire day on island.
          </p>
        </div>

        <div className="mx-auto mb-12 max-w-5xl">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-2 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
            <div className="relative aspect-[21/9] overflow-hidden rounded-[1.4rem]">
              <Image
                src="/why-lugrite-storage.png"
                alt="Secure LugRite luggage storage warehouse with organized tagged suitcases"
                fill
                sizes="(max-width: 1024px) 100vw, 980px"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.08),rgba(15,23,42,0.44))]" />
              <div className="absolute bottom-4 left-4 rounded-xl border border-white/25 bg-slate-900/55 px-3 py-2 backdrop-blur-sm sm:bottom-6 sm:left-6 sm:px-4 sm:py-2.5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-orange-200 sm:text-[11px]">
                  Lugrite Operations Hub
                </p>
                <p className="mt-1 text-xs font-medium text-white/90 sm:text-sm">
                  Secure tagged storage and precision retrieval workflows.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust grid */}
        <div 
          ref={cardRef as any}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20 transition-all duration-700 ${
            cardRevealed ? "opacity-100" : "opacity-0"
          }`}
        >
          {TRUST_ITEMS.map(({ icon: Icon, title, description, iconBg, iconColor, gradient }, idx) => (
            <div
              key={title}
              className="group bg-white rounded-3xl p-7 border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              style={{
                animation: cardRevealed ? `revealFadeInUp 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards` : "none",
                animationDelay: cardRevealed ? `${idx * 0.1}s` : "0s",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-2xl ${iconBg} flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <Icon size={22} className={iconColor} strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">{title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
                </div>
              </div>
              {/* Bottom accent bar */}
              <div className={`mt-5 h-0.5 w-12 rounded-full bg-gradient-to-r ${gradient} group-hover:w-full transition-all duration-500`} />
            </div>
          ))}

          {/* Stats card */}
          <div 
            ref={statsRef as any}
            className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-7 border border-slate-700 text-white"
            style={{
              animation: statsRevealed ? `revealFadeInUp 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards` : "none",
              animationDelay: statsRevealed ? "0.4s" : "0s",
            }}
          >
            <h3 className="text-base font-bold mb-5">By the Numbers</h3>
            <div className="grid grid-cols-2 gap-5">
              {[
                { end: 5000, suffix: "+", label: "Travelers Served" },
                { end: 99.8, suffix: "%", label: "On-Time Retrieval" },
                { end: 4.9, suffix: "★", label: "Avg. Rating" },
                { text: "0", label: "Lost Bags Ever" },
              ].map(({ end = 0, suffix = "", label, text = "" }, idx) => (
                <div key={label}>
                  <div className="text-2xl font-bold text-orange-400">
                    {text ? text : <AnimatedCounter end={end} duration={2.5} suffix={suffix} isVisible={statsRevealed} />}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-center text-lg font-bold text-slate-700 mb-8">
            What Travelers Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map(({ quote, name, role, initials, bg }) => (
              <div
                key={name}
                className="bg-white rounded-3xl p-7 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} size={13} className="text-amber-400 fill-amber-400" />
                    ))}
                </div>
                <p className="text-sm text-slate-700 leading-relaxed mb-5 italic">
                  &ldquo;{quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-full ${bg} flex items-center justify-center text-white text-xs font-bold`}
                  >
                    {initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">{name}</div>
                    <div className="text-xs text-slate-400">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
