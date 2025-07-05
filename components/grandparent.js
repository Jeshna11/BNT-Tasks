import React from 'react';
import Parent from './parent';
function GrandParent() {
  const greeting = "Hello from GrandParent";
  return (
    <div>
      <h1>GrandParent Component</h1>
      <Parent message={greeting} />
    </div>
  );
}
export default GrandParent;