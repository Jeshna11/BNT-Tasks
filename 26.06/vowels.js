let c = "Hello guys,This is me!";
let count = 0;
let vowels = "aeiouAEIOU";
for (let i = 0; i < c.length; i++) {
  if (vowels.includes(c[i])) {
    count++;
  }
}
console.log(count);
