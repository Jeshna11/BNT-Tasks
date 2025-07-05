import React,{useState} from "react";
function Counter() {
  const [count, setCount]=useState(0); 
  const handleClick=()=>{
    setCount(count+1);
  };
  return (
    <div style={{textAlign:"center",marginTop:"50px"}}>
      <h2>Count:{count}</h2>
      <button onClick={handleClick}>Increase Count</button>
    </div>
  );
}
export default Counter;