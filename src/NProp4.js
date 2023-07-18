import React, { useEffect, useState } from 'react'

function NProp4(props) {
 var[students,setStudents]=useState([]);
 var[employee,setEmployee]=useState([]);
 var[doctors,setDoctor]=useState([]);

 useEffect(()=>{
  setStudents(props.sdata)
   setEmployee(props.edata)
   setDoctor(props.ddata)
 })
  return (
   <div>
      {console.log(students)}
      {console.log(props.sdata)}
      {console.log("navya")}
       {/* {students}{employee}{doctors}  */}
         {props.students.map((ele)=>{return<div>{ele.name}{ele.class}{ele.place}</div>})}
        {props.employee.map((ele)=>{return<div>{ele.name}{ele.class}{ele.place}</div>})}
        {props.doctors.map((ele)=>{return<div>{ele.name}{ele.job}{ele.sallary}</div>})}
    </div>  
  )
}
<p>hi hwkekie llo ehtoeheithe</p>

export default NProp4