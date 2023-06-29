export{}

class Student {
  _name: string = "";
  _english: number = 0;
  _math: number = 0;
  _japanese: number = 0;

  constructor(name: string, english: number, math: number, japanese: number) {
    this._name  = name;
    this._english = english;
    this._math = math;
    this._japanese = japanese;
  }

  showScoresSum() {
    const sum = this._english + this._math + this._japanese;
    console.log(`The total score is ${sum}`);
  }

  set english(value: number) {
    if (value < 0) {
      value = 0;
    }
    this._english = value;
  }
}

const taro = new Student("宮本太郎", 78, 82, 85);
taro.showScoresSum();
taro.english = -20;
console.log(taro);