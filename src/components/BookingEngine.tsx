"use client";

import { useState } from "react";
import {
  ChevronDown,
  Calendar,
  Clock,
  MapPin,
  Package,
  Timer,
  RotateCcw,
  PlusCircle,
  ArrowRight,
  Car,
  Home,
  Zap,
} from "lucide-react";

// ── Tab & Pill data ──────────────────────────────────────────────
const SERVICE_TABS = [
  "Luggage Storage",
  "Pickup & Drop-off",
  "Cruise Travelers",
  "Airport Travelers",
];

const BOOKING_PILLS = ["Store Only", "Store + Delivery", "Pickup + Storage", "Full Service"];

const ARRIVAL_TYPES = ["Cruise", "Airport", "Ferry / Port", "Other"];
const LOCATIONS = [
  "Basseterre Port, St. Kitts",
  "Robert Llewellyn Bradshaw Airport",
  "Frigate Bay",
  "Charlestown, Nevis",
  "Pier, Nevis",
];
const BAG_COUNTS = ["1 bag", "2 bags", "3 bags", "4 bags", "5 bags", "6+ bags"];
const DURATIONS = ["Half Day (4 hrs)", "Full Day", "2 Days", "3 Days", "Weekly"];
const RETURN_OPTIONS = [
  "Same Location",
  "Different Location",
  "Hotel Delivery",
  "Airport Delivery",
];

const EXTRAS = [
  { id: "grabcab", label: "GrabCab Transfer", icon: Car, color: "text-amber-500" },
  { id: "carivo", label: "Carivo Car Rental", icon: Zap, color: "text-blue-500" },
  { id: "venetta", label: "VenettaStay Accommodation", icon: Home, color: "text-orange-500" },
];

// ── Reusable form field components ────────────────────────────────
function FieldWrapper({ label, icon: Icon }: { label: string; icon: React.ElementType }) {
  return (
    <div className="absolute top-0 left-3.5 -translate-y-1/2 flex items-center gap-1 bg-white px-1">
      <Icon size={11} className="text-orange-500" strokeWidth={2.5} />
      <span className="text-[10px] font-semibold text-orange-600 uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}

function SelectField({
  label,
  icon,
  options,
  defaultValue,
}: {
  label: string;
  icon: React.ElementType;
  options: string[];
  defaultValue?: string;
}) {
  return (
    <div className="relative pt-1">
      <div className="relative border-2 border-slate-100 rounded-xl hover:border-orange-300 focus-within:border-orange-400 focus-within:shadow-[0_0_0_3px_rgba(249,115,22,0.14)] transition-all">
        <FieldWrapper label={label} icon={icon} />
        <select className="w-full px-3 pt-4 pb-3 bg-transparent text-sm font-medium text-slate-800 outline-none appearance-none cursor-pointer pr-8">
          {defaultValue && <option value="">{defaultValue}</option>}
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <ChevronDown
          size={14}
          className="absolute right-3 top-1/2 translate-y-1 text-slate-400 pointer-events-none"
        />
      </div>
    </div>
  );
}

function InputField({
  label,
  icon,
  placeholder,
  type = "text",
}: {
  label: string;
  icon: React.ElementType;
  placeholder: string;
  type?: string;
}) {
  return (
    <div className="relative pt-1">
      <div className="relative border-2 border-slate-100 rounded-xl hover:border-orange-300 focus-within:border-orange-400 focus-within:shadow-[0_0_0_3px_rgba(249,115,22,0.14)] transition-all">
        <FieldWrapper label={label} icon={icon} />
        <input
          type={type}
          placeholder={placeholder}
          className="w-full px-3 pt-4 pb-3 bg-transparent text-sm font-medium text-slate-800 outline-none placeholder:text-slate-300"
        />
      </div>
    </div>
  );
}

// ── Main BookingEngine component ──────────────────────────────────
export default function BookingEngine() {
  const [activeTab, setActiveTab] = useState("Luggage Storage");
  const [activePill, setActivePill] = useState("Store Only");
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);

  const toggleExtra = (id: string) =>
    setSelectedExtras((prev) =>
      prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]
    );

  return (
    <div
      id="booking"
      className="w-full max-w-5xl mx-auto bg-white rounded-3xl shadow-[0_32px_80px_rgba(0,0,0,0.25)] overflow-hidden"
    >
      {/* ── Service Tabs ── */}
      <div className="flex overflow-x-auto scrollbar-none border-b border-slate-100">
        {SERVICE_TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-shrink-0 px-6 py-4 text-sm font-semibold whitespace-nowrap transition-all border-b-2 ${
              activeTab === tab
                ? "border-orange-500 text-orange-600 bg-orange-50/75"
                : "border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="p-6 sm:p-8 space-y-6">
        {/* ── Booking Type Pill Selector ── */}
        <div className="flex flex-wrap gap-2">
          {BOOKING_PILLS.map((pill) => (
            <button
              key={pill}
              onClick={() => setActivePill(pill)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                activePill === pill
                  ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white border-transparent shadow-sm"
                  : "border-slate-200 text-slate-600 hover:border-orange-300 hover:text-orange-600"
              }`}
            >
              {pill}
            </button>
          ))}
        </div>

        {/* ── Row 1 ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <SelectField
            label="Arrival Type"
            icon={MapPin}
            options={ARRIVAL_TYPES}
            defaultValue="Select arrival"
          />
          <InputField
            label="Ship / Flight No."
            icon={Package}
            placeholder="e.g. BW102 / NK456"
          />
          <InputField
            label="Arrival Date"
            icon={Calendar}
            placeholder="Select date"
            type="date"
          />
          <InputField
            label="Arrival Time"
            icon={Clock}
            placeholder="Select time"
            type="time"
          />
        </div>

        {/* ── Row 2 ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <SelectField
            label="Drop-off Location"
            icon={MapPin}
            options={LOCATIONS}
            defaultValue="Choose location"
          />
          <SelectField
            label="Number of Bags"
            icon={Package}
            options={BAG_COUNTS}
            defaultValue="Select bags"
          />
          <SelectField
            label="Storage Duration"
            icon={Timer}
            options={DURATIONS}
            defaultValue="Select duration"
          />
          <SelectField
            label="Return Option"
            icon={RotateCcw}
            options={RETURN_OPTIONS}
            defaultValue="Select return"
          />
        </div>

        {/* ── Row 3: Extras + CTA ── */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-5">
          {/* Extras */}
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-1.5 mb-2">
              <PlusCircle size={13} className="text-orange-500" />
              <span className="text-[10px] font-semibold text-orange-600 uppercase tracking-wider">
                Add Extras
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {EXTRAS.map(({ id, label, icon: Icon, color }) => {
                const selected = selectedExtras.includes(id);
                return (
                  <button
                    key={id}
                    onClick={() => toggleExtra(id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl border-2 text-sm font-medium transition-all ${
                      selected
                        ? "border-orange-400 bg-orange-50 text-orange-700"
                        : "border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    <Icon size={15} className={selected ? "text-orange-500" : color} />
                    {label}
                    {selected && (
                      <span className="w-4 h-4 rounded-full bg-orange-500 flex items-center justify-center">
                        <span className="text-white text-[10px] font-bold">✓</span>
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <button className="w-full lg:w-auto flex items-center justify-center gap-2 px-10 py-4 rounded-2xl bg-gradient-to-r from-orange-500 via-orange-500 to-orange-600 text-white font-bold text-base shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all">
            Check Availability
            <ArrowRight size={18} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
}
