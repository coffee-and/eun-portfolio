import { useLayoutEffect, useState } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "eun-portfolio-theme";

const getInitialTheme = (): Theme => {
  const savedTheme = window.localStorage.getItem(STORAGE_KEY);

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => setTheme(nextTheme)}
      aria-label={`${nextTheme === "dark" ? "다크" : "라이트"} 테마로 전환`}
      title={`${nextTheme === "dark" ? "Dark" : "Light"} mode`}
    >
      <span className="theme-toggle__mark" aria-hidden="true">
        {theme === "dark" ? "☼" : "◐"}
      </span>
      <span>{nextTheme}</span>
    </button>
  );
};

export default ThemeToggle;
