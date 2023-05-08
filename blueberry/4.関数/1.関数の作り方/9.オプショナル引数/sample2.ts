// デフォルト値の設定
const toLowerOrUpper2 = ( str: string, upper: boolean = false ): string => {
  if (upper) {
    return str.toUpperCase();
  } else {
    return str.toLowerCase();
  }
}

console.log(toLowerOrUpper2("Hello"));
console.log(toLowerOrUpper2("Hello", false));
console.log(toLowerOrUpper2("Hello", true));