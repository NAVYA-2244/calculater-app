function Five (props){
    return(
        <div style={{backgroundColor:props.bgc,width:props.w+"px",border: props.brd}}>
           <h1>{props.name}{props.place}{props.marks}</h1>
           
        </div>
    )
}
export default Five