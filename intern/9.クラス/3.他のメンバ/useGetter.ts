export{}

class Student {

  name: string = "";
  english: number = 0;
  math: number = 0;
  japanes: number = 0;

  constructor(name: string, english: number, math: number, japanes: number) {
    this.name = name;
    this.english = english;
    this.math = math;
    this.japanes = japanes;
  }

  showScoresSum() {
    console.log(`${this.name}の合計得点は${this.total}`);
  }

  showScoresAvg() {
    const avg = Math.round(this.total / 3 *10) / 10;
    console.log(`${this.name}の平均点は${avg}です。`);
  }

  get total(): number {
    return this.english + this.math + this.japanes;
}
}

const taro = new Student("宮本太郎", 78, 82, 85);
taro.showScoresSum();
taro.showScoresAvg();
console.log(`合計値: ${taro.total}`);