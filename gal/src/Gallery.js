import React from "react";
import BackIcon from "./BackArrow.png"
import "./Home.css"
import { Link } from "react-router-dom";
function Gallery(){
    return(
        <div>
            <div className="Space">
                <Link to="/" className="LinkE">
            <img className="Back" src={BackIcon}></img>
                </Link>
            <h1 className="Hero">My Gallery</h1>
            </div>
        </div>
    )
}
export default Gallery;