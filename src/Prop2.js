import React from 'react'
import Prop3 from './Prop3'
function Prop2(props) {
  return (
    <div>
        <h1>second Component</h1>
        <Prop3 name={props.name}place={props.place}></Prop3>
      
    </div>
  )
}

export default Prop2