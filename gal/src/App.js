import React from "react";
import { BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "./Home";
import Gallery from "./Gallery";
function App(){
    return(
        <BrowserRouter>
    <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route path="Gallery" element={<Gallery/>}/>
    </Routes>
    </BrowserRouter>
        )
}
export default App;