"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Camera, ChevronLeft, ChevronRight, Compass, MapPin, Scissors, Sparkles, Star, UtensilsCrossed } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const SERVICES = [
  {
    title: "Island Tours",
    detail: "Private and shared routes with local hosts.",
    icon: Compass,
    tone: "from-orange-500/90 to-amber-400/90",
  },
  {
    title: "Restaurants",
    detail: "Traveler-rated spots from beach grills to fine dining.",
    icon: UtensilsCrossed,
    tone: "from-amber-500/90 to-orange-400/90",
  },
  {
    title: "Beauty & Barber",
    detail: "Salon and grooming appointments near your stay.",
    icon: Scissors,
    tone: "from-orange-600/90 to-red-500/85",
  },
  {
    title: "Massage Parlors",
    detail: "Reset sessions for post-flight or post-tour recovery.",
    icon: Sparkles,
    tone: "from-amber-400/90 to-orange-500/90",
  },
];

const SERVICE_LISTINGS: Record<
  string,
  Array<{ name: string; priceRange: string; location: string; rating: number }>
> = {
  "Island Tours": [
    {
      name: "Brimstone Heritage Route",
      priceRange: "$45 - $75",
      location: "Northwest Scenic Loop",
      rating: 4.9,
    },
    {
      name: "Rainforest + Coastline Combo",
      priceRange: "$60 - $95",
      location: "Central Highlands",
      rating: 4.8,
    },
    {
      name: "Sunset Peninsula Drive",
      priceRange: "$70 - $110",
      location: "South Peninsula",
      rating: 4.9,
    },
  ],
  Restaurants: [
    {
      name: "Frigate Bay Grill House",
      priceRange: "$18 - $42",
      location: "Frigate Bay",
      rating: 4.7,
    },
    {
      name: "Harborline Seafood Table",
      priceRange: "$25 - $55",
      location: "Port Zante",
      rating: 4.8,
    },
    {
      name: "Basseterre Bistro Lounge",
      priceRange: "$20 - $46",
      location: "Basseterre",
      rating: 4.6,
    },
  ],
  "Beauty & Barber": [
    {
      name: "Lime & Cedar Grooming",
      priceRange: "$15 - $40",
      location: "Frigate Bay",
      rating: 4.8,
    },
    {
      name: "Island Crown Studio",
      priceRange: "$22 - $65",
      location: "Basseterre",
      rating: 4.7,
    },
    {
      name: "Portside Fade Club",
      priceRange: "$12 - $35",
      location: "Port Zante",
      rating: 4.6,
    },
  ],
  "Massage Parlors": [
    {
      name: "Ocean Calm Wellness",
      priceRange: "$35 - $95",
      location: "South Peninsula",
      rating: 4.9,
    },
    {
      name: "Palm Breeze Therapy",
      priceRange: "$30 - $80",
      location: "Frigate Bay",
      rating: 4.8,
    },
    {
      name: "Zen Harbor Spa Rooms",
      priceRange: "$40 - $110",
      location: "Basseterre",
      rating: 4.7,
    },
  ],
};

const PLACES = [
  {
    name: "Port Zante Waterfront",
    note: "Cruise-friendly pickup zones and evening boardwalk life.",
    tag: "Cruise Zone",
  },
  {
    name: "Frigate Bay Strip",
    note: "Beach bars, dining, and quick transfer access.",
    tag: "Nightlife",
  },
  {
    name: "South Peninsula",
    note: "Iconic viewpoints and premium private-tour routes.",
    tag: "Scenic",
  },
  {
    name: "Basseterre Heritage Core",
    note: "Culture, shopping, and central convenience hubs.",
    tag: "City Center",
  },
];

const LIFESTYLE_GALLERY = [
  {
    src: "/exploration-lifestyle-photo.jpg",
    label: "City Concierge",
    alt: "Traveler planning island lifestyle activities from a city lounge",
  },
  {
    src: "/exploration-city-nightlife.jpg",
    label: "Nightlife Vibes",
    alt: "City nightlife ambiance with premium traveler energy",
  },
  {
    src: "/exploration-city-street.jpg",
    label: "Urban Discovery",
    alt: "Stylish city street scene for upscale exploration",
  },
  {
    src: "/exploration-beach-adventure.jpg",
    label: "Beach Adventure",
    alt: "Adventurous beach destination experience for travelers",
  },
  {
    src: "/exploration-beach-sunset.jpg",
    label: "Sunset Escape",
    alt: "Golden sunset beach scene for premium island exploration",
  },
];

export default function IslandLifestyleSection() {
  const { ref, isRevealed } = useScrollReveal();
  const [activeService, setActiveService] = useState(SERVICES[0]);
  const [activeSlide, setActiveSlide] = useState(0);
  const slideTimerRef = useRef<number | null>(null);

  const resetTimer = () => {
    if (slideTimerRef.current) window.clearInterval(slideTimerRef.current);
    slideTimerRef.current = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % LIFESTYLE_GALLERY.length);
    }, 4200);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (slideTimerRef.current) window.clearInterval(slideTimerRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goToSlide = (nextIndex: number) => {
    const idx = ((nextIndex % LIFESTYLE_GALLERY.length) + LIFESTYLE_GALLERY.length) % LIFESTYLE_GALLERY.length;
    setActiveSlide(idx);
    resetTimer();
  };

  const ActiveIcon = activeService.icon;

  return (
    <section
      id="island-lifestyle"
      ref={ref}
      className={`relative z-[45] py-24 lg:py-32 bg-slate-950 overflow-hidden section-reveal ${isRevealed ? "revealed" : ""}`}
    >
      {/* Background glows */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[760px] h-[380px] rounded-full bg-orange-500/18 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-44 -right-20 w-[420px] h-[420px] rounded-full bg-amber-400/18 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Full-width section header ── */}
        <div className="text-center mb-14 lg:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-300/35 bg-orange-500/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-orange-100">
            Island Lifestyle
          </span>
          <h2 className="mt-5 text-4xl sm:text-5xl font-bold leading-tight text-white">
            Curated Places And Services
            <br className="hidden sm:block" />
            <span className="text-orange-400"> Beyond Luggage.</span>
          </h2>
          <p className="mt-4 text-base text-orange-50/80 leading-relaxed max-w-lg mx-auto">
            From island tours to grooming and wellness, LugRite becomes your lifestyle concierge across St. Kitts and Nevis.
          </p>

          {/* Inline stats strip */}
          <div className="mt-8 inline-flex items-stretch rounded-2xl border border-orange-200/20 bg-white/5 overflow-hidden divide-x divide-orange-200/15">
            <div className="px-7 py-3.5">
              <p className="text-2xl font-bold text-white">12+</p>
              <p className="text-[11px] text-orange-200/75 mt-0.5 uppercase tracking-wide">Active Services</p>
            </div>
            <div className="px-7 py-3.5">
              <p className="text-2xl font-bold text-white">20+</p>
              <p className="text-[11px] text-orange-200/75 mt-0.5 uppercase tracking-wide">Tourist Hotspots</p>
            </div>
            <div className="px-7 py-3.5">
              <p className="text-2xl font-bold text-white">4</p>
              <p className="text-[11px] text-orange-200/75 mt-0.5 uppercase tracking-wide">Island Zones</p>
            </div>
          </div>
        </div>

        {/* ── Main two-column grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

          {/* Left column — sticky image slider */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 space-y-4">

              {/* Slider card */}
              <div className="rounded-[1.75rem] border border-orange-300/25 bg-gradient-to-br from-slate-900 via-slate-900 to-orange-950/70 overflow-hidden shadow-[0_24px_60px_rgba(2,6,23,0.55)]">

                {/* Crossfade image stack */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  {LIFESTYLE_GALLERY.map((item, idx) => (
                    <div
                      key={item.src}
                      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${idx === activeSlide ? "opacity-100" : "opacity-0"}`}
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 520px"
                        className="object-cover"
                        priority={idx === 0}
                      />
                    </div>
                  ))}

                  {/* Bottom gradient overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-slate-950/10" />

                  {/* Active slide label */}
                  <div className="absolute top-4 left-4 rounded-full border border-white/30 bg-slate-900/60 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-orange-100 backdrop-blur-sm">
                    {LIFESTYLE_GALLERY[activeSlide].label}
                  </div>

                  {/* Slide counter */}
                  <div className="absolute top-4 right-4 rounded-full border border-white/20 bg-slate-900/60 px-2.5 py-1 text-[10px] font-semibold text-white/70 backdrop-blur-sm tabular-nums">
                    {activeSlide + 1} / {LIFESTYLE_GALLERY.length}
                  </div>

                  {/* Side nav arrows */}
                  <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3 pointer-events-none">
                    <button
                      type="button"
                      onClick={() => goToSlide(activeSlide - 1)}
                      className="pointer-events-auto h-9 w-9 flex items-center justify-center rounded-full border border-white/25 bg-slate-900/65 text-white backdrop-blur-sm hover:bg-slate-900/85 transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      type="button"
                      onClick={() => goToSlide(activeSlide + 1)}
                      className="pointer-events-auto h-9 w-9 flex items-center justify-center rounded-full border border-white/25 bg-slate-900/65 text-white backdrop-blur-sm hover:bg-slate-900/85 transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>

                {/* Thumbnail strip */}
                <div className="flex gap-1.5 p-3 bg-slate-950/70">
                  {LIFESTYLE_GALLERY.map((item, idx) => (
                    <button
                      key={item.src}
                      type="button"
                      onClick={() => goToSlide(idx)}
                      className={`relative flex-1 aspect-[16/10] rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        idx === activeSlide
                          ? "border-orange-400 brightness-100 scale-[1.04]"
                          : "border-transparent opacity-45 hover:opacity-70"
                      }`}
                      aria-label={`View ${item.label}`}
                    >
                      <Image src={item.src} alt="" fill className="object-cover" sizes="80px" />
                    </button>
                  ))}
                </div>

                {/* CTA row */}
                <div className="flex items-center justify-between gap-3 px-5 py-4 bg-slate-900/80 border-t border-orange-200/10">
                  <p className="text-sm text-orange-50/65 leading-tight">Full access in the app</p>
                  <a
                    href="#download-app"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 hover:scale-[1.02] transition-transform whitespace-nowrap"
                  >
                    <Camera size={15} />
                    Unlock In App
                  </a>
                </div>
              </div>

              {/* Popular places grid */}
              <div className="rounded-2xl border border-orange-200/20 bg-slate-900/60 p-4">
                <p className="text-[11px] uppercase tracking-[0.2em] text-orange-100/75 font-semibold mb-3">Popular Places</p>
                <div className="grid grid-cols-2 gap-2">
                  {PLACES.map((place) => (
                    <div
                      key={place.name}
                      className="rounded-xl border border-orange-200/15 bg-white/[0.04] p-3 flex items-start gap-2 hover:bg-white/[0.07] transition-colors"
                    >
                      <MapPin size={13} className="text-orange-300 mt-0.5 flex-shrink-0" />
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-white leading-tight">{place.name}</p>
                        <p className="text-[10px] text-orange-50/60 leading-snug mt-0.5 line-clamp-2">{place.note}</p>
                        <span className="mt-1 inline-block rounded-full border border-orange-200/20 bg-orange-500/10 px-1.5 py-0.5 text-[9px] uppercase tracking-[0.14em] text-orange-200/80 font-semibold">
                          {place.tag}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right column — service tab browser */}
          <div className="lg:col-span-7 space-y-5">

            {/* Service tab strip */}
            <div className="flex flex-wrap gap-2">
              {SERVICES.map((service) => {
                const TabIcon = service.icon;
                const isActive = activeService.title === service.title;
                return (
                  <button
                    key={service.title}
                    type="button"
                    onClick={() => setActiveService(service)}
                    className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? "border-orange-400/50 bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25"
                        : "border-orange-200/20 bg-white/5 text-orange-100/75 hover:bg-white/10 hover:border-orange-300/30 hover:text-orange-100"
                    }`}
                  >
                    <TabIcon size={15} />
                    {service.title}
                  </button>
                );
              })}
            </div>

            {/* Active service listings panel */}
            <div className="rounded-[1.5rem] border border-orange-300/20 bg-gradient-to-br from-slate-900 via-slate-900 to-orange-950/60 p-5 sm:p-6 shadow-[0_16px_48px_rgba(2,6,23,0.4)]">

              {/* Service header */}
              <div className="flex items-center gap-3.5 mb-5 pb-5 border-b border-orange-200/15">
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${activeService.tone} shadow-lg flex-shrink-0`}>
                  <ActiveIcon size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{activeService.title}</h3>
                  <p className="text-sm text-orange-50/70 mt-0.5">{activeService.detail}</p>
                </div>
                <span className="ml-auto rounded-full border border-orange-200/20 bg-orange-500/10 px-2.5 py-1 text-[11px] font-semibold text-orange-200 whitespace-nowrap">
                  {SERVICE_LISTINGS[activeService.title].length} listings
                </span>
              </div>

              {/* Listing cards */}
              <div className="space-y-3">
                {SERVICE_LISTINGS[activeService.title].map((listing, idx) => (
                  <div
                    key={listing.name}
                    className="group rounded-2xl border border-orange-200/15 bg-white/[0.04] p-4 hover:bg-white/[0.08] hover:border-orange-300/25 transition-all duration-200"
                    style={{
                      animation: isRevealed ? `revealFadeInUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) both` : "none",
                      animationDelay: `${idx * 0.07}s`,
                    }}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-white">{listing.name}</p>
                        <div className="flex items-center gap-1.5 mt-1">
                          <MapPin size={11} className="text-orange-300 flex-shrink-0" />
                          <p className="text-xs text-orange-50/65">{listing.location}</p>
                        </div>
                      </div>
                      <span className="flex-shrink-0 rounded-full border border-orange-200/25 bg-orange-500/10 px-2.5 py-1 text-[11px] font-semibold text-orange-100">
                        {listing.priceRange}
                      </span>
                    </div>
                    <div className="mt-3 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={12}
                            className={i < Math.floor(listing.rating) ? "text-amber-400 fill-amber-400" : "text-slate-600"}
                          />
                        ))}
                        <span className="text-xs font-semibold text-amber-200 ml-1.5">{listing.rating}</span>
                      </div>
                      <a
                        href="#booking"
                        className="inline-flex items-center rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 px-3.5 py-1.5 text-xs font-semibold text-white hover:brightness-110 transition-all"
                      >
                        Quick Book
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured destination card */}
            <div className="rounded-2xl border border-orange-400/25 bg-gradient-to-r from-orange-500/20 via-amber-500/12 to-orange-500/10 p-5">
              <p className="text-[11px] uppercase tracking-[0.2em] text-orange-200/80 font-semibold">Featured Destination</p>
              <h4 className="mt-2 text-lg font-bold text-white">Brimstone Hill + Sunset Coastline Loop</h4>
              <p className="mt-1.5 text-sm text-orange-50/80 leading-relaxed">
                A premium route combining heritage views, coastline stops, and evening dining transfers.
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-orange-200/65">
                <span className="flex items-center gap-1">
                  <Star size={12} className="text-amber-400 fill-amber-400" />
                  4.9 rated
                </span>
                <span>~6 hours</span>
                <span>Private &amp; group options</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
