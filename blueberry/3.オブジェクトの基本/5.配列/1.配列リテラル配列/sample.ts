// 配列リテラルで配列を作成　
const arr = [0, 123, -456 * 100];
console.log(arr);

// 配列内には複数の型を入れることが可能
const arr2 = [ 100, "文字列", false ];

// 配列でスプレッド構文を使用する
const arr3 = [4, 5, 6];
const arr4 = [1, 2, 3, ...arr3];

console.log(arr4);