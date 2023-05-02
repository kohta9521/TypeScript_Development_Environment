// for ( let i: number = 0; i <= 100; i ++) {
//   if ( i % 3 !== 1 && i % 5 !== 0) {
//     console.log(i);
//   } else if (i % 3 === 0 || i % 5 !== 0) {
//     console.log("Fizz");
//   } else if(i % 3 !== 0 || i % 5 === 0) {
//     console.log("Buzz");
//   } else if (i % 3 === 0 || i % 5 === 0) {
//     console.log("FuzzBuzz");
//   }
// }

for (let i: number = 1; i <= 100; i ++) {
  if ( i % 3 === 0 && i % 5 === 5) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if ( i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}