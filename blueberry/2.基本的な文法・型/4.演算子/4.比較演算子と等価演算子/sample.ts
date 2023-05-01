// 比較演算子
const left1 = -5, right1 = 0;
console.log(left1 < right1);

const left2 = 100n, right2 = 50n;
console.log(left2 >= right2);

const left3 = -10, right3 = 0
console.log(left3 > right3);

const left4 = 12n, right4 = 8n;
console.log(left4 <= right4);


// 文字列でも使用可能
console.log("apple" < "orange");

// 一致判定の例
const left: number = 1;
const right: number = 2;

console.log(left === right);
console.log(left !== right);


// 使用例
import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('パスワードを入力してください: ', (password) => {
  if (password === 'hogehoge') {
    console.log('ようこそ');
  } else {
    console.log('誰？');
  }
  rl.close();
})

// == と===の違う
const str: any = "3";

console.log(str == 3);
console.log(str === 3);