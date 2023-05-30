var num: number = 3;

var name: string = "田中";

var isLock: boolean = false;

var sample: any = 'テスト';

// 関数
function sample(name: string): void {

}

function sample2(name: string): number {
  return 0;
}

class Person {
  constructor(private name: string, age: number) {
    // 処理
  }
  public run(speed: number):  void {
    // 処理
  }
}

// 型エイリアス
type str = string;
var name: str = "田中";


// 複数の型エイリアス
type Person2 = { name: string, age: number};
var p: Person2 = {
  name: "田中",
  age: 25,
}