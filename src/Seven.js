  import React from "react";

  class Seven extends React.Component{
    render(){
        return(
            <div style={{backgroundColor:this.props.bgc,width:this.props.w+"px",height:this.props.h+"px",border:this.props.brd}}>
              <h1>{this.props.name} {this.props.place} {this.props.marks}</h1>
            </div>
        )
    }
  }
  export default Seven;