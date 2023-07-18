import React from 'react'
import NProp4 from './NProp4'
function NProp3() {
    var doctors=[{name:"varsha",job:"doctors",sallary:"100000"},
             {name:"varsha",job:"doctors",sallary:"100000"},
            {name:"varsha",job:"doctors",sallary:"100000"}]
  return (
    <div>
        {/* {doc.map((ele)=>{return<div>{ele.name}{ele.job}{ele.sallary}</div>
    })} */}
      <NProp4 ddata={doctors}></NProp4>
    </div>
  )
}

export default NProp3