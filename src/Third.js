function Third(params) {
    var std={name:"navya",place:"hyd",marks:"88"}
    var studens=[{name:"navya",place:"hyd",marks:"88"},
    {name:"navya",place:"hyd",marks:"88"},
    {name:"navya",place:"hyd",marks:"88"},
    {name:"navya",place:"hyd",marks:"88"},
    {name:"navya",place:"hyd",marks:"88"},
   {name:"navya",place:"hyd",marks:"88"},
       ]

    return(
        <div>
           <h1>{std.name}</h1>
           {studens.map((ele)=>{return <div><p>{ele.name}</p><p>{ele.place} </p><p>{ele.marks}</p></div>

           })}
        </div>
    )
}
export default Third