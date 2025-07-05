console.log("One");
console.log("Two");
setTimeout(() => {
  console.log("Waited..."); // This runs later
}, 1000);
console.log("End");