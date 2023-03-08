function checkIfPrime(number) {
  let isPrime = true;
  for (let i = 2; i < Math.sqrt(number); i++) {
    if (number % i == 0 && number != 1) isPrime = false;
  }
  console.log(isPrime);
}

checkIfPrime(13);
