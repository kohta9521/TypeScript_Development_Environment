// アロー関数の省略
// 通常の書き方
const calcBMI2 = ({
  height, weight
}: Human): number => {
  return weight / height ** 2;
};

// 省略した書き方
const calcBMI3 = ({
  height, weight
}: Human): number => weight / height ** 2;