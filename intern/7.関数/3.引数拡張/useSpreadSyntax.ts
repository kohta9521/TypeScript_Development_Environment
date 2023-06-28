export{}

function concatName(lastName: string, middleName: string, firstName: string): string {
  return `${lastName} / ${middleName} / ${firstName}`;
}

const name1 = concatName("田中", "ダニエル", "健三");
console.log(`試合結果: ${name1}`);