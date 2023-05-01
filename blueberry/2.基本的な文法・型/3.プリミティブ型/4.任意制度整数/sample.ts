// BigInt型
// 任意制度の整数を表せるプリミティブ

const bignum: bigint = (123n + 456n) * 2n;
console.log(bignum); // 1158n


// 小数は扱えないので小数が出てくると丸め込まれる
const result = 5n / 2n;
console.log(result); // 2n

// erorrを出力
// const wrong = 100n + 50;