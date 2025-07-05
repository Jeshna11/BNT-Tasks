function greet(name, callback) {
  callback(name);
}
greet("Jeshna", function(n) {
  console.log("Hello " + n);
});