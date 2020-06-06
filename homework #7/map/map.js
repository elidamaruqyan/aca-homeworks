const map = (array, callBack) => {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callBack(array[i], i, array));
    }
    return result;
};


map([1, 2, 3], item => item ** 2); // [1, 4, 9]