function isArmstrongNumber(number) {
  let num = number;
  let temp = number;
  let count = 0;
  let sum = 0;

  while (temp != 0) {
    temp = parseInt(temp / 10);
    count++;
  }

  while (num != 0) {
    let remainder = parseInt(num % 10);
    sum += Math.pow(remainder, count);
    num = parseInt(num / 10);
  }

  if (sum === number) console.log("Armstrong");
  else console.log("Not Armstrong");
}

isArmstrongNumber(153);
