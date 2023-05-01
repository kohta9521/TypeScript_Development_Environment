// 条件演算子
import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdin
});

rl.question('数値を入力してください: ', (line) => {
  const num = Number(line);
  const message = 0 <= num && num < 100
    ? `${line}は0以上100未満です`
    : `${line}は0以上100未満ではありません`;
    console.log(message);
    rl.close();
})