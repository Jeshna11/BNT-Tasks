import React from "react";
function NameList() {
  const names = ["John", "Jane", "Alex"];
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>List of Names</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {names.map((name, index) => (
          <li key={index} style={{ marginBottom: "8px" }}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default NameList;