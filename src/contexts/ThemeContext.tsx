import { createContext } from "react";
import { Theme } from "../constants";

export const ThemeContext = createContext({
  theme: Theme.Light,
  toggleTheme: () => {},
});
