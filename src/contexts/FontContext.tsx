import { createContext } from "react";
import { Font } from "../constants";

export const FontContext = createContext({
  font: Font.Sans,
  setFont: (key: Font) => {},
});
