import { useEffect, useState } from "react";
import { Font, StorageKey } from "../constants";
import { load, save } from "../services/storageManager";
import { FontContext } from "./FontContext";

interface FontContextProviderProps {
  children: React.ReactNode;
}

const FontContextProvider: React.FC<FontContextProviderProps> = ({
  children,
}) => {
  const storageFont = load(StorageKey.Font);
  const [font, setFont] = useState<Font>(storageFont || Font.Sans);

  useEffect(() => {
    save(StorageKey.Font, font);
  }, [font]);

  return (
    <FontContext.Provider value={{ font, setFont }}>
      {children}
    </FontContext.Provider>
  );
};

export default FontContextProvider;
