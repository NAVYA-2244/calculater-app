import React from 'react'
import NProp4 from './NProp4'
function NProp2() {
    var employee=[{name:"deepu",class:"6",place:"mbnr"},
    {name:"deepu",class:"6",place:"mbnr"},
    {name:"deepu",class:"6",place:"mbnr"}]
  return (
    <div>
       {/* {emp.map((ele)=>{return<div>{ele.name}{ele.class}{ele.place}</div>})}
          */}
          <NProp4 edata={employee}></NProp4>
    </div>
  )
}

export default NProp2