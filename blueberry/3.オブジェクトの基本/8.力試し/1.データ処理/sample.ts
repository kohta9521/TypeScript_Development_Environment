// データ処理
type User = {
  name: string;
  age: number;
  premiumUser: boolean;
}

const data: string = `
  uhyo,26,1
  John Smith,17,0
  Mary,14,1
`;

// この部分から
const users: User[] = []; // 空の配列として定義

const lines = data.split("\n"); // splitメソッド使用して改行部分で分けlinesに代入
for (const line of lines) { // 1行ずつ処理をするためfor-ofを使用
  if (line === "") { // 空文字が渡された場合にはcontinueをするため初めに除外
    continue;
  }
  const [name, ageString, premiumUserString] = line.split(","); // splitメソッドを用いて分割代入している
  const age = Number(ageString); // Number型へ変換している　Number関数を使用
  const premiumUser = premiumUserString === "1"; // trueかfalseかが定数へ代入される

  users.push({
    name,
    age,
    premiumUser
  });
}


for (const user of users) {
  if (user.premiumUser) {
    console.log(`${user.name} (${user.age})はプレミアムユーザーです。`);
  } else {
    console.log(`${user.name}(${user.age})はプレミアムユーザーではありません。`);
  }
}