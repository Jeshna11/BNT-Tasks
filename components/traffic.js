// import React, { useEffect, useState, useRef } from "react";

// const TrafficLight = () => {
//   const [light, setLight] = useState("green");
//   const timerRef = useRef(null);

//   const intervals = {
//     green: 10000, // 10 seconds
//     yellow: 5000, // 5 seconds
//     red: 5000, // 5 seconds
//   };

//   const nextLight = {
//     green: "yellow",
//     yellow: "red",
//     red: "green",
//   };

//   const startCycle = (current) => {
//     clearTimeout(timerRef.current);
//     timerRef.current = setTimeout(() => {
//       const next = nextLight[current];
//       setLight(next);
//       startCycle(next);
//     }, intervals[current]);
//   };

//   useEffect(() => {
//     startCycle(light);
//     return () => clearTimeout(timerRef.current);
//     // eslint-disable-next-line
//   }, []);

//   const handleManualChange = (color) => {
//     setLight(color);
//     startCycle(color);
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <div style={{ display: "inline-block", padding: 20, border: "2px solid black", borderRadius: "10px", background: "#222" }}>
//         <div style={{ width: 60, height: 60, borderRadius: "50%", margin: "10px auto", background: light === "red" ? "red" : "#550000" }} />
//         <div style={{ width: 60, height: 60, borderRadius: "50%", margin: "10px auto", background: light === "yellow" ? "yellow" : "#555500" }} />
//         <div style={{ width: 60, height: 60, borderRadius: "50%", margin: "10px auto", background: light === "green" ? "green" : "#005500" }} />
//       </div>

//       <div style={{ marginTop: "30px" }}>
//         <button onClick={() => handleManualChange("green")} style={{ margin: 5 }}>Green</button>
//         <button onClick={() => handleManualChange("yellow")} style={{ margin: 5 }}>Yellow</button>
//         <button onClick={() => handleManualChange("red")} style={{ margin: 5 }}>Red</button>
//       </div>
//     </div>
//   );
// };

// export default TrafficLight;
// import React, { useEffect, useState, useRef } from "react";

// const TrafficLight = () => {
//   const [light, setLight] = useState("green");
//   const timerRef = useRef(null);

//   const intervals = {
//     green: 10000, // 10 seconds
//     yellow: 5000, // 5 seconds
//     red: 5000, // 5 seconds
//   };

//   const nextLight = {
//     green: "yellow",
//     yellow: "red",
//     red: "green",
//   };

//   const startCycle = (current) => {
//     clearTimeout(timerRef.current);
//     timerRef.current = setTimeout(() => {
//       const next = nextLight[current];
//       setLight(next);
//       startCycle(next);
//     }, intervals[current]);
//   };

//   useEffect(() => {
//     startCycle(light);
//     return () => clearTimeout(timerRef.current);
//     // eslint-disable-next-line
//   }, []);

//   const handleManualChange = (color) => {
//     setLight(color);
//     startCycle(color);
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <div style={{ display: "inline-block", padding: 20, border: "2px solid black", borderRadius: "10px", background: "#222" }}>
//         <div style={{ width: 60, height: 60, borderRadius: "50%", margin: "10px auto", background: light === "red" ? "red" : "#550000" }} />
//         <div style={{ width: 60, height: 60, borderRadius: "50%", margin: "10px auto", background: light === "yellow" ? "yellow" : "#555500" }} />
//         <div style={{ width: 60, height: 60, borderRadius: "50%", margin: "10px auto", background: light === "green" ? "green" : "#005500" }} />
//       </div>

//       <div style={{ marginTop: "30px" }}>
//         <button onClick={() => handleManualChange("green")} style={{ margin: 5 }}>Green</button>
//         <button onClick={() => handleManualChange("yellow")} style={{ margin: 5 }}>Yellow</button>
//         <button onClick={() => handleManualChange("red")} style={{ margin: 5 }}>Red</button>
//       </div>
//     </div>
//   );
// };

// export default TrafficLight;
