const getSubset = (array) => {
    let result = [];
    for (let i = 0; i < array.length; i += 3) {
        result.push(array.slice(i, i+3));
    }

    return result;
};

console.log(getSubset([1,2,3,4,5,6,7]));  // [ [1,2,3] , [4,5,6] ,[7,8] ]
