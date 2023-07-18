import React from 'react'
import NProp4 from './NProp4'

function NProp1() {
    var students=[{name:"navya",class:"6",place:"mbnr"},
    {name:"navya",class:"6",place:"mbnr"},
    {name:"navya",class:"6",place:"mbnr"}]


  return (
    <div>
        {/* {std.map((ele)=>{return<div>{ele.name}{ele.class}{ele.place}
        </div>})} */}
        <NProp4 sdata={students}></NProp4>
    </div>
  )
}

export default NProp1