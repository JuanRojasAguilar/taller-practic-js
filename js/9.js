const sumarArreglo = (numberArr) => {
  try {
    return numberArr.reduce((a, b) => a + b);
  } catch {
    return 0;
  }
}

console.log(sumarArreglo([3, 1, 2]))
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7 ,8 , 9, 10]))
console.log(sumarArreglo([]))

