// オブジェクトリテラル
const sample = {
  foo: 555,
  bar: "文字列"
};

let input;

const user = {
  name: input ? input : "名無し",
  age: 20
}

// const name = input ? input : "名無し";
const sample2 = {
  name,
  age: 20,
};