export{}

function showConcatname(f) {
  const result = f("田中", "太郎");
  console.log(result);
}

const func = function(lastName: string, firstName: string): string {
  return `${lastName} ${firstName}`;
}

showConcatname(func);