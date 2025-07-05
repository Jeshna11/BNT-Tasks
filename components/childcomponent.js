import React from 'react';
function ChildComponent(props) {
  return (
    <div>
      <h2>Message from Parent: {props.message}</h2>
    </div>
  );
}
export default ChildComponent;