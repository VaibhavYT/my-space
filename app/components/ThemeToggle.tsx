"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useTheme } from "../context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = () => {
  const { mode, toggleTheme, isLoading } = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!buttonRef.current || !backgroundRef.current) return;

    const button = buttonRef.current;
    const background = backgroundRef.current;

    const handleMouseEnter = () => {
      gsap.to(button, {
        scale: 1.1,
        rotation: 10,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(background, {
        scale: 1.2,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        scale: 1,
        rotation: 0,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(background, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleThemeToggle = () => {
    // Add a satisfying click animation
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: 0.9,
        duration: 0.1,
        ease: "power2.out",
        yoyo: true,
        repeat: 1,
      });
    }
    toggleTheme();
  };

  if (isLoading) {
    return (
      <div className="w-12 h-12 rounded-full bg-secondary animate-pulse" />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
        delay: 0.5,
      }}
      className="relative"
    >
      {/* Animated background glow */}
      <div
        ref={backgroundRef}
        className={`absolute inset-0 rounded-full blur-lg transition-colors duration-500 ${
          mode === "dark" ? "bg-accent/30" : "bg-yellow-400/30"
        }`}
      />

      {/* Main button */}
      <motion.button
        ref={buttonRef}
        onClick={handleThemeToggle}
        whileTap={{ scale: 0.9 }}
        className={`relative w-12 h-12 rounded-full border-2 backdrop-blur-sm transition-all duration-500 shadow-lg overflow-hidden ${
          mode === "dark"
            ? "bg-secondary/80 border-accent/50 hover:border-accent"
            : "bg-card/80 border-yellow-400/50 hover:border-yellow-400"
        }`}
      >
        {/* Rotating background gradient */}
        <motion.div
          className={`absolute inset-0 rounded-full transition-opacity duration-500 ${
            mode === "dark"
              ? "bg-gradient-to-br from-accent/20 to-purple-600/20"
              : "bg-gradient-to-br from-yellow-400/20 to-orange-400/20"
          }`}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Icon container */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <AnimatePresence mode="wait">
            {mode === "dark" ? (
              <motion.div
                key="moon"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <FiMoon className="w-5 h-5 text-accent" />
              </motion.div>
            ) : (
              <motion.div
                key="sun"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <FiSun className="w-5 h-5 text-yellow-500" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Sparkle effects */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 rounded-full ${
                mode === "dark" ? "bg-accent" : "bg-yellow-400"
              }`}
              style={{
                top: `${20 + Math.sin((i * 60 * Math.PI) / 180) * 15}%`,
                left: `${50 + Math.cos((i * 60 * Math.PI) / 180) * 15}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </motion.button>
    </motion.div>
  );
};

export default ThemeToggle;
