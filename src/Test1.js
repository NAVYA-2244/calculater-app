import React, { createContext } from "react";
import Test2 from "./Test2";
export var valueContext=createContext()
function Test1() {
    var text="hello world";
    return(
 <valueContext.Provider value={text}>
       <div>
          <h1>first component</h1>
          <Test2/>
       </div>
</valueContext.Provider>
    )
}
export default Test1;