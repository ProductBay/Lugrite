import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SplashScreen from "@/components/SplashScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "LugRite — Explore More, Carry Less | St. Kitts & Nevis",
    template: "%s | LugRite",
  },
  description:
    "LugRite is St. Kitts & Nevis' premier luggage concierge service. Pre-book secure bag storage, cruise-port and airport transfers, island lifestyle bookings, and premium travel add-ons — so you can explore every corner of the Caribbean hands-free.",
  keywords: [
    "luggage storage St. Kitts",
    "cruise port bag storage",
    "airport transfer St. Kitts",
    "Caribbean travel concierge",
    "LugRite",
    "luggage delivery Nevis",
    "island lifestyle bookings",
    "travel add-ons Caribbean",
  ],
  metadataBase: new URL("https://lugrite-app.vercel.app"),
  openGraph: {
    title: "LugRite — Explore More, Carry Less",
    description:
      "St. Kitts & Nevis' premier luggage concierge. Secure storage, seamless transfers, and curated island lifestyle services — all in one booking.",
    url: "https://lugrite-app.vercel.app",
    siteName: "LugRite",
    images: [
      {
        url: "/lugrite-logo.jpeg",
        width: 800,
        height: 800,
        alt: "LugRite — Explore More, Carry Less",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "LugRite — Explore More, Carry Less",
    description:
      "Secure luggage storage, cruise & airport transfers, and island lifestyle bookings in St. Kitts & Nevis.",
    images: ["/lugrite-logo.jpeg"],
  },
  icons: {
    icon: [
      { url: "/lugrite-icon.png", type: "image/png" },
    ],
    apple: "/lugrite-icon.png",
    shortcut: "/lugrite-icon.png",
  },
  themeColor: "#f97316",
  applicationName: "LugRite",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SplashScreen />
        {children}
      </body>
    </html>
  );
}
