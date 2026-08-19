"use client";
import { useState } from "react";
import Link from "next/link";

export default function MechanicDashboard() {
  const [isOnline, setIsOnline] = useState(false);

  // Mock data representing incoming emergency requests
  const activeRequests = [
    {
      id: "REQ-001",
      type: "SOS Emergency",
      vehicle: "Car",
      distance: "2.4 km away",
      time: "2 mins ago",
      price: "₹300 - ₹500",
      urgency: "High",
    },
    {
      id: "REQ-002",
      type: "Fuel Delivery (2L Petrol)",
      vehicle: "Car",
      distance: "5.1 km away",
      time: "10 mins ago",
      price: "₹80 Delivery",
      urgency: "Medium",
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-teal-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Top Navigation & Status Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-white/[0.03] backdrop-blur-xl border border-white/10 p-6 rounded-3xl mb-8 shadow-lg">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Partner Dashboard
            </h1>
            <p className="text-gray-400 text-sm mt-1">
              Welcome back! Ready to rescue?
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-4">
            <span
              className={`font-semibold ${isOnline ? "text-teal-400" : "text-gray-500"}`}
            >
              {isOnline ? "You are ONLINE" : "You are OFFLINE"}
            </span>
            {/* Toggle Switch */}
            <button
              onClick={() => setIsOnline(!isOnline)}
              className={`w-16 h-8 flex items-center rounded-full p-1 transition-colors duration-300 ${isOnline ? "bg-teal-600" : "bg-gray-700"}`}
            >
              <div
                className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isOnline ? "translate-x-8" : "translate-x-0"}`}
              ></div>
            </button>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-3xl">
            <h3 className="text-gray-400 text-sm font-medium mb-2">
              Today's Earnings
            </h3>
            <p className="text-4xl font-bold text-white">₹1,250</p>
          </div>
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-3xl">
            <h3 className="text-gray-400 text-sm font-medium mb-2">
              Completed Rescues
            </h3>
            <p className="text-4xl font-bold text-white">4</p>
          </div>
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-3xl">
            <h3 className="text-gray-400 text-sm font-medium mb-2">
              Partner Rating
            </h3>
            <p className="text-4xl font-bold text-teal-400">4.9 ★</p>
          </div>
        </div>

        {/* Live Requests Feed */}
        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            Live Radar
            {isOnline && (
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
            )}
          </h2>

          {!isOnline ? (
            <div className="bg-gray-900 border border-gray-800 border-dashed rounded-3xl p-12 text-center">
              <div className="text-5xl mb-4 opacity-50">😴</div>
              <h3 className="text-xl font-semibold text-gray-300 mb-2">
                You are currently offline
              </h3>
              <p className="text-gray-500">
                Toggle your status to online to start receiving rescue requests.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {activeRequests.map((req) => (
                <div
                  key={req.id}
                  className="bg-white/[0.03] hover:bg-white/[0.05] border border-white/10 p-6 rounded-3xl transition-all flex flex-col md:flex-row justify-between items-center gap-6"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${req.urgency === "High" ? "bg-red-500/20 text-red-400 border border-red-500/30" : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"}`}
                      >
                        {req.urgency} Urgency
                      </span>
                      <span className="text-gray-400 text-sm">{req.time}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {req.type}
                    </h3>
                    <p className="text-gray-400 text-sm flex items-center gap-4">
                      <span>📍 {req.distance}</span>
                      <span>🚗 {req.vehicle}</span>
                    </p>
                  </div>

                  <div className="text-right flex flex-col items-end w-full md:w-auto">
                    <p className="text-2xl font-bold text-teal-400 mb-3">
                      {req.price}
                    </p>
                    <button className="w-full md:w-auto bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-teal-900/50">
                      Accept Request
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="text-gray-500 hover:text-white transition-colors text-sm"
          >
            ← Logout and return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
