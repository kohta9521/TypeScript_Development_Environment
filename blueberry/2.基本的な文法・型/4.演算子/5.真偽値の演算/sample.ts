// 論理演算子
const t = true, f = false;

console.log(t && t);
console.log(t &&f);
console.log(f && f);

console.log(t || t);
console.log(t || f);
console.log(f || f);


import { create } from "domain";
// sample program
import { createInterface } from "readline";

const rl =  createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('数値を入力してください',  (line) => {
  const num = Number(line);

  if (0 <= num && num < 100) {
    console.log(`${num}は０以上１００以下です`);
  } else {
    console.log(`${num}は０以上１００未満ではありません`);
  }
  rl.close();
})

// 真偽値の利用
// if (!Number.isNaN(num)) {
//   console.log(num, "はNaNではありません。");q
// }