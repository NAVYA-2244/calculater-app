import React from 'react'
import Display from './Display'


function Info() {
var students=[{name:"navya",class:"6",place:"mbnr"},
                  {name:"navya",class:"6",place:"mbnr"},
                  {name:"navya",class:"6",place:"mbnr"}]
var employee=[{name:"deepu",class:"6",place:"mbnr"},
             {name:"deepu",class:"6",place:"mbnr"},
             {name:"deepu",class:"6",place:"mbnr"}]
var doctors=[{name:"varsha",job:"doctors",sallary:"100000"},
             {name:"varsha",job:"doctors",sallary:"100000"},
            {name:"varsha",job:"doctors",sallary:"100000"}]
  return (
    <div>
         <Display sdata={students} edata={employee} ddata={doctors}></Display>
    </div>
  )
}

export default Info