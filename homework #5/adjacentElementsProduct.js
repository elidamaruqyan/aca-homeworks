const adjacentElementsProduct = (inputArray) => {
    let arr = [];
    for (let i = 1; i < inputArray.length; i++) {
        arr.push(inputArray[i] * inputArray[i - 1]);
    }
    function compareNum(a, b) {
        return a - b;
    }
    arr.sort(compareNum).reverse();
    return arr[0];
};

adjacentElementsProduct([5, 6, -4, 2, 3, 2, -23]);
