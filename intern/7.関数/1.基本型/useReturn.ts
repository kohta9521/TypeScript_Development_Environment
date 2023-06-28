export{}

function sigma2N(n: number): number {
  let ans = 0;
  for (let i = 1; i <= n; i ++) {
    ans += i;
  }
  return ans;
}

const sigma100 = sigma2N(100);
const sigma150 = sigma2N(150);
const sigma200 = sigma2N(200);

console.log(sigma100);
console.log(sigma150);
console.log(sigma200);