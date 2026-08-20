"use client";
import { useState, useRef, useEffect } from "react";

export default function LanguageSelector() {
  const [selectedLang, setSelectedLang] = useState("en");
  const [isOpen, setIsOpen] = useState(false);

  // Naya Feature: Bahar click karne par menu band karne ke liye
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Available Languages for RoadMitra
  const languages = [
    { code: "en", name: "English", native: "English", icon: "A" },
    { code: "hi", name: "Hindi", native: "हिन्दी", icon: "अ" },
    { code: "mr", name: "Marathi", native: "मराठी", icon: "म" },
    { code: "ml", name: "Malayalam", native: "മലയാളം", icon: "മ" },
    { code: "ur", name: "Urdu", native: "اردو", icon: "ع" },
  ];

  const handleLanguageChange = (lang) => {
    setSelectedLang(lang.code);
    setIsOpen(false);

    // Fake Alert for testing
    alert(`✅ UI Language updated to: ${lang.native}`);
  };

  const currentLang =
    languages.find((l) => l.code === selectedLang) || languages[0];

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Dropdown Button - RoadMitra Teal Theme */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-3 px-4 py-2.5 rounded-2xl transition-all shadow-lg backdrop-blur-md border ${
          isOpen
            ? "bg-gray-800 border-teal-500"
            : "bg-gray-900/80 border-gray-700 hover:border-gray-500"
        }`}
      >
        <span className="text-teal-400 font-extrabold bg-teal-900/40 w-7 h-7 flex items-center justify-center rounded-full text-sm">
          {currentLang.icon}
        </span>
        <span className="font-semibold text-sm text-gray-100 tracking-wide">
          {currentLang.native}
        </span>
        <span
          className={`text-gray-400 text-xs transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
        >
          ▼
        </span>
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute right-0 mt-3 w-52 bg-gray-900/95 backdrop-blur-xl border border-gray-700 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden z-50 transition-all duration-200 origin-top-right ${
          isOpen
            ? "opacity-100 scale-100 visible"
            : "opacity-0 scale-95 invisible"
        }`}
      >
        <div className="p-2">
          <p className="text-[10px] text-gray-500 font-bold px-3 pt-2 pb-2 uppercase tracking-widest">
            Select Language
          </p>
          <div className="space-y-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang)}
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all text-left group ${
                  selectedLang === lang.code
                    ? "bg-teal-600/10 text-teal-400 border border-teal-500/20"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white border border-transparent"
                }`}
              >
                <span
                  className={`w-8 h-8 flex items-center justify-center rounded-full text-sm transition-colors ${
                    selectedLang === lang.code
                      ? "bg-teal-500/20 text-teal-400 font-bold"
                      : "bg-gray-800 group-hover:bg-gray-700 text-gray-400"
                  }`}
                >
                  {lang.icon}
                </span>

                <div className="flex-1">
                  <p
                    className={`text-sm ${selectedLang === lang.code ? "font-bold" : "font-medium"}`}
                  >
                    {lang.native}
                  </p>
                  <p className="text-xs opacity-50 font-normal mt-0.5">
                    {lang.name}
                  </p>
                </div>

                {/* Naya Feature: Active Checkmark */}
                {selectedLang === lang.code && (
                  <span className="text-teal-400 text-lg font-bold">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
