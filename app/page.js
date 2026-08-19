import Link from "next/link";
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center p-6">
      {/* Header Section */}
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-extrabold text-teal-400 mb-4 tracking-wide">
          RoadMitra
        </h1>
        <p className="text-lg text-gray-400 mb-8">
          Stuck on the road? Don't panic. RoadMitra is your ultimate live
          command & rescue system. Get instant roadside assistance anytime,
          anywhere.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 w-full justify-center max-w-md">
        <Link href="/help" className="w-full">
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg shadow-red-500/30 transition-all w-full text-center">
            🚨 Request Emergency Help
          </button>
        </Link>
        <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg shadow-teal-500/30 transition-all w-full text-center">
          🛠️ Find Nearby Mechanic
        </button>
      </div>

      {/* Footer / Status */}
      <div className="mt-16 text-sm text-gray-500 border-t border-gray-800 pt-6 w-full text-center max-w-xl">
        <p>🟢 System Status: Active | Ready to Deploy Riders</p>
        <p className="mt-2">© 2026 RoadMitra. Built for Scale.</p>
      </div>
    </div>
  );
}
