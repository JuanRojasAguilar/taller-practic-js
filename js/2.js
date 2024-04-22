const calcularImpuestos = (edad, ingresos) => {
  let impuestos;
  const esMayorDeEdad = edad >= 18 ? true : false;
  const ingresosSuficientes = ingresos >= 1000 ? true : false;

  if (!esMayorDeEdad || !ingresosSuficientes) {
    impuestos = 0;
  } else {
    impuestos = ingresos * 0.4;
  }
  return impuestos;
}

console.log(calcularImpuestos(18, 1000));
console.log(calcularImpuestos(40, 10000));
console.log(calcularImpuestos(17, 5000));
console.log(calcularImpuestos(30, 500));

