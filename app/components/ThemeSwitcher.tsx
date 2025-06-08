"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTheme, darkThemes, DarkThemeName } from "../context/ThemeContext";
import { FiCheck } from "react-icons/fi";
import { useState } from "react";

// Tooltip for theme names
const Tooltip = ({ text }: { text: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 5 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 5 }}
    className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-700 text-white text-xs rounded-md shadow-lg"
  >
    {text.replace("-", " ")}
  </motion.div>
);

const themeColors: Record<DarkThemeName, { bg: string; accent: string }> = {
  "midnight-glow": { bg: "#0f172a", accent: "#38bdf8" },
  dracula: { bg: "#1e1f29", accent: "#ff79c6" },
  "emerald-night": { bg: "#0e141b", accent: "#10b981" },
  "neon-mirage": { bg: "#111111", accent: "#e11d48" },
  "cosmic-violet": { bg: "#1a1a2e", accent: "#8b5cf6" },
};

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [hoveredTheme, setHoveredTheme] = useState<DarkThemeName | null>(null);

  return (
    <div className="flex items-center gap-3 p-2 bg-gray-900/0 rounded-full">
      {darkThemes.map((themeName) => (
        <motion.div
          key={themeName}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          className="relative"
          onMouseEnter={() => setHoveredTheme(themeName)}
          onMouseLeave={() => setHoveredTheme(null)}
        >
          <AnimatePresence>
            {hoveredTheme === themeName && <Tooltip text={themeName} />}
          </AnimatePresence>
          <button
            onClick={() => setTheme(themeName)}
            className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 border-2"
            style={{
              backgroundColor: themeColors[themeName].bg,
              borderColor:
                theme === themeName
                  ? themeColors[themeName].accent
                  : "rgba(255, 255, 255, 0.2)",
            }}
            aria-label={`Select ${themeName} theme`}
          >
            <AnimatePresence>
              {theme === themeName && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <FiCheck
                    className="w-4 h-4"
                    style={{ color: themeColors[themeName].accent }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </motion.div>
      ))}
    </div>
  );
};

export default ThemeSwitcher;
