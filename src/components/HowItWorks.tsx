"use client";

import { Laptop, Package, Lock, Smile } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const STEPS = [
  {
    step: "01",
    icon: Laptop,
    title: "Book Online",
    description:
      "Choose your service, arrival details, and extras in minutes. Get instant confirmation directly to your email.",
    accent: "from-orange-400 to-orange-600",
    bg: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    step: "02",
    icon: Package,
    title: "Drop Off or Hand Off",
    description:
      "At the port, airport, or a designated LugRite point. Our team meets you right where you arrive.",
    accent: "from-blue-400 to-blue-700",
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    step: "03",
    icon: Lock,
    title: "LugRite Stores Securely",
    description:
      "Your bags are kept in our organized, monitored facility until you need them. Tracked and insured.",
    accent: "from-indigo-400 to-indigo-600",
    bg: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
  {
    step: "04",
    icon: Smile,
    title: "Enjoy Your Day Baggage-Free",
    description:
      "Explore St. Kitts and Nevis without the burden. Collect your luggage or have it delivered when you're ready.",
    accent: "from-amber-400 to-amber-600",
    bg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
];

export default function HowItWorks() {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <section 
      ref={ref}
      id="how-it-works" 
      className={`py-24 lg:py-32 bg-white section-reveal ${isRevealed ? "revealed" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-xs font-semibold tracking-wider uppercase mb-4">
            Simple Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            How LugRite Works
          </h2>
          <p className="mt-4 text-lg text-slate-500 leading-relaxed">
            From booking to baggage-free bliss — four effortless steps designed around your
            travel day.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STEPS.map(({ step, icon: Icon, title, description, accent, bg, iconColor }, i) => (
            <div
              key={step}
              className="group relative bg-white rounded-3xl p-7 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 section-reveal-item"
              style={{
                animation: isRevealed ? `revealFadeInUp 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards` : "none",
                animationDelay: isRevealed ? `${i * 0.1}s` : "0s",
              }}
            >
              {/* Connector line (desktop) */}
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-4 w-8 border-t-2 border-dashed border-slate-200 z-10" />
              )}

              {/* Step number */}
              <div
                className={`w-10 h-10 rounded-xl bg-gradient-to-br ${accent} flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform`}
              >
                <span className="text-white text-xs font-bold">{step}</span>
              </div>

              {/* Icon */}
              <div className={`w-12 h-12 rounded-2xl ${bg} flex items-center justify-center mb-5`}>
                <Icon size={22} className={iconColor} strokeWidth={1.75} />
              </div>

              <h3 className="text-base font-bold text-slate-900 mb-2">{title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
