const checkPalindrome = (inputString) => {
    let re = /[\W_]/g;
    let lowRegStr = inputString.toLowerCase().replace(re, "");
    let reverseStr = lowRegStr.split("").reverse().join("");
    return reverseStr === lowRegStr;
    console.log(re);
};

checkPalindrome("aba");
