function printAllDivisorsFirst(number) {
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) console.log(i);
  }
}

printAllDivisorsFirst(60);

/* ************************************ */

function printAllDivisorsSecond(number) {
  for (let i = 1; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      console.log(i);
      if (i != number / i) console.log(number / i);
    }
  }
}

printAllDivisorsSecond(60);
