class ItemAttr<T>{
  name string;
  attr: T;

  constructor(name: string, attr: T) {
    this.name = name;
    this.attr = attr;
  }

  getAttribute(): T {
    return this.attr;
  }
}