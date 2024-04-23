const transcribirAdn = (adnSequence) => {
  let res = [];
  for (let i = 0; i < adnSequence.toUpperCase().length; ++i) {
    const letra = adnSequence[i].toUpperCase();
    switch (letra) {
      case 'G':
        res.push('C');
        break;
      case 'C':
        res.push('G');
        break;
      case 'T':
        res.push('A');
        break;
      case 'A':
        res.push('U');
      default:
        continue;
    }
  }
  return res;
}

console.log(transcribirAdn("ACGT"));
console.log(transcribirAdn("ACGTGGTCTTAA"));

