// 正規表現のを使用する方法 
// replace
console.log("Hello, abbbbbbbc world! abbc".replace(/ab+c/, "foobar"));

console.log("Hello, abbbbbbbc world! abbc".replace(/ab+c/g, "foobar"));

// mach
const result = "Hello, abbbbbbc world! abc".match(/a(b+)c/);

if (result !== null) {
  console.log(result[0]);
  console.log(result[1]);
}