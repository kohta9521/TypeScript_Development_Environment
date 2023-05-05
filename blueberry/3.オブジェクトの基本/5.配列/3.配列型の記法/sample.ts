// 配列型の記法
const arr: number[] = [1, 10, 100];


// 組み込みのジェネリック型
const arr1: boolean[] = [false, true];

const arr2: Array<{
  name: string;
}> = [
  { name: '田中' },
  { name: '鈴木'},
  { name: '佐藤'},
];

// ユニオン型を使用して複数の方を含む配列を作成する方法
const arr6 = [1, 20, 300];
const arr7 = [100, '文字列', false];

