import { useCallback, useEffect, useState } from "react";

const COLORS = { dark: "#231710", light: "#f1e6cd" };

export function useTheme() {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || "light"
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", COLORS[theme]);
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
