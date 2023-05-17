// 返り値がない関数を作る
function helloWorldNTimes(n: number): void {
  for (let i = 0; i < n; i ++) {
    console.log('Hello, World!');
  }
}

helloWorldNTimes(5);