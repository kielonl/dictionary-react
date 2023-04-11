import { useEffect, useState } from "react";
import { load, save } from "../services/storageManager";
import { StorageKey, Theme } from "../constants";
import { ThemeContext } from "./ThemeContext";

interface ThemeContextProviderProps {
  children: React.ReactNode;
}

const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
  children,
}) => {
  const storageTheme = load(StorageKey.Theme);
  const [theme, setTheme] = useState<Theme>(storageTheme || Theme.Light);
  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === Theme.Light ? Theme.Dark : Theme.Light
    );
  };

  useEffect(() => {
    document.documentElement.className = theme;
    save(StorageKey.Theme, theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
