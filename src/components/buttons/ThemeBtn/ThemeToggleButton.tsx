import { useTheme } from "../../../context/ThemeContext";
import "./themeToggle.css";

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      className="theme-toggle mx-2"
      onClick={toggleTheme}
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      title={isDark ? "Modo claro" : "Modo oscuro"}
    >
      <i className={`bi bi-moon-stars theme-toggle-icon ${isDark ? "" : "theme-toggle-icon-active"}`} aria-hidden="true"></i>
      <i className={`bi bi-sun theme-toggle-icon ${isDark ? "theme-toggle-icon-active" : ""}`} aria-hidden="true"></i>
    </button>
  );
}
