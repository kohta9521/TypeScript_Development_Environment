// プリミティブ型の変換

import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('文字列を入力してください: ', (line) => {
  // 文字列が入力されると以下のコードが実行される
  console.log(`${line}が入力されました。`);
  rl.close();
});

rl.question('数値を入力してください; ', (line) => {
  // 型推論の機能　typescript
  const result = line + 1000;
  console.log(result);
  rl.close();
})