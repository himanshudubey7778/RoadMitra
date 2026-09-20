import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col justify-between selection:bg-blue-500 selection:text-white">
      {/* Top Navbar */}
      <header className="flex flex-col gap-4 px-4 py-4 border-b border-gray-800/60 backdrop-blur-md sticky top-0 z-50 bg-gray-950/80 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-6">
        <div className="flex items-center justify-between gap-3 sm:justify-start">
          <h1 className="text-xl font-black tracking-wider bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent sm:text-2xl">
            RoadMitra
          </h1>
          <span className="text-[10px] font-semibold bg-blue-500/10 text-blue-400 px-2.5 py-1 rounded-full border border-blue-500/20 sm:text-xs">
            24/7 Live SOS
          </span>
        </div>

        <div className="flex flex-col gap-3 w-full sm:w-auto sm:flex-row sm:gap-4">
          <Link
            href="/login"
            className="w-full text-center px-5 py-2.5 rounded-xl text-sm font-semibold border border-gray-700 hover:border-blue-500 hover:bg-blue-600/10 transition-all sm:w-auto"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="w-full text-center px-5 py-2.5 rounded-xl text-sm font-semibold bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/25 transition-all sm:w-auto"
          >
            Sign Up
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center text-center px-4 py-20 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
          Next-Gen Roadside Assistance & Fleet Platform
        </div>

        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
          Instant Roadside Assistance, <br />
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Anytime, Anywhere.
          </span>
        </h2>

        <p className="text-gray-400 max-w-2xl text-lg mb-10 leading-relaxed">
          Stuck on the highway or city roads? Connect instantly with verified
          mechanics, real-time geolocation tracking, and emergency SOS support.
        </p>

        <div className="flex flex-col gap-4 w-full justify-center sm:flex-row">
          <Link
            href="/signup"
            className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold text-base shadow-xl shadow-blue-600/30 transition-all transform hover:-translate-y-0.5 sm:w-auto"
          >
            Get Started As Customer / Partner
          </Link>
          <Link
            href="/login"
            className="w-full px-8 py-4 bg-gray-900 hover:bg-gray-800 border border-gray-800 rounded-xl font-bold text-base transition-all sm:w-auto"
          >
            Access Dashboard
          </Link>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 text-left w-full">
          <div className="p-6 rounded-2xl bg-gray-900/40 border border-gray-800/80 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 font-bold mb-4">
              01
            </div>
            <h3 className="text-lg font-bold mb-2">Role-Based Access</h3>
            <p className="text-gray-400 text-sm">
              Dedicated secure dashboards tailored specifically for customers
              and mechanics (riders).
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gray-900/40 border border-gray-800/80 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-lg bg-indigo-600/20 flex items-center justify-center text-indigo-400 font-bold mb-4">
              02
            </div>
            <h3 className="text-lg font-bold mb-2">Geospatial Tracking</h3>
            <p className="text-gray-400 text-sm">
              Advanced MongoDB 2dsphere indexing to instantly locate the nearest
              active mechanic within seconds.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gray-900/40 border border-gray-800/80 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-lg bg-purple-600/20 flex items-center justify-center text-purple-400 font-bold mb-4">
              03
            </div>
            <h3 className="text-lg font-bold mb-2">Production Ready</h3>
            <p className="text-gray-400 text-sm">
              Built using Next.js App Router, Tailwind CSS, and robust backend
              validation for high scalability.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 text-sm border-t border-gray-800/60">
        © 2026 RoadMitra. Engineered for Excellence & Scale.
      </footer>
    </div>
  );
}
