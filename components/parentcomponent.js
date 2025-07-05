import React from "react";
import ChildComponent from "./childcomponent";
function ParentComponent() {
  const greeting = "Good morning";
  return (
    <div>
      <h1>This is the Parent Component</h1>
      <ChildComponent message={greeting} />
    </div>
  );
}
export default ParentComponent;