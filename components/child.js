import React from "react";
function Child(props) {
  return (
    <div>
      <h3>Child Component</h3>
      <p>Message: {props.message}</p>
    </div>
  );
}
export default Child;