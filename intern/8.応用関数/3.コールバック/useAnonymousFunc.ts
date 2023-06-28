export{}

const numList = [45.23, 78.232, 66.234, 12.34, 29.234];

numList.forEach(
  (currentValue: number, index: number, array: number[]) => {
    const roundedeElement = Math.round(currentValue);
    console.log(`${index + 1}個目の要素${currentValue}の丸め処理後: ${roundedeElement}`);
  }
);