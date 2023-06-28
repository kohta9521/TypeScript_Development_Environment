export{}

class Student {
  name: string = "";
  english: number = 0;
  math: number  = 0;
  japanes: number = 0;


  showScoresSum() {
    const sum = this.english + this.math + this.japanes;
    console.log(`${this.name}の合計得点は${sum}`);
  }
}

const taro = new Student();
taro.name = "宮本太郎";
taro.english = 78;
taro.math = 92;
taro.japanes = 99;

taro.showScoresSum();