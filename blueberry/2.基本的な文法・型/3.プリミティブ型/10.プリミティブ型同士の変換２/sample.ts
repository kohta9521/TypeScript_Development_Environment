// プリミティブ型同士の変換
// 明示的な変換
// Number関数の利用
import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('数値を入力してください: ', (line) => {
  const num = Number(line);
  console.log(num + 3);
  rl.close();
});