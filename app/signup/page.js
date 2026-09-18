"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("CUSTOMER");
  const [agreed, setAgreed] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    if (!agreed) {
      alert("Please accept the terms and conditions (OK).");
      return;
    }
    console.log("Registering as:", role, { name, email, phone });
    router.push("/login");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 text-white px-4 py-10">
      <div className="w-full max-w-md p-8 bg-gray-800 rounded-2xl shadow-xl space-y-6 border border-gray-700">
        {/* Logo on Signup Page */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-blue-400">RoadMitra</h2>
          <p className="text-sm text-gray-400 mt-1">Create your account</p>
        </div>

        <form onSubmit={handleSignup} className="space-y-4">
          {/* Role Selection Tabs */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Register As
            </label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setRole("CUSTOMER")}
                className={`py-2 rounded-lg font-bold border transition-all ${
                  role === "CUSTOMER"
                    ? "bg-blue-600 border-blue-600 text-white shadow-md"
                    : "bg-gray-700 border-gray-600 text-gray-300"
                }`}
              >
                Customer
              </button>
              <button
                type="button"
                onClick={() => setRole("PARTNER")}
                className={`py-2 rounded-lg font-bold border transition-all ${
                  role === "PARTNER"
                    ? "bg-orange-600 border-orange-600 text-white shadow-md"
                    : "bg-gray-700 border-gray-600 text-gray-300"
                }`}
              >
                Partner / Rider
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Phone Number
            </label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600"
              placeholder="Create a password"
            />
          </div>

          {/* OK / Terms Checkbox */}
          <div className="flex items-center space-x-2 pt-2">
            <input
              type="checkbox"
              id="terms"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="w-4 h-4 rounded bg-gray-700 border-gray-600 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="terms" className="text-sm text-gray-300">
              I agree to the terms and safety guidelines (
              <span className="text-blue-400 font-semibold">OK</span>)
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold transition-all shadow-lg"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-400 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
