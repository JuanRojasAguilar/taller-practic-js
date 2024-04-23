const empiezanConA = (stringArr) => {
  return stringArr.filter((item) => {
    if (item[0].toLowerCase() == "a") {
      return item;
    }
  })
}

console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"]));
console.log(empiezanConA(["beta", "delta", "gama"]));
console.log(empiezanConA([]));

