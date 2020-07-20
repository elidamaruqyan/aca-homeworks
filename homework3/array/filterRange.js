/********** Tip 1*************/
const filterRange = (filteredArray, rangeFirstElem, rangeLastElem) => {
    let finalFilteredArray = [];
    for (let i = 0; i < filteredArray.length; i++) {
        if (rangeFirstElem < filteredArray[i] && filteredArray[i] <= rangeLastElem)
            finalFilteredArray.push(filteredArray[i]);
    }
    return finalFilteredArray;
};

/********** Tip 2*************/
const filterRange = (filteredArray, rangeFirstElem, rangeLastElem) => {
    return filteredArray.filter(
        (item) => rangeFirstElem <= item && item <= rangeLastElem
    );
};

console.log(filterRange([1, 10, 20, 30], 9, 23)); // [10, 20]
console.log(filterRange([100, 200, 300], 9, 23)); // []
console.log(filterRange([-10, -8, 0, 10, 20], -100, 15)); //[-10, -8, 0, 10]
