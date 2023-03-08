function reverseNumFunc(number) {
  let num = number;
  let reverse = 0;

  while (num != 0) {
    let remainder = parseInt(num % 10);
    reverse = reverse * 10 + remainder;
    num = parseInt(num / 10);
  }

  return reverse;
}

function checkPalindrome(number) {
  let reverseNum = reverseNumFunc(number);

  if (reverseNum === number) console.log(true);
  else console.log(false);
}

checkPalindrome(1110111);
