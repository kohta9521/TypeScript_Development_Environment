// ネストしているパターン
const nested = {
  num: 123,
  obj: {
    foo: "Hello",
    bar: "world"
  }
}

const { num, obj: { foo }} = nested;

console.log(num);
console.log(foo);