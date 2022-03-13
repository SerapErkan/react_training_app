import "./App.css";
import Header from "./components/Header";
import { useState, useMemo ,useCallback} from "react";

function App() {
  const [number, setNumber] = useState(0);

  // const data = useMemo(() => {
  //   return { name: "mehmet"};
  // }, []);



  // const data = useMemo(() => {
  //   return { number};
  // }, [number]);



// const increment=useCallback(()=>{
// setNumber(number + 1)
// },[number]);

//number degeri değiştikce  tekrar tekrar hesaplandıgından dolayı gereksiz render eder
//[number] vermezsek  ilk deger 0 ikinci deger 1 sonra  degişmez...


const increment=useCallback(()=>{
setNumber((prevState)=>prevState+1)
},[]);


  return (
    <div className="App">
      <Header increment={increment} />

      <hr />

      <h1>{number}</h1>
      {/* <button onClick={() => setNumber(number + 1)}>increase</button> */} 
      {/* arttıra işlemini Header da yapalım setNumber ise prop olarak döndüreli */}

    </div>
  );
}

export default App;

//STATE DEĞİŞİNCE BAŞTAN RENDER EDİLİR
//GEREKSİZ RENDERLARIN ÖNÜNE GEÇMEK İÇİN


//1-React.memo(Header) proplar değişirse render edilir

// burda {}==={} false  objenin bellek üzerindeki referansları farklıdır durum böyle oldugundan js..
//Prop değişti gibi görünür ve tekrar gereksiz render edilir
//BU Durumlarda  useMemo hooksu kullanılır

/*
        USEMEMO
const memo = useMemo(() => {
  return { number};
}, [number]);

*/// [number] değiştiginde render edilir



