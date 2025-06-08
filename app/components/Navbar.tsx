"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import ThemeSwitcher from "./ThemeSwitcher";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { mode } = useTheme();

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2 h-20">
          {/* Left side - Logo/Name */}
          <div className="w-1/3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="inline-block"
            >
              <Link
                href="/"
                className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity"
              >
                Vaibhav
              </Link>
            </motion.div>
          </div>

          {/* Center - Theme Switcher */}
          <div className="w-1/3 flex justify-center">
            <AnimatePresence>
              {mode === "dark" && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <ThemeSwitcher />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right side - Theme Toggle and Profile Picture */}
          <div className="w-1/3 flex items-center justify-end gap-4">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Profile Picture */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link href="/about-me">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-border hover:border-accent/50 transition-colors shadow-lg">
                  <Image
                    src="/project-images/image.jpg"
                    alt="Vaibhav's Profile Picture"
                    fill
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bsW+tp0JcGjGEE7k/wBUcOAJSzMpEkJSqnM7h6fFLKNkynl5/K6rRlW70Vwp5OaxYLhrkx3oK7H6eGFhKb6pqO8VcLgP/9k="
                  />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
