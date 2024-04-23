const numeroDeAes = (palabra) => {
  let contador = 0;
  for (let i = 0; i < palabra.toLowerCase().length; ++i) {
    if (palabra[i] === 'a') {
      ++contador;
    }
  }
  return contador;
}

console.log(numeroDeAes("abracadabra"));

