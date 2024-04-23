const password = (originalString) => {
  let res = [];
  for (let i = 0; i < originalString.length; ++i) {
    const letra = originalString[i].toLowerCase();
    switch (letra) {
      case 'a':
        res.push('4');
        break;
      case 'e':
        res.push('3');
        break;
      case 'i':
        res.push('1');
        break;
      case "o":
        res.push('0');
        break;
      case ' ':
        continue;
      default:
        res.push(letra);
        break;
    }
  }
  return res.join('');
}

console.log(password("hola"));
console.log(password("esta es una prueba"));
console.log(password(""));

