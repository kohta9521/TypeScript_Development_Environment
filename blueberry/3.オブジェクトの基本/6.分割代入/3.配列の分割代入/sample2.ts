// 空白を用いて要素をスキップできる
const arr = [1, 2, 3, 4, 5, 6];

const [, foo, , bar, , baz] = arr;
console.log(foo);
console.log(bar);
console.log(baz);
