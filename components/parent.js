import React from "react";
import Child from "./child";

function Parent(props) {
  return (
    <div>
      <h2>Parent Component</h2>
      <Child message={props.message} />
    </div>
  );
}

export default Parent;
