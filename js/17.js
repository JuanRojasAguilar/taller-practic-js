const posiciones = (numberArr) => {
  let indexes = [];
  numberArr.find((number, index) => {
    if (number % 2 === 0) {
      indexes.push(index);
    }
  })
  return indexes;
}

console.log(posiciones([1, 2, 3, 4, 5, 6]));
console.log(posiciones([]));

