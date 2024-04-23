const multiplicarArreglo = (numberArr) => {
  try {
    return numberArr.reduce((a, b) => a * b)
  } catch {
    return 1;
  }
}

console.log(multiplicarArreglo([4, 1, 2, 3]));
console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(multiplicarArreglo([]));

