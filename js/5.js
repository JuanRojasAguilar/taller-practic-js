const contarRango = (n1, n2) => {
  let counter = 0;
  for(n1; n1 < n2; ++n1) {
    counter++;
  }
  return counter - 1;
}

console.log(contarRango(1,9));
console.log(contarRango(1332,8743));
console.log(contarRango(5, 6));

