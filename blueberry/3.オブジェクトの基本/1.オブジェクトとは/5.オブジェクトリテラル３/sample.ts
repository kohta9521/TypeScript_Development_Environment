// スプレッド構文
const obj1 = {
  bar: 456,
  baz: 789
}

const obj2 = {
  foo: 123,
  ...obj1
};

console.log(obj2);


const obj3 = {
  foo: 123,
  bar: 456,
  baz: 789
};

const obj4 = {
  ...obj3,
  foo: -9999
};

console.log(obj4);