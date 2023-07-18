import React from 'react'
import { useState,useEffect,useRef } from 'react'

function ABC() {
    const [inputvalue,setIputvalue]=useState("")
    const previousInputvalue=useRef("")
    useEffect(()=>{
        previousInputvalue.current=inputvalue;
    },[inputvalue])
  return (
    <center>
    <div>
         <input type="text"value={inputvalue}onChange={(e)=>{setIputvalue(e.target.value)}}></input>
         <h2>current value:{inputvalue}</h2>
         <h2>previous value:{previousInputvalue.current}</h2>
    </div>
    </center>
  )
}

export default ABC