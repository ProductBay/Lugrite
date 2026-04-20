"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Cruise Travelers", href: "#travelers" },
  { label: "Airport Travelers", href: "#travelers" },
  { label: "Add-Ons", href: "#add-ons" },
  { label: "Contact", href: "#footer" },
];

const LUGRITE_LOGO = "/lugrite-logo.jpeg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 36);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 lg:pointer-events-none">
        <div className="mx-auto flex max-w-[1440px] items-start justify-between px-4 pt-4 sm:px-6 lg:px-8 lg:pt-5">
          <div className="pointer-events-auto hidden lg:block">
            <div
              className={`group w-[320px] overflow-hidden rounded-[2rem] border px-4 py-4 shadow-[0_28px_80px_rgba(15,23,42,0.18)] backdrop-blur-md transition-all duration-300 ${
                scrolled
                  ? "border-slate-200 bg-white/94"
                  : "border-white/18 bg-slate-950/20"
              }`}
            >
              <div className="flex items-center justify-between gap-3 rounded-2xl px-2 py-2">
                <a href="#home" className="shrink-0">
                  <img
                    src={LUGRITE_LOGO}
                    alt="LugRite logo"
                    className="h-14 w-auto rounded-2xl object-contain shadow-md ring-1 ring-white/15"
                  />
                </a>

                <div className="suitcase-trigger shrink-0">
                  <div
                    className={`suitcase-lid ${scrolled ? "bg-slate-100 text-slate-500" : "bg-white/10 text-white/80"}`}
                  >
                    <span className="suitcase-handle" aria-hidden="true" />
                    <span>Hover to explore</span>
                  </div>
                </div>
              </div>

              <div className="max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-[360px] group-focus-within:max-h-[360px]">
                <div
                  className={`suitcase-body mt-2 rounded-[1.6rem] border p-2 transition-all duration-500 translate-y-[-10px] scale-y-95 opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:scale-y-100 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:scale-y-100 group-focus-within:opacity-100 ${
                    scrolled ? "border-slate-200 bg-slate-50/90" : "border-white/12 bg-white/8"
                  }`}
                >
                  <ul className="grid grid-cols-2 gap-2">
                    {navLinks.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className={`block rounded-xl px-3 py-2.5 text-[13px] font-semibold leading-tight transition-all ${
                            scrolled
                              ? "text-slate-700 hover:bg-white hover:text-orange-600"
                              : "text-white/92 hover:bg-white/12 hover:text-white"
                          }`}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 flex items-center gap-2 transition-all duration-300 translate-y-2 opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <a
                    href="#download-app"
                    className={`flex-1 rounded-2xl border px-4 py-3 text-center text-sm font-semibold transition-all ${
                      scrolled
                        ? "border-orange-200 bg-white text-orange-700 hover:border-orange-400"
                        : "border-white/20 bg-white/10 text-white hover:bg-white/14"
                    }`}
                  >
                    Download App
                  </a>
                  <a
                    href="#booking"
                    className="rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/30 transition-all hover:scale-[1.02] hover:shadow-orange-500/45"
                  >
                    Book
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="pointer-events-auto flex w-full items-center justify-between lg:hidden">
            <a href="#home" className="flex items-center gap-2 rounded-2xl bg-slate-950/28 px-3 py-2 backdrop-blur-md">
              <img
                src={LUGRITE_LOGO}
                alt="LugRite logo"
                className="h-10 w-auto rounded-xl object-contain"
              />
            </a>

            <button
              className="rounded-2xl bg-slate-950/28 p-3 text-white backdrop-blur-md"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="pointer-events-auto mx-4 mt-3 rounded-[1.8rem] border border-slate-200 bg-white/96 p-4 shadow-2xl backdrop-blur-md sm:mx-6 lg:hidden">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-orange-50 hover:text-orange-600"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-col gap-2">
              <a
                href="#download-app"
                className="block rounded-xl border border-orange-200 px-5 py-3 text-center text-sm font-semibold text-orange-700 transition-colors hover:bg-orange-50"
                onClick={() => setMobileOpen(false)}
              >
                Download App
              </a>
              <a
                href="#booking"
                className="block rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-3 text-center text-sm font-bold text-white"
                onClick={() => setMobileOpen(false)}
              >
                Check Availability
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
