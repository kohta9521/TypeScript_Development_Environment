export{}

class Student {
  name: string = "";
  english: number = 0;
  math: number = 0;
  japanese: number = 0;
}

const taro = new Student();
console.log(taro);

taro.name = "宮本太郎";
taro.english = 78;
taro.math = 82;
taro.japanese = 84;
console.log(taro);

const hanako = new Student();
console.log(hanako);
hanako.name = "松下はなこ";
console.log(hanako);
hanako.english = 98;
hanako.math = 98;
console.log(hanako);
