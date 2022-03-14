import {useContext} from 'react'//usecontext tanımı 
import ThemeContext from "../context/ThemeContext" //KULLANMAK İSTEDİGİMİZ YERİN(CONTEXT)  İMPORTU




function Button() {


    const data=useContext(ThemeContext); // PARAMETRE OLARAK THEME CONTEXT GEÇTİK 
    console.log(data);



  return (


    <div>Button components --{data}</div>
  )
}

export default Button