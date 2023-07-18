import React, { useState } from 'react'
import"./Calculater.css"
function Calculater() {
    var [cal,setcal]=useState("")
   var sum=(e)=>{
        var intputID=document.getElementById("inputData").value
        var numberedResult=eval(intputID)

        setcal(numberedResult)
        console.log(cal);
    }
    var sum2=()=>{
        setcal(cal.slice(0,cal.length-1))
    }
    var cl=()=>{
    document.getElementById("clr").style.backgroundColor="white"
    }
   var cl2=()=>{
    document.getElementById("clr").style.backgroundColor="black"
   }

  return (<div><center>
    <div id="clr"style={{width:"300px",height:"300px",borderColor:"isque",textAlign:"center"}}>
        <input type="text" name="input" id="inputData"value={cal} style={{height:"50px",width:"300px"}}></input><br></br>
        <button onClick={sum} style={{height:"50px",width:"90px"}} class="btn btn-info">=</button>
        <button onClick={()=>{setcal("")}}style={{height:"50px",width:"50px"}} class="btn btn-info">clear</button>
        <button onClick={sum2} style={{height:"50px",width:"50px"}} class="btn btn-info">del</button>
        <button onClick={cl}>w</button>
        <button onClick={cl2}>b</button><br></br>

         <button onClick={()=>{setcal(cal+"0")}} style={{height:"50px",width:"50px"}}>0</button>
         <button onClick={()=>{setcal(cal+"1")}} style={{height:"50px",width:"50px"}}>1</button>
         <button onClick={()=>{setcal(cal+"2")}} style={{height:"50px",width:"50px"}}>2</button>
         <button onClick={()=>{setcal(cal+"3")}} style={{height:"50px",width:"50px"}}>3</button>
         <button onClick={()=>{setcal(cal+"4")}} style={{height:"50px",width:"50px"}}>4</button>
         <button onClick={()=>{setcal(cal+"5")}} style={{height:"50px",width:"50px"}}>5</button>
         <button onClick={()=>{setcal(cal+"6")}} style={{height:"50px",width:"50px"}}>6</button>
         <button onClick={()=>{setcal(cal+"7")}} style={{height:"50px",width:"50px"}}>7</button>
         <button onClick={()=>{setcal(cal+"8")}} style={{height:"50px",width:"50px"}}>8</button>
         <button onClick={()=>{setcal(cal+"9")}} style={{height:"50px",width:"50px"}}>9</button>

                <button onClick={()=>setcal(cal+"+")} style={{height:"50px",width:"50px"}}>+</button>
                <button onClick={()=>setcal(cal+"-")} style={{height:"50px",width:"50px"}}>-</button>
                <button onClick={()=>setcal(cal+"*")} style={{height:"50px",width:"50px"}}>*</button>
                <button onClick={()=>setcal(cal+"/")} style={{height:"50px",width:"50px"}}>/</button>
                <button onClick={()=>setcal(cal+"%")} style={{height:"50px",width:"50px"}}>%</button>
    </div>
    </center></div>
  )
}

export default Calculater;
