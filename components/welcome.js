import React, { useState } from "react";
function Welcome() {
  const [message, setMessage]=useState("Hello");
  const handleClick=()=>{
    setMessage((prev)=>(prev=="Hello"?"Welcome Back":"Hello"));
  };
  return (
    <div style={{ textAlign:"center",marginTop:"50px"}}>
      <h2>{message}</h2>
      <button onClick={handleClick}>Toggle Message</button>
    </div>
  );
}
export default Welcome;
