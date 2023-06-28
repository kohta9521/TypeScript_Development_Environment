export{}

function sumScores(...scores: number[]): number {
  let total = 0;
  for (const score of scores) {
    total += score;
  }
  return total;
}

const total = sumScores(10, 9, 9, 10, 8, 9);
console.log(`６人の審査員の合計点: ${total}`);

const total4 = sumScores(10, 9, 8, 9);
console.log(`４人の審査員の合計点: ${total4}`);