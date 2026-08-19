"use client";
import { useState } from "react";

export default function BookingFlowSimulation() {
  // --- STATE MANAGEMENT ---
  const [activeUser, setActiveUser] = useState("customer"); // Toggle between Customer & Rider
  const [bookingStatus, setBookingStatus] = useState("idle"); // idle -> searching -> matched -> verified -> paid
  const [otp, setOtp] = useState("");
  const [riderInput, setRiderInput] = useState("");

  // --- CUSTOMER ACTIONS ---
  const handleBookMechanic = () => {
    setBookingStatus("searching");

    // Fake Backend Delay: Finding mechanic and generating OTP
    setTimeout(() => {
      const generatedOtp = Math.floor(1000 + Math.random() * 9000).toString();
      setOtp(generatedOtp);
      setBookingStatus("matched");
    }, 2500);
  };

  // --- RIDER ACTIONS ---
  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (riderInput === otp) {
      setBookingStatus("verified");

      // Fake Payment Gateway Trigger (Razorpay/Stripe simulation)
      setTimeout(() => {
        setBookingStatus("paid");
      }, 3000);
    } else {
      alert("❌ Invalid OTP! Customer se sahi OTP confirm karein.");
    }
  };

  const resetFlow = () => {
    setBookingStatus("idle");
    setOtp("");
    setRiderInput("");
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white py-12 px-6 flex flex-col items-center">
      {/* --- TOP TOGGLE (Development Tool) --- */}
      <div className="bg-gray-900 border border-gray-700 rounded-full p-1 mb-12 flex space-x-2">
        <button
          onClick={() => setActiveUser("customer")}
          className={`px-6 py-2 rounded-full font-bold transition-all ${activeUser === "customer" ? "bg-blue-600 text-white" : "text-gray-400 hover:text-white"}`}
        >
          📱 Customer View
        </button>
        <button
          onClick={() => setActiveUser("rider")}
          className={`px-6 py-2 rounded-full font-bold transition-all ${activeUser === "rider" ? "bg-orange-600 text-white" : "text-gray-400 hover:text-white"}`}
        >
          🏍️ Mechanic View
        </button>
      </div>

      <div className="w-full max-w-md">
        {/* ==========================================
            CUSTOMER VIEW UI
        ========================================== */}
        {activeUser === "customer" && (
          <div className="bg-gray-900/50 backdrop-blur-xl border border-blue-500/30 p-8 rounded-3xl shadow-2xl">
            <h2 className="text-2xl font-bold mb-2 text-blue-400">
              RoadMitra Booking
            </h2>
            <p className="text-gray-400 text-sm mb-8">
              Fastest breakdown assistance.
            </p>

            {bookingStatus === "idle" && (
              <button
                onClick={handleBookMechanic}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all"
              >
                🚨 Book Mechanic Now
              </button>
            )}

            {bookingStatus === "searching" && (
              <div className="text-center py-8 animate-pulse">
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-blue-400 font-bold">
                  Locating nearest mechanics...
                </p>
              </div>
            )}

            {["matched", "verified", "paid"].includes(bookingStatus) && (
              <div className="text-center space-y-6">
                <div className="bg-blue-900/30 p-6 rounded-2xl border border-blue-500/50">
                  <p className="text-gray-300 text-sm mb-2">
                    Share this OTP with mechanic
                  </p>
                  <p className="text-5xl font-mono tracking-widest font-extrabold text-white">
                    {otp}
                  </p>
                </div>

                <div className="bg-gray-800 rounded-xl p-4 flex items-center gap-4 text-left">
                  <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-xl">
                    👨‍🔧
                  </div>
                  <div>
                    <h3 className="font-bold">Ramesh Kumar</h3>
                    <p className="text-sm text-gray-400">
                      Arriving in 12 mins • UP44 AB 1234
                    </p>
                  </div>
                </div>

                {bookingStatus === "verified" && (
                  <p className="text-green-400 font-bold animate-pulse">
                    OTP Verified! Work in progress...
                  </p>
                )}
                {bookingStatus === "paid" && (
                  <p className="text-green-500 font-bold">
                    ✅ Payment Completed Successfully!
                  </p>
                )}
              </div>
            )}
          </div>
        )}

        {/* ==========================================
            MECHANIC (RIDER) VIEW UI
        ========================================== */}
        {activeUser === "rider" && (
          <div className="bg-gray-900/50 backdrop-blur-xl border border-orange-500/30 p-8 rounded-3xl shadow-2xl">
            <h2 className="text-2xl font-bold mb-2 text-orange-400">
              Partner Dashboard
            </h2>

            {bookingStatus === "idle" || bookingStatus === "searching" ? (
              <div className="text-center py-12">
                <p className="text-gray-400">
                  Waiting for new breakdown requests...
                </p>
              </div>
            ) : null}

            {bookingStatus === "matched" && (
              <form onSubmit={handleVerifyOtp} className="space-y-6">
                <div className="bg-orange-900/20 p-4 rounded-xl border border-orange-500/30">
                  <h3 className="text-orange-400 font-bold mb-1">
                    New Job Accepted!
                  </h3>
                  <p className="text-sm text-gray-400">
                    Reach the location and ask customer for OTP to unlock live
                    map and payment.
                  </p>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2 text-center">
                    Enter 4-Digit Customer OTP
                  </label>
                  <input
                    type="text"
                    maxLength="4"
                    required
                    value={riderInput}
                    onChange={(e) =>
                      setRiderInput(e.target.value.replace(/\D/g, ""))
                    }
                    className="w-full bg-black border border-gray-700 rounded-xl px-4 py-4 text-center text-3xl font-mono text-white focus:border-orange-500 outline-none tracking-widest"
                    placeholder="••••"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(234,88,12,0.4)] transition-all"
                >
                  Verify & Unlock Location
                </button>
              </form>
            )}

            {bookingStatus === "verified" && (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                  🔓
                </div>
                <h3 className="font-bold text-xl mb-2">Location Unlocked!</h3>
                <p className="text-gray-400 text-sm mb-6">
                  Initializing Razorpay Secure Gateway...
                </p>
                <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
              </div>
            )}

            {bookingStatus === "paid" && (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-3xl mx-auto mb-4 shadow-[0_0_20px_rgba(34,197,94,0.5)]">
                  ₹
                </div>
                <h3 className="font-bold text-2xl text-green-400 mb-2">
                  Payment Received
                </h3>
                <p className="text-gray-400 mb-8">
                  Amount credited to your RoadMitra Wallet.
                </p>
                <button
                  onClick={resetFlow}
                  className="w-full bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 rounded-xl transition-all"
                >
                  Find Next Job
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
