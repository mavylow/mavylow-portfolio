import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(null);

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(null);
  const [loading, setLoading] = useState(true);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "day" ? "night" : "day"
    );
  };

  useEffect(() => {
    if (theme !== null) {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    } else {
      setTheme("day");
    }
    setLoading(false);
  }, []);

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, loading }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
