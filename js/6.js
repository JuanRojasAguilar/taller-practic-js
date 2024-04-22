const likes = (number) => {
  let newNumber = 0;
  const isMoreThanThousand = number > 1000;
  const isMoreThanMillion = number > 1000000;
  if (isMoreThanMillion) {
    newNumber = Math.floor(number / 1000000);
    return `${newNumber}M`;
  } else if (isMoreThanThousand) {
    newNumber = Math.floor(number / 1000);
    return `${newNumber}K`;
  }
}

console.log(likes(983));
console.log(likes(1983));
console.log(likes(54000));
console.log(likes(120800));

