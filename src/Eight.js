import React, { useState } from 'react'

function Eight() {
    var[name,setName]=useState("navya")
    var fun=()=>{
        setName("neethu")
    }
  return (
    <div>
        <h1>{name}</h1>
        <button onClick={fun}>onClick</button>
    </div>
  )
}

export default Eight