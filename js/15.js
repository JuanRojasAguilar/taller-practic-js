const pares = (numberArr) => {
  return numberArr.filter(number => { return number % 2 === 0 });
}

console.log(pares([1, 2, 3, 4, 5, 6]));
console.log([])

