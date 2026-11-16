import { useCallback, useEffect, useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || "light"
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    // Browser chrome follows whatever --paper is for the active theme
    const paper = getComputedStyle(document.documentElement).getPropertyValue("--paper").trim();
    if (paper) {
      document.querySelector('meta[name="theme-color"]')?.setAttribute("content", paper);
    }
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }, []);

  // Persist only when the visitor makes a choice, so first visits follow their system setting.
  const choose = useCallback(() => {
    const next = theme === "dark" ? "light" : "dark";
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage can be blocked; the theme still changes for this visit */
    }
    toggle();
  }, [theme, toggle]);

  return { theme, toggleTheme: choose };
}
