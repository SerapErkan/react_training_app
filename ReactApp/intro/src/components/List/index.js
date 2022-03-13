import React, { useState } from "react";

function List({ contacts }) {

  const[filterText,setfilterText]=useState('');

const filtered=contacts.filter((item)=>{
  return Object.keys(item).some((key)=>{
   return  item[key]
    .toString()
    .toLowerCase().includes(filterText.toLowerCase());

  });


});
console.log(filtered);


  return (
    <>
    <br/>
    <input placeholder="Filter contact" value={filterText} onChange={(e)=>setfilterText(e.target.value) }/>

      {filtered.map((m, i) => (
     
<li key={i}>{m.fullname}--{m.number}</li>



        
      ))}
    </>
  );
}

export default List;
