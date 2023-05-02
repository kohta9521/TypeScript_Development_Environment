// プロパティ名の指定方法

const propName = "sample";

const obj = {
  "foo": 123,
  "foo bar": -500,
  '↑↓→←': "",
  1: "one",
  2: "two point five",
  [propName]: 125
};

console.log(obj.foo);
console.log(obj["foo bar"]);
console.log(obj.sample);