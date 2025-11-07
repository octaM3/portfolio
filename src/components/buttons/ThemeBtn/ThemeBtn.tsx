import { useTheme } from "../../../context/ThemeContext";

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: "var(--primary-color)",
        color: "var(--text-color)",
        border: "none",
        borderRadius: "8px",
        padding: "8px 12px",
        cursor: "pointer",
      }}
    >
      {theme === "light" ? "🌙 Modo oscuro" : "☀️ Modo claro"}
    </button>
  );
}