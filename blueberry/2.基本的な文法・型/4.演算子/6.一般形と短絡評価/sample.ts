// 短縮評価
const input1 = "123", input2 = "";

const input1isNutEmpty = !!input1;
console.log(input1isNutEmpty);

const input2isNotEmpty = !!input2;
console.log(input2isNotEmpty);


// 短絡評価？？
const secret = process.env.SECRET ?? "default";
console.log(`secretは${secret}です。`);

