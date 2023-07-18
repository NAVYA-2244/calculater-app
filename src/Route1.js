import React from 'react'
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom'
import Route2 from './Route2'
import Route3 from './Route3'
import Route4 from './Route4'
function Route1() {
  return (
    <div>
        <BrowserRouter>
            <Link to="/second">second</Link><br></br>
            <Link to="/third">third</Link><br></br>
            <Link to="/four">four</Link><br></br>
        <Routes>
            <Route path="/second"element={<Route2></Route2>}></Route>
            <Route path="/third"element={<Route3></Route3>}></Route>
            <Route path="/four"element={<Route4></Route4>}></Route>
        </Routes>
        
        </BrowserRouter>
    </div>
  )
}

export default Route1