const Clasificaciones = {
  BAJO: "Bajo de peso",
  NORMAL: "Normal",
  SOBREPESO: "Sobrepeso",
  OBESO: "Obeso"
}

const bmi = (peso, altura) => {
  // calculamos y clasificamos
  const imc = peso / altura**2;

  const pesoPluma = 0 < imc && imc < 18.5;
  const pesoNormal = 18.5 < imc && imc <= 24.9;
  const pesoSobrePeso = 25 <= imc && imc < 30;
  const pesoObeso = 30 <= imc && imc < 100;

  // Validamos y retornamos;
  if (pesoPluma) { return Clasificaciones.BAJO; }
  else if (pesoNormal) { return Clasificaciones.NORMAL }
  else if (pesoSobrePeso) { return Clasificaciones.SOBREPESO }
  else if (pesoObeso) { return Clasificaciones.OBESO }
}

console.log(bmi(65, 1.8));
console.log(bmi(72, 1.6));

