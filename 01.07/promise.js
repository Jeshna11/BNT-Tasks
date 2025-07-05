function checkPaymentStatus(status) {
  return new Promise((resolve, reject) => {
    console.log("Checking payment...");
    setTimeout(() => {
      if (status =="success") {
        resolve("Payment Successful!");
      } else if (status =="fail") {
        reject("Payment Failed.");
      } else {
        reject("Unknown payment status.");
      }
    }, 2000);
  });
}
// 1. Call the function with a known status
let paymentPromise = checkPaymentStatus("");
// 2. Handle result
paymentPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });