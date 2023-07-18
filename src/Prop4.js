import React from 'react'
import Prop1 from './Prop1'
function Prop4(props) {
  return (
    <div>
        <h1>fourth component</h1>
        <h1>{props.name} {props.place}</h1>
    </div>
  )
}

export default Prop4
