function GCDFirst(number1, number2) {
  let result;
  for (let i = 1; i <= Math.min(number1, number2); i++) {
    if (number1 % i == 0 && number2 % i == 0) result = i;
  }

  console.log(result);
}

GCDFirst(60, 90);

/* ***************************** */

function GCDSecond(number1, number2) {
  function GCDRecursion(number1, number2) {
    if (number2 == 0) return number1;

    return GCDRecursion(number2, number1 % number2);
  }

  let gcd = GCDRecursion(number1, number2);
  console.log(gcd);
}

GCDSecond(60, 90);
