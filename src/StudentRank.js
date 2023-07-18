import React, { useState } from 'react'

function StudentRank() {
    var [mark,setMark]=useState("")
    var[allmark,setAllmark]=useState(0)
    var [avg,setAvg]=useState()
var marks=()=>{
var mark1=document.getElementById("mark").value
var mark2=document.getElementById("mark2").value
var mark3=document.getElementById("mark3").value
var mark4=document.getElementById("mark4").value

 var markv=Math.trunc(mark1)
 var markv1=Math.trunc(mark2)
 var markv2=Math.trunc(mark3)
 var markv3=Math.trunc(mark4)


 var total=markv+markv1+markv2+markv3;
 setAvg(total/3)
 if(markv<28||markv1<28||markv2<28||markv3<28){
    setMark("fail")
 }
 else{
       
    if(avg>=80){
    setMark("a")
    }
  else if(avg>=60){
    setMark("b")
  }
  else if(avg>=45){
    setMark("c")
  }
  else if(avg>=35){
    setMark("d")
  }
 else{setMark("fail")}}
 setAllmark(total)
}
  return (<center>
    <div>
        <h4>subjects gradding</h4>
        <input type="text"placeholder='telugu marks' id="mark" onChange={marks} class="btn btn-info"></input><br></br><br></br>
        <input type='text'placeholder="english marks" id="mark2" onChange={marks} class="btn btn-info"></input><br></br><br></br>
        <input type='text'placeholder='hindhi marks' id="mark3" onChange={marks} class="btn btn-info" ></input><br></br><br></br>
        <input type='text'placeholder='maths marks' id="mark4" onChange={marks} class="btn btn-info"></input><br></br><br></br><br></br><br></br>
        grade:<input style={{width:"50px"}}value={mark} class="btn btn-outline-success"></input>
        total:<input style={{width:"50px"}}value={allmark} class="btn btn-outline-success"></input>
        AVG:<input style={{width:"50px"}}value={avg} class="btn btn-outline-success"></input>
    </div>
    </center>
  )
}

export default StudentRank