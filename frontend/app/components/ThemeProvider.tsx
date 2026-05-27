"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

// All CSS custom property values for light mode.
// Dark mode reverts by removing the inline overrides, falling back to @theme.
export const LIGHT_VARS: Record<string, string> = {
  "--color-background": "#f4f0eb",
  "--color-surface": "#f4f0eb",
  "--color-surface-dim": "#e8e3dc",
  "--color-surface-bright": "#ffffff",
  "--color-surface-container-lowest": "#ede8e2",
  "--color-surface-container-low": "#f0ebe4",
  "--color-surface-container": "#e8e2db",
  "--color-surface-container-high": "#ddd8d0",
  "--color-surface-container-highest": "#d5cfc7",
  "--color-surface-variant": "#d5cfc7",
  "--color-surface-tint": "#5a5a5a",
  "--color-primary": "#2a2a2a",
  "--color-primary-fixed": "#1a1a1a",
  "--color-primary-fixed-dim": "#2a2a2a",
  "--color-primary-container": "#d5cfc7",
  "--color-inverse-primary": "#a0a0a0",
  "--color-on-primary": "#f4f0eb",
  "--color-on-primary-fixed": "#f4f0eb",
  "--color-on-primary-fixed-variant": "#e0d8cf",
  "--color-on-primary-container": "#5a5550",
  "--color-secondary": "#2f2a28",
  "--color-secondary-fixed": "#1a1a1a",
  "--color-secondary-fixed-dim": "#3a3a3a",
  "--color-secondary-container": "#d5cfc7",
  "--color-on-secondary": "#f4f0eb",
  "--color-on-secondary-fixed": "#f4f0eb",
  "--color-on-secondary-fixed-variant": "#e0d8cf",
  "--color-on-secondary-container": "#5a5550",
  "--color-tertiary": "#3a3a3a",
  "--color-tertiary-fixed": "#1a1a1a",
  "--color-tertiary-fixed-dim": "#3a3a3a",
  "--color-tertiary-container": "#d5cfc7",
  "--color-on-tertiary": "#f4f0eb",
  "--color-on-tertiary-fixed": "#f4f0eb",
  "--color-on-tertiary-fixed-variant": "#e0d8cf",
  "--color-on-tertiary-container": "#5a5550",
  "--color-on-surface": "#1a1a1a",
  "--color-on-surface-variant": "#5a5550",
  "--color-on-background": "#1a1a1a",
  "--color-inverse-surface": "#1a1a1a",
  "--color-inverse-on-surface": "#f4f0eb",
  "--color-outline": "#8a8480",
  "--color-outline-variant": "#c5bfbb",
  "--color-error": "#ba1a1a",
  "--color-error-container": "#ffdad6",
  "--color-on-error": "#ffffff",
  "--color-on-error-container": "#410002",
  // Non-@theme vars used by glass-panel, mega-menu-gradient, body
  "--banc-body-bg": "#ede8e2",
  "--banc-body-color": "#1a1a1a",
  "--banc-glass-bg": "rgba(244,240,235,0.85)",
  "--banc-mega-start": "#f4f0eb",
  "--banc-mega-end": "rgba(244,240,235,0.98)",
};

export function applyTheme(t: Theme) {
  const root = document.documentElement;
  if (t === "light") {
    Object.entries(LIGHT_VARS).forEach(([k, v]) => root.style.setProperty(k, v));
  } else {
    Object.keys(LIGHT_VARS).forEach((k) => root.style.removeProperty(k));
  }
}

const ThemeContext = createContext<{ theme: Theme; toggleTheme: () => void }>({
  theme: "dark",
  toggleTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "dark";
    return (localStorage.getItem("banc-theme") as Theme | null) ?? "dark";
  });

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      localStorage.setItem("banc-theme", next);
      applyTheme(next);
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
