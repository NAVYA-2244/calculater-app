import React from 'react'
import Prop4 from './Prop4'

function Prop3(props) {
  return (
    <div>
        <h1>third Component</h1>
        <Prop4 name={props.name}place={props.place}></Prop4>
        
    </div>
  )
}

export default Prop3