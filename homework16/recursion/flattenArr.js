/**
 * Returns the flattened array
 *@param {Array}  arr of nested arrays.
 */


const flattenArr = (arr, res=[]) => {
    arr.forEach((item) => (
        Array.isArray(item)) ? flattenArr(item, res) : res.push(item)
    );
    return res
};

console.log(flattenArr([1, [3, 4, [1, 2]], 10])); //[1, 3, 4, 1, 2, 10]
console.log(flattenArr([14, [1, [[[3, []]], 1], 0]])); //[14, 1, 3, 1, 0]