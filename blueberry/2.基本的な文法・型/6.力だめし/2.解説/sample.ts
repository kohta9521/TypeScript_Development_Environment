let result = "";

for (let i = 1; i <= 100; i ++) {
  if ( i < 1) {
    result += " ";
  }
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  }
}