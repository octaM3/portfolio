import { useTheme } from "../../../context/ThemeContext";
import IconButton from "../iconButton/IconButton";
import "./themeBtn.css"

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <IconButton className="mx-2" onClick={toggleTheme}>
      {theme === "light" ? (
        <i className="bi bi-moon"></i>
      ) : (
        <i className="bi bi-sun"></i>
      )}
    </IconButton>
  );
}