import React from 'react'
import { useEffect,useRef,useState } from 'react'
function XYZ() {
    var[inputvalue,setInutValue]=useState("")
    const count=useRef(0);
    useEffect(()=>{
            count.current=count.current+1
    })
  return (
    <center>
    <div>
         <input type='text'value={inputvalue} onChange={(e)=>{setInutValue(e.target.value)}}></input>
         <h1>render count:{count.current}</h1>
    </div>
    </center>
  )
}

export default XYZ