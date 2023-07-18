import React from "react";

class Nine extends React.Component{
    state={name:"navaneetha"}
 fun=()=>{
    this.setState({name:"praharshitha"})
 }
    render(){
        return(
            <div>
                 <h1>{this.state.name}</h1>
                 <button onClick={this.fun}>click</button>
            </div>
        )
    }
}
export default Nine;