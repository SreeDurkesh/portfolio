export type Theme = "light" | "dark";

/**
 * Reads the current theme from:
 * 1. localStorage
 * 2. system preference fallback
 */
export function getInitialTheme(): Theme {
  const stored = localStorage.getItem("theme") as Theme | null;

  if (stored === "light" || stored === "dark") {
    return stored;
  }

  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return systemPrefersDark ? "dark" : "light";
}

/**
 * Applies a theme to document root and saves it.
 */
export function applyTheme(theme: Theme): void {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  localStorage.setItem("theme", theme);
}

/**
 * Toggles theme between light and dark.
 */
export function toggleTheme(current: Theme): Theme {
  return current === "light" ? "dark" : "light";
}
