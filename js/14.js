const max = (numberArr) => {
  return numberArr.reduce((a, b) => { return Math.max(a, b) })
}

console.log(max([3, 9, 6]));
console.log(max([67, 35, 54, 26]));
console.log(max([5, 9, 2, 4, 5, 7]));

