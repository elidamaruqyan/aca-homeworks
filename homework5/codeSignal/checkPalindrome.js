// const checkPalindrome = (inputString) => {
//     let re = /[\W_]/g;
//     let lowRegStr = inputString.toLowerCase().replace(re, "");
//     let reverseStr = lowRegStr.split("").reverse().join("");
//     return reverseStr === lowRegStr;
// };

const checkPalindrome = (inputString) => {
    const reversed = inputString.split('').reverse().join('');

    return reversed === inputString
};

checkPalindrome("aba");
