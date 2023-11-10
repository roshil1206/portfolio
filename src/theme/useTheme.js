import { useState } from "react";
import { getFromLS, saveToLS } from "./storage";
import data from "./schema.json";

export const useTheme = () => {
  const [theme, settheme] = useState(getFromLS("theme"));
  const setTheme = (theme) => {
    saveToLS("theme", JSON.stringify(theme));
    settheme(theme);
  };

  const getThemes = () => {
    return data;
  };

  return { theme, setTheme, getThemes };
};
