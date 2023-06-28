export{}

class Student {
  name: string = "";
  english: number = 0;
  math: number  = 0;
  japanes: number = 0;
}

function showScoresSum(student: Student) {
  const sum  = student.english + student.math + student.japanes;
  console.log(`${student.name}の合計得点: ${sum}`);
}


const taro = new Student();
taro.name = "宮本太郎";
taro.english = 78;
taro.math = 92;
taro.japanes = 99;

showScoresSum(taro);
// 宮本太郎の合計得点: 359