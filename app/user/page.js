"use client";
import { useState } from "react";
import Link from "next/link";

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState("profile");

  // Mock Data: User Details
  const userData = {
    name: "Alex Sharma",
    phone: "+91 98765 43210",
    email: "alex@example.com",
    memberSince: "August 2026",
  };

  // Mock Data: Saved Vehicles
  const savedVehicles = [
    {
      id: 1,
      type: "Car",
      make: "Honda City",
      number: "UP 44 AB 1234",
      color: "White",
    },
    {
      id: 2,
      type: "Bike",
      make: "Royal Enfield",
      number: "UP 44 XY 9876",
      color: "Black",
    },
  ];

  // Mock Data: Rescue History
  const rescueHistory = [
    {
      id: "REQ-092",
      date: "10 Aug 2026",
      service: "Flat Tire",
      status: "Completed",
      cost: "₹250",
    },
    {
      id: "REQ-045",
      date: "02 Jul 2026",
      service: "2L Petrol Delivery",
      status: "Completed",
      cost: "₹300",
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white py-12 px-6 relative overflow-hidden">
      {/* Background Glowing Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-teal-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-4xl font-extrabold mb-2">My Account</h1>
            <p className="text-gray-400">
              Manage your profile, vehicles, and history.
            </p>
          </div>
          <Link
            href="/services"
            className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-5 py-2 rounded-full font-semibold transition-all text-sm"
          >
            Book Service
          </Link>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-4 mb-8 border-b border-gray-800 pb-4 overflow-x-auto">
          <button
            onClick={() => setActiveTab("profile")}
            className={`pb-2 px-2 font-bold whitespace-nowrap transition-all ${activeTab === "profile" ? "text-teal-400 border-b-2 border-teal-400" : "text-gray-500 hover:text-gray-300"}`}
          >
            👤 Personal Details
          </button>
          <button
            onClick={() => setActiveTab("vehicles")}
            className={`pb-2 px-2 font-bold whitespace-nowrap transition-all ${activeTab === "vehicles" ? "text-teal-400 border-b-2 border-teal-400" : "text-gray-500 hover:text-gray-300"}`}
          >
            🚗 Saved Vehicles
          </button>
          <button
            onClick={() => setActiveTab("history")}
            className={`pb-2 px-2 font-bold whitespace-nowrap transition-all ${activeTab === "history" ? "text-teal-400 border-b-2 border-teal-400" : "text-gray-500 hover:text-gray-300"}`}
          >
            📜 Rescue History
          </button>
        </div>

        {/* Tab Content: Profile */}
        {activeTab === "profile" && (
          <div className="bg-gray-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-lg animate-in fade-in duration-300">
            <div className="flex items-center gap-6 mb-8 border-b border-gray-800 pb-8">
              <div className="w-24 h-24 bg-gradient-to-tr from-teal-500 to-blue-600 rounded-full flex items-center justify-center text-4xl font-bold shadow-lg">
                {userData.name.charAt(0)}
              </div>
              <div>
                <h2 className="text-3xl font-bold">{userData.name}</h2>
                <p className="text-teal-400 font-medium">RoadMitra Member</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black/50 p-5 rounded-2xl border border-gray-800">
                <p className="text-gray-500 text-sm mb-1">Phone Number</p>
                <p className="font-semibold text-lg">{userData.phone}</p>
              </div>
              <div className="bg-black/50 p-5 rounded-2xl border border-gray-800">
                <p className="text-gray-500 text-sm mb-1">Email Address</p>
                <p className="font-semibold text-lg">{userData.email}</p>
              </div>
              <div className="bg-black/50 p-5 rounded-2xl border border-gray-800">
                <p className="text-gray-500 text-sm mb-1">Member Since</p>
                <p className="font-semibold text-lg">{userData.memberSince}</p>
              </div>
            </div>
            <button className="mt-8 text-red-500 font-semibold hover:text-red-400 transition-colors">
              Log Out
            </button>
          </div>
        )}

        {/* Tab Content: Vehicles */}
        {activeTab === "vehicles" && (
          <div className="animate-in fade-in duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {savedVehicles.map((vehicle) => (
                <div
                  key={vehicle.id}
                  className="bg-gray-900/50 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-lg relative group"
                >
                  <div className="text-4xl mb-4">
                    {vehicle.type === "Car" ? "🚗" : "🏍️"}
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{vehicle.make}</h3>
                  <p className="text-teal-400 font-mono bg-teal-900/30 inline-block px-3 py-1 rounded-md mb-3 border border-teal-500/20">
                    {vehicle.number}
                  </p>
                  <p className="text-gray-400 text-sm">
                    Color: {vehicle.color}
                  </p>
                  <button className="absolute top-6 right-6 text-gray-500 hover:text-red-500 transition-colors">
                    🗑️
                  </button>
                </div>
              ))}
            </div>
            <button className="w-full border-2 border-dashed border-gray-700 hover:border-teal-500 text-gray-400 hover:text-teal-400 bg-gray-900/30 py-6 rounded-3xl font-bold transition-all flex items-center justify-center gap-2">
              <span className="text-2xl">+</span> Add New Vehicle
            </button>
          </div>
        )}

        {/* Tab Content: History */}
        {activeTab === "history" && (
          <div className="bg-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl shadow-lg overflow-hidden animate-in fade-in duration-300">
            {rescueHistory.map((record, index) => (
              <div
                key={record.id}
                className={`p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${index !== rescueHistory.length - 1 ? "border-b border-gray-800" : ""}`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full font-bold border border-green-500/20">
                      {record.status}
                    </span>
                    <span className="text-gray-500 text-sm font-mono">
                      {record.id}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {record.service}
                  </h3>
                  <p className="text-gray-400 text-sm">{record.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-teal-400">
                    {record.cost}
                  </p>
                  <button className="text-sm text-gray-500 hover:text-white underline underline-offset-4 mt-1 transition-colors">
                    Download Invoice
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
