const capitalizar = (frase) => {
  if (frase[0] != null) {
    const primerLetraMayus = frase[0].toUpperCase();
    const res = primerLetraMayus + frase.substring(1);
    return res;
  } else { return "" }
};

console.log(capitalizar("pedro"));
console.log(capitalizar("hola mundo"));
console.log(capitalizar(""));

