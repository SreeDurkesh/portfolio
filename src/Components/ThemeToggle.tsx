import { useEffect, useState, type JSX } from "react";

export default function ThemeToggle(): JSX.Element {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Load system or saved theme
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const initial = stored
      ? (stored as "light" | "dark")
      : systemPrefersDark
      ? "dark"
      : "light";

    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  // Update theme on toggle
  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark and light mode"
      aria-live="polite"
      className="
        focus-ring
        relative w-11 h-6 rounded-full
        flex items-center transition-colors duration-300
        bg-neutral-200 dark:bg-neutral-700
      "
    >
      {/* Knob */}
      <span
        className={`
          absolute w-5 h-5 rounded-full
          bg-white dark:bg-neutral-900 shadow
          transform transition-transform duration-300
          ${theme === "dark" ? "translate-x-5" : "translate-x-1"}
        `}
      />

      {/* Icons for screen readers only */}
      <span className="sr-only">
        {theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      </span>
    </button>
  );
}
