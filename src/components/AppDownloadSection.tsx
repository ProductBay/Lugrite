"use client";

import { Download, QrCode, ShieldCheck, Star, Smartphone } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const APP_FEATURES = [
  "App-only offers and priority booking lanes",
  "Fast trip management with instant pickup updates",
  "Secure booking flow and encrypted payment checkout",
];

export default function AppDownloadSection() {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <section
      ref={ref}
      id="download-app"
      className={`relative z-[45] py-24 lg:py-28 bg-white section-reveal ${isRevealed ? "revealed" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 shadow-[0_24px_70px_rgba(15,23,42,0.09)]">
          <div className="absolute -top-28 -left-20 h-64 w-64 rounded-full bg-orange-200/30 blur-3xl" />
          <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 p-7 sm:p-10 lg:p-12 items-center">
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <div className="relative w-[280px] sm:w-[320px]">
                <div className="absolute -inset-3 rounded-[2.3rem] bg-gradient-to-br from-orange-300/40 via-orange-200/20 to-transparent blur-xl" />
                <div className="relative rounded-[2.1rem] border border-slate-200 bg-slate-950 p-2 shadow-2xl">
                  <div className="rounded-[1.7rem] overflow-hidden bg-gradient-to-b from-orange-300 via-orange-500 to-orange-700 min-h-[540px] p-5 flex flex-col">
                    <div className="mx-auto mb-4 h-1.5 w-20 rounded-full bg-white/35" />
                    <div className="rounded-2xl bg-white/94 p-4 shadow-lg">
                      <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
                        <Smartphone size={16} className="text-orange-500" />
                        LugRite Mobile
                      </div>
                      <p className="mt-1 text-xs text-slate-500">Manage luggage pickups and drop-offs in one tap.</p>
                    </div>
                    <div className="mt-3 grid grid-cols-2 gap-3">
                      <div className="rounded-xl bg-white/88 p-3">
                        <p className="text-[11px] font-semibold text-slate-900">Pickup Window</p>
                        <p className="text-[11px] text-slate-600 mt-1">09:30 AM - Port Zante</p>
                      </div>
                      <div className="rounded-xl bg-white/88 p-3">
                        <p className="text-[11px] font-semibold text-slate-900">Storage Status</p>
                        <p className="text-[11px] text-emerald-600 mt-1">Secured and tracked</p>
                      </div>
                    </div>
                    <div className="mt-auto rounded-2xl bg-white/88 p-3">
                      <p className="text-[11px] text-slate-500">Today</p>
                      <p className="text-sm font-bold text-slate-900">Airport to Frigate Bay</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-orange-700">
                Mobile Experience
              </span>

              <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-slate-900">
                Download The LugRite App And Travel Lighter.
              </h2>
              <p className="mt-4 max-w-2xl text-base sm:text-lg text-slate-600 leading-relaxed">
                Pre-book storage, track your luggage journey, and unlock app-exclusive rates across St. Kitts and Nevis.
              </p>

              <ul className="mt-6 space-y-3">
                {APP_FEATURES.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm sm:text-base text-slate-700">
                    <ShieldCheck size={18} className="text-orange-500 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-4 items-center">
                <div className="w-[108px] h-[108px] rounded-xl border border-slate-200 bg-white shadow-sm p-2">
                  <div className="w-full h-full rounded-md bg-slate-900 p-2 grid grid-cols-6 gap-1">
                    {Array.from({ length: 36 }).map((_, idx) => (
                      <div
                        key={idx}
                        className={`${idx % 2 === 0 || idx % 5 === 0 ? "bg-white" : "bg-slate-900"} rounded-[1px]`}
                      />
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href="#"
                    className="group rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm hover:shadow-md hover:border-orange-300 transition-all"
                  >
                    <span className="flex items-center gap-3">
                      <Download size={18} className="text-slate-900" />
                      <span>
                        <span className="block text-[11px] text-slate-500">Download on the</span>
                        <span className="block text-sm font-bold text-slate-900">App Store</span>
                      </span>
                    </span>
                  </a>

                  <a
                    href="#"
                    className="group rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm hover:shadow-md hover:border-orange-300 transition-all"
                  >
                    <span className="flex items-center gap-3">
                      <QrCode size={18} className="text-slate-900" />
                      <span>
                        <span className="block text-[11px] text-slate-500">Get it on</span>
                        <span className="block text-sm font-bold text-slate-900">Google Play</span>
                      </span>
                    </span>
                  </a>

                  <div className="flex items-center gap-2 text-sm text-slate-700 sm:col-span-2">
                    <span className="font-semibold">4.8</span>
                    <span className="flex items-center gap-0.5 text-amber-500">
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                    </span>
                    <span className="text-slate-500">based on verified traveler reviews</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}