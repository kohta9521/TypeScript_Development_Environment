export{}

function showSigma2N(n: number) {
    let ans = 0;
    for(let i = 1; i <= n; i ++) {
        ans += i;
    }
    console.log(`結果: ${ans}`);
}

let num = 100;
showSigma2N(num);