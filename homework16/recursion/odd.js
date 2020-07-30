/**
 * Returns the odd or not of all numbers passed to the function.
 * @param {...number} numbers - A positive or negative number.
 */

let num = 5555;
let arr = num.toString().split("");

const isOdd = (numbers, result) => {
  if (!numbers.length) return result;
  if (numbers[0] % 2 === 0) return false;
  return isOdd(numbers.slice(1), true);
};

console.log(isOdd(arr));

//@ToDo
const oddNumber = (n) => {
  let arr = n.toString().split("");
  [first, ...rest] = arr;

  if (!n.length) {
    return false;
  }

  if (first % 2 === 0) {
    return false;
  }

  return oddNumber(rest.slice(1));
};

console.log(oddNumber(123456)); // false
console.log(oddNumber(778)); // true

//during classwork
const isOdd = (num) => num % 2 !== 0;

const isNumbersOdd = (n) => {
  const stringifiedNumber = n + "";
  const firstLetter = stringifiedNumber.substr(0, 1);
  const restLetters = stringifiedNumber.substr(1);

  console.log(firstLetter);

  if (n.length === 0) {
    return true;
  }

  if (!isOdd(firstLetter)) {
    return false;
  }

  return isNumbersOdd(restLetters);
};

console.log(isNumbersOdd(123456)); // false
console.log(isNumbersOdd(999777)); // true
