// 返り値の型注釈は省略可能
const xRepeat2 = (num: number) => "x".repeat(num);

const g = (num: number) => {
  for (let i = 0; i < num; i ++) {
    console.log("Hello world");
  }
}