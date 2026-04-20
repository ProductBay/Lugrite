import { Mail, Phone, MapPin, Share2, Camera, MessageCircle, Play } from "lucide-react";
import ADashBadge from "./ADashBadge";

const FOOTER_LINKS = {
  Services: [
    "Luggage Storage",
    "Pickup & Drop-off",
    "Cruise Services",
    "Airport Services",
    "Full-Day Packages",
  ],
  "Add-Ons": ["GrabCab Transfers", "Carivo Car Rentals", "VenettaStay Accommodation"],
  Company: ["About LugRite", "How It Works", "Pricing", "Careers", "Press"],
  Support: ["Help Center", "Contact Us", "Track My Booking", "Download App", "FAQ"],
};

const SOCIAL_LINKS = [
  { icon: Share2, label: "Facebook" },
  { icon: Camera, label: "Instagram" },
  { icon: MessageCircle, label: "Twitter / X" },
  { icon: Play, label: "YouTube" },
];

const LUGRITE_LOGO = "/lugrite-logo.jpeg";

export default function Footer() {
  return (
    <footer id="footer" className="bg-slate-950 text-slate-300">
      {/* Main footer body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Brand column */}
          <div className="lg:col-span-4">
            {/* Logo */}
            <div className="mb-4">
              <img
                src={LUGRITE_LOGO}
                alt="LugRite logo"
                className="h-20 w-auto rounded-2xl object-contain"
              />
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-xs mb-6">
              St. Kitts &amp; Nevis&apos; premier traveler convenience platform. Secure luggage
              storage, seamless transfers, and premium travel add-ons — all in one place.
            </p>

            {/* Contact */}
            <div className="space-y-2.5 text-sm">
              <div className="flex items-center gap-2.5 text-slate-400">
                <MapPin size={14} className="text-orange-500 flex-shrink-0" />
                Basseterre, St. Kitts &amp; Nevis
              </div>
              <div className="flex items-center gap-2.5 text-slate-400">
                <Phone size={14} className="text-orange-500 flex-shrink-0" />
                +1 (869) 000-0000
              </div>
              <div className="flex items-center gap-2.5 text-slate-400">
                <Mail size={14} className="text-orange-500 flex-shrink-0" />
                hello@lugrite.com
              </div>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-6">
              {SOCIAL_LINKS.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-orange-600 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-200">Download App</p>
              <p className="mt-2 text-xs text-slate-400">
                Get LugRite on your phone for quicker booking and live bag status updates.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <a
                  href="#download-app"
                  className="inline-flex items-center rounded-lg border border-orange-300/40 bg-orange-500/10 px-3 py-1.5 text-xs font-semibold text-orange-200 hover:bg-orange-500/20 transition-colors"
                >
                  App Store
                </a>
                <a
                  href="#download-app"
                  className="inline-flex items-center rounded-lg border border-orange-300/40 bg-orange-500/10 px-3 py-1.5 text-xs font-semibold text-orange-200 hover:bg-orange-500/20 transition-colors"
                >
                  Google Play
                </a>
              </div>
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {Object.entries(FOOTER_LINKS).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
                  {category}
                </h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href={link === "Download App" ? "#download-app" : "#"}
                        className="text-sm text-slate-400 hover:text-orange-400 transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} LugRite. All rights reserved. St. Kitts &amp; Nevis.</p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a key={item} href="#" className="hover:text-orange-400 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Design credit */}
        <div className="mt-6 pt-6 border-t border-slate-800 text-center text-xs text-slate-600">
          Website designed &amp; built by{" "}
          <ADashBadge />
        </div>
      </div>
    </footer>
  );
}
