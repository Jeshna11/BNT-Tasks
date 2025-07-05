let a = 6;
if (a <= 1) {
  console.log("not a prime number");
}
for (i = 2; i < a; i++) {
  if (a % i == 0) {
    console.log("not a prime number");
    break;
  } else {
    console.log("prime number");
    break;
  }
}
