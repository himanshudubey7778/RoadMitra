"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // 🚀 Router import kiya

export default function HelpSupportPage() {
  const router = useRouter(); // 🚀 Router initialize kiya

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    issueType: "General Query",
    transactionId: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Star Rating State
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  // Toast Notification State
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  const maxLength = 500; // Character Limit

  // Toast Hide Logic (3 seconds baad khud gayab)
  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(
        () => setToast({ show: false, message: "", type: "" }),
        3000,
      );
      return () => clearTimeout(timer);
    }
  }, [toast.show]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) {
      setToast({
        show: true,
        message: "Please give a rating before submitting! ⭐",
        type: "error",
      });
      return;
    }

    setIsSubmitting(true);

    // Fake Backend Processing
    setTimeout(() => {
      setIsSubmitting(false);
      setToast({
        show: true,
        message: "✅ Ticket Raised! Redirecting to Services...",
        type: "success",
      });

      // 🚀 Routing Magic: Submit hone ke 2 second baad user wapas Services par chala jayega
      setTimeout(() => {
        router.push("/services");
      }, 2000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white py-12 px-6 relative overflow-hidden">
      {/* Toast Notification Component */}
      <div
        className={`fixed top-5 right-5 z-50 transition-all duration-500 transform ${toast.show ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
      >
        <div
          className={`px-6 py-4 rounded-xl shadow-2xl font-bold flex items-center gap-3 ${toast.type === "error" ? "bg-red-500/90 text-white" : "bg-green-500/90 text-white"}`}
        >
          {toast.message}
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Back Button */}
        <button
          onClick={() => router.back()} // 🚀 Ek click mein pichle page par jane ka button
          className="mb-8 text-gray-500 hover:text-white transition-colors flex items-center gap-2"
        >
          ← Go Back
        </button>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Help & <span className="text-blue-500">Feedback</span>
          </h1>
        </div>

        <div className="bg-gray-900/40 backdrop-blur-2xl border border-white/10 p-8 rounded-3xl shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* STAR RATING SECTION */}
            <div className="text-center mb-6">
              <label className="block text-lg font-medium text-gray-300 mb-3">
                Rate your last experience
              </label>
              <div className="flex justify-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className={`text-4xl transition-all duration-200 ${(hoverRating || rating) >= star ? "text-yellow-400 scale-110 drop-shadow-[0_0_10px_rgba(250,204,21,0.6)]" : "text-gray-600 grayscale"}`}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Your Name
                </label>
                <input
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Issue Type
                </label>
                <select
                  value={formData.issueType}
                  onChange={(e) =>
                    setFormData({ ...formData, issueType: e.target.value })
                  }
                  className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500 appearance-none"
                >
                  <option>General Query</option>
                  <option>Mechanic Delay</option>
                  <option>Payment Issue</option>
                  <option>App Bug</option>
                </select>
              </div>
            </div>

            {/* CONDITIONAL INPUT */}
            {formData.issueType === "Payment Issue" && (
              <div className="animate-fade-in-down">
                <label className="block text-sm text-yellow-400 mb-1">
                  Transaction ID (Required for Payment Issues)
                </label>
                <input
                  required
                  value={formData.transactionId}
                  onChange={(e) =>
                    setFormData({ ...formData, transactionId: e.target.value })
                  }
                  className="w-full bg-yellow-900/20 border border-yellow-700/50 rounded-xl px-4 py-3 text-white outline-none focus:border-yellow-500"
                  placeholder="TXN-123456789"
                />
              </div>
            )}

            {/* REAL-TIME CHARACTER COUNTER */}
            <div>
              <div className="flex justify-between items-end mb-1">
                <label className="text-sm text-gray-400">
                  Describe your problem
                </label>
                <span
                  className={`text-xs font-mono ${formData.message.length > maxLength ? "text-red-500 font-bold" : "text-gray-500"}`}
                >
                  {formData.message.length} / {maxLength}
                </span>
              </div>
              <textarea
                required
                rows="4"
                maxLength={maxLength + 50}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className={`w-full bg-black/50 border rounded-xl px-4 py-3 text-white outline-none transition-all resize-none ${formData.message.length > maxLength ? "border-red-500 focus:border-red-500" : "border-gray-700 focus:border-blue-500"}`}
                placeholder="Explain the issue..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || formData.message.length > maxLength}
              className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-gray-600 text-white font-bold py-4 rounded-xl transition-all"
            >
              {isSubmitting ? "Submitting..." : "Send Feedback"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
