"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // <-- Yeh add kiya

export default function LoginPage() {
  const router = useRouter(); // <-- Router initialize kiya
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (phone.length < 10) {
      alert("Bhai, sahi 10-digit number daal!");
      return;
    }

    // Terminal mein dikhane ke liye log
    console.log(
      `📲 [API LOG] OTP request bheji gayi is number par: +91 ${phone}`,
    );

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log(`✅ [API LOG] OTP successfully send ho gaya!`);
      setStep(2);
    }, 1500);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (otp.length < 4) {
      alert("Bhai, pura OTP daal!");
      return;
    }

    // Terminal mein dikhane ke liye log
    console.log(`🔐 [API LOG] User ne yeh OTP daala hai: ${otp}`);

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log(`🚀 [API LOG] Login Successful for +91 ${phone}`);
      alert("Login Successful! Welcome to RoadMitra 🚀");

      // OTP verify hote hi seedha Help page par bhej do
      router.push("/help");
    }, 1500);
  };

  // ... (Baaki poora return/HTML wala part ekdam same rahega jo tune likha tha)
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-800">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-teal-500 mb-2">RoadMitra</h2>
          <p className="text-gray-400 text-sm">
            {step === 1
              ? "Apna mobile number daalkar login karein"
              : "Mobile par aaya 6-digit OTP daalein"}
          </p>
        </div>

        {/* Step 1: Phone Number Form */}
        {step === 1 && (
          <form onSubmit={handleSendOtp} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Mobile Number
              </label>
              <div className="flex bg-gray-800 border border-gray-700 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-teal-500 transition-all">
                <span className="px-4 py-3 bg-gray-700 text-gray-300 border-r border-gray-600">
                  +91
                </span>
                <input
                  type="tel"
                  maxLength="10"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/, ""))}
                  placeholder="98765 43210"
                  className="w-full bg-transparent p-3 text-white focus:outline-none tracking-wider"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-teal-600 hover:bg-teal-700 disabled:bg-teal-800 text-white font-bold py-3 px-6 rounded-lg shadow-lg shadow-teal-500/30 transition-all"
            >
              {loading ? "Sending OTP..." : "Get OTP"}
            </button>
          </form>
        )}

        {/* Step 2: OTP Verification Form */}
        {step === 2 && (
          <form onSubmit={handleVerifyOtp} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Enter OTP
              </label>
              <input
                type="text"
                maxLength="6"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/, ""))}
                placeholder="• • • • • •"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-center text-2xl tracking-[1em] text-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-800 text-white font-bold py-3 px-6 rounded-lg shadow-lg shadow-red-500/30 transition-all"
            >
              {loading ? "Verifying..." : "Verify & Login"}
            </button>

            <div className="text-center mt-4">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-gray-400 hover:text-teal-400 text-sm transition-colors"
              >
                Galat number daal diya? Change karo
              </button>
            </div>
          </form>
        )}

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="text-gray-500 hover:text-white text-sm transition-all"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
