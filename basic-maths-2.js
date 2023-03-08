/* reverse a number */

function reverseANumberFirst(number) {
  let reverse = parseInt(number.toString().split("").reverse().join(""));
  console.log(reverse);
}

reverseANumberFirst(8709876);

/* ******************************* */

function reverseANumberSecond(number) {
  let num = number;
  let reverse = 0;

  while (num != 0) {
    let remainder = parseInt(num % 10);
    reverse = reverse * 10 + remainder;
    num = parseInt(num / 10);
  }

  console.log(reverse);
}

reverseANumberSecond(8709876);
