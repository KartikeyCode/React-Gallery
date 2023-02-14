import React from "react";
import "./Home.css"
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'

let allData = []
function Home() {
  const[formData,setFormData] = React.useState({iName:"",iURL:""})
  function handleChange(event){
    event.preventDefault();
    setFormData(prevFormData=>{return{...prevFormData,[event.target.name]:event.target.value}})
  }
  function handleSubmit(event){
    event.preventDefault();
    allData.push(formData)
    console.log(allData)
    }
  return (
    <>
    <div className="Center"> 
      <h1>Welcome to the Gallery</h1>
    </div>
    <div className="Center">
      <div className="FormDiv">
      <form className="Form" onSubmit={handleSubmit}>
        <div className="PDBTM">
      <input className="FormText" type="text" placeholder="Image Name" onChange={handleChange} value={formData.iName} name="iName"></input>
        </div>
        <div className="PDBTM">
      <input className="FormText" type="text" placeholder="Image URL" onChange={handleChange} value={formData.iURL} name="iURL"></input>
        </div>
      <div>
      <input className="FormText Button" type="submit"></input>
      </div>
      </form>
      </div>
      </div>
      <div className="Center Align">
        <Link to="/Gallery" className="LinkG">
        <div className="GalleryButton">
        View Gallery
        </div>
        </Link>
      </div>
    </>
  )
}

export default Home;
