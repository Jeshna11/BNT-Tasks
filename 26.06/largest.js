let b = [3, 6, 2, 9, 1];
let b1 = b[0];
for (let i = 1; i < b.length; i++) {
  if (b[i] > b1) {
    b1 = b[i];
  }
}
console.log(b1);
