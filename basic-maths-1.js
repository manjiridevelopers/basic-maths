/* count number of digits in a number */

const testNum = 09876;

function countNumberOfDigitsFirst(number) {
  let str = number.toString();
  let numOfDigit = str.length;

  console.log("countNumberOfDigitsFirst: ", numOfDigit);
}

countNumberOfDigitsFirst(testNum);

/* ************************************ */

function countNumberOfDigitsSecond(number) {
  let num = number;
  let numOfDigit = 0;

  while (num != 0) {
    num = parseInt(num / 10);
    numOfDigit++;
  }

  console.log("countNumberOfDigitsSecond: ", numOfDigit);
}

countNumberOfDigitsSecond(testNum);

/* ************************************ */

function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}
function countNumberOfDigitsThird(number) {
  let numOfDigit = Math.ceil(getBaseLog(10, number));

  console.log("countNumberOfDigitsSecond: ", numOfDigit);
}

countNumberOfDigitsThird(testNum);
