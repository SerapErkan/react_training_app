// import {useContext} from 'react'//usecontext tanımı 
// import ThemeContext from "../context/ThemeContext" //KULLANMAK İSTEDİGİMİZ YERİN(CONTEXT)  İMPORTU
import {useTheme} from "../context/ThemeContext"



function Button() {


 //const {theme,setTheme}=useContext(ThemeContext); // PARAMETRE OLARAK THEME CONTEXT GEÇTİK 
   const {theme,setTheme}=useTheme();
  return (

    <div>Button components
      <h3>Active Theme:{theme}</h3>

      <button onClick={()=>setTheme(theme==="Dark"?"Red":"Dark")}>Change Theme </button>

       </div>
  )
}

export default Button