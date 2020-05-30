/******** without methods ************/

/** helper function to find maximum element **/
const maxElem = (array) => {
    let maxElem = array[0];
    for (let i = 1; i < array.length; i++) {
        if (maxElem < array[i]) {
            maxElem = array[i];
        }
    }
    return maxElem;
};

const adjacentElementsProduct = (inputArray) => {
    let largestProd = [];
    for (let i = 0; i < inputArray.length - 1; i++) {
        largestProd[i] = inputArray[i] * inputArray[i + 1];
    }
    return maxElem(largestProd);
};

adjacentElementsProduct([5, 6, -4, 2, 10, 2, 23]);


/****** with methods************/
// const adjacentElementsProduct = (inputArray) => {
//     let arr = [];
//     for (let i = 1; i < inputArray.length; i++) {
//         arr.push(inputArray[i] * inputArray[i - 1]);
//     }
//     function compareNum(a, b) {
//         return a - b;
//     }
//     arr.sort(compareNum).reverse();
//     return arr[0];
// };
//
// adjacentElementsProduct([5, 6, -4, 2, 3, 2, -23]);



