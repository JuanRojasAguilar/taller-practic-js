const sumarRango = (numeroInicial, numeroFinal) => {
  let res = 0;
  for(numeroInicial; numeroInicial = numeroFinal; numeroInicial++) {
    res += numeroInicial
  }
  return res;
}

console.log(sumarRango(0, 10));
console.log(sumarRango(12, 14));
console.log(sumarRango(5, 5));

