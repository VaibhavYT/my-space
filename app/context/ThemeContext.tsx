"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

// ============================================================================
// THEME CONFIGURATION
// To add a new theme, add its name here. Then, define its color palette
// in `app/globals.css` using a `[data-theme='your-theme-name']` selector.
// ============================================================================
export const darkThemes = [
  "midnight-glow",
  "dracula",
  "emerald-night",
  "neon-mirage",
  "cosmic-violet",
] as const;

export type ThemeMode = "light" | "dark";
export type DarkThemeName = (typeof darkThemes)[number];

interface ThemeContextType {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  theme: DarkThemeName;
  setTheme: (theme: DarkThemeName) => void;
  toggleTheme: () => void;
  isLoading: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<ThemeMode>("light");
  const [theme, setThemeState] = useState<DarkThemeName>("midnight-glow");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get theme from localStorage
    const savedMode = localStorage.getItem("theme-mode") as ThemeMode;
    const savedTheme = localStorage.getItem("theme-name") as DarkThemeName;

    // System preference for initial mode if nothing is saved
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialMode = savedMode || (systemPrefersDark ? "dark" : "light");
    const initialTheme =
      savedTheme && darkThemes.includes(savedTheme)
        ? savedTheme
        : "midnight-glow";

    setModeState(initialMode);
    setThemeState(initialTheme);

    // Apply classes to the documentElement
    document.documentElement.classList.toggle("dark", initialMode === "dark");
    if (initialMode === "dark") {
      document.documentElement.setAttribute("data-theme", initialTheme);
    }

    setIsLoading(false);
  }, []);

  const setMode = useCallback((newMode: ThemeMode) => {
    setModeState(newMode);
    localStorage.setItem("theme-mode", newMode);
    document.documentElement.classList.toggle("dark", newMode === "dark");
    // When switching to dark mode, ensure a theme is set.
    // When switching to light, remove the data-theme attribute.
    if (newMode === "dark") {
      const currentTheme = localStorage.getItem("theme-name") as DarkThemeName;
      document.documentElement.setAttribute(
        "data-theme",
        currentTheme || "midnight-glow"
      );
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, []);

  const setTheme = useCallback(
    (newTheme: DarkThemeName) => {
      setThemeState(newTheme);
      localStorage.setItem("theme-name", newTheme);
      if (mode === "dark") {
        document.documentElement.setAttribute("data-theme", newTheme);
      }
    },
    [mode]
  );

  const toggleTheme = useCallback(() => {
    setMode(mode === "light" ? "dark" : "light");
  }, [mode, setMode]);

  return (
    <ThemeContext.Provider
      value={{ mode, setMode, theme, setTheme, toggleTheme, isLoading }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
