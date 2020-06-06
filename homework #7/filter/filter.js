const filter = (array, callBack) => {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (callBack(array[i], i, array)) {
            result.push(array[i]);
        }
    }
    return result;
};


filter([1, 2, 3, 4, 5], item => item >= 3); // [3, 4, 5]
