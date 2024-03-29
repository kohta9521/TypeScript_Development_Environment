export{}

class Student {
  name: string = "";
  english: number = 0;
  math: number = 0;
  japanes: number = 0;

  constructor(name: string, english: number, math: number, japanese: number) {
    this.name = name;
    this.english = english;
    this.math = math;
    this.japanes = japanese;
  }

  showScoresSum() {
    const sum = this.english + this.math + this.japanes;
    console.log(`${this.name}の合計得点は${sum}`);
  }

  showScoresAvg() {
    const sum = this.english + this.math + this.japanes;
    const avg = Math.round(sum / 3 * 10) / 10;
    console.log(`${this.name}の平均点は${avg}です。`);
  }
}

const taro = new Student("宮本太郎", 78, 82, 85);
taro.showScoresSum();
taro.showScoresAvg();