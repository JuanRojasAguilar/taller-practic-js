const removerCeros = (numberArr) => {
  try {
    return numberArr.filter((number) => number != 0);
  } catch (error) {
    return [];
  }
}

console.log(removerCeros([0, 1, 0, 2, 0, 3]));
console.log(removerCeros([9, 3, 6, 4]));
console.log(removerCeros([0, 0 , 0]));

