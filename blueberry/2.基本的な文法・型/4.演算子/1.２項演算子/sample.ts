// 算術演算子
const addResult = 1024 + 314 + 500;
console.log(addResult);

const discounted = addResult * 0.7;
console.log(discounted);

const sqrt2 = 2 ** 0.5;
console.log(sqrt2);
console.log(sqrt2 - 1);

console.log(18 / 12);
console.log(18n / 12n);
console.log(18 % 12);
console.log(18n % 12n);

const res1 = 5 - 1.86;
const res2 = 2n ** 5n;

console.log(res1, res2);

const str: string = '123';
// console.log(123 * str);


// 算術演算子の優先順位
console.log(5 - 3- 1);
console.log((5 - 3) - 1);
console.log(5 - (3 - 1));