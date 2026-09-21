"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function UserProfile() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("profile");
  const [user, setUser] = useState(null);

  // Load logged-in user data from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("Failed to parse user session", e);
      }
    } else {
      router.push("/login");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  // Real state: Fake data hata diya gaya hai, ab yeh empty arrays hain jab tak real data na aaye
  const savedVehicles = [];
  const rescueHistory = [];

  // Get initials for avatar fallback
  const getInitials = (name) => {
    if (!name) return "U";
    return name.charAt(0).toUpperCase();
  };

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
                {getInitials(user?.name)}
              </div>
              <div>
                <h2 className="text-3xl font-bold">
                  {user?.name || "Loading..."}
                </h2>
                <p className="text-teal-400 font-medium">RoadMitra Member</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black/50 p-5 rounded-2xl border border-gray-800">
                <p className="text-gray-500 text-sm mb-1">Phone Number</p>
                <p className="font-semibold text-lg">
                  {user?.phone || "Not Provided"}
                </p>
              </div>
              <div className="bg-black/50 p-5 rounded-2xl border border-gray-800">
                <p className="text-gray-500 text-sm mb-1">Email Address</p>
                <p className="font-semibold text-lg">
                  {user?.email || "Not Provided"}
                </p>
              </div>
              <div className="bg-black/50 p-5 rounded-2xl border border-gray-800">
                <p className="text-gray-500 text-sm mb-1">Account Role</p>
                <p className="font-semibold text-lg text-teal-400">
                  {user?.role || "CUSTOMER"}
                </p>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="mt-8 text-red-500 font-semibold hover:text-red-400 transition-colors cursor-pointer"
            >
              Log Out
            </button>
          </div>
        )}

        {/* Tab Content: Vehicles */}
        {activeTab === "vehicles" && (
          <div className="animate-in fade-in duration-300">
            {savedVehicles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Vehicle mapping logic */}
              </div>
            ) : (
              <div className="bg-gray-900/50 backdrop-blur-xl border border-white/10 p-12 rounded-3xl text-center mb-6">
                <p className="text-4xl mb-3">🚗</p>
                <h3 className="text-xl font-bold mb-1">
                  No Vehicles Saved Yet
                </h3>
                <p className="text-gray-400 text-sm mb-6">
                  Add your vehicle details for faster emergency dispatch.
                </p>
              </div>
            )}
            <button className="w-full border-2 border-dashed border-gray-700 hover:border-teal-500 text-gray-400 hover:text-teal-400 bg-gray-900/30 py-6 rounded-3xl font-bold transition-all flex items-center justify-center gap-2">
              <span className="text-2xl">+</span> Add New Vehicle
            </button>
          </div>
        )}

        {/* Tab Content: History */}
        {activeTab === "history" && (
          <div className="bg-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl shadow-lg p-12 text-center animate-in fade-in duration-300">
            {rescueHistory.length > 0 ? (
              <div>{/* History mapping logic */}</div>
            ) : (
              <div>
                <p className="text-4xl mb-3">📜</p>
                <h3 className="text-xl font-bold mb-1">
                  No Rescue History Found
                </h3>
                <p className="text-gray-400 text-sm">
                  You haven't requested any roadside assistance yet.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
