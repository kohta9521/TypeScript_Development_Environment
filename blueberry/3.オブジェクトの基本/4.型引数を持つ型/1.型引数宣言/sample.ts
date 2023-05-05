// 型引数を持つ型を宣言する
type user<T> = {
  name: string;
  child: T;
}

type Family<Parent, Child> = {
  mother: Parent;
  father: Parent;
  child: Child;
};

// 型引数を持つ型はジェネリック型と呼ばれる