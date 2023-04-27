import React,{ components }  from "react";
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import Login from "./user/Login";
import Signup from "./user/Signup";
import "./App.css";

function App(){
  return (
    <div className="App">
      <BrowserRouter> 
       <Routes>
        <Route path="/" element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
       </Routes>
       </BrowserRouter>
    </div>
  );
}





export default App;
