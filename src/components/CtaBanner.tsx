import { ArrowRight, MessageSquare } from "lucide-react";

export default function CtaBanner() {
  return (
    <section
      className="relative py-24 lg:py-28 overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at 20% 50%, rgba(249,115,22,0.38) 0%, transparent 60%),
          radial-gradient(ellipse at 80% 30%, rgba(251,191,36,0.22) 0%, transparent 55%),
          linear-gradient(135deg, #060c14 0%, #0c1e38 40%, #7c2e00 100%)
        `,
      }}
    >
      {/* Decorative dots */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Glow blob */}
      <div className="absolute -top-24 left-1/3 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />
  <div className="absolute -top-24 left-1/3 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-semibold tracking-wider uppercase mb-6">
          <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
          Ready When You Are
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
          Start your journey{" "}
          <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-amber-200">
            without the baggage burden.
          </span>
        </h2>

        <p className="text-base sm:text-lg text-white/65 max-w-xl mx-auto mb-10 leading-relaxed">
          Book secure storage, seamless transfers, and premium add-ons in under two minutes.
          LugRite handles the logistics — you enjoy the islands.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#booking"
            className="inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-base shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 transition-all"
          >
            Book Luggage
            <ArrowRight size={18} strokeWidth={2.5} />
          </a>
          <a
            href="#footer"
            className="inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/25 text-white font-bold text-base hover:bg-white/20 transition-all"
          >
            <MessageSquare size={18} />
            Contact Support
          </a>
        </div>

        {/* Trust line */}
        <p className="mt-8 text-xs text-white/40">
          No credit card required to check availability &nbsp;·&nbsp; Free cancellation within 24
          hrs &nbsp;·&nbsp; Instant confirmation
        </p>
      </div>
    </section>
  );
}
