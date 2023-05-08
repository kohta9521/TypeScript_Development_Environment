// コールバック関数
type User2 = {
  name: string;
  age: number;
};

const getName = (u: User2): string => u.name;
const users2: User2[] = [
  { name: "John Smith", age: 16 },
  { name: "Kohta", age: 29 }
];

const names = users2.map(getName);
console.log(names);