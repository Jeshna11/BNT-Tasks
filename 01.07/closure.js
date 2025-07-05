function outer(){
  let count = 2;
  return function inner() {
    count++;
    console.log(count);
  }
}
const counter = outer();
counter(); // 1
counter(); // 2