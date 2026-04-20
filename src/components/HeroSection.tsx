"use client";

import Image from "next/image";

const HERO_TRAVELER_IMAGE = "/hero-cruise-lugrite.png";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[86svh] overflow-hidden bg-[#f95a17] sm:min-h-[100svh] lg:min-h-[118svh]"
    >
      <div className="absolute inset-0">
        <Image
          src={HERO_TRAVELER_IMAGE}
          alt=""
          aria-hidden="true"
          fill
          priority
          quality={80}
          sizes="100vw"
          className="object-contain object-center sm:object-cover sm:object-[60%_55%] lg:object-[64%_51%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(249,90,23,0.04),rgba(15,23,42,0.06))]" />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-x-0 bottom-0 h-[24%] sm:h-[26%] lg:h-[30%]"
          style={{
            background:
              "linear-gradient(180deg, rgba(15,23,42,0) 0%, rgba(15,23,42,0.01) 38%, rgba(15,23,42,0.03) 72%, rgba(15,23,42,0.07) 100%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-white via-white/90 to-transparent sm:h-16 lg:h-20" />
        <svg
          className="absolute -bottom-1 left-0 right-0 w-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 96 C180 44 360 68 540 58 C720 48 900 18 1080 36 C1245 52 1340 84 1440 74"
            stroke="rgba(244,181,67,0.86)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M0 102 C210 58 390 78 576 70 C760 62 930 34 1112 46 C1272 56 1360 84 1440 80"
            stroke="rgba(255,255,255,0.72)"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
        <svg
          className="absolute bottom-0 left-0 right-0 w-full"
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,160 L0,80 C180,20 360,60 540,50 C720,40 900,10 1080,30 C1260,50 1350,80 1440,70 L1440,160 Z"
            fill="rgba(255,255,255,0.22)"
          />
          <path
            d="M0,160 L0,110 C200,60 400,100 600,90 C800,80 1000,50 1200,70 C1320,82 1380,100 1440,95 L1440,160 Z"
            fill="rgba(255,255,255,0.12)"
          />
          <path
            d="M0,160 L0,140 C300,100 600,130 900,120 C1100,114 1280,130 1440,125 L1440,160 Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="relative z-10 flex min-h-[86svh] items-end sm:min-h-[100svh] lg:min-h-[118svh]">
        <div className="w-full">
          <div className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8 lg:pb-24">
            <div className="flex justify-center sm:justify-start">
              <div className="rounded-[1.4rem] border border-white/20 bg-white/14 p-1.5 shadow-[0_18px_50px_rgba(15,23,42,0.16)] backdrop-blur-sm sm:rounded-[1.75rem] sm:p-2">
                <div className="flex flex-col gap-2 sm:flex-row">
                  <a
                    href="#how-it-works"
                    className="rounded-xl border border-white/35 bg-white/90 px-5 py-2.5 text-center text-sm font-semibold text-slate-900 transition-all hover:bg-white sm:rounded-2xl sm:px-6 sm:py-3"
                  >
                    How It Works
                  </a>
                  <a
                    href="#booking"
                    className="rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-2.5 text-center text-sm font-bold text-white shadow-xl shadow-orange-500/30 transition-all hover:shadow-orange-500/50 hover:scale-105 sm:rounded-2xl sm:px-8 sm:py-3"
                  >
                    Check Availability
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
