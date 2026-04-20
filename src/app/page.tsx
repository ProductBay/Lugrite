import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BookingEngine from "@/components/BookingEngine";
import LiveActivityPulse from "@/components/LiveActivityPulse";
import HowItWorks from "@/components/HowItWorks";
import TravelerTypes from "@/components/TravelerTypes";
import AddOns from "@/components/AddOns";
import IslandLifestyleSection from "@/components/IslandLifestyleSection";
import WhyLugRite from "@/components/WhyLugRite";
import AppDownloadSection from "@/components/AppDownloadSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import TravelMouseTrail from "@/components/TravelMouseTrail";
import TravelerConciergeToolbar from "@/components/TravelerConciergeToolbar";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white">
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <section
          id="booking"
          className="relative z-20 -mt-8 bg-white px-4 pb-8 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-6 lg:p-8">
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-orange-600">
                  Book your service
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Plan luggage pickup, storage, or delivery in minutes.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                  Choose the service you need and lock in a smooth island arrival
                  without crowding the hero image above.
                </p>
              </div>

              <div className="relative mt-8">
                <BookingEngine />
                <div className="mt-5">
                  <LiveActivityPulse />
                </div>
              </div>
            </div>
          </div>
        </section>
        <HowItWorks />
        <TravelerTypes />
        <AddOns />
        <IslandLifestyleSection />
        <WhyLugRite />
        <AppDownloadSection />
        <CtaBanner />
        <Footer />
        <TravelMouseTrail />
        <TravelerConciergeToolbar />
      </div>
    </main>
  );
}
