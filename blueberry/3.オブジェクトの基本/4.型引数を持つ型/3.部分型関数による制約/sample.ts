// 部分的型関係による型引数の制約
type HasName = {
  name: string;
};

type Family<Parent extends HasName, Child extends HasName> = {
  mother: Parent;
  father: Parent;
  child: Child;
}