import React from 'react'

function Header({increment}) {

console.log("Header component Re-rendered !");


  return (

    <div>
      <h3>Header</h3>
      <code>
        {JSON.stringify(increment)}
      </code>
  <button onClick={increment}>increase</button>


    </div>



  )
}

export default React.memo(Header)