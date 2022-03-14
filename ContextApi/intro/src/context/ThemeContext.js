import { createContext, useState } from "react";

const ThemeContext = createContext(); // context oluşturma

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("Red");

  const values = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;
