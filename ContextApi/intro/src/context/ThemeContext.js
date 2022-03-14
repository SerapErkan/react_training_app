import { createContext } from "react";

const ThemeContext = createContext(); // context oluşturma




export const ThemeProvider =({children})=>{

    return <ThemeContext.Provider value="dark">{children}</ThemeContext.Provider>
}





export default ThemeContext;
