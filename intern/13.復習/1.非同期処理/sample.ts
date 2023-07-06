const test = new Promise((resolve, reject) => {
  // resolve関数、もしくはreject関数を記載
  resolve(200);
});

const test2 = new Promise((resolve, reject) => {
  reject(new Error("this is error"));
});

test.then((res) => {
  console.log('success', res);
});
test2.catch((err) => {
  console.log('error', err.message);
})

