import React, { useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
const  dashBoard  = React.lazy(()=> import("./comp/dash"));
const  landing = React.lazy(()=>import("./comp/land"));

function App(){
  return (
    ///if u wnat add non movable topbar doo this 
     <div> 
      <appbar/>
    <BrowserRouter>
    <Routes>
      <Route path="./dash" element={<dashBoard/>} />
      <Route path="./land" element={<landing/>} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

function appbar(){
  const navigate=useNavigate();
  return(
    <div>
      <button onClick={()=>{
        navigate("/");
      }}>landing</button>
      <button onClick={()=>{
        navigate("./dashboard")
      }}>dashBoard</button>
    </div>
  )
}
export default App