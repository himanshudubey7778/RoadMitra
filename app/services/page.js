"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // 🚀 Router import kiya

export default function ServicePage() {
  const router = useRouter(); // 🚀 Router initialize kiya
  const [selectedService, setSelectedService] = useState(null);
  const [fuelType, setFuelType] = useState("Petrol");
  const [fuelQty, setFuelQty] = useState("1L");
  const [isSearching, setIsSearching] = useState(false);

  // Advanced Feature: Live Ticker Data
  const recentRescues = [
    "✅ 2 mins ago: Flat tire fixed in Downtown",
    "✅ 5 mins ago: 2L Petrol delivered on Highway 4",
    "✅ 12 mins ago: Car unlocked safely",
    "✅ Just now: Tow truck dispatched to South Avenue",
  ];

  const services = [
    {
      id: 1,
      category: "Repair",
      title: "Flat Tire / Puncture",
      description:
        "Fast on-spot puncture repair and stepney replacement by verified experts.",
      icon: "🛞",
      gradient: "from-blue-500 to-cyan-400",
      time: "10-15 mins",
    },
    {
      id: 2,
      category: "Delivery",
      title: "Emergency Fuel",
      description:
        "PESO-approved jerry can fuel delivery (Petrol/Diesel) right to your live location.",
      icon: "⛽",
      gradient: "from-orange-500 to-yellow-400",
      time: "10-20 mins",
    },
    {
      id: 3,
      category: "Repair",
      title: "Battery Jumpstart",
      description:
        "Dead battery? Get a quick power boost to get your engine roaring again.",
      icon: "🔋",
      gradient: "from-green-500 to-emerald-400",
      time: "15 mins",
    },
    {
      id: 4,
      category: "Logistics",
      title: "Towing Service",
      description:
        "Safe, secure, and flatbed towing for major breakdowns and accidents.",
      icon: "🚛",
      gradient: "from-purple-500 to-pink-400",
      time: "25-30 mins",
    },
    {
      id: 5,
      category: "Repair",
      title: "Engine Diagnostics",
      description:
        "On-site scanning and minor engine fixes to get you moving safely.",
      icon: "🔧",
      gradient: "from-red-500 to-rose-400",
      time: "20 mins",
    },
    {
      id: 6,
      category: "Assistance",
      title: "Key Lockout",
      description:
        "Locked keys inside? Professional, damage-free unlocking service.",
      icon: "🗝️",
      gradient: "from-indigo-500 to-violet-400",
      time: "15 mins",
    },
  ];

  const handleSearchRider = () => {
    setIsSearching(true);

    // Fake Backend Delay: Searching for mechanic
    setTimeout(() => {
      setIsSearching(false);
      // 🚀 Jadoo yahan hai: Modal band karo aur Booking page par bhej do!
      setSelectedService(null);
      router.push("/booking");
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white py-12 px-6 relative overflow-hidden">
      {/* Background Glowing Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-teal-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Advanced Feature: Live Trust Ticker */}
        <div className="w-full bg-teal-900/30 border border-teal-500/30 rounded-full py-2 px-4 mb-12 flex overflow-hidden">
          <div className="whitespace-nowrap animate-[marquee_15s_linear_infinite] text-teal-400 text-sm font-medium flex gap-12">
            {recentRescues.map((rescue, i) => (
              <span key={i}>{rescue}</span>
            ))}
            {/* Duplicate for seamless looping */}
            {recentRescues.map((rescue, i) => (
              <span key={`dup-${i}`}>{rescue}</span>
            ))}
          </div>
        </div>

        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-white/10 text-white px-3 py-1 rounded-full text-xs font-bold border border-white/20">
              🛡️ 100% Verified Partners
            </span>
            <span className="bg-white/10 text-white px-3 py-1 rounded-full text-xs font-bold border border-white/20">
              ⏱️ 24/7 Available
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
              Emergency Services
            </span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Select the service you need. We will connect you to the nearest
            verified professional in seconds.
          </p>
        </div>

        {/* Advanced Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="group relative bg-gray-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:bg-gray-800 transition-all duration-500 hover:-translate-y-2 cursor-pointer shadow-lg overflow-hidden"
            >
              {/* Shimmer Effect on Hover */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:animate-[shimmer_1.5s_infinite]"></div>

              <div className="absolute top-6 right-6 flex items-center gap-2">
                <span className="text-xs text-gray-400 font-medium bg-black/50 px-2 py-1 rounded-md">
                  ETA: {service.time}
                </span>
              </div>

              <div className="relative w-20 h-20 mb-8 flex items-center justify-center">
                <div
                  className={`absolute inset-0 bg-gradient-to-tr ${service.gradient} opacity-20 rounded-2xl group-hover:opacity-60 blur-lg transition-all duration-500`}
                ></div>
                <div
                  className={`relative z-10 w-full h-full bg-black border border-gray-700 rounded-2xl flex items-center justify-center text-4xl shadow-inner group-hover:scale-110 transition-transform duration-500`}
                >
                  {service.icon}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-100 mb-3 group-hover:text-white transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-[#0a0a0a] border border-gray-700 w-full max-w-md rounded-3xl p-6 shadow-[0_0_50px_rgba(20,184,166,0.15)] relative transform transition-all scale-in-95">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-white bg-gray-800 hover:bg-red-600 p-2 rounded-full transition-all"
            >
              ✕
            </button>

            <div className="flex items-center gap-4 mb-6 border-b border-gray-800 pb-4">
              <div
                className={`w-14 h-14 bg-gradient-to-tr ${selectedService.gradient} bg-opacity-20 rounded-xl flex items-center justify-center text-3xl`}
              >
                {selectedService.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {selectedService.title}
                </h3>
                <p className="text-sm text-teal-400">
                  ⚡ High Priority Dispatch
                </p>
              </div>
            </div>

            {selectedService.title.includes("Fuel") ? (
              <div className="space-y-5 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    1. Fuel Type
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setFuelType("Petrol")}
                      className={`py-3 rounded-xl font-bold transition-all ${fuelType === "Petrol" ? "bg-teal-600 text-white shadow-[0_0_15px_rgba(13,148,136,0.5)]" : "bg-gray-800 text-gray-400 hover:bg-gray-700"}`}
                    >
                      Petrol
                    </button>
                    <button
                      onClick={() => setFuelType("Diesel")}
                      className={`py-3 rounded-xl font-bold transition-all ${fuelType === "Diesel" ? "bg-teal-600 text-white shadow-[0_0_15px_rgba(13,148,136,0.5)]" : "bg-gray-800 text-gray-400 hover:bg-gray-700"}`}
                    >
                      Diesel
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    2. Quantity Required
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setFuelQty("1L")}
                      className={`py-3 rounded-xl font-bold transition-all flex flex-col items-center justify-center h-20 ${fuelQty === "1L" ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]" : "bg-gray-800 text-gray-400 hover:bg-gray-700"}`}
                    >
                      <span className="text-lg">1 Liter</span>
                      <span className="text-xs font-normal opacity-70">
                        For Bikes
                      </span>
                    </button>
                    <button
                      onClick={() => setFuelQty("2L")}
                      className={`py-3 rounded-xl font-bold transition-all flex flex-col items-center justify-center h-20 ${fuelQty === "2L" ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]" : "bg-gray-800 text-gray-400 hover:bg-gray-700"}`}
                    >
                      <span className="text-lg">2 Liters</span>
                      <span className="text-xs font-normal opacity-70">
                        For Cars
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mb-6 p-5 bg-gray-900 rounded-xl border border-gray-800">
                <div className="flex items-start gap-3">
                  <div className="text-2xl mt-1 animate-bounce">📍</div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">
                      We will send a mechanic to your current GPS location.
                    </p>
                    <p className="font-semibold text-teal-400 text-sm">
                      Please ensure your location services are ON.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={handleSearchRider}
              disabled={isSearching}
              className="relative overflow-hidden w-full bg-white text-black hover:bg-gray-200 disabled:opacity-70 font-extrabold py-4 px-6 rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all flex items-center justify-center gap-2"
            >
              {isSearching ? (
                <>
                  <span className="animate-spin text-xl">⏳</span> Searching
                  network...
                </>
              ) : (
                <>Confirm & Request Now ➔</>
              )}
            </button>
            <div className="flex justify-between items-center mt-4 px-2">
              <p className="text-xs text-gray-500">🔒 Secure Dispatch</p>
              <p className="text-xs text-gray-500">No hidden fees</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
