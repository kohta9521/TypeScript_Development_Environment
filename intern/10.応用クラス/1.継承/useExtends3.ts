export{}

class Greetings {
  protected name: string = "";

    // コンストラクタ
    constructor(name: string) {
      this.name = name;
    }
    // 「こんにちは」と表示するメソッド
    sayHello() {
      console.log(`${this.name}さん、こんにちは。`);
    }
}

class MyDo extends Greetings {
  sayHelo() {
    console.log(`${this,name}さん、毎度！！`);
  }
}

const jiro = new MyDo("kohta");
jiro.sayHello();