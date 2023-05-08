// 正規表現オブジェクトの基本
const r = /ab+c/;

console.log(r.test("abbbc"));
console.log(r.test("Hello abc, world!!"));
console.log(r.test("ABC"));
console.log(r.test("こんにちは"));

// const a = /^abc/;
// console.log(a.test("abcdefg"));
// console.log(a.test("Hello, abcdefg"));