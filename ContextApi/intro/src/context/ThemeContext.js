import { createContext, useState, useEffect ,useContext} from "react";

const ThemeContext = createContext(); // context oluşturma

export const ThemeProvider = ({ children }) => {

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "Red");

  //useEffect
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const values = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};


//daha temiz kod için useCONTEXT
export const useTheme=()=> useContext(ThemeContext);

// export {useTheme}
//localStorage.getItem("theme")||"Red"  //GETİR YOKSA RED
//localStorage.setItem("theme", theme); // KEY:THEME VALUE:THEME
