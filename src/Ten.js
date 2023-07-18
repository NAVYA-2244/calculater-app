import React from "react";
class Ten extends React.Component{
   state={bgc:""}
   fun1=()=>{
      this.setState({bgc:"green"})
            }
 fun2=()=>{
   this.setState({bgc:"red"})
              }
 fun3=()=>{
    this.setState({bgc:"yellow"})
 }
 fun4=()=>{
    this.setState({bgc:"blue"})
 }
 fun5=()=>{
    this.setState({bgc:"pink"})
 }
    render(){
        return(
            <div style={{backgroundColor:this.state.bgc,height:"1000px",padding:"100px",barder:"5px solid black"}}>
                <h1>{this.state.bgc}</h1>
                <button  onClick={this.fun1}>green</button>
                <button  onClick={this.fun2}>red</button>
                <button onClick={this.fun3}>yellow</button>
                <button onClick={this.fun4}>blue</button>
                <button onClick={this.fun5}>pink</button>
            </div>
        )
    }
}
export default Ten;











































// import React from "react";
// class Ten extends React.Component{
//     state= { bgc:""}
//     fun1=()=>{
//         this.setState({bgc:"green"})
//        }
//        fun2=()=>{
//         this.setState({bgc:"red"})
//        }
//        fun3=()=>{
//         this.setState({bgc:"yellow"})
//        }
//        fun4=()=>{
//         this.setState({bgc:"orange"})
//        }
//        fun5=()=>{
//         this.setState({bgc:"blue"})
//        }
//        fun6=()=>{
//         this.setState({bgc:"pink"})
//        }
//     render(){
//         return(
//             <div style={{backgroundColor:this.state.bgc,height:"1000px",padding:"100px",barder:"5px solid black"}}>
//                 <h1>{this.state.bgc}</h1>
//             <button  onClick={this.fun1}>green</button>
//             <button  onClick={this.fun2}>red</button>
//             <button onClick={this.fun3}>yellow</button>
//             <button  onClick={this.fun4}>orange</button>
//             <button onClick={this.fun5}>blue</button>
//             <button onClick={this.fun6}>pink</button>
//             </div>
//         )
//     }
// }
// export default Ten;