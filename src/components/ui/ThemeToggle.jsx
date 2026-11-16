import { SunIcon, MoonIcon } from "./Icons";
import styles from "./ThemeToggle.module.css";

export const ThemeToggle = ({ theme, onToggle }) => {
  const toDark = theme === "light";
  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={onToggle}
      aria-label={toDark ? "Switch to dark theme" : "Switch to light theme"}
      title={toDark ? "Switch to dark theme" : "Switch to light theme"}
    >
      {toDark ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};
