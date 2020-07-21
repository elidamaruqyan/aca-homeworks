/**
 * Returns the sum of all numbers passed to the function.
 * @param {...number} num - A positive or negative number.
 */

const getOneDigit = (num) => {
    let stringifiedNumber = num.toString().split("");

    let sum = stringifiedNumber.reduce((acc, item) => {
        acc += parseInt(item);
        console.log(acc);
        return acc;
    }, 0);
    return sum >= 10 ? getOneDigit(sum) : sum;
};

getOneDigit(14); //5
getOneDigit(29); //2
getOneDigit(999999999999); //9


// algorithm to get one digit
function digital_root(n) {
    return (n - 1) % 9 + 1;
}

// digital_root(14);
// digital_root(29);
// digital_root(999999999999);