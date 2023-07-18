import React from 'react'
import { useContext } from 'react'
import {valueContext} from "./Test1";
function Test4() {
    const value=useContext(valueContext)
  return (
    <div>
        {console.log(value)}
      <h1>{value}</h1>
    </div>
  )
}

export default Test4;